import { prisma } from "../../../common/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function signin(req, res) {
    // check if a corrrect method
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed'
        });
    }

    const { email, password } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existingUser) {
            return res.status(403).json({
                message: 'User does not exist!',
            });
        }

        //check if the user's account has been validated
        if (existingUser.validated !== true) {
            return res.status(403).json({
                message: 'Your account has not been confirmed!',
            })
        }

        //check if account has been blocked
        if (existingUser.blocked !== true) {
            return res.status(403).json({
                message: 'Your account has been blocked!',
            });
        }

        //Check that the password is correct
        const validPassword = await bcrypt.compare(
            password,
            existingUser.password
        );

        if (!validPassword) {
            return res.status(403).json({
                message: 'Wrong password!'
            });
        }

        // create auth token
        const token = jwt.sign(
            { userId: existingUser.id },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            message: 'Successful login',
            token,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: 'Internal Server!'
        });
    } finally {
        prisma.$disconnect();
    }
}