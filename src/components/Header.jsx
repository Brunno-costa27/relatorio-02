import { TbReport } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { BsCalendar4 } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import moment from 'moment'
import 'moment/dist/locale/pt-br'

export function Header({t, language}) {

    moment.locale(language)

    return (

        <header className="mb-12">
            <div className="mb-10">
                <img className="w-[20%]" src="http://www.hotelpetropolisinn.com.br/images/hpi-right.svg" alt="Hotel petropolis inn" />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-2">
                        <TbReport size={30}/>
                        <p className="text-2xl">{t('header.closing')}</p>
                    </div>

                    <div className="flex justify-start items-start gap-2">
                        <p className="text-2xl ">{moment('2024-05-26').format('l')}</p>
                            <BsArrowRight size={30}/>
                        <p className="text-2xl ">{moment('2024-05-31').format('l')}</p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="flex justify-start items-center gap-2">
                        <FaRegUser size={18}/>
                        <p className="text-xl">Pedro Moter</p>
                    </div>

                    <div className="flex justify-start items-center gap-2">
                    <BsCalendar4 size={18}/>
                    <p className="text-xl">{moment('2024-06-10').format('l')} {moment().format('LT')}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}