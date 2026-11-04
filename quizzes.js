// Quiz data. Add a quiz by appending an object to D.
// Each question: [text, [choices], correctIndex or [indices], stableId]
// Never change a question's id once it exists (weak-spot tracking depends on it).

// Display order of exam groups. Each quiz's `exam` must match one of these.
const EXAMS = ["Midterm 1"];   // add "Midterm 2" here when you add its quizzes

const D = [
  {
    id: "C1",
    title: "C1 · Ancient music",
    exam: "Midterm 1",
    qs: [
      ["Our knowledge of ancient (pre-literate) music is based on what?", ["depictions in visual art", "surviving instruments", "writings on music", "all of the above"], 3, "c1-q1"],
      ["Which of the following was not one of the most important instruments in ancient Greek music?", ["aulos", "lyre", "kithara", "ukelele"], 3, "c1-q2"],
      ["Aristoxenus, Cleonides, and Aristides Quintilianus were all what?", ["Olympic athletes", "musical performers", "music theorists", "all of the above"], 2, "c1-q3"],
      ["Who wrote about music in terms of ethos and the Doctrine of Imitation in his book Poetics?", ["Socrates", "Plato", "Aristotle", "Ptolemy"], 2, "c1-q4"],
      ["Seven-note scales, going back to the Babylonians, with parallels in ancient Greek music and music today, are called what (the appropriate adjective)?", ["pentatonic", "chromatic", "whole-tone", "diatonic"], 3, "c1-q5"],
      ["In ancient Mesopotamian music, hymns were songs to what?", ["a god or gods", "lovers", "temples", "stars"], 0, "c1-q6"],
      ["Which of the following is not true of the Epitaph of Seikilos?", ["It is the oldest piece of music associated with the Western tradition that survives in its entirety", "It is monophonic, but may not always have been performed that way", "It was written specifically for the lyre", "It has text attached to it"], 2, "c1-q7"],
      ["Which of the following was one of the two specifically Greek contributions to ancient music?", ["the interlocking of melody with the rhythm of words", "instead of notation, there was reliance on oral tradition and knowledge of conventions/formulas", "a scientifically based acoustical theory", "a view of music as a system linked to nature and human thought and behavior"], 2, "c1-q8"],
    ]
  },
  {
    id: "C2",
    title: "C2 · Chant & modes",
    exam: "Midterm 1",
    qs: [
      ["Which of the following is not true about the modes?", ["Each one has a final, standard range, and reciting tone", "Odd-numbered ones are called authentic", "Even-numbered ones are called plagal", "Paired modes have different ranges and reciting tones, but share a final", "The only pitch names for finals are D, E, F, and G", "Each mode features absolute pitch specificity"], 5, "c2-q1"],
      ["Each of the eight church modes is essentially characterized by what?", ["its arrangement/sequence of whole and half steps in relation to the final", "its unique rhythmic properties", "its number of pitches", "none of the above"], 0, "c2-q2"],
      ["Who loved music but was extremely suspicious of its power to give pleasure?", ["St. Basil", "St. Augustine", "Egeria", "Charlemagne"], 1, "c2-q3"],
      ["Who divided music into three types: musica mundana, musica humana, and musica instrumentalis?", ["St. Augustine", "Martianus Capella", "Boethius", "Guido of Arezzo"], 2, "c2-q4"],
      ["In the four-line staff suggested by Guido of Arezzo, what interval separated each line from the one above or below it?", ["second", "third", "fourth", "fifth"], 1, "c2-q5"],
      ["A legend arose claiming that chant was dictated to Pope Gregory I (Gregory the Great) by whom?", ["St. Peter", "St. Paul", "St. Basil", "the Holy Spirit"], 3, "c2-q6"],
      ["A rite consists of what?", ["church calendar", "liturgy", "chant repertoire", "all of the above"], 3, "c2-q7"],
      ["Christianity’s Jewish roots resulted in Christians extensively chanting texts from what book?", ["Exodus", "Psalms", "Proverbs", "Isaiah"], 1, "c2-q8"],
    ]
  },
  {
    id: "C3-1",
    title: "C3-1 · Chant & the Mass",
    exam: "Midterm 1",
    qs: [
      ["What chant features a jubilus?", ["Gradual", "Alleluia", "Communion", "Offertory"], 1, "c3-1-q1"],
      ["Which of the following statements is not true about the Mass?", ["It is the most important service in the Roman Church", "The texts that change from day to day are called the Mass Proper", "The texts that remain the same from day to day are called the Mass Ordinary", "The Mass began with, and evolved from, commemoration of the Resurrection"], 3, "c3-1-q2"],
      ["What is/are the daily series of eight services in monasteries and convents called?", ["canticles", "Office", "antiphonal psalmody", "tropes"], 1, "c3-1-q3"],
      ["Which of the following chants is the simplest?", ["recitation formula", "Psalm tone", "antiphon", "hymn"], 0, "c3-1-q4"],
      ["Which of the following belongs to the Ordinary of the Mass?", ["Introit", "Kyrie", "Gospel", "Offertory"], 1, "c3-1-q5"],
      ["The words syllabic, neumatic, and melismatic pertain to what aspect of chant?", ["rhythm", "mode use", "text setting", "texture"], 2, "c3-1-q6"],
      ["Which of the following belongs to the Proper of the Mass?", ["Gradual", "Credo", "Sanctus", "Agnus Dei"], 0, "c3-1-q7"],
    ]
  },
  {
    id: "C3-2",
    title: "C3-2 · Sequences & Hildegard",
    exam: "Midterm 1",
    qs: [
      ["Who was the most famous early Medieval writer of sequence texts?", ["Notker Balbulus", "Bernart de Ventadorn", "Eleanor of Aquitaine", "Comtessa de Dia"], 0, "c3-2-q1"],
      ["What is the standard musical form of the sequence?", ["ABCA", "ABA’", "AA BB CC…", "A BB CC…N"], 2, "c3-2-q2"],
      ["What is Hildegard’s Ordo virtutum?", ["a unified setting of the Mass Ordinary", "a sacred drama", "texts intended to be set to reciting tones for use in the Office", "texts and music on the subject of courtly love"], 1, "c3-2-q3"],
      ["The Dies irae is an example of what genre?", ["antiphon", "hymn", "sequence", "liturgical drama"], 2, "c3-2-q4"],
      ["Which of the following is true of Hildegard of Bingen?", ["She founded her own convent", "She was famous for her prophecies and correspondence with kings, popes, and bishops", "A greater number of surviving chants are attributed to her than to any other Medieval composer", "all of the above"], 3, "c3-2-q5"],
      ["An expansion of an existing chant is called what?", ["interpolation", "trope", "sequence", "commentary"], 1, "c3-2-q6"],
    ]
  },
  {
    id: "C4-1",
    title: "C4-1 · Secular music background",
    exam: "Midterm 1",
    qs: [
      ["Whose death marked the beginning of the separation of linguistic/cultural groups within the area ruled by Charlemagne?", ["Charlemagne himself", "Louis the Pious", "Richard I (the Lionheart)", "Eleanor of Aquitaine"], 1, "c4-1-q1"],
      ["Chapter 4 covers “secular” music from roughly when to roughly when?", ["500-800", "800-1300", "700-1000", "1300-1400"], 1, "c4-1-q2"],
      ["By 1300, which “successor to the Roman Empire” had emerged as the strongest economically?", ["They were more or less equally strong", "Byzantine Empire", "Arab world", "western Europe"], 3, "c4-1-q3"],
      ["What did versus and conductus have in common?", ["They were settings of Latin texts", "Their melodies were newly composed, not based on chant", "Their cultivation was primarily in Aquitaine", "all of the above"], 3, "c4-1-q4"],
      ["What is true about the chanson de geste?", ["It was an epic poem", "It was cultivated in northern France", "It was in French", "all of the above"], 3, "c4-1-q5"],
      ["What were bards, jongleurs, and minstrels?", ["musical monks and nuns", "professional traveling, non-church musicians", "acrobats", "comedians"], 1, "c4-1-q6"],
    ]
  },
  {
    id: "C4-2",
    title: "C4-2 · Troubadours & medieval song",
    exam: "Midterm 1",
    qs: [
      ["Minnelieder are love songs (of a sort!) from what general area of Europe?", ["Spain", "Germany", "France", "England"], 1, "c4-2-q1"],
      ["The cantigas from Spain/Portugal celebrate whom?", ["St. Peter", "Virgin Mary", "Jesus Christ", "King Alfonso el Sabio (the Wise)"], 1, "c4-2-q2"],
      ["The troubadours and trouvères flourished in what general area of Europe?", ["Spain", "Germany", "France", "England"], 2, "c4-2-q3"],
      ["Troubadours and trouvères are collectively known for their what?", ["poetry only", "music only", "both poetry and music", "performance only"], 2, "c4-2-q4"],
      ["Which is the best way to describe the form of the majority of medieval songs?", ["ABA", "ABACA", "AAB", "ABC"], 2, "c4-2-q5"],
      ["Creating new words for pre-existent melody is called what?", ["mutation", "contrafactum", "fine amour (or fin’ amors)", "chanson de geste"], 1, "c4-2-q6"],
    ]
  },
  {
    id: "C5-1",
    title: "C5-1 · Early polyphony",
    exam: "Midterm 1",
    qs: [
      ["What is the term that has long been used for the earliest types of polyphony?", ["discant", "organum", "duplum", "tenor"], 1, "c5-1-q1"],
      ["A sustained note against which a melody is played or sung is called what?", ["drone", "pedal", "mode", "duplum"], 0, "c5-1-q2"],
      ["Select all four principal concepts that have defined Western music since the beginning of polyphony. (Select all that apply.)", ["measured rhythm", "instrumental families", "counterpoint/polyphony", "centrality of notation", "improvisation", "harmonic regulation of simultaneous sounds", "composition, distinct from performance", "independent instrumental music"], [2, 3, 5, 6], "c5-1-q3"],
    ]
  },
  {
    id: "C5-2",
    title: "C5-2 · Notre Dame",
    exam: "Midterm 1",
    qs: [
      ["The rhythmic modes were developed in association with the musicians at what cathedral?", ["Winchester", "Durham", "Notre Dame", "Amiens"], 2, "c5-2-q1"],
      ["How many rhythmic modes are there?", ["3", "4", "5", "6"], 3, "c5-2-q2"],
      ["The note groups indicating different patterns of longs and breves are called what?", ["ligatures", "substitute clausulae", "organum triplum", "organum quadruplum"], 0, "c5-2-q3"],
      ["When did the rhythmic modes and the even more ornate styles of polyphony in this cathedral environment flourish?", ["ninth and tenth centuries", "tenth and eleventh centuries", "eleventh and twelfth centuries", "twelfth and thirteenth centuries"], 3, "c5-2-q4"],
      ["Who is credited with making the Magnus liber organi?", ["Leoninus", "Perotinus", "Anonymous IV", "Adam de la Halle"], 0, "c5-2-q5"],
      ["What is the term used for the newly composed upper voice in Leoninus’s two-voice organum?", ["tenor", "duplum", "soprano", "descant"], 1, "c5-2-q6"],
    ]
  },
  {
    id: "C5-3",
    title: "C5-3 · Perotinus, conductus & motet",
    exam: "Midterm 1",
    qs: [
      ["The words duplum, triplum, and quadruplum refer to what?", ["rhythmic modes 2, 3, and 4", "second, third, and fourth voices above a chant in ascending order", "medieval string instruments in a small ensemble from highest pitch range to lowest", "prayers following the first, second, and third Psalms read in any service from the Divine Office"], 1, "c5-3-q1"],
      ["Who is credited with having written polyphony for two or three additional voices over a chant tenor?", ["Leoninus", "Perotinus", "Anonymous IV", "all of the above"], 1, "c5-3-q2"],
      ["The newly composed polyphony referred to in the previous question features what?", ["short, repeated phrases", "voice exchange", "rhythmic modes", "all of the above"], 3, "c5-3-q3"],
      ["Which of the following characterizes polyphonic conductus?", ["newly composed tenor", "all voices singing in the same rhythm, or something close to it (homophony)", "syllabic, or mostly syllabic, text setting except for possible opening and closing caudae", "strophic Latin poems on a sacred or serious topic"], 2, "c5-3-q4"],
      ["What is a clausula in Notre Dame polyphony?", ["a self-contained section of an organum", "a long melisma", "a short melisma", "any organum for two voices"], 0, "c5-3-q5"],
      ["The thirteenth-century motet (a new genre!) grew out of what?", ["polyphonic conductus", "discant clausulae", "troubadour songs", "Gregorian hymns"], 1, "c5-3-q6"],
      ["Sumer is icumen in was created where?", ["England", "France", "Spain", "Italy"], 0, "c5-3-q7"],
    ]
  },
  {
    id: "C6-1",
    title: "C6-1 · Ars nova",
    exam: "Midterm 1",
    qs: [
      ["Which of the following occurred during the fourteenth century?", ["the Black Death", "rivaling popes", "the beginning of separation between church and state", "all of the above"], 3, "c6-1-q1"],
      ["Ars nova means what, in translation?", ["revolutionary art", "novel art", "niche art", "none of the above"], 1, "c6-1-q2"],
      ["What is a minim?", ["the smallest rest value in the new notation system", "the smallest note value in the new notation system", "a tiny keyboard instrument new to fourteenth-century France", "a new genre of song featuring a single short stanza of text on the subject of nature"], 1, "c6-1-q3"],
      ["Tenors featuring talea and color are associated with what new compositional device?", ["hocket", "isorhythm", "mensuration signs", "formes fixes"], 1, "c6-1-q4"],
      ["The ballade, rondeau, and virelai are all what?", ["formes fixes", "new types of motet", "instrumental dance genres", "none of the above"], 0, "c6-1-q5"],
      ["Ars subtilior applies to music from when, roughly?", ["early fourteenth century", "mid fourteenth century", "late fourteenth century", "the whole fourteenth century"], 2, "c6-1-q6"],
      ["The Messe de Nostre Dame is by whom?", ["Philippe de Vitry", "Jacobus de Ispania", "Guillaume de Machaut", "Philipoctus de Caserta"], 2, "c6-1-q7"],
    ]
  },
  {
    id: "C6-2",
    title: "C6-2 · Trecento",
    exam: "Midterm 1",
    qs: [
      ["What polyphonic vocal genre from the Trecento is a song for 2-3 voices involving two or more stanzas of poetry set to the same music, followed by a ritornello (final poetic couplet) in a contrasting meter?", ["caccia", "ballata", "madrigal", "istampita"], 2, "c6-2-q1"],
      ["What polyphonic vocal genre from the Trecento features two voices in strict canon at the unison?", ["caccia", "ballata", "madrigal", "istampita"], 0, "c6-2-q2"],
      ["What polyphonic vocal genre from the Trecento has the form AbbaA (virtually the same as the French virelai)?", ["caccia", "ballata", "madrigal", "istampita"], 1, "c6-2-q3"],
      ["Who was the leading composer of ballata?", ["Gherardello da Firenze", "Jacopo da Bologna", "Francesco Landini", "Giovanni Boccaccio"], 2, "c6-2-q4"],
      ["What was musica ficta?", ["departures from notated rhythm", "chromatic alteration", "simultaneous superimposition of two or more modes", "vocal and instrumental combinations"], 1, "c6-2-q5"],
      ["In Trecento music, the adjectives double leading-tone, Phrygian, and Landini all refer to what?", ["genres", "modes", "scales", "cadences"], 3, "c6-2-q6"],
    ]
  }
];