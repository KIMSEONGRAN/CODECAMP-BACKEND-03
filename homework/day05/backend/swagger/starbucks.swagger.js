/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 게시글 가져오기
 *          tags: [Starbucks]
 *          parameters:
 *              - in: query
 *                name: number
 *                type: int
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
 *                                  number:
 *	                                    type: int
 *	                                    example: 1
 *                                  writer:
 *	                                    type: string
 *	                                    example: 철수
 *                                  name:
 *	                                    type: string
 *	                                    example: 카페라떼
 *                                  kcal:
 *	                                    type: int
 *	                                    example: 5
 */