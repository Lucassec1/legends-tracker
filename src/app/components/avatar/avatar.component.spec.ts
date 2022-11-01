import { render, screen } from '@testing-library/angular';
import { AvatarBorderOptions } from '../core/types/avatar';
import { SizeType } from '../core/types/size';
import { AvatarComponent, AppAvatarProps } from './avatar.component';

const sut = async(customProps: Partial<AvatarComponent> = {}): Promise<HTMLElement> => {
  await render(AvatarComponent, {
    componentProperties: customProps, 
  });
  return screen.getByTestId('ion-avatar');
};

const sizes: Array<AvatarComponent['size']> = [
  'sm',
  'md',
  'lg'
];

describe('AvatarComponent', () => {
  it.each(sizes)('should render correct sizes', async (size) => {
    expect(await sut({
      size: size as SizeType
    })).toHaveClass(`border-size-${size}`);
  });

  it('should have default border-size-md when size is not passed', async () => {
    expect(await sut()).toHaveClass('border-size-md');
  });

  it('should render avatar with image when url is passed', async () => {
    await sut({ type: AvatarBorderOptions.true, image: '../../assets/user.svg' });
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'assets/user.svg'
    );
  });
});