"use client";

import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CircleIcon from "@mui/icons-material/Circle";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className="flex gap-2 p-[2px] rounded-[40px] bg-gray-800 justify-between items-center relative "
      onClick={toggle}
    >
      <DarkModeIcon className="text-yellow-500" />
      <CircleIcon
        className="absolute text-white"
        style={theme === "dark" ? { left: 1 } : { right: 1 }}
      />
      <LightModeIcon fontSize="small" className="text-yellow-500" />
    </div>
  );
}
