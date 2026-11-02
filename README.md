# 빌리지 프론트엔드

학교 물품 대여 서비스 빌리지의 프론트엔드 기본 개발 환경입니다.

## 개발 환경

- Node.js 24 (`.nvmrc`)
- React / Vite / JavaScript
- Tailwind CSS (`@tailwindcss/vite`)
- React Router (`BrowserRouter` 초기 설정)
- Axios, es-hangul
- ESLint

## 실행

```bash
nvm use
npm ci
npm run dev
```

## 검사 및 빌드

```bash
npm run lint
npm run build
npm run preview
```

## 폴더 구조

```text
src/
├── api/          # API 요청
├── asset/        # 이미지 및 SVG
├── component/    # 공통 컴포넌트
├── pages/        # 페이지 컴포넌트
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

`api`, `asset`, `component`, `pages` 폴더에는 빈 폴더를 유지하기 위한 `.gitkeep`만 포함합니다.
초기 `App`은 화면을 표시하지 않으며 페이지와 기능 구현은 이후 작업에서 추가합니다.

## 환경 변수

`.env`와 `.env.*`는 Git에서 제외하며, 공유할 환경 변수 예시는 `.env.example`에 작성합니다.
`node_modules`와 `dist`는 각각 설치 및 빌드 시 생성됩니다.
