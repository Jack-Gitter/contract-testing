import { HomesService } from './homes.service';
import { FindHomeDTO, ReserveHomeDTO } from './homes.dto';
export declare class HomesController {
    private homesService;
    constructor(homesService: HomesService);
    getHomes(): Promise<import("./homes.entity").Home[]>;
    findHome(findHomeDto: FindHomeDTO): Promise<import("./homes.entity").Home>;
    reserveHome(reserveHomeDto: ReserveHomeDTO): Promise<void>;
}
