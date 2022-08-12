import React from "react";
import moment from "moment";
import {
  CalendarOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./TodoItem.scss";
import { Space } from "antd";
import { ToDo } from "../models";

interface Props {
  toDo: ToDo;
  setSelectedToDo: React.Dispatch<React.SetStateAction<ToDo | undefined>>;
  toDos: ToDo[];
  handleOpen: () => void;
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const TodoItem = (props: Props) => {
  const { toDo, setSelectedToDo, toDos, handleOpen, setToDos } = props;

  const handleSelectToDo = (contentItemId: string) => {
    handleOpen();
    const seleted = toDos.find((item) => item.id === contentItemId);
    setSelectedToDo(seleted);
  };

  const handleRemoveToDo = (contentItemId: string) => {
    const update = toDos.filter((item) => item.id !== contentItemId);
    setToDos(update);
  };

  return (
    <div className="to-do-item mt-10">
      <div className="to-do-item-time">
        <CalendarOutlined style={{ marginRight: 8 }} />
        <span className="to-do-item-moment">
          {toDo.time.format("DD/MM/YYYY, HH:mm:ss")}
        </span>
      </div>
      <div className="to-do-item-content">
        <div className="to-do-item-text">{toDo.content}</div>
        <div className="to-do-item-action">
          <Space>
            <FormOutlined
              onClick={() => handleSelectToDo(toDo.id)}
              className="edit-item"
            />
            <DeleteOutlined
              onClick={() => handleRemoveToDo(toDo.id)}
              className="remove-item"
            />
          </Space>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
