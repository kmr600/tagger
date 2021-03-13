export default (type: string) => {
  return new Promise((resolve, reject) => {
    type.split("/")[0] === "image"
      ? resolve(true)
      : reject("It seems that you didn't use a valid image.")
  })
}
