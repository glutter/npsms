let d = new Date()
let month = d.getMonth() + 1
let day = d.getDate()
let year = d.getFullYear()
let date = day + '.' + month + '.' + year

const state = {
  dateFilter: [
    date,
    date
  ]
}

const mutations = {
  UPDATE_DATE_FILTER (state, dateFilter) {
    state.dateFilter = dateFilter
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
