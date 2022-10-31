import { CommonModule } from "@angular/common";
import { fireEvent, screen, render } from "@testing-library/angular";
import { AppTabProps, TabComponent } from "./tab.component";

const defaultLabel = 'tab';

const sut = async (customProps?: AppTabProps) => {
  await render(TabComponent, {
    componentProperties: customProps || {
    label: defaultLabel,
    },
    imports: [CommonModule],
  });
};

const sizes: Array<AppTabProps['tabSize']> = [
  'sm',
  'md',
  'lg'
];

const borderDirections: Array<AppTabProps['borderDirection']> = [
  'bottom',
  'top',
  'right',
  'left'
]

describe('TabComponent', () => {
  it.each(['about', 'profile'])(
    'should render label %s',
    async (tabLabel: string) => {
      await sut({ label: tabLabel });
      expect(screen.getAllByText(tabLabel)).toHaveLength(1);
    }
  );

  it.each(sizes)(
    'should render with correct size %s',
    async (tabSize) => {
      await sut({ 
        label: defaultLabel, 
        tabSize 
      });
      expect(screen.getByText(defaultLabel)).toHaveClass('app-tab-' + tabSize);
    }
  );

  it.each(borderDirections)(
    'should render with correct border direction %s',
    async (borderDirection) => {
      await sut({ 
        label: defaultLabel, 
        borderDirection 
      });
      expect(screen.getByText(defaultLabel)).toHaveClass('app-tab-border-' + borderDirection);
    }
  );

  it('should click on tab', async () => {
    await sut();
    const tab = screen.getByText(defaultLabel);
    fireEvent.click(tab);
    expect(tab).toHaveClass('tab-selected');
  });

  it('should render tab without disabled by default', async () => {
    await sut();
    expect(screen.getByText(defaultLabel)).toBeEnabled();
  });

  it('should render tab disabled', async () => {
    await sut({ 
      label: defaultLabel, 
      disabled: true 
    });
    expect(screen.getByText(defaultLabel)).toBeDisabled();
  });
});