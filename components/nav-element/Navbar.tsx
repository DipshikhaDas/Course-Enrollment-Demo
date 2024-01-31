import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import Link from 'next/link';

interface NavItem {
  href: string;
  text: string;
}

interface NavbarProps {
  title: string;
  links: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        {links.map((link, index) => (
          <Button key={index} color="inherit" component={Link} href={link.href}>
            {link.text}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
