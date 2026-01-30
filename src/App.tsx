import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import {RepeatWordCard} from "./pages/RepeatWordCard";


function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ="/repeat" element={<RepeatWordCard/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
  )
}

export default App
