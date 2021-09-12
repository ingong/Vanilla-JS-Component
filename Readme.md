## Vanilla-JS-Component

### Summary

[개발자 황준일님 블로그 Vanilla JS 로 웹컴포넌트 만들기](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_4-entry-point-%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC)
글의 예제를 토대로 작성한 Repository 입니다.

<br/>

### Today I Learned

1. 왜 state 와 view 를 구분해야하는가?

- jQuery 는 DOM 베이스 개발이였지만,
  현재는 JS 기반의 상태관리 방법으로의 패러다임 전환되었다. DOM 의 변화와 비동기 동작 간의 개념 충돌 등 다양한 이슈가 발생했기 때문이다.

- 왜 상태와 View 를 어떻게 나눌지 고민하라는 말씀을 이해할 수 있었다. 어떻게 상태관리를 해야할지는 프로젝트나 주어진 환경에 따라 다를 수 있기 때문에 다양한 구조를 학습하고, 적절하게 선택할 필요가 있다.

2. 컴포넌트 기반 개발

- state 가 변경되면 render 가 수행되며, 자식 컴포넌트를 만드는 mounted 메서드 수행
- state 는 setState 에 의해 변경
  react 의 useState 처럼 setState 메서드는 새로운 상태를 만들어서 기존의 상태를 변경시키는 것이 아니라, 새로운 메서드로 변경시킴

3. 추상화

- 객체지향 프로그래밍은 로직을 상태(state) 와 행위(behave) 로 이루어진 객체를 만드는 것이라는 것을 최근에 학습했다.

- 복잡함 속에서 필요한 관점만을 추출하는 행위를 추상화라고 한다. 반복되는 코드를 발견하고, 이를 범용할 수 있는 코드를 작성하는게 추상화라고 할 수 있다.

4. 책임 분리하기

- state 와 view 를 동일한 class 내부에서 메서드로 분리하였다.

- 부모컴포넌트와 자식컴포넌트로 구분하여서, 부모의 상태를 조작할 수 있는 메서드들을 자식들에게 전달해줌으로써 결과적으로 상태는 부모 컴포넌트에서 유지함으로써 관리를 용이하게 한다.

5. 새로 알게 된 개발지식

- keydown 및 keyup 이벤트 : 어떤 키를 눌렀는지 나타내는 코드를 제공
- keypress 이벤트 : 입력 된 문자를 나타냄
- 객체 destructuring : event.target 으로 안가져와도된다.

```javascript=
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false }
];

// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
const completedTodos = todos.filter(({ completed }) => completed);
console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]
```

- 중첩 destructuring : key 와 중괄호{} 문법을 통해서 쉽게 접근이 가능하다.

```javascript
const complicatedObj = {
  arrayProp: ['Zapp', { second: 'Brannigan' }],
};

const {
  arrayProp: [first, { second }],
} = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"
```
