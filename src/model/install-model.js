import pool from '../db';
import uuid from 'uuid4';
const model = {
    addUsage: (appList) => {
      
      let query = "INSERT INTO installed_app VALUES";
      const options = [];
      
      appList.map(data => {
        options.push(uuid());
        options.push(data.userId);
        options.push(data.packageName);
        query = `${query}(?,?,?),`;
      });
      
      query = `${query.substr(0, query.length -1)};`;
      return pool.query(query, options);
    
    }
};

export default model;