import { screen, render } from '@testing-library/angular';
import { BadgeComponent, AppBadgeProps } from './badge.component';
import { BadgeDirectionType } from '../core/types/badge';

const defaultValue = 80;
const bigValue = 1000;

const types: Array<AppBadgeProps['type']> = [
  'level',
  'notification'
];

const sizes: Array<AppBadgeProps['size']> = [
  'sm',
  'md'
];

const directions: Array<BadgeDirectionType> = [
  'bottom-left',
  'bottom-right',
  'top-left',
  'top-right'
];

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
    await sut({ value: bigValue });
    expect(screen.getByText('99+')).toBeInTheDocument();
  });

  it.each([
    {
      types,
      sizes
    }
  ])('should render correct type and size', async ({ type, size }: any) => {
    await sut({
      value: defaultValue,
      type,
      size
    });
    expect(screen.getByTestId('badgeElement')).toHaveClass(`${type}-app-badge-${size}`);
  });

  it.each(directions)('should render corret badge direction', async (direction) => {
    await sut ({
      value: defaultValue,
      direction
    });
    expect(screen.getByTestId('badgeElement')).toHaveClass(`app-badge-${direction}`);
  });

  // it('shound render a empty badge when do not have value', async () => {
  //   await sut ({
      
  //   })
  // })
});