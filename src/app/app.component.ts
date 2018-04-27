import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  blogPost  = [

    {
      titlePost: 'Titre 1',
      contentPost: 'contenu blabla',
      loveItsPost: 2,
      created_atPost: new Date()
    },

    {
      titlePost: 'Titre 2',
      contentPost: 'contenu blablablabla',
      loveItsPost: -2,
      created_atPost: new Date()
    }
  ]
}
