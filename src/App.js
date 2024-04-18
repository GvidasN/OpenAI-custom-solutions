import React from 'react';
import './App.css';
import { Tabs } from '@mui/base';
import TranscriptionsForm from "./components/TranscriptionsForm";
import DescriptionsForm from './components/DescriptionsForm';
import TranslationsForm from './components/TranslationsForm';
import TextToSpeechForm from './components/TextToSpeechForm';
import { Tab, TabPanel, TabsList } from './StyledComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs defaultValue={1}>
          <TabsList>
            <Tab value={1}>Transcriptions</Tab>
            <Tab value={2}>Descriptions</Tab>
            <Tab value={3}>Translations</Tab>
            <Tab value={4}>Text to Speech</Tab>
          </TabsList>
          <TabPanel value={1}>
            <TranscriptionsForm/>
          </TabPanel>
          <TabPanel value={2}>
            <DescriptionsForm/>
          </TabPanel>
          <TabPanel value={3}>
            <TranslationsForm/>
          </TabPanel>
          <TabPanel value={4}>
            <TextToSpeechForm/>
          </TabPanel>
        </Tabs>         
      </header>
    </div>
  );
}

export default App;