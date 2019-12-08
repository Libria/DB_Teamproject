import React from "react";
import Card from './Cards';
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignUp from "./index-sections/SignUp.js";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
				<Card movie={{
			Poster: require('../assets/img/movie.jpg'),
			Title: 'Movie Title',
			imbdID: '123455',
		}} />
		<Card movie={{
			Poster: require('../assets/img/movie.jpg'),
			Title: 'Movie Title',
			imbdID: '123455',
		}} />
		<Card movie={{
			Poster: require('../assets/img/movie.jpg'),
			Title: 'Movie Title',
			imbdID: '123455',
		}} />
		<Card movie={{
			Poster: require('../assets/img/movie.jpg'),
			Title: 'Movie Title',
			imbdID: '123455',
		}} />
        <div className="main">
          <SignUp />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
