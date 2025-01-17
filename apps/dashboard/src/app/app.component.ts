import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@ng-mf/data-access-user';
import { distinctUntilChanged } from 'rxjs/operators';
import { ChatBotComponent } from 'login/chatBot';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ChatBotComponent],
  selector: 'ng-mf-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  // This is a public property that is exposed by the shared library
  public isLoggedIn$;

  /*
    * This is a constructor that injects the UserService and Router services.
    * It also subscribes to the isLoggedIn$ observable and navigates to the login page
    * if the user is not logged in.
    */
  constructor(private userService: UserService, private router: Router) {
    this.isLoggedIn$ = this.userService.isUserLoggedIn$;
  }

  /**
   * This is an ngOnInit lifecycle hook that subscribes to the isLoggedIn$ observable
   */
  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('login');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }
}
