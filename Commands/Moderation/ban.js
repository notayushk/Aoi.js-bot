module.exports({
name:'ban',
code: `
**$userTag[$authorID]**  banned \`$userTag[$findUser[$message[1];no]]\`
$onlyIf[$isBanned[$findUser[$message[1];no]]==false;The user is already been banned before]
$onlyPerms[ban;You do not have permission]
$onlyBotPerms[ban;I do not have permission]
$onlyIf[$memberExists[$findUser[$message[1];no];$guildID]==true;User not found]
$onlyIf[$findUser[$message[1];no]!=$ownerID;I cannot ban owner]
`})
