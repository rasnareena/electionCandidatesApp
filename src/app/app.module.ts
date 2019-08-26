import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
//import {  ActivatedRoute } from '@angular/router';

import { ChartsModule } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubheaderComponent } from './header/subheader/subheader.component';
import { FooterComponent } from './footer/footer.component';
import { MiddlecontentComponent } from './middlecontent/middlecontent.component';
import { CandidatedescriptionComponent } from './middlecontent/candidatedescription/candidatedescription.component';
import { MpsubjectquestionComponent } from './middlecontent/mpsubjectquestion/mpsubjectquestion.component';
import { MpladsexpenditureComponent } from './middlecontent/mpladsexpenditure/mpladsexpenditure.component';
import { ConstituencyindicatorsComponent } from './middlecontent/constituencyindicators/constituencyindicators.component';
import { StateDataService } from './service/stateData.service';
import { StateModel } from './model/stateModel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubheaderComponent,
    FooterComponent,
    MiddlecontentComponent,
    CandidatedescriptionComponent,
    MpsubjectquestionComponent,
    MpladsexpenditureComponent,
    ConstituencyindicatorsComponent
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    HttpClientModule,
    ChartsModule
    
  ],
  providers: [StateDataService,
              StateModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
