import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './presentation/components/main/main.component';
import {CategoryComponent} from './presentation/components/category/category.component';
import { CategoryTrainersComponent } from './presentation/components/category/category-trainers/category-trainers.component';
import { ApplyFormComponent } from './shared/components/apply-form/apply-form.component';
import { CategoryCourseComponent } from './presentation/components/category/category-course/category-course.component';
import { AdaugareFormComponent } from './adaugare/components/adaugare-form/adaugare-form.component';

const routes: Routes = [
 {path: '', redirectTo: '/main', pathMatch: 'full'},
 {path: 'main', component: MainComponent },
 {path: 'category', component: CategoryComponent},
 {
   path: 'category/:aria',
   component: CategoryComponent,
   children: [{
     path: '',
     component: CategoryTrainersComponent
   },
   {
     path: 'apply',
     component: ApplyFormComponent
   },
   {
     path: ':course',
     component: CategoryCourseComponent
   }]
 },
 {path: 'account', loadChildren: './accounts/accounts.module#AccountsModule'},
 {path: 'adaugare', loadChildren: './adaugare/adaugare.module#AdaugareModule'}
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }