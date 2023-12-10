import { Layout } from './components/Layout';

export const App = () => {
  return <Layout />;
};

// import { useState } from 'react';

// import { invoke } from '@tauri-apps/api/tauri';

// export const App = () => {
//   const [greetMsg, setGreetMsg] = useState('');
//   const [name, setName] = useState('');

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke('greet', { name }));
//   }

//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <a href="https://vitejs.dev" rel="noreferrer" target="_blank">
//           <img alt="Vite logo" className="logo vite" src="/vite.svg" />
//         </a>
//         <a href="https://tauri.app" rel="noreferrer" target="_blank">
//           <img alt="Tauri logo" className="logo tauri" src="/tauri.svg" />
//         </a>
//       </div>

//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//       <form
//         className="row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           void greet();
//         }}
//       >
//         <input id="greet-input" placeholder="Enter a name..." onChange={(e) => setName(e.currentTarget.value)} />
//         <button type="submit">Greet</button>
//       </form>

//       <p>{greetMsg}</p>
//     </div>
//   );
// };
