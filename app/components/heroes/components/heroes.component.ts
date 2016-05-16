import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component.ts';
import { HeroService } from './hero.service.ts';


@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/app/templates/heroes.template.html',
    styleUrls: ['app/components/app/styles/heroes.style.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class HeroesComponent {
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
}



