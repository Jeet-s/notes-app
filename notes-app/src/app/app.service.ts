import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  url = AppModule.API_END_POINT;

  constructor(private http: HttpClient) { }

  api_get(path){
    return this.http.get(this.url + path);
  }

  api_put(path, body){
    return this.http.put(this.url + path, body);
  }

  api_post(path, body){
    console.log(body)
    return this.http.post(this.url + path, body);
  }

  api_delete(path){

  }

}
