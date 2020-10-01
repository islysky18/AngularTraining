import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title: string;
  post = {
    title: 'Title',
    isFavorite: true,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite change', eventArgs);
  }

  // tweet = {
  //   body: 'Here is the body of a tweet...',
  //   likesCount: 10,
  //   isLiked: true,
  // };

  // courses = [1, 2, 3, 4, 5];

  // viewMode = 'somethingelse';
  // courses = [
  //   { id: 1, name: 'course1' },
  //   { id: 2, name: 'course2' },
  //   { id: 3, name: 'course3' },
  // ];

  // onAdd() {
  //   this.courses.push({ id: 4, name: 'course 4' });
  // }

  // onRemove(course) {
  //   let index = this.courses.indexOf(course);
  //   this.courses.splice(index, 1);
  // }

  courses;

  onChange(course) {
    course.name = 'UPDATE';
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  canSave = true;

  task = {
    title: 'Review applications',
    // assignee: {
    //   name: 'John Smith',
    // },
    assignee: null,
  };
}
