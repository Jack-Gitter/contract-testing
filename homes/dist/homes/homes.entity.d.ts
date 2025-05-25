export declare class Home {
    constructor(street: string, city: string, zip: string, pricePerNight: number);
    id: number;
    street: string;
    city: string;
    zip: string;
    pricePerNight: number;
    toJson(): {
        id: number;
        street: string;
        city: string;
        zip: string;
        pricePerNight: number;
    };
}
