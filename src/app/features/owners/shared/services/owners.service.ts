import { HttpClient } from '@angular/common/http';
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

  get():Observable<Owners>{
    return this.httpClient.get<Owners>(environment.ownersAPI);
  }
}
