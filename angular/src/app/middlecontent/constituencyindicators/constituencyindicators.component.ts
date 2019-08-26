import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Observable, Subscription } from 'rxjs/Observable';
import {  StateDataService } from '../../service/stateData.service';


@Component({
  selector: 'app-constituencyindicators',
  templateUrl: './constituencyindicators.component.html',
  styleUrls: ['./constituencyindicators.component.css']
})
export class ConstituencyindicatorsComponent implements OnInit {
	
	@Input() candidateIndicators: any[];
	private id: any;
    private subscription: Subscription;

    private candidateIndicatorData:any[];

    @Input() stateData: any[];

	@Input() constituencyData: any[];

	private stateAvg: any[];
	private constituency: any[];

public barChartLabels = ['Literacy Rate', 'Electrified Homes', 'Homes with Toilets', 'Underweight Children', 'Sex Ratio', 'Low BMI Women'];
  	public barChartType = 'bar';
  	public barChartLegend = true;
	 public barChartData = [
	    {data: [5, 23, 18]},
	    {data: [15, 10, 10]}
	  ];

  constructor(private stateDataServ: StateDataService) {
  		this.subscription = this.stateDataServ.getConstituencyId().subscribe(val =>{this.id = val;
	    console.log(this.id);
	     this.constituency = this.constituencyData.find(x=>x.rowid == this.id);
	    console.log( this.constituency);
	    this.stateAvg = this.stateData.find(x=>x.rowid == this.constituency.stateid);
	    console.log( this.stateAvg);

	    this.barChartData = [{data:[this.constituency.literacyrate,this.constituency.electrifiedhomes,this.constituency.homeswithtoilets, this.constituency.underweightchildren, this.constituency.sexratio, this.constituency.lowbmiwomen ]},{data: [this.stateAvg.literacyrate,this.stateAvg.electrifiedhomes,this.stateAvg.homeswithtoilet,this.stateAvg.underweightchildren , this.stateAvg.sexratio, this.stateAvg.lowbmiwomen]}];
    });
   }

  ngOnInit() {
  }

  public barChartOptions = {  

			   legend:{
			  		display: false  		 
			  	},
			  	scales: {
			  	

			    xAxes: [{ barPercentage:0.1,minBarLength:0.4,
			            barThickness: 40, ticks:{fontColor:'#ffff', lineHeight:5,beginAtZero:true}, gridLines:{display:false,color:'#fff'}}],
			    yAxes: [{ barPercentage:0.1, minBarLength:0.4,
			            barThickness: 40, ticks:{fontColor:'#ffff', lineHeight:5,beginAtZero:true},gridLines:{display:false,color:'#fff',tickMarkLength:15} }]
			  },
			    scaleShowVerticalLines: false,
			    responsive: true
	};



}
