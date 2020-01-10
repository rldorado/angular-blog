import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PostDetailsComponent } from './views/post-details/post-details.component';
import { EditCommentComponent } from './components/edit-comment/edit-comment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post/details/:id',
    component: PostDetailsComponent
  },
  {
    path: 'comments/:id/edit',
    component: EditCommentComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
