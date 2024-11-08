import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };
  return (
    <>
      <Card>
        <div className="text-center">
          <img
            src="/LogoKanban.png"
            alt="Kanban Logo"
            style={{
              width: 65,
              height: 75,
            }}
          />
          <Title level={2}>Create your new account</Title>
          <Paragraph type="secondary">
            Start your 30days free trial now !!!
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={isLoading}
          size="large"
        >
          <Form.Item
            name={"name"}
            label="Name"
            rules={[
              {
                required: true,
                message: "Please enter your name !!!",
              },
            ]}
          >
            <Input placeholder="Enter your name" allowClear />
          </Form.Item>
          <Form.Item
            name={"email"}
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email !!!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email"
              allowClear
              maxLength={100}
              type="email"
            />
          </Form.Item>

          <Form.Item
            name={"password"}
            label="Password"
            rules={[
              {
                required: true,
                message: "Please enter your password !!!",
              },
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              maxLength={100}
              type="email"
            />
          </Form.Item>
        </Form>

        <div className="mt-4 mb-3">
          <Button
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin />
        <div className="mt-4 text-center">
          <Text type="secondary">Already have an account ? </Text>
          <Link to="/">Login</Link>
        </div>
      </Card>
    </>
  );
};

export default SignUp;
