import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BsCalendar4 } from "react-icons/bs";
import { formatNumber } from '../functions/functions'
import moment from 'moment';
import 'moment/dist/locale/pt-br'


export function OccupancyAndAverageDailyRate({t, language, periodReport, periodAvg }) {

    moment.locale(language)
    const occupationDailyAvg = Object.entries(periodReport[0]).map((chave, valor) => {
        
        return chave
    });
    // moment.locale('pt-BR'); // Configura o locale para pt-br
    // moment.locale('en-US'); // Configura o locale para pt-br


    const formatDate = moment("2024-05-26").format('ddd l');
    console.log(formatDate)

    return (

        <>

            <div className="flex justify-start items-start gap-2 py-4">
                <AiOutlineDeploymentUnit size={35} />
                <h1 className="text-3xl">Ocupação e Diária Média</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-xs">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Data</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Ocupaçao</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Diária Média</th>

                    </tr>
                </thead>

                <tbody className="text-xs">

                    {occupationDailyAvg.map((item) =>
                        <>

                            <tr className="w-full flex text-center">
                                <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                                    <div className="flex justify-start items-center gap-1">
                                        <BsCalendar4 size={15} />
                                        <p>{moment(item[0]).format('ddd l')}</p>
                                    </div>
                                </td>
                                <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{item[1].occp.toFixed(0)}%</td>
                                <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('occupationAndAverageDailyRate.averageDailyRate.value', {
                                    value: formatNumber(item[1].avg)
                                })}</td>

                            </tr>
                        </>

                    )}
                    {/* <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <BsCalendar4 size={15}/>
                                <p>Seg 26/05/2024</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">47%</td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <BsCalendar4 size={15}/>
                                <p>Ter 26/05/2024</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">39%</td>
                        <td className="w-full text-center border-y bor  der-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0  border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <BsCalendar4 size={15}/>
                                <p>Qua 26/05/2024</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0  border-gray-200 px-4 py-2">66%</td>
                        <td className="w-full text-center border-y border-b-0  border-gray-200 px-4 py-2">R$ 10,00</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <BsCalendar4 size={15}/>
                                <p>Qui 26/05/2024</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y   border-gray-200 px-4 py-2">100%</td>
                        <td className="w-full text-center border-y  border-gray-200 px-4 py-2">R$ 10,00</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <BsCalendar4 size={15}/>
                                <p>Sex 26/05/2024</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">103%</td>
                        <td className="w-full text-center border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">R$ 10,00</td> */}

                    {/* </tr> */}


                    <tr className="w-full flex text-center">
                        <td className="w-full text-left text-xs font-extrabold border-y border-b-0 border-gray-200 px-4 py-2">
                            {t('occupationAndAverageDailyRate.periodAverage.average')}
                        </td>
                        <td className="w-full text-center font-bold border-y border-b-0 border-gray-200 px-4 py-2">{periodAvg.occpAvg.toFixed(0)}%</td>
                        <td className="w-full text-center border-y font-bold border-b-0 border-gray-200 px-4 py-2">{t('occupationAndAverageDailyRate.periodAverage.value', {
                            value: formatNumber(periodAvg.periodRateAvg)
                        })}</td>

                    </tr>




                </tbody>
            </table>
        </>
    )
}