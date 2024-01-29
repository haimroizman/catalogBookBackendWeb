/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDucument = HydratedDocument<Book>;

@Schema({versionKey: false})
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  publishedDate: Date;

  
  @Prop({ required: true, unique: true })
  idNumber: number;

  @Prop({ required: true })
  genere: string;

  @Prop({ required: true })
  price: number;

  @Prop()
  imageLink: string;

  // You can add more properties as needed
}

export const BookSchema = SchemaFactory.createForClass(Book);
