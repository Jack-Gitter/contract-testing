import { Module, Provider } from '@nestjs/common/';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { HttpModule, HttpService } from '@nestjs/axios';

const providers: Provider[] = [
  {
    provide: ProfilesService,
    useFactory: (httpService: HttpService) => {
      return new ProfilesService(httpService, 'http://localhost:3000');
    },
    inject: [HttpService],
  },
];
@Module({
  imports: [HttpModule],
  controllers: [ProfilesController],
  providers: [...providers],
})
export class ProfilesModule {}
