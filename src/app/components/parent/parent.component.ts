import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Input() Wname='';
  @Input() todolist=[];
  addToDo(msg:string){
    var obj={
      Wname:msg,
    }
    this.todolist.push(obj);
  }
  constructor(){}
  ngOnInit() {
    //初始化属性
  }
 
}
