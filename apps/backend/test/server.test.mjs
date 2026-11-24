import { test } from 'node:test';
import assert from 'node:assert';
import { spawn } from 'node:child_process';

function startServer(port) {
  return spawn(process.execPath, ['dist/server.js'], {
    env: { ...process.env, PORT: String(port) },
    stdio: 'ignore',
  });
}

async function waitForServer(port, retries = 20) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/health`);
      if (res.ok) return;
    } catch {
      /* 服务未就绪，继续等待 */
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`server on port ${port} did not start`);
}

test('GET /health returns ok', async () => {
  const port = 3101;
  const child = startServer(port);
  try {
    await waitForServer(port);
    const res = await fetch(`http://127.0.0.1:${port}/health`);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(await res.text(), 'ok');
  } finally {
    child.kill();
  }
});

test('GET /api/hello returns JSON message', async () => {
  const port = 3102;
  const child = startServer(port);
  try {
    await waitForServer(port);
    const res = await fetch(`http://127.0.0.1:${port}/api/hello`);
    assert.strictEqual(res.status, 200);
    const body = await res.json();
    assert.strictEqual(body.message, 'Hello from ECS backend');
  } finally {
    child.kill();
  }
});
