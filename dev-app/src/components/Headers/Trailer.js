import React from 'react';
import {Carousel} from 'react-bootstrap';

class Trailer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            direction: null
        }

        this.handleSelect = this.handleSelect.bind(this);
    }
  
    handleSelect = (selectedIndex, e) => {
      this.setState({index: selectedIndex, direction: e.direction});
    };
    
    render() {
        return (
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} interval={150000}>
            <Carousel.Item>
            {/*<img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
            />*/}
            <iframe width="800" height="500" src="https://www.youtube.com/embed/5MzZQqeSqaA?rel=0;amp;autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Carousel.Caption>
                <h3 style={{float: 'right'}}>겨울왕국2</h3>
                {/*<p>어느 날 부턴가 의문의 목소리가 엘사를 부르고, 평화로운 아렌델 ...</p>*/}
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/0ptz18xhPjs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            <Carousel.Caption>
                <h3 style={{float: 'right'}}>포드 V 페라리</h3>
                {/*<p>1960년대, 매출 감소에 빠진 ‘포드’는 판매 활로를 찾기 위해 스...</p>*/}
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <iframe width="800" height="500" src="https://www.youtube.com/embed/KJF6vs5SuUs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            <Carousel.Caption>
                <h3 style={{float: 'right'}}>나이브스 아웃</h3>
                {/*<p>베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다. 그의...</p>*/}
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        );
    }
  }
  
export default Trailer;