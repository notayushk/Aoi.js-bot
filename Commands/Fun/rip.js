module.exports = ({
    name: "rip",
    code: `$color[RANDOM]
    $image[https://dinosaur.ml/overlay/rip/?image=$userAvatar[$findUser[$message]]]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
