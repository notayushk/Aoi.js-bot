module.exports ({
name: "avatar",
code: `
    $description[<@$findMember[$message]>'s avatar]
    $image[$userAvatar[$findMember[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
});
