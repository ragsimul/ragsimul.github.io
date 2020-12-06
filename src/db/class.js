/*eslint-env browser*/
var m000 = "./src/char/M/000.gif",m001 ="./src/char/M/001.gif",m002 ="./src/char/M/002.gif",m009 = "./src/char/M/009.gif",
m110="./src/char/M/110.gif",m121="./src/char/M/121.gif",m122="./src/char/M/122.gif",m123="./src/char/M/123.gif",m124="./src/char/M/124.gif",m131="./src/char/M/131.gif",m132="./src/char/M/132.gif",m141="./src/char/M/141.gif",m142="./src/char/M/142.gif",
m210="./src/char/M/210.gif",m221="./src/char/M/221.gif",m222="./src/char/M/222.gif",m223="./src/char/M/223.gif",m224="./src/char/M/224.gif",m231="./src/char/M/231.gif",m232="./src/char/M/232.gif",m241="./src/char/M/241.gif",m242="./src/char/M/242.gif",
m310="./src/char/M/310.gif",m321="./src/char/M/321.gif",m322="./src/char/M/322.gif",m323="./src/char/M/323.gif",m324="./src/char/M/324.gif",m331="./src/char/M/331.gif",m332="./src/char/M/332.gif",m341="./src/char/M/341.gif",m342="./src/char/M/342.gif",
m410="./src/char/M/410.gif",m421="./src/char/M/421.gif",m422="./src/char/M/422.gif",m423="./src/char/M/423.gif",m424="./src/char/M/424.gif",m431="./src/char/M/431.gif",m432="./src/char/M/432.gif",m441="./src/char/M/441.gif",m442="./src/char/M/442.gif",
m510="./src/char/M/510.gif",m521="./src/char/M/521.gif",m522="./src/char/M/522.gif",m523="./src/char/M/523.gif",m524="./src/char/M/524.gif",m531="./src/char/M/531.gif",m532="./src/char/M/532.gif",m541="./src/char/M/541.gif",m542="./src/char/M/542.gif",
m610="./src/char/M/610.gif",m621="./src/char/M/621.gif",m622="./src/char/M/622.gif",m623="./src/char/M/623.gif",m624="./src/char/M/624.gif",m631="./src/char/M/631.gif",m632="./src/char/M/632.gif",m641="./src/char/M/641.gif",m642="./src/char/M/642.gif", f622="./src/char/F/622.gif", f624="./src/char/F/624.gif", f632="./src/char/F/632.gif", f642="./src/char/F/642.gif",
m710="./src/char/M/710.gif",m721="./src/char/M/721.gif",m722="./src/char/M/722.gif",m731="./src/char/M/731.gif",m732="./src/char/M/732.gif",
m810="./src/char/M/810.gif",m831="./src/char/M/831.gif",f831="./src/char/F/831.gif",m910="./src/char/M/910.gif",m931="./src/char/M/931.gif",
m003="./src/char/M/003.gif";

classImgNum = [m000, m001, m002, m009, m110, m121, m122, m123, m124,m131,m132,m141,m142,
              m210, m221, m222, m223, m224,m231,m232,m241,m242,
              m310, m321, m322, m323, m324,m331,m332,m341,m342,
              m410, m421, m422, m423, m424,m431,m432,m441,m442,
              m510, m521, m522, m523, m524,m531,m532,m541,m542,
              m610, m621, m622, m623, m624,m631,m632,m641,m642, f622, f624, f632, f642,
              m710, m721, m722, m731, m732,
              m810, m831, f831,
              m910, m931,
              m003];

