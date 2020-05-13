export const store = {
  state: {
    events: [1, 2, 3]
  },
  addEvent(item) {
    this.state.events.push(item);
  }
};
