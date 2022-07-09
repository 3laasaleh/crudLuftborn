import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpClient,
} from "@angular/common/http";


import { environment } from "src/environments/environment";

@Injectable()
export class GlobService {
  token: string="";
  constructor(private http: HttpClient) {
 
  }
  get(url: string): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl + url);
  }
  getByID(url: string, id: any): Observable<any> {

    return this.http.get<any>(
      environment.baseUrl + url + "/?id="+id
     );

  }
  post(url: string, data: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + url, data);

  }
  put(url: string, data: any): Observable<any> {
    return this.http.put<any>(environment.baseUrl + url, data);
  }
  delete(url: string, id: any): Observable<any> {
    return this.http.delete<any>(environment.baseUrl + url + "?id=" + id);
  }
  

}


