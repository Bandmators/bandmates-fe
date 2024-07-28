import { useEffect, useRef } from 'react';

import { Editor, EditorDataType } from '@/libs/editor';

import * as S from './style';

const data: EditorDataType[] = [
  {
    name: 'bgm',
    tracks: [
      {
        category: '',
        songs: [
          {
            src: '',
            user: '',
            start: 0,
            long: 15,
            group: 0,
            instrument: 'Piano',
          },
          {
            src: '',
            user: '',
            start: 50,
            long: 15,
            group: 0,
            instrument: 'Drum',
          },
        ],
      },
    ],
  },
  {
    name: 'effect',
    tracks: [
      {
        category: '',
        songs: [
          {
            src: '',
            user: '',
            start: 40,
            long: 15,
            group: 1,
            instrument: 'Piano',
          },
          {
            src: '',
            user: '',
            start: 130,
            long: 15,
            group: 1,
            instrument: 'Guitar',
          },
        ],
      },
    ],
  },
];

const WorkEditPage = () => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const editor = useRef<Editor | null>(null);

  useEffect(() => {
    if (ref.current && !editor.current) {
      editor.current = new Editor(ref.current, data);
      // data.forEach(d => {
      //   editor.current?.add(new TrackGroup(d.songs));
      // });
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
