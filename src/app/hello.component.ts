import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hello',
  template: `  
  <div  class="container p-4">
    <div class="d-flex justify-content-end">
    <button class="btn btn-secondary"(click)="logOut()">Logout</button>
    </div>
    <div *ngIf="!subStatus">
    <h3 class="">Personal Information</h3>
    <div>
      <p>Hi <strong>{{name}}</strong>, Welcome Back!</p>
    </div>
    <div class="p-2">
      <label class="form-label">Subscription</label>
      <select class="form-control" [(ngModel)]="subScribePlan">
        <option disabled>-Select Subscription-</option>
        <option *ngFor="let sub of subscription">{{sub}}</option>
      </select>
      <div [ngSwitch] = "subScribePlan" [style.color]="'green'">
        <p *ngSwitchCase="'Mobile Plan'">You have Choosen "Mobile Plan" </p>
        <p *ngSwitchCase="'Basic Plan'">You have Choosen "Basic Plan" </p>
        <p *ngSwitchCase="'Premiuim Plan'">You have Choosen 'Premiuim Plan' </p>
      </div>
      <label class="form-label">Gender</label>
      <select class="form-control" [(ngModel)]="gender">
        <option disabled>-Select Gender-</option>
        <option *ngFor="let gender of gender">{{gender}}</option>
      </select>
      <label class="mt-2 form-label">Comments</label>
      <textarea class="form-control" rows="2" [(ngModel)]="comments"></textarea>
    </div>
  </div>
  </div>
  <p *ngIf="this.subStatus" class="text-center text-success">Thank You for Subscribing with <strong>{{email}}</strong></p>
  <div *ngIf="!subStatus" class="text-center">
    <button class="btn btn-success" (click)="onSubmit()">Submit</button>
  </div>
  `,
  styles: [
    `h1 { font-family: Lato; }
  label:after{
    content:"*";
    color:red;    
  };
  .btnAlign{
    float
  };
  p{
    font-style:italic;
  }`,
  ],
})
export class HelloComponent {
  @Input() name:string;
  @Input() email:any;
  @Output() logOff = new EventEmitter();
  subscription: any = ["Mobile Plan","Basic Plan","Premiuim Plan"];
  subScribePlan:any;
  subStatus = false;
  comments: any;
  gender: any = ["Male","Female","Others"];
  loggingOff = false;
  logOut(){
    this.loggingOff = false;
    this.logOff.emit(this.loggingOff);
  }
  onSubmit(){
    this.subStatus = true
    setTimeout(()=>{
      // this.loggingOff = true;
      // this.subStatus = false;
    }, 5000);
  }
}
