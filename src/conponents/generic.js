// src/Generic.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './generic.css';

// const contentData = {
//     '1': {
//         h1Text: '은장도',
//         h3Text: '₩4,835,547.50',
//         p8Text: '일반적으로 한국의 전통 문화에서 여성들이 지니던 은장도',
//         pText: '일반적으로 한국의 전통 문화에서 여성들이 지니던 은장도<br>정절을 지키기 위한 도구로 알려져 있으나 실제로는 일상생활에서 다용도로 사용되는 도구였다.<br>여성들은 이를 다양한 용도로 사용했으며, 식기 대용이나 작은 작업을 할 때 유용하게 썼다.<br>현대의 멕가이버 칼과 유사한 역할을 했던 셈이다.',
//         imgUrl: 'https://mono.aks.ac.kr/s/media/d9/d9bee3a3-6531-405a-bef0-b0410b9af294.jpg?preset=page',
//     },
//     '2': {
//         h1Text: '바이킹 헬멧',
//         h3Text: '₩7,598,717.50',
//         p8Text: '바이킹들이 사용하던 투구',
//         pText: '바이킹들이 사용하던 투구<br>흔히 양쪽에 뿔이 있는 모습을 상상하지만, 이는 공격받기 쉬워 실제로는 뿔이 달려있지 않았다.<br>뿔이 달린 바이킹 헬멧은 1800년대 시인들과 작가들이 만들어낸 모습이다.',
//         imgUrl: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1qFA/image/zmPrigeEoIihGVfAfjGDbkOPmOM.jpg',
//     },
//     '3': {
//         h1Text: '토가',
//         h3Text: '₩138,158.50',
//         p8Text: '고대 로마사람들이 입던 전통 의복',
//         pText: '고대 로마사람들이 입던 전통 의복<br>남성들이 입던 고위층만의 의복으로 생각되지만, 초기에는 남여노소 로마의 시민이라면 입던 의복이다.',
//         imgUrl: 'https://blog.kakaocdn.net/dn/cw5XOr/btqyLI6qWmD/QqTKV8G9OgLtLvXWAewRc0/img.png',
//     },
//     '4': {
//         h1Text: '로마의 유리컵',
//         h3Text: '₩4,144,755.00',
//         p8Text: '로마시대의 사람들이 사용했던 유리컵',
//         pText: '로마시대의 사람들이 사용했던 유리컵<br>단순한 유리컵으로도 사용되었지만 실질적으로는 특수한 화학 실험에 사용되었다.<br>한국에는 경주와 합천 옥전 고분을 빼고는 거의 발견되지 않은 것으로 보아 지배층들끼리만 공유한 외래 문물이었던 것으로 보인다.',
//         imgUrl: 'https://dimg.donga.com/wps/NEWS/IMAGE/2018/02/21/88766122.1.jpg',
//     },
//     '5': {
//         h1Text: '중세 유럽의 구두',
//         h3Text: '₩16,579,020.00',
//         p8Text: '중세 유럽에서 신분이나 정치적 지위를 나타내기 위한 상징',
//         pText: '중세 유럽에서 신분이나 정치적 지위를 나타내기 위한 상징<br>단순한 신발 및 곳곳에 있는 변을 피하기 위함이라고 알려져 있지만 실제로는 신분이나 정치적 지위를 나타내기 위한 상징으로 사용되었다.',
//         imgUrl: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/lJn/image/7ZciK6IiyI1rPhhyfgCRYbyr1A0.jpg',
//     },
//     '6': {
//         h1Text: '구한말의 백자',
//         h3Text: '₩48,355,475.00',
//         p8Text: '조선시대 의식용이나 제례용으로 많이 사용된 백자',
//         pText: '조선시대 의식용이나 제례용으로 많이 사용된 백자<br>일상용품으로 많이 사용된 것으로 알려져 있으나, 실제로는 의식용이나 제례용으로 많이 사용되었다.',
//         imgUrl: 'https://mblogthumb-phinf.pstatic.net/MjAyMjA3MDJfMjk2/MDAxNjU2NzI4ODMwNTk1.H3FPE8oHJ0yEMQmiQxFhnu2DiRV-ndQCks3OdXcUpc8g.XnNdB9yM5TFnaZIyp8K68TsZAI8ju4ehVn_uAwHRE60g.PNG.kkkk000000/20220624_114705.png?type=w420',
//     },
//     '7': {
//         h1Text: '인도의 만다라',
//         h3Text: '₩967,109.50',
//         p8Text: '종교적 명상 도구 및 공간 설계와 치유를 위한 도구',
//         pText: '종교적 명상 도구로 주로 알려져 있으나, 공간 설계와 치유를 위한 도구로도 사용되었다.',
//         imgUrl: 'https://studybuddhism.com/media/W1siZiIsIjIwMTkvMDIvMjUvMDAvMzAvMjgvMTA5Mzg5MTMtYjE5NC00ZjE4LWJjZGMtNjA4MTFjMTU4NjhlL3N0dWR5LWJ1ZGRoaXNtLW1hbmRhbGEuanBnIl0sWyJwIiwidGh1bWIiLCI3MDB4XHUwMDNlIl1d/study-buddhism-mandala.jpg?sha=17ed40541b884fd8',
//     },
//     'default': {
//         h1Text: 'Default Content',
//         h3Text: '₩1,000',
//         pText: 'This is the default paragraph.',
//         imgUrl: '',
//     }
// };

// function Generic() {
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   const contentId = query.get('content');

//   const content = contentData[contentId] || contentData['default'];

//   return (
//     <div id="main">
//       <div className="inner">
//         <h1 id="productName">{content.h1Text}</h1>
//         <div className="bar">
//           <span className="image main">
//             <img id="productImage" src={content.imgUrl} alt={content.h1Text} />
//           </span>
//           <div className="sale">
//             <h2 id="productName2">{content.h1Text}</h2>
//             <p id="productDescription" dangerouslySetInnerHTML={{ __html: content.p8Text }}></p>
//             <div className="box2"></div>
//             <div className="bar2">
//               <h4>금액: <span id="price">{content.h3Text}</span></h4>
//             </div>
//             <div className="box2"></div>
//             <div className="bar">
//               <button onClick={() => {/* 장바구니 추가 처리 */}}>장바구니</button>
//               <button onClick={() => {/* 구매 처리 */}}>구매</button>
//             </div>
//           </div>
//         </div>
//         <p id="productDescription2" dangerouslySetInnerHTML={{ __html: content.pText }}></p>
//       </div>
//     </div>
//   );
// }
function Generic() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const contentId = query.get('content');

  return (
    <div>
      <h1>Generic Component</h1>
      <p>Content ID: {contentId}</p>
    </div>
  );
}
export default Generic;