# 🌐 Network Access Guide - Register from Any Device

## Current Status
✅ Backend is configured to accept connections from other devices
✅ CORS is configured to allow all origins in development mode

## Steps to Enable Registration from Other Devices

### Step 1: Get Your Computer's IP Address

**On Windows (your system):**
1. Open Command Prompt (cmd)
2. Type: `ipconfig`
3. Look for "IPv4 Address" under your active network adapter (WiFi or Ethernet)
4. Example: `192.168.1.100`

**On Mac/Linux:**
1. Open Terminal
2. Type: `ifconfig` or `ip addr`
3. Look for your IP address (usually starts with 192.168.x.x or 10.x.x.x)

### Step 2: Restart Backend Server

1. Stop the current backend server (Ctrl+C in the terminal)
2. Navigate to backend folder: `cd backend`
3. Start server: `node server.js`
4. You should see:
   ```
   ✅ Server running on port 5000
   ✅ Local: http://localhost:5000/api
   ✅ Network: http://<your-ip>:5000/api
   ```

### Step 3: Update Frontend Configuration

1. Open `frontend/.env.local`
2. Replace `localhost` with your IP address:
   ```
   NEXT_PUBLIC_API_URL=http://192.168.1.100:5000/api
   ```
   (Replace `192.168.1.100` with YOUR actual IP address)

3. Save the file

### Step 4: Restart Frontend Server

1. Stop the current frontend server (Ctrl+C in the terminal)
2. Navigate to frontend folder: `cd frontend`
3. Start server: `npm run dev`
4. Frontend will now connect to backend using IP address

### Step 5: Configure Windows Firewall

**Allow Port 5000 through Windows Firewall:**

1. Open Windows Defender Firewall
2. Click "Advanced settings"
3. Click "Inbound Rules" → "New Rule"
4. Select "Port" → Next
5. Select "TCP" and enter port: `5000` → Next
6. Select "Allow the connection" → Next
7. Check all profiles (Domain, Private, Public) → Next
8. Name: "Node Backend Server" → Finish

**OR use Command Prompt (Run as Administrator):**
```cmd
netsh advfirewall firewall add rule name="Node Backend" dir=in action=allow protocol=TCP localport=5000
```

### Step 6: Access from Other Devices

**On the other device (phone, tablet, another computer):**

1. Make sure the device is on the SAME WiFi network
2. Open browser and go to: `http://192.168.1.100:3000`
   (Replace `192.168.1.100` with YOUR computer's IP address)
3. Try to register - it should work now!

## Troubleshooting

### Registration Still Not Working?

1. **Check if both devices are on same WiFi network**
   - Both must be connected to the same router

2. **Verify backend is running**
   - Open `http://YOUR-IP:5000` in browser
   - Should see: `{"message":"Global Education Council API","status":"running"}`

3. **Check Windows Firewall**
   - Temporarily disable firewall to test
   - If it works, add firewall rule as shown above

4. **Verify IP address is correct**
   - Run `ipconfig` again to confirm
   - IP address might change if using DHCP

5. **Check frontend .env.local**
   - Must use IP address, not localhost
   - Must restart frontend after changing .env.local

## Quick Test Commands

**Test backend from another device:**
```
http://YOUR-IP:5000
```

**Test frontend from another device:**
```
http://YOUR-IP:3000
```

**Test registration API directly:**
```
http://YOUR-IP:5000/api/auth/register
```

## Important Notes

- ⚠️ This setup is for LOCAL NETWORK ONLY (development)
- ⚠️ For production, deploy backend to Render/Railway and frontend to Vercel
- ⚠️ IP address might change when you restart your router
- ⚠️ Both devices MUST be on the same WiFi network
- ⚠️ Make sure to restart BOTH frontend and backend after changes

## Production Deployment

For accessing from anywhere (not just local network):
1. Deploy backend to Render: See `DEPLOYMENT_GUIDE.md`
2. Deploy frontend to Vercel
3. Set `NEXT_PUBLIC_API_URL` in Vercel to your Render URL
