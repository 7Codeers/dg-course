import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarOne } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarTwo } from "@fortawesome/free-regular-svg-icons";

const Rating = (props) => {
  const IconSize = props.IconSize ? props.IconSize : 'sm';
  const fontSizeClass = props.IconSize === 'lg' ? 'text-custom-font-size-23' : 'text-custom-font-size-14';
  return (
    <div className="flex items-center gap-4">
        <div className="flex gap-4 items-center">
         <FontAwesomeIcon icon={faStarOne}  color="#ffbb00" size={IconSize}/>
         <FontAwesomeIcon icon={faStarOne}  color="#ffbb00" size={IconSize}/>
         <FontAwesomeIcon icon={faStarOne}  color="#ffbb00" size={IconSize}/>
         <FontAwesomeIcon icon={faStarTwo}  color="rgba(0,0,0,.5)" size={IconSize}/>
         <FontAwesomeIcon icon={faStarTwo}  color="rgba(0,0,0,.5)" size={IconSize}/>
        </div>
        <div className={`font-bold text-[#7f7f7f] ${fontSizeClass}`}>
            <span>(</span>
            <span>۹۳۱</span>
            <span>)</span>
        </div>
    </div>
  )
}

export default Rating