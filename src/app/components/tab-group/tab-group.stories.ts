import { TabGroup, TabGroupComponent } from './tab-group.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
export default {
    title: 'Lib/Tab-Group/Tab-Group',
    component: TabGroupComponent,
} as Meta;

const Template: Story<TabGroupComponent> = (args: TabGroupComponent) => ({
    component: TabGroupComponent,
    props: args,
    moduleMetadata: {
        declarations: [TabGroupComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const TypeAdc = Template.bind({});
TypeAdc.args = {
    border: "bottom",
    size: 'md',
    
};