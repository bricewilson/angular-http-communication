import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpContextToken } from '@angular/common/http';
import { Observable } from 'rxjs';

export const CONTENT_TYPE = new HttpContextToken(() => 'application/json');

@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`AddHeaderInterceptor - ${req.url}`);

    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders: { 'Content-Type': req.context.get(CONTENT_TYPE) }
    });

    return next.handle(jsonReq);
  }

}