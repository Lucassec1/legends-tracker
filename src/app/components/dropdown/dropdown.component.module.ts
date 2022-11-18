import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IconModule } from "../icon/icon.component.module";
import { DropdownComponent } from "./dropdown.component";

@NgModule({
    declarations: [DropdownComponent],
    imports: [CommonModule, IconModule],
    exports: [DropdownComponent]
})
export class DropdownModule {}