import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home-page/home-page';
import { EstimateGenerator } from './pages/generator/estimate-generator/estimate-generator';

export const routes: Routes = [
    {path: '', component: HomePage},
    {path: 'generator', component:EstimateGenerator },

];
