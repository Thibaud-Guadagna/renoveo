import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Navbar } from '../../../components/navbar/navbar';
import { Footer } from '../../../components/footer/footer';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['/generator'])
  }

}
