import React from "react";
import styled from "styled-components";
import CustomInput from "../../helper.js/CustomInput";

const MainWrapper = styled.div`
  height: 240px;
  display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconBtn = styled.img`
  width: 1rem;
  height: 1rem;
  padding-top: 31px;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 6px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  color: ${(props) => props.primary && "white"};
  background-color: ${(props) => (props.primary ? "#337dff" : "#f3f3f3")};
  &:hover {
    background-color: ${(props) => (props.primary ? "#6a9ff9" : "#e0e0e0")};
  }
`;

const ManualDashboard = () => {

  return (
    <MainWrapper>
      <div>
        <CustomInput
          type="text"
          label="Please provide a Dashboard Name"
          width="46%"
          placeholder="Enter dashboard name"
        />
      <Wrapper>
        <CustomInput
          type="text"
          label="Name Your Widget"
          width="20%"
          placeholder="Enter wiget name"
        />
        <CustomInput
          type="select"
          label="Choose Your Chart Type"
          width="24%"
          options={[
            { value: "", label: "Select an option" },
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ]}
        />
        <CustomInput
          type="text"
          label="Ask Your Data Question"
          width="40%"
          placeholder="Enter your question"
        />
        <IconBtn src={"./src/assets/icons/dots.png"} alt="Prefix Icon" />
      </Wrapper>
      </div>

      <CardFooter>
        <Button primary>Save</Button>
        <Button>Cancel</Button>
      </CardFooter>
    </MainWrapper>
  );
};

export default ManualDashboard;
