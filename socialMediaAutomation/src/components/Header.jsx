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
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';



function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };

    const menuItems = [
        { id: 1, text: "Hakkımızda", link: "https://rastmobile.com/tr/hakkimizda" },
        { id: 2, text: "Jüri-Yarışma Yazılımı", link: "https://rastmobile.com/tr/urunler/juri-yarisma-yazilimi" },
        { id: 3, text: "Word Ninja", link: "https://rastmobile.com/tr/urunler/word-ninja" },
        { id: 4, text: "Word Pyramids", link: "https://rastmobile.com/tr/urunler/word-pyramids" },
    ];

    return (
        <AppBar style={{ background: '#d58bcfff', boxShadow: 'none' }}>
            <Toolbar sx={{ px: 2 }}>

                <img src={RastMobile} alt="Rast Mobile" style={{ width: 50, height: 50 }} />


                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4, ml: 5 }}>
                    {menuItems.map((item) => (
                        <IconButton key={item.id}>
                            <Typography
                                component="a"
                                href={item.link}
                                sx={{ ...style_header_fonts, textDecoration: "none", color: "#fff" }}
                            >
                                {item.text}
                            </Typography>
                        </IconButton>
                    ))}
                </Box>


                <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
                    <IconButton href='https://www.instagram.com/rastmobile/'>
                        <InstagramIcon sx={{ width: 25, height: 25 }} />
                    </IconButton>
                    <IconButton href='https://www.youtube.com/@rastmobile183'>
                        <YouTubeIcon sx={{ width: 25, height: 25 }} />
                    </IconButton>
                    <IconButton href='https://www.linkedin.com/company/rastmobile'>
                        <LinkedInIcon sx={{ width: 25, height: 25 }} />
                    </IconButton>
                    <IconButton href='https://www.behance.net/rastmobile'>
                        <img src={Behance} alt="Behance" style={{ width: 25, height: 25 }} />
                    </IconButton>


                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton onClick={toggleDrawer(true)} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>


                <Drawer anchor="left" open={open} onClose={toggleDrawer(false)} PaperProps={{
                    sx: {
                        backgroundColor: "#d58bcfff",
                    }
                }}>
                    <List sx={{ width: 250 }}>
                        {menuItems.map((item) => (
                            <ListItem key={item.id} component="a" href={item.link}>
                                <ListItemButton>
                                    <ListItemText primary={item.text} primaryTypographyProps={{ sx: { color: "white" } }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
}


export default Header;