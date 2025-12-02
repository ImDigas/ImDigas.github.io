function getAge(arg) {
    const dat = new Date();
    const day = dat.getDate();
    const month = dat.getMonth();
    const year = dat.getFullYear();

    const myDat = new Date(arg);
    const myDay = myDat.getDate();
    const myMonth = myDat.getMonth();
    const myYear = myDat.getFullYear();

    var myAge = year-myYear;

    if (month < myMonth || (month === myMonth && day < myDay)) {
	    myAge -= 1;
    }
    
    return myAge;
}
