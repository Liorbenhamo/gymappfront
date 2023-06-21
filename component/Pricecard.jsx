import React from "react";
import "./pricecard.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Creditcard from "./creditcard";
import { InfoContext } from "../src/App";
function Pricecard({ name, describtion, price }) {
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
  return (
    <div className="pricedescribe">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Creditcard handleClose={handleClose} price={price} />
        </Box>
      </Modal>
      <div>
        <div>
          <h1>{name} membership</h1>
          <h3>{describtion}</h3>
        </div>
        <hr />
        <div className="buttoncancel">
          <p>
            if you cancel this membership you pay half of the membership in the
            month that left
          </p>
          {info.correntuser && (
            <button onClick={handleOpen} className="pricecardbutton">
              choose
            </button>
          )}
        </div>
      </div>
      <div className="pricedivcard">
        <h1>{price}</h1>
        <p>per month</p>
      </div>
    </div>
  );
}

export default Pricecard;
