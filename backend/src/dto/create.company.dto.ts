import { IsEmail, IsStrongPassword } from 'class-validator';

export class CreateCompanyDTO {
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
    minUppercase: 0,
  })
  password: string;

  description: string;

  city: string;

  state: string;
}
