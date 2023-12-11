import { Injectable } from '@nestjs/common';
const oracledb = require('oracledb');

@Injectable()
export class AppService {
  async getHello(username='tuut', password='password'):Promise<any>
  {
      let connection;
      try {
          connection = await oracledb.getConnection({ user: username, password: password, connectionString: 'localhost/orcl'});
          console.log("Successfully connected to Oracle Database as", username);
          const data = await connection.execute('SELECT * FROM PHONG_BAN');
          return connection;
      } catch (err) {
          console.error(err);
          return 'hi';
      } 
      
  }

  async getEmployee(id:string){
    let connection = await this.getHello();
    const data = await connection.execute(`SELECT * FROM NHAN_VIEN WHERE MA_SO_NHAN_VIEN = :id`, [id]);
    return data;
  }

}
