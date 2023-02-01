import { ToasterService, ToasterModule } from "angular2-toaster";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
<<<<<<< HEAD:Web/src/app/modal/my-search/my-search.module.ts
import { CommonService } from "app/core/services/common.service";
import { ErrorMessage } from "app/core/services/errormessage.service";
// import { ModalModule } from "ngx-bootstrap";
=======
import { CommonService } from "../../../app/core/services/common.service";
import { ErrorMessage } from "../../../app/core/services/errormessage.service";
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/my-search/my-search.module.ts
import { MySearchComponent } from "./my-search.component";
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ToasterModule,
        // ModalModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        MySearchComponent
    ],
    exports: [MySearchComponent],
    providers: [ErrorMessage, ToasterService, CommonService],
    entryComponents: [
        MySearchComponent
    ]
})
export class MySearchModule { }
