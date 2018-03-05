const getDartboardScore = (x,y) => {
    let values = [11, 14, 9, 12, 5, 20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11],
        angle = (1 - Math.atan2(y, x) / Math.PI) * 180,
        slice = values[Math.round(angle / 18)],
        dist = Math.sqrt(x * x + y * y);

    if (dist > 170)
        return 'X';

    if (dist <= 6.35)
        return 'DB';

    if (dist <= 15.9)
        return 'SB';

    if (dist >= 99 && dist <= 107)
        return 'T' + slice;

    if (dist >= 162 && dist <= 170)
        return 'D' + slice;

    return '' + slice;
}
console.log(Math.atan2(45,45)*180/Math.PI)