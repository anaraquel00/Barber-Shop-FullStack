import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { ProdutoFormComponent } from './produtos/produto-form/produto-form.component';
import { LojaComponent } from './loja/loja.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutoListComponent },
  { path: 'produtos/novo', component: ProdutoFormComponent }, // Rota para adicionar produto
  { path: 'produtos/editar/:id', component: ProdutoFormComponent },
  { path: 'loja', component: LojaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '' }
];
