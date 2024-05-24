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
  /* justify-content: center; */
  align-items:center;
`;

const Message = styled.p`
  font-size: 1em;
  color: #666;
  margin: 20px 0;
`;

const VoiceButtonStyled = styled.button`
  background-color: #4285f4;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
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
  width: 50px;
  height: 50px;
  background-color: rgba(66, 133, 244, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: ${pulse} 1.5s infinite;

  ${VoiceButtonStyled}:not(:focus) & {
    display: none;
  }
`;

const CodeGenerateBox = styled.div`
  height: 40px;
  width: 70%;
  border-radius: 50px;
  background-color: #f3f3f3;
  display: flex;
  justify-content: space-between;
`;
const CodeText = styled.div`
  padding-left: 14px;
  padding-top: 6px;
`;
const GenerateBtn = styled.button`
  padding: 4px 6px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 10px;
  color: white;
  background-color: #337dff;
`;

const VoiceBasedDashboard = () => {
  const [listening, setListening] = useState(true);

  const handleVoiceButtonClick = () => {
    setListening((prev) => !prev);
    // Here you can add your voice recognition logic
  };

  return (
    <MainWrapper>
      {/* <Title>Google Voice Assistant</Title> */}
      <VoiceButtonStyled onClick={handleVoiceButtonClick}>
        <MicIcon />
        {listening && <PulseCircle />}
      </VoiceButtonStyled>
      <Message>Please Provide Voice Command</Message>

      <CodeGenerateBox>
        <CodeText>aeyfgwg lrewhfli</CodeText>
        <GenerateBtn>Generate Code</GenerateBtn>
      </CodeGenerateBox>
    </MainWrapper>
  );
};

// export default VoiceAssistantPopup;

export default VoiceBasedDashboard;
