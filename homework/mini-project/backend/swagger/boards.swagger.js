/**
 * @swagger
 * /users:
 *      get:
 *          summary: 회원목록 조회
 *          tags: [User]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 김성란
 *                                  email:
 *	                                    type: string
 *	                                    example: abc123@gmail.com
 *                                  personal:
 *	                                    type: string
 *	                                    example: 123456-1234567
 *                                  pwd:
 *	                                    type: string
 *	                                    example: 1234**
 *                                  phone:
 *                                      type: string
 *                                      example: "01012341234"
 *                                  prefer:
 *                                      type: string
 *                                      example: www.naver.com
 *                                  og:
 *                                      type: object
 *                                      properties:
 *                                          title:
 *                                              type: string
 *                                              example: 네이버
 *                                          description:
 *                                              type: string
 *                                              example: dfjsklfakdfl
 *                                          imageURL:
 *                                              type: string
 *                                              exmaple: "djfad.jpg"
 *
 *
 */

/**
 * @swagger
 * /user:
 *       post:
 *          summary: 회원가입하기
 *          tags: [User]
 *          requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      name:
 *                                          type: string
 *                                          example: 김성란
 *                                      email:
 *                                          type: string
 *                                          example: adfbsd@gmail.com
 *                                      personal:
 *                                          type: string
 *                                          example: 123456-1234567
 *                                      prefer:
 *                                          type: string
 *                                          example: https://www.naver.com
 *                                      pwd:
 *                                          type: string
 *                                          example: 123466
 *                                      phone:
 *                                          type: string
 *                                          example: "01012341234"
 *
 *
 *
 *          responses:
 *              200:
 *                  description: id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: string
 *                              example: 628cc97cf8870b04b2218a3e
 */
/**
 * @swagger
 * /tokens/phone:
 *       patch:
 *          summary: 토큰인증완료
 *          tags: [Token]
 *          requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      token:
 *                                          type: string
 *                                          example: "123456"
 *                                      phone:
 *                                          type: string
 *                                          example: "01012341234"
 *
 *
 *
 *
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: 조회 완료되었습니다.
 */
/**
 * @swagger
 * /tokens/phone:
 *       post:
 *          summary: 토큰 발급
 *          tags: [Token]
 *          requestBody:
 *                  required: true
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                      phone:
 *                                          type: string
 *                                          example: "01012341234"
 *
 *
 *
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *	                                    type: string
 *	                                    example: 토큰 발급되었습니다.
 */

/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 스타벅스
 *          tags: [Starbucks]
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 라떼
                                    img:
                                        type: string
                                        example: "imgSrc"
 */
