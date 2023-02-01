import { ToasterService, ToasterModule } from "angular2-toaster";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
<<<<<<< HEAD:Web/src/app/modal/unclaim-home/unclaim-home.module.ts
import { MyHomeService } from "app/modal/my-homes/my-homes.service";
import { MyOffersService } from "app/modal/my-offers/my-offers.service";
import { CommonService } from "app/core/services/common.service";
import { ErrorMessage } from "app/core/services/errormessage.service";
// import { ModalModule } from "ngx-bootstrap";
import { SearchResultPageService } from "app/pages/search-result-page/search-result-page.service";
import { MyLikesService } from "app/modal/my-likes/my-likes.service";
=======
import { MyHomeService } from "../../../app/modal/my-homes/my-homes.service";
import { MyOffersService } from "../../../app/modal/my-offers/my-offers.service";
import { CommonService } from "../../../app/core/services/common.service";
import { ErrorMessage } from "../../../app/core/services/errormessage.service";
import { ModalModule } from "ngx-bootstrap/modal";
import { SearchResultPageService } from "../../../app/pages/search-result-page/search-result-page.service";
import { MyLikesService } from "../../../app/modal/my-likes/my-likes.service";
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/unclaim-home/unclaim-home.module.ts
import { UnclaimHomeComponent } from "./unclaim-home.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ToasterModule,
        // ModalModule
    ],
    declarations: [
        UnclaimHomeComponent
    ],
    exports: [UnclaimHomeComponent],
    providers: [ErrorMessage, MyHomeService, MyOffersService, SearchResultPageService, MyLikesService, ToasterService, CommonService],
    entryComponents: [
        UnclaimHomeComponent
    ]
})
export class UnClaimHomeModule { }
