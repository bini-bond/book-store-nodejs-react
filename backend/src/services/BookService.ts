import { BookRepository } from "repositories/bookRepository";
import { Document, Model } from "mongoose";

export default class BookService {
  private readonly bookRepo: BookRepository;

  constructor(bookRepo: BookRepository) {
    this.bookRepo = bookRepo;
  }

  async getAll(
    query: Object,
    page: number,
    limit: number
  ): Promise<Document[]> {
    let bks = await this.bookRepo.find(query, page, limit);
    return bks;
  }

  async create(item: Model<Document>): Promise<Document> {
    let b = await this.bookRepo.create(item);
    return b;
  }
}
