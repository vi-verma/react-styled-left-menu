import { useState } from "react";
import styled from "styled-components";

const dropdownOptions = [
  {
    value: "Demo med",
    label: "Demo med",
  },
];

const MenuContainer = styled.div`
  border-top-right-radius: 8px 8px;
  border-bottom-right-radius: 16px;
  -webkit-box-shadow: 10px 10px 12px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 12px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 12px -10px rgba(0, 0, 0, 0.75);

  width: 240px;
  height: 100vh;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  background-color: #f3f3f3;
  color: 4d4d4d;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-200px")};
  transition: left 0.3s ease-in-out;
`;
const MenuHeader = styled.div`
  border-top-right-radius: 8px 8px;
  padding: 14px;
  cursor: pointer;
  background: #337dff;
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
const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  console.log("🚀 ~ TestMenu ~ openMenus:", openMenus)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuItem = (index) => {
    setOpenMenus({
      ...openMenus,
      [index]: !openMenus[index],
    });
  };

  const renderMenuItems = (items, parentIndex = "") => {
    return items?.map((item, index) => {
      const itemIndex = parentIndex + index;
      const hasSubMenu =
        Array.isArray(item?.children) && item?.children?.length > 0;

      return (
        <div key={itemIndex}>
          <MenuItem onClick={() => hasSubMenu && toggleMenuItem(itemIndex)}>
            {/* <img
              height={"16px"}
              src={configureLogo}
              alt="Vite logo"
            />
            {item.label} */}
            <Icon src={item.icon} alt="Prefix Icon" />
            <span>{item.label.toUpperCase()}</span>{'--' + index}
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
      {!isOpen && <button onClick={toggleMenu}>show</button>}
      <MenuContainer isOpen={isOpen}>
        <MenuHeader />
        {/* <button onClick={toggleMenu}>Toggle Menu</button> */}
        {renderMenuItems(props?.items)}

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
      </MenuContainer>
    </>
  );
};

export default TestMenu;
