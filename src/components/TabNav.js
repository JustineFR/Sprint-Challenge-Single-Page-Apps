import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 40px;
    padding: 0;
`

const ListItem = styled.li`
    list-style-type: none;
    padding: 10px 30px 10px 30px;
    font-color: red;
    border-bottom: 1px solid lightGrey;
`


export default function TabNav() {
    return (
        <div>
            <NavBar>
                <ListItem><NavLink to="/">Home</NavLink></ListItem>
                <ListItem><NavLink to="/characters">Characters</NavLink></ListItem>
                <ListItem><NavLink to="/locations">Locations</NavLink></ListItem>
                <ListItem><NavLink to="/episodes">Episodes</NavLink></ListItem>
            </NavBar>
        </div>
          
    )
};

