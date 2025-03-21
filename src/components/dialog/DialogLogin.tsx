import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import LoginIndividual from "../../pages/user/login/LoginIndividual";
import LoginBusiness from "../../pages/user/login/LoginBusiness";
import { useNavigate } from "react-router-dom";

type DialogLoginProps = {
    open: boolean;
    onClose: () => void;
  };

const DialogLogin: React.FC<DialogLoginProps> = ({ open, onClose  }) => {
    const [selectedType, setSelectedType] = useState(null);
    const navigate = useNavigate();

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle align="center">Chọn loại tài khoản</DialogTitle>
            <DialogContent>
                {!selectedType ? (
                    <Box display="flex" justifyContent="center" gap={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => navigate("login-individual")}
                        >
                            Khách hàng cá nhân
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate("login-business")}
                        >
                            Khách hàng doanh nghiệp
                        </Button>
                    </Box>
                ) : (
                    <>
                        {selectedType === "individual" ? <LoginIndividual /> : <LoginBusiness />}
                        <Button onClick={() => setSelectedType(null)} sx={{ mt: 2 }}>
                            Quay lại
                        </Button>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default DialogLogin;
