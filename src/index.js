import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 불러오는명칭약자 form '모듈 및 가져오는 파일 경로';
// import 불러오는 명징의 약자 이름 첫 글자는 *반드시!!* 대문자로 작성해야한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 
리액트가 개발될 땐 리액트 생성 폴더 "src" 폴더 내에서만 개발이 시작되고 종료된다.
리액트 개발이 종료된 후 -> index.js의 root.render에 의해서 React.StrictMode 엄격모드 기준 App js에서 제작된 개발 결과가
"public" index.html 파일의 #root로 전달되어 웹이 최정적으로 사용자들에게 서비스 된다.
(React.StrictMode 엄격모드 기준 => 이 React.StrictMode 가 안에 있는 파일을 최종 검사를 해준다는 것)
*/