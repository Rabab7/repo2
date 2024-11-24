import { ContactComponent } from './../contact/contact.component';
import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import path from 'path';
import { PortfolioComponent } from '../portfolio/portfolio.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:'home' , component:HomeComponent , title:'home'},
    {path:'about' , component:AboutComponent , title:'about'},
    {path:'portfolio' , component:PortfolioComponent , title:'portfolio'},
    {path:'contact' , component:ContactComponent , title:'contact'},
    {path:'start framework' , component:HomeComponent , title:'home'},
    {path:'**' , component:HomeComponent , title:'home'}

];
