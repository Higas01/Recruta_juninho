import { IsEmail } from 'class-validator';

export class LoginCompanyDTO {
  @IsEmail()
  email: string;

  password: string;
}
