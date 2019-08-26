import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http'; 
import { Observable, Subject } from 'rxjs';
import { StateModel } from '../model/stateModel';

const httpOptions = {
      headers : new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' })
    };

@Injectable({
  providedIn: 'root'
})
export class StateDataService {

private stateData:any;
private stateConstituencyData:any;
public sequence: Observable;
public constituencyId;

public showData:boolean = true;

private subject = new Subject<any>();

    sendConstituencyId(message: string) {
        this.subject.next(message);
    }

    clearConstituencyId() {
        this.subject.next();
    }

    getConstituencyId(): Observable<any> {
        return this.subject.asObservable();
    }

     constructor(private http: HttpClient, private stateModel: StateModel) {
        /*this.getStateJSON().subscribe(data => {
            this.stateData = data;
            //this.stateData = data;
            console.log(this.stateData);
                       
        });*/

        /*this.getConstituencyJSON().subscribe(data => {
            console.log(data);
                       
        });*/

       /* this.getCandidatedetailJSON().subscribe(data => {
            console.log(data);
                       
        });*/

        /*this.getQuestionJSON().subscribe(data => {
            console.log(data);
                       
        });*/

       /* this.getExpenditureJSON().subscribe(data => {
            console.log(data);
                       
        });*/
    }

    public getStateJSON(): Observable<any> {
        let url = "http://localhost:5800/state/";
        return this.http.get(url, httpOptions);
    }

    public getConstituencyJSON():Observable<any> {
        let url = "http://localhost:5800/state_constituency/";
        return this.http.get(url, httpOptions);
    }

    public getCandidatedetailJSON():Observable<any> {
        let url = "http://localhost:5800/candidatedetail/";
        return this.http.get(url, httpOptions);
    }

    public getQuestionJSON():Observable<any> {
        let url = "http://localhost:5800/question/";
        return this.http.get(url, httpOptions);
    }

    public getExpenditureJSON():Observable<any> {
        let url = "http://localhost:5800/expenditure/";
        return this.http.get(url, httpOptions);
    }

    public getIndicatorsJSON():Observable<any> {
        let url = "http://localhost:5800/indicators/";
        return this.http.get(url, httpOptions);
    }
}