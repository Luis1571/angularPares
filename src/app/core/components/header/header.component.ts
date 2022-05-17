import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  ngOnInit() {
    this.getNickSesion();
  }

  openDialog() { }
  
  

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
