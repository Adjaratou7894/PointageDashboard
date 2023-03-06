import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin/admin.page';
import { ToastrModule } from 'ngx-toastr'; 
import { CreerapprenantPage } from './creerapprenant/creerapprenant.page';
import { FormationPage } from './formation/formation.page';
import { ListePointagePage } from './liste-pointage/liste-pointage.page';
import { MenuPage } from './menu/menu.page';



const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },

  
  {path: 'admin', component: AdminPage},


 
  
  {
    path: 'menu/admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'formateur',
    loadChildren: () => import('./formateur/formateur.module').then( m => m.FormateurPageModule)
  },
  
  {
    path: 'creerformation',
    loadChildren: () => import('./creerformation/creerformation.module').then( m => m.CreerformationPageModule)
  },
  {
    path: 'formation',
    loadChildren: () => import('./formation/formation.module').then( m => m.FormationPageModule)
  },
  {
    path: 'creerapprenant',
    loadChildren: () => import('./creerapprenant/creerapprenant.module').then( m => m.CreerapprenantPageModule)
  },
  {
    path: 'liste-pointage',
    loadChildren: () => import('./liste-pointage/liste-pointage.module').then( m => m.ListePointagePageModule)
  },
  {
    path: 'demande-permission',
    loadChildren: () => import('./demande-permission/demande-permission.module').then( m => m.DemandePermissionPageModule)
  },
   {
    path: 'liste-user',
    loadChildren: () => import('./liste-user/liste-user.module').then( m => m.ListeUserPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },
  {
    path: 'liste-user',
    loadChildren: () => import('./liste-user/liste-user.module').then( m => m.ListeUserPageModule)
  },
  {
    path: 'listformation',
    loadChildren: () => import('./listformation/listformation.module').then( m => m.ListformationPageModule)
  },
 
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },







];

@NgModule({
  imports: [
    ToastrModule.forRoot() ,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
