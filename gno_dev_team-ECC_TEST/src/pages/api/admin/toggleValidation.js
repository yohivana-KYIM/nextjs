import { prisma } from "../../../common/prisma";

export default async function toggleValidation(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed!!' });
    }

    const { id } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
            res.status(404).json({ message: 'User not found!' });
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data: { validated: !user.validated },
        });

        const result = updatedUser.validated ? 'confirmed' : 'disable';

        res.status(200).json({ message: `The account has been  ${result}` });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error!' });
    } finally {
        prisma.$disconnect();
    }
}