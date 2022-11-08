import { ButtonComponent } from './button.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
export default {
    title: 'Lib/Buttons/button',
    component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
    component: ButtonComponent,
    props: args,
    moduleMetadata: {
        declarations: [ButtonComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const primary = Template.bind({});
primary.args = {
    label:'Primary',
    type: 'primary',
};

export const secondary = Template.bind({});
secondary.args = {
    label:'Secondary',
    type: 'secondary',
};

export const ghost = Template.bind({});
ghost.args = {
    label: 'Ghost',
    type: 'ghost',
};

export const sm =  Template.bind({});
sm.args = {
    label: 'sm',
    size: "sm"
}

export const md =  Template.bind({});
md.args = {
    label: 'md',
    size: "md",
}

export const lg =  Template.bind({});
lg.args = {
    label: 'lg',
    size: "lg",
}

export const add = Template.bind({});
add.args = {
    iconType: "add",
}

export const position = Template.bind({});
position.args = {
    iconType: "position-bot",
}

export const close = Template.bind({});
close.args = {
    iconType: "close",
    label: "Close",
}

export const loading = Template.bind({});
loading.args = {
    loading: true,
}