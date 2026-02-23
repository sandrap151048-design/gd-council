# ⚡ Quick Network Setup - 5 Minutes

## Step-by-Step Commands

### 1️⃣ Get Your IP Address
```cmd
ipconfig
```
Look for "IPv4 Address" - example: `192.168.1.100`

### 2️⃣ Update Frontend Configuration
Open `frontend/.env.local` and change:
```
FROM: NEXT_PUBLIC_API_URL=http://localhost:5000/api
TO:   NEXT_PUBLIC_API_URL=http://YOUR-IP-HERE:5000/api
```

Example:
```
NEXT_PUBLIC_API_URL=http://192.168.1.100:5000/api
```

### 3️⃣ Allow Firewall (Run as Administrator)
```cmd
netsh advfirewall firewall add rule name="Node Backend" dir=in action=allow protocol=TCP localport=5000
```

### 4️⃣ Restart Backend
```cmd
cd backend
node server.js
```

### 5️⃣ Restart Frontend (in new terminal)
```cmd
cd frontend
npm run dev
```

### 6️⃣ Test from Other Device
On your phone/tablet (connected to SAME WiFi):
```
http://YOUR-IP:3000
```

Example: `http://192.168.1.100:3000`

## That's It! 🎉

Now you can register from any device on your network.

## Need Help?
See `NETWORK_ACCESS_GUIDE.md` for detailed troubleshooting.
