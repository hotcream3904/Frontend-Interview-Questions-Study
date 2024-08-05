# 브라우저의 모든 저장공간

### **1. LocatStorage 와 SesstionStorage**

- 로컬 스토리지와 세션 스토리지는 동일한 Storage 인터페이스를 가지고 있습니다. 그렇기 때문에 저장하기, 가져오기, 지우기 등 같은 메서드가 내장되어 있습니다.
- 이 저장소들은 Origin (도메인/포트/프로토콜) 에 따라 구분되며, 서로 다른 사이트에서는 서로 다른 저장소를 갖게 됩니다.

```javascript
localStorage.setItem("accessToken", newToken) // 저장하기
sessionStorage.setItem("accessToken", newToken) // 저장하기

const token = localStorage.getItem("accessToken"); // 가져오기
const token = sessionStorage.getItem("accessToken"); // 가져오기

localStorage.removeItem("accessToken"); // 제거하기
sessionStorage.removeItem("accessToken"); // 제거하기

```

두가지 스토리지는 다음과 같은 차이점이 있습니다.

**LocatStorage**

    - 저장한 데이터를 지우지 않는 이상 영구적으로 보관이 가능합니다.
    - 최대 크기: 5MB
    - 사용 예시: 자동 로그인, 유튜브 유저볼륨, 마지막 재생시간, form 작성중 이탈한 경우 마지막 입력값

**SessionStorage**

    - 브라우저 창이 닫히면, 사라지는 휘발성 데이터입니다.
    - 최대 크기: 5MB
    - 사용 예시: 비로그인 장바구니

### **2. Cookie**

- 쿠키란 브라우저와 서버 사이를 오가는 작은 데이터로, 브라우저는 javascript를 통해 쿠키를 생성할 수 있고, 서버는 응답 시 쿠키를 클라이언트에게 건네 줄 수 있다.
- 사용자 도메인에 따라 분리되어 쿠키가 저장되며, 사용자가 요청을 보낼 시 서버의 도메인에 따라 저장된 쿠키가 함께 발신된다. => 서버의 부담 증가
- 최대 크기: 4KB
- 사용 예시: 유저 추적, 로그인 세션유지, 유저 설정 관리

### 3. 서버 인증과 브라우저 저장소

- 주요 정보를 요청 헤더에 넣는 방법

  > 보안에 매우 취약합니다.

- Session, Cookie 방식

  > 서버 부하가 증가하고, 세션 하이재킹 공격에 취약합니다.

- [JWT](#gear-jwt) 방식
  > 별도의 브라우저 저장소에 저장하지 않고 JWT를 발급하고 검증하면 되어 확장성이 뛰어납니다.<br>
  > 그러나 Payload 정보가 제한적이고, JWT길이가 길다는 단점 존재합니다.

<br>

---

<br>


<br>

## 참고

- [youtube, 브라우저의 모든 저장공간 #1 localStorage & sessionStorage - 2분개발](https://www.youtube.com/watch?v=oAVdxCKM5JI)
- [youtube, 브라우저의 모든 저장공간 #2 쿠키](https://www.youtube.com/watch?v=36DNFNHOhW8)
- [mdn, HTTP쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [blog, JWT란?](https://mangkyu.tistory.com/56)