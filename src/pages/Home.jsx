import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import React from "react";
const { Header, Content, Footer } = Layout;

export default function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  return (
    <>
      {/* <div>Home 페이지 입니다.</div>
      <button onClick={handleClick}>go home</button>
      <br></br> */}
      {/* 링크.. */}
      {/* <Link to="/About">about</Link> */}
      {/* <Calendar /> */}
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            // items={new Array(2).fill(null).map((_, index) => {
            //   const key = index + 1;
            //   return {
            //     key,
            //     label: `nav ${key}`,
            //   };
            // })}
          />
          <div className="sign-btns">
            <Button className="sign-btn" type="primary">
              <Link to="/login"> Signin </Link>
            </Button>
            <Button className="sign-btn" type="primary">
              <Link to="/register"> Signup </Link>
            </Button>
          </div>
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">Content/ This is HOME</div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
