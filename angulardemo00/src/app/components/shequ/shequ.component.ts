import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  passages;


  ngOnInit() {
    console.log(this.router.snapshot.queryParams['id']);

    this.http.get('/api/passages').subscribe(data=>{
      this.passages = data;
    })





    //参数快照
    // this.courseId = this.router.snapshot.params['courseId'];
    //参数订阅
    this.router.params.subscribe((params)=>{
      this.courseId = params['courseId'];
    });
  }

  go(){
    //js跳转
    this.route.navigate(['/shequ',600],{queryParams:{id:1000}});
  }
}

export class passage{
  constructor(
    public id:number,
    public images1:string, 
    public images2:string,
    public passageName:string,
    public passageDetail:string,
    public person:string,
    public date:string
  ){}
}

