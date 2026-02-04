# lindonlin 블로그 프로젝트

## 개요
GQ Korea 스타일을 참조한 개인 블로그. 검정/흰색 미니멀 디자인.

- **URL**: https://kimi230.github.io/lindonlin/
- **GitHub**: https://github.com/kimi230/lindonlin

## 기술 스택
- 순수 HTML/CSS/JS (정적 사이트)
- GitHub Pages 호스팅

## 프로젝트 구조
```
/Users/lindong/dlog/
├── index.html              # 홈페이지 (글 목록)
├── about.html              # 소개 페이지
├── articles/               # 글 HTML 파일들
│   ├── llm-comparison-guide.html
│   ├── llm-memory-feature-off.html
│   ├── gen-z-quality-lifestyle.html
│   ├── korean-hiphop-history.html
│   ├── construction-ai-agent.html
│   ├── dimensional-physics.html
│   ├── hiphop-essay.html
│   └── cleaning-and-cowardice.html
├── css/
│   ├── main.css            # CSS 통합 (import)
│   ├── variables.css       # CSS 변수
│   ├── base.css            # 리셋, 타이포그래피
│   ├── layout.css          # 그리드, 컨테이너
│   ├── components.css      # 헤더, 카드, 푸터
│   └── article.css         # 아티클 페이지 스타일
├── js/
│   └── main.js             # 네비게이션, 카테고리 필터
└── workflow.yml            # 글 관리 워크플로우
```

## 카테고리
| 카테고리 | 설명 |
|---------|-----|
| TECH | AI, LLM, 프로그래밍, 생산성 도구 |
| ESSAY | 일상, 철학, 자기 성찰 |
| TREND | 문화, 세대, 라이프스타일 트렌드 |

## 워크플로우
글 추가/수정/삭제 방법은 `workflow.yml` 참조.

## 배포
```bash
git add -A && git commit -m "메시지" && git push
```
GitHub Pages가 자동으로 배포함.
