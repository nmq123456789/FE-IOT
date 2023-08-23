import React from "react";
import "../css/Home.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Home() {

    const data = [
        { name: 'Tháng 1', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Tháng 2', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Tháng 3', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Tháng 4', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Tháng 5', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Tháng 6', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Tháng 7', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <div className="wrapper">
            <aside id="sidebar">
                <div className="h-100">
                    <div className="sidebar-logo">
                        <a href="#">N.P.Quân</a>
                    </div>
                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link">
                                <i className="bi bi-gear-wide-connected"></i>{" "}
                                DASHBOARDS
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link ">
                                <i className="bi bi-person-circle"></i>{" "}
                                USER PROFILE
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="main">
                <nav className="navbar navbar-expand px-3 border-bottom">
                    <button className="btn" type="button" data-bs-theme="dark">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <main className="content px-3 py-2">
                    <div className="container-fluid">
                        <div className="row mt-4">
                            <div className="col-3">
                                <div className="border border-danger w-11/12">
                                    <div className=" d-flex justify-content-between border-bottom border-warning w-11/12 ml-2 mt-2 pb-2">
                                        <div className="col-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-thermometer-sun" viewBox="0 0 16 16">
                                                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5z" />
                                                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1zm5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0zM8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5zM12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5zm-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708zM8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" />
                                            </svg>
                                        </div>
                                        <div className="col-8">
                                            <p>Number</p>
                                            <span className="text-2xl">150GB</span>
                                        </div>
                                    </div>
                                    <div className="m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="border border-danger w-11/12">
                                    <div className=" d-flex justify-content-between border-bottom border-warning w-11/12 ml-2 mt-2 pb-2">
                                        <div className="col-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                                            </svg>
                                        </div>
                                        <div className="col-8">
                                            <p>Number</p>
                                            <span className="text-2xl">150GB</span>
                                        </div>
                                    </div>
                                    <div className="m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar-heart" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5ZM1 14V4h14v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Zm7-6.507c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="border border-danger w-11/12">
                                    <div className=" d-flex justify-content-between border-bottom border-warning w-11/12 ml-2 mt-2 pb-2">
                                        <div className="col-8">
                                            Hình cái quạt
                                        </div>
                                        <div className="col-8">
                                            <p>Number</p>
                                            <span className="text-2xl">150GB</span>
                                        </div>
                                    </div>
                                    <div className="m-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                                            <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z" />
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="border border-danger w-11/12">
                                    <div className=" d-flex justify-content-between border-bottom border-warning w-11/12 ml-2 mt-2 pb-2">
                                        <div className="col-8">
                                            Hình cái quạt
                                        </div>
                                        <div className="col-8">
                                            <p>Number</p>
                                            <span className="text-2xl">150GB</span>
                                        </div>
                                    </div>
                                    <div className="ml-2">
                                        Chữ đb
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5 border border-danger">
                            <div className="row mt-3 d-flex justify-content-between mb-3">
                                <div className="col-7 border border-danger text-center ml-5"> Biểu đồ
                                    <LineChart width={600} height={300} data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                                    </LineChart>
                                </div>
                                <div className="col-4 border border-danger text-center">DASHBOARDS</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home;
