import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from "@fortawesome/free-solid-svg-icons";

const TeachLabel = ( props ) => {
    const IconSize = props.IconSize ? props.IconSize : 'sm';
    return (
        <div className='flex items-center justify-center gap-4'>
            <FontAwesomeIcon icon={faTag} size={IconSize} className='text-[#979797]' />
            <span className='text-custom-font-size-16 text-[#979797]'>آموزشی</span>
        </div>
    )
}

export default TeachLabel