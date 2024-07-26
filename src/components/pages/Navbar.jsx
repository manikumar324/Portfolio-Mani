import React from 'react';
import {House} from "lucide-react";
import { FileText } from 'lucide-react';
import { Contact } from 'lucide-react';
import{Briefcase} from "lucide-react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className='card-effect d-flex gap-3 mt-3'>
            <NavLink to="/about" className="icon">
                <House />
                <p>Home</p>
            </NavLink>
            <NavLink to="/resume" className="icon">
                <FileText />
                <p>Resume</p>
            </NavLink>
            <NavLink to="/projects" className="icon">
                <Briefcase />
                <p>Projects</p>
            </NavLink>
            <NavLink to="/contact" className="icon">
                <Contact />
                <p>Contact</p>
            </NavLink>
        </div>
        
    </div>
  )
}

export default Navbar;