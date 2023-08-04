import { NextFunction, Request, Response, Router } from "express";

import bookCtrl from "@ctrls/book";
import purchaseCtrl from "@ctrls/purchase";

const router = Router();

const catchError = (fn: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await fn(req, res);
  } catch (error) {
    next(error);
  }
};

// Book
router.get("/", catchError(bookCtrl.getBooks));
router.post("/", catchError(bookCtrl.post));
router.post("/purchase", catchError(purchaseCtrl.postPurchase));


export default router;
