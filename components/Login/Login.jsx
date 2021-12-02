import React, { useEffect } from "react";
import { Form, Input, Button, Radio } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { loginMember } from "../../store/actions/member";
import styles from "./Login.module.css";
import { wrapper } from "../../store";
import { connect } from "react-redux";
import Router from "next/router";

const Login = ({member,success}) => {
  console.log(member);
  // const member = useSelector(state => state.member)
  const router = useRouter();
  const dispatch = useDispatch();

  //memakai useSelector untuk mengambil state dari redux
  // const member = useSelector(state => state.member)
  //fungsi submit button login
  const onFinish = (values) => {
    console.log(values);
    const { username, password } = values;

    dispatch(loginMember(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  // useEffect(() => {
  //   if (member.success) {
  //     Router.push("/");
  //   }
  // }, []);
  // console.log(member)
  return (
    <div className="mx-auto my-3 container">
      <div className="row">
        <div className="col-12">
          <h1 className={styles.h1Style}>LOGIN</h1>
        </div>
        <div className="col-12">
          <Form
            name="basic"
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 16
            }}
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!"
                }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="TourId"
              name="tourId"
              rules={[
                {
                  required: true,
                  message: "Please input tourId!"
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="isLeader"
              wrapperCol={{
                offset: 6,
                span: 16
              }}
            >
              <Radio.Group>
                <Radio value={0}>Participant</Radio>
                <Radio value={1}>Leader</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 6,
                span: 16
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps(ctx) {
//   const {success} = await member
//   return {
//     props: {success}, // Will be passed to the page component as props
//   }
// }
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {

//   // if (!store.getState().placeholderData) {
//   //   store.dispatch(loadData())
//   //   store.dispatch(END)
//   // }
//   console.log(store.getState().member)

//   await store.sagaTask.toPromise()
// })



export default Login;
// export default connect(state => state)(Login);
