import { GET_MESSAGE } from './types'

export const getMessage = () => {
  return {
    type: GET_MESSAGE,
    payload: 'Redux is set up 😉'
  }
}