import { fireEvent, screen, render } from "@testing-library/angular";
import { AppTabGroupProps, TabGroupComponent } from "./tab-group.component";
import { SafeAny } from "../utils/safe-any";
import { TabComponent, TabSize } from "../tab/tab.component";

const selectEvent = jest.fn();

const mockTabs = [
  {
    label: 'Tab 1',
    selected: false,
  },
  {
    label: 'Tab 2',
    selected: false,
  },
];

const sut = async (customProps: AppTabGroupProps = {
  tabs: mockTabs,
  direction: 'horizontal',
  selected: {
    emit: selectEvent,
  } as SafeAny,
}): Promise<{ element: HTMLElement; event: jest.Mock }> => {
  await render(TabGroupComponent, {
    componentProperties: customProps,
    declarations: [TabComponent]
  });
  return { element: screen.getByTestId('app-tab-group'), event: selectEvent };
};

describe('TabGroupComponent', () => {
  it('should render tabs in horizontal by default', async () => {
    const rendered = await sut()
    expect(rendered.element).not.toHaveClass('app-tab-group-column');
    expect(screen.getByText(mockTabs[0].label)).toHaveClass('app-tab-border-bottom');
  });

  it('should render tabs with border bottom by default', async () => {
    await sut();
    expect(screen.getByText(mockTabs[0].label)).toHaveClass('app-tab-border-bottom');
  });
});