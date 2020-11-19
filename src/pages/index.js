import React from "react"
import Layout from "../Layouts/Layout"
import styled from "@emotion/styled"
// import MainImage from "../Images/IMG_1135 (1).JPG"

export default function Home() {
  const HomeSection = styled.div(`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  `)
  const HomeMainImageContainer = styled.div`
    width: 100vw;
    height: 90vh;
  `
  const HomeMainImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
  `

  return (
    <Layout>
      <HomeSection>
        {/* <div style={{ backgroundImage: `url(${MainImage})` }}></div> */}
        <HomeMainImageContainer>
          <HomeMainImage
            src={`../../IMG_1135 (1).JPG`}
            alt="Home screen image"
          />
        </HomeMainImageContainer>
        <h3>Hey, hi, hello!</h3>
        <p>
          My name is Charis Cheung and I'm the gal behind the camera of{" "}
          <a href="https://www.instagram.com/charis.cheung/">@charis.cheung</a>.
          As a Los Angeles Based portrait photographer, I'm often asked the
          question,
        </p>
        <p>"How do you edit your pictures?"</p>
        <p>Well, that's a long-winded answer, but in short THIS is how.</p>
        <p>
          These 3 presets are my go-to editing styles for everything far and in
          between. Here, you’ll find 3 film inspired, warm, and dreamy presets
          that will work on just about any photo you desire. I’m excited to see
          what you make with these, tag #shotzbyalexpreset so I can share with
          the world.
        </p>
      </HomeSection>
    </Layout>
  )
}
