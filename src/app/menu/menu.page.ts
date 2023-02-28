import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/_services/auth.service';
import { StorageService } from '../services/_services/storage.service';
import { Inject,  PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})


export class MenuPage implements OnInit {

  // les attributs pour l'authentification
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showJuryBoard = false;
  email?: string;
  Role!:any;

  isLoginFailed = false;
  showAdmin=false;
  showSuperAdmin=false;

  // constructor() { }
  constructor( 
    @Inject(PLATFORM_ID) private platformId: object,
    private storageService: StorageService, private authService:AuthService,
    ) {}

  ngOnInit() {
    //la methode pour l'authenfication
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.Role= this.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showJuryBoard = this.roles.includes('ROLE_FOR');

      this.email = user.email;
    }
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

    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }
}
