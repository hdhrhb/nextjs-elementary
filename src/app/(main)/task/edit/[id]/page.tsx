import React from "react";

// const TaskEditPage = ({ params }: { params: { id: string } }) => {
//   return <div>{params.id}</div>;
// };

const TaskEditPage = (props: { params: { id: string } }) => {
  const { params } = props;

  // const text_json = {
  //   test1: { id: "testtest1" },
  //   test2: "testtest2",
  // };

  // const { test1 } = text_json;

  return <div>{params.id}</div>;
  // return <div>{test1.id}</div>;
};

export default TaskEditPage;
