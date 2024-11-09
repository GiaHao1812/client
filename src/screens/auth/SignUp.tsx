import { Button, Card, Form, Input, message, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import handleAPI from "../../apis/handleAPI";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [form] = Form.useForm();

  const handleLogin = async (values: { email: string; password: string }) => {
    const api = `/auth/register`;

    setIsLoading(true);
    try {
      const res = await handleAPI(api, values, "post");
      console.log(res);
    } catch (error: any) {
      console.log(error);
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
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
              () => ({
                validator: (_, value) => {
                  if (value.length < 6) {
                    return Promise.reject(
                      new Error("Your password must be at least 6 characters")
                    );
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
          >
            <Input.Password
              placeholder="Enter your password"
              maxLength={100}
              type="email"
            />
          </Form.Item>
        </Form>

        <div className="mt-5 mb-3">
          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Regiser
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
