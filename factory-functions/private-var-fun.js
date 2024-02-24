function createUser (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }
console.log(josh.reputation);   // can't do that, variable reputation is what we call "private" variable
console.log(josh.getReputation());


// Prototypal inheritance with factories

function createPlayer (name, level) {
  const { getReputation, giveReputation } = createUser(name);   //extract from User object

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}