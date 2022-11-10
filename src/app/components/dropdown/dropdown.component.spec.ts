import { AppIconComponent } from './../icon/icon.component';
import { SafeAny } from './../utils/safe-any';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, screen, fireEvent } from '@testing-library/angular';
import { DropdownComponent, DropdownParams, DropdownItem } from './dropdown.component';

const options: DropdownItem[] = [];

const createOptions = (): void => {
  for (let index = 0; index < 3; index++) {
    options.push({
      default: false,
      label: `Option ${index}`,
      selected: false,
      disabled: false,
      hovered: false,
    })
  }
}
createOptions();

const selectEvent = jest.fn();
const defaultDropdown: DropdownParams = {
  options: options,
  selected: {
    emit: selectEvent,
  } as SafeAny,
}

const openDropdown = (): void => {
  selectEvent.mockClear();
  const dropdownContainer = screen.getByTestId('select-container');
  fireEvent.click(dropdownContainer);
}

const sut = async (
  customParams: DropdownParams = defaultDropdown
) => {
  await render(DropdownComponent, {
    componentProperties: customParams,
    declarations: [AppIconComponent],
  })
}

describe('DropdownComponent', () => {
  // beforeEach(async () => {
  //   await sut();
  // });
  
  it('should render component', async () => {
    await sut();
    expect(screen.getByTestId('app-dropdown')).toBeTruthy();
  })

  it('should open on click', async () => {
    await sut();
    openDropdown();
    expect(screen.getByTestId('options-container')).toBeTruthy();
  })

  it('should set selected when the option is default', async () => {
    const testOptions = [
      {
        default: false,
        label: 'Option 1',
        selected: false,
        disabled: false,
        hovered: false,
      },
      {
        default: true,
        label: 'Option 2',
        selected: false,
        disabled: false,
        hovered: false,
      }
    ]
    await sut({
      ...defaultDropdown,
      options: testOptions
    });
    openDropdown();
    expect(screen.getByTestId('default-dropdown-item')).toHaveClass('dropdown-item-selected');
  })

  // it('should accept only one selected option', async () => {
  //   const optionsWithSelected  = options;
  //   options.push({
  //     default: false,
  //     label: 'Selected Option',
  //     selected: true,
  //     disabled: false,
  //     hovered: false,
  //   })
  //   await sut({
  //     ...defaultDropdown,
  //     options: optionsWithSelected
  //   })
  //   selectEvent.mockClear();
  // })

  // it.each(options)('should render option $label', async ({ label }) => {
  //   await sut();
  //   expect(screen.getAllByText(label)).toHaveLength(1);
  // })  
});
