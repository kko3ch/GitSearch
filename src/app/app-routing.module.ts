import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'search', component: SearchFormComponent},
  {path: 'user', component: UserComponent},
  {path: '', redirectTo:"/search", pathMatch:"full"},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
