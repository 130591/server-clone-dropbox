const Box = require('../models/Box');

class BoxController {
  async store(req, res) {
    const box = await Box.create(req.body);
    return res.json(box);
  }

  async getAll(req, res){
    return res.json(
      await Box.find({}, (errs, boxs) => {
        res.json({ data: boxs });
      })
    );
  }

  async deleteBox() {
    const post = await Post.findById(req.params.id);

    await post.remove();
  
    return res.send();
  }

  async show(req, res) {
    return res.json(
      await Box.findById(req.params.id).populate({
        path: 'files',
        options: { sort: { createdAt: -1 } } // ordena de forma decrescente
      })
    );
  }
}

module.exports = new BoxController();
