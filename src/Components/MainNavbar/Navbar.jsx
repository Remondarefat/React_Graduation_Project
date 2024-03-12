import React from "react";

export default function Navbar() {
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

        </>
);
}
