import { Contains, IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string; 

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @Matches(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]+$/, {
    message: 'The name can only contain letters (including accents and ñ) .',
    })
    name: string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(8)
    password: string;
}
