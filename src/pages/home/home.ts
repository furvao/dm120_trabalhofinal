import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TemperaturaPage } from '../temperatura/temperatura';
import { LuminosidadePage } from '../luminosidade/luminosidade';
import { DweetServiceProvider } from '../../providers/dweet-service/dweet-service';
import { Dweet } from '../../models/dweet';
import { DweetSettingsEnum } from '../../enum/DweetSettingsEnum';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  buzzer:boolean;
  private time: any;
  private thingName: any;
  private dweet: Dweet;
  button:boolean;
  touch:boolean;
  alert:string;

  constructor(public navCtrl: NavController,
    private dweetService: DweetServiceProvider) {
      this.time = setInterval(() => { this.listenButtons() }, 3000);  
  }

  listenBuzzer(buzzer){
    
    this.dweetService.sendBuzzer(buzzer ? 1 : 0);
    
  }

  listenButtons() {
    this.dweetService.loadLastDweets(this.thingName).subscribe(
      data => this.setToggles(data),
      err => console.log()
    );
  }

  setToggles(data:any){
    if (data && data.this !== 'failed') {
      this.dweet = this.dweetService.preencherDweet(data);

      this.button = this.dweet.getWith()[0].getContent().getPressedButton();
      this.touch = this.dweet.getWith()[0].getContent().getPressedTouch();
      this.alert = this.dweet.getWith()[0].getContent().getAlert();
      console.log(this.alert)
      
    }
  }

  goToTempPage(){
    this.navCtrl.push(TemperaturaPage);
  }

  goToLuminosidadePage(){
    this.navCtrl.push(LuminosidadePage);
  }

  ngOnInit(){
    this.thingName = DweetSettingsEnum.DWEET_THING_NAME;
    this.listenButtons();
  }
  
  ngOnDestroy(){
    clearInterval(this.time);
  }
}
