import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private snackbar: SnackBarService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Start Loader..........")
    this.showLoader();
    

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.checkStatus(event.status)
        this.onEnd();
      }
    },
      (err: any) => {
        debugger
        
        this.checkStatus(404)
        this.onEnd();
      }));

  }

  private checkStatus(status){
    
    switch (status)
    {
       case 200:  
          this.showsnackBar('Successfully Done','success');
       break;
       
       case 500:
           this.showsnackBar('Internal Error','error');
       break;

       case 404:
            this.showsnackBar('Page not found','error');
       break;
    }

    
  }

  private onEnd(): void {
    this.hideLoader();
    console.log("Hide Loader..........")
  }

  private showLoader(): void {
    this.loaderService.show();
    console.log("Start Loader..........")
  }

  private hideLoader(): void {
    this.loaderService.hide();
    console.log("Hide Loader..........")
  }

  private showsnackBar(msg,status): void {
    this.snackbar.show(msg, status);
    console.log("show alert ..........")
  }

}