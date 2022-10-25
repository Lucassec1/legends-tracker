import { CommonModule } from '@angular/common';
import { ButtonComponent } from './../button/button.component';
import { render, screen } from '@testing-library/angular';
import { CardComponent, CardProps } from './card.component';
import { Type } from '../core/types/card';

const defaultValue: CardProps = {
  type: 'match-history',
  victory: 'true',
  firstSummonerSpell: 'barrier',
  secondSummonerSpell: 'smite',
  kill: 1,
  death: 2,
  assistance: 3,
}

const sut = async (customProps: CardProps = defaultValue) => {
  await render(CardComponent, {
    componentProperties: customProps,
    imports: [CommonModule],
    declarations: [ButtonComponent],
  })
}

const cardTypes: Array<Type> = [
  'match-history',
  'simple',
]

it.each(cardTypes)('should render match type card', async (type) => {
  await sut({
    type
  })
  expect(screen.getByTestId('cardElement')).toHaveClass(`${type}-card`)
});