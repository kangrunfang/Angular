import { Component, OnInit,Output,EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-firstchild',
  templateUrl: './firstchild.component.html',
  styleUrls: ['./firstchild.component.css']
})
export class firstChildComponent implements OnInit  {

  input1;
  @Output() private childOuter = new EventEmitter();

  commit(e){
     if(e.keyCode == 13){
      this.childOuter.emit(this.input1);
      this.input1="";
    }
  }
  constructor() {}
  ngOnInit() {}

}

