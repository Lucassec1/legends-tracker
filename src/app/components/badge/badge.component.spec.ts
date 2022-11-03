import { screen, render } from '@testing-library/angular';
import { BadgeComponent, AppBadgeProps } from './badge.component';
import { BadgeDirectionType } from '../core/types/badge';

const defaultValue = 80;
const bigValue = 1000;

const sut = async(customProps: AppBadgeProps) => {
  await render(BadgeComponent, {
    componentProperties: customProps,
  });
};

describe('BadgeComponent', () => {
  it('should render badge with value', async () => {
    await sut({ value: defaultValue });
    expect(screen.getByText(defaultValue)).toBeInTheDocument();
  });

  it('should render 99+ when the value is more than 99', async () => {
    await sut({ 
      value: 1000,
    });
  });
  expect(screen.getByText('99+')).toBeInTheDocument();
  // expect(screen.getByText(bigValue)).toHaveValue('99+');
});