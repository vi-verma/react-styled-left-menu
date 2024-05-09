// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import TestMenu from "./components/TestMenu";
import Menu from "./components/menu/Menu";
import MenuSubMenu from "./components/menuwithsubmenu/MenuWithSubmenu";

const menuItems = [
  {
    label: "Data source connector",
    icon: '/src/assets/icons/datasource.png',
  },
  {
    label: "Configure and train",
    icon: '/src/assets/icons/configure.png',
    children: [
      {
        label: "Item 1.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 1.2",
        icon: '/src/assets/icons/datasource.png',
        children: [
          {
            label: "Item 1.2.1",
        icon: '/src/assets/icons/datasource.png',
          },
          {
            label: "Item 1.2.2",
        icon: '/src/assets/icons/datasource.png',

          },
        ],
      },
    ],
  },
  {
    label: "Conversatix BI",
    icon: '/src/assets/icons/conver BI-01.png',
    children: [
      {
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    label: "Conversatix BI",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    label: "Text Quester",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    label: "ETL Wiz",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    label: "Xpresss stream",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    label: "Log quester",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    label: "Sentiment quester",
    icon: '/src/assets/icons/datasource.png',
  },
  {
    label: "Decision enabler",
    icon: '/src/assets/icons/datasource.png',
  },
  {
    label: "Customer data profile",
    icon: '/src/assets/icons/datasource.png',
  },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Menu items={menuItems}/> */}
        <TestMenu items={menuItems} />
        {/* <MenuSubMenu items={menuItems}/> */}
      </div>
    </>
  );
}

export default App;
