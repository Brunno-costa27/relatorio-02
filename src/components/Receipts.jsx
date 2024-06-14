import { AiOutlineBars } from "react-icons/ai";
import { formatNumber } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'



export function Receipts({t, language, financial}){

    // moment.locale(language)
    //  const formatDate = moment("2024-05-26").format('ddd DD/MM/YYYY');
    // console.log(formatDate)

    return(

        <>
            <div className="flex justify-start items-start gap-2 py-2">
            <AiOutlineBars size={35}/>
                <h1 className="text-3xl">{t('receipts.receipts')}</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-xs">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.header.type')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.header.value')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.header.devolution')}</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.header.financial')}</th>
                    </tr>
                </thead>

                <tbody className="text-xs">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.type.deposit')}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.value.deposit', {
                            value: formatNumber(financial.payments.deposit.total)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.devolution.deposit', {
                            value: formatNumber(financial.payments.deposit.refunded)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.financial.deposit', {
                            value: formatNumber(financial.payments.deposit.total)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.type.creditCard')}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.value.creditCard', {
                            value: formatNumber(financial.payments.creditCard.total)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.devolution.creditCard', {
                            value: formatNumber(financial.payments.creditCard.refunded)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.financial.creditCard', {
                            value: formatNumber(financial.payments.creditCard.total)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.type.money')}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.value.money', {
                            value: formatNumber(financial.payments.cash.total)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.devolution.money', {
                            value: formatNumber(financial.payments.cash.refunded)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.financial.money', {
                            value: formatNumber(financial.payments.cash.total)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.type.debitCard')}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.value.debitCard', {
                            value: formatNumber(financial.payments.debitCard.total)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.devolution.debitCard', {
                            value: formatNumber(financial.payments.debitCard.refunded)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.financial.debitCard', {
                            value: formatNumber(financial.payments.debitCard.total)
                        })}</td>
                    </tr> 
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">{t('receipts.type.ticket')}</td>
                        <td className="w-full text-right border-y   border-gray-200 px-4 py-2">{t('receipts.value.ticket', {
                            value: formatNumber(financial.payments.boleto.total)
                        })}</td>
                        <td className="w-full text-right border-y  border-gray-200 px-4 py-2">{t('receipts.devolution.ticket', {
                            value: formatNumber(financial.payments.boleto.refunded)
                        })}</td>
                        <td className="w-full text-right border-y  border-gray-200 px-4 py-2">{t('receipts.financial.ticket', {
                            value: formatNumber(financial.payments.boleto.total)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.type.voucher')}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.value.voucher', {
                            value: formatNumber(financial.payments.voucher.total)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.devolution.voucher', {
                            value: formatNumber(financial.payments.voucher.refunded)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.financial.voucher', {
                            value: formatNumber(financial.payments.voucher.total)
                        })}</td>
                    </tr>
                    {/* <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">Vendas Faturadas</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>
                    </tr> */}
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-x-0 border-gray-200 px-4 py-2">{t('receipts.type.total')}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">{t('receipts.value.total', {
                            value: formatNumber(financial.total)
                        })}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">{t('receipts.devolution.total', {
                            value: formatNumber(financial.refunds)
                        })}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">{t('receipts.financial.total', {
                            value: formatNumber(financial.total)
                        })}</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}