import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { Observable, Subscription } from 'rxjs/Observable';
import {  StateDataService } from '../../service/stateData.service';

@Component({
  selector: 'app-mpsubjectquestion',
  templateUrl: './mpsubjectquestion.component.html',
  styleUrls: ['./mpsubjectquestion.component.css']
})
export class MpsubjectquestionComponent implements OnInit {
  @Input() subjectwiseQuestionData: any[];

  chart: Chart;
  public doughnutChartLabels1 = ['Finance'];
  public doughnutChartData1 = [100,100];
  public doughnutChartLabels2 = ['Agriculture'];
  public doughnutChartData2 = [30,100];
  public doughnutChartLabels3 = ['Defence'];
  public doughnutChartData3 = [0,100];
  public doughnutChartLabels4 = ['Railways'];
  public doughnutChartData4 = [20,100];
  public doughnutChartLabels5 = ['Education'];
  public doughnutChartData5 = [10,100];
  public doughnutChartLabels6 = ['Health'];
  public doughnutChartData6 = [0,100];
  public doughnutChartLabels7 = ['Employment'];
  public doughnutChartData7 = [0,100];
  public doughnutChartLabels8 = ['Environment'];
  public doughnutChartData8 = [30,100];
  public doughnutChartLabels9 = ['Energy'];
  public doughnutChartData9 = [40,100];
  public doughnutChartLabels10 = ['Social Justice'];
  public doughnutChartData10 = [0,100];
  public doughnutChartLabels11 = ['Welfare'];
  public doughnutChartData11 = [50,100];
  public doughnutChartLabels12 = ['Miscellaneous'];
  public doughnutChartData12 = [10,100];
  public doughnutChartType = 'doughnut';

 id: any;
    subscription: Subscription;

    candidateQuestionData:any[];

  public options = {  
	  cutoutPercentage: 75,
	  animation: {
	  				  onComplete: function () {
				      var ctx = this.chart.ctx;
				      var width = this.chart.width;
       				  var  height = this.chart.height;
				      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
				      ctx.textAlign = 'center';
				      ctx.textBaseline = 'bottom';
				      var percent = this.chart.config.data.datasets[0].data[0] + '%';
				     
				      var text = percent,
          			  textX = Math.round((width - ctx.measureText(text).width) / 2),
          			  textY = (height + this.chart.chartArea.top) / 2;
          			  ctx.fillText(text, textX+15, textY+12);
          			  
          			  }
	  },
	  
	  legend:{

	  labels: {
	                fontColor: 'rgb(255, 255, 255)',
	                fontSize:15,
	                fontStyle:'bold',
	                boxWidth:0
	            }
	  },
	  elements: {
	  				
	        arc: {
	        weight:1,
	            borderWidth: 0,
	            radius:"200%",
	            innerRadius:"60%"          
	            
	        }
	    }     
  }

  constructor(private stateDataServ: StateDataService) { 
  this.subscription = this.stateDataServ.getConstituencyId().subscribe(val =>{this.id = val;
    console.log(this.id);
    this.candidateQuestionData = this.subjectwiseQuestionData.find(x=>x.constituencyid == this.id);
    console.log(this.candidateQuestionData );
      if(this.candidateQuestionData){
      console.log(this.candidateQuestionData.explanation.split('\n')[0]); 
      this.doughnutChartData1 = [this.candidateQuestionData.finance,100];
      this.doughnutChartData2 = [this.candidateQuestionData.agriculture,100];
      this.doughnutChartData3 = [this.candidateQuestionData.defence,100];
      this.doughnutChartData4 = [this.candidateQuestionData.railways,100];
      this.doughnutChartData5 = [this.candidateQuestionData.education,100];
      this.doughnutChartData6 = [this.candidateQuestionData.health,100];
      this.doughnutChartData7 = [this.candidateQuestionData.employment,100];
      this.doughnutChartData8 = [this.candidateQuestionData.environment,100];
      this.doughnutChartData9 = [this.candidateQuestionData.energy,100];
      this.doughnutChartData10 = [this.candidateQuestionData.socialjustice,100];
      this.doughnutChartData11 = [this.candidateQuestionData.welfare,100];
      this.doughnutChartData12 = [this.candidateQuestionData.miscellaneous,100];
    }
  }); 
   
  }

  ngOnInit() { 
  console.log(this.id);
  
 // setTimeout(() => { 
  if(this.candidateQuestionData){
  console.log(this.candidateQuestionData.explanation.split('\n')[0]);


 
  this.doughnutChartData1 = [this.candidateQuestionData.finance,100];
  this.doughnutChartData2 = [this.candidateQuestionData.agriculture,100];
  this.doughnutChartData3 = [this.candidateQuestionData.defence,100];
  this.doughnutChartData4 = [this.candidateQuestionData.railways,100];
  this.doughnutChartData5 = [this.candidateQuestionData.education,100];
  this.doughnutChartData6 = [this.candidateQuestionData.health,100];
  this.doughnutChartData7 = [this.candidateQuestionData.employment,100];
  this.doughnutChartData8 = [this.candidateQuestionData.environment,100];
  this.doughnutChartData9 = [this.candidateQuestionData.energy,100];
  this.doughnutChartData10 = [this.candidateQuestionData.socialjustice,100];
  this.doughnutChartData11 = [this.candidateQuestionData.welfare,100];
  this.doughnutChartData12 = [this.candidateQuestionData.miscellaneous,100];
  }
  
 // });
  Chart.defaults.global.tooltips.enabled = false;
  }

  

}
