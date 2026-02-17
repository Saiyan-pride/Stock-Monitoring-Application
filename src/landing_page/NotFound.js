import React from "react";

function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <h1>404 Not Found</h1>
        <p>
          We couldn’t find the page you were looking for. Visit{" "}
          <a href="/" style={{ textDecoration: "none" }}>
            Zerodha's home page
          </a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
