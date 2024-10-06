'use client';

import { Container, Text, Button, AppShell, Navbar } from '@mantine/core';
import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import AudioPlayer from '../components/AudioPlayer';
import Waveform from '../components/Waveform';

export default function HomePage() {
  const [audioFile, setAudioFile] = useState<File | null>(null);

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} padding="xs">
          <Navbar.Section>
            <Text>Key BPM Finder</Text>
          </Navbar.Section>
          <Navbar.Section>
            <Text>Cutter</Text>
          </Navbar.Section>
          <Navbar.Section>
            <Text>Joiner</Text>
          </Navbar.Section>
          <Navbar.Section>
            <Text>Recorder</Text>
          </Navbar.Section>
          <Navbar.Section>
            <Text>Support</Text>
          </Navbar.Section>
        </Navbar>
      }
    >
      <Container>
        <Text align="center" size="xl" weight={700}>Audio Cutter</Text>
        <Text align="center">Free editor to trim and cut any audio file online</Text>
        <FileUpload setAudioFile={setAudioFile} />
        {audioFile && (
          <>
            <AudioPlayer audioFile={audioFile} />
            <Waveform audioFile={audioFile} />
          </>
        )}
        <Button>Browse my files</Button>
      </Container>
    </AppShell>
  );
}
