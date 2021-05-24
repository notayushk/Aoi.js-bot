module.exports ({
name: "setbio",
code: `
  $setGlobalUserVar[bio;$noMentionMessage]
  Successfully changed you bio to `$noMentionMessage`
  $onlyIf[$noMentionMessage!=;Please provide some text]`
)};
