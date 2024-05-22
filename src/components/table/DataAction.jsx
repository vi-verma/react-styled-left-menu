import React from "react";
import styled from "styled-components";
import { BTN_ACTIONS } from "./constans";
const ActionBtnWrapper = styled.div`
  width: 100%;
`;
const BtnIcon = styled.img`
  width: ${({ width }) => width || "10px"};
  height: ${({ height }) => height || "10px"};
  margin: 0 4px;
  &:hover {
    transform: scale(1.4);
  }
`;
const DataAction = ({
  handleButtonClick,
  data,
  canView = true,
  canEdit = true,
  canDuplicate = true,
  canDelete = true,
}) => {
  return (
    <ActionBtnWrapper>
      {/* add tooltip on icons for user friendly */}
      {canEdit && (
        <BtnIcon
          onClick={() =>
            handleButtonClick({ btnActionType: BTN_ACTIONS.EDIT.key, data })
          }
          src={"/src/assets/tableBtnIcons/edit.png"}
          alt="edit Icon"
        />
      )}
      {canView && (
        <BtnIcon
          height={"7px"}
          width={"12px"}
          onClick={() =>
            handleButtonClick({ btnActionType: BTN_ACTIONS.VIEW.key, data })
          }
          src={"/src/assets/tableBtnIcons/eye.png"}
          alt="view Icon"
        />
      )}
      {canDuplicate && (
        <BtnIcon
          onClick={() =>
            handleButtonClick({
              btnActionType: BTN_ACTIONS.DUPLICATE.key,
              data,
            })
          }
          src={"/src/assets/tableBtnIcons/duplicate.png"}
          alt="copy Icon"
        />
      )}
      {canDelete && (
        <BtnIcon
          onClick={() =>
            handleButtonClick({ btnActionType: BTN_ACTIONS.DELETE.key, data })
          }
          src={"/src/assets/tableBtnIcons/delete.png"}
          alt="delete Icon"
        />
      )}
    </ActionBtnWrapper>
  );
};

export default DataAction;
