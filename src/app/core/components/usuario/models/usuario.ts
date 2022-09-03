export interface Usuario {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  admin: boolean;
  password: string;
  fecInicio: Date;
  user: string;
}
/*export class Usuario {
  id: number;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  admin: boolean;
  password: string;
  fecInicio: Date;
  user: string;

   constructor(
    idNew: number,
    nombreNew: string,
    apellido1New: string,
    apellido2New: string,
    emailNew: string,
    adminNew: boolean,
    passwordNew: string,
    fecInicioNew: Date,
    userNew: string
  ) {
    this.id = idNew;
    (this.nombre = nombreNew), (this.apellido1 = apellido1New);
    this.apellido2 = apellido2New;
    this.email = emailNew;
    this.admin = adminNew;
    this.password = passwordNew;
    this.fecInicio = fecInicioNew;
    this.user = userNew;
  } 
}*/
