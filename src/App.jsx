import {useState} from 'react';
import Home from './components/Home';
import { PlayingVideoContext } from './lib/context';
const App = () => {
  const [currentVideo , setCurrentVideo] = useState(null);
  
  return (
    <div>
      <PlayingVideoContext.Provider value = {{currentVideo ,setCurrentVideo}}>
       <Home/>
      </PlayingVideoContext.Provider>
    </div>
  );
}

export default App;
