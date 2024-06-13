
import './App.css'
import { DetailedStatement } from './components/DetailedStatement'
import { Header } from './components/Header'
import { OccupancyAndAverageDailyRate } from './components/OccupancyAndAverageDailyRate'
import { Outlay } from './components/Outlay'
import { Receipts } from './components/Receipts'
import { Sales } from './components/Sales'
import data from './database/data-set.json'
import moment from 'moment';
import 'moment/locale/pt-br';

function App() {
  moment.locale('pt-br')
 
  const financial = data.financial
  const periodReport = [
    data.periodReport.dates
    ]

  const periodAvg = data.periodReport.periodAvg  
  const spending = data.spending
  const commerce = data.commerce
  const bookings = data.financial.extract
  
    console.log(bookings);

  

  return (
    <>
      <Header/>
      <Receipts financial={financial}/>
      <OccupancyAndAverageDailyRate periodReport={periodReport} periodAvg={periodAvg}/>
      <Outlay spending={spending}/>
      <Sales commerce={commerce}/>
      <DetailedStatement bookings={bookings}/>
    </>
  )
}

export default App
