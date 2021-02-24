export default src => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(src)

    reader.onload = () => resolve(reader.result)

    reader.onerror = () =>
      reject("Something went wrong with uploading your image.")
  })
}
