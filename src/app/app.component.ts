import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/_services/auth.service';
import { StorageService } from './services/_services/storage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router ,private storageService: StorageService, private authService: AuthService) {}
  isLoginPage(): boolean {
    return this.router.url === '/connexion';
  }

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  nomadmin:any

 

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     

      this.username = user.username;
    }

    this.nomadmin= this.storageService.getUser()
    console.log(this.nomadmin)
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
