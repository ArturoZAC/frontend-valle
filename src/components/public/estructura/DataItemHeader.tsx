import { FaPhone } from "react-icons/fa6";
export const DataItemHeader = () => {
  return (
    <div className='flex w-[220px] items-center gap-2 px-3'>
        <div className="w-1/5">
            <span className="text-2xl text-white"><FaPhone /></span>
        </div>
        <div className="w-4/5">
            <p className="font-semibold text-sm text-white">(+51) 987 654 321</p>
            <p className="font-normal text-xs text-white-100">(Lun - Viernes)</p>
        </div>
    </div>
  )
}
