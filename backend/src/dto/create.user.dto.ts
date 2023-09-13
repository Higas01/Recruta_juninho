import { IsStrongPassword, IsEmail } from 'class-validator';

export class CreateUserDTO {
  name: string;
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  })
  password: string;

  @IsEmail()
  email: string;

  description: string;

  level: string;

  habilitys: string[];

  tel: string;

  age: number;

  state: string;

  city: string;
}
