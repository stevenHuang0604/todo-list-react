import { useState } from 'react';

import Main from './ui/Main';
import Header from './ui/Header';
import Input from './ui/Input';
import List from './ui/List';
import Status from './ui/status';

function App() {
  return (
    <Main>
      <Header />
      <Input />
      <List />
      <Status />
    </Main>
  );
}

export default App;
