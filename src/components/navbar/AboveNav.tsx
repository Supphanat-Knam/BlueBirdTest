import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const aboveNav = () => {
  return (
    <section className='bg-[#1d1d3f] justify-end pe-[50px] hidden md:flex'>
        <div className="flex h-10 *:border-1 border-gray-300 *:border-e-[1px] *:border-gray-300">
            <div className="flex gap-3 justify-center items-center *:text-gray-300 border-s-[1px] px-[2rem]">
                <BsFillTelephoneFill size = {15}/>
                <p className="text-sm">092-545-2466</p>
            </div>
            <div className="flex gap-3 justify-center items-center *:text-gray-300 px-[2rem]">
                <MdEmail size = {15}/>
                <p className="text-sm">tanapong@bluebirdsconsult.com</p>
            </div>
        </div>
    </section>
  )
}

export default aboveNav