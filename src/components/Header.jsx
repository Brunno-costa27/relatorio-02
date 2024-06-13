import { TbReport } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { BsCalendar4 } from "react-icons/bs";

export function Header() {

    return (

        <header className="font-sans mb-12">
            <div className="mb-10">
                <img className="w-[20%]" src="http://www.hotelpetropolisinn.com.br/images/hpi-right.svg" alt="Hotel petropolis inn" />
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="flex justify-start items-center gap-2">
                        <TbReport size={30}/>
                        <p className="text-2xl ">Fechamento</p>
                    </div>

                    <div className="flex justify-start items-start gap-2">
                        <p className="text-2xl ">26/05/2024</p>
                            <BsArrowRight size={30}/>
                        <p className="text-2xl ">31/05/2024</p>
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="flex justify-start items-center gap-2">
                        <FaRegUser size={18}/>
                        <p className="text-xl">Pedro Moter</p>
                    </div>

                    <div className="flex justify-start items-center gap-2">
                    <BsCalendar4 size={18}/>
                    <p className="text-xl">10/06/2024 20:16</p>
                    </div>
                </div>
            </div>
        </header>
    )
}