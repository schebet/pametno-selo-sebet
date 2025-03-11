import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Newspaper, Building2, Droplet, FileText, Phone } from 'lucide-react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Menu } from 'lucide-react';

const navigation = [
  { name: 'Почетна', path: '/', icon: Home },
  { name: 'Сеоске новости', path: '/news', icon: Newspaper },
  { name: 'Сеоска управа', path: '/administration', icon: Building2 },
  { name: 'Сеоски водовод', path: '/water-system', icon: Droplet },
  { name: 'Документи', path: '/documents', icon: FileText },
  { name: 'Хитни контакти', path: '/emergency', icon: Phone },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navigation.map((item) => {
        const Icon = item.icon;
        return (
          <ListItem
            key={item.name}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={handleDrawerToggle}
            className="hover:bg-blue-50"
          >
            <ListItemIcon>
              <Icon className="text-blue-700" />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        );
      })}
    </List>
  );

  return (
    <AppBar position="sticky" className="bg-white text-gray-900 shadow-md">
      <Toolbar className="container">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=150&h=150&fit=crop"
              alt="Село лого"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-xl font-bold">Шебет</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors
                    ${location.pathname === item.path ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-100'}`}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="lg:hidden"
          >
            <Menu />
          </IconButton>
        </div>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: 'w-64',
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Header;