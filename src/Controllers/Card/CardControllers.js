const knex = require("../../Configs/index");
const { ERROR_MSGS } = require("../../Configs/Constants");

const CardController = {
  getCardsLimited: async (req, res) => {
    try {
      let { limit } = req.params;
      console.log(limit);
      if (!limit) limit = 20;

      const data = await knex("m_card")
        .select({
          cardId: "id",
          cardName: "card_name",
          picUrl: "card_img_url",
          cardContent: "card_content",
        })
        .where({ is_delete: false })
        .limit(limit);
      console.log(data);

      if (data.length > 0) {
        res.status(200).json(data);
        return;
      }
      res.status(404).json({ message: ERROR_MSGS.NOT_FOUND });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
  postCard: async (req, res) => {
    try {
      const { cardName, picUrl, cardContent } = req.body;
      console.log(cardName, picUrl, cardContent);

      const newCard = {
        card_name: cardName,
        card_img_url: picUrl,
        card_content: cardContent,
        is_delete: false,
      };

      const data = await knex("m_card").returning(["id"]).insert(newCard);
      console.log(data);

      if (data.length > 0) {
        res.status(200).json(data);
        return;
      }
      res.status(404).json({ message: ERROR_MSGS.NOT_FOUND });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
  deleteCard: async (req, res) => {
    try {
      let { cardid } = req.params;
      console.log(cardid);

      const data = await knex("m_card")
        .where({ id: cardid })
        .update({ is_delete: true })
        .returning(["id"]);
      console.log(data);

      if (data.length > 0) {
        res.status(200).json(data);
        return;
      }
      res.status(404).json({ message: ERROR_MSGS.NOT_FOUND });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: ERROR_MSGS.INTERNAL_SERVER_ERROR });
    }
  },
};

module.exports = CardController;
