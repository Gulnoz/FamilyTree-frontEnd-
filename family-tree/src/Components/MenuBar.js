import React from "react"
import { Menu} from "semantic-ui-react"
import { Link } from 'react-router-dom'
const MenuBar = (props) => {
    return (
        <React.Fragment>
            <Menu fixed="top">
                <Menu.Item as={Link} to="/home">
                    Home
           </Menu.Item >

                <Menu.Item as={Link} to="/family" onClick={props.setCurrentFamilyToNull}>
                    Family
            </Menu.Item>

                <Menu.Item>
                    Profile
            </Menu.Item>

                <Menu.Menu position="right">
                    <Menu.Item as={Link} to="/message" >
                        Messages
          </Menu.Item>

                    <Menu.Item onClick={props.logOut}>
                        Log Out
          </Menu.Item>

                </Menu.Menu>
            </Menu>
        </React.Fragment>
    )
}

export default MenuBar
                    
{/* <Menu.Item
    
/> */}                 