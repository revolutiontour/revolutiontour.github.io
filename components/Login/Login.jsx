import React, { useEffect } from "react";
import { Form, Input, Button, Radio } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { loginMember } from "../../store/actions/member";
import styles from "./Login.module.css";
import { wrapper } from "../../store";
import { connect } from "react-redux";
import Router from "next/router";
import { TourifyLogo } from "../shared/icons";

const Login = ({member,success}) => {
  // const member = useSelector(state => state.member)
  const { push } = useRouter();
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
    <div className="mx-auto my-5 p-5 container w-50 bg-white rounded">
      <div className="row">
        <div className="col-12">
          <p className="text-center"><TourifyLogo width="85"/></p>
          <h4 className={styles.h1Style}>TTR Operator</h4>
        </div>
        <div className="col-12">
          <Form
            name="basic"
            layout="vertical"
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
              <Input placeholder="Username Admin" />
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
              <Input.Password placeholder="Password" />
            </Form.Item>

            {/* <Form.Item
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
            </Form.Item> */}
            <Form.Item
            >
              <Button type="primary" htmlType="submit">
                Masuk
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
