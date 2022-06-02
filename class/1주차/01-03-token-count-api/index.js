console.log('안녕하세요~~');

function createTokenOfPhone(myphone) {
	// 1. 휴대폰번호 자릿수 맞는지 확인하기
	if(myphone.length !== 10 && myphone.length !== 11) {
		console.log('에러발생!!! 핸드폰 번호를 제대로 입력해주세요.')
		return;
	}


	// 2. 핸드폰 토큰 6자리 만들기
	const count = 6;
	if(count === undefined){
		console.log('에러발생!!! 갯수를 제대로 입력해 주세요.');
		return; // 이거 실행되는 순간 밑에 줄 실행 안됨.
	} else if(count <= 0) {
		console.log('에러발생!!! 갯수가 너무 적습니다.');
		return; // 이거 안쓰면 console출력하고 밑에줄 실행시킴.
	} else if(count > 10) {
		console.log('에러발생!!! 갯수가 너무 많습니다.');
		return;
	}

	const result = String(Math.floor(Math.random() * 10 ** count)).padStart(count, '0');
	console.log(result); // 만들어진 토큰 출력


	// 3. 핸드폰 번호에 토큰 전송하기
	console.log(myphone + '번호로 인증번호' + result + '를 전송합니다💌️');
}

createTokenOfPhone('01012345678');
