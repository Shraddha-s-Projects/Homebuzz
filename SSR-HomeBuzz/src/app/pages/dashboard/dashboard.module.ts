import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
<<<<<<< HEAD:Web/src/app/pages/dashboard/dashboard.module.ts
// import { ModalModule } from 'ngx-bootstrap';
=======
import { ConfirmDeleteComponent } from '../../../app/modal/confirm-delete/confirm-delete.component';
import { ModalModule } from 'ngx-bootstrap/modal';
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/pages/dashboard/dashboard.module.ts
import { Ng2CompleterModule } from "ng2-completer";
import { AgmCoreModule } from '@agm/core';
import { OpenStreetMapModule } from '../open-street-map/open-street-map.module';
import { HomebuzzEstimatesModule } from '../../../app/modal/homebuzz-estimates/homebuzz-estimates.module';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCWVd0v933wxKfFAGtWGWFYKUn65SK2HOQ",
      libraries: ['visualization','places']
    }),
    CommonModule, RouterModule, FormsModule, ReactiveFormsModule, LaddaModule, ToasterModule, HttpClientModule, 
    // ModalModule, 
    Ng2CompleterModule,
    OpenStreetMapModule,
    HomebuzzEstimatesModule
  ],
  declarations: [DashboardComponent
  ],
  exports:[DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
