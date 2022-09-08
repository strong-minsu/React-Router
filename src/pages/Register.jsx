import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const style = {
  padding: "20px",
  width: "500px",
  border: "solid 2px #1890ff",
};
const sort = {
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
};

const Register = () => {
  // const [popup, setPopup] = useState(false);
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const Finish = (values) => {
    // console.log("Received values of form: ", values);
    // fetch("http://192.168.56.1:8080/register", {
    //   method: "POST",
    //   body: JSON.stringify(values),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log("결과: ", result));

    let data = {
      userId: values.nickname,
      password: values.password,
      email: values.email,
    };
    axios
      .post("http://localhost:8080/register", JSON.stringify(data))
      .then(function (response) {
        console.log("응답!");
      })
      .catch(function (error) {
        console.log("오류!");
      });

    // fetch("http://localhost:8080/register", {
    //   method: "post",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   // 응답이 돌아오면 실행
    //   // http 응답 코드에 따른 메세지 출력
    //   const msg = response.ok ? "댓글이 등록되었습니다." : "댓글 등록 실패..";
    //   alert(msg);

    //   // 현재 페이지 새로고침
    //   window.location.reload();
    // });
    navigate("/login");
  };

  return (
    <div style={sort}>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={Finish}
        scrollToFirstError
        style={style}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="intro"
          label="Intro"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
          {...tailFormItemLayout}
        >
          {/* 주소 수정하기 */}
          <Checkbox>
            I have read the <a href="/">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
