import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";


const Layout = ({toggleTheme, isDarkMode}) => {
  return (
    <div className={styles.background}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <span style={{ color: "white" }}>Tune</span>
            <span style={{ color: "red" }}>IN</span>
          </Typography>
          <Button
            variant="outlined"
            onClick={toggleTheme}
            sx={{
              mt: 3,
              color: "text.primary",
              borderColor: "text.primary",
              "&:hover": {
                borderColor: "text.primary",
              },
            }}
          >
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Layout;

