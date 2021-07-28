import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service'
import { Produto } from '../produto'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs';




@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto;
  success: boolean = false;
  errors: string[];
  id: number;

  constructor( private service:ProdutoService, private router: Router, private activatedRoute: ActivatedRoute) { 
    this.produto = new Produto();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){      
        this.service.getProdutoById(this.id).subscribe( response => this.produto = response, 
          errorResponse => this.produto = new Produto )
        }
    } )
   
  }

  voltarParaListagem(){
    this.router.navigate(['/produto-lista'])
  }

  onSubmit(){
    if(this.id){
      this.service.atualizar(this.produto).subscribe(response=> {
        this.success=true;
      this.errors= null;}, errorResponse=> {
        this.errors = ['Erro ao Atualizar o Produto']
      })
    }
    else{ 
    this.service.salvar(this.produto)
    .subscribe ( response => {
      this.success = true;
      this.errors = null;
      this.produto = response;
    } , errorResponse=>{
      this.success = false;
      this.errors = errorResponse.error.errors;
    } )
    }
    

  }
}
