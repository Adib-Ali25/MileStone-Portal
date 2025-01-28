import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Avatar,
  Box,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  DashboardOutlined,
  Receipt,
  Inventory,
  People,
  CalendarMonth,
  InsertDriveFile,
  Phone,
  TrendingUpOutlined,
  PendingOutlined,
} from "@mui/icons-material";
import "./SideBar.css";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [openMenu, setOpenMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setOpenMenu(menu === openMenu ? "" : menu); // Toggle submenu if applicable
  };

  return (
    // <div className="d-none d-md-block">
      <Box className="sidebar">
        {/* Profile Section */}
        <Box className="profile-section">
          <Avatar
            className="profile-avatar"
            alt="Gavano"
            src="/static/images/avatar/1.jpg"
          />
          <Box>
            <h4 className="profile-name">Gavano</h4>
            <p className="profile-role">Manager</p>
          </Box>
        </Box>

        <List>
          {/* Dashboard */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Dashboard" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Dashboard")}
          >
            <ListItemIcon>
              <DashboardOutlined className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          {/* Finance */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Finance" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Finance")}
          >
            <ListItemIcon>
              <Receipt className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Finance" />
          </ListItem>

          {/* Quotation */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Quotation" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Quotation")}
          >
            <ListItemIcon>
              <InsertDriveFile className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Quotation" />
            {openMenu === "Quotation" ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openMenu === "Quotation"} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem className="submenu-item">
                <ListItemText primary="Create" />
              </ListItem>
              <ListItem className="submenu-item">
                <ListItemText primary="View" />
              </ListItem>
              <ListItem className="submenu-item">
                <ListItemText primary="Template" />
              </ListItem>
            </List>
          </Collapse>

          {/* Products */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Products" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Products")}
          >
            <ListItemIcon>
              <Inventory className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

          {/* Sales */}
          <ListItem
            className={`menu-item ${activeMenu === "Sales" ? "selected" : ""}`}
            onClick={() => handleMenuClick("Sales")}
          >
            <ListItemIcon>
              <TrendingUpOutlined className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Sales" />
          </ListItem>

          {/* Employees */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Employees" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Employees")}
          >
            <ListItemIcon>
              <People className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItem>

          {/* Other */}
          <ListItem
            className={`menu-item ${activeMenu === "Other" ? "selected" : ""}`}
            onClick={() => handleMenuClick("Other")}
          >
            <ListItemIcon>
              <PendingOutlined className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Other" />
          </ListItem>

          {/* Tele-Calling */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Tele-Calling" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Tele-Calling")}
          >
            <ListItemIcon>
              <Phone className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Tele-Calling" />
          </ListItem>

          {/* Calendar */}
          <ListItem
            className={`menu-item ${
              activeMenu === "Calendar" ? "selected" : ""
            }`}
            onClick={() => handleMenuClick("Calendar")}
          >
            <ListItemIcon>
              <CalendarMonth className="menu-icon" />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
        </List>
      </Box>
    // </div>

    
  );
};
export default Sidebar;
