import axiosClient from '../axiosClient';

// export async function searchMeals({ commit }, keyword) {
//   // const { data } = await axiosClient.get(
//   //   `search.php?s=${keyword}`
//   // );
//   // // call mutation
//   // commit('setSearchedMeals', data.meals);
//   axiosClient
//     .get(`search.php?s=${keyword}`)
//     .then((response) => {
//       commit('setSearchedMeals', response.data.meals);
//     });
// }

export function searchMeals({ commit }, keyword) {
  axiosClient
    .get(`search.php?s=${keyword}`)
    .then(({ data }) => {
      console.log(data.meals);
      commit('setSearchedMeals', data.meals);
    });
}
