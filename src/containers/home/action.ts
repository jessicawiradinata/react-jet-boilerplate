import { Dispatch } from 'redux'

export const loadItems = () => (dispatch: Dispatch<any>) => (async () => {
  await dispatch(itemsIsLoading(true))
  setTimeout(() => dispatch(itemsIsLoading(false)), 2000)
})()

export const itemsIsLoading = (bool: boolean) => {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool,
  }
}