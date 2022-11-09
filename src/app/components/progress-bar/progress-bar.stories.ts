import { ProgressBarComponent } from './progress-bar.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
export default {
    title: 'Lib/Progress-bar/progress-bar',
    component: ProgressBarComponent,
} as Meta;

const Template: Story<ProgressBarComponent> = (args: ProgressBarComponent) => ({
    component: ProgressBarComponent,
    props: args,
    moduleMetadata: {
        declarations: [ProgressBarComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const TypeSimple = Template.bind({});
TypeSimple.args = {
    type: "progress-bar",
    lose: 10,
    win: 20,
};


export const TypeInfo = Template.bind({});
TypeInfo.args = {
    type: "info-progress-bar",
    lose: 10,
    win: 20,
};
