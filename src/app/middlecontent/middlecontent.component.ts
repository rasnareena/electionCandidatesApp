import { Component, OnInit } from '@angular/core';
import {  StateDataService } from '../service/stateData.service';
import { StateModel } from '../model/stateModel';

@Component({
  selector: 'app-middlecontent',
  templateUrl: './middlecontent.component.html',
  styleUrls: ['./middlecontent.component.css']
})
export class MiddlecontentComponent implements OnInit {

 
 _stateData:any[];
 _constituencyData:any[]; 
 _candidateDetail:any[];
 _subjectwiseQuestionData:any[];
 _candidateExpenditure:any[];
 _candidateIndicators:any[];

  constructor(private stateDataServ: StateDataService, private stateModel:StateModel) {
  	

       	
   }

  ngOnInit() {
  
  	this.stateDataServ.getStateJSON().subscribe(data => {
           this.stateDataServ.stateData = data;           
            console.log(this.stateDataServ.stateData);
            this._stateData = data;

        });

        this.stateDataServ.getConstituencyJSON().subscribe(data => {
        	this.stateDataServ.stateConstituencyData = data;
            console.log(this.stateDataServ.stateConstituencyData);
            this._constituencyData = data;
                       
        });

         this.stateDataServ.getCandidatedetailJSON().subscribe(data => {
         	this._candidateDetail = data;
            console.log(this._candidateDetail);
                       
        });

        this.stateDataServ.getQuestionJSON().subscribe(data => {
        	this._subjectwiseQuestionData = data;
            console.log(this._subjectwiseQuestionData);
                       
        });

         this.stateDataServ.getExpenditureJSON().subscribe(data => {
         	this._candidateExpenditure = data;
            console.log(this._candidateExpenditure);
                       
        });

        this.stateDataServ.getIndicatorsJSON().subscribe(data => {
         	this._candidateIndicators = data;
            console.log(this._candidateIndicators);
                       
        });

        
       
  }

}
