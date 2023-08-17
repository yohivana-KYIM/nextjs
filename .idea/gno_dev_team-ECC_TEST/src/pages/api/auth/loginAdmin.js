import { prisma } from "../../../common/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function loginAdmin(req, res) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed', });
    }

    const { email, password } = req.body;

    try {
        const admins = await prisma.user.findUnique({
            where: { email },
        });

        if (!admins) {
            return res.status(403).json({ message: 'User does not exist!' });
        }

        if (admins.type !== 'admin') {
            return res.status(401).json({ message: 'Unauthorized!' })
        }

        //Check that the password is correct
        const validPassword = await bcrypt.compare(
            password,
            admins.password,
        );

        if (!validPassword) {
            return res.status(403).json({
                message: 'Wrong password!'
            });
        }
        
        // create auth token
        const token = jwt.sign(
            { userId: admins.id},
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        return res.status(200).json({
            message: 'Successful login',
            token,
        });
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server!' });
    } finally {
        prisma.$disconnect();
    }
}