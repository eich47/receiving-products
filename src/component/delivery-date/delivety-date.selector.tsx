import {RootState} from '../../store'

export const deliveryDateSelector = (state: RootState) => {
  return state.deliveryDate.deliveryDate
}
