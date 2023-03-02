import { ColorModeContext, useMode} from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import MainSidebar from "./scenes/global/MainSidebar";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import Team from "./scenes/team"; 


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MainSidebar/>
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/contacts" element={<Contacts/>}/>
              <Route path="invoices/" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              <Route path="/Calendar" element={<Calendar/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/bar" element={<Bar/>}/>
              <Route path="/pie"  element={<Pie/>}/>
              <Route path="/line" element={<Line/>}/>
              <Route path="/Geography" element={<Geography/>}/>
            </Routes>
          </main>
        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
