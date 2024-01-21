import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom"
import LargeHeader from "./LargeHeader";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {


    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600); // Adjust the breakpoint as needed
      };
  
      // Initial check on component mount
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);




    return(
        <div>
            {isMobile ? <ResponsiveHeader /> : <LargeHeader />}
        </div>
    )
}

export default Header;