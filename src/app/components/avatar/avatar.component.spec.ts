import { render, screen } from '@testing-library/angular';
import { AvatarBorderOptions } from '../core/types/avatar';
import { SizeType } from '../core/types/size';
import { AvatarComponent, AppAvatarProps } from './avatar.component';


const sut = async(customProps: Partial<AvatarComponent> = {}): Promise<HTMLElement> => {
  await render(AvatarComponent, {
    componentProperties: customProps, 
  });
  return screen.queryByTestId('avatarElement') ? screen.getByTestId('avatarElement') : screen.getByTestId('avatarElement-without-border');
};

const sizes: Array<AppAvatarProps['size']> = [
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
    await sut({ type: AvatarBorderOptions.true, image: 'assets/user.svg' });
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'assets/user.svg'
    );
  });

  it('should render a default image when without image', async () => {
    await sut({ type: AvatarBorderOptions.false });
    expect(screen.getByRole('img')).not.toHaveAttribute(
      'src',
      'assets/user.svg'
    );
  });

  it('should render a error image when there is a broken image', async () => {
    await sut();
    expect(screen.getByRole('img')).toHaveAttribute(
      '(error)',
      '../../assets/user.svg'
    );  
  });
});

describe('AvatarComponent without border', () => {
  it.each(sizes)('should render a correct type and size without border', async (size) => {
    expect(
    await sut({
      size,
      border: "false",
      type: AvatarBorderOptions.false
    })).toHaveClass(`${AvatarBorderOptions.false}-avatar-size-${size}`)
  });
});