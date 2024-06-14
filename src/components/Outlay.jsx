import { AiOutlineDeploymentUnit } from "react-icons/ai";
// import { BsCalendar4 } from "react-icons/bs";
import { formatNumber, sum } from '../functions/functions'


export function Outlay({t, language, spending}){

    return (

        <>
            <div className="flex justify-start items-start gap-2 py-4">
                <AiOutlineDeploymentUnit size={35} />
                <h1 className="text-3xl">{t('expenses.expenses')}</h1>
            </div>
            {/* Deixar as tabelas com 4 colunas e alinhas as que tem dados e as que não tem deixar vazio */}
            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-xs">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('expenses.header.type')}</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('expenses.header.total')}</th>
                    </tr>
                </thead>

                <tbody className="text-xs">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                            <div className="flex justify-start items-center gap-1">
                                <p>{t('expenses.types.ticket')}</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('expenses.types.value', {
                            value: formatNumber(spending.boleto)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <p>{t('expenses.types.money')}</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('expenses.types.value', {
                            value: formatNumber(spending.cash)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                        <div className="flex justify-start items-center gap-1">
                                <p>{t('expenses.types.total')}</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('expenses.types.value', {
                            value: formatNumber(sum(spending.boleto, spending.cash))
                        })}</td>
                    </tr>
                   
                   
                    

                </tbody>
            </table> 
        </>
    )
}