import { Component } from '@angular/core';
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

}
