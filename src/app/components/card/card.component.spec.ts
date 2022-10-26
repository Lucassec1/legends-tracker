import { Type, MatchResultOptions, Victory } from './../core/types/card';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './../button/button.component';
import { render, screen } from '@testing-library/angular';
import { CardComponent, CardProps } from './card.component';

const defaultValue: CardProps = {
  type: 'match-history',
  victory: 'true',
  matchResult: MatchResultOptions.true,
  message: 'Vitória'
}

const cardTypes: Array<Type> = [
  'match-history',
  'simple',
]

const matchResultTypes: Array<Victory> = [
  'true',
  'false',
  'undefined',
]

const matchResultClasses: Array<MatchResultOptions> = [
  MatchResultOptions.true,
  MatchResultOptions.false,
  MatchResultOptions.undefined,
]

const matchResultMessages = [
  'Vitória',
  'Derrota',
  'Indefinido'
]

const sut = async (customProps: CardProps = defaultValue) => {
  await render(CardComponent, {
    componentProperties: customProps,
    imports: [CommonModule],
    declarations: [ButtonComponent],
  })
}

it.each(cardTypes)('should render card', async (type) => {
  await sut({
    ...defaultValue,
    type,
  })
  expect(screen.getByTestId('cardElement')).toHaveClass(`${type}-card`)
});

it.each([
  [MatchResultOptions.true, matchResultTypes[0], 'Vitória'],
  [MatchResultOptions.false, matchResultTypes[1], 'Derrota'],
  [MatchResultOptions.undefined, matchResultTypes[2], 'Indefinido'],
])('should set class %s when the match result is %s, then show a %s message', async (cardClass: MatchResultOptions, victory, message) => {
  const element = await sut({
    ...defaultValue,
    victory: victory
  });
  expect(screen.getByTestId('cardElement')).toHaveClass(`${cardClass}`);
  expect(screen.getByText(`${message}`)).toHaveClass("match-result");
})