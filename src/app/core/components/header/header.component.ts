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
    this.initialNick();
  }

  openDialog() {}

  getNickSesion(): boolean {
    this._nick = sessionStorage.getItem("nick");
    this._nickParse = JSON.parse(this._nick);
    if (this._nick) {
      return (this._logeado = false);
    } else {
      return (this._logeado = true);
    }
  }
  initialNick() {
    this._nick = sessionStorage.getItem("nick");
    let nick = (this._nickParse = JSON.parse(this._nick));
    this._initial = nick.charAt(0);
    console.log(this._initial);
  }
}
