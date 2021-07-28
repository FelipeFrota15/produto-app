import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './../../produto.service'
import { Produto } from '../produto';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  produto: Produto [] = [];
  produtoSelecionado: Produto;
  mensagenSucesso:string;
  mensagemErro:string;

  constructor( private service: ProdutoService, private router: Router ) {} 

  ngOnInit(): void {
  this.service.getProduto().subscribe(resposta=> this.produto=resposta)
  }

  novoCadastro(){
    this.router.navigate(['/produto-form'])
  }
   
  
 preparaDelecao(produto:Produto){
   this.produtoSelecionado=produto
 }

 deletarProduto(){
   this.service.deletar(this.produtoSelecionado).subscribe( response=> {this.mensagenSucesso = "Produto deletado com sucesso", this.ngOnInit();} ,
    erro=> this.mensagemErro="Falha ao deletar produto")
 }
}

