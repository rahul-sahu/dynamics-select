var country = document.getElementById("country");
var cur = document.getElementById("cur");
var grades = document.getElementById("grades");
var subjects = document.getElementById("subjects");

function populate_cur() {
    cur.innerHTML = "";

    if (country.value == "india") {
        var optionArray = ["|Select Curriculum", "cbse|CBSE", "icse|ICSE", "isc|ISC", "cambridgeBritish|Cambridge/British", "ib|IB", "nios|NIOS", "stateBoard|State Baord", "na|My Curriculum is not listed here"];
        put(cur, optionArray);
    }
    else if (country.value == "me") {
        var optionArray = ["|Select Curriculum", "cbse|CBSE", "icse|ICSE", "isc|ISC", "cambridgeBritish|Cambridge/British", "edexcel|Edexcel", "aqa|AQA", "canadian|Canadian", "australian|Australian", "ib|IB", "american|American", "sabis|Sabis", "na|My Curriculum is not listed here"];
        put(cur, optionArray);
    }
    else if (country.value == "us") {
        var optionArray = ["|Select Curriculum", "american|American", "cambridgeBritish|Cambridge/British", "ib|IB", "canadian|Canadian", "commonCore|Common Core", "na|My Curriculum is not listed here"];
        put(cur, optionArray);
    }
}

function populate_grades(){
    grades.innerHTML = "";

    if( cur.value.match(/^(cbse|cambridgeBritish|ib|nios|stateBoard|edexcel|aqa|canadian|australian|american)$/)){
        var optionArray = ["|Select Grade","grade3|Grade 3", "grade4|Grade 4", "grade5|Grade 5", "grade5|Grade 5", "grade6|Grade 6", "grade7|Grade 7", "grade8|Grade 8", "grade9|Grade 9", "grade10|Grade 10", "grade11|Grade 11", "grade12|Grade 12"];
       
    }
    else if (cur.value == "isc"){
        var optionArray = ["|Select Grade","grade11|Grade 11", "grade12|Grade 12"];
    }
    else if(cur.value.match(/^(icse|sabis|commonCore)$/)){
        var optionArray = ["|Select Grade","grade3|Grade 3", "grade4|Grade 4", "grade5|Grade 5", "grade5|Grade 5", "grade6|Grade 6", "grade7|Grade 7", "grade8|Grade 8", "grade9|Grade 9", "grade10|Grade 10"];
    }
    put(grades,optionArray);
}


function populate_subjects() {
    subjects.innerHTML = "";

    if(grades.value.match(/^(grade3|grade4|grade5|grade6|grade7|grade8|grade9|grade10)$/)){
        var optionArray = ["|Select Subject","science|Science","mathematics|Mathematics","socialScience|Social Science","english|English","french|French","hindi|Hindi","economics|Economics"];
        put(subjects,optionArray);
    }
    else if(grades.value.match((/^(grade11|grade12)$/))){
        var optionArray = ["|Select Subject","physics|Physics","chemistry|Chemistry","biology|Biology","mathematics|Mathematics","history|Hisotry","geography|Geography","civics|Civics","economics|Economics","french|French","hindi|Hindi","accounting|Accounting","businessStudies|Business Studies","computerScience|Computer Science"];
        put(subjects,optionArray);
    }
   
}

function put(targetField, optionArray) {
    for (option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        targetField.options.add(newOption);
    }
}
