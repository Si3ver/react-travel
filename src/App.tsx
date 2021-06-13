import { Col, Row } from "antd";
import { Header, Footer, SideMenu } from "./components";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <div style={{ background: "blue" }}>走马灯</div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
