import { CardComponent } from './card.component';
import { Meta, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from '../../components/icon/icon.component';
export default {
    title: 'Lib/Card/card',
    component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
    component: CardComponent,
    props: args,
    moduleMetadata: {
        declarations: [CardComponent, AppIconComponent],
        imports: [CommonModule],
    },
});

export const CardSimple = Template.bind({});
CardSimple.args = {
    victory: 'true',
    firstSummonerSpell: "cleanse",
    secondSummonerSpell: "teleport",
    kill: 10,
    //championName: 'ahri',
    champion: 'lee sin',
    death: 5,
    assistance: 10,
};
