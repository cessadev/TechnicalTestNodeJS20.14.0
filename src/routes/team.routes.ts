import { Router } from 'express';
import { createTeamController, getAllTeamsController, inviteMemberController } from '../controllers/team.controllers';
import authMiddleware from '../middlewares/authMiddlewares';

const router = Router();

router.get('/', authMiddleware, getAllTeamsController);
router.post('/', authMiddleware, createTeamController);
router.post('/:teamId/invite', authMiddleware, inviteMemberController);

export default router;