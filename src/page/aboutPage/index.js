import React from "react";
import Body from "../../Component/Body/body";
import Header from "../../Component/Header/header";
import Menu from "../../Component/Menu/menu";
import { Table } from "reactstrap";
import { withRouter } from "react-router-dom";
import "./about.css";
class AboutPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div style={{ marginLeft: "40px", padding: "15px", fontSize: "20px" }}>
          <b>ĐỘI NGŨ LÀM DỰ ÁN</b>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Table style={{ marginLeft: "40px" }}>
              <thead>
                <tr style={{ backgroundColor: "grey" }}>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Nơi công tác</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Lưu Thị Thanh Ngân</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr style={{ backgroundColor: "#ddd" }}>
                  <th scope="row">2</th>
                  <td>Phạm Thị Hoa</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Nguyễn Thị Yên</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr style={{ backgroundColor: "#ddd" }}>
                  <th scope="row">4</th>
                  <td>Bùi Kim Huy</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Đỗ Linh Nam</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr style={{ backgroundColor: "#ddd" }}>
                  <th scope="row">6</th>
                  <td>Phạm Hiếu Trung</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Nguyễn Văn Tài</td>
                  <td>ĐH Bách Khoa Hà Nội</td>
                </tr>
                <tr style={{ backgroundColor: "#ddd" }}>
                  <th scope="row">8</th>
                  <td>Nhâm Gia Hoàng Anh</td>
                  <td>ĐH Hà Nội</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div
            className="col-md-6"
            style={{ paddingLeft: "50px", fontSize: "18px" }}
          >
            <p>
              <b>Liên hệ: 0123.456.789</b>
            </p>
            <p>
              <b>Email: tuvanluat@gmail.com</b>
            </p>
            <p>
              <b>Địa chỉ: số 1 Giải Phóng, Hai Bà Trưng, Hà Nội</b>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(AboutPage);
