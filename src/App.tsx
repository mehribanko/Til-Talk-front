import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import {RepeatWordMenu} from "./pages/RepeatWordMenu";


function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ="/repeat" element={<RepeatWordMenu/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
  )
}

export default App
