//TODO: send email to admin after new user register
import { prisma } from "../../../common/prisma";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export default async function signup(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Method not allowed',
    });
  }

  const { firstname, email, type, password, parish_official } = req.body;

  try {
    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return res.status(409).json({
        message: 'User already exists!',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        firstname,
        email,
        type,
        parish_official,
        password: hashedPassword,
      },
      select: {
        id: true,
        firstname: true,
        email: true,
        type: true,
      },
    });

    //Send an e-mail to administrators
    if (newUser.type === 'admin') {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMPT_SECURE,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        });

        const mailOptions = {
            from: 'karimkompissi@gmail.com',
            to: ' danielseverin86@gmail.com',
            subject: 'Nouvelle Inscription',
            text: 'Un nouvel utilisateur avec le nom d\'utilisateur ${newUser.firstname} s\'est inscrit.'
        }
    
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Error sending e-mail!', err);
            } else {
                console.log('E-mail successfully sent!', info.response);
            }
        });
    }

    return res.status(201).json({
      message: 'Your account has been created successfully!',
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
}
