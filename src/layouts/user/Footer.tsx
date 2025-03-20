import { Box, Link, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: "pink",
      height: "170px",
      width: "100wh",
    }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 2, marginTop: 1 }}>
          <Typography color="red"
            gutterBottom
            style={{
              fontSize: 40,
              fontFamily: 'cursive',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}>TTBank</Typography>
          <Typography variant="body2" gutterBottom color='green'>
            Địa chỉ: 475/53 CMT8, phường 13, quận 10, TPHCM
          </Typography>
          <Link href="/" color="success" variant="body2" display="block" gutterBottom>
            Điều khoản sử dụng
          </Link>
          <Link href="/" color="success" variant="body2" display="block" gutterBottom>
            Bảo mật thông tin
          </Link>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 2 }}>
            <HelpIcon style={{ width: '50px', height: '50px', color: 'green' }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" gutterBottom color='green'>
                Câu hỏi thường gặp - FAQs
              </Typography>
              <Typography variant="body2" gutterBottom color='green'>
                Giải đáp mọi thắc mắc của bạn
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 6 }}>
            <Typography variant="h6" gutterBottom color='green'>
              Kết nối với TTBank
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <FacebookIcon style={{ width: '40px', height: '40px' }} />
              <InstagramIcon style={{ width: '40px', height: '40px' }} />
              <YouTubeIcon style={{ width: '40px', height: '40px' }} />
              <LinkedInIcon style={{ width: '40px', height: '40px', marginRight: 2 }} />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginRight: 2, marginTop: 2 }}>
          <Typography variant="h6" gutterBottom color='green'>
            Thông tin về TTBank
          </Typography>
          <Link href="/" color="success" variant="body2" display="block" gutterBottom>
            Giới thiệu
          </Link>
          <Link href="/" color="success" variant="body2" display="block" gutterBottom>
            Tin tức
          </Link>
          <Link href="/" color="success" variant="body2" display="block" gutterBottom>
            Tuyển dụng
          </Link>
        </Box>
      </Box>

    </Box>
  )
}

export default Footer