import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }
  courseId:number;
  courses2;
  ngOnInit() {
    this.http.get('/api/courses2').subscribe(data=>{
      this.courses2 = data;
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
    this.route.navigate(['/course',600],{queryParams:{id:1000}});
  }

}

export class Course1{
  constructor(
      public id:number,
      public courseName:string,
      public images:string, 
      public courseDetail:string,
      public task:number,
      public person:number
  ){}
}

