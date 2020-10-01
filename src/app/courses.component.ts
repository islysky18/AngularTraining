// import { CoursesService } from './courses.service';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'courses', // <div class="courses"> ".courses" <div id="courses"> "#courses"
//   // template: '<h2>{{getTitle()}}</h2>', //strinf Interpolation
//   // template: `
//   //   <h2>
//   //     {{ title }}
//   //     <ul>
//   //       <li *ngFor="let course of courses">
//   //         {{ course }}
//   //       </li>
//   //     </ul>
//   //   </h2>
//   // `,
//   // template: `
//   //   <img [src]="imageUrl" />
//   //   <table>
//   //     <tr>
//   //       <td [attr.colspan]="colSpan"></td>
//   //     </tr>
//   //   </table>
//   // `,

//   //class binding
//   // template: `<button class="btn btn-primary" [class.active]="isActive">
//   //   Save
//   // </button> `,

//   //style binding
//   // template: `
//   //   <button [style.backgroundColor]="isActive ? 'pink' : 'white'">Save</button>
//   // `,

//   //event binding
//   // template: ` <div (click)="onDivClicked()">
//   //   <button (click)="onSave($event)">Save</button>
//   // </div>`,

//   //event filter
//   // template: ` <input (keyup.enter)="onKeyUp()" /> `,

//   //template variables
//   // template: ` <input (keyup.enter)="onKeyUp($event)" /> `,
//   // template: ` <input #email (keyup.enter)="onKeyUp(email.value)" /> `,

//   //two way binding(with property binding)
//   //   <input
//   //   [value]="email"
//   //   (keyup.enter)="email = $event.target.value; onKeyUp()"
//   // />
//   template: ` <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> `,
// })
// export class CoursesComponent {
//   isActive = true;
//   onDivClicked() {
//     console.log('On Div Click');
//   }
//   onSave($event) {
//     $event.stopPropagation(); // stop the event bubbling
//     console.log('Button was click', $event);
//   }
//   // onKeyUp() {
//   //   console.log('ENTER was pressed');
//   // }

//   // onKeyUp(email) {
//   //   console.log(email);
//   // }

//   //two way binding
//   email = 'me@example.com';
//   onKeyUp() {
//     console.log(this.email);
//   }

//   // title = 'List of courses';
//   // courses;
//   // imageUrl = '';
//   // colSpan = 2;
//   // getTitle() {
//   //   return this.title;
//   // }
//   //Logic for calling an HTTP server
//   // constructor(service: CoursesService) {
//   //   //decouple the class without using new operator
//   //   //dependency injection
//   //   this.courses = service.getCourses();
//   // }
// }

//pipe
import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  // template: `
  //   {{ course.title | uppercase | lowercase }} <br />
  //   {{ course.students | number }} <br />
  //   {{ course.rating | number: '1.2-3' }} <br />
  //   {{ course.price | currency: 'AUD':true:'3.2-2' }} <br />
  //   {{ course.releaseDate | date: 'shortDate' }} <br />
  // `,
  template: ` {{ text | summary: 10 }} `,
})
export class CoursesComponent {
  // course = {
  //   title: 'The Complete Angular Course',
  //   rating: 4.9745,
  //   students: 30123,
  //   price: 190.95,
  //   releaseDate: new Date(2016, 3, 1),
  // };
  text = `
  Lorem Ipsum is simply dummy text of the printing and typese
  `;
}
