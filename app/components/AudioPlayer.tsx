export const cutAudio = (audioBuffer, startTime, endTime) => {
    const offlineContext = new OfflineAudioContext(1, (endTime - startTime) * audioBuffer.sampleRate, audioBuffer.sampleRate);
    const source = offlineContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(offlineContext.destination);
    source.start(0, startTime);
    
    return offlineContext.startRendering().then((renderedBuffer) => {
      return renderedBuffer; // Return the newly cut buffer
    });
  };
  