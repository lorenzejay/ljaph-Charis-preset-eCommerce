import React from "react"
import Layout from "../Layouts/Layout"
import styled from "@emotion/styled"
// import MainImage from "../Images/IMG_1135 (1).JPG"

export default function Home() {
  const HomeSection = styled.div(`
  font-family: 'Poppins', sans-serrif
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
  `)
  const HomeMainImageContainer = styled.div`
    width: 100%;
    height: 90vh;
  `
  const HomeMainImage = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
  `

  const HomeTextContent = styled.div`
    padding: 8%;
  `
  const HomeTitle = styled.h2`
    font-size: 2rem;
    color: #3a3a3a;
  `
  const HomeP = styled.p`
    margin: 3vh 0;
    font-size: 1.1rem;
    color: #3a3a3a;
  `
  const HomeLink = styled.a`
    text-decoration: none;
    color: black;
    &:hover {
      text-decoration: underline;
    }
  `

  return (
    <Layout>
      <HomeSection>
        <HomeMainImageContainer>
          <HomeMainImage
            src={`../../IMG_1135 (1).JPG`}
            alt="Home screen image of a girl laying down on a car"
          />
        </HomeMainImageContainer>
        <HomeTextContent>
          <HomeTitle>hey, hi, hello!</HomeTitle>
          <HomeP>
            My name is Charis Cheung and I'm the gal behind the camera of{" "}
            <HomeLink href="https://www.instagram.com/charis.cheung/">
              @charis.cheung
            </HomeLink>
            . As a Los Angeles Based portrait photographer, I'm often asked the
            question,
          </HomeP>
          <HomeP>"How do you edit your pictures?"</HomeP>
          <HomeP>
            Well, that's a long-winded answer, but in short THIS is how.
          </HomeP>
          <HomeP>
            These 3 presets are my go-to editing styles for everything far and
            in between. Here, you’ll find 3 film inspired, warm, and dreamy
            presets that will work on just about any photo you desire. I’m
            excited to see what you make with these, tag #shotzbyalexpreset so I
            can share with the world.
          </HomeP>
        </HomeTextContent>
      </HomeSection>
    </Layout>
  )
}
