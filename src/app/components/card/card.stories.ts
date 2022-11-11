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
  type: "match-history",
  victory: 'true',
  firstSummonerSpell: 'cleanse',
  secondSummonerSpell: 'heal',
  kill: 10,
  champion: "evelynn",
  championName: "",
  //champion: "LeeSin",
  //championSquareImgURL: "https://i.pinimg.com/564x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg",
  /*championName() {
      return this.champion = 'lee sin';
  },*/
  death: 5,
  assistance: 10,
};
