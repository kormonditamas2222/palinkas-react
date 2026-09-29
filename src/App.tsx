import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header'
import IntroCard from './components/IntroCard'
import { List1, List2, List3, Table1, Tudnivalok } from './data/Lists'
import { Image1, Image2, Image3, Image4 } from './data/Images'
import ListComponent from './components/ListComponent'
import TableComponent from './components/TableComponent'
import ImageComponent from './components/ImageComponent'
import TudnivaloCard from './components/TudnivaloCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="container">
        <Header/>
        <IntroCard/>
        <div className="row mb-2">
          <ListComponent title={List1.title} items={List1.items}/>
          <ListComponent title={List2.title} items={List2.items}/>
          <ListComponent title={List3.title} items={List3.items}/>
        </div>
        <div className="row mb-1">
          <TableComponent title={Table1.title} items={Table1.items}/>
        </div>
        <div className="row mb-1">
          <ImageComponent title={Image1.title} source={Image1.source} description={Image1.description}/>
          <ImageComponent title={Image2.title} source={Image2.source} description={Image2.description}/>
          <ImageComponent title={Image3.title} source={Image3.source} description={Image3.description}/>
          <ImageComponent title={Image4.title} source={Image4.source} description={Image4.description}/>
        </div>
        <TudnivaloCard title={Tudnivalok.title} items={Tudnivalok.items}/>
      </div>
      <Footer/>
    </>
  )
}

export default App
