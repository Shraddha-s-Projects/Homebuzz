import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD:Web/src/app/pages/admin-pages/admin-dashboard/admin-dashboard.module.ts
// import { ModalModule } from 'ngx-bootstrap';
=======
import { ModalModule } from 'ngx-bootstrap/modal';
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/pages/admin-pages/admin-dashboard/admin-dashboard.module.ts
import { MatDialogModule, MatButtonModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { CommonService } from '../../../../app/core/services/common.service';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardService } from './admin-dashboard.service';

export const ROUTES: Routes = [
  { path: '', component: AdminDashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, LaddaModule, ToasterModule, HttpClientModule, 
    // ModalModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  declarations: [AdminDashboardComponent
  ],
  exports: [AdminDashboardComponent],
  providers: [AdminDashboardService, CommonService],
  entryComponents: []
})
export class AdminDashboardModule { }
