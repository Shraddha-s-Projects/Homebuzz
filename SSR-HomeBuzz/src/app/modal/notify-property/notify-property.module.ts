import { NgModule } from "@angular/core";
<<<<<<< HEAD:Web/src/app/modal/notify-property/notify-property.module.ts
// import { ModalModule } from "ngx-bootstrap";
=======
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/notify-property/notify-property.module.ts
import { NotifyPropertyComponent } from "./notify-property.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ToasterModule } from "angular2-toaster";
import { MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { InputTrimModule } from "ng2-trim-directive";
import { ErrorMessage } from "../../../app/core/services/errormessage.service";
import { NotifyPropertyService } from "./notify-property.service";

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
        MatProgressSpinnerModule
    ],
    declarations: [
        NotifyPropertyComponent
    ],
    exports: [NotifyPropertyComponent],
    providers: [ErrorMessage, NotifyPropertyService],
    entryComponents: [
        NotifyPropertyComponent
    ]
})
export class NotifyPropertyModule { }
