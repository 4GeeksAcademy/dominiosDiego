

//Diego Vega 4Geeks con for-of-----------------------//Diego Vega 4Geeks con for-of-----------------------//Diego Vega 4Geeks con for-of

// let pronoun = ['the', 'our'];
// let adj = ['great', 'big'];
// let noun = ['jogger', 'racoon'];
// let extensions = ['.com', '.net', '.io', '.es', '.zas'];

// for (let p of pronoun) {
//   for (let a of adj) {
//     for (let n of noun) {
//       for (let ext of extensions) {
//         console.log(p + a + n + ext);
//       }
//     }
//   }
// }

//Diego Vega 4Geeks con forEach-----------------------//Diego Vega 4Geeks con forEach---------------------//Diego Vega 4Geeks con forEach
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.io', '.es', '.zas'];


let domains = [];

pronoun.forEach(p => {
    adj.forEach(a => {
        noun.forEach(n => {
            extensions.forEach(e => {
            
            domains.push(`${p}${a}${n}${e}`);
            });
        });
    });
});

domains.forEach(domain => {
    console.log(domain);
});

//Diego Vega 4Geeks con MAP -----------------------//Diego Vega 4Geeks con MAP-----------------------//Diego Vega 4Geeks con MAP

// let pronouns = ['the', 'our'];
// let adjectives = ['great', 'big'];
// let nouns = ['jogger', 'racoon'];
// let extensions = ['.com', '.net', '.io', '.es', '.zas'];

// let domainNames = pronouns.flatMap(pronoun => 
//                     adjectives.flatMap(adj => 
//                         nouns.flatMap(noun => 
//                             extensions.map(ext => `${pronoun}${adj}${noun}${ext}`)
//                  )
//         )
// );

// console.log(domainNames.join('\n'));
