
import { useEffect, useState } from 'react'
import './App.css'
import { DetailedStatement } from './components/DetailedStatement'
import { Header } from './components/Header'
import { OccupancyAndAverageDailyRate } from './components/OccupancyAndAverageDailyRate'
import { Outlay } from './components/Outlay'
import { Receipts } from './components/Receipts'
import { Sales } from './components/Sales'
import data from './database/data-set.json'
import { useTranslation } from "react-i18next"
import i18n from '../src/lib/translation'
import moment from 'moment';
import 'moment/locale/pt-br';


function App() {

  const financial = data.financial
  const periodReport = [
    data.periodReport.dates
  ]

  const periodAvg = data.periodReport.periodAvg
  const spending = data.spending
  const commerce = data.commerce
  const bookings = data.financial.extract

  const { t, i18n: { changeLanguage, language }, } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)


  function handleChangeLanguage() {
    const newLanguage = currentLanguage === 'en-US' ? 'pt-br' : 'en-US'

    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

    moment.locale(language); // Configura o locale para pt-br
    console.log('Locale atual:', moment.locale()); // Deve mostrar 'pt-br'

    let currency = ''

    if (language === 'en-US') {
        currency = 'USD'

    } else if (language === 'pt-br') {
        currency = 'BRL'
        

    }



  return (
    <>
      <div className="py-2 px-2">
        <button onClick={handleChangeLanguage} className="fixed bg-blue-500 text-white font-roboto font-medium py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
          Tradução - {language}
        </button>
      </div>
      <Header t={t} language={language}/>
      <Receipts t={t} language={language} currency={currency} financial={financial} />
      <OccupancyAndAverageDailyRate t={t} language={language} currency={currency} periodReport={periodReport} periodAvg={periodAvg} />
      <Outlay t={t} language={language} currency={currency}  spending={spending} />
      <Sales t={t} language={language} currency={currency} commerce={commerce} />
      <DetailedStatement t={t} language={language} currency={currency} bookings={bookings} />
    </>
  )
}

export default App
