module.exports ({
name: "daily",
code: `
   $setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet];500]]
   $globalCooldown [1d;You can claim your next daily %%time%%]
   Congrats!You claimed you daily 500 coins
`
)};
