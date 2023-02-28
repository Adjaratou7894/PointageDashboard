import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin/admin.page';
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

  // {
  //   path: 'menu',
  //   pathMatch: 'full'
  // },

  // {
  //   path: "menu", component:  MenuPage,

  //   children: [
  //   //   {path: 'admin', component: AdminPage},
  //   //  {path: 'creerapprenant', component: CreerapprenantPage},
  //   //   {path: 'formateur', component: FormationPage},

  //   //   {path: 'formation', component: FormationPage},
  //   //   {path: 'liste_pointage', component: ListePointagePage},
  //   ]
  // },
  {path: 'admin', component: AdminPage},


 
  // {
  //   path: 'formation',
  //   loadChildren: () => import('./formation/formation.module').then( m => m.FormationPageModule)
  // },
  {
    path: 'menu/admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'formateur',
    loadChildren: () => import('./formateur/formateur.module').then( m => m.FormateurPageModule)
  },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  // },
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
    path: 'ajout-formateur',
    loadChildren: () => import('./ajout-formateur/ajout-formateur.module').then( m => m.AjoutFormateurPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'splash-screen',
    loadChildren: () => import('./splash-screen/splash-screen.module').then( m => m.SplashScreenPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
