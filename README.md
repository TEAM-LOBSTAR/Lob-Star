# Lob-Star

```
// 예상 디렉토리 구조 아직 미정입니다.
Lob-star/
├── .git/               # Git 저장소
├── apps/           # 모든 서비스가 저장된 디렉토리
│   ├── backend/        # 백엔드 패키지
│   │   ├── src/        # 백엔드 소스 코드
│   │   ├── package.json # 백엔드 패키지 정보
│   │   └── ...         # 기타 백엔드 패키지 파일들
│   ├── frontend/       # 프론트엔드 패키지
│       ├── src/        # 프론트엔드 소스 코드
│       ├── package.json # 프론트엔드 패키지 정보
│       └── ...         # 기타 프론트엔드 패키지 파일들
├── packages/           # 모든 패키지가 저장된 디렉토리
│   ├── ui/             # 프로젝트에 필요한 공통 디자인 요소가 포함되어 있습니다.
│   │   ├── src/        # ui 소스 코드
│   │   ├── package.json # ui 패키지 정보
│   │   └── ...         # 기타 ui 패키지 파일들
│   └── config/         # 모든 config 정보
│       └── ***config.json       # config.json
│
├── .turbo/             # Turbo Repo 구성 파일
│   ├── config.json     # 구성 파일
│   └── ...             # 기타 Turbo Repo 구성 파일들
├── .env                # 환경 변수 설정 파일
├── .eslintrc           # ESLint 구성 파일
├── README.md           # 프로젝트 README 파일
├── package.json        # 메인 프로젝트 패키지 정보
├── tsconfig.json       # TypeScript 구성 파일
└── ...                 # 기타 프로젝트 파일들
```
