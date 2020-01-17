import { RouterModule } from '@angular/router';
import { CourseEffects } from './store/course.effects';
import { CourseService } from './services/course.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesListComponent } from './component/courses-list/courses-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { courseReducer } from './store/course.reducers';

@NgModule({
  declarations: [
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('courses', courseReducer),
    EffectsModule.forFeature([CourseEffects]),
    RouterModule
  ],
  providers: [CourseService],
  bootstrap: [],
  exports: [CoursesListComponent]
})
export class CourseModule { }
