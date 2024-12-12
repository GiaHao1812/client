import { Layout, Menu, MenuProps, Typography } from "antd";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";
import { Box, Chart, ProfileCircle } from "iconsax-react";
import { appInfor } from "../constants/appInfor";
import { color } from "../constants/color";

const { Sider } = Layout;
const { Text } = Typography;
type MenuItem = Required<MenuProps>["items"][number];

const SiderComponent = () => {
  const items: MenuItem[] = [
    {
      key: "Dashboard",
      label: <Link to={"/"}>Dashboard</Link>,
      icon: <GoHome size={20} />,
    },
    {
      key: "Inventory",
      label: <Link to={"/inventory"}>Inventory</Link>,
      icon: <MdOutlineInventory2 size={20} />,
    },
    {
      key: "Reports",
      label: <Link to={"/reports"}>Report</Link>,
      icon: <Chart size={20} />,
    },
    {
      key: "Suppliers",
      label: <Link to={"/suppliers"}>Suppliers</Link>,
      icon: <ProfileCircle size={20} />,
    },
    {
      key: "Orders",
      label: <Link to={"/orders"}>Orders</Link>,
      icon: <Box size={20} />,
    },
    {
      key: "Managestore",
      label: <Link to={"/manage-store"}>Manage Store</Link>,
      icon: <FaRegRectangleList size={20} />,
    },
  ];
  return (
    <Sider width={260} theme="light" style={{ height: "100vh" }}>
      <div className="d-flex align-items-center p-2 " style={{ gap: "0.5rem" }}>
        <img src={appInfor.logo} alt="kanban logo" width={48} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: color.primary500,
            margin: 0,
          }}
        >
          {appInfor.title}
        </Text>
      </div>
      <Menu items={items} theme="light" />
    </Sider>
  );
};

export default SiderComponent;
