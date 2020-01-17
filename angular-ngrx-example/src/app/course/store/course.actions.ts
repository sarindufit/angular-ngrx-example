
import { Course } from './../model/course.model';
import { createAction, props } from '@ngrx/store';


export const loadCourses = createAction(
  '[Courses List] Load Courses via Service',
);

export const coursesLoaded = createAction(
  '[Courses Effect] Courses Loaded Successfully',
  props<{courses: Course[]}>()
);

export const courseActionTypes = {
  loadCourses,
  coursesLoaded
};


