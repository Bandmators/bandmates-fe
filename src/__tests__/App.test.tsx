import '@testing-library/jest-dom';

import Button from '@/components/common/button';

import { render, screen } from '../libs/test';

test('이미지를 불러와서 렌더링하는지 확인', async () => {
  render(<Button>aa</Button>, {});
  const text = screen.getByText('aa');
  expect(text).toBeTruthy();
});
