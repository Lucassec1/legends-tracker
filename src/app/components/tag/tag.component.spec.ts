import { iconsPaths } from './../icon/svgs/icons';
import { PositionIconOptions } from './../core/types/tag';
import { CommonModule } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import { Label } from '../core/types/tag';
import { TagComponent, TagProps } from './tag.component';

const labelOptions: Array<Label> = [
  'adc',
  'jungle',
  'mid',
  'suporte',
  'top',
]

const iconOptions: Array<PositionIconOptions> = [
  PositionIconOptions.adc,
  PositionIconOptions.jungle,
  PositionIconOptions.mid,
  PositionIconOptions.suporte,
  PositionIconOptions.top,
]

const defaultValue: TagProps = {
  label: labelOptions[3],
}

const IDs = {
  tag: 'app-tag',
  icon: 'tag-icon',
}

const sut = async (customProps: TagProps = defaultValue) => {
  await render(TagComponent, {
    componentProperties: customProps,
    imports: [CommonModule],
  })
} 

describe('TagComponent', () => {
  describe('component basics', () => {
    it('should render component', async () => {
      await sut();
      expect(screen.getByTestId(IDs.tag)).toHaveClass('tag-container');
    });

    // it.each([{
    //   iconOptions, 
    //   labelOptions
    // }])('should render the $iconOptions icon when the label is $labelOptions', async ({ iconType, label }: any) => {
    //   await sut({
    //     label: label,
    //   })
    //   expect(screen.getByTestId('tag-icon')).toHaveClass(`${iconType}-icon`)
    // })

    it.each([
      [iconOptions[0], labelOptions[0]],
      [iconOptions[1], labelOptions[1]],
      [iconOptions[2], labelOptions[2]],
      [iconOptions[3], labelOptions[3]],
      [iconOptions[4], labelOptions[4]],
    ])('should render the %s icon when the label is %s', async ( iconType, label ) => {
      await sut({
        label: label,
      })
      expect(screen.getByTestId('tag-icon')).toHaveClass(`${iconType}-icon`)
    })
  });
});
