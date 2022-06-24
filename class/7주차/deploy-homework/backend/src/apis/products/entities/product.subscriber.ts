import {
  EventSubscriber,
  EntitySubscriberInterface,
  Connection,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';
import 'dotenv/config';

@EventSubscriber()
// product 테이블에 변경이 감지되면 이런거 실행해주세요 라는 뜻↓
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  // 1. 구독↓
  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<Product>): void | Promise<any> {
    console.log(event);

    const bigQuery = new BigQuery({
      projectId: process.env.STORAGE_ID,
      keyFilename: process.env.BIGQUERY_JSON,
    });

    bigQuery
      .dataset('mybigquery03')
      .table('productlog')
      .insert([
        {
          // mySql에 저장된 데이터 가져오는 거임
          id: event.entity.id,
          name: event.entity.name,
          description: event.entity.description,
          price: event.entity.price,
          isSoldOut: event.entity.isSoldOut,
        },
      ]);
  }
}
