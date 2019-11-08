import {useState} from "react";
// import { Heading, Page, Card, Button, Tabs } from "@shopify/polaris";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "../components/NavBar";

const Index = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  
  return (
    <div>
      <CssBaseline />
      
      {/* MOBILE Nav Menu */}
      <NavBar />
      
      {/* state based views */}
    
    </div>
  );
};

export default Index;
