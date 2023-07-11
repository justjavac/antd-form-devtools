/* eslint-disable no-console */
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
} from 'antd';

import { DevTool } from '../../src/DevTool';

const { Title, Paragraph } = Typography;

function App() {
  return (
    <>
      <Typography style={{ marginTop: 40 }}>
        <Title style={{ textAlign: 'center' }}>
          DevTools for Ant Design Forms
        </Title>
        <Paragraph style={{ textAlign: 'center' }}>
          A Powerfull DevTools to help debug Ant Design Forms.
        </Paragraph>
      </Typography>
      <Paragraph style={{ textAlign: 'center' }}>
        <Image
          width={600}
          src="/screen.png"
          alt="DevTools for Ant Design Forms"
          preview={false}
          style={{
            boxShadow: '6px 6px 16px 6px rgba(0, 0, 0, 0.08)',
            borderRadius: 8,
          }}
        />
      </Paragraph>
      <Divider style={{ marginTop: 40 }}>Example</Divider>
      <Form
        name="userinfo"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: 'auto' }}
        initialValues={{
          username: '',
          firstname: '',
          lastname: '',
          remember: true,
        }}
        onFinish={console.log}
        onFinishFailed={console.error}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Firstname"
          name="firstname"
          rules={[{ required: true, message: 'Please input your firstname!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Lastname"
          name="lastname"
          rules={[{ required: true, message: 'Please input your lastname!' }]}
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
          rules={[{ required: true, message: 'Please input your age!' }]}
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
    </>
  );
}

export default App;
