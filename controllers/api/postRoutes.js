const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
// Import the custom middleware
const withAuth = require('../../utils/auth');

// POST request to create a post
//  api/posts/
router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        title: req.body.title,
        text: req.body.text,
        user_id: req.session.userId,
      });
      console.log(postData)
  
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

router.put('/:id', async (req, res) => {
  try {
    const post = await Post.update(
      {
        title: req.body.title,
        text: req.body.text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // console.log(post.id)
    // If the database is updated successfully, what happens to the updated data below?
    // The updated data (dish) is then sent back to handler that dispatched the fetch request.
    // res.redirect(`/posts/${req.params.id}`);
    // res.status(200).json(post);
    res.status(200).json(post);
  } catch (err) {
    // res.status(500).json(err);
    res.status(400).json(err);
  }
});

// router.put('/:id', async (req, res) => {
//   try {
//     const postData = await Post.create({
//       title: req.body.title,
//       text: req.body.text,
//       user_id: req.session.userId,
//     });
//     console.log(postData)

    
//     // https://stackoverflow.com/questions/15825333/how-to-reload-current-page-in-express-js/31652604
//     res.redirect(req.get('referer'));
    
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// PUT request to update a post by id
// api/posts/:id

// DELETE request to remove a post by id
// api/posts/:id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        // userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;