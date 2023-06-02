import logo from './logo.svg';
import './App.css';

import { Route, Routes} from 'react-router-dom'
import Home from './page/eunhee/Home';
import About from './page/sl/About';
import Story from './page/yh/Story';
import Mypage from './page/dw/Mypage';

function App() {
  return (
    <div className="App">
      <h3>team-git-test-230602</h3>
        <Routes>
          
          {/* 은희 */}
          <Route path='/' element={<Home/>}/>

          {/* 슬린 */}
          <Route path='/about' element={<About/>}/>
          
          {/* 영환 */}
          <Route path='/story' element={<Story/>}/>
          
          {/* 대욱 */}
          <Route path='/mypage' element={<Mypage/>}/>

        </Routes>
    </div>
  );
}

export default App;
