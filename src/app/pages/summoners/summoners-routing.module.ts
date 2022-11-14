import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SummonersComponent } from "./summoners.component";

const routes: Routes = [{ path: '', component: SummonersComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class SummonersRoutingModule {}