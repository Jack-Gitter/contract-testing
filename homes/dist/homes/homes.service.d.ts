import { Repository } from 'typeorm';
import { Home } from './homes.entity';
export declare class HomesService {
    private homesRepository;
    constructor(homesRepository: Repository<Home>);
    getHomes(): Promise<Home[]>;
    findHome(city: string, street: string, zip: string): Promise<Home>;
    reserveHome(city: string, street: string, zip: string): Promise<void>;
}
