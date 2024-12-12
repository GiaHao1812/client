import React from "react";
import { Layout } from "antd";
import HomeScreen from "../screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ManageStore,
  Orders,
  ReportScreen,
  Suppliers,
  Inventories,
} from "../screens";
import { HeaderComponent, SiderComponent } from "../components/Index";

const { Content, Header, Footer, Sider } = Layout;

const MainRouter = () => {
  return (
    <BrowserRouter> 
      <Layout>
        <SiderComponent />
        <Layout>
          <HeaderComponent />
          <Content className="mt-2 mb-2 container">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/inventory" element={<Inventories />} />
              <Route path="/reports" element={<ReportScreen />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/manage-store" element={<ManageStore />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainRouter;