noviceClasses = ['Novice', 'Emperium'];
noviceEXClasses = ['Super Novice'];
firstClasses = ['Swordman', 'Magician','Merchant','Acolyte', 'Theif', 'Archer', 'Taekwon Kid'];
firstEXClasses = ['Ninja','Gunslinger'];
secondClasses = ['Knight','Crusader','Wizard','Sage','Blacksmith','Alchemist','Priest','Monk','Assassin','Rogue','Hunter','Bard', 'Dancer','Taekwon Master','Soul Linker'];
secondtrClasses = ['Lord Knight','Paladin','High Wizard','Professor', 'Whitesmith','Creator','Assassin Cross', 'Stalker','Sniper','Clown', 'Gypsy'];
thirdClasses = ['Rune Knight', 'Royal Guard','Warlock', 'Sorcerer', 'Mechanic', 'Genetic', 'Arch Bishop', 'Sura', 'Guillotine Cross', 'Shadow Chaser',  'Ranger', 'Minstrel', 'Wanderer'];
thirdEXClasses = ['Super Novice EX', 'Star Emperer', 'Soul Reaper','Kagerou', 'Oboro', 'Rebelion']
fourthClasses = ['Dragon Knight', 'Imperial Guard', 'Arch Mage', 'Elemental Master','Meister', 'Biolo','Cardinal', 'Inquisiter','Shadow Cross', 'Abyss Chaser','Wind Hawk', 'Troubadour', 'Trouvere'];
doramClasses = ['Summoner']
classNameEN = ['Novice', 'Super Novice', 'Super Novice EX', 'Emperium',
            'Swordman', 'Knight', 'Crusader', 'Lord Knight', 'Paladin', 'Rune Knight', 'Royal Guard', 'Dragon Knight', 'Imperial Guard',
          'Magician', 'Wizard', 'Sage', 'High Wizard', 'Professor', 'Warlock', 'Sorcerer', 'Arch Mage', 'Elemental Master',
          'Merchant', 'Blacksmith', 'Alchemist', 'Whitesmith', 'Creator', 'Mechanic', 'Genetic', 'Meister', 'Biolo',
          'Acolyte', 'Priest', 'Monk', 'High Priest', 'Champion', 'Arch Bishop', 'Sura', 'Cardinal', 'Inquisiter',
          'Theif', 'Assassin', 'Rogue', 'Assassin Cross', 'Stalker', 'Guillotine Cross', 'Shadow Chaser', 'Shadow Cross', 'Abyss Chaser',
          'Archer', 'Hunter', 'Bard', 'Sniper', 'Clown', 'Ranger', 'Minstrel', 'Wind Hawk', 'Troubadour', 'Dancer', 'Gypsy', 'Wanderer', 'Trouvere',
          'Taekwon Kid', 'Taekwon Master', 'Soul Linker', 'Star Emperer', 'Soul Reaper',
          'Ninja', 'Kagerou', 'Oboro',
          'Gunslinger', 'Rebelion', 'Summoner'];
classSkilltree = ['./skills/000.html', './skills/001.html', './skills/002.html', './skills/009.html', './skills/110.html', './skills/121.html', './skills/122.html', './skills/123.html', './skills/124.html','./skills/131.html','./skills/132.html','./skills/141.html','./skills/142.html',
              './skills/210.html', './skills/221.html', './skills/222.html', './skills/223.html', './skills/224.html','./skills/231.html','./skills/232.html','./skills/241.html','./skills/242.html',
              './skills/310.html', './skills/321.html', './skills/322.html', './skills/323.html', './skills/324.html','./skills/331.html','./skills/332.html','./skills/341.html','./skills/342.html',
              './skills/410.html', './skills/421.html', './skills/422.html', './skills/423.html', './skills/424.html','./skills/431.html','./skills/432.html','./skills/441.html','./skills/442.html',
              './skills/510.html', './skills/521.html', './skills/522.html', './skills/523.html', './skills/524.html','./skills/531.html','./skills/532.html','./skills/541.html','./skills/542.html',
              './skills/610.html', './skills/621.html', './skills/622.html', './skills/622.html', './skills/623.html', './skills/624.html','./skills/624.html','./skills/631.html','./skills/632.html', './skills/632.html','./skills/641.html','./skills/642.html', './skills/642.html',
              './skills/710.html', './skills/721.html', './skills/722.html', './skills/731.html', './skills/732.html',
              './skills/810.html', './skills/831.html', './skills/831.html',
              './skills/910.html', './skills/931.html',
              './skills/000.html'];
