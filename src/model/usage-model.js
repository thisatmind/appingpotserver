import pool from '../db';

const model = {
    addUsage: (usageList) => {
      
      const stmt = "INSERT INTO raw_app_usage VALUES (?,?,?,?)"
      let query = "";
      const options = [];
      
      console.log(usageList);
      usageList.map(data => {
        options.push(data.packageName);
        options.push(data.userId);
        options.push(data.date);
        options.push(data.usage);
        query = `${query}${stmt},`;
      });
      
      query = `${query.substr(0, query.length -1)};`;
      console.log(query);
      console.log(options);
      return pool.query(query, options);
    }
};

export default model;