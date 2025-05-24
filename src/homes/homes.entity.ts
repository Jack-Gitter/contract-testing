import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Home {
  constructor(
    street: string,
    city: string,
    zip: string,
    pricePerNight: number,
  ) {
    this.street = street;
    this.city = city;
    this.zip = zip;
    this.pricePerNight = pricePerNight;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'street', nullable: false })
  public street: string;

  @Column({ type: 'varchar', name: 'city', nullable: false })
  public city: string;

  @Column({ type: 'varchar', name: 'zip', nullable: false })
  public zip: string;

  @Column({ type: 'int', name: 'price_per_night', nullable: false })
  public pricePerNight: number;
}
