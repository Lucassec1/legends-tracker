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
    beforeEach(async () => {
      await sut();
    });

    it('should render component', () => {
      expect(screen.getByTestId(IDs.tag)).toHaveClass('tag-container');
    });

    // it('should render default label')
  });
});
