import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
import { AvatarComponent } from './avatar.component';
export default {
    title: 'Lib/Avatar/Avatar',
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
    image: "https://vejasp.abril.com.br/wp-content/uploads/2016/12/as-montanhas-de-zhangjiajie-inspiraram-james-cameron-a-fazer-avatar.jpg?quality=70&strip=info&resize=850,567",
    border: "true",
};
