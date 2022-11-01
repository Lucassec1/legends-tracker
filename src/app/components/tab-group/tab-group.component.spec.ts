import { fireEvent, screen, render } from "@testing-library/angular";
import { AppTabGroupProps, TabGroupComponent } from "./tab-group.component";
import { SafeAny } from "../utils/safe-any";
import { TabComponent, TabSize } from "../tab/tab.component";

const selectEvent = jest.fn();

const mockTabs = [
  {
    label: 'First Tab',
    selected: false,
  },
  {
    label: 'Second Tab',
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

const sizes: Array<AppTabGroupProps['size']> = [
  'sm',
  'md',
  'lg'
];

describe('TabGroupComponent', () => {
  it('should render tabs in horizontal by default', async () => {
    const tabGroup = await sut();
    expect(tabGroup.element).not.toHaveClass('app-tab-group-column');
    expect(screen.getByText(mockTabs[0].label)).toHaveClass('app-tab-border-bottom');
  });

  it('should render tabs with border bottom by default', async () => {
    await sut();
    expect(screen.getByText(mockTabs[0].label)).toHaveClass('app-tab-border-bottom');
  });

  it('should render tabs component in vertical', async () => {
    const tabGroup = await sut({
      direction: 'vertical',
      tabs: mockTabs,
      selected: {
        emit: selectEvent
      } as SafeAny,
    });
    expect(tabGroup.element.childNodes[0]).toHaveClass('app-tab-group-column');
  })

  it('should emit tab selected when clicked', async () => {
    const tabGroup = await sut();
    fireEvent.click(screen.getByText(mockTabs[0].label));
    expect(tabGroup.event).toHaveBeenCalledWith({
      label: mockTabs[0].label,
      selected: true
    });
  });

  it('should has border right when direction is vertical', async () => {
    await sut({
      direction: 'vertical',
      tabs: mockTabs,
      selected: {
        emit: selectEvent
      } as SafeAny,
    });
    expect(screen.getByText(mockTabs[0].label)).toHaveClass('app-tab-border-right');
  });

  it('should render border in left when left is informed', async () => {
    await sut({
      direction: 'vertical',
      border: 'left',
      tabs: mockTabs,
      selected: {
        emit: selectEvent
      } as SafeAny,
    });
    expect(screen.getByText(mockTabs[0].label)).toHaveClass('app-tab-border-left');
  });

  it.each(sizes)('should render tabs with %s size', async (size) => {
    await sut({
      direction: 'vertical',
      tabs: mockTabs,
      size: size as TabSize,
      selected: {
        emit: selectEvent
      } as SafeAny,
    });
    expect(screen.getByText(mockTabs[0].label)).toHaveClass(`app-tab-${size}`);
  });

  it('should emit selected tab when double clicked', async () => {
    const tabGroup = await sut();
    fireEvent.click(screen.getByText(mockTabs[0].label));
    fireEvent.click(screen.getByText(mockTabs[1].label));
    expect(tabGroup.event).toHaveBeenCalledWith({
      label: mockTabs[1].label,
      selected: true
    });
  });

  it('should validate if the event was issued twice', async () => {
    selectEvent.mockClear();
    const tabs = await sut();
    fireEvent.click(screen.getByText(mockTabs[1].label));
    fireEvent.click(screen.getByText(mockTabs[1].label));
    expect(tabs.event).toHaveBeenCalledTimes(2);
  });
});