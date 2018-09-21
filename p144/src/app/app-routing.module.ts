import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';

const routes: Routes = [
  { path: 'builtin', component: BuiltInPipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
