console.log('안녕하세요~~');

function getToken(count) {
	// undefined : 일반적으로는 이걸 씀.(암묵적인 룰)
	// null : 강제로 변수를 비웠을때 씀.(암묵적인 룰). 일부러 비워두려고 할때.

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
	return result;
}

getToken();