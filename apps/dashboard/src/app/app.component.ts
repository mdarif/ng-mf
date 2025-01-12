import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@ng-mf/data-access-user';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'ng-mf-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  private userService = inject(UserService);
  isLoggedIn$ = this.userService.isUserLoggedIn$;

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