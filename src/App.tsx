import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CodeSection from "./components/CodeSection";
import { Row, Col } from "antd";
import FormSection from "./components/FormSection";
import ChatWidgetLocal from "./components/ChatWidgetLocal";
import Badge from "./components/Badge";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Badge />
      <HeroSection />
      <Row className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center mb-20">
        <Col span={13}>
          <CodeSection />
        </Col>
        <Col span={11}>
          <FormSection />
        </Col>
      </Row>
      <HowItWorks />
      <Footer />
      <ChatWidgetLocal />
    </>
  );
}

export default App;
