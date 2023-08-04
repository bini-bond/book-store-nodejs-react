import { Model, Document } from "mongoose";

export interface IRead<T> {
  find(query: Object, page: number, limit: number): Promise<Document[]>;
  findOne(id: string): Promise<T>;
}