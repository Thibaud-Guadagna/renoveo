import { Component, signal } from '@angular/core';
import { BurgerButton } from '../burger-button/burger-button';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BurgerButton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['/'])
  }
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }
}
