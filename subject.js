export class Subject {
  constructor() {
    this.observables = [];
  }

  subscribe(fn) {
    this.observables.push(fn);
  }

  unsubscribe(fn) {
    this.observables = this.observables.filter(fns => {
      if (fns != fn) return fn;
    });
  }

  notifyAll() {
    this.observables.forEach(fn => {
      fn.call();
    });
  }
}
