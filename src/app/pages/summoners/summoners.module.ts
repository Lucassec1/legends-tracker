import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SummonersComponent } from "./summoners.component";
import { SummonersRoutingModule } from "./summoners-routing.module";

@NgModule({
    declarations: [SummonersComponent],
    imports: [CommonModule, SummonersRoutingModule]
})

export class SummonersModule { }