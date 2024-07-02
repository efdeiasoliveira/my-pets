import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Owners } from '../interfaces/owners.model';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(page:number,pageSize:number,filter?:string, fields?: string, sort?: string):Observable<Owners>{
    const parameters = new HttpParams()
      .append('page',page)
      .append('pageSize',pageSize)
      .append('filter',filter ? filter : '')
      .append('fields',fields ? fields : '')
      .append('sort',sort ? sort : 'id')


    return this.httpClient.get<Owners>(environment.ownersAPI, { params: parameters });
  }
}
