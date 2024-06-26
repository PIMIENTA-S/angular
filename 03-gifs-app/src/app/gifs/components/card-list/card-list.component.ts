import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
    selector: 'card-list-gifs',
    templateUrl: 'card-list.component.html'
})

export class CardListComponent {
    
    @Input()
    public gifs: Gif[] = []
    
    constructor() { }
    

}