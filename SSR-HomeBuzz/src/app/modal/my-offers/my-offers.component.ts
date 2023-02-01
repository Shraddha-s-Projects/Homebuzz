import { Component, OnInit, ComponentFactoryResolver, Output, EventEmitter, OnDestroy, Inject } from "@angular/core";
import { Offer } from "./my-offers";
import { MyOffersService } from "./my-offers.service";
import { EventEmitterService } from "../../event-emitter.service";
import { RemovePropertyOfferComponent } from "../remove-property-offer/remove-property-offer.component";
import { CommonService } from "../../../app/core/services/common.service";
import { MatDialogRef, MatDialog } from "@angular/material";
import { Router } from "@angular/router";
import { CommonModalService } from "../../../app/common-modal.service";
import { Subscription } from "rxjs";
<<<<<<< HEAD:Web/src/app/modal/my-offers/my-offers.component.ts

=======
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
declare var $: any;
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/my-offers/my-offers.component.ts
@Component({
  selector: "myOffersModal",
  templateUrl: "./my-offers.component.html",
  styleUrls: ["./my-offers.component.css"]
})
export class MyOffersComponent implements OnInit, OnDestroy {
  @Output() offerOutput: EventEmitter<any> = new EventEmitter<any>();
  public myOfferedHome: Offer[] = [];
  public userId: string;
  public modalComponent: any;
  public pageName: string;
  public isLoaded: boolean = false;
  public subsVar = new Subscription();
  public _unsubscribeAll = new Subscription();

  constructor(@Inject(WINDOW) private window: Window, @Inject(LOCAL_STORAGE) private localStorage: any, 
    public dialogRef: MatDialogRef<MyOffersComponent>,
    private myOffersService: MyOffersService,
    private commonService: CommonService,
    private resolver: ComponentFactoryResolver,
    private eventEmitterService: EventEmitterService,
    private router: Router,
    public dialog: MatDialog,
    private commonModalService: CommonModalService
  ) {
    // this.subsVar.add(this.eventEmitterService.invokeSearchResultPageComponentFunction.subscribe(
    //   (Obj: any) => {
    //     this.open();
    //   }
    // ));
    this.userId = this.localStorage.getItem("userId");
  }

  ngOnInit() {

    this.subsVar.add(this.eventEmitterService.invokeSearchResultPageComponentFunction.subscribe(
      (Obj: any) => {
        this.open();
      }
    ));

    let url = this.router.url.split("/");
    this.pageName = url[1];
    this.open();
  }

  open() {
    this._unsubscribeAll.add(this.myOffersService.getMyOfferedHomes(this.userId).subscribe(data => {
      if (data.Success) {
        this.myOfferedHome = data.Model;
        this.isLoaded = true;
      }
    },
    error => {
        // this.commonService.toaster(error.statusText, false);
        console.log(error);
        if (error.status == 401) {
          this.commonService.toaster("You have not access for my offers module. Please login.", false);
          this.close();
        }
        this.isLoaded = true;
    }));
  }
  close() {
    this.dialogRef.close(false);
  }

  onRemoveOfferLinkClick(offer: Offer) {
    let url = this.router.url.split("/");
    this.pageName = url[1];
    this.modalComponent = RemovePropertyOfferComponent;
<<<<<<< HEAD:Web/src/app/modal/my-offers/my-offers.component.ts
    let address = offer.Address + ", " + offer.Suburb + ", " + offer.City;
    window.history.pushState(null, null, this.pageName +'/removeoffer/' + address.replace(/[\W_]/g, "-") + "/" + offer.Id + "/" + this.getRandom());
    this.commonModalService.openRemoveOfferDialog("RemovePropertyOfferComponent", offer.Id, address);
=======
    this.window.history.pushState(null, null, this.pageName +'/removeoffer/' + offer.Address.replace(/[\W_]/g, "-") + "/" + offer.Id + "/" + this.getRandom());
    this.commonModalService.openRemoveOfferDialog("RemovePropertyOfferComponent", offer.Id, offer.Address);
    // this.router.navigate(['/'+ this.pageName + '/removeoffer/' +  offer.Address.replace(/[\W_]/g, "-")  + '/' + offer.Id + "/" + this.getRandom()]);
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/my-offers/my-offers.component.ts
  }

  getRandom() {
    return Math.floor(Math.random() * 10) + 1;
  }

  ngOnDestroy(): any {
    this.subsVar.unsubscribe();
    this._unsubscribeAll.unsubscribe();
  }
}
