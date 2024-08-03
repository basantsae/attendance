import React from "react";
import './admindash.css'
import user from '../imgs/22e15735e2218c68eec126b974d461fb.png'
import late from '../imgs/25f8d54bdb115b0484c93ba6f658b163.png'
import attendanc from '../imgs/532e142b2a36823c0fee63d79f1011b1.png'
import area from '../imgs/20fff448a721785343299b8b5573021b.png'
import event from '../imgs/da1c52b6551adb948a398fbcef2932ae.png'
import { ArrowRight} from "lucide-react";



function AdminDashboard({ userName }){
  return(
    <>
    <div className="content p-4">
      <div className="content-header">
          <h1>Dashboard</h1>
      </div>

      <div className="content-welcome p-4">
        <p>Hi <span>{ userName }</span>,and welcome😃</p>
      </div>

    <div className="cards">
        <div className="card" style={{backgroundColor:"#00C696"}}>
          <div className="user-card">
            <div className="inner">
              <div>
                  <h1>0</h1>
                  <h2>Total User</h2>
              </div>
              <div className="icon">
                <img src={user} alt="" style={{width:"111px", height:"111px"}} />
              </div>
            </div>
            <a className="link" href="/#">
              <div className="more-details" style={{backgroundColor:"#008668"}}>
                  More Info
                  <div style={{background: '#FFFFFF',borderRadius: '32px',}} >
                        <ArrowRight color="#008668" size={"20px"}/>
                  </div>
              </div>
            </a>

          </div>
        </div>

        <div className="card" style={{backgroundColor:"#1070DE"}}>
          <div className="late-card">
          <div className="inner">
              <div>
                  <h1>0</h1>
                  <h2>Total Come late</h2>
              </div>
              <div className="icon">
                <img src={late} alt="" style={{width:"111px", height:"111px"}} />
              </div>
            </div>
            <a className="link" href="/#">
              <div className="more-details" style={{backgroundColor:"#001686"}}>
                  More Info
                  <div style={{background: '#FFFFFF',borderRadius: '32px',}} >
                        <ArrowRight color="#001686" size={"20px"}/>
                  </div>
              </div>
            </a>
          </div>
        </div>

        <div className="card" style={{backgroundColor:"#D90202"}}>
          <div className="attendanc-card">
          <div className="inner">
              <div>
                  <h1>0</h1>
                  <h2>Total Attendances</h2>
              </div>
              <div className="icon">
                <img src={attendanc} alt="" style={{width:"111px", height:"111px"}} />
              </div>
            </div>
            <a className="link" href="/#">
              <div className="more-details" style={{backgroundColor:"#860000"}}>
                  More Info
                  <div style={{background: '#FFFFFF',borderRadius: '32px',}} >
                        <ArrowRight color="#860000" size={"20px"}/>
                  </div>
              </div>
            </a>
          </div>
        </div>

        <div className="card" style={{backgroundColor:"#7F4A37"}}>
          <div className="areas-card">
          <div className="inner">
              <div>
                  <h1>0</h1>
                  <h2>Total Areas</h2>
              </div>
              <div className="icon">
                <img src={area} alt="" style={{width:"111px", height:"111px"}} />
              </div>
            </div>
            <a className="link" href="/#">
              <div className="more-details" style={{backgroundColor:"#601F09"}}>
                  More Info
                  <div style={{background: '#FFFFFF',borderRadius: '32px',}} >
                        <ArrowRight color="#601F09" size={"20px"}/>
                  </div>
              </div>
            </a>
          </div>
        </div>
    </div>

    <div className="events">
      <div className="event-title">
        <img src={event} alt="" style={{width:"30px",height:"30px"}}/>
        <h1>Events this month</h1>
      </div>
      <hr/>
      <div className="event-table">
        <p style={{marginBottom:"20px"}}>There is no Event this month.</p>

      </div>
    </div>

    </div>
    </>
  )
}

export default AdminDashboard;