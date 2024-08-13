# HTTP 란?
    Hyper Text Transfer Protocol 의 약자로, HTML 파일을 전송하기 위한 약속이다.
    웹 브라우저 초기에는 HTML 파일을 전송하려는 목적이었으나, 현재는 JSON, Image 파일 또한 전송한다.

## 1. HTTP 프로토콜의 가장 큰 특징은?

1. 단방향 통신 - 클라이언트에서 서버로 요청을 보내야, 서버가 응답하는 방식으로 통신이 이루어진다.
2. 무상태 프로토콜 지향 - 서버가 클라이언트의 연결/상태를 보존하지 않는다. 이전 요청과 같은 데이터를 원하더라도 다시 서버에 동일한 요청을 해야한다. 하지만 로그인 같은 상태 정보는 서버에 유지시키기 위해 브라우저 쿠키나 세션을 이용해 상태를 유지한다.
3. 비연결성 - 클라이언트가 서버에 요청을 하고 응답을 받으면 바로 TCP/IP 연결을 끊어 연결을 유지하지 않는다. 서버의 자원을 효율적으로 관리하고 수많은 클라이언트 요청에 대응할 수 있게 된다.

## 2. URL이 뭔가요?

- Uniform Resource Locator의 약자로, 사이트에 접속하기 위해 입력해야하는, 주소를 포함한 일련의, 문자이다. 프로토콜 + 호스트(도메인) + 서브 디텍토리 + 웹 페이지 로 구성되어 있다.
1. 프로토콜 - 웹 사이트에서 서버와 클라이언트 간 어떤 방법으로 자원에 접근할지 알려주는 통신규약 중 하나이다. 많은 웹사이트들이 https를 기본 프로토콜로 사용하며 http보다 보안이 강화된 버전이다
2. 호스트(도메인) - 웹 서버의 위치를 지정하는 부분이다. IP주소로 사용할 수 있지만 사용자 친화적으로 IP를 고유한 도메인으로 바꿔 웹사이트에 접근하는데 사용한다. 원래는 뒤에 포트넘버가 붙지만 Http는 80, https는 443이며 공통의 약속이다 보니 굳이 작성하지 않아도 브라우저가 알아서 처리한다.
3. 서브 디렉토리 - 해당 페이지가 위치한 파일 시스템의 경로이다. 현재 어느 페이지의 하위로 들어가있는지 확인 가능하다.

## 3. HTTP/1.0과 HTTP/1.1 그리고 HTTP/2.0의 차이

### 3.1 - http1.0과 1.1의 차이
1. 커넥션 유지(Persistent Connection) : TCP 세션 기반에서 이루어지는 HTTP 프로토콜이 1.0에서는 요청 -> 응답 후 끊어지지만, 1.1에서는 여러개의 컨텐츠 요청이 가능해진다.
<img width="1317" alt="스크린샷 2024-08-12 오후 5 19 03" src="https://github.com/user-attachments/assets/0a708aeb-db82-4fc1-a213-68fe6212f152">

2. 파이프라이닝 : 현실적으로 클라이언트의 요청을 순서대로 처리할 수만 있다면 동시에 요청을 받아 각각의 응답을 서버에서 처리할 수 있는 파이프라이닝이 가능하다.
<img width="1342" alt="스크린샷 2024-08-12 오후 5 21 35" src="https://github.com/user-attachments/assets/63d5dd31-6c5c-4267-bbc1-8d60f5e31166">

3. 호스트 헤더 : 하나의 IP에 여러개의 도메인을 운영할 수 있다. 버츄얼 호스팅이라고도 한다.
<img width="910" alt="스크린샷 2024-08-12 오후 5 34 14" src="https://github.com/user-attachments/assets/e1b82ec6-9458-4a3c-8711-62f81f27088a">

4. 강력한 인증 절차 : proxy-authentication 과 proxy-authorization 2가지 헤더가 추가되어 기존의 www-authentication 헤더만 있을 때보다 보안이 강화되었다.

### 3.2 - http1.1과 2.0의 차이



## 4. HTTPS와 HTTP의 차이

- `HTTPS(Hyper Text Transfer Protocol Secure)란?
HyperText Transfer Protocol over Secure Socket Layer, HTTP over TLS, HTTP over SSL, HTTP Secure` 등으로 불리는 HTTPS는 HTTP에 데이터 암호화가 추가된 프로토콜이다. HTTPS는 HTTP와 다르게 443번 포트를 사용하며, 네트워크 상에서 중간에 제3자가 정보를 볼 수 없도록 암호화를 지원하고 있다.

## 5. [심화] 공개키 (비대칭키) 방식이 뭔가요?

공개키란 

## 참고

- [마리월드 - 일단, HTTP 와 Web Socket에 대해 깊게 이해해보자! - (1)](https://mariii.hashnode.dev/spring-react)
- [분도랑 - HTTP 1.0과 HTTP 1.1의 큰 차이점](https://withbundo.blogspot.com/2021/02/http-http-10-http-11.html)
- [MangKyu's Diary:티스토리 - [Web] HTTP와 HTTPS의 개념 및 차이점](https://mangkyu.tistory.com/98)
- [URL이란 무엇인가?](https://www.ascentkorea.com/what-is-url/)