import { Router } from '@angular/router';
import { PessoasService } from './pessoas.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/pessoa';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {

  private pessoas: Pessoa[] = [];

  constructor(private pessoasService: PessoasService, private router: Router) { }

  ngOnInit() {
    this.pessoas = this.pessoasService.getPessoas();
  }
  
  adicionarPessoa() {
    this.router.navigate(['/pessoas', 0, 'editar']);
  }

}
