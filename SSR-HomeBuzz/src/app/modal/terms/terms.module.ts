import { ToasterService, ToasterModule } from "angular2-toaster";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
<<<<<<< HEAD:Web/src/app/modal/terms/terms.module.ts
import { CommonService } from "app/core/services/common.service";
import { ErrorMessage } from "app/core/services/errormessage.service";
// import { ModalModule } from "ngx-bootstrap";
import { SearchResultPageService } from "app/pages/search-result-page/search-result-page.service";
=======
import { CommonService } from "../../../app/core/services/common.service";
import { ErrorMessage } from "../../../app/core/services/errormessage.service";
import { ModalModule } from "ngx-bootstrap/modal";
import { SearchResultPageService } from "../../../app/pages/search-result-page/search-result-page.service";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/terms/terms.module.ts
import { TermsComponent } from "./terms.component";

@NgModule({
    imports: [
        // ModalModule
    ],
    declarations: [
        TermsComponent
    ],
    exports: [TermsComponent],
    providers: [],
    entryComponents: [
        TermsComponent
    ]
})
export class TermsModule { }
