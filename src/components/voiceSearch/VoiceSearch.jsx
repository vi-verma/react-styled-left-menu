import React from "react";
import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
  width: 300px;
  height: 400px;
  box-shadow: -1px 0px 14px 0px rgba(0, 0, 0, 0.75);
  border-radius: 30px;
  text-align: center;
/* to hide content overlowing */
    overflow: hidden;
    position: relative;
`;
const TopContent = styled.div`
  height: 220px;
  width: 300px;
  /* background: #337dff; */
  border-radius: 30px 30px 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  height: 400px;
  width: 400px;
  background: #337dff;
  border-radius: 100%;
  position: absolute;
  bottom: 100px;

    bottom: 180px;
    left: -50px;
`;
const BottomContent = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;
const Icon = styled.img`
  width: 90px;
  animation: ${pulse} 1.5s infinite;
`;

const VoiceSearch = () => {
  return (
    <MainContainer>
        <Content />
      <TopContent>
        <Icon src={"/src/assets/icons/mic.png"} alt="MIC Icon" />
      </TopContent>
      <BottomContent>
        What you speak will show <br />
        here as text...
      </BottomContent>
    </MainContainer>
  );
};

export default VoiceSearch;
