import React from "react";
import { Container } from "reactstrap";

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/avengers.jpg") + ")",
			height: "1000px"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Trailer</h1>
            <button className="botn fourth">Watch</button>
			<iframe src="https://youtu.be/-edmQKcOW8s" width="400" height="300"></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
