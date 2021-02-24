export default src => {
  return new Promise((resolve, reject) => {
    let tester = new Image()
    tester.src = src

    tester.onload = () => resolve()

    tester.onerror = () => reject(`It seems that you didn't use a valid image.`)
  })
}
