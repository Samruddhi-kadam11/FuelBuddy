
import React, { useState, useRef, useContext, useEffect} from 'react'

import Navbar from '../Navbar'
import creditContext from '../../context/credits/creditContext';
import { Link, useLocation, useHistory } from "react-router-dom";
import PoSidebar from '../Sidebar/PoSidebar';







const Transactionsto = () => {
  const context = useContext(creditContext);
  const {handleToggle,toggle,alltr,getalltr}=context;

   
    useEffect(()=>{
        getalltr();
    }, []);

    const ref = useRef(null)
    const [openModal, setOpenModal] = useState(false);


    const handleModal = () => {
        setOpenModal(true);
    }
    return (
        <>
            <Navbar />
            <div className="d-flex" id="wrapper">
                {/* {toggle && <div style={{ backgroundColor: "#3282B8" }} >
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"></i>FuelBuddy</div>
                    <div className="list-group list-group-flush my-3">
                        <a href="/" className="list-group-item list-group-item-action  second-text active"><i
                            className="fas fa-tachometer-alt me-2"></i>Dashboard</a>
                        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                            className="fas fa-project-diagram me-2"></i>Customers</a>
                        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                            className="fas fa-paperclip me-2"></i>Daily Transactions</a>
                        <a href="/" className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                            className="fas fa-chart-line me-2"></i>About</a>


                        <a href="/" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                            className="fas fa-power-off me-2"></i>Logout</a>
                    </div>
                </div>} */}
                <PoSidebar/>

                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-align-left primary-text fs-4 me-3" onClick={handleToggle} id="menu-toggle"></i>
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        </div>
                    </nav>

                    <div className="container-fluid px-4">


                        <div className="row my-5">
                            <h3 className="fs-4 mb-3">Transactions</h3>
                            <div className="col">
                                <div class="d-flex">

                                    <div className="row g-3 my-2">
                                        {/* Search Bar */}
                                        <div className="input-group">

                                            <div className="form-outline" >
                                                <input type="search" placeholder="Search Bar" id="form1" className="form-control" />
                                            </div>
                                            <button type="button" className="btn btn-primary">
                                                <i className="fas fa-search"></i>
                                            </button>

                                        </div>
                                    </div>
                                    <div class="m-auto">
                                        <select>

                                            <option value="Daliy">Daliy</option>

                                            <option value="Last 7 days">Last 7 days</option>

                                            <option value="Last  1 Month">Last 1 Month</option>
                                            <option value="YTD">YTD</option>

                                        </select>
                                    </div>

                                    

                                </div>
                                <table className="table bg-white rounded shadow-sm  table-hover mt-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">Transaction ID</th>
                                            <th scope="col">Customer Name</th>
                                            <th scope="col">Vehicle Number</th>
                                            <th scope="col">Credit Amount</th>
                                            <th scope="col">Debit Amount</th>
                                            <th scope="col">Amount Due</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            alltr.length>0 &&
                                            alltr.map((item) => {
                                                return(
                                                    <tr>
                                                    <td>{item?.transaction_no}</td>
                                                    <td>{item?.vehicle_owner?.name}</td>
                                                    <td>{item?.vehicle_no}</td>
                                                    <td>{item?.credit}</td>
                                                    <td>{item?.debit}</td>
                                                    <td>{item?.amount_due}</td>
                                                    <td className={item.status==='delivered'?"table-success":"table-danger"}>{item.status==='delivered'?'Delivered':'Pending'}</td>

                                                </tr> 
                                                );
                                            })
                                        }
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Transactionsto
