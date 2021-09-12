export default class Component {
  $target;
  // why? 부모컴포넌트가 자식 컴포넌트에게 상태 혹은 메서드를 넘겨주기 위해서
  $props;
  $state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  mounted() {}
  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    // render 이후에 mount 가 실행
    // 왜 ?  render 이후에 추가적인 기능을 수행하기 위해서
    this.mounted();
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
