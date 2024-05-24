import React, { useState } from "react";
import styled from "styled-components";
import VoiceBasedDashboard from "./VoiceBasedDashboard";
import ManualDashboard from "./ManualDashboard";

const Card = styled.div`
  background: white;
  border-radius: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  width: 600px;
  padding: 20px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #f3f3f3;
  }
`;

const TabButton = styled.button`
  background: none;
  border: none;
  padding: 10px 0;
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
  border-bottom: ${(props) => (props.active ? "3px solid #007BFF" : "none")};
  padding-bottom: ${(props) => (props.active ? "0px" : "2px")};
  z-index: 1;
`;

const TabContent = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

const QuickDashboard = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <Card>
      <Tabs>
        <TabButton
          active={activeTab === "Tab1"}
          onClick={() => setActiveTab("Tab1")}
        >
          Manual Dashboard
        </TabButton>
        <TabButton
          active={activeTab === "Tab2"}
          onClick={() => setActiveTab("Tab2")}
        >
          Voice-Based Dashboard
        </TabButton>
      </Tabs>
      <TabContent active={activeTab === "Tab1"}>
        <ManualDashboard />
      </TabContent>
      <TabContent active={activeTab === "Tab2"}>
        <VoiceBasedDashboard />
      </TabContent>
    </Card>
  );
};

export default QuickDashboard;
