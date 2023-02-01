import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Home } from "../my-homes/my-homes";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "unclaimHomeModal",
  templateUrl: "./unclaim-home.component.html",
  styleUrls: ["./unclaim-home.component.css"]
})
export class UnclaimHomeComponent implements OnInit {
  @Output() onUnclaimEvent = new EventEmitter<any>();
  public address: string;
  public propertyDetailId: number;
  public home: Home;
  public userId: number = +localStorage.getItem("userId");
  constructor(
    public dialogRef: MatDialogRef<UnclaimHomeComponent>,
  ) { }

  ngOnInit() {
    this.home = new Home();
    this.home.Address = this.address;
    this.home.PropertyDetailId = this.propertyDetailId;
    this.home.UserId = this.userId;
  }

  close() {
    this.dialogRef.close(false);
  }

<<<<<<< HEAD:Web/src/app/modal/unclaim-home/unclaim-home.component.ts
  unClaimHome() {
=======
  unClaimHome(home?: any) {
>>>>>>> d44a2129a61e87498ddcedeb1c2d5fdaffff25d0:SSR-HomeBuzz/src/app/modal/unclaim-home/unclaim-home.component.ts
    this.dialogRef.close(this.home);
  }
}
