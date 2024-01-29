/* eslint-disable prettier/prettier */
// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { BooksController } from './books/books.controller';
// import { BooksService } from './books/books.service';
import { BooksModule } from './books/schemas/books.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nest'),
    BooksModule

  ]
})
export class AppModule {}
