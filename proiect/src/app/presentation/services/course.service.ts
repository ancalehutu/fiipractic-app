import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  selectedCourse: any='';

  constructor(private http: HttpClient){ }
  getCourseDetails(courseName: string) {
    //return this.http.get(`https://fiipractic-project.firebaseio.com/courses/${courseName}.json`);
    return this.http.get(`https://fiipractic-4a53e.firebaseio.com/courses/${courseName}.json`);
  }
  setCourse(course: string)
  {
    this.selectedCourse=course;
  }
  getCourse(course: string)
  {
    return this.selectedCourse;
  }
}
