import React from "react";
import navimg from "../../public/img/avatar.png";
import {Link} from "react-router-dom";
function Navigation() {
	return (
		<>
			<nav className="flex gap-4 flex-row-reverse items-center mt-8 mr-16 text-[#5A0BA9] font-vazirmatnLight">
				<img src={navimg} />
				<ul className="hidden gap-8 flex-row-reverse md:flex">
					<li className="text-xl"> <Link to="#">خانه </Link></li>
					<li className="text-xl"> <Link to="#">آموزش</Link></li>
					<li className="text-xl"> <Link to="#">بلاگ</Link></li>
					<li className="text-xl"> <Link to="#">خدمات</Link></li>
					<li className="text-xl"> <Link to="#">دوره ها</Link></li>
					<li className="text-xl"> <Link to="#">تماس با ما</Link></li>
				</ul>
			</nav>
		</>
	);
}

export default Navigation;
