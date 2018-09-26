import { Component, OnInit,Output,Input} from '@angular/core';
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class secondChildComponent implements OnInit {

  @Input() Wname;
  @Input() todolist;
  @Output() donelist=[];
  deleteTodo(index,done){
    if(done){
      this.todolist.splice(index,1);
    }else{
      this.donelist.splice(index,1);
    }
  }
  changeTodo(index,done){
    if(done){
      var Todo=this.todolist[index];
      this.donelist.push(Todo);
      this.todolist.splice(index,1);
    }else{
      var Done=this.donelist[index];
      this.todolist.push(Done);
      this.donelist.splice(index,1);
    }
  }
  constructor() { }
  ngOnInit() {
  }

}