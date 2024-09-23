import bot from '@/bot/bot';  

// export const config = {  
//     api: {  
//         bodyParser: false,  
//     },  
// };  

const handler = async (req : any, res : any) => {  
    // Expecting POST requests from Telegram  
    if (req.method === 'POST') {  
        // Pass the update to the bot  
        bot.handleUpdate(req.body, res);  
        res.status(200).end();  
    } else {  
        res.setHeader('Allow', ['POST']);  
        res.status(405).end(`Method ${req.method} Not Allowed`);  
    }  
};  

export default handler;  