import { PessoasService } from './../pessoas.service';
import { Pessoa } from './../../../models/pessoa';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit, OnDestroy {

  pessoa: Pessoa;
  inscricao: Subscription;
  
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
    );
  }

  editarPessoa(){
    this.router.navigate(['/pessoas', this.pessoa.id, 'editar'], { queryParams: { tp: 'editar' } });
  }

  removerPessoa() {
    this.pessoasService.removePessoa(this.pessoa.id);
    this.router.navigate(['/pessoas']);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
 

}
