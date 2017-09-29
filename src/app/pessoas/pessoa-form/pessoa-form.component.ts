import { PessoasService } from './../pessoas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Pessoa } from './../../../models/pessoa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {
  
  tp: string;
  pessoa: Pessoa;
  inscricao: Subscription;
  inscricaoQp: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoasService: PessoasService
  ) { }

  ngOnInit() {
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];
        this.pessoa = this.pessoasService.getPessoa(id);
      }
    )
   
    this.inscricaoQp = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.tp = queryParams['tp'];
      }
    );

  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
    this.inscricaoQp.unsubscribe();
  }

  salvarPessoa() {
    this.pessoasService.addPessoa(this.pessoa);
  }
  
  isValid(){
    return this.pessoa.nome == '' || this.pessoa.cpf == '';
  }

}
