import { Course } from './../model/course.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { courseActionTypes, coursesLoaded } from './course.actions';

export interface CourseState extends EntityState<Course> {
  coursesLoaded: boolean;
}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialState = adapter.getInitialState({
  coursesLoaded: false
});

export const courseReducer = createReducer(
  initialState,

  on(courseActionTypes.coursesLoaded, (state, action) => {
    return adapter.addAll(
      action.courses,
      {...state, coursesLoaded: true}
    );
  }),

  on(courseActionTypes.createCourse, (state, action) => {
    return adapter.addOne(action.course, state);
  }),

  on(courseActionTypes.deleteCourse, (state, action) => {
    return adapter.removeOne(action.courseId, state);
  }),

  on(courseActionTypes.updateCourse, (state, action) => {
    return adapter.updateOne(action.update, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();
