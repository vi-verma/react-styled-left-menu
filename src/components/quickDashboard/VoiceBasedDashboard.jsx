import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 240px;
`;

const VoiceButtonStyled = styled.button`
  background-color: #4285f4;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
  &:hover {
    background-color: #357ae8;
  }

  &:focus {
    outline: none;
  }
`;

const MicIcon = styled.img`
  width: 24px;
  height: 24px;
  background-color: white;
  mask: url("/src/assets/icons/microphone.png") no-repeat center;
  mask-size: cover;
`;

const PulseCircle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(66, 133, 244, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${pulse} 1.5s infinite;

  ${VoiceButtonStyled}:not(:focus) & {
    display: none;
  }
`;

const Text = styled.p`
  font-size: 0.8rem;
  margin: 20px 0;
`;

const CodeGenerateBox = styled.div`
  height: 40px;
  width: 80%;
  border-radius: 50px;
  font-size: 0.8rem;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
`;
const CodeText = styled.div`
  padding-left: 14px;
  padding-top: 9px;
`;
const GenerateBtn = styled.button`
  padding: 0.25rem 1rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  background-color: #337dff;
  font-size: 0.8rem;
  &:hover {
    background-color:#5996ff;
  }
`;

const VoiceBasedDashboard = () => {
  const [listening, setListening] = useState(true);

  const handleVoiceButtonClick = () => {
    setListening((prev) => !prev);
    
  };

  return (
    <MainWrapper>

      <VoiceButtonStyled onClick={handleVoiceButtonClick}>
        {listening && <PulseCircle />}
        <MicIcon />
      </VoiceButtonStyled>

      <Text>Please Provide Voice Command</Text>

      <CodeGenerateBox>
        <CodeText>aeyfgwg lrewhfli</CodeText>
        <GenerateBtn>Generate Code</GenerateBtn>
      </CodeGenerateBox>
      
    </MainWrapper>
  );
};

export default VoiceBasedDashboard;
