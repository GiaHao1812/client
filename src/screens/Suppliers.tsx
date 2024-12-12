import { Button, Space, Table, Typography } from "antd";
import { ColumnProps } from "antd/es/table";
import { Sort } from "iconsax-react";
import { color } from "../constants/color";
import { useState } from "react";
import { ToogleSupplier } from "../modals";
import { SupplierModel } from "../models/SupplierModals";

const { Title } = Typography;

const Suppliers = () => {
  const [isVisibleModalAddNew, setIsVisibleModalAddNew] = useState(false);

  const columns: ColumnProps<SupplierModel>[] = [];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={[]}
        title={() => (
          <div className="row">
            <div className="col">
              <Title level={5}>Suppliers</Title>
            </div>
            <div className="col text-right">
              <Space>
                <Button
                  type="primary"
                  onClick={() => setIsVisibleModalAddNew(true)}
                >
                  Add Supplier
                </Button>
                <Button icon={<Sort size={20} color={color.gray600} />}>
                  Filters
                </Button>
                <Button>Dowload All</Button>
              </Space>
              s
            </div>
          </div>
        )}
      />
      <ToogleSupplier
        visible={isVisibleModalAddNew}
        onClose={() => setIsVisibleModalAddNew(false)}
        onAddNew={(val) => console.log(val)}
      />
    </div>
  );
};

export default Suppliers;
