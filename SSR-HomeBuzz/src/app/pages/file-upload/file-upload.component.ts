import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FileUploadService } from './file-upload.service';
import { CommonService } from 'app/core/services/common.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  public file: File;
  public isLoader: boolean;

  constructor(
    private cookieService: CookieService,
    private fileUploadService: FileUploadService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  uploadFile(isDrag, event) {
    if (isDrag) {
      this.file = event[0];
    } else {
      this.file = event.target.files[0];
    }
  }

  saveFile() {
    let Obj: any = {};
    Obj["UserId"] = +this.cookieService.get("user");
    Obj["File"] = this.file;
    this.isLoader = true;
    this.fileUploadService.saveMasterFile(Obj).subscribe((data: any) => {
      if (data.Success) {
        this.commonService.toaster(`You have successfully upload file.`, true);
      } else {
        this.commonService.toaster(data.ErrorMessage, false);
      }
      this.isLoader = false;
    });
  }

}
