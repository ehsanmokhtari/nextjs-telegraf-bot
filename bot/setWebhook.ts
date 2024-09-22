import { Telegraf, Context } from 'telegraf';  

interface MyContext extends Context {
    myProp?: string
    myOtherProp?: number
  }

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN as string;  
const bot = new Telegraf<MyContext>(BOT_TOKEN);  

const setWebhook = async () => {  
    const webhookUrl = `https://<your-vercel-app>.vercel.app/api/telegram`;  
    await bot.telegram.setWebhook(webhookUrl);  
    console.log(`Webhook set to ${webhookUrl}`);  
};  

setWebhook().catch(console.error);  