import React from "react";
import { Link } from "react-router-dom";

export default function AdminNavbar() {
  
  return (
    <>
      <div className=" bg-adminav">
        <div className=" container-fluid">
          <div className="d-flex justify-content-between w-100  align-items-center">
            <img src="Nyla-Logo.png" className="logo-width" alt="" />
            <div className="admin-side p-2 d-flex bg-white align-items-center justify-content-between  rounded-pill">
                          <i class="fa-solid fa-bars"></i>
                          <img src="pro.jpg" className="w-50 rounded-circle" alt="" />
            </div>
          </div>
        </div>
          </div>
          <div className="w-100 ">
              <div className="d-flex w-50 mx-auto pt-3 pb-3 justify-content-center tab-color text-white rounded-2">
                  <Link className="me-5 text-white text-decoration-none">Request</Link>
                  <Link className="me-5 text-white text-decoration-none">.All Hotels</Link>
                  <Link className="me-5 text-white text-decoration-none" to={"/addhotel"}>.Add Hotel</Link>
                  <Link className="me-5 text-white text-decoration-none" to={"/addroom"}>.Add Room</Link>
             </div>
          </div>
    </>
  );
}
