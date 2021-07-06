export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (payload) => {
  return {
    type: FETCH_DATA,
    data: payload
  }
}
