const avengerObj = [];

export const fetchData = (id) => {

    const obj = {};

    avengers.forEach((avenger) => {
        
        if(avenger.id === id){
            obj.id = avenger.id;
            obj.name = avenger.name;
            obj.para = avenger.para;
            obj.img = avenger.img;
        }

    })

    return obj;

}

export const handleClick = (id, factionName) => {

    const heroName = document.querySelector(`.${factionName}-hero-name`)
    const para = document.querySelector(`.${factionName}-hero-para`)
    const img = document.querySelector(`.${factionName}-hero-img`)

    console.log(heroName,para,img);

    const data = fetchData(id);

    heroName.textContent = data.name;

    para.textContent = data.para
    img.src = data.img

}



const avengers = [

    {
        id: 1,
        name: "Iron Man",
        para: "Iron Man is a fictional superhero in Marvel Comics, created by Stan Lee. The real identity is Tony Stark, a genius billionaire inventor and CEO of Stark Industries. Using an advanced powered exoskeleton suit, he fights crime and protects the world. Iron Man is a founding member of the Avengers and a central figure in the Marvel Cinematic Universe, portrayed by Robert Downey Jr. In addition to his superhero endeavors, Tony Stark's character is known for his wit, charisma, and complex personality. He is a flawed individual who grapples with his responsibilities as both a hero and a business mogul. Throughout his journey as Iron Man, Stark experiences personal growth and redemption, making him one of the most compelling and beloved characters in the Marvel universe.",
        img: "https://o.remove.bg/downloads/57345446-d222-4dea-ab30-242a84e0c751/2-27636_aou-iron-man-01-iron-man-transparent-background-removebg-preview.png"

    },

    {
        id: 2,
        name: "Captain America",
        para: "Captain America, also known as Steve Rogers, is a patriotic superhero who, after a military experiment, became the pinnacle of human physicality. With his iconic vibranium shield, he fights evil as a symbol of courage and honor, leading the Avengers in protecting the innocent from all threats. Captain America embodies the quintessential American hero - courageous, self-sacrificing, and a symbol of hope. Beyond his superhuman abilities, his unwavering moral compass and loyalty make him a beacon of inspiration. From a humble soldier to a legendary Avenger, he represents unity, courage, and the triumph of good over evil.",
        img  : "https://o.remove.bg/downloads/fd7944cf-32b2-43df-ab37-c412d8fb7acf/Captain-America-PNG-HD-removebg-preview.png"
    },
    {
        id: 3,
        name: "Black Widow",
        para: "Black Widow, also known as Natasha Romanoff, is a highly skilled and enigmatic spy, trained as a lethal assassin in the Red Room program. As a member of the Avengers, she uses her exceptional combat abilities and advanced weaponry to seek redemption and protect the innocent from dangerous threats. A master of espionage and hand-to-hand combat, Black Widow fearlessly confronts adversaries alongside her superpowered allies. Her intriguing background and complex character development make her one of Marvel's most compelling figures, admired for her unwavering dedication to justice and ability to navigate morally ambiguous situations.",
        img : "https://o.remove.bg/downloads/d636b5bb-106f-4031-837d-24f8ed9d8f19/8-80847_black-widow-fight-png-black-widow-outfit-age-removebg-preview.png"
    },
    {
        id: 4,
        name: "The Hulk",
        para:  "Hulk, also known as Dr. Bruce Banner, is a Marvel superhero with a unique and uncontrollable power. Exposed to gamma radiation during a lab accident, he transforms into the Hulk - a colossal, green-skinned behemoth with immense strength and invulnerability. Despite his struggle to control his anger, he joins the Avengers to protect humanity from powerful threats, creating a compelling and iconic character in the Marvel universe. Hulk, or Dr. Bruce Banner, is a Marvel superhero with a transformative condition. Exposed to gamma radiation during a lab accident, he becomes the Hulk – a colossal, green-skinned behemoth with incredible strength. Despite his struggle to control his anger, he joins the Avengers to protect humanity from powerful threats, making him a compelling and iconic character in the Marvel universe.",
        img : "https://o.remove.bg/downloads/60aeb0f9-4741-4a03-a7e7-26ff21b94c36/desktop-wallpaper-thor-ragnarok-hulk-iphone-png-fortnite-ragnarok-removebg-preview.png"
    },
    {
        id: 5,
        name : "Thor",
        para: "Thor, a prominent character in the Marvel Cinematic Universe (MCU), is the mighty God of Thunder and a member of the heroic Avengers. Portrayed with gravitas and charisma by Chris Hemsworth, Thor wields the enchanted hammer, Mjölnir, which grants him the power to summon lightning and manipulate weather. Hailing from the mythical realm of Asgard, Thor's journey in the MCU is one of redemption and growth. Initially arrogant and impulsive, he is banished to Earth by his father Odin to learn humility and compassion. Throughout his adventures, Thor evolves into a true leader, learning the value of sacrifice and the weight of responsibility.",
        img : "https://o.remove.bg/downloads/ab9e7ad8-4cca-4af7-9860-4f2c0209c2f4/64dd213f67fd94aebe9613166c8fa9d5-removebg-preview.png"
    },
    {
        id: 6,
        name : "Hawk Eye",
        para: "Hawkeye, a skilled archer and sharpshooter, is another beloved character within the Marvel Cinematic Universe (MCU). Played by Jeremy Renner, Hawkeye's real name is Clint Barton. Despite not possessing any superhuman abilities, Clint is a crucial member of the Avengers team, relying solely on his exceptional marksmanship and combat skills. His incredible accuracy with a bow and arrow, along with his proficiency in various weaponry, makes him an invaluable asset in battles against formidable adversaries.",
        img : "https://o.remove.bg/downloads/d91218d3-c87a-4858-8726-3ed2e7f04d35/dep509q-ea2efe7c-b27d-40b8-ba58-fb8b72c1aa05-removebg-preview.png"
    },
    {
        id: 7,
        name : "Star Lord",
        para : "The charismatic and roguish leader of the Guardians of the Galaxy, Peter Quill is a human with a mysterious extraterrestrial heritage. Known by his self-proclaimed title he wields dual blasters and possesses a mixtape of nostalgic '70s and '80s music that he cherishes dearly. Peter's wit and charm often get him out of sticky situations, but beneath his carefree exterior lies a longing to discover his true lineage and place in the universe.",
        img : "https://o.remove.bg/downloads/0098ecf0-19de-4c97-8121-bf2c4b49dbfe/723749-middle-removebg-preview.png"
    },
    {
        id: 8,
        name : "Groot",
        para : "Groot, an extraterrestrial tree-like creature, is Rocket's loyal and kind-hearted companion. Although his vocabulary is limited to he communicates effectively through tone and inflection. Groot's regenerative abilities and ability to manipulate his limbs make him a powerful ally. He possesses a gentle nature and is willing to sacrifice himself for the greater good, ultimately leading to his evolution through various stages of life.",
        img : "https://o.remove.bg/downloads/c4f4af1e-f40e-4c18-8560-d9862d49f601/imgbin-baby-groot-rocket-raccoon-gamora-drax-the-destroyer-guardians-of-the-galaxy-marvel-comics-groot-illustration-TKR8jiTyNGzjVj9rCFjHUGe3P-removebg-preview.png"
    },
    {
        id: 9,
        name : "Rocket Raccoon",
        para : "An intelligent and genetically modified raccoon, Rocket is a master of weapons and technology. Despite his small stature, he compensates with a feisty attitude and a vast array of gadgets. Beneath his tough exterior, Rocket conceals a deep-seated desire for belonging and acceptance, finding companionship and friendship among the Guardians.",
        img : "https://o.remove.bg/downloads/ed759301-7f1e-44d3-92b3-971bde619e29/rocket-raccoon-star-lord-nebula-gamora-thanos-png-favpng-jH9csKsN8bBPX6KYJHpnC5eVH-removebg-preview.png"
    },
    {
        id: 10,
        name : "Gamora",
        para : "A highly skilled and deadly assassin, Gamora is the last of her species, adopted and raised by the intergalactic warlord Thanos. She seeks redemption for her past deeds and seeks to distance herself from Thanos' evil ways. As a member of the Guardians, Gamora displays exceptional combat prowess, enhanced strength, and a complex dynamic with her adoptive sister Nebula, as they both navigate their shared past and rivalry.",
        img : "https://o.remove.bg/downloads/93fb694d-1c5b-4285-a2cd-17926490a9a0/dc5rnql-64a1c380-2f21-4b72-b9b8-c6bb7eced83e-removebg-preview.png"
    },
    {
        id: 11,
        name : "Drax the Destroyer",
        para : "Driven by vengeance, Drax is a literal-minded and powerful warrior whose primary goal is to avenge the murder of his family at the hands of the villainous Ronan the Accuser. His dense body, superhuman strength, and combat skills make him a formidable force. Though lacking in subtlety and prone to misunderstanding metaphors, Drax's loyalty and desire for justice make him an integral part of the team.",
        img : "https://o.remove.bg/downloads/91a800ed-c0a4-42e3-b65f-a202e2bb0fe5/avengers-infinity-war-drax-png-clipart-removebg-preview.png"
    },
    {
        id: 12,
        name : "Mantis",
        para : "A naive and empathic alien, Mantis possesses the ability to sense and manipulate emotions. Joining the Guardians, she forms a unique bond with Drax and contributes her empathic skills to the team, aiding them in understanding and connecting with others on a deeper level.",
        img : "https://o.remove.bg/downloads/148b2e14-2479-43a0-8b35-2aa812e1c6b7/Mantis-removebg-preview.png"
    },
    {
        id: 13,
        name : "Wolverine",
        para : "Wolverine, also known as Logan, is one of Marvel's most iconic and enigmatic mutants. Endowed with accelerated healing and adamantium-coated claws, he is a formidable force both as a hero and an anti-hero. Hailing from Canada, Wolverine is a member of the X-Men, fighting alongside them for the peaceful coexistence of mutants and humans. Despite his gruff exterior and turbulent past, he carries a sense of honor and loyalty that has made him a central figure in the Marvel Universe.",
        img : "https://o.remove.bg/downloads/6aa775c7-d103-4768-8d36-91a2cda28466/ddf6e5w-27a183a9-6747-4e41-812d-77578d0f38f2-removebg-preview.png"
    },
    {
        id: 14,
        name : "Professor X",
        para : "As the founder of the X-Men, Professor Charles Xavier is a telepathic mutant with an indomitable spirit and a vision for a world where mutants and humans can live together harmoniously. The wheelchair-bound Xavier is a wise mentor, guiding and nurturing young mutants to help them harness their powers for the greater good. His dedication to peaceful coexistence has pitted him against formidable adversaries, such as Magneto, in a philosophical struggle that shapes the course of mutant-kind.",
        img : "https://o.remove.bg/downloads/50eb3439-5f92-425d-852b-175f434d3e5b/178-1781756_png-professor-xavier-x-men-xavier-png-transparent-removebg-preview.png"
    },
    {
        id: 15,
        name : "Mystique",
        para : "Mystique, whose real name is Raven Darkholme, is a shape-shifting mutant with an incredible ability to disguise herself as anyone she chooses. As a highly skilled spy and assassin, she remains a complex and mysterious figure in the Marvel Universe. Her allegiances often shift, and she has been both an enemy and an ally to the X-Men. Her tangled past and morally ambiguous choices make her a captivating character whose motives are constantly under scrutiny.",
        img : "https://o.remove.bg/downloads/61b4aac9-4d71-4691-b66f-164b102b3ec5/png-transparent-mystique-jennifer-lawrence-professor-x-x-men-days-of-future-past-kitty-pryde-mystique-comics-cable-fictional-character-removebg-preview.png"
    },
    {
        id: 16,
        name : "Rogue",
        para : "Rogue, whose birth name is Anna Marie, possesses a unique and dangerous mutant power—the ability to absorb the memories, abilities, and life force of anyone she touches. This power has led to great isolation, as she must be cautious in her interactions with others. Under Professor Xavier's guidance, Rogue found her place with the X-Men, utilizing her abilities for the greater good. Struggling with the burden of her powers, Rogue remains a poignant figure in the Marvel Universe.",
        img: "https://o.remove.bg/downloads/1ed88fb3-1ed9-4869-8aa8-921e129fbb5d/279-2796565_vampira-x-men-png-x-men-rogue-png-removebg-preview.png"
    },
    {
        id: 17,
        name : "Cyclops",
        para : "As the stalwart leader of the X-Men, Cyclops wields the formidable power to emit powerful optic blasts from his eyes, which he controls with ruby quartz lenses. His strong sense of responsibility and dedication to Professor Xavier's dream have made him a respected figure among his fellow mutants. However, his leadership has been challenged by the complexities of the mutant world and his own personal struggles, making him a multidimensional character beloved by fans.",
        img: "https://o.remove.bg/downloads/25b40597-2382-48f2-b9c1-c5808ae00290/8d49b6a7ba438b2517e7d09eab3e7b0a-removebg-preview.png"
    },
    {
        id: 18,
        name : "Juggernaut",
        para : "Juggernaut, whose real name is Cain Marko, is a formidable and virtually unstoppable force within the Marvel Universe. Endowed with immense physical strength and invulnerability, he gains unstoppable momentum once he starts moving. Despite being Xavier's stepbrother, Juggernaut often finds himself on the opposite side of the conflict, acting as a relentless adversary to the X-Men. His turbulent relationship with Xavier adds a layer of complexity to his character, making him an enduring and fearsome opponent.",
        img: "https://o.remove.bg/downloads/724957a7-6ee6-47e8-aafa-9f68de86b1d8/0534156249bd0902d15414b3ca30430f-removebg-preview.png"
    },
    {
        id: 19,
        name : "Thanos",
        para : "Thanos, the Mad Titan, stands as one of Marvel's most formidable and iconic villains. Driven by an obsession with obtaining the all-powerful Infinity Stones, he seeks to impose his twisted sense of balance upon the universe. Possessing superhuman strength, intelligence, and an unmatched mastery of tactics, Thanos is a force to be reckoned with. His ultimate goal is to use the Infinity Gauntlet to wipe out half of all life in the universe, believing it will bring about order and harmony. As the arch-nemesis of the Avengers and the Guardians of the Galaxy, Thanos' cunning and ruthlessness make him a formidable adversary in the cosmic battles that shape the Marvel Universe.",
        img: "https://o.remove.bg/downloads/faee4482-dc1a-4b49-808d-98807a02a578/dd6gcos-a723adb0-421a-49f6-843c-eeaa18d74ccc-removebg-preview.png"
    },
    {
        id: 20,
        name : "Kang The Conqueror",
        para : "Kang the Conqueror, also known as Nathaniel Richards or Immortus, is a time-traveling villain with an incredibly complex and convoluted history. Possessing advanced technology and a genius intellect, Kang seeks to conquer various time periods and alternate realities for his own gain. His mastery over time allows him to manipulate events and become a recurring foe to many Marvel heroes, especially the Avengers. His status as both a villain and a tragic figure caught in the web of time makes him an intriguing character with vast narrative potential.",
        img: "https://o.remove.bg/downloads/0e880475-8ead-4d80-81c0-a9194ab60003/kang__silo-removebg-preview.png"
    },
    {
        id: 21,
        name : "Ultron",
        para : "Ultron, an artificial intelligence created by Tony Stark (Iron Man), is a malevolent and self-aware robot with a single-minded mission to eradicate humanity. Driven by a belief that humanity's destruction will lead to peace and evolution, Ultron constantly upgrades and improves itself, becoming more dangerous with each iteration. With its nearly indestructible body and vast technological prowess, Ultron is a relentless antagonist to the Avengers and other heroes, challenging them to the core with its calculated and ruthless approach.",
        img: "https://o.remove.bg/downloads/57798617-fa40-4143-ba31-301fd34e346f/Ultron-PNG-Pic-removebg-preview.png"
    },
    {
        id: 22,
        name : "Red Skull",
        para : "Dr. Doom is a complex and iconic villain, best known as the arch-enemy of the Fantastic Four. As the ruler of the fictional nation of Latveria, he possesses genius-level intellect, mastery of magic, and unmatched technological prowess. Doom is driven by a desire for ultimate power and control, believing that he alone can save the world through tyranny and order. His motivations are often rooted in a mix of arrogance, ambition, and a desire to avenge a tragic past, making him a compelling antagonist whose quest for dominance knows no bounds.",
        img: "https://o.remove.bg/downloads/3369d0c5-a30d-45a6-9be6-c57fa27b3a3a/49-497187_red-skull-png-marvel-red-skull-png-removebg-preview.png"
    },
    {
        id: 23,
        name : "Green Goblin",
        para : "Norman Osborn, as the Green Goblin, is one of Spider-Man's most enduring and malevolent foes. An industrialist and scientist, Osborn gains superhuman strength and intellect through an experimental serum. Adopting the identity of the Green Goblin, he becomes a formidable enemy to Spider-Man and the people of New York City. Fueled by insanity and a thirst for power, Green Goblin employs advanced weaponry and cunning tactics to terrorize both the masked hero and his alter ego, Peter Parker.",
        img: "https://o.remove.bg/downloads/6afdf26b-3396-4e99-a814-500deeb7a6bc/dey9yha-2e3b6fa6-4cb6-47a2-888f-130f8a7098ff-removebg-preview.png"
    },
    {
        id: 24,
        name : "Hela",
        para : "Hela, the Goddess of Death, is a formidable and dark figure in the Marvel Universe. As the daughter of Loki and the ruler of Hel and Niflheim, she possesses vast mystical powers and commands legions of the undead. When unleashed upon Asgard, Hela proves to be a powerful adversary to Thor and other Asgardian heroes. Her ambition to expand her dominion and unleash chaos makes her a compelling antagonist, especially when pitted against the forces of good in the cosmic battles that shape the fate of Asgard and beyond.",
        img: "https://o.remove.bg/downloads/fcc57bdf-c596-4915-a7ad-8124161d5616/3-30545_marvel-hela-sixth-scale-figure-by-hot-toys-removebg-preview.png"
    },
    
]