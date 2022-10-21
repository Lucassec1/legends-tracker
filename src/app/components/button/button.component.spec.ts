import { screen, render, fireEvent } from '@testing-library/angular';
import { ButtonComponent, AppButtonProps } from './button.component';
import { AppIconComponent } from '../icon/icon.component';

const defaultLabel = 'button';

const sut = async (
  customProps: AppButtonProps = { 
    label: defaultLabel
  } 
): Promise<HTMLElement> => {
  await render(ButtonComponent, {
    componentProperties: customProps,
    declarations: [AppIconComponent],
  });
  return screen.findByRole('button');
};

describe('ButtonComponent', () => {
  it('should render button with a custom label', async () => {
    const textButton = 'click here';
    const button = await sut ({ label: textButton });
    expect(button.textContent).toContain(textButton) 
  });

  it('should hold an event when is clicked', async () => {
    const clickEvent = jest.fn();
    const button = await sut ({
      label: defaultLabel,
      buttonOnClick: {
        emit: clickEvent,
      } as any,
    });
    fireEvent.click(button);
    expect(clickEvent).toHaveBeenCalled();
  });

  it('should not call event when is loading', async () => {
    const clickEvent = jest.fn();
    const button = await sut ({
      label: defaultLabel,
      loading: true,
      buttonOnClick: {
        emit: clickEvent,
      } as any,
    });
    fireEvent.click(button);
    expect(clickEvent).not.toHaveBeenCalled();
  });

  it('should not call event when is disabled', async () => {
    const clickEvent = jest.fn();
    const button = await sut ({
      label: defaultLabel,
      disabled: true,
      buttonOnClick: {
        emit: clickEvent,
      } as any,
    });
    fireEvent.click(button);
    expect(clickEvent).not.toHaveBeenCalled();
  });
});

const types: Array<AppButtonProps['type']> = [
  'primary',
  'secondary',
];

it.each(types)('should render correct types', async (type) => {
  expect(await sut({ 
    label: defaultLabel, 
    type 
  })).toHaveClass(`app-button-${type}`);
});

const sizes: Array<AppButtonProps['size']> = [
  'sm',
  'md',
  'lg'
];

it.each(sizes)('should render correct size', async (size) => {
  return expect(await sut({
    label: defaultLabel,
    size
  })).toHaveClass(`app-button-${size}`);
});

describe('Icon on ButtonComponent', () => {
  it('Icon add on button', async () => {
    const button = await sut({ 
      iconType: 'add' 
    });
    expect(button.querySelector('app-icon')).toBeTruthy();
    expect(button.querySelector('app-icon')).toHaveAttribute('ng-reflect-type');
    expect(
      button.querySelector('app-icon')?.getAttribute('ng-reflect-type')
    ).toContain('add');
  });

  it('right side icon', async () => {
    const button = await sut({
      iconType: 'add',
      rightSideIcon: true,
    });
    expect(button.querySelector('app-icon')).toBeTruthy();
    expect(button).toHaveClass('right-side-icon');
  });
});

describe('disabled ButtonComponent', () => {
  it('should render a disabled button when disabled"true" is passed', async () => {
    expect(await sut({
      label: defaultLabel,
      disabled: true
    })).toHaveAttribute('disabled');
  });
});

describe('loading ButtonComponent', () => {
  it('should render a loading button when loading="true" is passed', async () => {
    expect(await sut({
      loading: true
    })).toHaveClass('loading');
  });
});

describe('expand ButtonComponent', () => {
  it('should render a expand button when expand="true" is passed', async () => {
    expect((await sut({
      label: defaultLabel,
      expand: true
    })).style.width).toBe('100%');
  });
});