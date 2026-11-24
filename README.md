# github-cicd-practice

CI/CD 自动化与 GitHub Actions 实验仓库（Web 服务器端开发 实验11）。

## 内容

- `dist/index.html` — 实验一：静态网页，由 Actions 校验并部署到 GitHub Pages
- `.github/workflows/hello-world.yml` — 实验二：Hello World CI
- `.github/workflows/ci.yml` — 实验二/三：前后端 Lint / Test / Build 管道
- `.github/workflows/deploy-ecs.yml` — 实验四：push 后自动构建前后端并部署到本机（self-hosted runner，CentOS 7.9 虚拟机），Nginx + systemd + 健康检查 + 回滚
- `apps/frontend` — React + Vite 前端
- `apps/backend` — Node.js + Express + TypeScript 后端

## 验证

- Pages：https://yyq1005.github.io/github-cicd-practice/
- 部署服务：`curl http://<虚拟机IP>/health`、`curl http://<虚拟机IP>/api/hello`
