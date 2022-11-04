import { CommonModule } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import { DirectionType } from './../core/types/direction';

import { DividerComponent, DividerProps } from './divider.component';

const directionOptions: Array<DirectionType> = [
  'horizontal',
  'vertical',
];

const defaultValue: DividerProps = {
  direction: 'horizontal',
};

const sut = async (customProps: DividerProps = defaultValue) => {
  await render(DividerComponent, {
    componentProperties: customProps,
    imports: [CommonModule],
  });
};

describe('DividerComponent', () => {
  it.each(directionOptions)('should render divider component with different directions', async (direction) => {
    await sut({
      direction
    })
    expect(screen.getByTestId('dividerElement')).toHaveClass(`${direction}-divider`);
  });
});
