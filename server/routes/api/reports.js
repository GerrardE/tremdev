import express from 'express';
import reports from '@controllers/reports';
import trim from '@middlewares/trim';
import { verifyToken } from '@middlewares/Token';

const reportRouter = express.Router();

reportRouter.post('/membership', verifyToken, trim, reports.membership);

export default reportRouter;