
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import {RepeatWordMenu} from "./pages/RepeatWordMenu";
import {LearnWordMenu} from "./pages/LearnWordMenu";


function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Routes>
                  <Route path ="/repeat" element={<RepeatWordMenu/>}/>
                  <Route path ="/learn" element={<LearnWordMenu/>}/>
              </Routes>
          </Layout>
      </BrowserRouter>
  )
}

export default App
