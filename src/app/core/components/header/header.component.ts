import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogRegistroComponent } from "../dialogs/dialog-registro/dialog-registro.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  _logeado = true;
  _nick!: any;
  _nickParse!: string;
  _initial!: string;

  animal!: string;
  name!: string;
  flagDialogRegistro: boolean = false;
  constructor(public dialogo: MatDialog) {}

  ngOnInit() {
    this.getNickSesion();
  }

  abrirDialogo() {
    this.dialogo
      .open(DialogRegistroComponent, {
        data: `Introduzca los datos del nuevo usuario`,
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("¡A mí también!");
        } else {
          alert("Deberías probarlo, a mí me gusta :)");
        }
      });
  }

  getNickSesion(): boolean {
    this._nick = sessionStorage.getItem("nick");
    let nick = (this._nickParse = JSON.parse(this._nick));
    if (this._nick) {
      this._initial = nick.charAt(0);
      return (this._logeado = false);
    } else {
      this._logeado = true;
      console.log(this._logeado);
      return this._logeado;
    }
  }
}
