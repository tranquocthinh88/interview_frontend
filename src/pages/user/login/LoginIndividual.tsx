import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';

const LoginIndividual = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Container sx={{ height: "100vh", width: "100wh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "pink" }}>
            <Box sx={{ width: "50%", p: 4, bgcolor: "white", boxShadow: 3, borderRadius: 2, backgroundColor: 'green' }}>
                <Typography variant="h5" align="center" gutterBottom>
                    KHÁCH HÀNG CÁ NHÂN
                </Typography>
                <TextField
                    fullWidth
                    label="Tên đăng nhập"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment> }}
                />
                <TextField
                    fullWidth
                    label="Mật khẩu"
                    type={showPassword ? "text" : "password"}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PasswordIcon /></InputAdornment>,
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                    Đăng nhập
                </Button>
                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Typography variant="body2" color="white" sx={{ cursor: "pointer" }}>Quên mật khẩu</Typography>
                    <Typography variant="body2" color="white" sx={{ cursor: "pointer" }}>Hướng dẫn đăng ký</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginIndividual;