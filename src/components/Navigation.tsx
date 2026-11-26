/**
 * Top app bar: section links (from `navItems`), a light/dark toggle, and a
 * slide-out drawer menu that replaces the links on small screens.
 */
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { navItems } from "../config/portfolio";
import type { ColorMode } from "../theme/palette";

/** Width of the mobile drawer, in pixels. */
const DRAWER_WIDTH = 240;

interface NavigationProps {
  /** Current colour mode; selects the toggle's icon and label. */
  mode: ColorMode;
  /** Called when the visitor clicks the light/dark toggle. */
  onToggleMode: () => void;
}

/**
 * Site navigation. Below MUI's `sm` breakpoint the links move into a
 * temporary drawer, which closes when any link in it is clicked.
 */
export default function Navigation({ mode, onToggleMode }: NavigationProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((open) => !open);
  const nextMode: ColorMode = mode === "dark" ? "light" : "dark";

  return (
    <>
      <AppBar component="nav" aria-label="Primary" color="inherit" sx={{ bgcolor: "background.default" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="Open navigation menu"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" aria-label={`Switch to ${nextMode} mode`} onClick={onToggleMode}>
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ id, label }) => (
              <Button
                key={id}
                href={`#${id}`}
                color="inherit"
                sx={{ fontSize: "1.1rem", textTransform: "none", px: 1.25 }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER_WIDTH },
        }}
      >
        <Box component="nav" aria-label="Primary" onClick={toggleDrawer} sx={{ textAlign: "center" }}>
          <Box
            component="p"
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 0.75, fontWeight: "bold" }}
          >
            <ListIcon aria-hidden="true" />
            Menu
          </Box>
          <Divider />
          <List>
            {navItems.map(({ id, label }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton component="a" href={`#${id}`} sx={{ textAlign: "center" }}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
