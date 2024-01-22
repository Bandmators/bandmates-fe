import { useState } from 'react';

import Button from '@/components/common/button';

import Form from './components/common/form';
import Input, { InputDesc, InputGroup } from './components/common/input';
import Label from './components/common/label';
import Textarea from './components/common/textarea';
import AudioWaveform from './components/waveform/Waveform';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>

      <AudioWaveform audioUrl="https://baggun.s3.ap-northeast-2.amazonaws.com/voice/test_voice2.m4a" />
      {/* 
      <audio src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3" controls />
      <audio src="https://audio.podigee-cdn.net/1041740-m-0fcf92e897e7cd93200a43cf103a75fb.mp3" controls />
      <audio src="https://ccrma.stanford.edu/~jos/mp3/harpsi-cs.mp3" controls></audio> */}

      <p>d</p>
      <Form redirect="testsuccess">
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="bio" />
          <InputDesc>You can @mention other users to link to them.</InputDesc>
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>

      {/* <AudioWaveform audioUrl="https://baggun.s3.ap-northeast-2.amazonaws.com/voice/test.mp3" /> */}
    </>
  );
}

export default App;
