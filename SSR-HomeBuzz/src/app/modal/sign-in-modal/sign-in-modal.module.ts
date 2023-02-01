import { NgModule } from "@angular/core";
<<<<<<< HEAD:Web/src/app/modal/sign-in-modal/sign-in-modal.module.ts
// import { ModalModule } from "ngx-bootstrap";
=======
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/sign-in-modal/sign-in-modal.module.ts
import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
<<<<<<< HEAD:Web/src/app/modal/sign-in-modal/sign-in-modal.module.ts
import { BsDropdownModule } from 'ngx-bootstrap';
=======
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/sign-in-modal/sign-in-modal.module.ts
import {  MatDialogModule, MatButtonModule } from '@angular/material';
import { SignInModalComponent } from "./sign-in-modal.component";

@NgModule({
    imports: [
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, LaddaModule, ToasterModule, HttpClientModule, 
        // ModalModule, 
        TimepickerModule, BsDatepickerModule.forRoot(), BsDropdownModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    ],
    declarations: [
        SignInModalComponent
    ],
    exports: [SignInModalComponent],
    providers: [],
    entryComponents: [
        SignInModalComponent
    ]
})
export class SignInModalModule { }
