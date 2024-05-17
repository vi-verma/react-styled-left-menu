export function initTasks() {
  const currentDate = new Date();
  const tasks = [
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Some Project",
    //   id: "ProjectSample",
    //   progress: 25,
    //   type: "project",
    //   hideChildren: false
    // },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "Idea",
      id: "Task 0",
      // progress: 45,
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      // progress: 65,
      // dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      // progress: 10,
      // dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Developing",
      id: "Task 3",
      // progress: 2,
      // dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Review",
      id: "Task 4",
      type: "task",
      // progress: 70,
      // dependencies: ["Task 2"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Release",
      id: "Task 6",
      // progress: currentDate.getMonth(),
      type: "task",
      // dependencies: ["Task 4"],
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Party Time",
      id: "Task 9",
      // progress: 0,
      // isDisabled: true,
      type: "task",
      project: "ProjectSample",
    },
  ];
  return tasks;
}
export function getStartEndDateForProject(tasks, projectId) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;
  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}

export const TASK_DATA = [
  {
    id: "1",
    Sub_Activity: "Filing of application",
    Start_Date: "1-Apr-2024",
    End_Date: "3-Apr-2024",
  },
  {
    id: "2",
    Sub_Activity: "GETCO Approval ",
    Start_Date: "3-Apr-2024",
    End_Date: "10-Apr-2024",
  },
  {
    id: "3",
    Sub_Activity: "GidC Approval",
    Start_Date: "3-Apr-2024",
    End_Date: "12-Apr-2024",
  },
  {
    id: "4",
    Sub_Activity: "GETCO Estimation preparation",
    Start_Date: "10-Apr-2024",
    End_Date: "25-Apr-2024",
  },
  {
    id: "5",
    Sub_Activity: "Submission of GETCO FEES",
    Start_Date: "25-Apr-2024",
    End_Date: "28-Apr-2024",
  },
  {
    id: "6",
    Sub_Activity: "Offer collection from vendors",
    Start_Date: "1-Apr-2024",
    End_Date: "8-Apr-2024",
  },
  {
    id: "7",
    Sub_Activity: "Award of contract",
    Start_Date: "15-May-2024",
    End_Date: "20-May-2024",
  },
  {
    id: "8",
    Sub_Activity: "submission of BOQ and specification by Vendor",
    Start_Date: "1-Jun-2024",
    End_Date: "5-Jun-2024",
  },
  {
    id: "9",
    Sub_Activity: "Approval from GRASIM",
    Start_Date: "6-Jun-2024",
    End_Date: "7-Jun-2024",
  },
  {
    id: "10",
    Sub_Activity: "Final BOQ and Specification sheet and drawings submission",
    Start_Date: "7-Jun-2024",
    End_Date: "9-Jun-2024",
  },
  {
    id: "11",
    Sub_Activity: "Collection of offers as per BOQ provided by consultant",
    Start_Date: "6-Jun-2024",
    End_Date: "8-Jun-2024",
  },
  {
    id: "12",
    Sub_Activity: "Award of contract",
    Start_Date: "9-Jun-2024",
    End_Date: "15-Jun-2024",
  },
  {
    id: "13",
    Sub_Activity: "Contractor on boarding , safety trainings and mobilization",
    Start_Date: "15-Jun-2024",
    End_Date: "25-Jun2024",
  },
  {
    id: "14",
    Sub_Activity: "Submission of quotations and verification by GRASIM",
    Start_Date: "26-Jun-2024",
    End_Date: "10-Sep-2024",
  },
  {
    id: "15",
    Sub_Activity: "Ordering of all required materials",
    Start_Date: "10-Sep-2024-2024",
    End_Date: "20-Sep-2024",
  },
  {
    id: "16",
    Sub_Activity: "Delivery of transformer",
    Start_Date: "1-Feb-2024",
    End_Date: "5-Feb-2024",
  },
  {
    id: "17",
    Sub_Activity: "Delivery of CB",
    Start_Date: "1-Oct-2024",
    End_Date: "4-Oct-2024",
  },
  {
    id: "18",
    Sub_Activity: "Delivery of aux equipment's",
    Start_Date: "1-Oct-2024",
    End_Date: "10-Oct-2024",
  },
  {
    id: "19",
    Sub_Activity: "Delivery of structural steel",
    Start_Date: "25-Sep-2024",
    End_Date: "30-Sep-2024",
  },
  {
    id: "20",
    Sub_Activity: "issue of materials to contractor",
    Start_Date: "25-Sep-2024",
    End_Date: "28-Feb-2024",
  },
  {
    id: "21",
    Sub_Activity: "Material reconciliation",
    Start_Date: "1-Mar-2024",
    End_Date: "10-Mar-2024",
  },
  {
    id: "22",
    Sub_Activity: "Land survey and soil testing  for transmission line",
    Start_Date: "16-Jun-2024",
    End_Date: "25-Jun-2024",
  },
  {
    id: "23",
    Sub_Activity: "Land Survey and soil testing for Switchyard",
    Start_Date: "16-Jun-2024",
    End_Date: "22-Jun-2024",
  },
  {
    id: "24",
    Sub_Activity: "Land survey and soil testing for GETCO bay",
    Start_Date: "16-Jun-2024",
    End_Date: "21-Jun-2024",
  },
  {
    id: "25",
    Sub_Activity:
      "Submission of report and specification for civil foundations",
    Start_Date: "30-Jun-2024",
    End_Date: "5-Sep-2024",
  },
  {
    id: "26",
    Sub_Activity: "Review by GRASIM and agreement",
    Start_Date: "5-Sep-2024",
    End_Date: "10-Sep-2024",
  },
  {
    id: "27",
    Sub_Activity: "Civil Works",
    Start_Date: "11-Sep-2024",
    End_Date: "15-Sep-2024",
  },
  {
    id: "28",
    Sub_Activity: "Structural works",
    Start_Date: "15-Sep-2024",
    End_Date: "15-Oct-2024",
  },
  {
    id: "29",
    Sub_Activity: "Installation of equipment's",
    Start_Date: "15-Oct-2024",
    End_Date: "5-Sep-2024",
  },
  {
    id: "30",
    Sub_Activity: "testing and commissioning",
    Start_Date: "5-Sep-2024",
    End_Date: "10-Sep-2024",
  },
  {
    id: "31",
    Sub_Activity: "Approval for Charging at system voltage and testing",
    Start_Date: "11-Sep-2024",
    End_Date: "15-Sep-2024",
  },
  {
    id: "32",
    Sub_Activity: "System ready to start conduction",
    Start_Date: "16-Sep-2024",
    End_Date: "17-Sep-2024",
  },
  {
    id: "33",
    Sub_Activity: "Land preparation ",
    Start_Date: "11-Sep-2024",
    End_Date: "20-Sep-2024",
  },
  {
    id: "34",
    Sub_Activity: "Foundation of tower 1",
    Start_Date: "15-Sep-2024",
    End_Date: "15-Aug-2024",
  },
  {
    id: "35",
    Sub_Activity: "Foundation of tower 2",
    Start_Date: "20-Sep-2024",
    End_Date: "20-Aug-2024",
  },
  {
    id: "36",
    Sub_Activity: "Foundation of tower 3",
    Start_Date: "25-Sep-2024",
    End_Date: "25-Aug-2024",
  },
  {
    id: "37",
    Sub_Activity: "Foundation of tower 4",
    Start_Date: "30-Sep-2024",
    End_Date: "30-Aug-2024",
  },
  {
    id: "38",
    Sub_Activity: "Foundation of tower 5",
    Start_Date: "5-Aug-2024",
    End_Date: "5-Sep-2024",
  },
  {
    id: "39",
    Sub_Activity: "Erection of Tower 1",
    Start_Date: "15-Aug-2024",
    End_Date: "25-Aug-2024",
  },
  {
    id: "40",
    Sub_Activity: "Erection of Tower 2",
    Start_Date: "20-Aug-2024",
    End_Date: "30-Aug-2024",
  },
  {
    id: "41",
    Sub_Activity: "Erection of Tower 3",
    Start_Date: "25-Aug-2024",
    End_Date: "5-Sep-2024",
  },
  {
    id: "42",
    Sub_Activity: "Erection of Tower 4",
    Start_Date: "31-Aug-2024",
    End_Date: "11-Sep-2024",
  },
  {
    id: "43",
    Sub_Activity: "Erection of Tower 5",
    Start_Date: "6-Sep-2024",
    End_Date: "16-Sep-2024",
  },
  {
    id: "44",
    Sub_Activity: "Fixing of insulators in tower 1",
    Start_Date: "25-Aug-2024",
    End_Date: "29-Aug-2024",
  },
  {
    id: "45",
    Sub_Activity: "Fixing of insulators in tower 2",
    Start_Date: "30-Aug-2024",
    End_Date: "4-Sep-2024",
  },
  {
    id: "46",
    Sub_Activity: "Fixing of insulators in tower 3",
    Start_Date: "5-Sep-2024",
    End_Date: "10-Sep-2024",
  },
  {
    id: "47",
    Sub_Activity: "Fixing of insulators in tower 4",
    Start_Date: "11-Sep-2024",
    End_Date: "15-Sep-2024",
  },
  {
    id: "48",
    Sub_Activity: "Fixing of insulators in tower 5",
    Start_Date: "16-Sep-2024",
    End_Date: "20-Sep-2024",
  },
  {
    id: "49",
    Sub_Activity: "Stringing of conductors",
    Start_Date: "20-Sep-2024",
    End_Date: "20-Oct-2024",
  },
  {
    id: "50",
    Sub_Activity: "Clipping of conductors",
    Start_Date: "25-Sep-2024",
    End_Date: "25-Oct-2024",
  },
  {
    id: "51",
    Sub_Activity: "Testing ",
    Start_Date: "26-Oct-2024",
    End_Date: "30-Oct-2024",
  },
  {
    id: "52",
    Sub_Activity: "Land preparation ",
    Start_Date: "11-Sep-2024",
    End_Date: "20-Sep-2024",
  },
  {
    id: "53",
    Sub_Activity: "preparation of site store",
    Start_Date: "15-Sep-2024",
    End_Date: "20-Sep-2024",
  },
  {
    id: "54",
    Sub_Activity: "Civil works",
    Start_Date: "21-Sep-2024",
    End_Date: "10-Sep-2024",
  },
  {
    id: "55",
    Sub_Activity: "Transformer foundation",
    Start_Date: "20-Sep-2024",
    End_Date: "20-Aug-2024",
  },
  {
    id: "56",
    Sub_Activity: "CB foundation",
    Start_Date: "20-Sep-2024",
    End_Date: "10-Aug-2024",
  },
  {
    id: "57",
    Sub_Activity: "Gantry foundation",
    Start_Date: "20-Sep-2024",
    End_Date: "15-Aug-2024",
  },
  {
    id: "58",
    Sub_Activity: "earthing grid preparation",
    Start_Date: "15-Aug-2024",
    End_Date: "31-Aug-2024",
  },
  {
    id: "59",
    Sub_Activity: "structure erection of CB",
    Start_Date: "11-Aug-2024",
    End_Date: "25-Aug-2024",
  },
  {
    id: "60",
    Sub_Activity: "Gantry structure erection",
    Start_Date: "25-Aug-2024",
    End_Date: "10-Sep-2024",
  },
  {
    id: "61",
    Sub_Activity: "Transformer base /rails erection",
    Start_Date: "20-Aug-2024",
    End_Date: "25-Aug-2024",
  },
  {
    id: "62",
    Sub_Activity: "Installation of transformer",
    Start_Date: "1-Sep-2024",
    End_Date: "15-Sep-2024",
  },
  {
    id: "63",
    Sub_Activity: "Installation of Bus ",
    Start_Date: "30-Aug-2024",
    End_Date: "15-Sep-2024",
  },
  {
    id: "64",
    Sub_Activity: "Installation of CB",
    Start_Date: "25-Aug-2024",
    End_Date: "25-Sep-2024",
  },
  {
    id: "65",
    Sub_Activity: "Preparation of earthing grid ",
    Start_Date: "1-Sep-2024",
    End_Date: "25-Sep-2024",
  },
  {
    id: "66",
    Sub_Activity: "testing and commissioning",
    Start_Date: "1-Jan-2024",
    End_Date: "15-Jan-2024",
  },
  {
    id: "67",
    Sub_Activity:
      "Submission of test reports and other documents by EPC vendor",
    Start_Date: "20-Jan-2024",
    End_Date: "1-Feb-2024",
  },
  {
    id: "68",
    Sub_Activity: "Application for charging and SLD approval from CEIG",
    Start_Date: "1-Feb-2024",
    End_Date: "5-Feb-2024",
  },
  {
    id: "69",
    Sub_Activity: "Site inspection by CEIG",
    Start_Date: "5-Feb-2024",
    End_Date: "20-Feb-2024",
  },
  {
    id: "70",
    Sub_Activity: "Approval from CEIG",
    Start_Date: "22-Feb-2024",
    End_Date: "28-Feb-2024",
  },
  {
    id: "71",
    Sub_Activity: "Charging of system",
    Start_Date: "1-Mar-2024",
    End_Date: "10-Mar-2024",
  },
];
