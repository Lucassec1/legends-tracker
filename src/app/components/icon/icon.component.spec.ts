import { AppIconComponent, IconProps } from "./icon.component";
import { screen, render } from "@testing-library/angular";

const sut = async (
  customProps: IconProps = { type: 'add' }
): Promise<HTMLElement> => {
  await render(AppIconComponent, {
    componentProperties: customProps,
  });
  // return document.getElementById('app-icon-' + customProps.type);
  return screen.getByTestId('iconElement');
};

describe('IconComponent', () => {
  it('should render correct icon', async () => {
    await sut({ type: 'add' });
    const icon = document.getElementById('app-icon-add');
    expect(icon).toBeTruthy();
  });

  // it('should render correct size', async () => {
  //   const icon = await sut();
  //   const defaultSize = "17px"
  //   expect(icon.getElementsByTagName('width')).toBe(defaultSize);
  //   expect(icon.getElementsByTagName('height')).toBe(defaultSize);
  // });

  // it('should render icon with default color', async () => {
  //   const defaultColor = '#fcfaff';
  //   expect((await sut()).getElementsByClassName('stroke')).toBe(defaultColor);
  // });

  // it('should render icon with custom size', async () => {
  //   const size = 60;
  //   const icon = await sut({ type: 'add', size });
  //   expect(icon.getAttribute('width')).toBe(`${size}px`);
  // });

  // it('should render icon with custom color', async () => {
  //   const color = 'blue';
  //   const icon = await sut({ type: 'add', color });
  //   expect(icon.getAttribute('stroke')).toBe(color);
  // });

  it('should render fill transparent in some icons', async () => {
    const color = 'transparent';
    expect((await sut()).getAttribute('fill')).toBe(color);
  });
});