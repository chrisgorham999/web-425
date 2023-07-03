import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    // populates the acceptable student IDs for login
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
  }

  validate(studentId: number) {
    // some returns a true or false value for the studentId value
    return this.studentIds.some(id => id === studentId);
  }
}
