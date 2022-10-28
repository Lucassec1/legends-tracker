import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { render, screen } from '@testing-library/angular';
import { Type } from '../core/types/progress-bar';

import { ProgressBarComponent, ProgressBarProps } from './progress-bar.component';

const typeOptions: Array<Type> = [
  'info-progress-bar',
  'progress-bar',
]

const defaultValue: ProgressBarProps = {
  type: 'progress-bar',
  win: 7,
  lose: 3,
}

const sut = async (customProps: ProgressBarProps = defaultValue) => {
  await render(ProgressBarComponent, {
    componentProperties: customProps,
    imports: [CommonModule],
  })
} 

describe('ProgressBarComponent', () => {
  
  it.each(typeOptions)('should render progress bar component', async (type) => {
    await sut({
      ...defaultValue,
      type
    })
    expect(screen.getByTestId('progressBarElement')).toHaveClass(`app-${type}`)
  });

  it('should set a full-width class if the progress is 100%', async () => {
    await sut({
      ...defaultValue,
      win: 10,
      lose: 0,
    });
    expect(screen.getByTestId('barElement')).toHaveClass('full-width');
  });
});
