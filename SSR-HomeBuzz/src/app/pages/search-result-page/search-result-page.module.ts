import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultPageComponent } from './search-result-page.component';
<<<<<<< HEAD:Web/src/app/pages/search-result-page/search-result-page.module.ts
import { MakeOfferComponent } from 'app/modal/make-offer/make-offer.component';
import { PopoverModule } from 'ngx-bootstrap';
import { AddEditHomePhotoDescriptionModule } from 'app/modal/add-edit-home-photo-description/add-edit-home-photo-description.module';
import { SearchResultPageService } from './search-result-page.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Ng2CompleterModule } from "ng2-completer";
import { PropertyImageGalleryService } from 'app/modal/property-image-gallery/property-image-gallery.service';
import { CommonService } from 'app/core/services/common.service';
import { MyOffersModule } from 'app/modal/my-offers/my-offers.module';
import { MyHomesModule } from 'app/modal/my-homes/my-homes.module';
import { MyLikesModule } from 'app/modal/my-likes/my-likes.module';
import { NegotiatePropertyOfferModule } from 'app/modal/negotiate-property-offer/negotiate-property-offer.module';
import { MySearchModule } from 'app/modal/my-search/my-search.module';
import { MySearchService } from 'app/modal/my-search/my-search.service';
import { TermsModule } from 'app/modal/terms/terms.module';
import { PrivacyPolicyModule } from 'app/modal/privacy-policy/privacy-policy.module';
import { HomebuzzEstimatesModule } from 'app/modal/homebuzz-estimates/homebuzz-estimates.module';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatButtonToggleModule } from '@angular/material';
=======
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddEditHomePhotoDescriptionModule } from '../../../app/modal/add-edit-home-photo-description/add-edit-home-photo-description.module';
import { SearchResultPageService } from './search-result-page.service';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Ng2CompleterModule } from "ng2-completer";
import { PropertyImageGalleryService } from '../../../app/modal/property-image-gallery/property-image-gallery.service';
import { CommonService } from '../../../app/core/services/common.service';
import { MyOffersModule } from '../../../app/modal/my-offers/my-offers.module';
import { MyHomesModule } from '../../../app/modal/my-homes/my-homes.module';
import { MyLikesModule } from '../../../app/modal/my-likes/my-likes.module';
import { DeclinePropertyOfferModule } from '../../../app/modal/decline-property-offer/decline-property-offer.module';
import { NegotiatePropertyOfferModule } from '../../../app/modal/negotiate-property-offer/negotiate-property-offer.module';
import { MySearchModule } from '../../../app/modal/my-search/my-search.module';
import { MySearchService } from '../../../app/modal/my-search/my-search.service';
import { TermsModule } from '../../../app/modal/terms/terms.module';
import { PrivacyPolicyModule } from '../../../app/modal/privacy-policy/privacy-policy.module';
import { HomebuzzEstimatesModule } from '../../../app/modal/homebuzz-estimates/homebuzz-estimates.module';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatButtonToggleModule } from '@angular/material';
import { MyModalComponent } from '../../../app/my-modal/my-modal.component';
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/pages/search-result-page/search-result-page.module.ts
import { SearchResultGridComponent } from '../search-result-grid/search-result-grid.component';
import { GoogleMapModule } from '../google-map/google-map.module';
import { PropertyImageGalleryModule } from '../../../app/modal/property-image-gallery/property-image-gallery.module';
import { SharePropertyModule } from '../../../app/modal/share-property/share-property.module';
import { PropertylightFooterModule } from '../propertylight-footer/propertylight-footer.module';
<<<<<<< HEAD:Web/src/app/pages/search-result-page/search-result-page.module.ts
import { ClaimHomeModule } from 'app/modal/claim-home/claim-home.module';
import { TransferOwnershipModule } from 'app/modal/transfer-ownership/transfer-ownership.module';
import { SignInModalModule } from 'app/modal/sign-in-modal/sign-in-modal.module';
=======
import { ClaimHomeModule } from '../../../app/modal/claim-home/claim-home.module';
import { TransferOwnershipModule } from '../../../app/modal/transfer-ownership/transfer-ownership.module';
import { SignInModalModule } from '../../../app/modal/sign-in-modal/sign-in-modal.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/pages/search-result-page/search-result-page.module.ts
import { SearchResultGridModule } from '../search-result-grid/search-result-grid.module';

export const ROUTES: Routes = [
  { path: '', component: SearchResultPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyCWVd0v933wxKfFAGtWGWFYKUn65SK2HOQ",
    //   libraries: ['visualization', 'places']
    // }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ToasterModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonToggleModule,
    // ModalModule,
    MyOffersModule,
    MyHomesModule,
    MyLikesModule,
    MySearchModule,
    NegotiatePropertyOfferModule,
    AddEditHomePhotoDescriptionModule,
    TermsModule,
    PrivacyPolicyModule,
    HomebuzzEstimatesModule,
    PropertyImageGalleryModule,
    SlickCarouselModule,
    Ng2CompleterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    SearchResultGridModule,
    GoogleMapModule,
    SharePropertyModule,
    PropertylightFooterModule,
    PopoverModule.forRoot(),
    ClaimHomeModule,
    TransferOwnershipModule,
    SignInModalModule
  ],
<<<<<<< HEAD:Web/src/app/pages/search-result-page/search-result-page.module.ts
  declarations: [SearchResultPageComponent, 
     MakeOfferComponent, 
    //  SearchResultGridComponent
    ],
=======
  declarations: [SearchResultPageComponent],
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/pages/search-result-page/search-result-page.module.ts
  providers: [SearchResultPageService, PropertyImageGalleryService, CommonService, MySearchService],
  entryComponents: [],
  bootstrap: [SearchResultPageComponent]
})
export class SearchResultPageModule { }
