import pool from '../db';

const model = {
    getAllResult: () => {
      const query = "SELECT * FROM result_view;";
      return pool.query(query);
    },
    addReco: (recoList) => {
      
      let query = "INSERT INTO install_reco VALUES";
      const options = [];
      
      recoList.map(data => {
        options.push(data.recoId);
        options.push(data.userId);
        options.push(data.deviceToken);
        options.push(data.packageName);
        options.push(data.title);
        options.push(data.icon);
        options.push(data.marketUrl);
        options.push("none");
        query = `${query}(?,?,?,?,?,?,?,?),`;
      });
      
      query = `${query.substr(0, query.length -1)};`;
      return pool.query(query, options);
    },
    
    updateRecoResult: (recoId, result) => {
      const query = "UPDATE install_reco SET result = ? WHERE recoId = ?;"
      return pool.query(query, [result, recoId]);
    }
};

export default model;