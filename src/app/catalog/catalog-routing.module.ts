import { CatalogListComponent } from './containers/catalog-list.component';
import { CatalogRootComponent } from './containers/catalog-root.component';
import { SelectedBookComponent } from './containers/selected-book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalog', component: CatalogRootComponent,
    children: [
      { path: 'list', component: CatalogListComponent },
      { path: 'book/:id', component: SelectedBookComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
