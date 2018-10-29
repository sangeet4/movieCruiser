import { MovieBackListComponent } from './movie-back-list/movie-back-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CardsDetailComponent } from './cards-detail/cards-detail.component';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home/list',component: MovieListComponent},
    { path: 'home/cardDetail', component: CardsDetailComponent },
    { path: '', component: AppComponent },
    { path: 'showWishList',component: MovieBackListComponent},
    { path:'showWishList/redirectMe',redirectTo: 'showWishList',pathMatch: 'full'},
    { path: '**', redirectTo: 'showWishList', pathMatch: 'full' }
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
