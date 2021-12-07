import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotacionComponent} from './pages/votacion/votacion.component';

const routes: Routes = [
 
  //{path: 'welcome', component: WelcomeComponent},
  {path: 'votacion', component: VotacionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
