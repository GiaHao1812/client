import { Avatar, Button, Input, Space } from "antd";
import { Notification, SearchNormal1 } from "iconsax-react";
import { color } from "../constants/color";

const HeaderComponent = () => {
  return (
    <div className="p-2 row bg-white">
      <div className="col">
        <Input
          placeholder="Search..."
          style={{
            borderRadius: 100,
            width: "50%",
          }}
          prefix={<SearchNormal1 className="text-muted" size={20} />}
        />
      </div>
      <div className="col text-right">
        <Space>
          <Button
            type="text"
            icon={<Notification size={22} color={color.gray600} />}
          />
          <Avatar
            src={
              "https://image.lag.vn/upload/news/23/02/23/anime-ta-muon-tro-thanh-chua-te-bong-toi-season-2-2_AWFD.jpg"
            }
            size={40}
          />
        </Space>
      </div>
    </div>
  );
};

export default HeaderComponent;
