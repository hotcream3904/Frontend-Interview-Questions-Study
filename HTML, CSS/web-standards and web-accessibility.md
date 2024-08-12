# 웹 표준 및 접근성이란?
    웹 표준은 웹에서 사용되는 기술들(HTML, CSS, JavaScript)의 표준화를 의미한다.
    W3C과 같은 표준화 기구에서 정의하며, 다양한 브라우저와 기기에서도 일관된 동작과 사용자 경험을 제공하는 것을 목표로 한다.

    웹 접근성이란 장애를 가진 사람을 포함한 모든 사용자가 웹 콘텐츠를 인식하고, 상호작용하고, 기여할 수 있도록 보장하는 것을 의미합니다. 주로 대체 텍스트, 키보드 내비게이션, 자막 및 대체 콘텐츠 등이 있습니다.




## 1. HTML5 에서 추가된 내용과 시맨틱 태그에 대해 설명하세요.

- HTML5에서는 시맨틱태그와, audio와 video 타입, input 요소의 새로운 타입들이 추가되었습니다. 또한 `<canvas>`나 `<svg>`같은 그래픽 및 시각적 요소와, 사용자의 위치 정보를 제공하는 geolocation api와 서버와의 양방향 통신을 위한 websocket api도 생겨났습니다. 흔히 쓰는 localstarage와 sessionstorage를 사용하여 클라이언트 측에서 데이터를 저장하는 api도 생겨났습니다.
- 시맨틱(semantic)태그는 말 그대로 의미를 가진 태그로, 문서의 구조와 의미를 명확히 하기 위해 사용됩니다. 주로 쓰이는 시맨틱 태그로는`<header>`, `<footer>`, `<main>`, `<section>`, `<article>`, `<nav>` 등이 있습니다.

## 2. 웹 접근성에 맞는 마크업 예시 몇가지 말해보세요.

- 시맨틱태그 사용하기,`<img>`나 `<input>` 태그에 alt 속성과 label 속성같은 대체 텍스트 넣기.

## 3. SEO란?

- 검색엔진 최적화라고 불리며, 검색 엔진에서 광고를 제외하고 상위에 노출될 수 있도록 최적화하는 과정을 말합니다.
- 기술적 SEO : 사이트 로딩 속도, 모바일 친화성, XML 사이트맵, SSL 보안
- 온페이지 SEO : 내부의 콘텐츠와 HTML 소스 코드 최적화, 키워드 최적화, 메타 태그 등 사용자 친화적인 콘텐츠
- 오프페이지 SEO : 백링크 등 외부에서 SERF 를 높이기 위한 최적화 방식

## 4. button 태그의 default type은 무엇인가?

- default 타입은 submit으로, `<form>` 태그 내에서 작동한다면 `<button>`이 눌렸을 시 새로고침이 된다. 그렇기에 단순 버튼에는 type에 button을 명시해주는 것이 좋다.

## 5. 크로스 브라우징이란?

- 다양한 웹 브라우저에서 깨지지 않게 보이는 웹페이지 제작 기술로, W3C에서 채택된 웹표준 기술을 기본으로 제작하는 방식을 말한다.

## 6. section 태그와 article 태그의 차이점

- `<section>`은 주제별로 그룹을 구분할 때 쓰며, `<article>`은 주로 text의 본문이 포함된 좀 더 구체적인 구분에 쓰입니다. 예를들어 하나의 기사에서 간단 요약부분이 나오고 다음 문단부터 본문이 나온다면 `<article>` 내부에 `<section>`으로 구획을 나눌 수 있습니다. 논리적으로 흐름이 상관없는 것들을 구분지을때 div를 사용합니다.


## 참고

- [W3C Recommendation - 웹 콘텐츠 접근성 지침(WCAG) 2.1](https://www.w3.org/TR/WCAG21/#background-on-wcag-2)
- [TCP SCHOOL - HTML5 추가요소](https://www.tcpschool.com/html/html5_intro_addition)
- [검색엔진 최적화(SEO)가 뭐야?(SEO 뜻)](https://brunch.co.kr/@dongdong1/22)
- [버튼에 타입을 쓰는 이유 (button type="button")](https://nykim.work/96)
- [크로스브라우징 (Cross Browsing) 이란 [ 패치워크 ] ](https://blog.naver.com/patchwork_corp/222412585449)
- [article과 section의 사용법, 차이점](https://fffo.tistory.com/201)