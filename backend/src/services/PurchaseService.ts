import { PurchaseRepository } from "repositories/purchaseRepository";
import { Document, Model } from "mongoose";

export default class PurchaseService {
  private readonly purchaseRepo: PurchaseRepository;

  constructor(purchaseRepo: PurchaseRepository) {
    this.purchaseRepo = purchaseRepo;
  }

  async getAll(
    query: Object,
    page: number,
    limit: number
  ): Promise<Document[]> {
    let bks = await this.purchaseRepo.find(query, page, limit);
    return bks;
  }

  async create(item: Model<Document>): Promise<Document> {
    let b = await this.purchaseRepo.create(item);
    return b;
  }
}
