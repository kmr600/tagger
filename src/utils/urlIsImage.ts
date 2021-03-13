export default (src: string) => {
  return new Promise((resolve, reject) => {
    let tester = new Image()
    tester.src = src

    tester.onload = () => resolve(true)

    tester.onerror = () => reject(`It seems that you didn't use a valid image.`)
  })
}
