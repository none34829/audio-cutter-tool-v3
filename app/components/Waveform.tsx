import WaveSurfer from 'wavesurfer.js';
import { useEffect, useRef } from 'react';

const Waveform = ({ audioFile }) => {
  const waveformRef = useRef();

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#ddd',
      progressColor: '#4c6ef5',
      backend: 'WebAudio',
    });

    wavesurfer.load(URL.createObjectURL(audioFile));

    return () => wavesurfer.destroy();
  }, [audioFile]);

  return <div ref={waveformRef} />;
};
