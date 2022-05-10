import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Archivo } from 'src/app/modules/components/archivo/models/archivo.model';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  private urlEndPoint: string = 'http://localhost:8081/pares/archivos';
  
  constructor(private _http: HttpClient) { }
  getArchivos() {
	
		return this._http.get('http://localhost:8081/pares/archivos');
	}
 

}