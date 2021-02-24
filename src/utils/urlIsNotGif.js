export default src => {
  return new Promise((resolve, reject) => {
    let extension = src.substring(src.length - 3, src.length).toLowerCase()

    if (extension === "gif") {
      reject(
        `GIFs are not supported. Use a different image or URL and try again.`
      )
    } else {
      resolve()
    }
  })
}
