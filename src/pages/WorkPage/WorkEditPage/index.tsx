import { useEffect, useRef } from 'react';

import { Editor } from '@/libs/editor';

import * as S from './style';

const WorkEditPage = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const editor = useRef<Editor | null>(null);

  useEffect(() => {
    if (ref.current && !editor.current) {
      editor.current = new Editor(ref.current);
    }
    return () => {
      if (editor.current) {
        editor.current.destroy();
        editor.current = null;
      }
    };
  }, [ref]);

  return (
    <>
      <S.Canvas ref={ref}></S.Canvas>
    </>
  );
};
export default WorkEditPage;
