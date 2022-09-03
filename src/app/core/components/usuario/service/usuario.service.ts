import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Archivo } from "src/app/modules/components/archivo/models/archivo.model";
import { Usuario } from "../models/usuario";
@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  private urlEndPoint: string = "http://localhost:8081/pares/usuarios";
  constructor(private _http: HttpClient) {}

  getUsuarios() {
    return this._http.get(this.urlEndPoint);
  }
  create(usuario: Usuario): Observable<Usuario> {
    return this._http.post<Usuario>(this.urlEndPoint, usuario);
  }

  //createOther(formUser: object)
}
