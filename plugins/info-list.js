let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "📊Test Speed", rowId: '.testspeed', description: 'Test Speed' },
	    {title: "📉Stats Server", rowId: '.statserver', description: 'Status server' },
	{title: "👤Owner", rowId: '.owner', description: 'Owner Mizuhara-Mdོ' },
	{title: "💰Donasi", rowId: '.donasi', description: 'Support Defan' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "📖Rules", rowId: '.rules', description: 'S&K Mizuhara-Mdོ' },
	    {title: "⛔", rowId: 'huuu', description: 'No menu' },
	{title: "⚡Speed", rowId: '.speed', description: 'Speed Mizuhara-Mdོ' },
	{title: "💰Sewa BOT", rowId: '.sewa', description: 'Sewa Mizuhara-Mdོ' },
	{title: "🗣️Request Fitur", rowId: '.request', description: 'Request Fitur Mizuhara-Mdོ' },
	{title: "🌏Lokasi BOT", rowId: '.loc2', description: 'Lokasi Mizuhara-Mdོ' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler
