import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"

const Pagination = () => {
    return (
        <div className="min-w-[420px] h-[65px] bg-white p-3 px-8 flex items-center justify-between shadow-lg rounded-[25px]">
            <button>
                <FontAwesomeIcon icon={faChevronRight} size='lg'/>
            </button>
            <div className="w-[215px] h-full overflow-hidden overflow-x-scroll flex gap-2 items-center">
                <button className="flex items-center justify-center py-2 px-4  font-bold text-custom-font-size-25">۱</button>
                <button className="flex items-center justify-center py-2 px-4  font-bold text-custom-font-size-25">۲</button>
                <button className="flex items-center justify-center py-2 px-4   font-bold text-custom-font-size-25">۳</button>
                <button className="flex items-center justify-center py-2 px-4   font-bold text-custom-font-size-25">۴</button>
                <button className="flex items-center justify-center py-2 px-4   font-bold text-custom-font-size-25">۵</button>
            </div>
            <button>
                <FontAwesomeIcon icon={faChevronLeft} size='lg'/>
            </button>
        </div>
    )
}

export default Pagination