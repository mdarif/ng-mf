import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}