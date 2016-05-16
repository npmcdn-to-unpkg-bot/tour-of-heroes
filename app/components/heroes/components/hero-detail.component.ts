/**
 * Created by joevr on 2016/05/07.
 */
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/app/templates/hero-detail.template.html'
})
export class HeroDetailComponent {
    @Input()
    hero: Hero
}