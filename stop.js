module.exports = ({
    name: "stop",
    code: `$color[RANDOM]
    $description[Stopped the song!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:You must be in a Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:The queue is empty!}]
    `
})
