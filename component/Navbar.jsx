import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import "./navbar.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { InfoContext } from "../src/App";
function Navbar({ correntuser }) {
  const info = React.useContext(InfoContext);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  function handleOpen2() {
    if (correntuser) {
      info.setCorrentuser();
    } else {
      setOpen2(true);
    }
  }
  function handleClose2() {
    setOpen2(false);
  }
  return (
    <div className="bodynavbar">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Register handleClose={handleClose} />
          </Box>
        </Modal>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Login handleClose2={handleClose2} />
          </Box>
        </Modal>
      </div>
      <header className="headernavbar">
        <Link to="/">
          <h1 className="logo">
            <p>gym rat</p>
          </h1>
        </Link>

        <ul className="main-nav">
          {correntuser && (
            <Link to="/pilates">
              <li className="headersnavbar">
                <p>pilates</p>
              </li>
            </Link>
          )}
          {correntuser && (
            <Link to="/bodyfat">
              <li className="headersnavbar">
                <p>bodyfat</p>
              </li>
            </Link>
          )}

          <Link to="/register">
            <li className="headersnavbar">
              <p>workout exercise</p>
            </li>
          </Link>

          <Link to="/Subscription">
            <li className="headersnavbar">
              <p>subscription</p>
            </li>
          </Link>

          {!correntuser && (
            <li onClick={handleOpen} className="headersnavbar">
              <p>register</p>
            </li>
          )}

          <li onClick={handleOpen2} className="headersnavbar">
            {correntuser ? <p>logout</p> : <p>log in</p>}
          </li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default Navbar;
