import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  _logeado = false;
  _nick!: any;
  _nickParse!: string;
  constructor() {}

  ngOnInit() {
    this._nick = sessionStorage.getItem("nick");
    this._nickParse = JSON.parse(this._nick);
    if (this._nick) {
      this._logeado = false;
    } else {
      this._logeado = true;
    }
  }

  openDialog() {}
}
