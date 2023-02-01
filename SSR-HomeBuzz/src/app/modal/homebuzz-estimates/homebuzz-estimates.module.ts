import { NgModule } from "@angular/core";
<<<<<<< HEAD:Web/src/app/modal/homebuzz-estimates/homebuzz-estimates.module.ts
// import { ModalModule } from "ngx-bootstrap";
=======
import { ModalModule } from "ngx-bootstrap/modal";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/homebuzz-estimates/homebuzz-estimates.module.ts
import { HomebuzzEstimatesComponent } from "./homebuzz-estimates.component";

@NgModule({
    imports: [
        // ModalModule
    ],
    declarations: [
        HomebuzzEstimatesComponent
    ],
    exports: [HomebuzzEstimatesComponent],
    providers: [],
    entryComponents: [
        HomebuzzEstimatesComponent
    ]
})
export class HomebuzzEstimatesModule { }
