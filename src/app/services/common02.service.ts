import { Injectable } from '@angular/core';
//这里记得引入
@Injectable({
  providedIn: 'root'
  //如果把大括号去掉 就是可不可以注入其他的服务
})
export class Service2Service {
  // set(key,value){
  //   console.log("set");//this.log.log("set");
  //   localStorage.setItem(key,value);
  // }
  // get(key){
  //   console.log("get方法调用了");
  //   return localStorage.getItem(key);
  // }
  //constructor(private log:LogService) { }
  constructor(){}
}
