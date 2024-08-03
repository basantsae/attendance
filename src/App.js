// import logo from './logo.svg';
// import './App.css';
// import Navbar from './component/Navbar';
// import AdminDashboard from './pages/AdminDashboard';
// import Attendances from './pages/Attendences';
import NavSidbar from "./pages/NavSidbar";
import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavSidebar from './pages/NavSidebar'; // Adjust the import according to your file structure
import Navbar from './component/Navbar'; // Adjust the import according to your file structure
import Dashboard from './pages/AdminDashboard'; // Ensure this component exists
import Attendances from './pages/Attendences'; // Ensure this component exists
import Analytics from './pages/Analytics'; // Ensure this component exists
// import Areas from './Areas'; // Ensure this component exists
// import Shifts from './Shifts'; // Ensure this component exists
// import Calendar from './Calendar'; // Ensure this component exists
// import Users from './Users'; // Ensure this component exists
// import Settings from './Settings'; // Ensure this component exists
// import Profile from './Profile'; // Ensure this component exists
// import LogOut from './LogOut'; // Ensure this component exists


function App() {
  const [userName, setUserName] = useState("");
  const handleUserName = (name) => {
    setUserName(name);
  };

  const data = [
    { 
      name: "John Doe", 
      inDate: "2023-01-01", 
      inTime: "08:00", 
      outDate: "2023-01-01", 
      outTime: "17:00", 
      workHour: "8", 
      overTime: "0", 
      lateTime: "0", 
      earlyOutTime: "0", 
      inLocation: "Office A", 
      outLocation: "Office A" 
    },
    { 
      name: "Jane Doe", 
      inDate: "2023-01-02", 
      inTime: "08:30", 
      outDate: "2023-01-02", 
      outTime: "17:00", 
      workHour: "7.5", 
      overTime: "0.5", 
      lateTime: "0.5", 
      earlyOutTime: "0", 
      inLocation: "Office B", 
      outLocation: "Office B" 
    },
    // Add more sample data as needed
  ];
  
  // Aggregating the data
  const aggregatedData = data.reduce((acc, curr) => {
    const date = curr.inDate;
    if (!acc[date]) {
      acc[date] = { date, lateTime: 0, overtime: 0, earlyCheckOut: 0 };
    }
    acc[date].lateTime += parseFloat(curr.lateTime);
    acc[date].overtime += parseFloat(curr.overTime);
    acc[date].earlyCheckOut += parseFloat(curr.earlyOutTime);
    return acc;
  }, {});
  
  const chartData = Object.values(aggregatedData);

  return (
    <Router>
    <div className="flex h-screen">
      <NavSidbar/>
    <div className="flex-1 flex flex-col">
      <Navbar  onUserName={handleUserName}  />
      <main className="flex-1 bg-gray-100">
        {/* <AdminDashboard userName={userName}/> */}
        {/* <Attendances  data={Data} rowCount={Data.length}/> */}
        <Routes>
              <Route path="/" element={<Dashboard userName={userName} />} />
              <Route path="/attendances" element={<Attendances data={data}/>} />
              <Route path="/analytics" element={<Analytics data={chartData}/>} />
              {/* <Route path="/areas" element={<Areas />} />
              <Route path="/shifts" element={<Shifts />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<LogOut />} /> */}
              {/* Add more routes as needed */}
            </Routes>
      </main>
    </div>
  </div>
  </Router>
  );
}

export default App;
