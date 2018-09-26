import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})  //有的没有 有的有都是因为什么
export class LogService {
  log(key){
    console.log("get方法调用了");
  }
  constructor() { }
}
