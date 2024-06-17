import { AiOutlineBars } from "react-icons/ai";
import { formatNumber, formatNumberByLanguage } from "../functions/functions"
import moment from 'moment'
import 'moment/dist/locale/pt-br'
import { useState } from "react";



export function Receipts({t, language, currency, financial}){

    moment.locale(language)
    
      console.log(currency);
    

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
                            value: formatNumberByLanguage(financial.payments.deposit.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.devolution.deposit', {
                            value:  formatNumberByLanguage(financial.payments.deposit.refunded, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.financial.deposit', {
                            value: formatNumberByLanguage(financial.payments.deposit.total, currency, language)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.type.creditCard')}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.value.creditCard', {
                            value: formatNumberByLanguage(financial.payments.creditCard.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.devolution.creditCard', {
                            value: formatNumberByLanguage(financial.payments.creditCard.refunded, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.financial.creditCard', {
                            value: formatNumberByLanguage(financial.payments.creditCard.total, currency, language)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.type.money')}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.value.money', {
                            value: formatNumberByLanguage(financial.payments.cash.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.devolution.money', {
                            value: formatNumberByLanguage(financial.payments.cash.refunded, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">{t('receipts.financial.money', {
                            value: formatNumberByLanguage(financial.payments.cash.total, currency, language)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.type.debitCard')}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.value.debitCard', {
                            value: formatNumberByLanguage(financial.payments.debitCard.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.devolution.debitCard', {
                            value: formatNumberByLanguage(financial.payments.debitCard.refunded, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">{t('receipts.financial.debitCard', {
                            value: formatNumberByLanguage(financial.payments.debitCard.total, currency, language)
                        })}</td>
                    </tr> 
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">{t('receipts.type.ticket')}</td>
                        <td className="w-full text-right border-y   border-gray-200 px-4 py-2">{t('receipts.value.ticket', {
                            value: formatNumberByLanguage(financial.payments.boleto.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y  border-gray-200 px-4 py-2">{t('receipts.devolution.ticket', {
                            value: formatNumberByLanguage(financial.payments.boleto.refunded, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y  border-gray-200 px-4 py-2">{t('receipts.financial.ticket', {
                            value: formatNumberByLanguage(financial.payments.boleto.total, currency, language)
                        })}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.type.voucher')}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.value.voucher', {
                            value: formatNumberByLanguage(financial.payments.voucher.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.devolution.voucher', {
                            value: formatNumberByLanguage(financial.payments.voucher.refunded, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">{t('receipts.financial.voucher', {
                            value: formatNumberByLanguage(financial.payments.voucher.total, currency,language)
                        })}</td>
                    </tr>
                    
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-x-0 border-gray-200 px-4 py-2">{t('receipts.type.total')}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">{t('receipts.value.total', {
                            value: formatNumberByLanguage(financial.total, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">{t('receipts.devolution.total', {
                            value: formatNumberByLanguage(financial.refunds, currency, language)
                        })}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">{t('receipts.financial.total', {
                            value: formatNumberByLanguage(financial.total, currency, language)
                        })}</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}