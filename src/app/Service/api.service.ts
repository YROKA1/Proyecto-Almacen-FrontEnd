import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://localhost:7250/api/';
  constructor(public http: HttpClient) { }
//url 

public async getAll(controller:String){
  var result:any;
  await this.http.get(this.url+controller).toPromise().then((res)=>{
    result=res;
  });
  return result;
}
postAll(controller:String, Body:any){
  return this.http.post(this.url+controller, Body).subscribe((res)=>{
    
  });
}
putAll(controller:String, Body:any){
  return this.http.put(this.url+controller,Body ).subscribe((res)=>{
    console.log(res);
  });
}
deleteAll(controller:String){
  return this.http.delete(this.url+controller).subscribe((res)=>{
    console.log(res);
  });
}





}
