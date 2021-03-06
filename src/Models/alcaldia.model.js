const sql = require("msnodesqlv8");

const connectionString = "server=.;Database=PROYECTO_FINAL;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
    
function toPromise (callback) {
    return function (args) {
      return new Promise((resolve, reject) => {
        function handler (err, res) {
        if (err) {
          reject(err)
        } else {
          resolve(res)
        }
      }
  
      if (args) {
        callback(args, handler)
      } else {
        callback(handler)
      }
    })
    }
  }
  
  async function execQuery (req,res,consulta) {
    let sqlOpen = toPromise(sql.open)
    try {
      console.log('sqlOpen ....')
      let connection = await sqlOpen(connectionString)
      console.log('..... sqlOpen')
      let connectionQuery = toPromise(connection.queryRaw)
      try {
        let data = await connectionQuery(consulta)
        console.log('... connectionQuery');
        console.log('rows.length ' + data.rows.length)
        res.end(JSON.stringify(data, null, 1))
        let close = toPromise(sql.close)
        await close();
      } catch (err) {
        console.log("Test in Catch error: " + err);
      }
    } catch (err) {
      res.end(err.message)
      console.log("Test out Catch error: " + err.message);
    }
  }
  
module.exports = {
  execQuery : execQuery,
};    
