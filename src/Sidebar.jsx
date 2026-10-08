import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ sidebarOpen }) {
    return (
        <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>

            <div className="logo">
                <b>M</b>

                <span>
                    MyPatientHUB<br />
                    <small>For better healthcare</small>
                </span>
            </div>

            <nav>

                <Link to="/">
                    <i className="fa-solid fa-table-columns"></i>
                    Dashboard
                </Link>

                <Link to="/appointments">
                    <i className="fa-solid fa-calendar-days"></i>
                    Appointments
                </Link>

                <Link to="/find-doctor">
                    <i className="fa-solid fa-user-doctor"></i>
                    Find Doctor
                </Link>

                <Link to="/find-clinic">
                    <i className="fa-solid fa-hospital"></i>
                    Find Clinic
                </Link>

                <Link to="/chat">
                    <i className="fa-solid fa-comments"></i>
                    Chat
                </Link>

                <Link to="/find-marketplace">
                    <i className="fa-solid fa-store"></i>
                    Find MarketPlace
                </Link>

                <Link to="/find-pharmacy">
                    <i className="fa-solid fa-pills"></i>
                    Find Pharmacy
                </Link>

                <Link to="/dependents">
                    <i className="fa-solid fa-clipboard-list"></i>
                    My Dependents
                </Link>

                <Link to="/account">
                    <i className="fa-solid fa-user-gear"></i>
                    My Account
                </Link>

                <Link to="/settings">
                    <i className="fa-solid fa-screwdriver-wrench"></i>
                    Settings
                </Link>

            </nav>

            <div className="help">
                <i className="fa-solid fa-question"></i>
            </div>

        </aside>
    );
}

export default Sidebar;