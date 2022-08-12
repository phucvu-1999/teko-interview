import React from "react";
import { Table, Typography } from "antd";
import "antd/dist/antd.css";
import { CheckCircleFilled } from "@ant-design/icons";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Typography.Link>
        <CheckCircleFilled />
      </Typography.Link>

      <Table bordered />
    </div>
  );
}

export default App;
