import React from "react";
import Card from './Cards';
import {Carousel} from 'react-bootstrap';
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
        <Carousel>
          <Carousel.Item>
            <Card movie={{
              Poster: require('../Movie/Img/bg_겨울왕국2.jpg'),
              Title: '겨울왕국2',
              imbdID: '1',
              summary: '어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 ...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_포드V페라리.jpg'),
              Title: '포드 V 페라리',
              imbdID: '2',
              summary: '1960년대, 매출 감소에 빠진 ‘포드’는 판매 활로를 찾기 위해 스...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_2020빈필하모닉신년음악회.jpg'),
              Title: '2020 빈 필하모닉 신년음악회',
              imbdID: '3',
              summary: '스크린으로 만나는 세계 최고의 음악회 [Live] 2020 빈 필하모닉 ...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_시동.jpg'),
              Title: '시동',
              imbdID: '4',
              summary: '학교도 싫고 집도 싫고 공부는 더더욱 싫다며 \'엄마\'(염정아)...'
            }} />
          </Carousel.Item>
          <Carousel.Item>
            <Card movie={{
              Poster: require('../Movie/Img/bg_쥬만지넥스트레벨.jpg'),
              Title: '쥬만지: 넥스트레벨',
              imbdID: '5',
              summary: '쥬만지 게임으로부터 가까스로 탈출해 평화로운 일상을 보내던 스펜...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_나이브스아웃.jpg'),
              Title: '나이브스 아웃',
              imbdID: '6',
              summary: '베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다. 그의...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_감쪽같은그녀.jpg'),
              Title: '감쪽같은 그녀',
              imbdID: '7',
              summary: '“초면에 실례하겠습니다~” 72살 나 홀로 라이프를 즐기는 ‘말...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_라스트크리스마스.jpg'),
              Title: '라스트 크리스마스',
              imbdID: '8',
              summary: '친구도 없고, 연애도 못하고, 엄마에게 얹혀 살고 있는 인생 뭐 ...'
            }} />
          </Carousel.Item>
          <Carousel.Item>
            <Card movie={{
              Poster: require('../Movie/Img/bg_러브라이브.jpg'),
              Title: '러브라이브! 니지가사키 학원 스쿨 아이돌 동호회 Frist Live',
              imbdID: '9',
              summary: '본 이벤트는 일본 현지에서 진행되는 \'러브라이브! 니지가사키 ...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_웃는남자.jpg'),
              Title: '웃는 남자',
              imbdID: '10',
              summary: '17세기 영국, 아이들을 납치해 기형적인 괴물로 만들어 귀족들의 ...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_베를린필하모닉.jpg'),
              Title: '베를린 필하모닉',
              imbdID: '11',
              summary: '스크린으로 만나는 세계 최고의 콘서트 [딜레이 중계] 베를린 ...'
            }} />
            <Card movie={{
              Poster: require('../Movie/Img/bg_아내를죽였다.jpg'),
              Title: '아내를 죽였다.',
              imbdID: '12',
              summary: '친구와 술을 마신 후 곯아떨어진 ‘정호’는 숙취로 눈을 뜬 다음 날...'
            }} />
          </Carousel.Item>
        </Carousel>
        {/*
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
  */}
        <div className="main">
          <SignUp />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
