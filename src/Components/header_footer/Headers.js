import { AppBar, Button, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import CityLogo, { showToastSuccess, showToastError } from '../../Utils/tools'
import { firebase } from '../../firebase';






const Headers = ({user}) => {
    const logoutHandler = () => {
        firebase.auth().signOut()
        .then(() => {
            showToastSuccess(`Goodbye`)
        })
        .catch((error) => {
            showToastError(error.message)
        })
        
    }
  return (
    <AppBar
        position='static'
        style={{
            backgroundColo: '#95e9',
            padding: '10px 0px',
            borderBottom: '2px solid #00285e'
        }}
    >

        <Toolbar style={{ display: 'flex' }}>
            <div style={{ flexGrow: 1 }}>
                <div className='header_logo'>
                    <CityLogo
                        link={true}
                        linkTo={'/'}
                        width="70px"
                        height="70px"
                    />
                   
                </div>
            </div>

            <Link to="/the_team" >
                <Button color='inherit'>The Team</Button>
            </Link>
            <Link to="/the_matches" >
                <Button color='inherit'>The Matches</Button>
            </Link>


            {/* This in Django means if user is authenticated show something */}
            { user ?
                <>
                    <Link to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </Link>

                   
                    <Button color="inherit"
                        onClick={()=> logoutHandler()}
                    
                    >Log out</Button>
            
                </>
                :
                null
                }

            
        </Toolbar>
        
    </AppBar>
  )
}

export default Headers