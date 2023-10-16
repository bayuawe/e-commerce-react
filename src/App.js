import React from 'react';
import Header from './Header';
import ProdukList from './ProdukList'; // Mengimpor komponen ProdukList
import './App.css'; // Anda juga dapat mengimpor file CSS yang dibutuhkan

function App() {
  return (
    <div className="App">
      <main>
      <Header />
        <ProdukList />
      </main>
    </div>
  );
}

export default App;
