module.exports = ({
    name: "play",
    code: `
    $author[Added Song]
    $description[Added **$playSong[$noMentionMessage;1d;yes;{title:Error} {description:Something went wrong!} {color:RED}] **onto queue!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:FF0000}]`
    });
