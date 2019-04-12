import {Component, Input, OnInit} from '@angular/core';
import { CourseService } from 'src/app/presentation/services/course.service';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.scss']
})
export class CategoryTitleComponent implements OnInit {
  @Input() ariaInput;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }
  getCourseClicked(course)
  {
    this.courseService.setCourse(course);
  }

}