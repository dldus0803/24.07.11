import React, { useState, useEffect } from 'react';
import './Second.css';

function Second() {
  const texts = [
    "24년도 1학기 유연화 프로젝트 역사 관련 쇼핑몰 제작하기",
    "사실 제작 기간을 잘못 잡아서..",
    '디자인에 신경쓰지 못 했습니다..',
    "방학동안 수정해 오겠습니다"
  ];

  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLeftClick = () => {
    if (index === 0) {
      setMessage('첫 페이지입니다');
    } else {
      setIndex(prevIndex => (prevIndex - 1 + texts.length) % texts.length);
      setMessage('');
    }
  };

  const handleRightClick = () => {
    if (index === texts.length - 1) {
      setMessage('마지막 페이지입니다');
    } else {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
      setMessage('');
    }
  };

  return (
    <div className="container">
      <div
        className="section left"
        onClick={handleLeftClick}
      >
      </div>
      <div
        className="section right"
        onClick={handleRightClick}
      >
      </div>
      <div className="overlay">
        <div className="text">{texts[index]}</div>
      </div>
      {message && <div className="overlay message">{message}</div>}
    </div>
  );
}

export default Second;
