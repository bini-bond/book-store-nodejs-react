import { Request, Response } from "express";
import * as validator from "./validator";
import BookService from "services/BookService";
import { BookRepository } from "repositories/bookRepository";
import Book from "entities/Book";
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

const bookRepo = new BookRepository(Book);
const bookService = new BookService(bookRepo);

http.getBooks = async (req: IReq, res: IRes) => {
  const { page, limit } = req.query;
  console.log(page, limit);
  const books = await bookService.getAll(
    {},
    Number.parseInt(page),
    Number.parseInt(limit)
  );

  res.json({ data: books }).end();
};

http.post = async (req: IReq, res: IRes) => {
  await validator.post(req.yup, req.body);

  const body = req.body;
  const book = await bookService.create(body);

  res.json({ data: book });
};

export default http;
