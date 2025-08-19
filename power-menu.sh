#!/bin/bash

options="⏻ Shutdown\n Reboot\n Suspend\n Lock\n󰍃 Logout"

selected=$(echo -e "$options" | wofi --dmenu --width 300 --height 250 --prompt "Power" --style ~/.config/wofi/style.css)

case $selected in
  "⏻ Shutdown") systemctl poweroff ;;
  " Reboot") systemctl reboot ;;
  " Suspend") systemctl suspend ;;
  " Lock") loginctl lock-session ;;  # or use `swaylock` if installed
  "󰍃 Logout") hyprctl dispatch exit ;;
esac
