import './App.css'
import Design from './components/designs/Design'
import Home from './components/home/Home'
import Intro from './components/intro/Intro'
import Products from './components/products/Products'
import WorkBench from './components/workbench/WorkBench'
import Years from './components/years/Years'
import image1 from './assets/images/image1.png'
import image2 from './assets/images/image2.png'
import image3 from './assets/images/image3.png'
import image4 from './assets/images/image4.png'
import image5 from './assets/images/image5.png'
import image6 from './assets/images/image6.png'

function App() {


  return (
    <>
      <Home />
      <Intro />
      <Design image1={image1} image2={image2} image3={image3} />
      <Years />
      <WorkBench />
      <Products />
      <Design image1={image4} image2={image5} image3={image6} />
    </>
  )
}

export default App
