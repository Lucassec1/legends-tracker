import { render, screen, fireEvent } from "@testing-library/angular";
import { InputComponent, AppInputProps } from "./input.component";

const inputValue = 'input';

const sut = async (customProps?: AppInputProps) => {
  await render(InputComponent, {
    componentProperties: customProps,
  });
};

describe('InputComponent', () => {
  it('should allow letters to be inputted', async () => {
    await sut();
    fireEvent.change(screen.getByTestId('inputElement'), {
      target: { value: inputValue },
    });
    expect(screen.getByTestId('inputElement')).toHaveValue(inputValue);
  });
});

const inputTypes: Array<AppInputProps['type']> = [
  'text',
  'user',
  'password'
];

const inputSizes: Array<AppInputProps['size']> = [
  'sm',
  'md'
];

it.each([
  {
    inputTypes,
    inputSizes
  }
])('should render correct type and size', async ({ size, type }: any) => {
  await sut({
    type,
    size
  });
  expect(screen.getByTestId('divElement')).toHaveClass(`app-input-${type}-${size}`);
});

describe('Type password on InputComponent', () => {
  it('should start with the password not visible', async () => {
    await sut({ type: 'password'});
    const showPassword = screen.getByTestId('buttonElement');
    expect(showPassword).toHaveClass('password-invisible');
  });

  it('should toggle between visible and not visible password when clicked', async () => {
    await sut({ type: 'password' });
    const showPassword = screen.getByTestId('buttonElement');
    expect(showPassword).toHaveClass('password-invisible');
    fireEvent.click(showPassword);
    expect(showPassword).toHaveClass('password-visible');
  });
});