export default function two_crystal_balls(breaks: boolean[]): number {

    const jump = Math.floor(Math.sqrt(breaks.length));  

    let first_ball = jump;

    while (first_ball < breaks.length && !breaks[first_ball]) {
        first_ball += jump;
    }

    if (first_ball >= breaks.length) {
        return -1;
    }

    let second_ball = first_ball - jump + 1;

    while (second_ball < first_ball && !breaks[second_ball]) {
        second_ball++;
    }

    if (second_ball >= first_ball) {
        return -1;
    }

    return second_ball;

}