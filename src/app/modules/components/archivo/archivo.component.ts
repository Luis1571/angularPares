import { Component, OnInit } from '@angular/core';
import { ArchivoService } from 'src/app/core/components/usuario/service/archivo.service';
import { Archivo } from './models/archivo.model';

@Component({
  selector: 'app-archivo',
  templateUrl: './archivo.component.html',
  styleUrls: ['./archivo.component.scss']
})
export class ArchivoComponent implements OnInit {
clientes!: Archivo[];
  constructor(private archivoSevice: ArchivoService) { }
  archivo:any
  ngOnInit() {
    this.archivoSevice.getArchivos().subscribe((data: Archivo) => {
      this.archivo = data;
      console.log(this.archivo);
		});
  }

}
