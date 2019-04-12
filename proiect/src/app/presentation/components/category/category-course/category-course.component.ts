import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/presentation/services/course.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
 selector: 'app-category-course',
 templateUrl: './category-course.component.html',
 styleUrls: ['./category-course.component.scss']
})
export class CategoryCourseComponent implements OnInit {
 trainers: any = [];
 courseDescription: string = '';
 course: any = {}
 selectedCourseName: any;
 constructor(private coursesService: CourseService,
     private route: ActivatedRoute) { }

 ngOnInit() {
   this.route.paramMap.pipe(map((params: ParamMap) => params.get('course'))).subscribe(res => {
     this.selectedCourseName = res;
     this.getCourseDetails();
   })

 }

 getCourseDetails() {
   this.coursesService.getCourseDetails(this.selectedCourseName).subscribe(data => {
     this.course = data;
     this.trainers = this.course.trainers;
     this.courseDescription = this.course.description;
   })
 }

}