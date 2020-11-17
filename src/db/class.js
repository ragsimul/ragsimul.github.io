/*eslint-env browser*/
var c000 = "src/char/M/000.gif",c001 ="src/char/M/001.gif",c002 ="src/char/M/002.gif",c009 = "src/char/M/009.gif",
c110="src/char/M/110.gif",c121="src/char/M/121.gif",c122="src/char/M/122.gif",c123="src/char/M/123.gif",c124="src/char/M/124.gif",c131="src/char/M/131.gif",c132="src/char/M/132.gif",c141="src/char/M/141.gif",c142="src/char/M/142.gif",
c210="src/char/M/210.gif",c221="src/char/M/221.gif",c222="src/char/M/222.gif",c223="src/char/M/223.gif",c224="src/char/M/224.gif",c231="src/char/M/231.gif",c232="src/char/M/232.gif",c241="src/char/M/241.gif",c242="src/char/M/242.gif",
c310="src/char/M/310.gif",c321="src/char/M/321.gif",c322="src/char/M/322.gif",c323="src/char/M/323.gif",c324="src/char/M/324.gif",c331="src/char/M/331.gif",c332="src/char/M/332.gif",c341="src/char/M/341.gif",c342="src/char/M/342.gif",
c410="src/char/M/410.gif",c421="src/char/M/421.gif",c422="src/char/M/422.gif",c423="src/char/M/423.gif",c424="src/char/M/424.gif",c431="src/char/M/431.gif",c432="src/char/M/432.gif",c441="src/char/M/441.gif",c442="src/char/M/442.gif",
c510="src/char/M/510.gif",c521="src/char/M/521.gif",c522="src/char/M/522.gif",c523="src/char/M/523.gif",c524="src/char/M/524.gif",c531="src/char/M/531.gif",c532="src/char/M/532.gif",c541="src/char/M/541.gif",c542="src/char/M/542.gif",
c610="src/char/M/610.gif",c621="src/char/M/621.gif",c622="src/char/M/622.gif",c623="src/char/M/623.gif",c624="src/char/M/624.gif",c631="src/char/M/631.gif",c632="src/char/M/632.gif",c641="src/char/M/641.gif",c642="src/char/M/642.gif",
c710="src/char/M/710.gif",c721="src/char/M/721.gif",c722="src/char/M/722.gif",c731="src/char/M/731.gif",c732="src/char/M/732.gif",
c810="src/char/M/810.gif",c831="src/char/M/831.gif",c910="src/char/M/910.gif",c931="src/char/M/931.gif";

classImgNum = [c000, c001, c002, c009, c110, c121, c122, c123, c124,c131,c132,c141,c142,
              c210, c221, c222, c223, c224,c231,c232,c241,c242,
              c310, c321, c322, c323, c324,c331,c332,c341,c342,
              c410, c421, c422, c423, c424,c431,c432,c441,c442,
              c510, c521, c522, c523, c524,c531,c532,c541,c542,
              c610, c621, c622, c623, c624,c631,c632,c641,c642,
              c710, c721, c722, c731, c732,
              c810, c831,
              c910, c931];

noviceClasses = ['Novice', 'Emperium'];
noviceEXClasses = ['Super Novice'];
firstClasses = ['Swordman', 'Magician','Merchant','Acolyte', 'Theif', 'Archer', 'Taekwon Kid'];
firstEXClasses = ['Ninja','Gunslinger'];
secondClasses = ['Knight','Crusader','Wizard','Sage','Blacksmith','Alchemist','Priest','Monk','Assassin','Rogue','Hunter','Bard','Taekwon Master','Soul Linker'];
secondtrClasses = ['Lord Knight','Paladin','High Wizard','Professor', 'Whitesmith','Creator','Assassin Cross', 'Stalker','Sniper','Clown'];
thirdClasses = ['Rune Knight', 'Royal Guard','Warlock', 'Sorcerer', 'Mechanic', 'Genetic', 'Arch Bishop', 'Sura', 'Guillotine Cross', 'Shadow Chaser',  'Ranger', 'Minstrel'];
thirdEXClasses = ['Super Novice EX', 'Star Emperer', 'Soul Reaper','Kagerou', 'Rebelion']
fourthClasses = ['Dragon Knight', 'Imperial Guard', 'Arch Mage', 'Elemental Master','Meister', 'Biolo','Cardinal', 'Inquisiter','Shadow Cross', 'Abyss Chaser','Wind Hawk', 'Troubadour'];
doramClasses = ['Summoner']
classNameEN = ['Novice', 'Super Novice', 'Super Novice EX', 'Emperium',
            'Swordman', 'Knight', 'Crusader', 'Lord Knight', 'Paladin', 'Rune Knight', 'Royal Guard', 'Dragon Knight', 'Imperial Guard',
          'Magician', 'Wizard', 'Sage', 'High Wizard', 'Professor', 'Warlock', 'Sorcerer', 'Arch Mage', 'Elemental Master',
          'Merchant', 'Blacksmith', 'Alchemist', 'Whitesmith', 'Creator', 'Mechanic', 'Genetic', 'Meister', 'Biolo',
          'Acolyte', 'Priest', 'Monk', 'High Priest', 'Champion', 'Arch Bishop', 'Sura', 'Cardinal', 'Inquisiter',
          'Theif', 'Assassin', 'Rogue', 'Assassin Cross', 'Stalker', 'Guillotine Cross', 'Shadow Chaser', 'Shadow Cross', 'Abyss Chaser',
          'Archer', 'Hunter', 'Bard', 'Sniper', 'Clown', 'Ranger', 'Minstrel', 'Wind Hawk', 'Troubadour',
          'Taekwon Kid', 'Taekwon Master', 'Soul Linker', 'Star Emperer', 'Soul Reaper',
          'Ninja', 'Kagerou',
          'Gunslinger', 'Rebelion'];
classSkilltree = ['skills/000.html', 'skills/001.html', 'skills/002.html', 'skills/009.html', 'skills/110.html', 'skills/121.html', 'skills/122.html', 'skills/123.html', 'skills/124.html','skills/131.html','skills/132.html','skills/141.html','skills/142.html',
              'skills/210.html', 'skills/221.html', 'skills/222.html', 'skills/223.html', 'skills/224.html','skills/231.html','skills/232.html','skills/241.html','skills/242.html',
              'skills/310.html', 'skills/321.html', 'skills/322.html', 'skills/323.html', 'skills/324.html','skills/331.html','skills/332.html','skills/341.html','skills/342.html',
              'skills/410.html', 'skills/421.html', 'skills/422.html', 'skills/423.html', 'skills/424.html','skills/431.html','skills/432.html','skills/441.html','skills/442.html',
              'skills/510.html', 'skills/521.html', 'skills/522.html', 'skills/523.html', 'skills/524.html','skills/531.html','skills/532.html','skills/541.html','skills/542.html',
              'skills/610.html', 'skills/621.html', 'skills/622.html', 'skills/623.html', 'skills/624.html','skills/631.html','skills/632.html','skills/641.html','skills/642.html',
              'skills/710.html', 'skills/721.html', 'skills/722.html', 'skills/731.html', 'skills/732.html',
              'skills/810.html', 'skills/831.html',
              'skills/910.html', 'skills/931.html'];
