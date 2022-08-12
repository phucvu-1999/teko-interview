import React, { useEffect } from "react";
import { Form, Row, Col, Input } from "antd";
import { ToDo } from "../models";
import { generateId } from "../helper";
import moment from "moment";

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
  handleClose: () => void;
  selectedTodo?: ToDo;
}

const AddTodo = (props: Props) => {
  const { handleClose, setToDos, toDos, selectedTodo } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();

    if (!selectedTodo) return;

    form.setFieldsValue({ content: selectedTodo.content });
  }, [form, selectedTodo]);

  const handleSubmit = async (values: { content: string }) => {
    await form.validateFields();
    if (!selectedTodo) {
      const newToDo: ToDo = {
        content: values.content,
        id: generateId(),
        time: moment(),
      };
      setToDos((prevState) => prevState.concat(newToDo));
    } else {
      const update = toDos.map((item) => {
        if (item.id === selectedTodo.id) {
          return {
            id: selectedTodo.id,
            content: values.content,
            time: moment(),
          };
        }

        return item;
      });

      setToDos(update);
    }
    handleClose();
  };

  return (
    <Form
      onFinish={handleSubmit}
      form={form}
      id="addToDoForm"
      layout="vertical"
    >
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            name="content"
            label="To do item"
            rules={[{ required: true, message: "Please enter text" }]}
          >
            <Input placeholder="Enter text" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddTodo;
