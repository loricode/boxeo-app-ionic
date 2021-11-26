import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'segunda',
    loadChildren: () => import('./segunda/segunda.module').then( m => m.SegundaPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'competidores',
    canActivate:[AuthGuard],
    loadChildren: () => import('./competidores/competidores.module').then( m => m.CompetidoresPageModule)
  },
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
