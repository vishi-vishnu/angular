import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { authGuard } from './auth.guard';
import { ViewChildComponent } from './view-child/view-child.component';
import { ContentprojectionComponent } from './contentprojection/contentprojection.component';
import { LibraryComponent } from './library/library.component';
import { signal } from '@angular/core';
import { SignalComponent } from './signal/signal.component';

export const routes: Routes = [
  {
    path: '',
    component: LifecycleComponent,
    // children: [
    //     {

    //     }
    // ]
  },
  {
    path: 'template',
    component: TemplatedrivenComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viewchild',
    component: ViewChildComponent,
  },
  {
    path: 'contentprojection',
    component: ContentprojectionComponent,
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    // path: 'signal/:id',
    path: 'signal',
    component: SignalComponent,
  },
  // {
  //   path:'*', redirectTo:'', pathMatch:'full'
  // }
];
