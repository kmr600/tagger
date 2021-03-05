export default (src: Blob | null) => {
  return new Promise((resolve, reject) => {
    if (src) {
      const reader = new FileReader()

      if (src) reader.readAsDataURL(src)

      reader.onload = () => resolve(reader.result)

      reader.onerror = () =>
        reject("Something went wrong with uploading your image.")
    } else {
      reject("Something went wrong with uploading your image.")
    }
  })
}
