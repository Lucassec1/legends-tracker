import { Meta, Story } from '@storybook/angular';
import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
export default {
    title: 'Lib/Input/input',
    component: InputComponent,
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
    component: InputComponent,
    props: args,
    moduleMetadata: {
        declarations: [InputComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const Input = Template.bind({});
Input.args = {
    type: "text",
    placeholder: "Placeholder"
};

export const TypeUser = Template.bind({});
TypeUser.args = {
    type: "user",
    placeholder: "Placeholder"
};

export const TypePassword = Template.bind({});
TypePassword.args = {
    type: "password",
    visible: true,
    placeholder: "Placeholder"
};

export const TypeEmail = Template.bind({});
TypeEmail.args = {
    type: "email",
    placeholder: "Placeholder"
};
