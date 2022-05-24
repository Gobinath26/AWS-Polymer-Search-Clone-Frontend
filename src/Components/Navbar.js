import { Link } from "react-router-dom";
import logo from "../images/aws.png";

export default function Navbar() {

  return (
    <nav class="navbar navbar-expand-lg bg-white border text-black">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          <img src={logo} alt="brandimage" width="60" height="50" />
          Everything AWS
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-lg-5 mb-2 mb-lg-0 gap-lg-5 ">
            <li class="nav-item">
              <Link to="/" class="nav-link" aria-current="page" style={{ fontSize: "18px",fontWeight:500 }}>
                Search & Query
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link" style={{ fontSize: "18px",fontWeight:500 }}>
                Visualize
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/" class="nav-link">
                <i
                  class="fa-solid fa-lightbulb"
                  style={{ color: "orange" }}
                ></i>
              </Link>
            </li>
            {/* Refresh */}
            <li class="nav-item">
              <Link to="/" class="nav-link">
                <i
                  class="fa-solid fa-arrow-rotate-right"
                  style={{ color: "blue" }}
                ></i>
              </Link>
            </li>
            {/* Dropdown */}
            <li class="nav-item dropdown mt-2">
              <button
                class="nav-link dropdown-toggle btn btn-outline-primary text-dark btn-sm"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More Sites
              </button>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="https://flixgem.com/?utm_source=aws">
                  <i class="fa-solid fa-gem"  style={{ color: "blue",fontSize:"12px" }}> FlixGem</i>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="https://interviewgeni.us/?utm_source=aws">
                  <i class="fa-solid fa-lightbulb" style={{ color: "orange",fontSize:"12px" }}> InterviewGenius</i>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link btn btn-secondary btn-sm ms-lg-4 text-dark mt-2" style={{fontWeight:500}} href="https://www.polymersearch.com/?utm_source=aws">Built with Polymer</a>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
  );
}

