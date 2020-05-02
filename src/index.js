import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div className="app">랜딩페이지</div>;

ReactDOM.render(<App />, document.getElementById('app'));

if ('serviceWorker' in navigator) {
    // 서비스 워커 지원하지 않는 브라우저 체크
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}
