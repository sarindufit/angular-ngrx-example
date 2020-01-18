import { Course } from './../model/course.model';
import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';


export const loadCourses = createAction(
  '[Courses List] Load Courses via Service',
);

export const coursesLoaded = createAction(
  '[Courses Effect] Courses Loaded Successfully',
  props<{courses: Course[]}>()
);

export const createCourse = createAction(
  '[Create Course Component] Create Course',
  props<{course: Course}>()
);

export const deleteCourse = createAction(
  '[Courses List Operations] Delete Course',
  props<{courseId: string}>()
);

export const updateCourse = createAction(
  '[Courses List Operations] Update Course',
  props<{update: Update<Course>}>()
);

export const courseActionTypes = {
  loadCourses,
  coursesLoaded,
  createCourse,
  deleteCourse,
  updateCourse
};


