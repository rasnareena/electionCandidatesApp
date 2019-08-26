import { Component, OnInit, Input } from '@angular/core';
import {  StateDataService } from '../../service/stateData.service';
import { StateModel } from '../../model/stateModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidatedescription',
  templateUrl: './candidatedescription.component.html',
  styleUrls: ['./candidatedescription.component.css']
})
export class CandidatedescriptionComponent implements OnInit {

	@Input() stateData: any[];

	@Input() constituencyData: any[];

	@Input() candidateDetailData: any[];

	 private constituencyField:any[] = [];

	 private candidateData: any[];

	 private stateDetail:any[];

	 private showData:boolean = false;

	 private selectedConstituencyData:any[];

	 

  constructor(private stateDataServ: StateDataService, private stateModel: StateModel) {
  		
   }

  ngOnInit() {
  		this.stateDataServ.showData = false;  		
  }

  public selectedState(val){
 // 
	 console.log(this.stateData);
	 console.log(val);
	  var obj = [];
	  this.stateDetail = this.stateData.find(x=>x.rowid == val); 

	  console.log(this.stateDetail); 
	  this.constituencyField = [];
		 for(let i in this.constituencyData){
			 	 console.log(this.constituencyData[i].stateid);
				 if(val == this.constituencyData[i].stateid){
				 	this.constituencyField.push(this.constituencyData[i]);
				 }
			 }
		 console.log(this.constituencyField);
  }

	  public selectedConstituency(val){
	 	console.log(this.candidateDetailData);
	 	this.stateDataServ.showData = true;
	 	console.log(this.stateDataServ.showData);
	 	//this.candidateData = [];
	 	this.selectedConstituencyData = this.constituencyField.find(x=>x.rowid == val);
	 	console.log(this.selectedConstituencyData);
	  	this.candidateData  = this.candidateDetailData.find(x=>x.constituencyid == val);
	  	
	  	this.stateDataServ.constituencyId = val;
	  	this.stateDataServ.sendConstituencyId(val);

	  }


}
