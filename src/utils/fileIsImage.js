export default type => {
  return new Promise((resolve, reject) => {
    type.split("/")[0] === "image"
      ? resolve()
      : reject(`It seems that you didn't use a valid image.`)
  })
}
