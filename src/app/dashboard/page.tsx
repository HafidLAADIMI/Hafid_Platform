import React from "react";
import CardDash from "../../../components/dashboard/CardDash";
import Table from "../../../components/dashboard/Table";
import Chart from "../../../components/dashboard/Chart";
function page() {
  const user = {
    title: "Users",
    number: 10,
    average: 2,
  };
  const movie = {
    title: "Movies",
    number: 20,
    average: 3,
  };
  const list = {
    title: "Lists",
    number: 3,
    average: 2,
  };
  return (
    <div className="flex flex-col w-screen md:ml-[22vw] md:items-start  items-center gap-4 p-3  ">
      <div className="flex flex-row items-center justify-center gap-2">
        <CardDash props={user} />
        <CardDash props={movie} />
        <CardDash props={list} />
      </div>
      <Table />
      <Chart />
    </div>
  );
}

export default page;
