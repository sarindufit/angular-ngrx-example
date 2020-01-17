import { CourseState } from './course.reducers';
import { Course } from './../model/course.model';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { selectAll, selectIds } from './course.reducers';

export const courseFeatureSelector = createFeatureSelector<CourseState>('courses');

export const getAllCourses = createSelector(
  courseFeatureSelector,
  selectAll
);

export const areCoursesLoaded = createSelector(
  courseFeatureSelector,
  state => state.coursesLoaded
);



