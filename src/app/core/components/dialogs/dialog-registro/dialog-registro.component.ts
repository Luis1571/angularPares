import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Usuario } from "../../usuario/models/usuario";
import { UsuarioComponent } from "src/app/modules/components/usuario/usuario.component";
@Component({
  selector: "app-dialog-registro",
  templateUrl: "./dialog-registro.component.html",
  styleUrls: ["./dialog-registro.component.scss"],
})
export class DialogRegistroComponent implements OnInit {
  _formNewUser!: FormGroup;
  //newUser: Usuario =new Usuario();
  constructor(
    public dialogo: MatDialogRef<DialogRegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private readonly _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formNewUser();
  }

  formNewUser() {
    this._formNewUser = this._fb.group({
      newUser: ["", Validators.required],
      newPass: ["", Validators.required],
    });
  }

  cerrarDialogo(): void {
    this.dialogo.close(false);
  }

  confirmado(): void {
    console.log(this._formNewUser.value);
    //this.newUser= new Usuario(this._formNewUser.value)
    this.dialogo.close(true);
  }
}
