export default async ({ src, maxConcepts, Clarifai, clarifaiApp }) => {
  return new Promise((resolve, reject) => {
    clarifaiApp.models
      .predict(Clarifai.GENERAL_MODEL, `${src}`, {
        maxConcepts: maxConcepts,
      })
      .then(response => {
        // retrieve concepts/keywords
        let concepts = response["outputs"][0]["data"]["concepts"]
        let data = []

        // loop through concepts to only get name of concepts and save them
        for (let i = 0; i < concepts.length; i++) {
          let concept = response["outputs"][0]["data"]["concepts"][i]["name"]

          data = [...data, concept]
        }

        resolve(data)
      })
      .catch(() => reject(`Something with wrong with uploading your image.`))
  })
}
