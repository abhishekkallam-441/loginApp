import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getDetailsService } from 'getDetails.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = '';
  email: any;
  isVerified = false;
  password: any;
  error = false;
  constructor() {}

  onSubmit() {
    this.error = this.checkCred();
    if (!this.error) {
      this.isVerified = true;
    }
  }
  checkCred() {
    if (
      this.email === '' ||
      this.email === undefined ||
      this.password === '' ||
      this.password === undefined
    ) {
      return true;
    } else if (
      this.password === 'Abhi@111' &&
      this.email === 'abhishek@gmail.com'
    ) {
      return false;
    } else {
      return true;
    }
  }
  reVerif() {}
  getDetails() {}
}
