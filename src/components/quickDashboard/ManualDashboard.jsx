import React from "react";
import styled from "styled-components";
import CustomInput from "../../helper.js/CustomInput";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const IconBtn = styled.img`
  width: 20px;
  height: 20px;
  padding-top: 30px;
  /* vertical-align: bottom; */
  /* margin-right: 10px; */
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
  color: ${(props) => props.primary && "white"};
  background-color: ${(props) => (props.primary ? "#337dff" : "#f3f3f3")};
`;
const ManualDashboard = () => {
  return (
    <div>
      <div>
        <CustomInput
          type="text"
          label="Please provide a Dashboard Name"
          width="46%"
          placeholder="Enter dashboard name"
        />
      </div>
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

      <CardFooter>
        <Button primary>Save</Button>
        <Button>Cancel</Button>
      </CardFooter>
    </div>
  );
};

export default ManualDashboard;
