const Files = require("../models/File");
const Box = require("../models/Box");

class FileController {
  async store(req, res) {
    const box = await Box.findById(req.params.id);

    const file = await Files.create({
      title: req.file.originalname,
      path: req.file.key,
      idBox: box._id
    });

    box.files.push(file);
    await box.save();

    // notifica os clients da box que um novo arquivo foi adicionado
    req.io.sockets.in(box._id).emit("file", file);

    return res.json(file);
  }

  async getFiles(req, res) {
    const response = await Files.find({ idBox: req.params.id });

    return res.json(response);
  }
}

module.exports = new FileController();
