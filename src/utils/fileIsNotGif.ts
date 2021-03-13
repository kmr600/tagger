export default (type: string) => {
  return new Promise((resolve, reject) => {
    type.split("/")[1] === "gif"
      ? reject(
          `GIFs are not supported. Use a different image or URL and try again.`
        )
      : resolve(true)
  })
}
