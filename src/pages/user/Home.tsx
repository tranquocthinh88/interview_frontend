import { Box } from '@mui/material'
import Header from '../../layouts/user/Header'
import Footer from '../../layouts/user/Footer'

const Home = () => {
    return <>
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header></Header>
            <Box sx={{ flexGrow: 1, overflowY: "auto", width: "100wh" }}>
                <Box sx={{width: "100wh", height: "100vh", backgroundColor: "lightblue"}}>

                </Box>
                <Footer></Footer>
            </Box>

        </Box>
    </>
}

export default Home