import { NgModule } from "@angular/core";
<<<<<<< HEAD:Web/src/app/modal/transfer-ownership/transfer-ownership.module.ts
// import { ModalModule } from "ngx-bootstrap";
=======
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/transfer-ownership/transfer-ownership.module.ts
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ToasterModule } from "angular2-toaster";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { InputTrimModule } from "ng2-trim-directive";
import { ErrorMessage } from "../../../app/core/services/errormessage.service";
import { TransferOwnershipComponent } from "./transfer-ownership.component";
import { TransferOwnershipService } from "./transfer-ownership.service";
import { LaddaModule } from "angular2-ladda";

@NgModule({
    imports: [
        // ModalModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ToasterModule,
        HttpClientModule,
        InputTrimModule,
        LaddaModule
    ],
    declarations: [
        TransferOwnershipComponent
    ],
    exports: [TransferOwnershipComponent],
    providers: [ErrorMessage, TransferOwnershipService],
    entryComponents: [
        TransferOwnershipComponent
    ]
})
export class TransferOwnershipModule { }
