import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Routes, useParams, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PostDetail from './components/PostDetail';
class App extends Component {
  render() {
    const Wrapper = (props) => {
      const params = useParams();
      const navigate = useNavigate();
      return <PostDetail {...{...props, match: {params}, navigate: navigate} } />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path="/:id" element={<Wrapper />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;