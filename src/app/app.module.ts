import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';
import { DashboardSpinnerComponent } from './dashboard/dashboard-spinner/dashboard-spinner.component';
import { DasboardTabsComponent } from './dashboard/dasboard-tabs/dasboard-tabs.component';
import { PaperAllocationComponent } from './paper-allocation/paper-allocation.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ExaminationListComponent } from './paper-allocation/examination-list/examination-list.component';
import { AllocateExaminationComponent } from './paper-allocation/allocate-examination/allocate-examination.component';
import { ViewAllocationComponent } from './paper-allocation/view-allocation/view-allocation.component';
import { ApproveUsersComponent } from './manage-users/approve-users/approve-users.component';
import { AdminUsersComponent } from './manage-users/admin-users/admin-users.component';
import { UserDetailsComponent } from './manage-users/user-details/user-details.component';
import { AuthComponent } from './auth/auth.component';
import {AuthRoutingModule} from './auth/auth-routing.module';
import { ScannerComponent } from './scanner/scanner.component';
import { ScNavComponent } from './scanner/sc-nav/sc-nav.component';
import { ScDashboardComponent } from './scanner/sc-dashboard/sc-dashboard.component';
import { ScCardComponent } from './scanner/sc-dashboard/sc-card/sc-card.component';
import { ScPaperAllocationComponent } from './scanner/sc-paper-allocation/sc-paper-allocation.component';
import { ScTableCardComponent } from './scanner/sc-paper-allocation/sc-table-card/sc-table-card.component';
import { ScExamCardComponent } from './scanner/sc-paper-allocation/sc-exam-card/sc-exam-card.component';
import { EvaluatorComponent } from './evaluator/evaluator.component';
import { EvNavComponent } from './evaluator/ev-nav/ev-nav.component';
import { EvMyEvalComponent } from './evaluator/ev-my-eval/ev-my-eval.component';
import { MyevalCardComponent } from './evaluator/ev-my-eval/myeval-card-list/myeval-card/myeval-card.component';
import { EvalListComponent } from './evaluator/ev-my-eval/eval-list/eval-list.component';
import { MyevalCardListComponent } from './evaluator/ev-my-eval/myeval-card-list/myeval-card-list.component';
import { EvalDetailComponent } from './evaluator/ev-my-eval/eval-detail/eval-detail.component';
import { QuestionComponentComponent } from './evaluator/ev-my-eval/eval-detail/question-component/question-component.component';
import { EvPaperAllocationComponent } from './evaluator/ev-paper-allocation/ev-paper-allocation.component';
import { EvPaperAllocationTabsComponent } from './evaluator/ev-paper-allocation/ev-paper-allocation-tabs/ev-paper-allocation-tabs.component';
import { EvExamListComponent } from './evaluator/ev-paper-allocation/ev-exam-list/ev-exam-list.component';
import { EvMyPaperComponent } from './evaluator/ev-paper-allocation/ev-my-paper/ev-my-paper.component';
import { EvChangePasswordComponent } from './evaluator/ev-change-password/ev-change-password.component';
import { AdminComponent } from './admin/admin.component';
import { ManageSubjectsComponent } from './admin/manage-subjects/manage-subjects.component';
import { SubjectListComponent } from './admin/manage-subjects/subject-list/subject-list.component';
import { SubjectDetailsComponent } from './admin/manage-subjects/subject-details/subject-details.component';
import { ManageExamsComponent } from './admin/manage-exams/manage-exams.component';
import { ExamListComponent } from './admin/manage-exams/exam-list/exam-list.component';
import { ExamDetailsComponent } from './admin/manage-exams/exam-details/exam-details.component';
import { AddExamComponent } from './admin/manage-exams/exam-details/add-exam/add-exam.component';
import { AddQuestionComponent } from './admin/manage-exams/exam-details/add-question/add-question.component';
import { AddQuestionModalComponent } from './admin/manage-exams/exam-details/add-question-modal/add-question-modal.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdManageUsersComponent } from './admin/ad-manage-users/ad-manage-users.component';
import { AdUserDetailsComponent } from './admin/ad-manage-users/ad-user-details/ad-user-details.component';
import { AdUserListComponent } from './admin/ad-manage-users/ad-user-list/ad-user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    DashboardCardComponent,
    DashboardSpinnerComponent,
    DasboardTabsComponent,
    PaperAllocationComponent,
    ManageUsersComponent,
    ExaminationListComponent,
    AllocateExaminationComponent,
    ViewAllocationComponent,
    ApproveUsersComponent,
    AdminUsersComponent,
    UserDetailsComponent,
    AuthComponent,
    ScannerComponent,
    ScNavComponent,
    ScDashboardComponent,
    ScCardComponent,
    ScPaperAllocationComponent,
    ScTableCardComponent,
    ScExamCardComponent,
    EvaluatorComponent,
    EvNavComponent,
    EvMyEvalComponent,
    MyevalCardComponent,
    EvalListComponent,
    MyevalCardListComponent,
    EvalDetailComponent,
    QuestionComponentComponent,
    EvPaperAllocationComponent,
    EvPaperAllocationTabsComponent,
    EvExamListComponent,
    EvMyPaperComponent,
    EvChangePasswordComponent,
    AdminComponent,
    ManageSubjectsComponent,
    SubjectListComponent,
    SubjectDetailsComponent,
    ManageExamsComponent,
    ExamListComponent,
    ExamDetailsComponent,
    AddExamComponent,
    AddQuestionComponent,
    AddQuestionModalComponent,
    AdminDashboardComponent,
    AdManageUsersComponent,
    AdUserDetailsComponent,
    AdUserListComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
