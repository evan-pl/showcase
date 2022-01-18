import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroPageComponent } from './components/intro-page/intro-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: IntroPageComponent,
  },
  {
    path: 'budget-app',
    loadChildren: () =>
      import('@showcase-ws/budget-lib').then((m) => m.BudgetLibModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
