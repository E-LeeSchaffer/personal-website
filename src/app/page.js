"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <StyledLandingPage>
        <StyledHeader>Z=II</StyledHeader>

        <StyledBannerText>
          <StyledWelcomeTitel>
            Hello, I'm&nbsp;<StyledName>Eun-Rae</StyledName>.
          </StyledWelcomeTitel>
          <StyledWelcomeSubtitel>
            I'm a full-stack web developer.
          </StyledWelcomeSubtitel>
        </StyledBannerText>
      </StyledLandingPage>
      <StyledSentence>
        I like clean and fast code with great user experience.
      </StyledSentence>
      <StyledTitleContainer>
        <StyledTitle>Tech Stacks</StyledTitle>
      </StyledTitleContainer>
      <TechStackGrid>
        <GridItem>HTML</GridItem>
        <GridItem>CSS</GridItem>
        <GridItem>Java Script</GridItem>
        <GridItem>React</GridItem>
        <GridItem>Next.js</GridItem>
        <GridItem>Node.js</GridItem>
        <GridItem>Mongo DB</GridItem>
        <GridItem>PostgreSQL</GridItem>
        <GridItem>REST</GridItem>
        <GridItem>Shell</GridItem>
        <GridItem>Git</GridItem>
        <GridItem>Agile Workflows</GridItem>
      </TechStackGrid>
      <StyledTitleContainer>
        <StyledTitle>Let's connect</StyledTitle>
      </StyledTitleContainer>
      <StyledLink
        href="https://www.linkedin.com/in/eun-rae-lee-schaffer-451392302/"
        target="_blank"
      >
        <Image
          src="/LI-In-Bug.png"
          width={35}
          height={30}
          alt="LinkedIn Icon"
        />
        Go to my LinkedIn Profile
      </StyledLink>
      <StyledTitleContainer>
        <StyledTitle>My Recent Work</StyledTitle>
      </StyledTitleContainer>
      <StyledText>To be continued...</StyledText>
    </>
  );
}

const StyledLandingPage = styled.div`
  position: relative;
  background-color: #bfd6f8;
  padding-bottom: 475px;
`;

const StyledWelcomeTitel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 16px;
  font-size: 2rem;
`;

const StyledName = styled.p`
  background-color: #e9ff97;
`;

const StyledWelcomeSubtitel = styled.p`
  font-size: 1rem;
`;

const StyledHeader = styled.h1`
  padding: 16px;
  text-align: left;
  font-size: 1rem;
`;

const StyledBannerText = styled.h1`
  padding-inline: 16px;
  padding-top: 200px;
  text-align: center;
`;

const StyledSentence = styled.p`
  background-color: #e9ff97;
  padding: 8px;
  text-align: center;
  border-radius: 16px;
  margin-inline: 16px;
  font-weight: 900;
  position: absolute;
  top: 770px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const StyledTitle = styled.h3`
  background-color: #000;
  color: white;
  padding: 4px 8px;
  border-radius: 16px;
  width: fit-content;
  margin-bottom: 12px;
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-inline: 16px;
`;

const GridItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 16px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 0.8rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: 800;
`;

const StyledText = styled.p`
  text-align: center;
`;
