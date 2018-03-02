const humanYearsCatYearsDogYears = humanYears => {
    let res=[];
    if(humanYears===1) return res=[1,15,15];
    else if(humanYears===2) return res=[2,24,24];
    else return res=[humanYears,(humanYears-2)*4+24,(humanYears-2)*5+24]
};
