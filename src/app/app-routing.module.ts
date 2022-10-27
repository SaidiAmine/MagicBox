import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstHomeComponent } from "./first-home/first-home.component";

const routes: Routes = [
  {path: 'first', component: FirstHomeComponent},
  {path: '**', redirectTo: '/first'} // EXPLAINED wild card, redirects to /first when path doesnt match any component
];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
  