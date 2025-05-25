import { IsNumber, IsString } from 'class-validator';

export class ProfileHomeDto {
  @IsNumber()
  id: number;

  @IsString()
  city: string;

  @IsString()
  street: string;

  @IsString()
  zip: string;
}
