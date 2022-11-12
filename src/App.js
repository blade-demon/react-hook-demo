import React, { useState, useEffect } from "react";
import { useData } from "./useData";
// import {
//   commentsUrl,
//   issueUrl,
//   sidebarUrl,
//   SidebarType,
//   IssueType,
//   CommentType,
//   useData,
// } from "./data";

const LoadingSidebar = () => (
  <>
    <div className="sidebar-base">
      <div className="loading sidebar-loading" />
      <div className="loading sidebar-loading" />
      <div className="loading sidebar-loading" />
      <div className="loading sidebar-loading" />
    </div>
  </>
);

const LoadingIssue = () => (
  <>
    <div className="issue">
      <div className="loading issue-loading" style={{ height: "20rem" }} />
      <div className="loading issue-loading" />
    </div>
  </>
);

const LoadingScreen = () => {
  return (
    <div className="layout">
      <LoadingSidebar />
      <LoadingIssue />
    </div>
  );
};

fetch(
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10000ms&id=1"
);
fetch(
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10000ms&id=2"
);
fetch(
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10000ms&id=3"
);
fetch(
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10000ms&id=4"
);

fetch(
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10000ms&id=6"
);

fetch(
  "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10000ms&id=6"
);

const App = () => {
  const { data } = useData(
    "https://run.mocky.io/v3/98b3aa11-54c3-42ca-8cc7-e2c68f42082f?mocky-delay=10ms"
  );

  if (!data) return <LoadingScreen />;

  return (
    <div className="layout">
      <div className="issue">
        <h3>{data.author}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default App;
