const data = {
  id: 1,
  name: "root",
  children: [
    {
      id: 2,
      name: "child 1",
      children: [
        { id: 3, name: "child 1.1" },
        { id: 4, name: "child 1.2" },
      ],
    },
    {
      id: 5,
      name: "child 2",
      children: [
        {
          id: 6,
          name: "child 2.1",
          children: [
            { id: 13, name: "child 2.1.1" },
            { id: 14, name: "child 2.1.2" },
            { id: 15, name: "child 2.1.3" },
          ],
        },
        { id: 7, name: "child 2.2" },
        {
          id: 8,
          name: "child 2.3",
          children: [
            { id: 10, name: "child 2.3.1" },
            { id: 11, name: "child 2.3.2" },
            { id: 12, name: "child 2.3.3" },
          ],
        },
        { id: 9, name: "child 2.4" },
      ],
    },
  ],
};

export default data;
