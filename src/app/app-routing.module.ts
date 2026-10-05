import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in', 
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'charge-spot-info',
    loadChildren: () => import('./charge-spot-info/charge-spot-info.module').then(m => m.ChargeSpotInfoPageModule)
  },
  {
    path: 'add-check-in',
    loadChildren: () => import('./add-check-in/add-check-in.module').then(m => m.AddCheckInPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfilePageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then(m => m.FaqsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./terms-conditions/terms-conditions.module').then(m => m.TermsConditionsPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'theme-language-selction',
    loadChildren: () => import('./theme-language-selction/theme-language-selction.module').then(m => m.ThemeLanguageSelctionPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then(m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then(m => m.VtPopupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
