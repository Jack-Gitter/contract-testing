import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class ProfileHomeDto {
  @IsNumberString()
  id: number;

  @IsString()
  city: string;

  @IsString()
  street: string;

  @IsString()
  zip: string;
}
