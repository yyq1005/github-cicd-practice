import express from 'express';

const app = express();

const VERSION = process.env.APP_VERSION ?? '1.0.0';

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from ECS backend' });
});
app.get('/health', (_req, res) => res.status(200).send('ok'));
app.get('/api/version', (_req, res) => res.send(String(VERSION)));

// 被 node --test 引入时不监听端口（测试环境设 START_SERVER=0）
if (process.env.START_SERVER !== '0') {
  const port = Number(process.env.PORT ?? 3000);
  app.listen(port, '127.0.0.1', () => {
    console.log(`Backend listening on 127.0.0.1:${port}`);
  });
}

export default app;
