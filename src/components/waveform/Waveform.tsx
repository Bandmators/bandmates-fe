import React, { useEffect, useRef } from 'react';

const AudioWaveform: React.FC<{ audioUrl: string }> = ({ audioUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const drawWaveform = async () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      audioContextRef.current = audioContext;

      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const buffer = audioBuffer.getChannelData(0);
      const width = canvas.width;
      const height = canvas.height;

      const smoothBuffer = smoothArray(buffer, 10);

      context.clearRect(0, 0, width, height);
      context.beginPath();
      context.strokeStyle = '#3498db';

      for (let i = 0; i < smoothBuffer.length; i++) {
        const x = (i / smoothBuffer.length) * width;
        const y = (smoothBuffer[i] + 1) * 0.5 * height;

        if (i === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }
      context.rect(10, 10, 150, 100);

      context.stroke();
    };

    const audio = new Audio();
    audio.src = audioUrl;
    audio.crossOrigin = 'anonymous';

    audio.addEventListener('canplay', drawWaveform);
    audio.load();

    return () => {
      if (audio) {
        audio.removeEventListener('canplay', drawWaveform);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [audioUrl]);

  const smoothArray = (arr: Float32Array, smoothFactor: number): number[] => {
    const smoothed = [];
    const len = arr.length;

    for (let i = 0; i < len; i++) {
      let val = 0;

      for (let j = -smoothFactor; j <= smoothFactor; j++) {
        const index = i + j;
        if (index >= 0 && index < len) {
          val += arr[index];
        }
      }
      smoothed.push(val / (2 * smoothFactor + 1));
    }

    return smoothed;
  };

  return <canvas ref={canvasRef} width={1800} height={200} />;
};

export default AudioWaveform;
