import { RouterModule, Routes } from '@angular/router';
import { AboutUs } from './about-us/about-us';
import { ContactUs } from './contact-us/contact-us';
import { NgModule } from '@angular/core';
import { Home } from './home/home';

export const routes: Routes = [
     {path : '',component : Home},
     {path : 'home',component : Home},
     {path : 'about-us',component : AboutUs},
     {path: 'contact-us', component: ContactUs}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}

