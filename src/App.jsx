import { Suspense } from 'react'
import './App.css'
import Bottles from './assets/components/Bottles/Bottles'

const bottlesPromise = fetch('../public/bottles.json').then(res=>res.json())

function App() {
 

  return (
    <>
     
      <h1>R Water Bottles</h1>
      <Suspense fallback={<p>Bottles are Loding...</p>}>
        <Bottles 
        bottlesPromise={bottlesPromise}>

        </Bottles>
      </Suspense>
     
    </>
  )
}

export default App
