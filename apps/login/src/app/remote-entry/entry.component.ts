import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '@ng-mf/data-access-user';
import { ChatBotComponent } from 'login/chatBot';
import { DarkModeService } from '@ng-mf/dark-mode';

@Component({
  imports: [CommonModule, FormsModule, ChatBotComponent],
  selector: 'ng-mf-login-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
/**
 * This component is the entry point for the remote login application.
 */
export class RemoteEntryComponent implements OnInit {
  username = '';
  password = '';
  isLoggedIn$;

  /**
   * Constructor for the RemoteEntryComponent.
   * 
   * @param userService 
   */
  constructor(private userService: UserService, private darkModeService: DarkModeService) {
    this.isLoggedIn$ = this.userService.isUserLoggedIn$;
  }

  /**
   * Lifecycle hook that runs when the component is initialized.
   */
  ngOnInit(): void {
    // Load the dark mode preference from local storage
    this.darkModeService.loadDarkModePreference();
  }

  /**
   * Method to log in the user.
   */
  login() {
    this.userService.checkCredentials(this.username, this.password);
  }

  /**
   * This method is used to toggle the dark mode
   */
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }
}
