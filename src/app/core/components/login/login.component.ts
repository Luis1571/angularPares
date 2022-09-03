import { LEADING_TRIVIA_CHARS } from "@angular/compiler/src/render3/view/template";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from "../usuario/models/usuario";

import { UsuarioService } from "../usuario/service/usuario.service";
import { LoginService } from "./service/login-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  urlEndPoint = "http://localhost:8081/pares/nick/";
  _login!: FormGroup;
  _condition!: boolean;
  _registrado!: boolean;
  _userMap = new Map<string, string>();
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UsuarioService,
    private readonly _fb: FormBuilder,
    private readonly _router: Router
  ) {}

  ngOnInit() {
    this._formInitial();

    /*  this.userService.getUsuarios().subscribe((data) => {
      console.log(data);
    }); */
  }

  _formInitial() {
    this._condition = true;
    this._login = this._fb.group({
      user: ["", Validators.required],
      pass: ["", Validators.required],
    });
  }
  loginNoValidation() {
    this._router.navigate(["/home"]);
  }
  loginValidation() {
    //llamada al service con el nick
    this.loginService
      .findById(`${this.urlEndPoint}${this._login.value.user}`)
      .subscribe((data: Usuario) => {
        console.log(data);
        if (data !== null) {
          if (data.password === this._login.value.pass) {
            //guarda en sesion el nick - Con el se podra acceder a todos los datos del usurio a traves del service
            sessionStorage.setItem("nick", JSON.stringify(data.user));
            this._router.navigate(["/home"]);
          } else {
            alert("contraseña incorrecta");
          }
        } else {
          alert("Usuario incorrecto");
          this._formInitial();
        }
      });
  }
}
