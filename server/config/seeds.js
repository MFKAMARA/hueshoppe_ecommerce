const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Custom T-Shirt Services' },
    { name: 'Camian Photography Services' },
    { name: '3D Custom Woodcraft Services' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Graduation T-shirt',
      description:
        'Celebrate your academic achievement with our stylish Graduation T-shirt. Featuring a comfortable fit and a design that proudly displays your milestone, this shirt is perfect for commemorating your special day.',
      image: 'grad.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Wedding & Bachelorette T-shirt',
      description:
        'Make the pre-wedding celebrations extra special with our Wedding & Bachelorette T-shirt. Designed with fun and elegance in mind, this shirt is ideal for all your bridal party festivities.',
      image: 'wed.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Baby Shower T-Shirt',
      description:
        'Welcome the new arrival in style with our adorable Baby Shower T-Shirt. Soft, comfortable, and perfect for celebrating this joyous occasion with friends and family.',
      image: 'bshower.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Corporate events T-shirt',
      description:
        'Enhance your corporate events with our custom Corporate Events T-shirt. Professional and comfortable, these shirts are perfect for team building, conferences, and company outings.',
      image: 'company.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Birthday parties T-shirt',
      description:
        'Celebrate birthdays in a fun and unique way with our Birthday Parties T-shirt. Personalize it to make the birthday person feel extra special on their big day.',
      image: 'birth.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Family Reunions T-shirt',
      description:
        'Bring the family together with our Family Reunions T-shirt. A perfect memento for capturing the joy and memories of your special family gathering.',
      image: 'reunion.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'School events T-shirt',
      description:
        'Show school spirit with our School Events T-shirt. Ideal for school events, sports days, and other student activities, offering comfort and style.',
      image: 'schoolactivitiy.jpeg',
  category: categories[0]._id,
      image: 'schoolactivitiy.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Charity events T-shirt',
      description:
        'Support your cause with our Charity Events T-shirt. Designed to inspire and spread awareness, these shirts are perfect for fundraisers and charity events.',
      image: 'fund.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Sport Teams Jersey',
      description:
        'Gear up for the game with our Sport Teams Jersey. Perfect for teams and fans alike, offering a stylish and comfortable way to show team spirit.',
      image: 'soccer.jpeg',
      category: categories[0]._id,
      price: 30.00,
      quantity: 500
    },
    {
      name: 'Engagement & Wedding',
      category: categories[1]._id,
      description:
        'Capture the magic of your engagement and wedding with our premium photography service. Our expert photographers will ensure your special moments are beautifully preserved.',
      image: 'wedding1.jpeg',
      price: 100.00,
      quantity: 20
    },
    {
      name: 'Maternity & Newborn',
      category: categories[1]._id,
      description:
        'Celebrate the beauty of motherhood with our Maternity & Newborn photography sessions. Our photographers specialize in capturing the tender moments of this special time.',
      image: 'maternity1.jpeg',
      price: 100.0,
      quantity: 50
    },
    {
      name: 'Professional Headshots',
      category: categories[1]._id,
      description:
        'Enhance your professional profile with our high-quality Headshot photography. Perfect for resumes, LinkedIn profiles, and corporate branding.',
      image: 'headshot1.jpeg',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Family Portraits',
      category: categories[1]._id,
      description:
        'Create lasting memories with our Family Portraits photography. Our sessions are designed to capture the unique bond and joy of your family.',
      image: 'family1.jpeg',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Graduations',
      category: categories[1]._id,
      description:
        'Celebrate your academic achievements with our Graduation photography services. Capture the proud moments of this important milestone with professional photos.',
      image: 'graduation1.jpeg',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Children & Babies',
      category: categories[1]._id,
      description:
        'Our Children & Babies photography sessions are perfect for capturing the innocence and joy of childhood. These photos will be cherished for a lifetime.',
      image: 'children1.jpeg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Event Photography',
      category: categories[1]._id,
      description:
        'Our Event Photography service ensures every special moment of your events is captured with precision and creativity. Ideal for birthdays, anniversaries, and other celebrations.',
      image: 'event1.jpeg',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Lifestyle Photography',
      category: categories[1]._id,
      description:
        'Capture the essence of everyday life with our Lifestyle Photography. Perfect for documenting personal stories and unique moments in a natural setting.',
      image: 'lifestyle1.jpeg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Personal Branding',
      category: categories[1]._id,
      description:
        'Boost your personal brand with our Personal Branding photography. Ideal for entrepreneurs, influencers, and professionals looking to enhance their image.',
      image: 'branding1.jpeg',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Wooden Decor',
      category: categories[2]._id,
      description:
        'Add a touch of rustic charm to your home with our Wooden Decor. Handcrafted and unique, these pieces are perfect for adding warmth and character to any space.',
      image: 'familyname.jpeg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Cutting Board',
      category: categories[2]._id,
      description:
        'Our handcrafted Cutting Board is not only functional but also a beautiful addition to any kitchen. Made from high-quality wood, it is durable and stylish.',
      image: 'cutting-board.jpeg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Wooden Puzzle',
      category: categories[2]._id,
      description:
        'Enjoy a fun and challenging activity with our Wooden Puzzle. Perfect for all ages, this puzzle is a great way to spend time with family and friends.',
      image: 'puzzle.jpeg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Wooden Flower',
      category: categories[2]._id,
      description: 'Our Wooden Flower is a unique and beautiful piece of decor. Perfect for adding a natural touch to any room, it is a timeless addition to your home.',
      image: 'Woodendecor.jpeg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Wooden Necklaces',
      category: categories[2]._id,
      description:
        'These Wooden Necklaces are handcrafted and stylish, perfect for adding a unique touch to any outfit. They make great gifts for friends and family.',
      image: 'Necklace.jpeg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Wooden Keychain',
      category: categories[2]._id,
      description:
        'Carry a piece of nature with you with our Wooden Keychain. Durable and stylish, it is perfect for keeping your keys organized and easy to find.',
      image: 'keychain1.jpeg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Wooden Map',
      category: categories[2]._id,
      description:
        'Our Wooden Map is a beautiful and unique way to display your love for travel. Perfect for any home or office, it is a great conversation starter.',
      image: 'map1.jpeg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Wooden Necklaces',
      category: categories[2]._id,
      description:
        'These Wooden Necklaces are handcrafted and stylish, perfect for adding a unique touch to any outfit. They make great gifts for friends and family.',
      image: 'necklace2.jpeg',
      price: 9.99,
      quantity: 600
    },
    {
      name: 'Leather Keychain',
      category: categories[2]._id,
      description:
        'Our Leather Keychain is both stylish and durable. Perfect for keeping your keys organized, it makes a great gift for anyone who appreciates quality craftsmanship.',
      image: 'Leather.jpeg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
