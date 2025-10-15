import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-burger-button',
  standalone: true,
  imports: [],
  templateUrl: './burger-button.html',
  styleUrl: './burger-button.css'
})
export class BurgerButton {

  @Input() isOpen! : Signal<boolean>;
  @Input() toggle! : () => void;

}
