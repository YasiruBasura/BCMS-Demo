import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Employee from "./pages/Employees/Employee";
import Document from "./pages/documents/Document";
import Calendar from "./pages/calendar/Calendar";
import Meeting from "./pages/meetings/Meeting";
import Roles from "./pages/Roles_Responsibilities/Roles";
import CreateMeeting from "./pages/meetings/CreateMeeting";
import UpdateMeetings from "./pages/meetings/UpdateMeetings";
import ViewMeeting from "./pages/meetings/ViewMeeting";
import Risk from "./pages/risk/Risk";
import DocControl from "./pages/risk/DocControl";


function App() {
  return (
    <BrowserRouter>
    <Navbar />

      
      {/* <div className="flex gap-x-10"> */}
        {/* <div className="fixed z-10 top-20">
        <Sidebar /> 
        </div>        */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/document" element={<Document />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/meeting/createMeeting" element={<CreateMeeting />} />
          <Route path="/meeting/updateMeetings/:id" element={<UpdateMeetings />} />
          <Route path="/meeting/viewMeetings/:id" element={<ViewMeeting />} />
          <Route path="/risk" element={<Risk />} />
          <Route path ="/docControl" element = {<DocControl/>}/>
        </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
