import { render, screen } from '@testing-library/angular';
import { DefaultImageDirective } from './default-image.directive';

const defaultSrc = 'test.svg';
const defaultImageFile = 'default.svg';
async function sut(
  src = defaultSrc,
  defaultImage = defaultImageFile
): Promise<HTMLElement> {
  await render(`<img src="${src}" default="${defaultImage}">`, {
    declarations: [DefaultImageDirective],
  });
  return screen.getByRole('img');
}

describe('ErrorImageDirective', () => {
  it('should create an image with directive', async () => {
    const image = await sut();
    expect(image).toHaveAttribute(
      'src', 
      defaultSrc
    );
    expect(image).toHaveAttribute(
      'default', 
      defaultImageFile
    );
  });

  it('should set default image when there is a error', async () => {
    const spy = jest.spyOn(DefaultImageDirective.prototype, 'updateUrl');
    const image = await sut();
    image.dispatchEvent(new Event('error'));
    expect(spy).toBeCalled();
  });
});



