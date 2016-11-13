import pool from '../db';

const model = {
    addCount: (countList) => {
      
      let query = "INSERT INTO raw_app_count VALUES";
      const options = [];
      
      countList.map(data => {
        options.push(data.userId);
        options.push(data.packageName);
        options.push(data.usage);
        options.push(data.date);
        query = `${query}(?,?,?,?),`;
      });
      
      query = `${query.substr(0, query.length -1)};`;
      return pool.query(query, options);
    }
};

export default model;