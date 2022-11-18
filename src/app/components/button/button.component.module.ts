import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonComponent } from "./button.component";
import { IconModule } from "../icon/icon.component.module";

@NgModule({
    declarations: [ButtonComponent],
    imports: [CommonModule, IconModule],
    exports: [ButtonComponent]
})
export class ButtonModule {}