import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import useAuth from "../Hooks/useAuth";
import api from "../API/Api";
import { useClickOutside } from "../Hooks/useClickOutside";
import { formVariant, containerVariant } from "../Animations/Animations";


//Component modal for logging out
const LogoutModal = ({ setLogout, submitLogout }) => {
  const domNode = useClickOutside(() => {
    setLogout(false);
  });

  const [loader, setLoader] = useState(false);
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="modal-container"
    >
      <motion.div
        variants={formVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        ref={domNode}
        className="popup-modal"
      >
        <h1>Sign Out</h1>
        <p>Are you really sure you want to Sign out?</p>

        <div className="delete-modal-btns">
          <button
            onClick={() => setLogout(false)}
            className="cancel-delete-patient-btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              submitLogout();
              setLoader(true);
            }}
            className={
              loader ? "delete-patient-btn2-disable" : "delete-patient-btn2"
            }
          >
            {loader ? "Signing Out" : "Sign Out"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LogoutModal;
