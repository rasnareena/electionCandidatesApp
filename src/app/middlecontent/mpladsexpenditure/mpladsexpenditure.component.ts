import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Observable, Subscription } from 'rxjs/Observable';
import {  StateDataService } from '../../service/stateData.service';

@Component({
  selector: 'app-mpladsexpenditure',
  templateUrl: './mpladsexpenditure.component.html',
  styleUrls: ['./mpladsexpenditure.component.css']
})
export class MpladsexpenditureComponent implements OnInit {

	@Input() candidateExpenditure: any[];
	private expenditureData:any[];

	public barChartLabels = ['Constituency Entitlement', 'Expenditure Incurred', 'State Average'];
  	public barChartType = 'bar';
  	public barChartLegend = true;
	 public barChartData = [
	    {data: [5, 23, 18]},
	    {data: [30, 30, 30]}
	  ];

  constructor(private stateDataServ: StateDataService) {
	  	this.subscription = this.stateDataServ.getConstituencyId().subscribe(val =>{this.id = val;
	    console.log(this.id);
	    this.expenditureData = this.candidateExpenditure.find(x=>x.constituencyid == this.id);
    	console.log(this.expenditureData );
    	if(this.expenditureData){
    		console.log(this.expenditureData.constituencyentitlement);
    		console.log(this.expenditureData.expenditureincurred);
    		console.log(this.expenditureData.stateaverage);
    		this.barChartData = [{data:[this.expenditureData.constituencyentitlement,this.expenditureData.expenditureincurred,this.expenditureData.stateaverage ]},{data: [30, 30, 30]}];
    	}

	    });
   }

  ngOnInit() {
  }

   public barChartOptions = {  

			   legend:{
			  		display: false  		 
			  	},
			  	scales: {
			  	

			    xAxes: [{ stacked: true , barPercentage:0.1,minBarLength:0.4,
			            barThickness: 50, ticks:{fontColor:'#ffff', lineHeight:5,beginAtZero:true}, gridLines:{display:false,color:'#fff'}}],
			    yAxes: [{ stacked: true, barPercentage:0.1, minBarLength:0.4,
			            barThickness: 50, ticks:{fontColor:'#ffff', lineHeight:5,beginAtZero:true},gridLines:{display:false,color:'#fff',tickMarkLength:15} }]
			  },
			    scaleShowVerticalLines: false,
			    responsive: true
	};

 

}
