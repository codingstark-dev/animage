export const state = () => ({
  list: []
});

export const mutations = {
  add(state, imgData) {
    state.list.push(imgData);
  },
  removeImage(state) {
    state.list = [];
  }
};
