import { SearchComponent } from './search.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';

export default {
    title: 'Lib/Search/search',
    component: SearchComponent,
} as Meta;

const Template: Story<SearchComponent> = (args: SearchComponent) => ({
    component: SearchComponent,
    props: args,
    moduleMetadata: {
        declarations: [SearchComponent],
        imports: [CommonModule],
    },
});

export const TypeSimple = Template.bind({});
TypeSimple.args = {
    filter: "false",
    placeholder: "Placeholder"
};

export const TypeDropdown = Template.bind({});
TypeDropdown.args = {
    filter: "true",
    placeholder: "Placeholder"
};