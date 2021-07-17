import React from 'react'
import Link from 'next/link'
import {  Nav } from 'react-bootstrap';


export default function NavItem({ href, text }) {
    return <Nav.Link style={{margin: 'auto'}} href={href}>{text}</Nav.Link>
}