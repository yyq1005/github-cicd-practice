import React, { useEffect, useState } from 'react';
import { greeting } from './utils.js';

export default function App() {
  const [message, setMessage] = useState('加载中...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('后端接口暂不可用'));
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', padding: 40 }}>
      <h1>CI/CD Demo Frontend</h1>
      <p>{greeting('CI/CD')}</p>
      <p>后端返回：{message}</p>
    </main>
  );
}
