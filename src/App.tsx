import { useState } from 'react';

import { invoke } from '@tauri-apps/api/tauri';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from './components/core/ErrorFallback';

export const App = () => {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
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
    </ErrorBoundary>
  );
};

// import { Mail } from './components/core/Mail/Mail';
// import { accounts, mails } from './data';
// import './services/i18next';

// export const App = () => {
//   return (
//     <div className="h-screen w-screen overflow-hidden">
//       <Mail accounts={accounts} defaultLayout={[]} mails={mails} navCollapsedSize={4} />
//     </div>
//   );
// };
