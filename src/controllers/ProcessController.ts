import {Request, Response} from 'express';

export class ProcessController {
  static async get(_: Request, resp: Response) {
    const process = {
      process: 'Processing test',
      status: "Doing"
    }
    resp.send(process);
  }
}