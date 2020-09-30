import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailItemComponent } from './core/pages/detail-item/detail-item.component';

const routes: Routes = [
    { path:  '', component: DetailItemComponent },
    { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 