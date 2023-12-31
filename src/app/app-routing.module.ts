import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import AppRoutes from './app.routes';

@NgModule({
    imports: [
      RouterModule.forRoot(
        AppRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })

export class AppRoutingModule { }
