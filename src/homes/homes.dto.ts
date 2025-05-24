import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class FindHomeDTO {
  @IsString()
  @ApiProperty()
  street: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  zip: string;
}

export class ReserveHomeDTO {
  @IsString()
  @ApiProperty()
  street: string;

  @IsString()
  @ApiProperty()
  city: string;

  @IsString()
  @ApiProperty()
  zip: string;
}
