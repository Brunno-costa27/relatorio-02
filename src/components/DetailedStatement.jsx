import { AiOutlineBars } from "react-icons/ai";
import { BsCalendar4 } from "react-icons/bs";
import { BsDoorClosedFill } from "react-icons/bs";
import { AiOutlineBank } from "react-icons/ai";
import { IoIosCard } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { formatNumber } from '../functions/functions'
import { BsArrow90DegLeft } from "react-icons/bs";
import moment from 'moment'
import 'moment/dist/locale/pt-br'


export function DetailedStatement({ t, language, bookings }) {

    moment.locale(language)

    return (

        <>
            <div className="flex justify-start items-start gap-2 py-2">
                <AiOutlineBars size={35} />
                <h1 className="text-3xl">{t('detailedStatement.title')}</h1>
            </div>

            {
                bookings.map((item) =>
                    <>
                        <div className="flex justify-between py-4 items-center" key={item.bill.reservation?.id}>

                            <div className="w-3/4 text-xs" key={item.bill.reservation?.id}>
                                <p className="font-extrabold">{t('detailedStatement.reservation')}: #{item.bill.reservation?.id}</p>
                                <p className="font-extrabold">{item.bill.reservation?.primaryGuest.name}</p>
                                <div className="font-extrabold">
                                    <div className="flex justify-start items-center gadiv-0">
                                        <BsDoorClosedFill size={10} />
                                        <p className="font-normal">{item.bill.reservation?.room[0]?.number}</p>
                                    </div>
                                </div>

                                {
                                    item.refunded === true ?
                                        <>
                                            <p className="font-extralight text-left text-[10px] text-gray-500 px-6">{t('detailedStatement.reversed')}</p>
                                        </>
                                        : item.isPostBilledPayment === true ?

                                            <>
                                                <p className="font-extralight text-left text-[10px] text-gray-500 px-6">{t('detailedStatement.invoiced')}</p>

                                            </>
                                            : ""
                                }
                                <div className="font-light">
                                    {
                                        item.payment === "creditCard" ?
                                            <>
                                                <div className="flex justify-start items-center gap-1">
                                                    <IoIosCard size={10} />
                                                    <p className="">{t('detailedStatement.payments.creditCard')}</p>
                                                </div>
                                            </>
                                            : item.payment === "deposit" ?
                                                <>
                                                    <div className="flex justify-start items-center gap-1">
                                                        <AiOutlineBank size={10} />
                                                        <p className="">{t('detailedStatement.payments.deposit')}</p>
                                                    </div>
                                                </>
                                                : item.payment === "debitCard" ?
                                                    <>
                                                        <div className="flex justify-start items-center gap-1">
                                                            <IoCardOutline size={10} />
                                                            <p className="">{t('detailedStatement.payments.debitCard')}</p>
                                                        </div>
                                                    </>
                                                    : item.payment === "cash" ?
                                                        <>
                                                            <div className="flex justify-start items-center gap-1">
                                                                <RiMoneyDollarCircleLine size={10} />
                                                                <p className="">{t('detailedStatement.payments.money')}</p>
                                                            </div>
                                                        </>
                                                        : item.payment === 'boleto' ?
                                                            <>
                                                                <div className="flex justify-start items-center gap-1">
                                                                    <AiOutlineBank size={10} />
                                                                    <p className="">{t('detailedStatement.payments.ticket')}</p>
                                                                </div>
                                                            </>

                                                            : item.payment === undefined ?
                                                                <>
                                                                    <div className="flex justify-start items-center gap-1">
                                                                        <IoCardOutline size={10} />
                                                                        <p className="">{t('detailedStatement.payments.debitCard')}</p>
                                                                    </div>
                                                                </>
                                                                : ""
                                    }
                                </div>
                            </div>

                            {
                                item.receivedBy?.name != null ?
                                    <>

                                        <div className="w-full text-xs">
                                            <div className="flex flex-col justify-center items-center">
                                                <p>{t('detailedStatement.receivedBy')}: {item.receivedBy?.name}</p>
                                                {
                                                    item.refundedBy != null ?
                                                        <p>{t('detailedStatement.reversedBy')}: {item.refundedBy?.name}</p>
                                                        :
                                                        ""
                                                }
                                                {
                                                    item.paymentFlags?.nsu != null ?
                                                        <>
                                                            <p>NSU: {item.paymentFlags?.nsu}</p>
                                                        </>
                                                        : ""
                                                }

                                                {
                                                    item.parcelNumber != null ?
                                                        <>
                                                            <p>{t('detailedStatement.parcel')}: x{item.parcelNumber}</p>
                                                        </>
                                                        : ""
                                                }

                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="w-full text-xs">
                                            <div className="flex flex-col justify-center items-center">
                                                <p></p>
                                                <p></p>
                                                <p></p>
                                            </div>
                                        </div>
                                    </>
                            }

                            <div className="w-3/4 flex flex-col gap-2">
                                <div className="flex justify-center items-center">
                                    <p className="text-2xl font-extrabold">R$ {formatNumber(item.value)}</p>
                                </div>

                                <div className="flex flex-col justify-center items-center gap-2 text-xs">
                                    <p className="flex justify-center items-center gap-1">
                                        <BsCalendar4 size={12} />

                                        {t('detailedStatement.receivedIn')}: {moment(item.receivalDate).format('l')} {moment().format('LT')} 
                                    </p>
                                    {
                                        item.refundedOn != null ?
                                            <p className="flex justify-center items-center gap-1">
                                                <BsArrow90DegLeft size={12} />
                                                {t('detailedStatement.reversedIn')}: {moment(item.refundedOn).format('l')} {moment().format('LT')} 
                                            </p>
                                            :
                                            ""
                                    }
                                </div>
                            </div>
                        </div>

                        <hr />
                    </>
                )
            }

        </>
    )
}