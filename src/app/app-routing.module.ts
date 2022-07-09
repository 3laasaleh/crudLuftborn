import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'items', 
loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
{path:"",redirectTo:"items",pathMatch:"full"},
{path:"**",redirectTo:"items",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
