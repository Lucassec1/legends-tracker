import { AppIconComponent, IconProps } from "./icon.component";
import { screen, render } from "@testing-library/angular";

const sut = async (
  customProps: IconProps = { type: 'add' }
): Promise<HTMLElement> => {
  await render(AppIconComponent, {
    componentProperties: customProps,
  });
  return screen.getByTestId('iconElement');
};

describe('IconComponent', () => {
  it('should render correct icon', async () => {
    await sut({ type: 'add' });
    const icon = document.getElementById('app-icon-add');
    expect(icon).toBeTruthy();
  });

  it('should render correct size', async () => {
    const icon = await sut();
    const defaultSize = "17px"
    expect(icon.style.width).toBe(defaultSize);
    expect(icon.style.height).toBe(defaultSize);
  });

  it('should render icon with default color', async () => {
    const icon = await sut();
    const defaultColor = '#fcfaff';
    expect(icon.style.stroke).toBe(defaultColor);
  });

  it('should render icon with custom size', async () => {
    const size = 60;
    const icon = await sut({ type: 'add', size });
    expect(icon.style.width).toBe(`${size}px`);
  });

  it('should render icon with custom color', async () => {
    const color = 'purple';
    const icon = await sut({ type: 'add', color });
    expect(icon.style.stroke).toBe(color);
  });

  it('should render fill transparent in all icons', async () => {
    const color = 'transparent';
    expect((await sut({
      type: 'arrow-down'
    })).style.fill).toBe(color);
  });
});