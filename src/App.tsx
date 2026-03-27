
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {
    QueryClient,
    QueryClientProvider,

} from '@tanstack/react-query'
import { Layout } from './components/Layout';
import {RepeatWordMenu} from "./pages/RepeatWordMenu";
import {LearnWordMenu} from "./pages/LearnWordMenu";


const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route path ="/repeat" element={<RepeatWordMenu/>}/>
                      <Route path ="/learn" element={<LearnWordMenu/>}/>
                  </Routes>
              </Layout>
          </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
