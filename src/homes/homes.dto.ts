import { IsString } from 'class-validator';

export class FindHomeDTO {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  zip: string;
}

export class ReserveHomeDTO {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  zip: string;
}
