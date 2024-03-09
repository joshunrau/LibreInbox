import { useState } from 'react';

import { invoke } from '@tauri-apps/api/tauri';

import './services/i18next';

export const App = () => {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <input id="greet-input" placeholder="Enter a name..." onChange={(e) => setName(e.currentTarget.value)} />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>
    </div>
  );
};
