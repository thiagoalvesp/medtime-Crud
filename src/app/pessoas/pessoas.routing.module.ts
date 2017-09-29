import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PessoasComponent } from './pessoas.component';
import { PessoaDetalheComponent } from './pessoa-detalhe/pessoa-detalhe.component';

const pessoasRoutes: Routes = [
    { 
      path: '', 
      component: PessoasComponent,
      children : [
        { path: 'novo', component: PessoaFormComponent},
        { path: ':id', component: PessoaDetalheComponent },
        { path: ':id/editar', component: PessoaFormComponent}
    ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(pessoasRoutes)],
    exports: [RouterModule]
})
export class PessoasRoutingModule {}