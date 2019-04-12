import { Component, OnInit } from '@angular/core';
import { AdaugareService } from 'src/app/shared/adaugare.service';

@Component({
  selector: 'app-adaugare-form',
  templateUrl: './adaugare-form.component.html',
  styleUrls: ['./adaugare-form.component.scss']
})
export class AdaugareFormComponent implements OnInit {
  size: number;
  showMsg: boolean = false;

  arie={
    category: '',
    description: '',
    id: '',
    image: '',
    name: '',
    stack:''
  }
  ad: any;
  constructor(private adaugareService:AdaugareService) {
  }
  ngOnInit() {
    this.getArieDetails();
  }
  getArieDetails()
  {
    this.adaugareService.getArie().subscribe((data:any)=>{
      this.size= data.length;
      console.log(this.size);
      this.adaugareService.setIteratie(this.size);
    })
    return this.size;
  }
  onSubmit(form)
  {
    console.log(form);
    this.arie={
      category: form.value.category,
      description: form.value.description,
      id: form.value.id,
      image: form.value.image,
      name: form.value.name,
      stack: form.value.stack
    };
    this.showMsg= true;

    this.adaugareService.updateArie(this.arie).subscribe(data=>{
      console.log(data);
    })
  }

}
