import { hyphenCheck, checkNum, masking } from './check.js';

function customRegistrationNumber(number){

    // 주민번호 쪼개기
    const security = hyphenCheck(number);
    if(security) {
        checkNum(number);

        masking(number);
    }
}

customRegistrationNumber('210510-1010101');
customRegistrationNumber('210510-1010101010101');
customRegistrationNumber('2105101010101');