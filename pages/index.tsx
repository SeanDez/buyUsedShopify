import {useState} from "react";
// import { Heading, Page, Card, Button, Tabs } from "@shopify/polaris";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "../components/NavBar";
import 'antd/dist/antd.css';


const Index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  
  return (
    <div>
      
      {/* MOBILE Nav Menu */}
      <NavBar />
      
      {/* state based views */}
    
    </div>
  );
};

export default Index;
