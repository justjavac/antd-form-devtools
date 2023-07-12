/* eslint-disable no-console */
import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  Divider,
  Typography,
  Image,
} from "antd";

import { DevTool } from "antd-form-devtools/src/DevTool";

const { Title, Paragraph } = Typography;

function App() {
  return (
    <div>
      <section style={{ maxWidth: 600, margin: "auto" }}>
        <Typography style={{ marginTop: 64 }}>
          <Title style={{ textAlign: "center" }}>
            DevTools for Ant Design Forms
          </Title>
          <Paragraph style={{ textAlign: "center" }}>
            A Powerfull DevTools to help debug Ant Design Forms.
          </Paragraph>
          <Paragraph style={{ textAlign: "center", marginTop: 32 }}>
            <Image
              width={600}
              src="/screen.png"
              alt="DevTools for Ant Design Forms"
              preview={false}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 10px 2px",
                borderRadius: 8,
              }}
            />
          </Paragraph>
        </Typography>
        <Divider style={{ marginTop: 80 }}>Usage</Divider>
        <Paragraph>
          <ol>
            <li>
              Install <code>antd-form-devtools</code> as a dev dependency
              package.
              <pre style={{ padding: "0.8em" }}>
                <code>npm install antd-form-devtools -D</code>
              </pre>
            </li>
            <li>
              Integrate with your React App is as simple as import a Component
              into your App/Form render and pass control prop into it.
              <pre style={{ padding: "1em" }}>
                <code>
                  {`import React from 'react';\n`}
                  {`import { Button, Form, Input, InputNumber } from 'antd';\n`}
                  <div style={{ backgroundColor: "rgb(5, 145, 255)" }}>
                    {`import { DevTool } from 'antd-form-devtools';`}
                  </div>

                  {`\n\nconst App = () => {
  return (
    <>
      <Form name="userinfo" onFinish={console.log}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Age" name="age">
          <InputNumber min="0" max="100" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

`}
                  <div
                    style={{ backgroundColor: "rgb(5, 145, 255)" }}
                  >{`        <DevTool />`}</div>
                  {`

       </Form>
    </>
  );
};

export default App;`}
                </code>
              </pre>
            </li>
          </ol>
        </Paragraph>
        <Divider style={{ marginTop: 80 }}>Example</Divider>
        <Form
          name="userinfo"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{
            username: "",
            firstname: "",
            lastname: "",
            remember: true,
          }}
          onFinish={console.log}
          onFinishFailed={console.error}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              { required: true, message: "Please input your firstname!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select a gender" allowClear>
              <Select.Option value="male">male</Select.Option>
              <Select.Option value="female">female</Select.Option>
              <Select.Option value="other">other</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <InputNumber min="0" max="100" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          <DevTool />
        </Form>
      </section>
      <footer style={{ textAlign: "center", margin: 32 }}>
        <Divider />
        DevTools for Ant Design Forms ©2023 Created by @justjavac.
      </footer>
    </div>
  );
}

export default App;
