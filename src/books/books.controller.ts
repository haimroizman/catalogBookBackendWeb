import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto, GetBookDto } from './dto/book.dto';
import { plainToClass } from 'class-transformer';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll() {
    const books = await this.booksService.findAll();

    const booksDto = books.map((book) =>
      plainToClass(GetBookDto, {
        ...book.toObject(),
        _id: book._id.toString(),
      }),
    );

    return booksDto;
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    const book = plainToClass(Book, createBookDto);

    const newBook = this.booksService.create(book);

    const newBookDto = plainToClass(CreateBookDto, newBook);

    return newBookDto;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.booksService.remove(id);

    return {};
  }
}
