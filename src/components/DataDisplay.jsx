import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios import

function DataDisplay() {
  // 1. 데이터, 로딩 상태, 에러를 관리할 state를 선언합니다.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. 컴포넌트가 처음 렌더링될 때 서버에 데이터를 요청합니다.
  useEffect(() => {
    // Spring 서버의 API 엔드포인트 주소입니다. (실제 엔드포인트로 변경 필요)
    const API_URL = 'http://localhost:8080/api/home';

    axios.get(API_URL) // axios.get 사용
      .then(response => {
        setData(response.data); // 응답 데이터는 response.data에 있습니다.
      })
      .catch(error => {
        setError(error); // 에러가 발생하면 state에 저장
      })
      .finally(() => {
        setLoading(false); // 로딩 상태를 false로 변경
      });
  }, []); // 빈 배열을 전달하여 이 effect가 한 번만 실행되도록 합니다.

  // 3. 로딩 상태에 따라 다른 UI를 렌더링합니다.
  if (loading) {
    return <div>데이터를 불러오는 중...</div>;
  }

  // 4. 에러 상태에 따라 다른 UI를 렌더링합니다.
  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  // 5. 데이터를 성공적으로 받아왔을 때 UI를 렌더링합니다.
  return (
    <div>
      <h1>서버로부터 받은 데이터</h1>
      {/* 받아온 데이터 출력 */}
      <h2> data.id : {data.id} </h2>
      <h2> data.name : {data.name} </h2>
    </div>
  );
}

export default DataDisplay