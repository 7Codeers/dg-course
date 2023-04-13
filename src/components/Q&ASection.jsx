import Path from "../assets/Path_lg_409.png";
import Boy from "../assets/boy.png"

const QASection = () => {
    return (
        <div className="min-h-screen w-full relative top-40 bg-white isolate flex flex-col gap-12">

            <div className="introduce-box w-[460px] h-[120px] justify-center mx-auto">
                <h2 className="introduce-title">پیشنهادات و انتقادات</h2>
            </div>

            <div className="container mx-auto  relative isolate">
                <form className="w-[660px] h-[725px] px-8 py-12 shadow-lg rounded-[25px] flex flex-col bg-white gap-[20px]">
                    <input type="text" placeholder="نام کامل" className="shadow-lg rounded-[25px] flex items-center px-4 text-logo-first-color text-custom-font-size-23 h-[80px] placeholder:text-logo-first-color outline-none"/>
                    <input type="email" placeholder="ایمیل" className="shadow-lg rounded-[25px] flex items-center px-4 text-logo-first-color text-custom-font-size-23 h-[80px] placeholder:text-logo-first-color outline-none"/>
                    <textarea className="resize-none shadow-lg rounded-[25px] flex items-center px-4 text-logo-first-color text-custom-font-size-23 h-[435px] placeholder:text-logo-first-color outline-none p-4" placeholder="متن پیام"></textarea>
                    
                </form>
                <img className="absolute -z-1 bottom-0 right-[calc(-1%+660px)]" src={Boy}/>
            </div>

            <div className="absolute left-0 bottom-0 -z-1 w-[1180px] h-[670px] overflow-hidden">
                <img className="block w-full h-full object-contain" src={Path} />
            </div>
        </div>
    )
}

export default QASection