import { getAllCourses } from './../../store/course.selectors';
import { courseActionTypes } from './../../store/course.actions';
import { AppState } from './../../../store/reducers/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from './../../model/course.model';
import { CourseService } from './../../services/course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService, private store: Store<AppState>) { }

  ngOnInit() {
    this.courses$ = this.store.select(getAllCourses);
  }

}
