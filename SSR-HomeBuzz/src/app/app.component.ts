import { Component, OnDestroy, AfterViewInit, Inject } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
// import { } from "googlemaps";
import { ToasterConfig } from "angular2-toaster";
import { CookieService } from "ngx-cookie-service";
import { AppService } from "./app.service";
import { v4 as uuidv4 } from 'uuid';
import { LOCAL_STORAGE, WINDOW } from '@ng-toolkit/universal';
import { DOCUMENT } from '@angular/common';

declare var popupFunctionObject: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnDestroy, AfterViewInit {
  private sub: any;

  //toaster config
  public config1: ToasterConfig = new ToasterConfig({
    positionClass: "toast-top-right"
  });

  constructor(@Inject(WINDOW) private window: Window, @Inject(LOCAL_STORAGE) private localStorage: any, private router: Router,
    private cookieService: CookieService, private appService: AppService) { }

  ngAfterViewInit() {
    const DSLScript = document.createElement("script");
    DSLScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWVd0v933wxKfFAGtWGWFYKUn65SK2HOQ&libraries=visualization,places"; // replace by your API key
    DSLScript.type = "text/javascript";
    document.body.appendChild(DSLScript);
    document.body.removeChild(DSLScript);

    this.router.events.subscribe(
      event => {
        let UserKey = this.cookieService.check("UserKey");
        if (!UserKey) {
          var Id = uuidv4();
          this.addUpdateUserKey(Id);
          this.cookieService.set("UserKey", JSON.stringify(Id));
        }
        let roleName = this.cookieService.check("rolename");
        if (!roleName) {
          this.cookieService.set("rolename", 'Visitor');
        }
        this.localStorage.setItem("isSurroundingSuburb", "true");
        if (event instanceof NavigationStart) {
          popupFunctionObject.showLoader();
        } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
          popupFunctionObject.hideLoader();
        }
      },
      (error: any) => {
        popupFunctionObject.hideLoader();
      }
    );
  }

  addUpdateUserKey(Id) {
    let obj: any = {};
    obj["UserKey"] = Id;
    let isUserCookieExist = this.cookieService.get("user");
    if (isUserCookieExist) {
      obj["UserId"] = +this.cookieService.get("user");
    }
    this.appService.addUpdateUserKey(obj).subscribe((data: any) => {

    });
  }

  ngOnDestroy(): any {
    //this.sub.unsubscribe();
  }

  closePopUp() {
    popupFunctionObject.closePopUp();
  }

  closePopUpAndRefresh() {
    popupFunctionObject.closePopUp();
    this.window.location.reload();
  }
}
