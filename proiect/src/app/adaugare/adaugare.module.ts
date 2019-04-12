import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdaugareFormComponent } from './components/adaugare-form/adaugare-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule, MatMenuModule } from '@angular/material';
import { AdaugareRoutingModule } from './adaugare-routing.module';

@NgModule({
  declarations: [
    AdaugareFormComponent
  ],
  imports: [
    FormsModule,
   MatIconModule,
   MatInputModule,
   MatMenuModule,
   ReactiveFormsModule,
   CommonModule,
   AdaugareRoutingModule
  ]
})
export class AdaugareModule { }
