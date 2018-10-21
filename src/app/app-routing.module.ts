import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { SetPeerComponent } from './components/set-peer/set-peer.component';
import { MovieSelectionComponent } from './components/movie-selection/movie-selection.component';

const routes: Routes = [
    {
        path: 'searchmovies',
        component: MovieSelectionComponent
    },
    {
        path: 'addreview',
        component: AddReviewComponent
    },
    {
        path: 'settings',
        component: SetPeerComponent
    },
    {
        path: '',
        component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
