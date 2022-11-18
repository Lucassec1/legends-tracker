import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { DividerComponent } from "../divider/divider.component";
import { ButtonModule } from "../button/button.component.module";
import { DividerModule } from "../divider/divider.component.module";

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, ButtonModule, DividerModule],
    exports: [CardComponent]
})
export class CardModule {}