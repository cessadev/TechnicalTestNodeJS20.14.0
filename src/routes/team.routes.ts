import { Router } from 'express';
import { createTeam, getAllTeams, inviteMember } from '../controllers/team.controllers';
import authMiddleware from '../middlewares/authMiddlewares';

const router = Router();

router.get('/', authMiddleware, getAllTeams);
router.post('/', authMiddleware, createTeam);
router.post('/:teamId/invite', authMiddleware, inviteMember);

export default router;