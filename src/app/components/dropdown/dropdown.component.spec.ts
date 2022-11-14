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
  it('should render component', async () => {
    await sut();
    expect(screen.getByTestId('app-dropdown')).toBeTruthy();
  })

  it('should open on click', async () => {
    await sut();
    openDropdown();
    expect(screen.getByTestId('options-container')).toBeTruthy();
  })

  it('should not close when the auto close is false', async () => {
    await sut({
      ...defaultDropdown,
      autoclose: false
    });
    openDropdown();
    const optionToSelect = document.getElementById('option-0')!;
    fireEvent.click(optionToSelect);
    expect(document.getElementsByClassName('open-select')).toBeTruthy();
  })
  
  describe('With Default Option', () => {
    const optionsWithDefault = [
      {
        label: 'Option 1',
      },
      {
        default: true,
        label: 'Option 2',
      }
    ];
  
    it('should set selected when the option is default', async () => {
      await sut({
        ...defaultDropdown,
        options: optionsWithDefault
      });
      openDropdown();
      expect(screen.getByTestId('default-dropdown-item')).toHaveClass('dropdown-item-selected');
    })
  
    it('should render the default option label', async () => {
      const defaultOption = optionsWithDefault.filter((item: DropdownItem) => item.default);
      await sut({
        ...defaultDropdown,
        options: optionsWithDefault
      });
      expect(screen.getByTestId('dropdown-label')).toHaveTextContent(defaultOption[0].label);
      expect(screen.getAllByText(defaultOption[0].label)).toHaveLength(1)
    })
  })
  
  describe('With Disabled Option', () => {
    const optionsWithDisabled = [
      {
        label: 'Disabled Option',
        disabled: true,
      },
      {
        label: 'Enabled Option',
        disabled: false,
      }
    ]
    const defaultDisabled = {
      ...defaultDropdown,
        options: optionsWithDisabled
    }
  
    beforeEach(() => {
      selectEvent.mockClear();
    })
  
    it('should not select a disabled option', async () => {
      await sut(defaultDisabled);
      openDropdown();
      const elementToSelect = document.getElementById('option-0')!;
      fireEvent.click(elementToSelect);
      expect(elementToSelect.classList).not.toContain('dropdown-item-selected');
      expect(selectEvent).not.toHaveBeenCalled();
    })
  })
})
