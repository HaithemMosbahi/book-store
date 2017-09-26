import { CatalogContainerComponent } from './containers/catalog-container/catalog-container.component';
import { BookPageComponent } from './containers/book-page/book-page.component';
import { CatalogPageComponent } from './containers/catalog-page/catalog-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalog', component: CatalogContainerComponent,
    children: [
      { path: 'list', component: CatalogPageComponent },
      { path: 'book/:id', component: BookPageComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
