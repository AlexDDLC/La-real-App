import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesAPIService {

  // user:any = [];
  // id:string = 'kdfl';

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get('');
  }

  // getPerfil()
  // {
  //   return this.httpClient.post('url',this.id).subscribe(
  //     res => this.user,
  //     err => console.log(err)
  //   )
  // }
}
