import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

// it 함수: 내가 바라는 기대 결과를 정의함(should~)
// 기대 결과 === 실제 결과 -> 성공
// 기대 결과 !== 실제 결과 -> 실패
// test 함수: if~, ~~할 경우 ~~ 한다
// describe 함수: 테스트를 그룹핑해서 새로운 컨텍스트를 만듦, 각각의 테스트를 묶어 그룹핑
// (it 함수는 최상위, 독립적인 개별 컨텍스트를 가짐)
it('기본 placeholeder "텍스트를 입력해 주세요."가 노출된다.', async () => {
  await render(<TextField />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요');

  // matcher: 값이 일치하는지 확인하는 것, 커스텀 가능
  expect(textInput).toBeInTheDocument();
});

it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
  await render(<TextField placeholder="abc" />);

  const textInput = screen.getByPlaceholderText('abc');

  expect(textInput).toBeInTheDocument();
});
