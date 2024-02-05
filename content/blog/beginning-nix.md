---
title: My Beginning Experience with Nix
date: 3/28/2023
author: Luke Rhoads
thumbnail: /images/blog/beginning-nix/Nix.png
description: Nix can be daunting, with a high learning curve and mysterios errors. Hear my experience wrangling my first NixOS system.
---
# Background
Ever since last year I have been obsessed with "ricing" my Linux machine. Inspired by various reddit communities, I experimented with many operating systems and configurations. Over time, I was better able to configure my system to suit my needs. 

I first experimented with Arch Linux for its configurability. As a user coming from operating systems with a default UI, I was introduced to the many ways to configure different parts of a system.

After several months using Arch, I decided that a system redesign would be worth the time. This decision was prompted by issues I had with pacman and a lack of satisfaction with XMonad.

Having a background exploring infrastructure-as-code projects like Terraform and Ansible, I was interested in the concept of Nix and the declarative nature of its operating system, NixOS.

# Why I chose Nix
I was enticed by the idea of a system that could be reproduced anywhere exactly the same way, from a declarative configuration. 

Even with the supposed weakness of having to manually add dependencies that were not already in the public registry, I felt that the issues that could arise as a result of dependency mismanagement were greater than the supposed pain of adding another dependency.

# Window manager, bar, etc.
For my window manager, I chose [i3](https://i3wm.org/) for its simple configuration. As a previous user of XMonad, I would rather have a simpler configuration. The inconvenience of reorienting myself with Haskell every time I wanted to change my configuration was what led to this decision.

For my bar, I used [eww](https://github.com/elkowar/eww) for its incredible flexibility. Other bar providers such as Polybar did not offer enough flexibility to reproduce the [look](https://github.com/rxyhn/yuki) I was going after.

For my application opener, I used rofi, which was easy enough to configure to my liking.

# Results
Here are some system screenshots:
![Desktop](/images/blog/beginning-nix/desktop.png)
![Desktop with Volume](/images/blog/beginning-nix/desktop-volume.png)
![Desktop with Rofi](/images/blog/beginning-nix/desktop-rofi.png)

Overall, I am extremely satisfied with this system. The solid dependency management of Nix paired with the convenient configuration of the window manager and taskbar fit my preferences. 

Thanks for taking the time to read!