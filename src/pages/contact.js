import React, { useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HashtagsImage from "../components/Images/HashtagsImage"
import GradientButton from "../components/GradientButton"
import { FaRegUser, FaRegEnvelope } from "react-icons/fa"

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()

    const form = e.target

    axios({
      url: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        message,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(err => alert(err))
  }
  return (
    <Layout>
      <SEO title="Contact" />

      <div id="contact-page">
        <h1>Contact</h1>

        <div className="contact-content">
          <div className="info">
            <p>
              We’d love to hear from you. Send us a message and we’ll respond as
              soon as possible.
            </p>

            <div className="hashtags-image desktop">
              <HashtagsImage />
            </div>
          </div>

          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="field">
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                required
                onChange={e => setName(e.target.value)}
              />
              <label htmlFor="name">{<FaRegUser />}</label>
            </div>
            <div className="field">
              <input
                placeholder="Email"
                type="text"
                name="email"
                id="email"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="email">{<FaRegEnvelope />}</label>
            </div>
            <div className="field">
              <textarea
                placeholder="Message..."
                name="message"
                id="message"
                required
                onChange={e => setMessage(e.target.value)}
              />
            </div>

            <GradientButton type="submit">Submit</GradientButton>
          </form>

          <div className="hashtags-image mobile">
            <HashtagsImage />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
