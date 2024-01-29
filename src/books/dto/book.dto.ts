import { IsString, IsNumber, IsDate, IsOptional, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class GetBookDto {
  _id: ObjectId;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsString()
  description: string;

  @Type(() => Date)
  @IsDate()
  publishedDate: Date;

  @IsNumber()
  idNumber: number;

  @IsString()
  genere: string;

  @IsNumber()
  price: number;

  @IsUrl()
  @IsOptional()
  imageLink?: string;
}

export class CreateBookDto extends GetBookDto {}
