import { Form } from '../../productos/interfaces/form';
import {IsArray, IsString, IsNotEmpty, IsBoolean, MinLength, MaxLength, IsEmail, IsPhoneNumber} from 'class-validator';

type CreateForm = Omit<Form, 'id'>;

export class CreateFormDto implements CreateForm {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  name: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  lastname: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsPhoneNumber('EC')
  phone: string;
  @IsNotEmpty()
  @IsString()
  provincia: string;
  @IsNotEmpty()
  @IsString()
  ciudad: string;
  @IsNotEmpty()
  @IsArray()
  productos: Array<string>;
  @IsNotEmpty()
  @IsBoolean()
  informacion: boolean;
}
