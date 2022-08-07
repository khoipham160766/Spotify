import './App.css';
import Navbar from './components/Navbar';
import ListSongs from './components/ListSongs';
import DetailSong from './components/DetailSong';

function App() {
  return (
    <div className=""> 
      <Navbar />
      <div className='grid grid-cols-3 bg-gray-700 h-screen-navbar-player'>
        {/*span 1*/}
        <DetailSong />
        {/*span 2*/}
        <ListSongs />
      </div> 
    </div>
  );
}

export default App;
