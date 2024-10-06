'use client';

import { Button } from '@mantine/core';

interface FileUploadProps {
  setAudioFile: (file: File) => void;
}

export default function FileUpload({ setAudioFile }: FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAudioFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <Button mt="sm">Upload Audio File</Button>
    </div>
  );
}
