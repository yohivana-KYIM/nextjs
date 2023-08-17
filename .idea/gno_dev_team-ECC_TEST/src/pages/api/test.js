async function sendSignUpMail(email, firstname) {
    const transporter = await nodemailer.createTransport({
        service: 'gmail',
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
    });

    const adminEmail = await prisma.user.findUnique({
        where: { type },
    });

    if (adminEmail.type == 'admin') {
        
    }

    const message = {
        from: email,
        To: adminEmail
    }
}