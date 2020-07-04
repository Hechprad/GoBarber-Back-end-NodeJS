import { Router } from 'express';

import ForgotPasswordController from '@modules/users/infra/http/controlers/ForgotPasswordController';
import ResetPasswordController from '@modules/users/infra/http/controlers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
