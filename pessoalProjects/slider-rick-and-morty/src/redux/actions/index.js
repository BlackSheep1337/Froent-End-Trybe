export const FETCH_DATA = 'FETCH_DATA';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const fetchData = payload => ({
  type: FETCH_DATA,
  payload,
})

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});
