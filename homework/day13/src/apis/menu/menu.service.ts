import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  findAll() {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
      {
        name: '아메리카노',
        price: 4500,
        kcal: 10,
        saturatedFat: 0,
        protein: 1,
        sodium: 5,
        sugars: 0,
        caffeine: 150,
      },
      {
        name: '아메리카노1',
        price: 4500,
        kcal: 10,
        saturatedFat: 0,
        protein: 1,
        sodium: 5,
        sugars: 0,
        caffeine: 150,
      },
      {
        name: '아메리카노2',
        price: 4500,
        kcal: 10,
        saturatedFat: 0,
        protein: 1,
        sodium: 5,
        sugars: 0,
        caffeine: 150,
      },
      {
        name: '아메리카노3',
        price: 4500,
        kcal: 10,
        saturatedFat: 0,
        protein: 1,
        sodium: 5,
        sugars: 0,
        caffeine: 150,
      },
      {
        name: '아메리카노4',
        price: 4500,
        kcal: 10,
        saturatedFat: 0,
        protein: 1,
        sodium: 5,
        sugars: 0,
        caffeine: 150,
      },
    ];

    // 2. 꺼내온 결과 응답 주기
    return result;
  }

  create() {
    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    // 2. 저장 결과 응답 주기
    return '등록에 성공했습니다!!';
  }
}
// 기능3
