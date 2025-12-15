import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const PROMPT_BASE = "Você é um bot de discord desenvolvido por SilvaTweaks. Responda de forma educada e profissional.";

client.once("ready", () => {
    console.log("Bot conectado");
});

client.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith("!ai")) return;

    const userMessage = message.content.replace("!ai", "").trim();
    if (!userMessage) {
        return message.reply("Escreva algo após o comando.");
    }

    await message.channel.sendTyping();

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "openai/gpt-4o-mini",
                messages: [
                    { role: "system", content: PROMPT_BASE },
                    { role: "user", content: userMessage }
                ]
            })
        });

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || "Erro ao gerar resposta.";

        message.reply(reply.slice(0, 2000));
    } catch (err) {
        console.error(err);
        message.reply("Erro ao conectar à API.");
    }
});

client.login(process.env.DISCORD_TOKEN);
