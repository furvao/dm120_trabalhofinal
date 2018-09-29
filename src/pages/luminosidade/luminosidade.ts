import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DweetSettingsEnum } from '../../enum/DweetSettingsEnum';
import { Dweet } from '../../models/dweet';
import { DweetServiceProvider } from '../../providers/dweet-service/dweet-service';

/**
 * Generated class for the LuminosidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-luminosidade',
  templateUrl: 'luminosidade.html',
})
export class LuminosidadePage {

  private thingName: any;
  private dweet: Dweet;
  private isLoading: boolean = true;
  private time: any;
  private dataPlot: Array<any>;

  chartOptions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dweetService: DweetServiceProvider) {
    this.time = setInterval(() => { this.getLastDweets() }, 3000);  
  }
  private getLastDweets() {

  this.dataPlot = [];
  this.dweetService.loadLastDweets(this.thingName).subscribe(
    data => this.preencherDweet(data),
    err => console.log(),
    () => this.isLoading = false
  );
}

  private preencherDweet(data: any){
    console.log(data)
  if (data && data.this !== 'failed') {
    this.dweet = this.dweetService.preencherDweet(data);
    this.loadDataForPlot(this.dweet);
    this.plotChart();
  }
}

  private loadDataForPlot(dweet: Dweet){
  for (let _with of dweet.getWith()) {
    let epoch = new Date(_with.getCreated()).getTime();
    this.dataPlot.push([epoch, _with.getContent().getLuminous()]);
  }
}

  private plotChart() {
  
  this.chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Luminosidade'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      labels: {
        formatter: function () {
          return this.value + 'Lumens';
        }
      }
    },
    series: [{
      name: 'lumens',
      data: this.dataPlot.reverse(),
      pointInterval: 60 * 60
    }]
  };
}

ngOnInit(){
  this.thingName = DweetSettingsEnum.DWEET_THING_NAME;
  this.getLastDweets();
}

ngOnDestroy(){
  clearInterval(this.time);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad LuminosidadePage');
}

}
