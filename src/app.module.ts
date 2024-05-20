import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
