import React from "react";
import { commentsUrl, issueUrl, sidebarUrl, useData } from "./data";

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

const Sidebar = ({ data }) => {
  console.log(data);

  return (
    <div className="sidebar sidebar-base">
      <ul>
        {Array.isArray(data) &&
          data.length > 0 &&
          data?.map(({ name, id }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
};

const Comments = () => {
  const { data } = useData(`${commentsUrl}`);

  if (!data) return <div className="loading issue-loading" />;

  return (
    <div className="comments">
      <ul>
        {Array.isArray(data) &&
          data.length > 0 &&
          data?.map(({ id, comment }) => <li key={id}>{comment}</li>)}
      </ul>
    </div>
  );
};

const Issue = () => {
  const { data } = useData(`${issueUrl}`);

  if (!data) return <LoadingIssue />;

  return (
    <div className="issue">
      <h3>{data.author}</h3>
      <p>{data.description}</p>
      <Comments />
    </div>
  );
};

const App = () => {
  const { data: sidebar } = useData(`${sidebarUrl}`);

  if (!sidebar) return <LoadingScreen />;

  return (
    <div className="layout">
      <Sidebar data={sidebar} />
      <Issue />
    </div>
  );
};

export default App;
