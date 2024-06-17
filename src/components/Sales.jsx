import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { BsCalendar4 } from "react-icons/bs";
import { PiBag } from "react-icons/pi";
import { formatNumber, sum, formatNumberByLanguage } from "../functions/functions";
import moment from 'moment';


export function Sales({t, language, currency, commerce}) {

    
    // Teste
    // let number = 20
    // console.log(language);
    // if (language === 'en-US') {
    //     let currency = 'USD'
    //     console.log(formatNumberByLanguage(number, currency, language))

    // } else if (language === 'pt-br') {
    //     let currency = 'BRL'
    //     console.log(formatNumberByLanguage(number, currency, language))

    // }
      

    return (

        <>
            <div className="flex justify-start items-start gap-2 py-4">
                <PiBag size={35} />
                <h1 className="text-3xl flex text-align-bottom">{t('sales.title')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-xs">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.header.type')}</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.header.value')}</th>
                        <th className="w-full text-center font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.header.devolution')}</th>

                    </tr>
                </thead>

                <tbody className="text-xs">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                            <div className="flex justify-start items-center gap-1">
                                <p>{t('sales.types.products')}</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.types.value', {
                            value: formatNumberByLanguage(commerce.products.sold, currency, language)
                        })}</td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.types.value', {
                            value: formatNumberByLanguage(commerce.products.cancelled, currency, language)
                        })}</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                            <div className="flex justify-start items-center gap-1">
                                <p>{t('sales.types.services')}</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.types.value', {
                            value: formatNumberByLanguage(commerce.services.sold, currency, language)
                        })}</td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.types.value', {
                            value: formatNumberByLanguage(commerce.services.cancelled, currency, language)
                        })}</td>

                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">
                            <div className="flex justify-start items-center gap-1">
                                <p>{t('sales.types.total')}</p>
                            </div>
                        </td>
                        <td className="w-full text-center border-y border-b-0 border-gray-200 px-4 py-2">{t('sales.types.value', {
                            value: formatNumberByLanguage(sum(commerce.products.sold,commerce.services.sold), currency, language)
                        })}</td>
                        <td className="w-full text-center border-y bor  der-b-0 border-gray-200 px-4 py-2">{t('sales.types.value', {
                            value: formatNumberByLanguage(sum(commerce.products.cancelled,commerce.services.cancelled), currency, language)
                        })}</td>

                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}