import { Telegraf } from 'telegraf';  

const BOT_TOKEN : string = process.env.TELEGRAM_BOT_TOKEN as string // Use environment variable  
const bot = new Telegraf(BOT_TOKEN);  

bot.start((ctx) => ctx.reply('Welcome!'));  
bot.help((ctx) => ctx.reply('Send me a message!'));  
bot.on('text', (ctx) => ctx.reply(`You said: ${ctx.message.text}`));  

export default bot;  