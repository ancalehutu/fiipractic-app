import { Component, OnInit } from '@angular/core';
import { PresentationDetailsService } from '../../services/presentation-details.service';
import { PresentationDetails } from '../../interfaces/presentation-details';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  presentationData: PresentationDetails={startDate: '', endDate: '', title: '', description: '' };
  constructor(private presentationDetailsService: PresentationDetailsService) { }

  ngOnInit() {
    this.getPresentationData();
  }

  getPresentationData():void{
    //this.presentationData=this.presentationDetailesService.getPresetationDetails();
    this.presentationDetailsService.getPresetationDetails().subscribe(data =>{
    this.presentationData=data;
    })
  }
}
