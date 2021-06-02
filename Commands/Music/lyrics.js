module.exports = ({
    name: "lyrics",
    code: `$color[RANDOM]
    $if[$argsCount>0]
    $title[Lyrics for $message]
    $description[$jsonRequest[https://some-random-api.ml/lyrics?title=$replaceText[$message; ;+];lyrics;{description: No lyrics found for this song!}{color:RANDOM}]]
    $endif
   $onlyIf[$checkContains[$channelType;text;news]==true;]
$onlyBotPerms[embedlinks; {description: I need these permissions - **Embed Links**}{color:RANDOM}]`
})
