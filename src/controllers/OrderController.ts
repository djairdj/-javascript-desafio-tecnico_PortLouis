import {Request, Response} from 'express';

export class OrderController {
  static async get(_: Request, resp: Response) {
    resp.json({order: "Order test", status: "In progress"})
  }
}