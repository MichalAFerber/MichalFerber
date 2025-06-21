---
title: How to Build a Raspberry Pi Camera for Seamless WebRTC Streaming
description: Using the Pi Zero 2 W and the Camera Module 3
tags: [Raspberry Pi, Linux, How To]
comments: true
style: border
color: primary
---

![Raspberry Pi models](/assets/img/raspberry-pi's.jpg)

# **How to Build a Raspberry Pi Camera for Seamless WebRTC Streaming**

I recently completed a project using the Pi Zero 2 W and the Camera Module 3. My goal was to stream a live feed from the camera and use WebRTC to integrate it with HTML. After some trial and error, I found MediaMTX to be the best package for WebRTC. I wouldn't have been able to do this without stumbling upon a helpful Reddit post.

## Hardware & Operating System

- **Pi Zero 2 W**
- **Pi Camera Module 3**
- **Pi 12.5W Micro USB Power Supply**
- **Pi Zero Case**
- **SanDisk Extreme PRO SDHC And SDXC UHS-I Card**
- **Pi OS Lite (32-bit)**

## Making it all work

1. **Set up your SD card using Raspberry Pi Imager:**

- **Device:** Raspberry Pi Zero 2 W
- **OS:** Raspberry Pi OS (other) -> Raspberry Pi OS Lite (32-bit) (Bookworm, No GUI)
- Configure settings to set up your user/pass and SSID for Wi-Fi.

2. **After the first boot, update your Pi:**

```javascript
sudo apt update
sudo apt full-upgrade
```

3. **Install the libcamera apps (drivers for the camera):**

```javascript
sudo apt install libcamera-apps
```

4. **Test to ensure the camera is recognized by the Pi:**

```javascript
libcamera-hello --list-cameras
```

> You should see output similar to this:

![image](https://i.ibb.co/Lr9gD1j/libcamera-hello.png)

5. **Download and uncompress MediaMTX:**

```javascript
wget https://github.com/bluenviron/mediamtx/releases/download/v1.9.0/mediamtx_v1.9.0_linux_armv7.tar.gz
tar -xvzf mediamtx_v1.9.0_linux_armv7.tar.gz
```

6. **Remove the LICENSE file (make sure to read it first): (optional)**

```javascript
sudo rm -rf LICENSE
```

7. **Move the files to the correct locations and set permissions:**

```javascript
sudo mv mediamtx /usr/local/bin/
sudo mv mediamtx.yml /usr/local/etc/
sudo chmod +x /usr/local/bin/mediamtx
```

8. **Modify the YAML configuration file:**

```javascript
sudo nano /usr/local/etc/mediamtx.yml
```

Scroll to the bottom and add the following under `paths:`:

```javascript
paths:
  cam:
    source: rpiCamera
```

Ensure proper indentation (2 spaces per level). Save and exit nano (`Ctrl + O`, `Ctrl + X`).

**(optional)**

I also change ==rpiCameraTextOverlayEnable== = true and I set a description in the ==rpiCameraTextOverlay==. These settings are just above the paths in the rpi section. You can refer to the documentation for this.

[https://github.com/bluenviron/mediamtx?tab=readme-ov-file#raspberry-pi-cameras](https://github.com/bluenviron/mediamtx?tab=readme-ov-file#raspberry-pi-cameras)

9. **Set up the service file:**

```javascript
sudo tee /etc/systemd/system/mediamtx.service >/dev/null << EOF
[Unit]
Wants=network.target
[Service]
ExecStart=/usr/local/bin/mediamtx /usr/local/etc/mediamtx.yml
[Install]
WantedBy=multi-user.target
EOF
```

10. **Set up the daemon, enable the service, start the service, and check its status:**

```javascript
sudo systemctl daemon-reload
sudo systemctl enable mediamtx
sudo systemctl start mediamtx
sudo systemctl status mediamtx
```

> The status output should look something like this:

![image](https://i.ibb.co/WfwyDXc/service-status.png)

11. **If you encounter any errors, check the service log file:**

```javascript
sudo journalctl -u mediamtx.service
```

12. **Verify everything is working by visiting:**

```javascript
http://yourIPaddress:8889/cam
```

You should see a live video feed.

![image](https://i.ibb.co/NsfJRCs/camera-feed.png)

Hope this helps!