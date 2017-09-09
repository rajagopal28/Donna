import { Injectable } from '@angular/core';
import {Http, URLSearchParams, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

const BASE_API_URL : string = 'https://donna-backend.herokuapp.com/api/';
export class BaseAPIDataService {

  constructor(private http:Http) { }

  postData(path:string, form:any) {
    let  headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = new RequestOptions({
      headers: headers
    });
    let body = '';
    for( var key in form) {
      if(form.hasOwnProperty(key)) {
        if(body!== '') {
          body += '&';
        }
        body+= key+ '=' +form[key];
      }
    }
    return this.http.post(BASE_API_URL + path, body, options)
                    .map(res=> res.json()).catch(this.handleError);
  }

  getData(path:string, paramsMap:any){
    let params:URLSearchParams = new URLSearchParams();
    for( var key in paramsMap) {
      if(paramsMap.hasOwnProperty(key)) {
        params.set(key, paramsMap[key]);
      }
    }
    console.log(BASE_API_URL + path);
    return this.http.get(BASE_API_URL + path, {
                        search: params
                      }).map(res => res.json())
                        .catch(this.handleError);
  }

  deleteData(path:string, paramsMap:any){
    var options = new RequestOptions({
        body: JSON.stringify(paramsMap)
      });
    console.log(BASE_API_URL + path);
    return this.http.delete(BASE_API_URL + path, options).map(res => res.json())
                        .catch(this.handleError);
  }
  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json() || 'Server error');
  }
}
