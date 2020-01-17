import { courseActionTypes, coursesLoaded } from './course.actions';
import { CourseService } from './../services/course.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseEffects {

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.loadCourses),
      concatMap(() => this.courseService.getAllCourses()),
      map(courses => courseActionTypes.coursesLoaded({courses}))
    )
  );

  constructor(private courseService: CourseService, private actions$: Actions) {}
}
