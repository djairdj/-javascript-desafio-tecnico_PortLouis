import express, {Router} from 'express';
import {OrderController} from "../controllers/OrderController";

export const orderRoutes: Router = express.Router();

orderRoutes.route("/")
  .get(OrderController.get)
;