import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube,faInstagram,faTelegram,faFacebook,faTwitter } from '@fortawesome/free-brands-svg-icons'

import FooterImage from "../assets/footer_white.png";
import FooterImageOne from "../assets/file_20190726_1738_90551.png";
import FooterImageTwo from "../assets/enamad.png";

const Footer = () => {
    return (
        <footer className="w-full h-[310px] bg-white relative top-[10rem] z-5 flex items-center pt-20 px-12 pb-0">

            <img className="w-full absolute left-0 right-0 top-[-50%] z-10 scale-x-125 scale-y-125" src={FooterImage} />

            <div className="flex flex-wrap items-center h-full w-full justify-between">

                <ul className="flex flex-col h-full justify-center gap-2">
                    <li className="flex items-center text-custom-font-size-22 text-text-color-8">
                        <Link>بلاگ</Link>
                    </li>
                    <li className="flex items-center text-custom-font-size-22 text-text-color-8">
                        <Link>درباره ما</Link>
                    </li>
                    <li className="flex items-center text-custom-font-size-22 text-text-color-8">
                        <Link>تماس با ما</Link>
                    </li>
                    <li className="flex items-center text-custom-font-size-22 text-text-color-8">
                        <Link>همکاری با ما</Link>
                    </li>
                    <li className="flex items-center text-custom-font-size-22 text-text-color-8">
                        <Link>سوالات متداول</Link>
                    </li>
                </ul>

                <ul className="flex flex-col h-full justify-center gap-2">
                    <li className="text-custom-font-size-22 text-text-color-8">شماره تماس</li>
                    <li className="text-custom-font-size-22 text-text-color-8" dir="ltr">+98912123456</li>
                    <li className="text-custom-font-size-22 text-text-color-8" dir="ltr">+98912123456</li>
                </ul>

                <div className="flex flex-col items-center gap-4">

                    <div className="flex flex-wrap gap-4 items-center justify-between">
                        <Link>
                            <FontAwesomeIcon icon={faYoutube} size="2xl"  className="text-logo-first-color" />
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faInstagram} size="2xl"  className="text-logo-first-color" />
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faTelegram} size="2xl" className="text-logo-first-color" />
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faFacebook} size="2xl" className="text-logo-first-color" />
                        </Link>
                        <Link>
                            <FontAwesomeIcon icon={faTwitter} size="2xl" className="text-logo-first-color" />
                        </Link>
                    </div>

                    <h2 className="text-custom-font-size-23 font-bold text-logo-first-color">ما را در شبکه های اجتماعی دنبال کنید</h2>
                </div>

                <img src={FooterImageOne} />
                <img src={FooterImageTwo} />

            </div>
        </footer>
       
    )
}

export default Footer