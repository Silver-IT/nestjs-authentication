import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [SeedService]
})
export class SeedModule {}
