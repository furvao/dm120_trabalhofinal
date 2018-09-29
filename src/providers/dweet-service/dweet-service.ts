import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DweetSettingsEnum } from '../../enum/DweetSettingsEnum';
import { Dweet } from '../../models/dweet';
import { With } from '../../models/with';
import { Content } from '../../models/content';

/*
  Generated class for the DweetServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DweetServiceProvider {

  private dweetioApiUrl = DweetSettingsEnum.DWEET_URL_GET_ALL;
  private dweetioApiPostUrl = DweetSettingsEnum.DWEET_URL_POST + '' + DweetSettingsEnum.DWEET_THING_NAME_BUZZ;

  constructor(public http: HttpClient) {
    console.log('Hello DweetServiceProvider Provider');
  }

  loadLastDweets(thingName: string){
    return this.http.get(this.dweetioApiUrl  + thingName);
  }

  sendBuzzer(value:number){
    console.log(this.dweetioApiPostUrl + ': ' + value);
    this.http.post(this.dweetioApiPostUrl, {"buzzer": value}).subscribe(
      data => console.log(data),
      err => console.log()
    );
  }

  preencherDweet(data:any){

    let dweet: Dweet;
    let _withs:Array<With>;
    let _date: string;
    let _time:string;

    _withs = new Array<With>();

    for (let _with of data.with){
      let tempContent:Content;
      tempContent = new Content(_with.content.temperatura, _with.content.luminous, _with.content.isPressedButton, _with.content.isPressedTouch, _with.content.alert);

      _date = this.formatDate(_with.created);
      _time = this.formatTime(_with.created);

      let tempWith: With;
      tempWith = new With(_with.thing, _with.created, tempContent, _date, _time);

      _withs.push(tempWith);
    }

    dweet = new Dweet(data.this, data.by, data.the, _withs);
  
    return dweet;
  }

  private formatDate(date:any):string {

    let originalDate: string = date;
    var dateParse = originalDate.slice(0, 10);
    return dateParse;
  }

  private formatTime(date:any):string {
    let originalDate:string = date;
    let timeParse = originalDate.slice(11, 19);
    return timeParse;
  }

}
