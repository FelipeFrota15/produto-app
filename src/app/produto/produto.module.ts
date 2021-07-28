import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';


@NgModule({
  declarations: [
    ProdutoFormComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ProdutoRoutingModule,
    FormsModule,

  ],
  exports:[
    ProdutoFormComponent,
    ProdutoListaComponent
  ]
})
export class ProdutoModule { }
