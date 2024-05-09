// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import TestMenu from "./components/TestMenu";
import Menu from "./components/menu/Menu";
import MenuSubMenu from "./components/menuwithsubmenu/MenuWithSubmenu";

const menuItems = [
  {
    id: '1',
    label: "Data source connector",
    icon: '/src/assets/icons/datasource.png',
  },
  {
    id: '2',
    label: "Configure and train",
    icon: '/src/assets/icons/configure.png',
    children: [
      {
        id:'3',
        label: "Item 1.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        id:'4',
        label: "Item 1.2",
        icon: '/src/assets/icons/datasource.png',
        children: [
          {
            id:'5',
            label: "Item 1.2.1",
            icon: '/src/assets/icons/datasource.png',
          },
          {
            id:'6',
            label: "Item 1.2.2",
            icon: '/src/assets/icons/datasource.png',

          },
        ],
      },
    ],
  },
  {
    id: '7',
    label: "Conversatix BI",
    icon: '/src/assets/icons/conver BI-01.png',
    children: [
      {
        id:'8',
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        id:'9',
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    id: '10',
    label: "Conversatix BI",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        id: '11',
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        id: '12',
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    id: '13',
    label: "Text Quester",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        id: '14',
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        id:'15',
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    id:'16',
    label: "ETL Wiz",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        id: '17',
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        id:'18',
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    id:'19',
    label: "Xpresss stream",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        id: '20',
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
      },
      {
        id:'21',
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    id:'22',
    label: "Log quester",
    icon: '/src/assets/icons/datasource.png',
    children: [
      {
        id:'23',
        label: "Item 2.1",
        icon: '/src/assets/icons/datasource.png',
        children: [
          {
            id:'24',
            label: "Item 2.1.oooo",
            icon: '/src/assets/icons/datasource.png',
          }
        ]
      },
      {
        id:'25',
        label: "Item 2.2",
        icon: '/src/assets/icons/datasource.png',
      },
    ],
  },
  {
    id:'26',
    label: "Sentiment quester",
    icon: '/src/assets/icons/datasource.png',
  },
  {
    id:'27',
    label: "Decision enabler",
    icon: '/src/assets/icons/datasource.png',
  },
  {
    id:'28',
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
