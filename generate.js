let animals = [
  "axolotl",
  "bat",
  "bee",
  "cat",
  "chicken",
  "cod",
  "cow",
  "dolphin",
  "donkey",
  "fox",
  "goat",
  "glow_squid",
  "horse",
  "iron_golem",
  "llama",
  "mooshroom",
  "mule",
  "ocelot",
  "parrot",
  "panda",
  "pig",
  "polar_bear",
  "pufferfish",
  "rabbit",
  "salmon",
  "sheep",
  "skeleton_horse",
  "snow_golem",
  "squid",
  "strider",
  "trader_llama",
  "tropical_fish",
  "turtle",
  "villager",
  "wandering_trader",
  "wolf",
];

// let out = "";
// let out2 = "";

// animals.forEach((animal) => {
//   out += `
//     "killed_${animal}": {
//         "trigger": "minecraft:player_killed_entity",
//         "conditions": {
//             "entity": {
//                 "type": "minecraft:${animal}"
//             }
//         }
//     },`;

//   out2 += `
//     "killed_${animal}", `;
// });

// console.log(out);
// console.log(out2);

let foods = [
  "porkchop",
  "cooked_porkchop",
  "beef",
  "cooked_beef",
  "cod",
  "cooked_cod",
  "salmon",
  "cooked_salmon",
  "pufferfish",
  "tropical_fish",
  "mutton",
  "cooked_mutton",
  "rabbit",
  "cooked_rabbit",
  "chicken",
  "cooked_chicken",
  "rabbit_stew",
];

let out = "";
let out2 = "";
foods.forEach((food) => {
  out += `
  "consumed_${food}": {
    "trigger": "minecraft:consume_item",
    "conditions": {
      "item": {
        "item": "minecraft:${food}"
      }
    }
  },`;

  out2 += `
    "consumed_${food}", `;
});
console.log(out);
console.log(out2);
