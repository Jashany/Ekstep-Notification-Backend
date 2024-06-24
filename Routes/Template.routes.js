import { createTemplate,getTemplates,deleteTemplate } from "../Controllers/Template.controller.js";

import express from "express";
import { verify,roleAuthorization } from "../middlewares/authenticated.js";

const TemplateRouter = express.Router();

TemplateRouter.get("/templates",verify,roleAuthorization(['admin']),getTemplates);
TemplateRouter.post("/create",verify,roleAuthorization(['admin']),createTemplate);
TemplateRouter.delete("/delete/:id",verify,roleAuthorization(['admin']),deleteTemplate);

export default TemplateRouter;
