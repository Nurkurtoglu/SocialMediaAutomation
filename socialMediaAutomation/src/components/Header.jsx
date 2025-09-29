import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RastMobile from '../images/rastmobile-logo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Behance from '../images/social.png';
import { style_header_fonts } from '../style/styles';



function Header() {
    return (
        <div>
            <AppBar style={{ background: '#d58bcfff', boxShadow: 'none' }}>
                <Toolbar disableGutters>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 15, width: '100%' }}>
                        <img src={RastMobile} alt="Rast Mobile" style={{ width: 70, height: 70, marginLeft: 16 }} />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            href="https://rastmobile.com/tr/hakkimizda"
                        >
                            <Typography sx={style_header_fonts}>
                                Hakkımızda
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            href="https://rastmobile.com/tr/urunler/juri-yarisma-yazilimi"
                        >
                            <Typography sx={style_header_fonts}>
                                Jüri-Yarışma Yazılımı
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            href="https://rastmobile.com/tr/urunler/word-ninja"
                        >
                            <Typography sx={style_header_fonts}>
                                Word Ninja
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            href="https://rastmobile.com/tr/urunler/word-pyramids"
                        ><Typography sx={style_header_fonts}>
                                Word Pyramids
                            </Typography>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 1, marginLeft: 'auto', marginRight: 10 }}>
                        <IconButton href='https://www.instagram.com/rastmobile/' >
                            <InstagramIcon sx={{ width: 25, height: 25 }} />
                        </IconButton>
                        <IconButton href='https://www.youtube.com/@rastmobile183'>
                            <YouTubeIcon sx={{ width: 25, height: 25 }} />
                        </IconButton>
                        <IconButton href='https://www.linkedin.com/company/rastmobile' >
                            <LinkedInIcon sx={{ width: 25, height: 25 }} />
                        </IconButton>
                        <IconButton href='https://www.behance.net/rastmobile'>
                            <img src={Behance} alt="Behance" style={{ width: 25, height: 25, }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header