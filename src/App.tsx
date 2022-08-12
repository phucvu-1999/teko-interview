import React, { useState } from "react";
import { Badge, Button, Col, Drawer, Row } from "antd";
import "antd/dist/antd.css";
import { generateId } from "./helper";
import { CheckCircleFilled, PlusOutlined } from "@ant-design/icons";
import TodoItem from "./Components/TodoItem";
import "./App.scss";
import { ToDo } from "./models";
import AddTodo from "./Components/AddTodo";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [toDos, setTodos] = useState<ToDo[]>([]);
  const [selectedToDo, setSelectedToDo] = useState<ToDo>();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedToDo(undefined);
  };

  return (
    <div className="app">
      <div className="to-do-app">
        <div className="to-do-header">
          <div className="to-do-label">
            <Badge count={toDos.length} showZero />
            <span className="to-do-text">TO DO</span>
          </div>
          <div className="to-do-add-btn">
            <Button type="primary" onClick={handleOpen}>
              <PlusOutlined /> Add
            </Button>
          </div>
        </div>
        <div className="to-do-items">
          {toDos.map((item) => (
            <TodoItem
              key={item.id}
              toDo={item}
              setSelectedToDo={setSelectedToDo}
              toDos={toDos}
              handleOpen={handleOpen}
              setToDos={setTodos}
            />
          ))}
        </div>
      </div>
      <Drawer
        footer={
          <Row gutter={16}>
            <Col span={12}>
              <Button type="primary">Cancel</Button>
            </Col>
            <Col style={{ textAlign: "right" }} span={12}>
              <Button htmlType="submit" form="addToDoForm" type="primary">
                Add
              </Button>
            </Col>
          </Row>
        }
        title={selectedToDo ? "Update to do" : "Add to do"}
        onClose={handleClose}
        visible={isOpen}
      >
        <AddTodo
          handleClose={handleClose}
          toDos={toDos}
          selectedTodo={selectedToDo}
          setToDos={setTodos}
        />
      </Drawer>
    </div>
  );
}

export default App;
