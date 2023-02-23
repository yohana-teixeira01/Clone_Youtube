import React from "react";
import {makeStyles,
AppBar, 
Toolbar,
IconButton,
Typography,
Button,
Drawer,
Divider,
List,
ListItem,
ListItemIcon,
ListItemText,
ListSubheader,
Icon,
Box,
Grid,
Hidden,
Switch
} from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';

import AddCircle from '@material-ui/icons/AddCircle';
import MusicNote from '@material-ui/icons/MusicNote';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import SportsEsports from '@material-ui/icons/SportsEsports';
import LocalMovies from '@material-ui/icons/LocalMovies';
import FiberNew from '@material-ui/icons/FiberNew';
import LiveTv from '@material-ui/icons/LiveTv';
import Assistant from '@material-ui/icons/Assistant';
import Videocam from '@material-ui/icons/Videocam';

const videos = [
    {
      id: 1,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #01',
      channel: 'Yohana Teixeira',
      views: '11 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho1.jpg',
    }, 
    {
      id: 2,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #02',
      channel: 'Yohana Teixeira',
      views: '957 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho2.png',
    },
    {
      id: 3,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #03',
      channel: 'Yohana Teixeira',
      views: '106 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho3.jpg',
    },
    {
      id: 4,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #04',
      channel: 'Yohana Teixeira',
      views: '5,6 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho4.jpg',
    },
    {
      id: 5,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #05',
      channel: 'Yohana Teixeira',
      views: '2,2 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho5.jpg',
    },
    {
      id: 6,
      title: 'DESENHO ANIMADO | Maratona de desenhos #06',
      channel: 'Yohana Teixeira',
      views: '233 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho6.jpg',
    },
    {
      id: 7,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #07',
      channel: 'Yohana Teixeira',
      views: '118 mil visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho7.jpg',
    },
    {
      id: 8,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #08',
      channel: 'Yohana Teixeira',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho8.jpg',
    },
    {
      id: 9,
      title:
        'DESENHO ANIMADO | Maratona de desenhos #09',
      channel: 'Yohana Teixeira',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho9.jpg',
    },
    {
      id: 10,
      title:
       'DESENHO ANIMADO | Maratona de desenhos #10',
      channel: 'Yohana Teixeira',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho10.jpg',
    },
    {
      id: 11,
      title:
       'DESENHO ANIMADO | Maratona de desenhos #09',
      channel: 'Yohana Teixeira',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho11.jpg',
    },
    {
      id: 12,
      title:
       'DESENHO ANIMADO | Maratona de desenhos #09',
      channel: 'Yohana Teixeira',
      views: '1,9 mi de visualizações',
      date: 'há 1 semana',
      avatar: '/images/avatar00.jpeg',
      thumb: '/images/desenho12.jpg',
    },
  ];

const useStyles = makeStyles((theme) =>({
    root:{
        height: '100vh',
        backgroundColor:theme.palette.background.dark
    },
    appBar:{
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight:'none',
      },
    logo:{
        height: 30,
    },
    menuIcon:{
        paddingRight: theme.spacing(3),
        paddingLeft: theme.spacing(6),
    },
    icons:{
        paddingRight: theme.spacing(3),
    },
    grow:{
        flexGrow: 1
    },
    listItemText:{
        fontSize: 14,
    },
    listItem:{
        paddingTop: 4,
        paddingBottom: 4,
    },
    box:{
        padding: 35,
        
    },
    box1:{
        display:'flex',
        
    },
    subheader:{
        textTransform:'uppercase'
    }
}));

function Home({darkMode, setDarkMode}){
const classes = useStyles();
const theme = useTheme();

    return(
        <div className={classes.root}>
                    <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.icons} aria-label="menu">
                    <MenuIcon /> 
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/brancoyoutube.png': '/images/pretoyoutube.png'} alt="logo" className={classes.logo}/>
                    <div className={classes.grow}/>
                    <Switch value={darkMode} onChange={()=> setDarkMode(!darkMode)} className={classes.icons}/>
                    <IconButton  className={classes.icons} >
                    <VideoCall /> 
                    </IconButton>

                    <IconButton  className={classes.icons} >
                    <Apps /> 
                    </IconButton>

                    <IconButton  className={classes.icons} >
                    <MoreVert /> 
                    </IconButton>

                    <Button startIcon={<AccountCircle />} variant="outlined" color="secondary"> Fazer Login</Button>
                </Toolbar>
            </AppBar> 
            <toolbar/>
     <Box classes={{root: classes.box1}}> 
        <Hidden mdDown>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    <ListItem  button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<HomeIcon/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Inicio'} />
                    </ListItem>
                    
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<Whatshot/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Em alta'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<Subscriptions/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Inscrições'} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem   button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<VideoLibrary/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Biblioteca'} />
                    </ListItem>
                    
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<History/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Histórico'} />
                    </ListItem>
                </List>
                <Divider />   
                <Box classes={{root: classes.box}}>
                <Typography  variant="body3">
                    Faça login para curtir vídeos, comentar e se inscrever.
                </Typography>
                <Box mt={3}>
                    <Button
                    variant='outlined'
                    color='secondary'
                    startIcon={<AccountCircle/>}
                    > 
                        Fazer Login
                    </Button>  
                </Box>
                </Box >
                <Divider />
                <List
                component='nav'
                arial-labelledby='nested-list-subheader'
                subheader={<ListSubheader 
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                >
                    O Melhor do Youtube
                </ListSubheader>}
                >
                <ListItem   button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<MusicNote/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Música'} />
                    </ListItem>
                <ListItem   button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<FitnessCenter/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Esportes'} />
                    </ListItem>
                    
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<SportsEsports/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Jogos'} />
                    </ListItem>
                    <ListItem   button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<LocalMovies/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Filmes'} />
                    </ListItem>
                    
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<FiberNew/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Notícias'} />
                    </ListItem>
                    <ListItem   button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<LiveTv/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Ao vivo'} />
                    </ListItem>
                    
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<Assistant/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Destaques'} />
                    </ListItem>
                    <ListItem   button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<VideoCall/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Vídeos 360'} />
                    </ListItem>
                    
                    <ListItem button classes={{root: classes.listItem}}>
                        {<ListItemIcon>{<AddCircle/>}</ListItemIcon>}
                        <ListItemText classes={{
                            primary: classes.listItemText
                        }} primary={'Procurar mais'} />
                    </ListItem>
                </List>
                </div>
            </Drawer> 
         </Hidden>
            <Box classes={{root: classes.box}}>
                <toolbar/>
                <Typography
                variant="h5"
                color="textPrimary"
                style={{fontweight:600}}
                >
                    Recomendados
                </Typography>

            <Grid container spacing={4}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: '100%' }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant='body1'
                      color='textPrimary'
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      display='block'
                      variant='body2'
                      color='textSecondary'
                    >
                      {item.channel}
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
            </Grid>
            </Box>
      </Box> 
        </div>
    );
}


export default Home;