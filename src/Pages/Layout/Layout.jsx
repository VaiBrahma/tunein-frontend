import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Layout = () => {
  return (
    <div className={styles.background}>
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <span style={{ color: 'white' }}>Tune</span>
                    <span style={{ color: 'red' }}>IN</span>
                </Typography>
            </Toolbar>
        </AppBar>
        <Outlet/>
    </div>
  );
};

export default Layout;
