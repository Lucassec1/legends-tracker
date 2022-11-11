import { TagComponent } from './tag.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
export default {
    title: 'Lib/Tag/tag',
    component: TagComponent,
} as Meta;

const Template: Story<TagComponent> = (args: TagComponent) => ({
    component: TagComponent,
    props: args,
    moduleMetadata: {
        declarations: [TagComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const TypeAdc = Template.bind({});
TypeAdc.args = {
    label: "adc",
};

export const TypeJungle = Template.bind({});
TypeJungle.args = {
    label: "jungle",
};

export const TypeMid = Template.bind({});
TypeMid.args = {
    label: "mid",
};

export const TypeSuporte = Template.bind({});
TypeSuporte.args = {
    label: "suporte",
};

export const TypeTop = Template.bind({});
TypeTop.args = {
    label: "top",
};