import { useState } from 'react'
import { Layout } from './components/Layout';
import { WordCard } from './components/WordCard';


function App() {
  return (
      <Layout>
          <div className="h-full flex items-center justify-center">
              <WordCard text="학교" pronunciation="hakkyo" />
          </div>
      </Layout>
  )
}

export default App
