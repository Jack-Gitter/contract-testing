import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProfilesService {
  constructor(
    private httpService: HttpService,
    private homesServiceBaseUrl: string,
  ) {}

  names = ['someone1', 'someone2', 'someone3', 'someone4'];
  public async getProfile(id: number) {
    try {
      const url = `${this.homesServiceBaseUrl}/homes`;
      const res = await firstValueFrom(this.httpService.get(url));
      const homes: any[] = res.data;
      const profileHomes = homes.filter((home) => {
        return home.id === id;
      });

      return {
        name: this.names[Math.floor(Math.random() * 3)],
        homes: profileHomes,
      };
    } catch (e) {
      console.error(e);
    }
  }
}
