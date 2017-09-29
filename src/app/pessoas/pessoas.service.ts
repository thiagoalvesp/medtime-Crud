
import { Injectable } from '@angular/core';
import { Pessoa } from '../../models/pessoa';

@Injectable()
export class PessoasService {

  private collectionPessoas : Pessoa[] = [
     new Pessoa(1,'Pessoa 1','12312312388'),
     new Pessoa(2,'Pessoa 2','12312312381'),
     new Pessoa(4,'Pessoa 3','12312312383'),
     new Pessoa(5,'Pessoa 4','12312312384')
  ]
 
  getPessoas(){
    return this.collectionPessoas;
  }
  
  
  newId(): number{
    return Math.max.apply(Math,this.collectionPessoas.map(function(o){return o.id;})) + 1;
  }

  getPessoa(id: number){
    let pessoas = this.getPessoas();
    for (let i=0; i< pessoas.length; i++){
      let pessoa = pessoas[i];
      if (pessoa.id == id){
        return pessoa;
      }
    }
    return new Pessoa(this.newId(),'','');
  }
  
  addPessoa(p: Pessoa){
    
    for (let i = 0; i < this.collectionPessoas.length; i++) {
      if (this.collectionPessoas[i].id == p.id) {
        this.collectionPessoas[i] = p;
        return;
      }
    }
    this.collectionPessoas.push(p);
  }

  removePessoa(id: number){
    let pessoas = this.getPessoas();
    for (let i=0; i< pessoas.length; i++){
      let pessoa = pessoas[i];
      if (pessoa.id == id){
          this.collectionPessoas.splice(i,1);
      }
    }

  }
  constructor() { }


}
