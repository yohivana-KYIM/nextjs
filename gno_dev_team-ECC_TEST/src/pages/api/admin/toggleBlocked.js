import { prisma } from "../../../common/prisma";

export default async function toggleBlocked(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed!' });
    }

    const { id } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
            res.status(400).json({ message: 'User not found!' });
        }

        const updateUser = await prisma.user.update({
            where: { id },
            data: { blocked: !user.blocked },
        });

        const result = updateUser.blocked ? 'enable' : 'blocked';

        return res.status(200).json({ message: `The account has been ${result}` });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    } finally {
        prisma.$disconnect();
    }
}