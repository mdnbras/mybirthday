import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from './intro/intro.component';
import {PrincipalComponent} from './principal/principal.component';
import {GiftListComponent} from './gift-list/gift-list.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent,
  },
  {
    path: 'principal',
    component: PrincipalComponent,
  },
  {
    path: 'gift-list',
    component: GiftListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
