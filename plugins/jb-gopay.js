let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `${htki} GOPAY ${htka}

Hay👋‹, ingin melanjutkan pembayaran?

💌 *Pembayaran*
💳 Via: Gopay
📞 Nomor: 081321776496
👤 A/n: Defan
📦 Mitra: Mizuhara-Mdོ
💰 Metode pembayaran: Online ( ~Cod~ )

✏️ _Informasi Pembayaran_

Pembayaran Sewa hanya dapat menggunakan saldo.
Pastikan saldo kamu mencukupi untuk bertransaksi!


❗KLIK *SUDAH BAYAR* JIKA SUDAH MEMBAYAR!
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'QRIS', url: 'https://telegra.ph/file/ff71853efeb006d635a90.jpg'}},
    {index: 4, quickReplyButton: {displayText: 'Sudah membayar', id: '.sudahbayar'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^gopay$/i
handler.private = true

export default handler
