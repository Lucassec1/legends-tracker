import { TabComponent } from './tab.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
export default {
    title: 'Lib/Tab/tab',
    component: TabComponent,
} as Meta;

const Template: Story<TabComponent> = (args: TabComponent) => ({
    component: TabComponent,
    props: args,
    moduleMetadata: {
        declarations: [TabComponent],
        imports: [CommonModule],
    },
});

export const TypeBottom = Template.bind({});
TypeBottom.args = {
    label: 'Placeholder',
    borderDirection: 'bottom'
};

export const TypeTop = Template.bind({});
TypeTop.args = {
    label: 'Placeholder',
    borderDirection: 'top'
};

export const TypeLeft = Template.bind({});
TypeLeft.args = {
    label: 'Placeholder',
    borderDirection: 'left'
};
export const TypeRight = Template.bind({});
TypeRight.args = {
    label: 'Placeholder',
    borderDirection: 'right',
};

export const TypeSelected = Template.bind({});
TypeSelected.args = {
    label: 'Placeholder',
    selected: true
};

export const TypeDisabled = Template.bind({});
TypeDisabled.args = {
    label: 'Placeholder',
    disabled: true
};

export const TypeSm = Template.bind({});
TypeSm.args = {
    label: 'Placeholder',
    tabSize: "sm"
};

export const TypeMd = Template.bind({});
TypeMd.args = {
    label: 'Placeholder',
    tabSize: "md"
};

export const TypeLg = Template.bind({});
TypeLg.args = {
    label: 'Placeholder',
    tabSize: "lg"
};