import { ButtonComponent } from './button.component';
import { Meta, Story } from '@storybook/angular';
export default {
    title: 'Components/Buttons',
    component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
});

export const Primary = Template.bind({});
Primary.args = {
    label:'Primary',
    type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label:'Secondary',
    type: 'secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
    label: 'Ghost',
    type: 'ghost',
};