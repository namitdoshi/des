import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {PaperAllocationComponent} from './paper-allocation/paper-allocation.component';
import {ScannerComponent} from './scanner/scanner.component';
import {ScDashboardComponent} from './scanner/sc-dashboard/sc-dashboard.component';
import {ScPaperAllocationComponent} from './scanner/sc-paper-allocation/sc-paper-allocation.component';
import {EvChangePasswordComponent} from './evaluator/ev-change-password/ev-change-password.component';
import {EvaluatorComponent} from './evaluator/evaluator.component';
import {EvMyEvalComponent} from './evaluator/ev-my-eval/ev-my-eval.component';
import {EvPaperAllocationComponent} from './evaluator/ev-paper-allocation/ev-paper-allocation.component';
import { MyevalCardListComponent } from './evaluator/ev-my-eval/myeval-card-list/myeval-card-list.component';
import { EvalListComponent } from './evaluator/ev-my-eval/eval-list/eval-list.component';
import { EvalDetailComponent } from './evaluator/ev-my-eval/eval-detail/eval-detail.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'paper-allocation', component: PaperAllocationComponent},
  {path: 'manage-users', component: ManageUsersComponent},
  {
    path: 'scanner', component: ScannerComponent, children: [
      {path: 'dashboard', component: ScDashboardComponent},
      {path: 'paper-allocation', component: ScPaperAllocationComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  },
  {
    path: 'evaluator', component: EvaluatorComponent, children: [
      {path: 'my-eval', component: EvMyEvalComponent, children: [
        {path: '', component: MyevalCardListComponent},
        {path: 'marking', component: EvalListComponent},
        {path: 'detail', component: EvalDetailComponent}
      ]},
      {path: 'paper-allocation', component: EvPaperAllocationComponent},
      {path: 'change-password', component: EvChangePasswordComponent},
      {path: '', redirectTo: 'my-eval', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
