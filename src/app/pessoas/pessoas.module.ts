import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoasComponent } from './pessoas.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';
import { PessoasService } from './pessoas.service';
import { PessoasRoutingModule } from './pessoas.routing.module';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';

@NgModule({
    imports: [
        CommonModule,
        PessoasRoutingModule,
        FormsModule
    ],
    exports: [],
    declarations: [
        PessoasComponent,
        PessoaDetalheComponent,
        PessoaFormComponent
    ],
    providers: [PessoasService],
})
export class PessoasModule { }