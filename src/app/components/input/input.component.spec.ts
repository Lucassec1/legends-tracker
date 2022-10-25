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
]

it.each([
  {
    inputTypes,
    inputSizes
  }
])('should render correct type', async ({ size, type }: any) => {
  await sut({
    type,
    size
  });
  expect(screen.getByTestId('inputElement')).toHaveClass(`app-input-${type}-${size}`);
});

// describe('Type password on InputComponent', () => {
//   it('should toggle between visible and not visible password when clicked', async () => {
//     const clickEvent = jest.fn();
//     const input = await sut({
//       type: 'password',

//     });
//     fireEvent.click(input);
//     expect(clickEvent).toHaveBeenCalled();
//   })
// })