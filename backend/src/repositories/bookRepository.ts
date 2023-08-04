import { BaseRepository } from "./base/BaseRepository";
import { Query, Document, Model } from "mongoose";
// now, we have all code implementation from BaseRepository
export class BookRepository extends BaseRepository<Model<Document>> {
  // here, we can create all especific stuffs of Book Repository
  async countOfBooks(): Query<number> {
    return this.model.count({});
  }

  async find(query: Object, page: number, limit: number): Promise<Document[]> {
    return await this.model
      .find(query)
      .limit(limit)
      .skip(limit * (page - 1))
      .sort({
        name: "asc",
      });
  }
}
