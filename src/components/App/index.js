import { useState } from 'react';

import Header from '../Header';
import Search from '../Search';
import Results from '../Results';

import emojis from "../../emojis.json";

function App() {
  const [filteredEmojis, setFilteredEmojis] = useState(emojis);

  return (
    <div className="App">
      <Header />
      <Search setFunc={setFilteredEmojis} />
      <Results emojis={filteredEmojis} />
    </div>
  );
}

export default App;

