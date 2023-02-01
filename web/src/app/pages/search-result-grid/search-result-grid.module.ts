import { HttpClientModule } from '@angular/common/http';
import { ToasterModule } from 'angular2-toaster';
import { LaddaModule } from 'angular2-ladda';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { MakeOfferComponent } from 'app/modal/make-offer/make-offer.component';
import { AddEditHomePhotoDescriptionModule } from 'app/modal/add-edit-home-photo-description/add-edit-home-photo-description.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Ng2CompleterModule } from "ng2-completer";
import { AgmCoreModule } from '@agm/core';
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
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { SearchResultGridComponent } from '../search-result-grid/search-result-grid.component';
import { PropertylightFooterComponent } from '../propertylight-footer/propertylight-footer.component';
import { PropertyImageGalleryModule } from 'app/modal/property-image-gallery/property-image-gallery.module';
import { ClaimHomeModule } from 'app/modal/claim-home/claim-home.module';
import { SignInModalModule } from 'app/modal/sign-in-modal/sign-in-modal.module';
import { PropertylightFooterModule } from '../propertylight-footer/propertylight-footer.module';
import { SharePropertyModule } from 'app/modal/share-property/share-property.module';
import { TransferOwnershipModule } from 'app/modal/transfer-ownership/transfer-ownership.module';

export const ROUTES: Routes = [
  { path: '', component: SearchResultGridComponent }
];

@NgModule({
  imports: [
    // RouterModule.forChild(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCWVd0v933wxKfFAGtWGWFYKUn65SK2HOQ",
      libraries: ['visualization', 'places']
    }),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    ToasterModule,
    HttpClientModule,
    MatDialogModule,
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
    SharePropertyModule,
    ClaimHomeModule,
    SignInModalModule,
    PropertylightFooterModule,
    TransferOwnershipModule
  ],
  declarations: [SearchResultGridComponent
    // MakeOfferComponent,
  ],
  providers: [PropertyImageGalleryService, CommonService, MySearchService],
  exports: [SearchResultGridComponent],
  entryComponents: [
    // MakeOfferComponent
  ]
})
export class SearchResultGridModule { }
