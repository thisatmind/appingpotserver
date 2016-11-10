import pool from '../db';

const model = {
    addUsage: (usageList) => {
      
      let query = "INSERT INTO raw_app_usage VALUES";
      const options = [];
      
      usageList.map(data => {
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