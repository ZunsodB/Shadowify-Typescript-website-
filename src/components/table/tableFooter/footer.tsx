import { Pagination } from "antd";

const Footer = () => {
  const handlePageSizeChange = (current: number, pageSize: number) => {
    console.log(`Page size changed to: ${pageSize}`);
  };

  const handlePageChange = (page: number) => {
    console.log(`Page changed to: ${page}`);
  };

  return (
    <div className="flex justify-end items-center p-4 bg-white">
      <Pagination
        size="small"
        total={69}
        defaultCurrent={1}
        defaultPageSize={10}
        pageSizeOptions={["10", "20", "50", "100"]}
        showSizeChanger
        onShowSizeChange={handlePageSizeChange}
        onChange={handlePageChange}
        className="custom-pagination"
        showTotal={(total) => `Нийт ${total} бичлэг`}
      />
    </div>
  );
};

export default Footer;
