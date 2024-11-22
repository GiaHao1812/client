import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  message,
  Space,
  Typography,
} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import handleAPI from "../../apis/handleAPI";
import SocialLogin from "../../components/SocialLogin";
import { addAuth } from "../../redux/reducers/authReducer";
import { localDataNames } from "../../constants/appInfor";

const { Title, Paragraph, Text } = Typography;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleLogin = async (values: { email: string; password: string }) => {
    console.log(values);

    try {
      const res: any = await handleAPI("/auth/login", values, "post");
      message.success(res.message);
      res.data && dispatch(addAuth(res.data));

      if (isRemember) {
        localStorage.setItem(localDataNames.authData, JSON.stringify(res.data));
      }
    } catch (error: any) {
      message.error(error.message);
      console.log(error.message);
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
          <Title level={2}>Login into your account</Title>
          <Paragraph type="secondary">
            Welcome back, please login to your account to continue !!!
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
              type="password"
            />
          </Form.Item>
        </Form>

        <div className="row">
          <div className="col">
            <Checkbox
              checked={isRemember}
              onChange={(val) => setIsRemember(val.target.checked)}
            >
              Remember 30 days
            </Checkbox>
          </div>
          <div className="col text-right">
            <Link to="/">Forgot password ?</Link>
          </div>
        </div>

        <div className="mt-4 mb-3">
          <Button
            loading={isLoading}
            onClick={() => form.submit()}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Login
          </Button>
        </div>
        <SocialLogin isRemember={isRemember}/>
        <div className="mt-4 text-center">
          <Text type="secondary">Don't have an account ? </Text>
          <Link to="/sign-up">Sign up</Link>
        </div>
      </Card>
    </>
  );
};

export default Login;
