import { Request, Response } from "express";
// import * as validator from './validator'
import { PurchaseRepository } from "repositories/purchaseRepository";
import Purchase from "entities/Purchase";
import PurchaseService from "services/PurchaseService";
interface IHttp {
  [key: string]: any;
}

interface IRes extends Response {
  [key: string]: any;
}

interface IReq extends Request {
  [key: string]: any;
}

const http: IHttp = {};

const purchaseRepo = new PurchaseRepository(Purchase);
const purchaseService = new PurchaseService(purchaseRepo);

http.getPurchases = async (req: IReq, res: IRes) => {
  const { page, limit } = req.query;
  console.log(page, limit);
  const purchases = await purchaseService.getAll(
    {},
    Number.parseInt(page),
    Number.parseInt(limit)
  );

  res.json({ data: purchases }).end();
};

http.postPurchase = async (req: IReq, res: IRes) => {
  //   await validator.post(req.yup, req.body)

  const body = req.body;
  const purchase = await purchaseService.create(body);

  res.json({ data: purchase });
};

export default http;
