import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminUser } from '../admin-user/IAdminUser';

@Injectable({
  providedIn: 'root'
})
export class AdminuserService {
 //http://localhost:3000/AdminLogins/
 private AdminLogins_urls = "http://localhost:3000/app/AdminLogins";
 private AdminLogins_find = "http://localhost:3000/app/AdminLogins";
 private AdminLogins_add = "http://localhost:3000/app/dashboard/AdminLogins/add";
 private AdminLogins_update = "http://localhost:3000/app/AdminLogins/update/";
 private AdminLogins_delete = "http://localhost:3000/app/AdminLogins/delete/";

 httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 };
 constructor(private httpclient:HttpClient) { }

 getAdminLogins():Observable<IAdminUser[]>{
   return this.httpclient.get<IAdminUser[]>(this.AdminLogins_urls);
 };

 create(AdminLogins: any): Observable<IAdminUser> {
  return this.httpclient.post<IAdminUser>(this.AdminLogins_add, JSON.stringify(AdminLogins), this.httpOptions);
}


}
