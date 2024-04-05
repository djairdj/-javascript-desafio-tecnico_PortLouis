import {Request, Response} from 'express';

export class NotesController {
  static async get(_: Request, resp: Response) {
    const notas = {
      notes: 'NotesController test',
      status: "walking"
    }
    resp.send(notas);
  }
}