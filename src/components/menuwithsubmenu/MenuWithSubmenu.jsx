import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const dropdownOptions = [
  {
    value: "Demo med",
    label: "Demo med",
  },
];

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
  // left: ${({ isOpen }) => (isOpen ? "0" : "-200px")};
  // transition: left 0.3s ease-in;
`;

const MenuHeader = styled.div`
  // border-radius: ${({ isRootMenuList }) =>
    isRootMenuList ? "0 8px 16px 0" : "0"}
  border-top-right-radius: ${({ isRootMenuList }) =>
    isRootMenuList ? "8px 8px" : ""};
  padding: 14px;
  cursor: pointer;
  background: #337dff;
  color: white;
  text-transform: uppercase;
`;

const SubMenuHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-item: center;
  // &:hover {
  //   // background-color: #337dff;
  //   background-color: white;
  // }
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;
const CarretIcon = styled.img`
  width: 6px;
  height: 10px;
  position: absolute;
  right: 12px;
  margin-top: 4px;
`;

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

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-item: center;
  text-transform: ${({ isRootMenuList }) => isRootMenuList && "uppercase"};
  animation: ${slideInAnimation} 0.3s ease-in-out forwards;
  &:hover {
    // background-color: #337dff;
    background-color: white;
  }
`;
const SubMenu = styled.div`
  padding-left: 20px;
  animation: ${slideInAnimation} 0.3s ease-in-out forwards;
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
  align-item: center;
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
  const [isOpen, setIsOpen] = useState(true);
  console.log("🚀 ~ TestMenu ~ isOpen:", isOpen);
  const [openMenus, setOpenMenus] = useState({});
  const [isRootMenuList, setIsRootMenuList] = useState(true);
  const [currentMenuList, setcurrentMenuList] = useState([...props.items]);
  console.log("🚀 ~ TestMenu ~ currentMenuList:", currentMenuList);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) return;
    const timeout = setTimeout(() => {
      setIsOpen(true);
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  const toggleMenuItem = (index, children) => {
    isRootMenuList && setcurrentMenuList({ ...children });
    isRootMenuList && setIsOpen(false);
    setIsRootMenuList(false);
    setOpenMenus({
      ...openMenus,
      [index]: !openMenus[index],
    });
  };
  const handleReturnMainMenu = () => {
    setIsOpen(false);
    setcurrentMenuList([...props.items]);
    setIsRootMenuList(true);
    setOpenMenus({});
  };

  const renderMenuItems = (data, parentIndex = "") => {
    console.log("🚀 ~ renderMenuItems ~ data:", data);
    const items = Array.isArray(data) ? data : data?.children;
    return items?.map((item, index) => {
      const itemIndex = parentIndex + index;
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
      {/* {!isOpen && <button onClick={toggleMenu}>show</button>} */}
      <MenuContainer isRootMenuList={isRootMenuList} isOpen={isOpen}>
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

        {/* <button onClick={toggleMenu}>Toggle Menu</button> */}
        {renderMenuItems(currentMenuList)}
        {/* {renderMenuItems(props?.items)} */}

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
