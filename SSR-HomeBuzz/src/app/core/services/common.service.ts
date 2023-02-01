import { Injectable } from '@angular/core';
import { ToasterService, Toast } from 'angular2-toaster';
import { Observable, Subject } from 'rxjs';

declare var popupFunctionObject: any;

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public subject: Subject<any> = new Subject();

  constructor(private toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  // Common toaster function
  toaster(data: string, flag: boolean) {
    var toast: Toast = {
      type: flag ? 'success' : 'error',
      title: flag ? 'Success' : 'Error',
      body: data,
      timeout: 8000,
      showCloseButton: true,
    };
    this.toasterService.pop(toast);
  }

  toasterNotification(data: string) {
    var toast: Toast = {
      type: 'info',
      title: 'Notification',
      body: data,
      timeout: 8000,
      showCloseButton: true,
    };
    this.toasterService.pop(toast);
  }

  toasterWarning(data: string) {
    var toast: Toast = {
      type: 'info',
      title: 'Warning',
      body: data,
      timeout: 8000,
      showCloseButton: true,
    };
    this.toasterService.pop(toast);
  }

  toasterWelcome(data: string, flag: boolean) {
    var toast: Toast = {
      type: flag ? 'success' : 'error',
      title: 'Welcome',
      body: data,
      timeout: 8000,
      showCloseButton: true,
    };
    this.toasterService.pop(toast);
  }


  public getConfig(height: number) {
    return {
      customConfig: '/assets/js/ckeditor/config.ts',
      height: height,
    };
  }

  updateProperty(param: String) {
    this.subject.next({ text: param });
  }
  getProperty(): Observable<any> {
    return this.subject.asObservable();
  }
}
