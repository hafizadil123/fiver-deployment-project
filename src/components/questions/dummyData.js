const dummyData = [
{
    productId: 100,
    productName: 'Gucci Watch',
    questions: [{
      questionId: 10,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 500,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 501,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: false,
      isReported: false
    },
    {
      answerId: 502,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: false,
      isReported: false
    },
    { 
      answerId: 503,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 12,
        isPhotoReported: false
      },
      helpfulCount: 14,
      date: 'May 1, 2019',
      isSeller: false,
      isReported: false
    }],
    },
    {
      questionId: 11,
      helpfulCount: 25,
      body: 'What material is the strap?',
      answers: [{
        answerId: 504,
        body: `It's made out of genuine leather`,
        user: 'User428',
        photo: {
          photoBody:'',
          images: [],
          photoHelpfulCount: -1,
          isPhotoReported: false
        },
        helpfulCount: 23,
        date: 'April 4, 2019',
        isSeller: false,
        isReported: false
    },
    {
      answerId: 505,
      body: `It's leather.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'June 3, 2019',
      isSeller: false,
      isReported: false
    },
    {
      answerId: 506,
      body: `I think it's leather but they have other alternatives`,
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of the strap:',
        images: ['https://bit.ly/3mD5JxO'],
        photoHelpfulCount: 8,
        isPhotoReported: false
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: false,
      isReported: false
    },
    { 
      answerId: 507,
      body: `It's leather but it makes my wrist itchy`,
      user: 'User214',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: false,
      isReported: false
    }],
    },
    {
      questionId: 12,
      helpfulCount: 32,
      body: `What's the battery life on this?`,
      answers: [{
        answerId: 508,
        body: 'For a couple years',
        user: 'User231',
        photo: {
          photoBody:'',
          images: [],
          photoHelpfulCount: -1,
          isPhotoReported: false
        },
        helpfulCount: 3,
        date: 'May 1, 2019',
        isSeller: false,
        isReported: false
    },
    {
      answerId: 509,
      body: `It can last up to 10 years before replacement.`,
      user: 'User427',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 48,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 510,
      body: 'A good 5 years.',
      user: 'User367',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 2,
      date: 'May 6, 2019',
      isSeller: false,
      isReported: false
    },
    { 
      answerId: 511,
      body: `It's great, I haven't changed it since.`,
      user: 'User514',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 15,
      date: 'May 1, 2019',
      isSeller: false,
      isReported: false
    }],
    },
    {
      questionId: 13,
      helpfulCount: 16,
      body: 'Does this ship in Canada?',
      answers: [{
        answerId: 512,
        body: `Yes, I'm from Vancouver and received it.`,
        user: 'User231',
        photo: {
          photoBody:'',
          images: [],
          photoHelpfulCount: -1,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: false,
        isReported: false
    },
    {
      answerId: 513,
      body: `I think so, I live in Ontario and got them.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: false,
      isReported: false
    },
    {
      answerId: 514,
      body: `Yes, all places except Montreal.`,
      user: 'User367',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 515,
      body: 'I have no idea, I live in America.',
      user: 'User514',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 1, 2019',
      isSeller: false,
      isReported: false
    }],
    },
    {
      questionId: 14,
      helpfulCount: 9,
      body: 'Do they sell smart watches?',
      answers: [{
        answerId: 516,
        body: 'They sure do, I recommend rose gold!.',
        user: 'User231',
        photo: {
          photoBody:`'Here's a photo of it:`,
          images: ['https://bit.ly/3Dowjk9'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: false,
        isReported: false
    },
    {
      answerId: 517,
      body: `Yea but I prefer analogue watches, call me old fashioned.`,
      user: 'User220',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 1,
      date: 'May 4, 2019',
      isSeller: false,
      isReported: false
    },
    {
      answerId: 518,
      body: 'Absolutely, and I love them!',
      user: 'User367',
      photo: {
        photoBody:`Here's my collection:`,
        images: ['https://bit.ly/3zrr4O9', 'https://bit.ly/3mB387z', 'https://bit.ly/3zsBME7'],
        photoHelpfulCount: 5,
        isPhotoReported: false
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: false,
      isReported: false
    },
    { 
      answerId: 519,
      body: `They do but one time it shocked me when I was taking a shower.`,
      user: 'User514',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: false,
      isReported: false
    }],
    },
    {
      questionId: 15,
      helpfulCount: 106,
      body: 'Is it possible to ice it with diamonds?',
      answers: [{
        answerId: 520,
        body: `I wouldn't know, I don't have that kind of cash.`,
        user: 'User231',
        photo: {
          photoBody:'',
          images: [],
          photoHelpfulCount: -1,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: false,
        isReported: false
    },
    {
      answerId: 521,
      body: `Yea but you're gonna have to find a 3rd party service to do it for you.`,
      user: 'User420',
      photo: {
        photoBody:`Here's my iced out rollie:`,
        images: ['https://bit.ly/2WAFVaK'],
        photoHelpfulCount: 34,
        isPhotoReported: false
      },
      helpfulCount: 24,
      date: 'May 3, 2019',
      isSeller: false,
      isReported: false
    }],
    }
  ]      
},
{
    productId: 101,
    productName: 'Pleather Boots',
    questions: [{
      questionId: 16,
      helpfulCount: 6,
      body: `Are these boots made of leather?`,
      answers: [{
      answerId: 522,
      body: `We are a vegan company so all our products are fake leather.`,
      user: 'User842',
      photo: {
        photoBody:'Please take a look:',
        images: ['https://bit.ly/3sHYaqF', 'https://bit.ly/3jbP9D2'],
        photoHelpfulCount: 31,
        isPhotoReported: false
      },
      helpfulCount: 18,
      date: 'July 3, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 17,
      helpfulCount: 7,
      body: 'What is the return policy?',
      answers: [{
        answerId: 523,
        body: '30 day money back guarantee.',
        user: 'User842',
        photo: {
          photoBody:'',
          images: [],
          photoHelpfulCount: -1,
          isPhotoReported: false
        },
        helpfulCount: 5,
        date: 'July 8, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 524,
      body: `I think you have at least 4 weeks to return it.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 1,
      date: 'May 3, 2019',
      isSeller: false,
      isReported: false
    }],
    },
  ]      
},
{
    productId: 102,
    productName: 'Nylon Gloves',
    questions: [{
      questionId: 22,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 548,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 549,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 550,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 551,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 23,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 552,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 553,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 554,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 555,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 24,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 556,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 557,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 558,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 559,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 25,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 560,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 561,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 562,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 563,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 26,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 564,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 565,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 566,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false     
       },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 567,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 27,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 568,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 569,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 570,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 571,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    }
  ]      
},
{
    productId: 103,
    productName: 'Perka Jacket',
    questions: [{
      questionId: 28,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 572,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 573,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 574,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 575,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 29,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 576,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 577,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 578,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 579,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false     
       },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 30,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 580,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 581,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 582,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 583,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 31,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 584,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 585,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 586,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 587,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 32,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 588,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 589,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 590,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 591,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 33,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 592,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 593,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 594,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false    
        },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 595,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false     
       },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    }
  ]      
},
{
    productId: 104,
    productName: 'Rainbow Sandals',
    questions: [{
      questionId: 34,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 596,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 597,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 598,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 599,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 35,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 600,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 601,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 602,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 603,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 36,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 605,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 606,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 607,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 608,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false     
       },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 37,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 609,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 610,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 611,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 612,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 38,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 613,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 614,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 615,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    },
    { 
      answerId: 616,
      body: 'Tried it out at a water park and it stopped working.',
      user: 'User514',
      photo: {
        photoBody:'Here are some photos of the aftermath:',
        images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
        photoHelpfulCount: 2,
        isPhotoReported: false      
      },
      helpfulCount: 4,
      date: 'May 1, 2019',
      isSeller: true,
      isReported: false
    }],
    },
    {
      questionId: 39,
      helpfulCount: 67,
      body: 'Is this watch waterproof?',
      answers: [{
        answerId: 617,
        body: 'This works up to 5 meters underwater.',
        user: 'User231',
        photo: {
          photoBody:'Here are some photos of the waterproof watches:',
          images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
          photoHelpfulCount: 33,
          isPhotoReported: false
        },
        helpfulCount: 43,
        date: 'May 1, 2019',
        isSeller: true,
        isReported: false
    },
    {
      answerId: 618,
      body: `To a degree, I wouldn't test it out.`,
      user: 'User420',
      photo: {
        photoBody:'',
        images: [],
        photoHelpfulCount: -1,
        isPhotoReported: false
      },
      helpfulCount: 0,
      date: 'May 3, 2019',
      isSeller: true,
      isReported: false
    },
    {
      answerId: 619,
      body: 'I tested it out 7ft underwater and so far so good.',
      user: 'User367',
      photo: {
        photoBody:'Here is a photo of my watch underwater:',
        images: ['https://bit.ly/3knW2AA'],
        photoHelpfulCount: 5,
        isPhotoReported: false      
      },
      helpfulCount: 8,
      date: 'May 6, 2019',
      isSeller: true,
      isReported: false
    }],
    }
  ]      
},
{
    productId: 105,
    productName: 'Artistic Socks',
    questions: []      
},
];

export default dummyData;











// const dummyData = [
//   {
//     productId: 100,
//     questionId: 10,
//     helpfulCount: 67,
//     body: 'Is this watch waterproof?',
//     answers: [{
//       answerId: 500,
//       body: 'This works up to 5 meters underwater.',
//       user: 'User231',
//       photo: {
//         photoBody:'Here are some photos of the waterproof watches:',
//         images: ['https://bit.ly/3i491qV', 'https://bit.ly/3rydA00', 'https://bit.ly/3gkh8yE'],
//         photoHelpfulCount: 33
//       },
//       helpfulCount: 43,
//       date: 'May 1, 2019',
//       isSeller: true,
//       isReported: false
//     },
//     {
//       answerId: 501,
//       body: `To a degree, I wouldn't test it out.`,
//       user: 'User420',
//       photo: {
//         photoBody:'',
//         images: [],
//         photoHelpfulCount: -1
//       },
//       helpfulCount: 0,
//       date: 'May 3, 2019',
//       isSeller: true,
//       isReported: false
//     },
//     {
//       answerId: 502,
//       body: 'I tested it out 7ft underwater and so far so good.',
//       user: 'User367',
//       photo: {
//         photoBody:'Here is a photo of my watch underwater:',
//         images: ['https://bit.ly/3knW2AA'],
//         photoHelpfulCount: 5
//       },
//       helpfulCount: 8,
//       date: 'May 6, 2019',
//       isSeller: true,
//       isReported: false
//     },
//     { 
//       answerId: 503,
//       body: 'Tried it out at a water park and it stopped working.',
//       user: 'User514',
//       photo: {
//         photoBody:'Here are some photos of the aftermath:',
//         images: ['https://bit.ly/3jeFOdK', 'https://bit.ly/3mvOQ7W'],
//         photoHelpfulCount: 2
//       },
//       helpfulCount: 4,
//       date: 'May 1, 2019',
//       isSeller: true,
//       isReported: false
//     }],
//   },
//   {
//     productId: 101,
//     questionId: 11,
//     helpfulCount: 6,
//     body: 'Are these boots leather?',
//     answers: [{
//       answerId: 504,
//       body: `No, they're pleather, PETA would be mad.`,
//       user: 'User762',
//       photo: {
//         photoBody:'',
//         images: [],
//         photoHelpfulCount: -1
//       },
//       helpfulCount: 3,
//       date: 'August 8, 2012',
//       isSeller: false,
//       isReported: false
//     },
//     {
//       answerId: 505,
//       body: `We are a vegan company so all our products are fake leather.`,
//       user: 'User842',
//       photo: {
//         photoBody:'Please take a look:',
//         images: ['https://bit.ly/3sHYaqF', 'https://bit.ly/3jbP9D2'],
//         photoHelpfulCount: 8
//       },
//       helpfulCount: 10,
//       date: 'August 9, 2012',
//       isSeller: true,
//       isReported: false
//     }],
//   },
//   {
//     productId: 102,
//     questionId: 12,
//     helpfulCount: 11,
//     body: 'Are these gloves touch screen sensitive?',
//     answers: [{
//       answerId: 506,
//       body: 'Yep, you can use them with your phone.',
//       user: 'User560',
//       photo: {
//         photoBody:'',
//         images: [],
//         photoHelpfulCount: -1
//       },
//       helpfulCount: 9,
//       date: 'October 29, 2004',
//       isSeller: false,
//       isReported: false
//     }],
//   },
//   {
//     productId: 103,
//     questionId: 13,
//     helpfulCount: 19,
//     body: 'Are these jackets protective against freezing temperatures?',
//     answers: [{
//       answerId: 507,
//       body: `They work moderately well, but they don't come with a hoodie.`,
//       user: 'User918',
//       photo: {
//         photoBody:'Here is a photo of the jacket:',
//         images: ['https://bit.ly/3gmYi9M'],
//         photoHelpfulCount: 14
//       },
//       helpfulCount: 17,
//       date: 'September 16, 2003',
//       isSeller: false,
//       isReported: false
//     },
//     {
//       answerId: 508,
//       body: `Well, I live in Arizona and the coldest it gets is around 60 degrees so for me it's perfect.`,
//       user: 'User932',
//       photo: {
//         photoBody:'This is me wearing it:',
//         images: ['https://bit.ly/3sKLE9M', 'https://bit.ly/3DhknR2'],
//         photoHelpfulCount: 12
//       },
//       helpfulCount: 20,
//       date: 'September 27, 2003',
//       isSeller: false,
//       isReported: false
//     }],
//   },
//   {
//     productId: 104,
//     questionId: 14,
//     helpfulCount: 1,
//     body: 'Are these sandals durable?',
//     answers: [{
//       answerId: 509,
//       body: `They're perfect for casual wear.`,
//       user: 'User316',
//       photo: {
//         photoBody:'',
//         images: [],
//         photoHelpfulCount: -1
//       },
//       helpfulCount: 0,
//       date: 'January 13, 2005',
//       isSeller: true,
//       isReported: false
//     },
//     {
//       answerId: 510,
//       body: 'No, mine ripped after the first week :(',
//       user: 'User252',
//       photo: {
//         photoBody:'',
//         images: [],
//         photoHelpfulCount: -1
//       },
//       helpfulCount: 2,
//       date: 'March 15, 2005',
//       isSeller: false,
//       isReported: false
//     }],
//   },
//   {
//     productId: 105,
//     questionId: 15,
//     helpfulCount: 84,
//     body: 'Do you have multicolored socks?',
//     answers: [{
//       answerId: 511,
//       body: 'We have two kinds that have just been restocked.',
//       user: 'User78',
//       photo: {
//         photoBody:'Here are some photos of the socks:',
//         images: ['https://bit.ly/3D6fieq', 'https://bit.ly/3zbage9'],
//         photoHelpfulCount: 29
//       },
//       helpfulCount: 53,
//       date: 'August 2, 2021',
//       isSeller: true,
//       isReported: false
//     }],
//   }
// ];

// export default dummyData;