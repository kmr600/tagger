import axios from "axios"

export default async src => {
  return new Promise((resolve, reject) => {
    const formData = new FormData()
    formData.append("file", src)
    formData.append(
      "upload_preset",
      process.env.GATSBY_CLOUDINARY_UPLOAD_PRESET
    )

    axios({
      url: process.env.GATSBY_CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    })
      .then(response => resolve(response.data.secure_url))
      .catch(() => reject("Something went wrong with uploading your image."))
  })
}
