import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsByGroupComponent} from './items-by-group/items-by-group.component';
import {DevelopComponent} from './develop/develop.component';
import {TimersComponent} from './timers/timers.component';

const routes: Routes = [
  {path: "", component: TimersComponent},
  {path: "items", component: ItemsByGroupComponent},
  {path: "develop", component: DevelopComponent},
  {path: "timers", component: TimersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
