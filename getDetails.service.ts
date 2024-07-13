import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class getDetailsService {
  getDetails() {
    return [
      { id: 1, name: 'Abhishek', Email: 'abishek@gmail.com', Gender: 'Male' },
      { id: 2, name: 'Sharuq', Email: 'sharuq@gmail.com', Gender: 'Male' },
    ];
  }
}
