import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdaugareFormComponent } from './components/adaugare-form/adaugare-form.component';

const routes: Routes = [
  {
    path: '',
    component: AdaugareFormComponent
  }
 ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class AdaugareRoutingModule { }
