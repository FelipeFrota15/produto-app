import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Produto } from './produto/produto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor( private http: HttpClient ) {}   
    
  salvar (produto: Produto) : Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8080/api/produtos', produto);
  }

  atualizar (produto: Produto) : Observable<any>{
    return this.http.put<Produto>(`http://localhost:8080/api/produtos/${produto.id}`,produto);
  }
  
  

  getProduto(): Observable<Produto[]>{
    return this.http.get<Produto[]>('http://localhost:8080/api/produtos');
  }

  getProdutoById(id:number): Observable<Produto>{
    return this.http.get<any>(`http://localhost:8080/api/produtos/${id}`);
  }
  
  deletar(produto:Produto): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/produtos/${produto.id}`)
  }

 
  
}
