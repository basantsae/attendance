import React from "react";
import { useState ,useEffect } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



function Attendances({ data}){

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [rowsToShow, setRowsToShow] = useState(10);
    const [showDropdown, setShowDropdown] = useState(false);
  
    useEffect(() => {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const newFilteredData = sortedData.filter(item => {
        const inDate = new Date(item.inDate);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        const matchesDateRange = (!start || inDate >= start) && (!end || inDate <= end);
        const matchesSearchTerm = Object.values(item).some(value =>
          String(value).toLowerCase().includes(lowerCaseTerm)
        );
        return matchesDateRange && matchesSearchTerm;
      });
      setFilteredData(newFilteredData);
    }, [searchTerm, startDate, endDate, sortedData]);
  
    const handleReload = () => {
        setSearchTerm('');
        setStartDate('');
        setEndDate('');
        setRowsToShow(10);
        setFilteredData(data);
        setSortedData(data);
      };
  
    const handlePrint = () => {
      window.print();
    };
  
    const handlePdfDownload = () => {
      const input = document.getElementById('table-section');
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save('data.pdf');
      });
    };
  
    const handleExcelDownload = () => {
      alert('Excel download logic not implemented');
      // You can implement your Excel download logic here using a suitable library
    };
  
    const convertDataToArray = (data) => {
      if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
        const headers = Object.keys(data[0]);
        const rows = data.map(row => headers.map(header => row[header]));
        return [headers, ...rows];
      }
      return data;
    };
  
    const csvData = convertDataToArray(filteredData);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    const handleRowsToShow = (numRows) => {
      setRowsToShow(numRows);
      setShowDropdown(false);
    };
    return(
        <>
        <div className="content p-4">
            <div className="content-header">
                <h1>Attendances</h1>
            </div>
            <div className="attendance-content">
                <div className="attendance-title">
                    <h1>
                        List
                    </h1>
                </div>
                <hr/>

                <div className="date-range-picker">
                    <div>
                        <label htmlFor="fromDate">From Date:</label>
                        <input 
                        type="date" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                        style={{border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>
                    <div>
                        <label htmlFor="toDate">To Date:</label>
                        <input 
                        type="date" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                        style={{border: '1px solid #ccc', borderRadius: '5px' }}
                    />
                    </div>
                </div>

                <hr/>

                <div className="attendance-file">
                        <div id="download-section">
                                <button onClick={handleReload}>Reload</button>
                                <div style={{ marginLeft: '10px', position: 'relative' }}>
                                <button style={{ backgroundColor: '#fff',color:"#000"}} onClick={toggleDropdown}>{`Show ${rowsToShow} rows`}</button>
                                {showDropdown && (
                                    <ul style={{ position: 'absolute', top: '100%', left:"10px", backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', listStyle: 'none',cursor:"pointer" }}>
                                    <li onClick={() => handleRowsToShow(10)}>Show 10 rows</li>
                                    <li onClick={() => handleRowsToShow(20)}>Show 20 rows</li>
                                    <li onClick={() => handleRowsToShow(filteredData.length)}>Show all rows</li>
                                    </ul>
                                )}
                                </div>
                                <div style={{ display: 'flex'}}>
                                    <CSVLink data={csvData} filename={"data.csv"}>
                                    <button>CSV</button>
                                    </CSVLink>
                                    <button onClick={handlePdfDownload}>PDF</button>
                                    <button onClick={handlePrint}>Print</button>
                                    <button onClick={handleExcelDownload}>Excel</button>
                                </div>
                        </div>
                            <input 
                            type="text" 
                            placeholder="Search..." 
                            value={searchTerm} 
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            style={{ padding: '10px', width: '200px', border: '1px solid #ccc', borderRadius: '5px' }}
                            />
                </div>

                <hr/>

                <div className="attendance-table">
                    <table border="1" style={{ width: '100%', marginTop: '20px' }}>
                        <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>In Date</th>
                            <th>In Time</th>
                            <th>Out Date</th>
                            <th>Out Time</th>
                            <th>Work Hour</th>
                            <th>Over Time</th>
                            <th>Late Time</th>
                            <th>Early Out Time</th>
                            <th>In Location</th>
                            <th>Out Location</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredData.length === 0 ? (
                            <tr>
                            <td colSpan="12" style={{ textAlign: 'center' }}>No data available in table</td>
                            </tr>
                        ) : (
                            filteredData.slice(0, rowsToShow).map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.inDate}</td>
                                <td>{item.inTime}</td>
                                <td>{item.outDate}</td>
                                <td>{item.outTime}</td>
                                <td>{item.workHour}</td>
                                <td>{item.overTime}</td>
                                <td>{item.lateTime}</td>
                                <td>{item.earlyOutTime}</td>
                                <td>{item.inLocation}</td>
                                <td>{item.outLocation}</td>
                            </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        </>
    )
}

export default Attendances;