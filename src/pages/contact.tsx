import React, { useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import { FaRegUser, FaRegEnvelope } from "react-icons/fa"
import styled from "styled-components"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import HashtagsImage from "../components/Images/HashtagsImage"
import GradientBtn from "../components/GradientButton"

const Page = styled.div`
  width: 100%;
`

const Heading = styled.h1`
  margin-bottom: 55px;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Info = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const InfoText = styled.p`
  font-family: ${props => props.theme.defaultFont};
  max-width: 90%;
  color: ${props => props.theme.grey};

  @media (max-width: 1024px) {
    max-width: none;
  }
`

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    margin-top: 60px;
  }
`

const Field = styled.div`
  width: 100%;
  margin-bottom: 30px;
  position: relative;

  &.hidden {
    display: none;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: #000;
  padding: 25px 40px;
  text-indent: 30px;
  font-size: 0.9rem;
  -moz-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: $mediumGrey;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }

  &:focus + label {
    color: #000;
  }

  @media (max-width: 1024px) {
    padding-left: 60px;
    padding-right: 30px;
    text-indent: 0;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  border-radius: 10px;
  background: #fff;
  color: #000;
  padding: 25px 40px;
  font-size: 0.9rem;
  -moz-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.25);
  text-indent: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 200px;
  line-height: 1.4;
  font-family: ${props => props.theme.defaultFont};

  &::placeholder {
    color: ${props => props.theme.mediumGrey};
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  color: ${props => props.theme.mediumGrey};
  font-size: 1.1rem;
  transition: color 0.3s ease-in-out;

  @media (max-width: 1024px) {
    left: 30px;
  }
`

const HashtagsContainer = styled.div`
  width: 50%;
  margin: 140px auto 0 100px;

  .gatsby-image-wrapper {
    margin: 0 auto;
    max-width: 80%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 60px auto 0;
    width: 40%;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    margin: 60px auto 0;
    width: 62%;
  }
`

const GradientButton = styled(GradientBtn)`
  margin-top: 15px;
`

const ContactPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    axios({
      url: "/",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: encode({
        "form-name": e.target.getAttribute("name"),
        name,
        email,
        message,
      }),
    })
      .then(() => navigate(e.target.getAttribute("action")))
      .catch(err => alert(err))
  }

  return (
    <Layout>
      <SEO title="Contact" />

      <Page>
        <Heading>Contact</Heading>

        <Content>
          <Info>
            <InfoText>
              We’d love to hear from you. Send us a message and we’ll respond as
              soon as possible.
            </InfoText>

            <HashtagsContainer className="desktop">
              <HashtagsImage />
            </HashtagsContainer>
          </Info>

          <Form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <Input type="hidden" name="form-name" value="contact" />

            <Field>
              <Input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                required
                onChange={e => setName(e.target.value)}
              />
              <Label htmlFor="name">{<FaRegUser />}</Label>
            </Field>
            <Field>
              <Input
                placeholder="Email"
                type="text"
                name="email"
                id="email"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <Label htmlFor="email">{<FaRegEnvelope />}</Label>
            </Field>
            <Field>
              <Textarea
                placeholder="Message..."
                name="message"
                id="message"
                required
                onChange={e => setMessage(e.target.value)}
              />
            </Field>

            <GradientButton type="submit">Submit</GradientButton>
          </Form>

          <HashtagsContainer className="mobile">
            <HashtagsImage />
          </HashtagsContainer>
        </Content>
      </Page>
    </Layout>
  )
}

export default ContactPage
