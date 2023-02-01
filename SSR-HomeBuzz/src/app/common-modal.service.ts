import { Injectable, Inject } from '@angular/core';
import { CommonService } from './core/services/common.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { UnclaimHomeComponent } from './modal/unclaim-home/unclaim-home.component';
import { MyHomeService } from './modal/my-homes/my-homes.service';
import { EventEmitterService } from './event-emitter.service';
import { NegotiatePropertyOfferComponent } from './modal/negotiate-property-offer/negotiate-property-offer.component';
import { RemovePropertyOfferComponent } from './modal/remove-property-offer/remove-property-offer.component';
import { MyOffersService } from './modal/my-offers/my-offers.service';
import { AddEditHomePhotoDescriptionComponent } from './modal/add-edit-home-photo-description/add-edit-home-photo-description.component';
import { MyLikesComponent } from './modal/my-likes/my-likes.component';
import { MyHomesComponent } from './modal/my-homes/my-homes.component';
import { MyOffersComponent } from './modal/my-offers/my-offers.component';
import { MySearchComponent } from './modal/my-search/my-search.component';
import { TermsComponent } from './modal/terms/terms.component';
import { PrivacyPolicyComponent } from './modal/privacy-policy/privacy-policy.component';
import { UploadPhotoDescriptionComponent } from './modal/upload-photo-description/upload-photo-description.component';
import { Router } from '@angular/router';
import { HomebuzzEstimatesComponent } from './modal/homebuzz-estimates/homebuzz-estimates.component';
import { SignInModalComponent } from './modal/sign-in-modal/sign-in-modal.component';
import { MakeOfferComponent } from './modal/make-offer/make-offer.component';
import { ClaimHomeComponent } from './modal/claim-home/claim-home.component';
import { PropertyImageGalleryComponent } from './modal/property-image-gallery/property-image-gallery.component';
import { PropertyOffersComponent } from './modal/agent-modal/property-offers/property-offers.component';
import { TransferOwnershipComponent } from './modal/transfer-ownership/transfer-ownership.component';
import { WINDOW } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class CommonModalService {

  public pageName: string;

  constructor(@Inject(WINDOW) private window: Window, private commonService: CommonService,
    private myHomeService: MyHomeService,
    public dialog: MatDialog,
    private eventEmitterService: EventEmitterService,
    private myOffersService: MyOffersService,
    private router: Router, ) { }

  openUnclaimDialog(componentName, PropertyDetailId, address) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    address = this.getAddressFormated(address);
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(UnclaimHomeComponent, dialogConfig);
    dialogRef.componentInstance.propertyDetailId = +PropertyDetailId;
    dialogRef.componentInstance.address = address;
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.myHomeService.unClaim(res).subscribe(data => {
          if (data.Success) {
            let ToastMessage = `You have successfully unclaimed ${res.Address}. A confirmation email has been sent to you.`;
            this.commonService.toaster(ToastMessage, true);
            // this.myClaimedHomes = this.myClaimedHomes.filter(home => home.PropertyDetailId !== data.Model.PropertyDetailId);
            this.eventEmitterService.onGetPropertyEventEmmit(res.PropertyDetailId, "UnClaimProperty");
            this.eventEmitterService.onNegotiatePropertyEventEmmit(res.PropertyDetailId);
            //   this.myhomeoutput.emit();
          }
        });
      }
      this.window.history.pushState(null, null, this.pageName);
    });
  }

  openNegotiateOfferDialog(componentName, Id, address) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    address = this.getAddressFormated(address);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(NegotiatePropertyOfferComponent, dialogConfig);
    dialogRef.componentInstance.offerId = +Id;
    dialogRef.componentInstance.address = address;
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.eventEmitterService.onNegotiatePropertyEventEmmit(res.PropertyDetailId);
      }
      history.pushState(null, null, this.pageName);
    });
  }

  openRemoveOfferDialog(componentName, Id, address) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    address = this.getAddressFormated(address);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(RemovePropertyOfferComponent, dialogConfig);
    dialogRef.componentInstance.offerId = +Id;
    dialogRef.componentInstance.address = address;
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.myOffersService.removeMyOffer(res.Id).subscribe(data => {
          let ToastMessage = `You have successfully removed your offer of ${res.Address}. A confirmation email has been sent to you.`;
          this.commonService.toaster(ToastMessage, true);
          this.eventEmitterService.onGetPropertyEventEmmit(res.PropertyDetailId, "RemoveOffer");
          this.eventEmitterService.onNegotiatePropertyEventEmmit(res.PropertyDetailId);
        });
      }
      this.window.history.pushState(null, null, this.pageName);
    });
  }

  openAddEditPropertyDialog(componentName, PropertyDetailId, address, isAgent?: boolean) {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    address = this.getAddressFormated(address);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "450px";
    const dialogRef = this.dialog.open(AddEditHomePhotoDescriptionComponent, dialogConfig);
    dialogRef.componentInstance.PropertyDetailId = PropertyDetailId;
    dialogRef.componentInstance.PropertyAddress = address;
    dialogRef.afterClosed().subscribe(res => {
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openMyLikesDialog(componentName) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(MyLikesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.window.history.pushState(null, null, this.pageName);
    });
  }

  openMyHomesDialog(componentName) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(MyHomesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.window.history.pushState(null, null, this.pageName);
    });
  }

  openMyOffersDialog(componentName) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(MyOffersComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.window.history.pushState(null, null, this.pageName);
    });
  }

  openMySearchesDialog(componentName) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(MySearchComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.router.navigate(['/property'], { queryParams: { SearchId: res.Id } });
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openTermsDialog(componentName, isAgent?: boolean) {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(TermsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openPrivacyDialog(componentName, isAgent?: boolean) {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(PrivacyPolicyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openUploadPhotoDialog(componentName, PropertyDetailId, address, isAgent?: boolean, isHidePhotoUploadDiv?: boolean) {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    address = this.getAddressFormated(address);
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(UploadPhotoDescriptionComponent, dialogConfig);
    dialogRef.componentInstance.propertyDetailId = +PropertyDetailId;
    dialogRef.componentInstance.address = address;
    if(isHidePhotoUploadDiv){
      dialogRef.componentInstance.isHidePhotoUploadDiv = isHidePhotoUploadDiv;
    }
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.eventEmitterService.onGetPropertyEventEmmit(res.PropertyDetailId);
      }
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openEstimateDialog(componentName) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(HomebuzzEstimatesComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      history.pushState(null, null, this.pageName);
    });
  }

  openSignUpDialog(componentName) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = componentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(SignInModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      history.pushState(null, null, this.pageName);
    });
  }

  openMakeOfferDialog(ComponentName, PropertyDetailId, address): void {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    address = this.getAddressFormated(address);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = ComponentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    dialogConfig.closeOnNavigation = true;
    const dialogRef = this.dialog.open(MakeOfferComponent, dialogConfig);
    dialogRef.componentInstance.PropertyDetailId = PropertyDetailId;
    dialogRef.componentInstance.PropertyAddress = address;
    dialogRef.afterClosed().subscribe(res => {
      history.pushState(null, null, this.pageName);
      return false;
    });
  }

  openClaimHomeDialog(ComponentName, PropertyDetailId, address, isAgent?: boolean): void {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = ComponentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(ClaimHomeComponent, dialogConfig);
    address = this.getAddressFormated(address);
    dialogRef.componentInstance.PropertyDetailId = PropertyDetailId;
    dialogRef.componentInstance.PropertyAddress = address;
    dialogRef.afterClosed().subscribe(res => {
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openPropertyImageDialog(ComponentName, PropertyDetailId, address): void {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = ComponentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "970px";
    address = this.getAddressFormated(address);
    const dialogRef = this.dialog.open(PropertyImageGalleryComponent, dialogConfig);
    dialogRef.componentInstance.PropertyDetailId = PropertyDetailId;
    dialogRef.componentInstance.PropertyAddress = address;
    dialogRef.afterClosed().subscribe(res => {
      history.pushState(null, null, this.pageName);
    });
  }

  openPropertyOffersDialog(ComponentName, PropertyDetailId, address, isAgent?: boolean): void {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = ComponentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(PropertyOffersComponent, dialogConfig);
    address = this.getAddressFormated(address);
    dialogRef.componentInstance.PropertyDetailId = PropertyDetailId;
    // dialogRef.componentInstance.PropertyAddress = address;
    dialogRef.afterClosed().subscribe(res => {
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  openTransferOwnershipDialog(ComponentName, PropertyDetailId, address, isAgent?: boolean): void {
    let url = this.router.url.split("/");
    if (isAgent) {
      this.pageName = url[2];
    } else {
      this.pageName = url[1];
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = ComponentName;
    dialogConfig.role = "alertdialog";
    dialogConfig.width = "400px";
    const dialogRef = this.dialog.open(TransferOwnershipComponent, dialogConfig);
    address = this.getAddressFormated(address);
    dialogRef.componentInstance.PropertyDetailId = PropertyDetailId;
    dialogRef.componentInstance.PropertyAddress = address;
    dialogRef.afterClosed().subscribe(res => {
      if (isAgent) {
        this.window.history.pushState(null, null, "agent/" + this.pageName);
      } else {
        this.window.history.pushState(null, null, this.pageName);
      }
    });
  }

  getAddressFormated(address: string) {
    address = address.split("--").join(", ");
    address = address.split("-").join(" ");
    return address;
  }
}
