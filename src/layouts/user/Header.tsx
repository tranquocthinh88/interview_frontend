import { Box, Button, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { useState } from "react";
import { motion } from "framer-motion";
import SaveAndInvest from "../../components/menu/SaveAndInvest";
import Account from "../../components/menu/Account";
import Service from "../../components/menu/Service";
import Loan from "../../components/menu/Loan";
import Card from "../../components/menu/Card";
import Endow from "../../components/menu/Endow";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{
      backgroundColor: "pink",
      height: "140px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      display: "flex",
      borderRadius: "0 0 20px 20px",
    }}>
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", marginLeft: 10 }}>
          <Box sx={{
            fontSize: 17, fontWeight: 600, marginRight: 4, color: 'green',
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}>Cá nhân</Box>
          <Box sx={{
            fontSize: 17, fontWeight: 600, color: 'green',
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}>Doanh nghiệp</Box>
        </Box>
        <Box sx={{ fontSize: 40, fontWeight: 600, marginLeft: 13, color: 'red' }}>TTBank</Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "100%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <motion.div
              animate={{ width: expanded ? 300 : 150 }}
              initial={{ width: 50 }}
              transition={{ duration: 0.5 }}
              style={{
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                borderRadius: 50,
                border: expanded ? "1px solid black" : "none",
                backgroundColor: expanded ? "black" : "transparent",
              }}
            >
              {expanded && (
                <TextField
                  variant="outlined"
                  placeholder="Tìm kiếm"
                  size="small"
                  autoFocus
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { border: "none" },
                    },
                  }}
                  onBlur={() => setExpanded(false)}
                />
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={() => setExpanded(!expanded)}
                sx={{
                  borderRadius: 50,
                  padding: "6px 12px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <SearchIcon />
                {!expanded && "Tìm kiếm"}
              </Button>
            </motion.div>
          </Box>
          <Button sx={{
            borderRadius: 10, color: 'green', margin: 2, height: 35, width: 130, fontSize: 15, fontWeight: 600,
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "white"
            },
          }}>
            <PhoneEnabledIcon /> 1900 9000
          </Button>
          <Button sx={{
            color: 'green', margin: 2, height: 35, width: 130, fontSize: 15, fontWeight: 600, borderRadius: 10,
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "white"
            },
          }}>
            Đăng nhập
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
          <Box sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}><Account /></Box>
          <Box sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}><Service /></Box>
          <Box sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}><SaveAndInvest /></Box>
          <Box sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}>
            <Loan /></Box>
          <Box sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}>
            <Card /></Box>
          <Box sx={{
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}>
            <Endow /> </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Header;