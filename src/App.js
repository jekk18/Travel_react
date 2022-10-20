import {HashRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/homePage/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './PagesComp/AboutPage';
import DiscoverPage from './PagesComp/DiscoverPage';
import BlogPage from './PagesComp/BlogPage';
import GalleryPage from './PagesComp/GalleryPage';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
        <Routes>
          <Route path='/aboutpage' exact element={<AboutPage/>} />
        </Routes>
        <Routes>
          <Route path='/discoverpage' exact element={<DiscoverPage/>} />
        </Routes>
        <Routes>
          <Route path='/blogpage' exact element={<BlogPage/>} />
        </Routes>
        <Routes>
          <Route path='/journalspage' exact element={<DiscoverPage/>} />
        </Routes>
        <Routes>
          <Route path='/gallerypage' exact element={<GalleryPage/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
