export default class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  template() {
    return '';
  }
  // render 를 실행할때마다 새로운 event 가 등록된다
  render() {
    this.$target.innerHTML = this.template();
  }
  setEvent() {}
  // 새로운 상태를 만들때는 기존의 상태를 변경시키는 것이 아니라,
  // 현재의 상태 + 새롭게 들어온 상태를 더해주고, 이를 새로운 상태로 정의한다
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = target => children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
