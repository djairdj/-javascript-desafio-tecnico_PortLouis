import express, {Router} from 'express';
import {NotesController} from "../controllers/NotesController";

export const notesRoutes: Router = express.Router();

notesRoutes.route("/")
  .get(NotesController.get)
;