function TextStats(input_text) {
  var teststr = input_text.trim() + "."
  var totwordcnt =0, currwordcnt =0, sntnccnt =0, spacecnt =0, ltrcnt =0;
  var srchpatt1 =/[A-z]/, srchpatt2 =/\s/ , srchpatt3 =/[\s\:\;\,\.\!\?]/, srchpatt4 =/[\.\!\?]/;
  var testchar;
  var i=0;
  do {
  testchar = teststr.substr(i,1);
  if (srchpatt1.test(testchar)) {
    ltrcnt++;
  }
  if (srchpatt2.test(testchar)) {
    spacecnt++;
  }
  if (srchpatt3.test(testchar) && ltrcnt > 0) {
      totwordcnt++;
      currwordcnt++
      ltrcnt =0;
    }
  if (srchpatt4.test(testchar) && currwordcnt > 0) {
      sntnccnt++;
      currwordcnt =0;
  }
  i++;
  } while (i < teststr.length);
  if (sntnccnt ===0 && totwordcnt >0) {
    sntnccnt++;
  }
 document.getElementById("OutStat").innerHTML =
 "Words "+totwordcnt+"; Sentences "+sntnccnt+
 "; Avg Word/Sentence "+ totwordcnt/sntnccnt +
 "; Spaces "+spacecnt;
}
function ClearText () {
  document.getElementById("InputText").value = "";
  document.getElementById("OutStat").innerHTML = "";

}
