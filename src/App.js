import React, { useState } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App =()=> {
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} key="general1" country={'in'} category={'general'} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" country={'in'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country={'in'} category={'entertainment'} />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" country={'in'} category={'general'} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" country={'in'} category={'health'} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" country={'in'} category={'sports'} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" country={'in'} category={'technology'} />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  
}
export default App
