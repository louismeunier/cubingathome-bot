const error = require("../utils/components/error");
const Embed = require("../utils/components/cahEmbed");

function execute(message, args) {
    //better way to do this??
    const URL = "https://discord.com/api/oauth2/authorize?client_id=809433538851897404&permissions=387136&scope=bot";
    const Invite = Embed("Link", [{name:"Thanks for inviting me! <3", value: URL}]);
    message.author.send(Invite)
        .then(_ => {
            message.reply("DM'ed you the link!")
            .then(msg=>{
                msg.delete({ timeout: 5000}).catch(_=>console.log("failed to delete"))
                message.delete({ timeout: 5000}).catch(_=>console.log("failed to delete"))
            })
            .catch(err => {
                message.delete({ timeout: 5000 }).catch(err => error("Failed to delete",err))
                error(message, "Failed to DM you! Please turn on DM's from mutual servers.")
            })
        })
        .catch(err => {
            error(message, "Failed to DM you, please turn on your DM's from server mutuals!")
        })

}


module.exports = {
    name: "invite",
    description: "Invite BottingAtHome to your own server",
    cooldown: 2,
    execute
}