import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
import { AvatarComponent } from './avatar.component';
export default {
    title: "Lib/Avatar/Avatar",
    component: AvatarComponent,
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
    component: AvatarComponent,
    props: args,
    moduleMetadata: {
        declarations: [AvatarComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const Photo = Template.bind({});
Photo.args = {
    image: "https://www.pngfind.com/pngs/m/678-6782735_girl-memoji-hd-png-download.png",
    border: 'true'
};

export const TypeBorder = Template.bind({});
TypeBorder.args = {
    image: "https://static.wikia.nocookie.net/3bca95c7-760b-43b2-95e0-46d1bcef0135/scale-to-width/755",
    border: "true",
};

export const TypeNoBorder = Template.bind({});
TypeNoBorder.args = {
    image: "https://64.media.tumblr.com/5ade6a49f4d10546eacc82bb2c911090/95098c9e2c959958-09/s500x750/e4ab1d5156f9e4d9bdcf781bbb890801c4c17bfe.jpg",
    border: "false",
};

export const TypeSm = Template.bind({});
TypeSm.args = {
    image: "https://www.pngfind.com/pngs/m/678-6782735_girl-memoji-hd-png-download.png",
    border: 'true',
    size: "sm"
    
};

export const TypeMd = Template.bind({});
TypeMd.args = {
    image: "https://www.pngfind.com/pngs/m/678-6782735_girl-memoji-hd-png-download.png",
    border: 'true',
    size: "md"
};

export const TypeLg = Template.bind({});
TypeLg.args = {
    image: "https://www.pngfind.com/pngs/m/678-6782735_girl-memoji-hd-png-download.png",
    border: 'true',
    size: "lg"
};