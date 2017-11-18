export const itemsIsLoading = (state = false, action: any) => {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}