import { DividerComponent } from './divider.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
export default {
    title: 'Lib/Divider/divider',
    component: DividerComponent,
} as Meta;

const Template: Story<DividerComponent> = (args: DividerComponent) => ({
    component: DividerComponent,
    props: args,
    moduleMetadata: {
        declarations: [DividerComponent],
        imports: [CommonModule],
    },
});

export const TypeHorizontal = Template.bind({});
TypeHorizontal.args = {
    direction: "horizontal"
};

export const TypeVertical = Template.bind({});
TypeVertical.args = {
    direction: "vertical"
};