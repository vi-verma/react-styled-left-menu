import { useState } from "react";
import styled, {css, keyframes } from "styled-components";

const dropdownOptions = [
  {
    value: "Demo med",
    label: "Demo med",
  },
  {
    value: "Demo 1",
    label: "Demo 1",
  },
];

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const MenuContainer = styled.div`
  border-radius: ${({ isRootMenuList }) =>
    isRootMenuList ? "0 8px 16px 0" : ""};
  box-shadow: 10px 10px 12px -10px rgba(0, 0, 0, 0.75);
  width: 240px;
  height: 100vh;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  background: ${({ isRootMenuList }) =>
    isRootMenuList ? "#f3f3f3" : "#f6f8fe"};
  color: 4d4d4d;
  position: fixed;
  top: 0;
`;

const MenuHeader = styled.div`
  // border-radius: ${({ isRootMenuList }) => isRootMenuList ? "0 8px 16px 0" : "0"};
  border-top-right-radius: ${({ isRootMenuList }) => isRootMenuList ? "8px 8px" : ""};
  padding: 14px;
  cursor: pointer;
  background: #337dff;
  color: white;
  text-transform: uppercase;
  animation: ${slideInAnimation} 0.3s ease-in-out forwards;

`;

const SubMenuHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  // &:hover {
  //   // background-color: #337dff;
  //   background-color: white;
  // }
  animation: ${slideInAnimation} 0.3s ease-in-out forwards;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;
const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const CarretIcon = styled.img`
  width: 6px;
  height: 10px;
  position: absolute;
  right: 12px;
  margin-top: 4px;
  transform: rotate(90deg);
  transition: transform 0.3s ease-in-out;
  ${({ isSelected, isRootMenuList }) => isSelected ? css`transform: rotate(270deg);` : !isRootMenuList && css`transform: rotate(90deg);`};
`;
const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-transform: ${({ isRootMenuList }) => isRootMenuList ? "uppercase" : "capitalize"};
  animation: ${slideInAnimation} 0.3s ease-in-out forwards;
  &:hover {
    // background-color: #337dff;
    background-color: white;
  }
`;
const SubMenu = styled.div`
  padding-left: 20px;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #9e9a9abf;
  margin: 0px 12px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  // display: flex;
  // justify-content: space-between;
  // align-item: center;
`;
const FooterWrapper = styled.div`
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  // width: 20px;
  // height: 20px;
  width: 40%;
  margin-right: 10px;
`;

const DropdownSelect = styled.select`
  padding: 2px;
  width: 40%;
  font-size: 1em;
  background: #f3f3f3;
  border-radius: 4px;
`;

const TestMenu = (props) => {
  const [openMenus, setOpenMenus] = useState({});
  console.log("🚀 ~ TestMenu ~ openMenus:", openMenus)
  const [isRootMenuList, setIsRootMenuList] = useState(true);
  const [currentMenuList, setcurrentMenuList] = useState([...props.items]);
  console.log("🚀 ~ TestMenu ~ currentMenuList:", currentMenuList);


  const toggleMenuItem = (index, children) => {
    isRootMenuList && setcurrentMenuList({ ...children });
    setIsRootMenuList(false);
    !isRootMenuList && setOpenMenus({
      ...openMenus,
      [index]: !openMenus[index],
    });
  };
  const handleReturnMainMenu = () => {
    setcurrentMenuList([...props.items]);
    setIsRootMenuList(true);
    setOpenMenus({});
  };

  const renderMenuItems = (data, parentIndex = "") => {
    console.log("🚀 ~ renderMenuItems ~ data:", data);
    const items = Array.isArray(data) ? data : data?.children;
    return items?.map((item, index) => {
      // const itemIndex = parentIndex + index;
      const itemIndex = item.id;
      const hasSubMenu =
        Array.isArray(item?.children) && item.children.length > 0;

      return (
        <div key={itemIndex}>
          <MenuItem
            isRootMenuList={isRootMenuList}
            onClick={() => hasSubMenu && toggleMenuItem(itemIndex, item)}
          >
            {item.icon && <Icon src={item.icon} alt="Prefix Icon" />}
            <span>{item.label}</span>
            {item.children && (
              <CarretIcon
                isRootMenuList={isRootMenuList}
                isSelected={openMenus[itemIndex]}
                src={"/src/assets/icons/drop down-01.png"}
                alt="Suffix Icon"
              />
            )}
          </MenuItem>
          {hasSubMenu && openMenus[itemIndex] && (
            <SubMenu>{renderMenuItems(item.children, `${itemIndex}-`)}</SubMenu>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <MenuContainer isRootMenuList={isRootMenuList} >
        {!isRootMenuList && (
          <SubMenuHeader>
            <Icon
              src={"/src/assets/icons/arrow.png"}
              alt="Prefix Icon"
              onClick={handleReturnMainMenu}
            />

            <span>MAIN MENU</span>
          </SubMenuHeader>
        )}
        <MenuHeader isRootMenuList={isRootMenuList}>
          {!isRootMenuList && currentMenuList.label}
        </MenuHeader>
          {renderMenuItems(currentMenuList)}

          {isRootMenuList && (
            <Footer>
              <Separator />
              <FooterWrapper>
                <Logo
                  src={"./src/assets/icons/NewFangled icon.png"}
                  alt="Prefix Icon"
                />

                <DropdownSelect>
                  {dropdownOptions?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </DropdownSelect>
              </FooterWrapper>
            </Footer>
          )}
      </MenuContainer>
    </>
  );
};

export default TestMenu;
