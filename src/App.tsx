import { Box } from "@mui/material"
import Home from "./pages/user/Home"

function App() {

  return (
    <>
      <Box sx={{backgroundColor: 'white', display: "flex", flexDirection: "column", minHeight: "100vh"}}><Home/></Box>
    </>
  )
}

export default App
