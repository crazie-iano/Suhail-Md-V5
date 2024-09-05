const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_38_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNCxcbiAgICAgICAgOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLTVFZSmtnUXZLVENaa1gwYldjV0hPalFhb2JJSGhTdHNTR1RCV3RXS0hJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc5MTAxNDMyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjQxOEI3OTg3QjBDNzNDQ0JEMjQ2ODdDNzZBQTA0ODRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1NTE0NzMxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjBLblRORkJMUzgyN3NMRUpsdXFtcXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ExMGExOTUtNWEyYi00ZWExLTg5N2YtZmUzZGYzZTVlZDcyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEsXG4gICAgICAyMTMsXG4gICAgICAyNSxcbiAgICAgIDE1MCxcbiAgICAgIDEsXG4gICAgICAxOTgsXG4gICAgICAxMTIsXG4gICAgICAxNTksXG4gICAgICA0LFxuICAgICAgMjI2LFxuICAgICAgMTc0LFxuICAgICAgMTMzLFxuICAgICAgMjAxLFxuICAgICAgMzksXG4gICAgICAzMixcbiAgICAgIDEzMCxcbiAgICAgIDIyNCxcbiAgICAgIDE5MCxcbiAgICAgIDEyNSxcbiAgICAgIDIyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDE3NixcbiAgICAgIDE0NCxcbiAgICAgIDEyLFxuICAgICAgMjIzLFxuICAgICAgMjQ0LFxuICAgICAgOTEsXG4gICAgICAxNzAsXG4gICAgICAxNjEsXG4gICAgICAxNDIsXG4gICAgICAyMjEsXG4gICAgICAyMjMsXG4gICAgICAxMjEsXG4gICAgICA0NixcbiAgICAgIDM4LFxuICAgICAgNjAsXG4gICAgICA5NixcbiAgICAgIDE4MCxcbiAgICAgIDg3LFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUENBNENENkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5MTAxNDMyNDo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU0MjE1MTIxMzAxNjI2OjQzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09uUWg3QUVFT09INWJZR0dDd2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVVOWUlFNDIvaWk1UlNhU1F2Wkp2cUVaVVNXeHNxOGFzZlg3VkVmVEpRYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnQ01rWjIwYi9URTUxUmJ4TEhpWm9CSXdRWXFGc1NnUzN5QWFsOWluZXRxcWV4VmdrMnpWTnZrVm1OeC9xSytvMStUODVJQ3JOZUpUTStWRFB4M1lCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUVmpNQ3VVdDJ0eDB2UlhIUlYwbVZYa1R5MjQvV09GbVQ0RUhqaUhSdHU0blpnUXJUK3BheWNnWG9GSWxUU2VMYUYrWlBkWVkyaGlNSURCVHBFRDdpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTEwMTQzMjQ6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTUxNDcyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpINVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkg1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYllCVXJpYllHdmx2Sk9IUXVIcHVMdGVkZU9mM3JORzJDcW5UQ1I5Mm9kOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTc0NTMwMTUzLFwiY3VycmVudEluZGV4XCI6MTksXCJkZXZpY2VJbmRleGVzXCI6WzAsMTksNyw4XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "jabal-ken",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
