const config = require('../../config/config');
const pool = config.pool;

class DirectoryModel{
    async createDirectory(name){
        let status = false;
        try{
            const conn = await pool.getConnection();
            const res = await conn.query("INSERT INTO directorios (name) VALUES (?)", [name]);
            if(res.affectedRows==1){
                status = true;
            }
        }catch(error){
            console.log(error);
        }
        return status;
    }
    async getDirectoriesById(id){
        let data = null;
        try{
            const conn = await pool.getConnection();
            data = await conn.query("SELECT * FROM directorios WHERE id = (?)", [id]);
        }catch(error){
            console.log(error);
        }
        return data[0];
    }
    async getAllDirectories(){
        let data = null;
        try{
            const conn = await pool.getConnection();
            data = await conn.query("SELECT * FROM directorios");
        }catch(error){
            console.log(error);
        }
        return data;
    }
    
}
module.exports = DirectoryModel;