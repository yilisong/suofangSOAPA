import * as types from './type/userCode-types';

const state = {
    url: 'http://114.55.219.41:8092',
    inspId : null
};
const actions = {
  setInspId ({ commit, state }, params) {
      commit(types.SET_INSP_ID, { params });
  }
};
const mutations = {
  [types.SET_INSP_ID] (state, { params }) {
      state.inspId = params;
  }
};

export default {
    state,
    actions,
    mutations
};
