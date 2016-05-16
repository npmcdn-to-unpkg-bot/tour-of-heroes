import { Component }       from '@angular/core';
import { HeroService }     from '../heroes/components/hero.service.ts';
import { HeroesComponent } from '../heroes/components/heroes.component.ts';
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
    directives: [HeroesComponent],
    providers: [
        HeroService
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}