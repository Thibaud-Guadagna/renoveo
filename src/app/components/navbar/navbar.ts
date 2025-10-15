import { Component, signal } from '@angular/core';
import { BurgerButton } from '../burger-button/burger-button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }
}
