---
title: My beginning experience with Nix
date: 3/28/2023
author: Luke Rhoads
thumbnail: /images/blog/beginning-nix/Nix.png
description: Nix can be daunting, with a high learning curve and mysterios errors. Hear my experience wrangling my first NixOS system.
---
# Background
Ever since last year I have been obsessed with configuring my Linux system to the fullest. I first experimented with Arch for its barebones nature, introducing me to window managers and other more advanced configurations.

After several months using Arch, I decided that a system redesign would be worth the time. 

Having a background exploring infrastructure-as-code projects like Terraform and Ansible, I was interested in the concept of Nix and the declarative nature of its representative operating system, NixOS.

# Why I chose Nix
I was enticed by the idea of a system that could be reproduced anywhere exactly the same way, from a declarative configuration. 

Even with the supposed weakness of having to manually add dependencies that were not already in the public registry, I felt that the issues that could arise as a result of dependency mismanagement were greater than the supposed pain of adding another dependency.

# Window manager, bar, etc.
For my window manager, I chose [i3](https://i3wm.org/) for its simple configuration. As a previous user of XMonad, I would rather have a configuration that is easy to understand. I personally am not the best at Haskell, and made the switch primarily for this reason.

For my bar, I used [eww](https://github.com/elkowar/eww) for its incredible flexibility. Other bar providers such as Polybar did not offer enough flexibility to reproduce the [look](https://github.com/rxyhn/yuki) I was going after.

For my application opener, I used rofi, which was easy enough to configure to my liking.

# Results
Here are some system screenshots:
![Desktop](/images/blog/beginning-nix/desktop.png)
![Desktop with Volume](/images/blog/beginning-nix/desktop-volume.png)
![Desktop with Rofi](/images/blog/beginning-nix/desktop-rofi.png)