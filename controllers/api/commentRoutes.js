// POST request to save new comments to db
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create({
        comment: req.body.comment,
        user_id: req.session.userId,
        post_id: req.body.post_id,
      });
      console.log(commentData)
  
      // const postData = await Post.findByPk(req.params.id, {
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['name'],
      //     },
      //   ],
      // });
      // console.log(postData);
      // const post = postData.get({ plain: true });
  
      // const commentsData = await Comment.findAll({
      //   where: {
      //     post_id: req.params.id,
      //   },
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['name'],
      //     },
      //   ],
      // });
      // // console.log(commentData);
      // const comments = commentsData.map((comment) =>
      //   comment.get({ plain: true })
      // );
  
      // res.render('post', {
      //   comments,
      //   ...post,
      //   loggedIn: req.session.loggedIn,
      //   userId: req.session.userId
      // });
      // if (req.session.loggedIn) {
      //   res.r
      //   return;
      // }
      // document.location.reload()
      // https://stackoverflow.com/questions/15825333/how-to-reload-current-page-in-express-js/31652604
      res.redirect(req.get('referer'));
      
    } catch (err) {
      res.status(400).json(err);
    }
});

// router.post('/', async (req, res) => {
//   try {
//     const commentData = await Comment.create(req.body);
//     console.log(commentData)

//     req.session.save(() => {
//       req.session.userId = userData.id;
//       req.session.loggedIn = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);
//     console.log(userData)

//     req.session.save(() => {
//       req.session.userId = userData.id;
//       req.session.loggedIn = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

module.exports = router;