import {Router} from 'express';
import {notesRoutes} from "./Notes.routes";
import {orderRoutes} from "./Order.routes";
import {processRoutes} from "./Process.routes";

export const routes: Router = Router();
routes.use('/notes', notesRoutes);
routes.use("/orders", orderRoutes);
routes.use("/process", processRoutes)
