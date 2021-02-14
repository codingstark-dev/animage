export const state = () => ({
  list: [],
  rn: 0
});

export const mutations = {
  add(state, imgData) {
    state.list.push(imgData);
  },
  removeImage(state) {
    state.list = [];
  },
  randomNumber(state, lenghtarr) {
    state.rn = 1;
    state.rn = Math.floor(Math.random() * lenghtarr);
  }
};
