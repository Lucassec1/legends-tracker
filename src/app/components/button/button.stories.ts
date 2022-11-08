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

export const TypePrimary = Template.bind({});
TypePrimary.args = {
    label:'Primary',
    type: 'primary',
};

export const TypeSecondary = Template.bind({});
TypeSecondary.args = {
    label:'Secondary',
    type: 'secondary',
};

export const TypeGhost = Template.bind({});
TypeGhost.args = {
    label: 'Ghost',
    type: 'ghost',
};

export const TypeSm =  Template.bind({});
TypeSm.args = {
    label: 'sm',
    size: "sm"
}

export const TypeMd =  Template.bind({});
TypeMd.args = {
    label: 'md',
    size: "md",
}

export const TypeLg =  Template.bind({});
TypeLg.args = {
    label: 'lg',
    size: "lg",
}

export const TypeAdd = Template.bind({});
TypeAdd.args = {
    iconType: "add",
}

export const TypePosition = Template.bind({});
TypePosition.args = {
    iconType: "position-bot",
}

export const TypeClose = Template.bind({});
TypeClose.args = {
    iconType: "close",
    label: "Close",
}

export const TypeLoading = Template.bind({});
TypeLoading.args = {
    loading: true,
}