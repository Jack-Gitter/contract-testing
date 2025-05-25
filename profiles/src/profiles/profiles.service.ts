import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProfilesService {
  constructor(
    private httpService: HttpService,
    private homesServiceBaseUrl: string,
  ) {}

  public async getProfile(id: number) {
    const url = `${this.homesServiceBaseUrl}/homes`;
    const res = await firstValueFrom(this.httpService.get(url));
    const homes: any[] = res.data;
    const profileHomes = homes.filter((home) => {
      return home.id === id;
    });
    return profileHomes;
  }
}
