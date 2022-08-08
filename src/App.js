import './App.css';
import Navbar from './components/Navbar';
import ListSongs from './components/ListSongs';
import DetailSong from './components/DetailSong';
import Playing from './components/Playing';
import { Songs } from './Context';
import DataSongs from "./data/songs.json";
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idsong) => {
    const song = DataSongs.find(song => song.id === idsong);
    if(!song)
      setSong(DataSongs[0]);
    else
      setSong(song);
  }
  return (
    <div className="App"> 
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-gray-700 h-screen-navbar-player overflow-hidden'>
          {/*span 1*/}
          <DetailSong />
          {/*span 2*/}
          <ListSongs />
        </div> 
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
