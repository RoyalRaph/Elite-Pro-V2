// Edit the following to your chioce: botname, ownernumber and ownername.
const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='put your session id here'

//owmner v card
global.ytname = "YT: Royal Raph-MD" //ur yt chanel name
global.socialm = "GitHub: Royal Raph-MD" //ur github or insta name
global.location = "Port Harcourt, Nigeria" //ur location

//new
global.botname = 'ROYAL RAPH-V2' //ur bot name
global.ownernumber = '23057130371' //ur owner number
global.ownername = 'ROYAL RAPH-PRO-V2' //ur owner name
global.websitex = "https://youtu.be/@elite-pro-empire"
global.wagc = "https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g"
global.themeemoji = '👨🏼‍💻'
global.wm = "ROYAL RAPH-PRO-V2"
global.botscript = 'https://github.com/Royal Raph-MD/ROYAL RAPH-PRO-V2' //script link
global.packname = "Sticker By"
global.author = "ROYAL RAPH-PRO-V2"
global.creator = "23057130371@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["23057130371"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./EliteProMedia/theme/elitepro.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
