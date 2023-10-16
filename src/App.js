import React from 'react';
import Header from './Header';
import ProdukList from './ProdukList'; // Mengimpor komponen ProdukList
import './App.css'; // Anda juga dapat mengimpor file CSS yang dibutuhkan

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toko Roti</h1>
      </header>
      <main className="container">
        <ProdukList /> {/* Menggunakan komponen ProdukList di sini */}
        {/* Tambahkan komponen lain atau konten lain di sini */}
      </main>
    </div>
  );
}

export default App;
