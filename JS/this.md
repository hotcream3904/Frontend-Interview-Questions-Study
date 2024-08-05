# this란?

자바스크립트에서 this란? **어떠한 객체를 가르치는 키워드**이지만, 상황에 따라서 this는 바뀔 수 있다. 즉 "this는 함수를 호출한 객체이다"

<br>

## 예시

---

<br>

### **1. 전역맥락에서 this를 출력하는 경우**

<br>

```javascript
console.log(this); // Window {}

if (true) {
    console.log(this) //Window {}
}
```

전역적인 실행 맥락에서 (함수외부에서) this 값을 출력하면 윈도우 객체가 나온다.

```javascript
'use strict'
console.log(this)
```

use strict를 활용해 엄격모드를 킨 뒤 this 값을 출력해도 윈도우 객체가 나온다.

```javascript
function main() {
    console.log(this)
}
main() // window.main() 과 같은 의미
```

위의 코드를 실행하여 main 함수를 호출하면, this는 window 객체가 나온다. 왜냐하면, function 키워드를 써서 함수를 정의하면 이 함수는 window 객체에 저장된다. window.main() 과 같은 의미인 것이다. <br>
하지만 한가지 예외가 있다면, 엄격모드에서는 undefined 값이 뜬다.

<br>

---
<br>

### **2. 객체 안에 정의되어 있는 함수를 호출하는 경우**

<br>

객체 안에 함수가 정의되어 있고, 객체를 통해 함수를 호출한 경우 this는 object 객체 자체를 가르킨다. 이러한 this가 유용하게 쓰일 때는 객체의 다른 속성에 접근할 때이다.

```javascript
const object = {
    name : '마리',
    main : function () {
        console.log(this) // {name : '마리', main : f}
        console.log(this.name) // 마리
    }
}

object.main();
```
 <br> 위의 코드를 실행시키면 this 는 window 객체가 아닌 object 객체를 가르키기 때문에 객체안의 다른 key 값에 접근할 수 있게 된다.


<br>

다음과 같은 경우도 같은 결과값이 나온다.

```javascript
// 함수를 먼저 정의한 후 객체에 값으로 넣어주는 경우
function main () {
    console.log(this) // {name : '마리', main : f}
}

const object = {
    name : '마리',
    main
}

object.main();

// 또는

function main () {
    console.log(this) // {name : '마리', main : f}
}

const object = {
    name : '마리',
}

object.main = main;

object.main();
```
즉 함수의 선언시점이 아닌 함수를 호출한 방법에 따라 this 가 가르키는 값이 결정된다.

<br>

```javascript
function main () {
    console.log(this) // {name : '작은마리', main : f}
}

const object = {
    name : '마리',
    smallObject : {
        name : '작은마리',
        main,
    }
}

object.smallObject.main();

```

이렇게 호출할 시 main 함수의 this 는 smallObject가 된다. 직접적으로 호출한 객체는 smallObject 객체이기 때문이다. 어떤 함수의 객체값이 궁금하다면 .(점) 바로 왼쪽의 객체를 보면 된다.

---
<br>

### **3. this 값을 고정시키고 싶을 때**
<br>

```javascript
function main() {
    console.log(this)
}

const mainBind = main.bind({name : '마리'})
mainBind()

const object = {
    mainBind,
}

object.mainBind(); //this는 우리가 지정해준 객체, 즉 똑같은 값으로 나옴
```

bind 되기 전 main함수를 호출하면 window 객체가 나오지만, 후에는 내가 원하는 객체의 값이 this에 저장된다. 주의할 점은 한번 binding 된 함수는 다시 bind 할 수 없다.


<br>

---
<br>

### **4. 이벤트리스너에서의 this**

<br>

```javascript
const button = document.getElementById('btn');

button.addEventListener("click", function(event) {
    console.log(this) // <button id="btn">버튼</button>
    console.log(event.target === this) // true
})
```

버튼을 클릭했을때 클릭이벤트를 발사한 요소는 button 이기 때문에 this 는 버튼 요소가 나온다.

<br>

---
<br>

### **5. 화살표함수에서의 this**

<br>

```javascript
const object = {
    name : "마리",
    main : function () {
        console.log(this) // object 객체
        const innerFunc = function () {
            console.log(this) // window 객체 but 화살표 함수인 경우 object
        }
        innerFunc()
    }
}

object.main()
```

화살표함수 내부의 this는 호출에 따라 바뀌지 않고, 외부의 스코프의 범위에 따라 결정된다.
위의 innerFunc가 화살표 함수가 아니라면, window 객체를 가르키게 되고, 화살표 함수라면 외부 스코프인 object 객체를 가르키게 된다.

---
<br>


### **6. 결론**

<br>

> this를 쓰고 싶으면 일반함수를 쓰는게 좋다. 왜냐하면 bind 로 this의 값을 고정시켜줄 수 있기 때문이다. 하지만 함수안에 함수가 정의되어 있을 때, 내부 함수가 화살표함수인 경우에는 외부 함수의 this 값을 받아올 수 있기 때문에 화살표함수를 써도 예측 가능하다.

<br>

## 참고

- [youtube, 자바스크립트 - This와 Bind | 멋진 개발자라면 꼭 알아야됨!! - 별코딩](https://www.youtube.com/watch?v=j6VkGimAs-E)
- [youtube, 개발자 면접 단골질문 자바스크립트 this - 코딩알려주는누나](https://www.youtube.com/watch?v=tDZROpAdJ9w)
