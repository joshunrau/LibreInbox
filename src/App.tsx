import { useState } from 'react';

import { invoke } from '@tauri-apps/api/tauri';

export const App = () => {
  const [item, setItem] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [error, setError] = useState('');

  const appendItem = async () => {
    try {
      const result: { items: string[] } = await invoke('append_item', {
        item
      });
      setItems(result.items);
      setItem('');
      setError('');
    } catch (err) {
      setError(JSON.stringify(err));
    }
  };

  return (
    <div>
      <h1 className="my-5 text-center text-lg font-semibold">To-Do List</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
      </div>
      <button type="button" onClick={() => void appendItem()}>
        Add Item
      </button>
      {error && (
        <p className="text-red-600">
          <span className="font-medium">Error: </span>
          {error}
        </p>
      )}
    </div>
  );
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
