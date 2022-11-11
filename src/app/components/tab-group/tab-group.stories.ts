import { TabGroupComponent } from './tab-group.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { action } from '@storybook/addon-actions';
import { TabComponent } from '../tab/tab.component'
export default {
    title: 'Lib/Tab-Group/tab-Group',
    component: TabGroupComponent,
} as Meta;

const Template: Story<TabGroupComponent> = (args: TabGroupComponent) => ({
    component: TabGroupComponent,
    props: args,
    moduleMetadata: {
        declarations: [TabGroupComponent, TabComponent],
        imports: [CommonModule],
    },
});

export const TypeHorizontal = Template.bind({});
TypeHorizontal.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
  ],
  border: "bottom",
  direction: "horizontal",
};

export const TypeVertical = Template.bind({});
TypeVertical.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
  ],
  border: "bottom",
  direction: "vertical",
};

export const TypeBorderLeft = Template.bind({});
TypeBorderLeft.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
  ],
  border: "left",
  direction: "vertical",
};

export const TypeBorderBottom = Template.bind({});
TypeBorderBottom.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
  ],
  border: "bottom",
  direction: "vertical",
};

export const TypeBorderRight = Template.bind({});
TypeBorderRight.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
  ],
  border: "right",
  direction: "vertical",
};

export const TypeBorderTop = Template.bind({});
TypeBorderTop.args = {
  tabs: [
    {
      label: 'Selected',
      selected: true,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
    {
      label: 'Not Selected',
      selected: false,
    },
  ],
  border: "top",
  direction: "vertical",
};

