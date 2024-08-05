# 호이스팅(hoisting)이란?

호이스팅이란 자바스크립트 엔진에 의해 실행 컨텍스트 생성 시 렉시컬 스코프 내의 **변수 및 함수 선언문이 최상단으로 끌어올려지는 현상** 을 말합니다.
<br>

## 예시

---

<br>

```javascript
console.log(a);
var a = 2;
```

컴파일러는 자바스크립트 엔진이 인터프리팅을 하기 전에 컴파일을 하는데 이 때, var 키워드로 선언된 변수 a는 호이스팅으로 처리됩니다. 위의 코드를 실행시키면 다음과 같은 결과가 나옵니다.

```javascript
undefined;
```

하지만 같은 상황에 let 또는 const로 접근을 하게 되면 어떤 결과가 일어날까요?

```javascript
console.log(a);
let a = 2;
```


```javascript
ReferenceError : Cannot access 'a' before initialization;
```

let,const는 Reference Error를 출력합니다.
그 이유는 세가지 키워드 모두 호이스팅되지만, let과 const 키워드는 TDZ(Temporal Dead Zone)에 빠져 초기화 단계전에는 접근이 안되기 때문입니다.
<br>
<br>
> let과 const는 2015년 기준 ECMAScript 에서 새로 생긴 변수 키워드이며, var 키워드와 다르게 변수 할당 전 접근하려고 할 시 TDZ에 빠집니다. 이러한 변화는 코드의 안정성과 가독성을 높이는데 중요한 역할을 하게 되었습니다.

<br>

[함수선언문](#gear-함수선언문)의 경우도 호이스팅 됩니다.

```javascript
func();
function func() {
  console.log('함수 호이스팅');
}
```

위의 코드를 실행시키면 다음과 같은 결과가 나옵니다.

```
함수 호이스팅
```

> 함수 호이스팅에서 주의할 점: 함수표현식은 변수호이스팅과 같아져 함수를 호출하려고 하면 변수로 취급되어 함수가 아니라는 에러가 생깁니다.

<br>

---

<br>



## 참고

- [youtube, 자바스크립트 - Var Let Const 차이 완벽정리 (스코프, 호이스팅)](https://www.youtube.com/watch?v=_zMVlKxmWHg)
- [Github, 호이스팅](https://github.com/baeharam/Must-Know-About-Frontend/blob/main/Notes/javascript/hoisting.md)