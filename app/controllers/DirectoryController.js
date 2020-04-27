const DirectoryModel = require('../models/DirectoryModel');
const directories = new DirectoryModel;
class DirectoryController{
    async createDirectory(req, res){
        const {body} = req;
        const {name} = body;
        const info = await directories.createDirectory(name);
        res.json(info);
    }
    async getDirectoriesById(req, res){
        const {query} = req;
        const {id} = query;
        const info = await directories.getDirectoriesById(id);
        res.json(info);
    }
    async getAllDirectories(req, res){
        const info = await directories.getAllDirectories();
        res.json(info);
    }
}
module.exports = DirectoryController;