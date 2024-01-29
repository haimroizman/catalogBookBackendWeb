// books/books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(book: Book): Promise<Book> {
    return this.bookModel.create(book);
  }

  async findAll() {
    return this.bookModel.find().exec();
  }

  async findOne(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async remove(id: string): Promise<Book> {
    return this.bookModel.findByIdAndDelete(new Types.ObjectId(id)).exec();
  }
}
