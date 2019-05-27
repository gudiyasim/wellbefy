import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireList } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
sum1: number;
sum2: number;
sum3: number;
sum4: number;
sum5: number;
sum6: number;
sum7: number;
calculate(first: number, second: number, third: number, fourth: number, fifth: number, sixth: number, seventh: number) {
  this.sum1 = +second + +third + +fourth + +fifth;
  this.sum2 = +this.sum1 / 100;
  this.sum3 = +this.sum2 * +first;
  this.sum4 = +this.sum3 + +first;
  this.sum5 = +this.sum4 * +sixth;
  this.sum6 = +sixth + +seventh;
  this.sum7 = +this.sum4 * +this.sum6;
 }
 chart: []
    chartstuff() {
     this.chart = new Chart('canvas', {
           type: 'bar',
           data: {
             labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
             datasets: [
               {
                 label: 'Day 1 sickleave cost',
                 data: [this.sum5],
                 backgroundColor:  ["#2ecc71"],
                 fill: true,
               },
               {
                 label: 'Day 2-14 sickleave cost',
                 data: [this.sum7],
                 backgroundColor:  ["#3498db"],
                 fill: true,
               }
             ],
           }
         });
        }

constructor(private database: AngularFireDatabase) { }

  ngOnInit() {

      }
}
