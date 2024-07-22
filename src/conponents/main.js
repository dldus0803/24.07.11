// src/Main.js
import React from 'react';
import { Link } from 'react-router-dom'; // Link import 추가
import './Main.css';

const articles = [
  {
    id: 1,
    imageSrc: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1qFA/image/zmPrigeEoIihGVfAfjGDbkOPmOM.jpg',
    title: '바이킹 헬멧',
    description: '바이킹들이 사용하던 투구',
  },
  {
    id: 2,
    imageSrc: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/lJn/image/7ZciK6IiyI1rPhhyfgCRYbyr1A0.jpg',
    title: '중세 유럽의 구두',
    description: '중세 유럽에서 신분이나 정치적 지위를 나타내기 위한 상징',
  },
  {
    id: 3,
    imageSrc: 'https://blog.kakaocdn.net/dn/XsFhP/btrRSPGfMNX/ociKJgKfSe9pdwKKkxJqS1/img.png',
    title: '토가',
    description: '고대 로마사람들이 입던 전통 의복',
  },
  {
    id: 4,
    imageSrc: 'https://dimg.donga.com/wps/NEWS/IMAGE/2018/02/21/88766122.1.jpg',
    title: '로마의 유리컵',
    description: '로마시대의 사람들이 사용했던 유리컵',
  },
  {
    id: 5,
    imageSrc: 'https://mono.aks.ac.kr/s/media/d9/d9bee3a3-6531-405a-bef0-b0410b9af294.jpg?preset=page',
    title: '은장도',
    description: '일반적으로 한국의 전통 문화에서 여성들이 지니던 은장도',
  },
  {
    id: 6,
    imageSrc: 'https://mblogthumb-phinf.pstatic.net/MjAyMjA3MDJfMjk2/MDAxNjU2NzI4ODMwNTk1.H3FPE8oHJ0yEMQmiQxFhnu2DiRV-ndQCks3OdXcUpc8g.XnNdB9yM5TFnaZIyp8K68TsZAI8ju4ehVn_uAwHRE60g.PNG.kkkk000000/20220624_114705.png?type=w420',
    title: '구한말의 백자',
    description: '조선시대 의식용이나 제례용으로 많이 사용된 백자',
  },
  {
    id: 7,
    imageSrc: 'https://studybuddhism.com/media/W1siZiIsIjIwMTkvMDIvMjUvMDAvMzAvMjgvMTA5Mzg5MTMtYjE5NC00ZjE4LWJjZGMtNjA4MTFjMTU4NjhlL3N0dWR5LWJ1ZGRoaXNtLW1hbmRhbGEuanBnIl0sWyJwIiwidGh1bWIiLCI3MDB4XHUwMDNlIl1d/study-buddhism-mandala.jpg?sha=17ed40541b884fd8',
    title: '인도의 만다라',
    description: '종교적 명상 도구 및 공간 설계와 치유를 위한 도구',
  }
];

function Main() {
  const handleScroll = (vh) => {
    const pixels = window.innerHeight * (vh / 100);
    window.scrollTo({
      top: pixels,
      behavior: 'smooth'
    });
  };

  return (
    <div className="header">
      <img className="main_image" src={"https://images.pexels.com/photos/1007425/pexels-photo-1007425.jpeg"} alt="main_image" />
      <div className="overlay_text">
        <div className='bar'>
          <h3 onClick={() => handleScroll(0)}>Home</h3>
          <h3 onClick={() => handleScroll(105)}>중세 유럽</h3>
          <h3 onClick={() => handleScroll(220)}>고대 로마</h3>
          <h3 onClick={() => handleScroll(350)}>조선시대</h3>
          <h3 onClick={() => handleScroll(450)}>인도</h3>
        </div>
      </div>
      <div id="main">
        <div className="inner">
          <header>
            <h1>본래의 사용 용도와 다르게 알려진 유물들</h1>
            <p></p>
          </header>
          <section className="tiles">
            {articles.map(article => (
              <article key={article.id}>
                <span className="image">
                  <img src={article.imageSrc} alt={article.title} />
                </span>
                <Link to={`/generic?content=${article.id}`}>
                  <h5>{article.title}</h5>
                  <div className="content">
                    <p>{article.description}</p>
                  </div>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Main;
