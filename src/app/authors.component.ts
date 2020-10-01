import { AuthorsService } from './authors.service';
import { Component } from '@angular/core';
@Component({
  selector: 'authors',
  template: `
    <h2>
      {{ authors.length }} {{ title }}
      <ul>
        <li *ngFor="let author of authors">
          {{ author }}
        </li>
      </ul>
    </h2>
  `,
})
export class AuthorsComponent {
  title = 'Authors';
  authors;
  getTitle() {
    return this.title;
  }

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
