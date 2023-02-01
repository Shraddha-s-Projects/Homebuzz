import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD:Web/src/app/pages/file-upload/file-upload.module.ts
// import { ModalModule } from 'ngx-bootstrap';
=======
import { ModalModule } from 'ngx-bootstrap/modal';
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/pages/file-upload/file-upload.module.ts
import { MatDialogModule, MatButtonModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { CommonService } from '../../../app/core/services/common.service';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadService } from './file-upload.service';

export const ROUTES: Routes = [
  { path: '', component: FileUploadComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule, 
    RouterModule, 
    FormsModule, 
    ReactiveFormsModule, 
    LaddaModule, 
    ToasterModule, 
    HttpClientModule, 
    // ModalModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  declarations: [FileUploadComponent],
  exports: [FileUploadComponent],
  providers: [CommonService, FileUploadService],
  entryComponents: []
})
export class FileUploadModule { }
