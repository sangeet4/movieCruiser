import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home/cardDetail', component: CardsDetailComponent },
    { path: '', component: AppComponent },
    { path: '**', redirectTo: 'home/cardDetail', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MovieRoutingModule{}

export const routingComponents = [
    HomeComponent,
    AboutComponent,
    CardsDetailComponent
]
