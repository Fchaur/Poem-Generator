var rg;
var button;

function setup() {
  createCanvas(800,800);
  button = createButton('Generate Poem');
  button.mousePressed(cfg);
  save(sketch, 'sketch.html');
}
function cfg(){
 background(255);

  rg = new RiGrammar();
  rg.addRule('<start>', 'I did something I could never discuss\n<line2>' );
  rg.addRule('<line2>','<past-verb> <a person>\n<line3>');
  rg.addRule('<line3>','and <past-verb> him in a <location>\n\n<line4>')
  rg.addRule('<line4>', 'While <adjective> parties <past-verb>\n<line5>')
  rg.addRule('<line5>', 'among <adjective> <nouns>\n<line6>')
  rg.addRule('<line6>', 'he <past-verb> his <noun>\n\n<line7>')
  rg.addRule('<line7>', 'What to construe\n<line8>')
  rg.addRule('<line8>', 'from <nouns>?\n<line9>')
  rg.addRule('<line9>', 'The impossibility of translation\n<line10>')
  rg.addRule('<line10>', 'from a <location> to a <location>\n\n<line11>')
  rg.addRule('<line11>', 'a <noun> painted <color>\n<line12>')
  rg.addRule('<line12>', 'a <noun-noun>\n<line13>')
  rg.addRule('<line13>', 'some culture with <nouns>\n<line14>')
  rg.addRule('<line14>', 'the sense of <present-verb> in a <location>\n\n<line15>')
  rg.addRule('<line15>', 'from a <location> to a <location>\n<line16>')
  rg.addRule('<line16>', 'heckling the <animal> as it <past-verb> <a person>\n\n<line17>')
  rg.addRule('<line17>', 'we left the part we liked\n<line18>')
  rg.addRule('<line18>', '<present-verb> the <animal> as it <past-verb> <a person>\n\n<line19>')
  rg.addRule('<line19>', 'We <past-verb> the <location> with a <noun>\n<line20>')
  rg.addRule('<line20>', 'but refused to expand on the vestiges of happiness\n\n<line21>')
  rg.addRule('<line21>', '<a person> took responsibility for the <location>\n<line22>')
  rg.addRule('<line22>', 'and <past-verb> us with background information\n<line23>')
  rg.addRule('<line23>', 'until her <animal> sent us back to the <location>\n<line24>')
  rg.addRule('<line24>', 'with a coat of <nouns> where we were going anyway\n<line25>')
  rg.addRule('<line25>', 'as though under the influence of <nouns>\n\n<line26>')
  rg.addRule('<line26>', 'The <animals of the <location>\n<line27>')
  rg.addRule('<line27>', 'were about to be contaminated\n<line28>')
  rg.addRule('<line28>', 'by a <noun>\n\n<line29>')
  rg.addRule('<line29>', 'With so little at stake\n<line30>')
  rg.addRule('<line30>', 'they praised positive thinking')



  rg.addRule('<adjective>', 'interested|free|disgusting|large|miniscule|abnormal|incredible')
  rg.addRule('<nouns>', 'trees|rocks|books|calculators|weapons|computers|instruments|jackets|sentient shoes|pens|phones|highlighters|microprocessors|toilet paper rolls|pencil sharpeners|keyboard|mechanical keyboard')
  rg.addRule('<noun>', 'tree|rock|book|phone|pencil|computer|weapon|guitar|piano|violin|pistol|jacket|sentient shoe|pen|highlighter|microprocessor|keyboard|toilet paper roll|pencil sharpener')
  rg.addRule('<color>', 'white|black|blue|gold|silver|brown|green')
  rg.addRule('<noun-noun>', 'bookshelf with no books|closet with no clothes|city with no residents|farm with no crops|guitar with no strings|piano with no keys')
  rg.addRule('<present-verb>', 'moving|rolling|killing|eating|running|walking|screaming|breathing')
  rg.addRule('<animals', 'cows|cats|dogs|roosters|tunas|sharks|fish|dinosaurs|octopi|songbirds|ostriches|krakens|collosal squids|red eyed tree frogs')
  rg.addRule('<animal>',  'cow|cat|dog|rooster|tuna|great white shark|ostrich|fish|hammerhead shark|dinosaur|human|albino octopus|blue ringed octopus|poison dart frog|boston terrier|deer|moose|wolf|orangutan|monkey|ape|parasaur|rabbit')
  rg.addRule('<past-verb>', 'killed|baked|eliminated|hunted|bought|invited|fixed|followed|identified|persuaded|joined|incinerated|froze|saw|blinded|observed|choked|painted');
  rg.addRule('<location>', 'phone booth|restaurant|sewer|garbage truck|car trunk|park|library|warzone|church|military base|research laboratory|thug hideout|mansion|wasteland|garbage dump|school|university|bathroom|government owned recreation center|dungeon|dragon lair|castle|modern house|shack in the middle of nowhere|space station|rocket ship|galaxy far far away|portal leading to another universe');
  rg.addRule('<a person>', 'an acquaintance|a stranger|a friend|a close friend|a doctor|a lawyer|a scientist|a professor|an enemy of the state')

  var result = rg.expand();
  text(result, 400, 100);



}

function draw() {

}
