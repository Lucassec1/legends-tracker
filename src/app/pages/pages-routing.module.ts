import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home',
      loadChildren: () => 
        import('./home/home.module').then((r) => r.HomeModule),
    },
    {
      path: 'summoners',
      loadChildren: () => 
        import('./summoners/summoners.module').then((r) => r.SummonersModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }