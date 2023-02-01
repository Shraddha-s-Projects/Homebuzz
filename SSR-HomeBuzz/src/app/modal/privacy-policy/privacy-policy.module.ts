import { NgModule } from "@angular/core";
<<<<<<< HEAD:Web/src/app/modal/privacy-policy/privacy-policy.module.ts
// import { ModalModule } from "ngx-bootstrap";
=======
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/privacy-policy/privacy-policy.module.ts
import { PrivacyPolicyComponent } from "./privacy-policy.component";

@NgModule({
    imports: [
        // ModalModule
    ],
    declarations: [
        PrivacyPolicyComponent
    ],
    exports: [PrivacyPolicyComponent],
    providers: [],
    entryComponents: [
        PrivacyPolicyComponent
    ]
})
export class PrivacyPolicyModule { }
