import { AiOutlineBars } from "react-icons/ai";
import { formatNumber } from "../functions/functions"

export function Receipts({financial}){

    return(

        <>
            <div className="flex justify-start items-start gap-2 py-2">
            <AiOutlineBars size={35}/>
                <h1 className="text-3xl">Recebimentos</h1>
            </div>

            <table className="table-fixed flex flex-col">
                <thead className="flex text-center text-xs">
                    <tr className="w-full flex justify-center items-center">
                        <th className="w-full text-left font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Tipo</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Valor</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Devolução</th>
                        <th className="w-full text-right font-bold text-black border-y border-b-0 border-gray-200 px-4 py-2">Financeiro</th>
                    </tr>
                </thead>

                <tbody className="text-xs">
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">Depósito</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.deposit.total)}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.deposit.refunded)}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.deposit.total)}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">Cartão de Crédito</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.creditCard.total)}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.creditCard.refunded)}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.creditCard.total)}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">Dinheiro</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.cash.total)}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.cash.refunded)}</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.cash.total)}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0  border-gray-200 px-4 py-2">Cartão de Débito</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.debitCard.total)}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.debitCard.refunded)}</td>
                        <td className="w-full text-right border-y border-b-0  border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.debitCard.total)}</td>
                    </tr> 
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y  border-gray-200 px-4 py-2">Boleto</td>
                        <td className="w-full text-right border-y   border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.boleto.total)}</td>
                        <td className="w-full text-right border-y  border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.boleto.refunded)}</td>
                        <td className="w-full text-right border-y  border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.boleto.total)}</td>
                    </tr>
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">Voucher</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.voucher.total)}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.voucher.refunded)}</td>
                        <td className="w-full text-right border-y border-b-0 border-t-0 border-gray-200 px-4 py-2">R$ {formatNumber(financial.payments.voucher.total)}</td>
                    </tr>
                    {/* <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-b-0 border-gray-200 px-4 py-2">Vendas Faturadas</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>
                        <td className="w-full text-right border-y border-b-0 border-gray-200 px-4 py-2">R$ 10,00</td>
                    </tr> */}
                    <tr className="w-full flex text-center">
                        <td className="w-full text-left font-bold border-y border-x-0 border-gray-200 px-4 py-2">Total</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">R$ {formatNumber(financial.total)}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">R$ {formatNumber(financial.refunds)}</td>
                        <td className="w-full text-right border-y font-bold border-gray-200 px-4 py-2">R$ {formatNumber(financial.total)}</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    )
}