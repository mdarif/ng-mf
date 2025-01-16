import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * This service is used to manage the user state.
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  /**
   * This is a private BehaviorSubject that is used to store the user's login state.
   */
  private isUserLoggedIn = new BehaviorSubject(false);
  /**
   * This is a public observable that can be used to subscribe to the user's login state.
   */
  public isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  /**
   * Check the user's credentials and set the user's login state.
   * 
   * @param username 
   * @param password 
   */
  checkCredentials(username: string, password: string) {
    if (username === 'demo' && password === 'demo') {
      this.isUserLoggedIn.next(true);
    } else {
      this.isUserLoggedIn.next(false);
    }
  }

  /**
   * Log the user out by setting the user's login state to false.
   */
  logout() {
    this.isUserLoggedIn.next(false);
  }
}