import { NgModule } from "@angular/core";
<<<<<<< HEAD:Web/src/app/modal/share-property/share-property.module.ts
// import { ModalModule } from "ngx-bootstrap";
=======
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/share-property/share-property.module.ts
import { SharePropertyComponent } from "./share-property.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToasterModule } from "angular2-toaster";

@NgModule({
    imports: [
        // ModalModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        ToasterModule
    ],
    declarations: [
        SharePropertyComponent
    ],
    exports: [SharePropertyComponent],
    providers: [],
    entryComponents: [
        SharePropertyComponent
    ]
})
export class SharePropertyModule { }
