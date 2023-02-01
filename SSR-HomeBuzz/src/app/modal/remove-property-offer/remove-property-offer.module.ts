import { ToasterService, ToasterModule } from "angular2-toaster";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyHomeService } from "../../../app/modal/my-homes/my-homes.service";
import { MyOffersService } from "../../../app/modal/my-offers/my-offers.service";
import { CommonService } from "../../../app/core/services/common.service";
import { ErrorMessage } from "../../../app/core/services/errormessage.service";
import { MyOffersComponent } from "../../../app/modal/my-offers/my-offers.component";
import { MyHomesComponent } from "../../../app/modal/my-homes/my-homes.component";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { PopoverModule } from "ngx-bootstrap/popover";
import { AddEditHomePhotoDescriptionModule } from "../../../app/modal/add-edit-home-photo-description/add-edit-home-photo-description.module";
import { NegotiatePropertyOfferComponent } from "../../../app/modal/negotiate-property-offer/negotiate-property-offer.component";
import { DeclinePropertyOfferComponent } from "../../../app/modal/decline-property-offer/decline-property-offer.component";
import { SearchResultPageService } from "../../../app/pages/search-result-page/search-result-page.service";
import { UnclaimHomeComponent } from "../../../app/modal/unclaim-home/unclaim-home.component";
import { MyLikesService } from "../../../app/modal/my-likes/my-likes.service";
import { MyLikesComponent } from "../../../app/modal/my-likes/my-likes.component";
import { RemovePropertyOfferComponent } from "../../../app/modal/remove-property-offer/remove-property-offer.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ToasterModule,
        ModalModule,
        AddEditHomePhotoDescriptionModule
    ],
    declarations: [
        RemovePropertyOfferComponent
    ],
    exports: [RemovePropertyOfferComponent],
    providers: [ErrorMessage, MyHomeService, MyOffersService, SearchResultPageService, MyLikesService, ToasterService, CommonService],
    entryComponents: [
        RemovePropertyOfferComponent
    ]
})
export class RemovePropertyOfferModule { }
