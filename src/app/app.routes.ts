import { Routes } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { authGuard } from './auth.guard';
import { ViewChildComponent } from './view-child/view-child.component';

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
];
