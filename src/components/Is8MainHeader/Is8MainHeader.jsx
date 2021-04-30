import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
export default function Is8MainHeader({isAuthed, path, bandLogo}) {
    return (
        <div className="header-wrapper">
            <div className="logo-wrapper">
            </div>
            <div className="header-background-color">  
            <Menu>
        <Menu.Item
          name ='home'
          active={path === '/home'}>
          <Link to='/home'><img style={{height:75}} src={bandLogo} alt="Isabel 8 Band Logo"/></Link>
        </Menu.Item>
        <Menu.Item
          name ='about'
          active={path === '/about'}>
          <Link to='/about'>About</Link> 
        </Menu.Item>
        <Menu.Item
          name ='login'
          active={path === '/login'}>
          <Link to='/login'>Login</Link> 
        </Menu.Item>
        <Menu.Item
          name ='music'
          active={path === '/music'}>
          <Link to='/music'>Music</Link> 
        </Menu.Item>
        <Menu.Item
          name ='gallery'
          active={path === '/gallery'}>
          <Link to='/gallery'>Gallery</Link> 
        </Menu.Item>
        <Menu.Item
          name ='profile'
          active={path === '/profile'}>
          <Link to='/profile'>Profile</Link> 
        </Menu.Item>
      </Menu>              
            </div>
        </div>
        // <div>
        // <h1></h1>
        // <section className="picGallery">
        //     {pics.map((pic) =>
        //     <div className="flip-card">
        //         <div className="flip-card-inner">
        //             <div className="flip-card-front"> 
        //                 <img src={pic.url} alt={pic.alt} />  
        //             </div>
        //             <div className="flip-card-back">
        //                 <p>{pic.caption}</p>
        //             </div>               
        //         </div>
        //     </div>
        //     )}
        // </section>
        // </div>
    )
}