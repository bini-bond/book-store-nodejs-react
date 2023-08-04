// import all interfaces
import { IWrite } from "../interfaces/IWrite";
import { IRead } from "../interfaces/IRead";
import { Model, Document, DocumentQuery } from "mongoose";
import { InsertOneWriteOpResult } from "mongodb";

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  //creating a property to use your code in all instances
  // that extends your base repository and reuse on methods of class
  public readonly model: Model<Document>;

  //we created constructor with arguments to manipulate mongodb operations
  constructor(model: Model<Document>) {
    this.model = model;
  }

  // we add to method, the async keyword to manipulate the insert result
  // of method.
  async create(item: T): Promise<Document> {
    const result: Document = await this.model.create(item);
    // after the insert operations, we returns only ok property (that haves a 1 or 0 results)
    // and we convert to boolean result (0 false, 1 true)
    return result;
  }

  update(id: string, item: T): Promise<Document> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<Document> {
    throw new Error("Method not implemented.");
  }
  async find(query: Object, page: number, limit: number): Promise<Document[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
