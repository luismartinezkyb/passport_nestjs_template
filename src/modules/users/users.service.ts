import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    const userCreated = await this.prisma.user.create({
      data: user,
    });
    return userCreated;
  }
  async findAll() {
    // return this.prismaService.user.findMany();
    return `This action returns all users`;
  }

  async findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
