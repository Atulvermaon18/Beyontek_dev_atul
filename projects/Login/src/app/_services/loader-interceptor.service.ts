import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("Start Loader..........")
    this.showLoader();
    

    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onEnd();
      }
    },
      (err: any) => {
        this.onEnd();
      }));

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

}