import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
import { BadgeComponent } from './badge.component';
export default {
    title: 'Lib/Badge/Badge',
    component: BadgeComponent,
} as Meta;

const Template: Story<BadgeComponent> = (args: BadgeComponent) => ({
    component: BadgeComponent,
    props: args,
    moduleMetadata: {
        declarations: [BadgeComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const TypeValue = Template.bind({});
TypeValue.args = {
    value: 100,
};

export const TypeNotification = Template.bind({});
TypeNotification.args = {
    value: 10,
    type: "notification",
};

export const TypeLevel = Template.bind({});
TypeLevel .args = {
    value: 10,
    type: "level",
};

export const TypeBottomLeft = Template.bind({});
TypeBottomLeft.args = {
    value: 10,
    direction: "bottom-left",
};

export const TypeBottomRight = Template.bind({});
TypeBottomRight.args = {
    value: 10,
    direction: "bottom-right",
};

export const TypeTopLeft = Template.bind({});
TypeTopLeft.args = {
    value: 10,
    direction: "top-left",
};

export const TypeTopRight = Template.bind({});
TypeTopRight.args = {
    value: 10,
    direction: "top-right",
};