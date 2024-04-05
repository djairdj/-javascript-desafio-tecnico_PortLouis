import express, {Router} from 'express';
import {ProcessController} from "../controllers/ProcessController";

export const processRoutes: Router = express.Router();

processRoutes.route("/")
  .get(ProcessController.get)
;