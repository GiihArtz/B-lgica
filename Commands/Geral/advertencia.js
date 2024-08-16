const Discord = require("discord.js")
const config = require("../../config.json")

module.exports = {
    name: "advertencia", // Coloque o nome do comando
    description: "[👑 Moderação] Painel de comandos do sistema policial.", // Coloque a descrição do comando
    type: Discord.ApplicationCommandType.ChatInput,
    options: [
        {
            name: "usuario",
            description: "Mencione o Oficial Advertido",
            type: Discord.ApplicationCommandOptionType.User,
            required: true
        },
        {
            name: "motivo",
            description: "Escreva o Motivo da Advertencia",
            type: Discord.ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: "provas",
            description: "Forneça uma evidência para o aviso. Você pode enviar essas imagens para um site.",
            type: Discord.ApplicationCommandOptionType.String,
            required: false
        },
    ],
    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageGuild)) {
            interaction.reply({ content: `<:icons_Wrong75:1198037616956821515> | Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let usuario2 = interaction.options.getUser("usuario");
              
