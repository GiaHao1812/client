import { Button, Card, Form, Input, message, Space, Typography } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import handleAPI from "../../apis/handleAPI";
import SocialLogin from "../../components/SocialLogin";
import { localDataNames } from "../../constants/appInfor";
import { addAuth } from "../../redux/reducers/authReducer";

const { Title, Paragraph, Text } = Typography;

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const handleLogin = async (values: { email: string; password: string }) => {
		const api = `/auth/register`;

		setIsLoading(true);
		try {
			
			const res: any = await handleAPI(api, values, 'post');
			if (res.data) {
				message.success(res.message);
				dispatch(addAuth(res.data));
			}
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
            Start your 30 days free trial now !!!
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
            name="name"
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
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email !!!",
              },
            ]}
          >
            <Input placeholder="Enter your email" allowClear maxLength={100} />
          </Form.Item>

          <Form.Item
            name="password"
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
              type="password"
            />
          </Form.Item>
        </Form>

        <div className="mt-5 mb-3">
          <Button
            loading={isLoading}
            onClick={form.submit}
            type="primary"
            style={{ width: "100%" }}
            size="large"
          >
            Register
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
