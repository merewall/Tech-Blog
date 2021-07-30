const router = require('express').Router();
const { User, Post, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all or certain number of blog posts with post title, associated user_id and date created for homepage - WORKS!
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// GET one post by id with post title, text, creator's username, and date created
// include comments
router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    // console.log(postData);
    const post = postData.get({ plain: true });
    console.log(post);
    if(post.user_id === req.session.userId) {
      req.session.save(() => {
        req.session.userPost = true;
      });
    } else {
      req.session.userPost = false;
    }

    const commentData = await Comment.findAll({
      where: {
        post_id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
    
    const comments = commentData.map((comment) =>
      comment.get({ plain: true })
    );

    res.render('post', {
      comments,
      ...post,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId, 
      userPost: req.session.userPost,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

// GET request at /users/:id
// get all user's affiliated posts (for dashboard)
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  // try {
  //   // Find the logged in user based on the session ID
  //   const userData = await User.findByPk(req.session.userId, {
  //     attributes: { exclude: ['password'] },
  //     include: [{ model: Post }],
  //   });

  //   const user = userData.get({ plain: true });
  //   console.log(user)

  //   res.render('dashboard', {
  //     ...user,
  //     loggedIn: true
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  try {
    // Get all posts from user and JOIN with user data
    const postData = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      posts, 
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('adduser');
});

router.get('/addpost', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  //   return;
  // }

  res.render('addpost', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/editpost/:id', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  // if (!req.session.loggedIn) {
  //   res.redirect('/login');
  //   return;
  // }
  try {
    const postData = await Post.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });
    // console.log(postData);
    const post = postData.get({ plain: true });
    console.log(post);
    // if(post.user_id === req.session.userId) {
    //   req.session.save(() => {
    //     req.session.userPost = true;
    //   });
    // } else {
    //   req.session.userPost = false;
    // }
    // console.log(req.session.userPost);

    // const commentData = await Comment.findAll({
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
    // console.log(commentData);
    // const comments = commentData.map((comment) =>
    //   comment.get({ plain: true })
    // );

    res.render('editpost', {
      ...post,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;