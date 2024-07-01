import { useEffect, useRef } from 'react';

import { Editor } from '@/libs/editor';

import * as S from './style';

const WorkEditPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) new Editor(ref.current as HTMLCanvasElement);
  }, [ref]);

  return (
    <>
      <S.Canvas ref={ref}></S.Canvas>
    </>
  );
};
export default WorkEditPage;
