import { RouterModule, Routes } from '@angular/router';
import { GeometriaComponent } from './components/geometria/geometria.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: GeometriaComponent },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
