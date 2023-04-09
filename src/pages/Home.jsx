import React from "react";
import CommentComponent from "../components/CommentComponent";
import CourseTeacher from "../components/CourseTeacher";
import Navigation from "../components/Navigation";
import Category_card from "./../components/Category_card";
import Teacher_card from "./../components/Teacher_card";

// @Dev Please to change code Modify it
const Home = () => {
	return (
		<div>
			<h1>This is Home Page</h1>
			<Navigation />
{/* <CommentComponent /> */}
			 {/* <CourseTeacher /> */}

			
			{/* /<Teacher_card /> */}

			<Category_card />  
		</div>
	);
};

export default Home;
