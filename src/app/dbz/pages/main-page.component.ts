import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private dbzServices: DbzServices
  ){}

  get characters() : Character[] {
    return [...this.dbzServices.characters];
  }

  onDeleteCharacter(id : string) {
    this.dbzServices.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzServices.addCharacter(character);
  }

}
