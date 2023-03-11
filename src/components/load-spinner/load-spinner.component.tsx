// import React, { useState } from "react";
import "./load-spinner.styles.css";

const Loading = () => {
    return (
        <>
            <div className="spinner-square">
                <div className="square-1 square"></div>
                <div className="square-2 square"></div>
                <div className="square-3 square"></div>
            </div>
        </>
    );
}

export default Loading;