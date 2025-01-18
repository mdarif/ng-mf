import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '@ng-mf/data-access-user';
import { ChatBotComponent } from 'login/chatBot';

@Component({
  imports: [CommonModule, FormsModule, ChatBotComponent],
  selector: 'ng-mf-login-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
/**
 * This component is the entry point for the remote login application.
 */
export class RemoteEntryComponent {
  username = '';
  password = '';
  isLoggedIn$;

  /**
   * Constructor for the RemoteEntryComponent.
   * 
   * @param userService 
   */
  constructor(private userService: UserService) {
    this.isLoggedIn$ = this.userService.isUserLoggedIn$;
  }

  /**
   * Method to log in the user.
   */
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }
}
