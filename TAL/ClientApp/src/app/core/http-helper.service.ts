import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpHelperService {
    protected headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    post(url: string, body: any): Observable<any> {
        let options = new RequestOptions({ headers: this.headers });
        let bd = JSON.stringify(body);
        //this.loggerService.log("url:"+ url+ " body: " +bd);

      return this.http.post(url, bd, options).pipe(map((res: Response) => this.extractData(res, false, "")));
      //.catch(err => this.handleError(err));
    }

    private extractData(res: Response, saveLocalCopy: boolean, key: string) {
        let body = res.json();

        //this.loggerService.log('res:'+body);
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        errMsg = error.message ? error.message : error.toString();
        return Observable.throw(errMsg);
    }

}
