import { ToasterService, ToasterModule } from "angular2-toaster";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommonService } from "app/core/services/common.service";
import { ErrorMessage } from "app/core/services/errormessage.service";
import { CommonModalService } from "app/common-modal.service";
import { MatDialogModule } from "@angular/material";
import { AdminLayoutComponent } from "./admin-layout.component";
import { AdminHeaderModule } from "../admin-header/admin-header.module";
import { AdminFooterModule } from "../admin-footer/admin-footer.module";
import { AdminDashboardModule } from "../../../app/pages/admin-pages/admin-dashboard/admin-dashboard.module";

@NgModule({
    imports: [
        AdminHeaderModule,
        AdminFooterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ToasterModule,
        MatDialogModule,
        AdminDashboardModule
    ],
    declarations: [AdminLayoutComponent],
    exports: [AdminLayoutComponent],
    providers: [ErrorMessage,CommonModalService, ToasterService, CommonService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: []
})
export class AdminLayoutModule { }
