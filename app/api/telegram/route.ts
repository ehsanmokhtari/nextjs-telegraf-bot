export const dynamic = "force-dynamic";

export const fetchCache = "force-no-store";

import bot from '@/bot/bot';  
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {  
//     if (req.method === 'POST') {  
//         // Pass the update to the bot  
//         bot.handleUpdate(req.body, res);  
//         res.status(200).end();  
//     } else {  
//         res.setHeader('Allow', ['POST']);  
//         res.status(405).end(`Method ${req.method} Not Allowed`);  
//     }  
// }

export const POST = bot.webhookCallback();