import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Importaciones de Angular material
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { LoginComponent } from "./core/components/login/login.component";
import { LayoutModule } from "@angular/cdk/layout";
import { HomeComponent } from "./core/components/home/home.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./core/components/header/header.component";
import { InputTextModule } from "primeng/inputtext";
import { MenuItem } from "primeng/api"; //api
import { ButtonModule } from "primeng/button";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatCardModule } from "@angular/material/card";
import { CardModule } from "primeng/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, HeaderComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //Importaciones de Angular material
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    InputTextModule,
    ButtonModule,
    NgbModule,
    MatCardModule,
    CardModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
