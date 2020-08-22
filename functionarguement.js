var count = 0;

function countvowels(name) {

    for (var i=0;i<name.length;i++) {
        if(name[i] == "a" || name[i] == "e" || name[i] == "i" || name[i]== "o" || name[i] == "u")
        count = count + 1;
    }
    document.write(" Hello " + name + " your name has " + count + " vowels!! ");
}

var Myname = prompt ("please enter your name");

countvowels(Myname);