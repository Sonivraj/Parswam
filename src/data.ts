export async function getOrder(number: string) {
  return (await getOrders()).find((order) => order.number.toString() === number)
}

export async function getOrders() {
  return [
    {
      number: '4376',
      status: 'Delivered on January 08, 2025',
      invoiceHref: '#',
      products: [
        {
          id: 1,
          name: 'Classic Straight Jeans',
          handle: 'classic-straight-jeans',
          description:
            'Our signature straight-leg jeans with a comfortable fit and durable denim construction. Perfect for everyday wear.',
          href: '#',
          price: '1890.00',
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          imageSrc: '/images/jeans/Parshwam-1.webp',
          imageAlt: 'Classic straight-leg jeans in dark wash.',
          quantity: 1,
          size: '32x32',
          color: 'Dark Wash',
        },
      ],
    },
    {
      number: '4657',
      status: 'Delivered on January 11, 2025',
      invoiceHref: '#',
      products: [
        {
          id: 1,
          name: 'Slim Fit Jeans',
          handle: 'slim-fit-jeans',
          description:
            'Modern slim-fit jeans with stretch for comfort and mobility. Features a tapered leg for a contemporary look.',
          href: '#',
          price: '1790.00',
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          imageSrc: '/images/jeans/Parshwam-2.webp',
          imageAlt: 'Slim fit jeans in medium wash.',
          quantity: 1,
          size: '30x30',
          color: 'Medium Wash',
        },
        {
          id: 2,
          name: 'Relaxed Fit Jeans',
          handle: 'relaxed-fit-jeans',
          description: 'Comfortable relaxed-fit jeans with extra room in the seat and thigh. Perfect for casual wear.',
          href: '#',
          price: '1850.00',
          status: 'Shipped',
          step: 0,
          date: 'March 23, 2021',
          datetime: '2021-03-23',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          imageSrc: '/images/jeans/Parshwam-3.webp',
          imageAlt: 'Relaxed fit jeans in light wash.',
          quantity: 1,
          size: '34x32',
          color: 'Light Wash',
        },
      ],
    },
  ]
}

export function getCountries() {
  return [
    {
      name: 'India',
      code: 'IN',
      flagUrl: '/flags/in.svg',
      regions: [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal',
        'Andaman and Nicobar Islands',
        'Chandigarh',
        'Dadra and Nagar Haveli and Daman and Diu',
        'Delhi',
        'Jammu and Kashmir',
        'Ladakh',
        'Lakshadweep',
        'Puducherry',
      ],
    },
  ]
}

export async function getShopData() {
  return {
    description: 'Premium denim and jeans for every style.',
    name: 'DenimCo',
    termsOfService: {
      url: '#',
      title: 'Terms of Service',
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: '<p><strong>OVERVIEW</strong> <br>This website is operated by DenimCo.</p>',
    },
    subscriptionPolicy: {
      body: '<p>We have a 30-day return policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: '#',
    },
    shippingPolicy: {
      body: '<p>Shipping Policy</p>',
      handle: 'shipping-policy',
      id: 'gid://shopify/ShopPolicy/23745298488',
      title: 'Shipping Policy',
      url: '#',
    },
    refundPolicy: {
      body: '<p>We have a 30-day return policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: '#',
    },
    privacyPolicy: {
      body: '<p>Privacy Policy</p>',
      handle: 'privacy-policy',
      id: 'gid://shopify/ShopPolicy/30401283',
      title: 'Privacy Policy',
      url: '#',
    },
    primaryDomain: {
      url: '#',
    },
  }
}

export function getProductReviews() {
  return [
    {
      id: 1,
      title: "Best jeans I've ever owned",
      rating: 5,
      content: `
        <p>The quality and fit are amazing. These jeans are comfortable and durable.</p>
        <p>I get compliments every time I wear them. Will definitely buy more!</p>
      `,
      author: 'Michael T.',
      date: 'May 16, 2025',
      datetime: '2025-05-16',
    },
    {
      id: 2,
      title: 'Perfect fit and comfortable',
      rating: 5,
      content: `
        <p>Finally found jeans that fit perfectly right out of the box.</p>
        <p>The stretch material makes them comfortable for all-day wear while maintaining their shape.</p>
      `,
      author: 'Sarah J.',
      date: 'May 16, 2025',
      datetime: '2025-05-16',
    },
    {
      id: 3,
      title: 'Great quality denim',
      rating: 5,
      content: `
        <p>The denim quality is exceptional. These jeans feel like they will last for years.</p>
        <p>Worth every penny for the quality and comfort.</p>
      `,
      author: 'David L.',
      date: 'May 16, 2025',
      datetime: '2025-05-16',
    },
  ]
}

export function getBlogPosts() {
  return [
    {
      id: 1,
      title: 'Finding the Perfect Jean Fit: A Complete Guide',
      handle: 'perfect-jean-fit-guide',
      excerpt:
        'Learn how to choose the right jean fit for your body type and style preferences. From skinny to relaxed, we cover it all.',
      featuredImage: {
        src: '/images/jeans/blog1.jpg',
        alt: 'Different jean fits displayed',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2025',
      category: { title: 'Style Guide', href: '#' },
      timeToRead: '4 min read',
    },
    {
      id: 2,
      title: 'Denim Care 101: How to Make Your Jeans Last Longer',
      handle: 'denim-care-guide',
      excerpt:
        'Proper care can extend the life of your favorite jeans. Learn the dos and donts of denim maintenance.',
      featuredImage: {
        src: '/images/jeans/blog2.jpg',
        alt: 'Denim care instructions',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2025',
      category: { title: 'Care Guide', href: '#' },
      timeToRead: '3 min read',
    },
    {
      id: 3,
      title: 'The History of Denim: From Workwear to Fashion Staple',
      handle: 'history-of-denim',
      excerpt:
        'Explore the fascinating journey of denim from its humble beginnings as durable workwear to becoming a global fashion icon.',
      featuredImage: {
        src: '/images/jeans/blog3.jpg',
        alt: 'Vintage denim collection',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2025',
      category: { title: 'History', href: '#' },
      timeToRead: '5 min read',
    },
    {
      id: 4,
      title: 'Sustainable Denim: Our Commitment to Eco-Friendly Manufacturing',
      handle: 'sustainable-denim',
      excerpt:
        'Discover how we are reducing our environmental footprint through sustainable denim production practices.',
      featuredImage: {
        src: '/images/jeans/contact.jpg',
        alt: 'Sustainable denim production',
        width: 3000,
        height: 2000,
      },
      date: 'Mar 16, 2025',
      category: { title: 'Sustainability', href: '#' },
      timeToRead: '3 min read',
    },
  ]
}

export function getBlogPostsByHandle(handle: string) {
  const blogPosts = getBlogPosts()
  const post = blogPosts.find((post) => post.handle === handle) || {}

  return {
    id: 1,
    title: 'Finding the Perfect Jean Fit: A Complete Guide',
    handle: 'perfect-jean-fit-guide',
    excerpt:
      'Learn how to choose the right jean fit for your body type and style preferences.',
    featuredImage: {
      src: '/images/jeans/blog1.jpg',
      alt: 'Different jean fits displayed',
      width: 3773,
      height: 600,
    },
    date: 'Mar 16, 2025',
    datetime: '2025-03-16',
    category: { title: 'Style Guide', href: '#' },
    timeToRead: '4 min read',
    ...post,
    content: `<p>Finding the perfect pair of jeans can transform your wardrobe and boost your confidence.</p>`,
    author: {
      name: 'Michael T.',
    },
  }
}

export function getCartProducts() {
  return [
    {
      id: 1,
      name: 'Classic Straight Jeans',
      handle: 'classic-straight-jeans',
      price: '1890.00',
      color: 'Dark Wash',
      inStock: true,
      size: '32x32',
      imageSrc: '/images/jeans/Parshwam-1.webp',
      imageAlt: 'Classic straight jeans in dark wash.',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Slim Fit Jeans',
      handle: 'slim-fit-jeans',
      price: '1790.00',
      color: 'Medium Wash',
      inStock: true,
      size: '30x30',
      imageSrc: '/images/jeans/Parshwam-2.webp',
      imageAlt: 'Slim fit jeans in medium wash.',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Relaxed Fit Jeans',
      handle: 'relaxed-fit-jeans',
      price: '1850.00',
      color: 'Light Wash',
      inStock: true,
      size: '34x32',
      imageSrc: '/images/jeans/Parshwam-3.webp',
      imageAlt: 'Relaxed fit jeans in light wash.',
      quantity: 1,
    },
  ]
}

// ------------------------ JEANS COLLECTIONS ------------------------
export async function getJeansCollections() {
  const products = await getJeansProducts()
  return [
    {
      id: '1',
      title: 'Straight Leg',
      handle: 'straight-leg',
      description:
        'Timeless straight-leg jeans that never go out of style. Perfect for any occasion with a classic silhouette.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/jeans/Parshwam-1.webp',
      products: products.slice(0, 4),
    },
    {
      id: '2',
      title: 'Slim Fit',
      handle: 'slim-fit',
      description: 'Modern slim-fit jeans with a tailored look. Comfortable stretch with a contemporary silhouette.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/jeans/Parshwam-2.webp',
      products: products.slice(4, 8),
    },
    {
      id: '3',
      title: 'Relaxed Fit',
      handle: 'relaxed-fit',
      description: 'Comfortable relaxed-fit jeans with extra room. Perfect for casual everyday wear.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/jeans/Parshwam-3.webp',
      products: products.slice(8, 12),
    },
    {
      id: '4',
      title: 'Skinny Jeans',
      handle: 'skinny-jeans',
      description: 'Form-fitting skinny jeans that hug your curves. Made with stretch denim for ultimate comfort.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/jeans/Parshwam-4.webp',
      products: products.slice(12, 16),
    },
    {
      id: '5',
      title: 'Bootcut',
      handle: 'bootcut',
      description: 'Classic bootcut jeans that flare slightly at the ankle. Perfect for pairing with your favorite boots.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/jeans/Parshwam-5.webp',
      products: products.slice(16, 20),
    },
  ]
}

export async function getJeansGroupCollections() {
  const collections = await getJeansCollections()
  return [
    {
      id: '1',
      title: "Men's Jeans",
      handle: 'mens-jeans',
      description: 'Premium denim jeans designed for comfort and style. Find your perfect fit.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
    {
      id: '2',
      title: "Kid's Jeans",
      handle: 'kids-jeans',
      description: 'Flattering fits and styles for every body type. Discover your new favorite pair.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections,
    },
    {
      id: '3',
      title: 'Denim Jeans',
      handle: 'raw-denim',
      description: 'Unwashed, untreated denim that molds to your body over time. For the denim purist.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections: collections.slice(0, 3),
    },
    {
      id: '4',
      title: 'Cotton Pants',
      handle: 'stretch-denim',
      description: 'Comfort meets style with our premium stretch denim collection.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      collections: collections.slice(2, 5),
    },
  ]
}

// ------------------------ COMMON DEMO DATA ------------------------
export async function getGroupCollections(theme: 'jeans') {
  if (theme === 'jeans') {
    return getJeansGroupCollections()
  }
  return []
}

export async function getCollections(theme: 'jeans' | 'all') {
  if (theme === 'jeans') {
    return await getJeansCollections()
  }

  if (theme === 'all') {
    return await getJeansCollections()
  }
  return []
}

export async function getCollectionById(id: string) {
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.id.toString() === id)
}

export async function getCollectionByHandle(handle: string) {
  if (handle === 'all') {
    return {
      id: 'gid://0',
      title: 'All Jeans',
      handle: '/all',
      description:
        'Discover our complete range of premium denim jeans. From classic straight to modern slim fit, find your perfect pair.',
      updatedAt: '2025-05-06T10:00:00-04:00',
      image: '/images/jeans/Parshwam-1.webp',
      products: (await getProducts()).slice(0, 8),
    }
  }
  const allCollections = await getCollections('all')
  return allCollections?.find((collection) => collection?.handle === handle)
}

export async function getJeansProducts() {
  return [
    // Straight Leg Jeans
    {
      id: 1001,
      title: 'Classic Straight Jeans',
      handle: 'classic-straight-jeans',
      vendor: 'DenimCo',
      tags: ['Straight', 'Classic', 'Everyday'],
      price: 1890,
      images: [
        { src: '/images/jeans/Parshwam-1.webp', width: 1600, height: 2000, alt: 'Classic straight jeans front view' },
        { src: '/images/jeans/Parshwam-1-1.webp', width: 1600, height: 2000, alt: 'Classic straight jeans side view' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-1.webp', width: 1600, height: 2000, alt: 'Classic straight jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Dark Wash', swatch: { color: '#191970', image: null } },
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
            { name: 'Light Wash', swatch: { color: '#87CEEB', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x30' },
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
            { swatch: null, name: '34x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Dark Wash' },
        { name: 'Size', value: '32x32' },
      ],
      collections: [{ title: 'Straight Leg', id: 2001, handle: 'straight-leg' }],
    },
    {
      id: 1002,
      title: 'Vintage Straight Jeans',
      handle: 'vintage-straight-jeans',
      vendor: 'DenimCo',
      tags: ['Vintage', 'Straight', 'Retro'],
      price: 1950,
      images: [
        { src: '/images/jeans/Parshwam-2.webp', width: 1600, height: 2000, alt: 'Vintage straight jeans front view' },
        { src: '/images/jeans/Parshwam-2-2.webp', width: 1600, height: 2000, alt: 'Vintage straight jeans detail' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-2.webp', width: 1600, height: 2000, alt: 'Vintage straight jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
            { name: 'Light Wash', swatch: { color: '#87CEEB', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x30' },
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Medium Wash' },
        { name: 'Size', value: '30x30' },
      ],
      collections: [{ title: 'Straight Leg', id: 2001, handle: 'straight-leg' }],
    },
    {
      id: 1003,
      title: 'Premium Straight Jeans',
      handle: 'premium-straight-jeans',
      vendor: 'DenimCo',
      tags: ['Premium', 'Straight', 'Selvedge'],
      price: 1450,
      images: [
        { src: '/images/jeans/Parshwam-3.webp', width: 1600, height: 2000, alt: 'Premium straight jeans front view' },
        { src: '/images/jeans/Parshwam-3-3.webp', width: 1600, height: 2000, alt: 'Premium straight jeans detail' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-3.webp', width: 1600, height: 2000, alt: 'Premium straight jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Dark Indigo', swatch: { color: '#191970', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
            { swatch: null, name: '34x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Dark Indigo' },
        { name: 'Size', value: '32x32' },
      ],
      collections: [{ title: 'Straight Leg', id: 2001, handle: 'straight-leg' }],
    },

    // Slim Fit Jeans
    {
      id: 1004,
      title: 'Slim Fit Jeans',
      handle: 'slim-fit-jeans',
      vendor: 'DenimCo',
      tags: ['Slim', 'Modern', 'Stretch'],
      price: 1790,
      images: [
        { src: '/images/jeans/Parshwam-4.webp', width: 1600, height: 2000, alt: 'Slim fit jeans front view' },
        { src: '/images/jeans/Parshwam-4-4.webp', width: 1600, height: 2000, alt: 'Slim fit jeans side view' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-4.webp', width: 1600, height: 2000, alt: 'Slim fit jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
            { name: 'Dark Wash', swatch: { color: '#191970', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x30' },
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Medium Wash' },
        { name: 'Size', value: '30x30' },
      ],
      collections: [{ title: 'Slim Fit', id: 2002, handle: 'slim-fit' }],
    },
    {
      id: 1005,
      title: 'Stretch Slim Jeans',
      handle: 'stretch-slim-jeans',
      vendor: 'DenimCo',
      tags: ['Slim', 'Stretch', 'Comfort'],
      price: 1850,
      images: [
        { src: '/images/jeans/Parshwam-5.webp', width: 1600, height: 2000, alt: 'Stretch slim jeans front view' },
        { src: '/images/jeans/Parshwam-5-5.webp', width: 1600, height: 2000, alt: 'Stretch slim jeans movement' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-5.webp', width: 1600, height: 2000, alt: 'Stretch slim jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Dark Wash', swatch: { color: '#191970', image: null } },
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x30' },
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Dark Wash' },
        { name: 'Size', value: '32x30' },
      ],
      collections: [{ title: 'Slim Fit', id: 2002, handle: 'slim-fit' }],
    },

    // Relaxed Fit Jeans
    {
      id: 1006,
      title: 'Relaxed Fit Jeans',
      handle: 'relaxed-fit-jeans',
      vendor: 'DenimCo',
      tags: ['Relaxed', 'Comfort', 'Casual'],
      price: 1850,
      images: [
        { src: '/images/jeans/Parshwam-6.webp', width: 1600, height: 2000, alt: 'Relaxed fit jeans front view' },
        { src: '/images/jeans/Parshwam-6-6.webp', width: 1600, height: 2000, alt: 'Relaxed fit jeans comfort' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-6.webp', width: 1600, height: 2000, alt: 'Relaxed fit jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Light Wash', swatch: { color: '#87CEEB', image: null } },
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
            { swatch: null, name: '34x32' },
            { swatch: null, name: '36x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Light Wash' },
        { name: 'Size', value: '34x32' },
      ],
      collections: [{ title: 'Relaxed Fit', id: 2003, handle: 'relaxed-fit' }],
    },
    {
      id: 1007,
      title: 'Loose Fit Jeans',
      handle: 'loose-fit-jeans',
      vendor: 'DenimCo',
      tags: ['Loose', 'Comfort', 'Streetwear'],
      price: 1950,
      images: [
        { src: '/images/jeans/Parshwam-4.webp', width: 1600, height: 2000, alt: 'Loose fit jeans front view' },
        { src: '/images/jeans/Parshwam-4-4.webp', width: 1600, height: 2000, alt: 'Loose fit jeans style' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-4.webp', width: 1600, height: 2000, alt: 'Loose fit jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Light Wash', swatch: { color: '#87CEEB', image: null } },
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '32x30' },
            { swatch: null, name: '32x32' },
            { swatch: null, name: '34x32' },
            { swatch: null, name: '36x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Medium Wash' },
        { name: 'Size', value: '36x32' },
      ],
      collections: [{ title: 'Relaxed Fit', id: 2003, handle: 'relaxed-fit' }],
    },

    // Skinny Jeans
    {
      id: 1008,
      title: 'Super Skinny Jeans',
      handle: 'super-skinny-jeans',
      vendor: 'DenimCo',
      tags: ['Skinny', 'Form-fitting', 'Stretch'],
      price: 1750,
      images: [
        { src: '/images/jeans/Parshwam-2.webp', width: 1600, height: 2000, alt: 'Super skinny jeans front view' },
        { src: '/images/jeans/Parshwam-2-2.webp', width: 1600, height: 2000, alt: 'Super skinny jeans fit' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-2.webp', width: 1600, height: 2000, alt: 'Super skinny jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Dark Wash', swatch: { color: '#191970', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '26x30' },
            { swatch: null, name: '28x30' },
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Black' },
        { name: 'Size', value: '28x30' },
      ],
      collections: [{ title: 'Skinny Jeans', id: 2004, handle: 'skinny-jeans' }],
    },

    // Bootcut Jeans
    {
      id: 1009,
      title: 'Classic Bootcut Jeans',
      handle: 'classic-bootcut-jeans',
      vendor: 'DenimCo',
      tags: ['Bootcut', 'Classic', 'Western', 'Vintage'],
      price: 1950,
      compare_price: 1220,
      description: 'Timeless bootcut jeans with a flared leg opening perfect for boots. Made from premium denim with comfortable stretch.',
      material: '98% Cotton, 2% Elastane',
      fit: 'Bootcut',
      rise: 'Mid-rise',
      images: [
        { src: '/images/jeans/Parshwam-6.webp', width: 1600, height: 2000, alt: 'Classic bootcut jeans front view' },
        { src: '/images/jeans/Parshwam-6-6.webp', width: 1600, height: 2000, alt: 'Classic bootcut jeans with boots' },
        { src: '/images/jeans/Parshwam-2.webp', width: 1600, height: 2000, alt: 'Bootcut detail showing flare' },
        { src: '/images/jeans/Parshwam-2-2.webp', width: 1600, height: 2000, alt: 'Back view of bootcut jeans' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-6.webp', width: 1600, height: 2000, alt: 'Classic bootcut jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Medium Wash', swatch: { color: '#4682B4', image: null } },
            { name: 'Light Wash', swatch: { color: '#87CEEB', image: null } },
            { name: 'Dark Wash', swatch: { color: '#191970', image: null } },
            { name: 'Vintage Wash', swatch: { color: '#5F9EA0', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x32' },
            { swatch: null, name: '30x32' },
            { swatch: null, name: '32x32' },
            { swatch: null, name: '34x32' },
            { swatch: null, name: '36x32' },
            { swatch: null, name: '38x32' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Medium Wash' },
        { name: 'Size', value: '32x32' },
      ],
      collections: [{ title: 'Bootcut', id: 2005, handle: 'bootcut' }],
      inventory: 45,
      sku: 'DBC-1009-M32',
      weight: '1.2 kg',
      care_instructions: 'Machine wash cold, tumble dry low',
      features: [
        'Flared leg opening',
        'Comfortable stretch denim',
        'Five-pocket styling',
        'Reinforced stitching',
        'Button fly with zip closure',
      ],
    },
    {
      id: 1010,
      title: 'Slim Bootcut Jeans',
      handle: 'slim-bootcut-jeans',
      vendor: 'DenimCo',
      tags: ['Bootcut', 'Slim', 'Modern', 'Stretch'],
      price: 1100,
      compare_price: 1400,
      description: 'Modern slim bootcut jeans that hug your thighs and flare slightly at the bottom. Perfect for contemporary styling.',
      material: '95% Cotton, 5% Elastane',
      fit: 'Slim Bootcut',
      rise: 'Low-rise',
      images: [
        { src: '/images/jeans/Parshwam-1.webp', width: 1600, height: 2000, alt: 'Slim bootcut jeans front view' },
        { src: '/images/jeans/Parshwam-1-1.webp', width: 1600, height: 2000, alt: 'Slim bootcut jeans side view' },
        { src: '/images/jeans/Parshwam-5.webp', width: 1600, height: 2000, alt: 'Slim bootcut fabric detail' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-3.webp', width: 1600, height: 2000, alt: 'Slim bootcut jeans' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Dark Indigo', swatch: { color: '#000080', image: null } },
            { name: 'Black', swatch: { color: '#000000', image: null } },
            { name: 'Charcoal', swatch: { color: '#36454F', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x34' },
            { swatch: null, name: '30x34' },
            { swatch: null, name: '32x34' },
            { swatch: null, name: '34x34' },
            { swatch: null, name: '36x34' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Dark Indigo' },
        { name: 'Size', value: '32x34' },
      ],
      collections: [{ title: 'Bootcut', id: 2005, handle: 'bootcut' }],
      inventory: 32,
      sku: 'DBS-1010-D32',
      weight: '1.1 kg',
      care_instructions: 'Machine wash cold, line dry recommended',
      features: [
        'Slim through thigh',
        'Subtle bootcut flare',
        'Premium stretch denim',
        'Modern low-rise fit',
        'Zip fly with button',
      ],
    },
    {
      id: 1011,
      title: 'Vintage Western Bootcut',
      handle: 'vintage-western-bootcut',
      vendor: 'WesternWear',
      tags: ['Bootcut', 'Vintage', 'Western', 'Authentic'],
      price: 1250,
      compare_price: 1600,
      description: 'Authentic western-style bootcut jeans with traditional stitching and rugged durability. True to their cowboy roots.',
      material: '100% Cotton',
      fit: 'Regular Bootcut',
      rise: 'Mid-rise',
      images: [
        { src: '/images/jeans/Parshwam-3.webp', width: 1600, height: 2000, alt: 'Vintage western bootcut front' },
        { src: '/images/jeans/Parshwam-3-3.webp', width: 1600, height: 2000, alt: 'Vintage western bootcut back' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-6.webp', width: 1600, height: 2000, alt: 'Vintage western bootcut' },
      options: [
        {
          name: 'Wash',
          optionValues: [
            { name: 'Stone Wash', swatch: { color: '#B0C4DE', image: null } },
            { name: 'Vintage Blue', swatch: { color: '#6495ED', image: null } },
            { name: 'Rinse Wash', swatch: { color: '#4169E1', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '29x34' },
            { swatch: null, name: '31x34' },
            { swatch: null, name: '33x34' },
            { swatch: null, name: '35x34' },
            { swatch: null, name: '37x34' },
          ],
        },
      ],
      selected_options: [
        { name: 'Wash', value: 'Stone Wash' },
        { name: 'Size', value: '33x34' },
      ],
      collections: [{ title: 'Bootcut', id: 2005, handle: 'bootcut' }],
      inventory: 28,
      sku: 'WWV-1011-S33',
      weight: '1.3 kg',
      care_instructions: 'Machine wash warm, avoid bleach',
      features: [
        'Authentic western stitching',
        'Wider bootcut flare',
        '100% rugged cotton',
        'Traditional yoke back',
        'Heavy-duty hardware',
      ],
    },
    {
      id: 1012,
      title: 'Stretch Comfort Bootcut',
      handle: 'stretch-comfort-bootcut',
      vendor: 'ComfortDenim',
      tags: ['Bootcut', 'Stretch', 'Comfort', 'Everyday'],
      price: 850,
      compare_price: 1100,
      description: 'Everyday bootcut jeans with maximum comfort stretch. Perfect for all-day wear without sacrificing style.',
      material: '80% Cotton, 18% Polyester, 2% Elastane',
      fit: 'Relaxed Bootcut',
      rise: 'Mid-rise',
      images: [
        { src: '/images/jeans/Parshwam-1.webp', width: 1600, height: 2000, alt: 'Comfort bootcut front view' },
        { src: '/images/jeans/Parshwam-1-1.webp', width: 1600, height: 2000, alt: 'Comfort bootcut showing flexibility' },
      ],
      featured_image: { src: '/images/jeans/Parshwam-1.webp', width: 1600, height: 2000, alt: 'Stretch comfort bootcut' },
      options: [
        {
          name: 'Color',
          optionValues: [
            { name: 'Medium Blue', swatch: { color: '#6A8DB4', image: null } },
            { name: 'Dark Blue', swatch: { color: '#354B6B', image: null } },
            { name: 'Light Blue', swatch: { color: '#8FB0D0', image: null } },
          ],
        },
        {
          name: 'Size',
          optionValues: [
            { swatch: null, name: '28x30' },
            { swatch: null, name: '30x30' },
            { swatch: null, name: '32x30' },
            { swatch: null, name: '34x30' },
            { swatch: null, name: '36x30' },
            { swatch: null, name: '38x30' },
            { swatch: null, name: '40x30' },
          ],
        },
      ],
      selected_options: [
        { name: 'Color', value: 'Medium Blue' },
        { name: 'Size', value: '32x30' },
      ],
      collections: [{ title: 'Bootcut', id: 2005, handle: 'bootcut' }],
      inventory: 67,
      sku: 'CDS-1012-M32',
      weight: '1.0 kg',
      care_instructions: 'Machine wash warm, tumble dry medium',
      features: [
        'Maximum comfort stretch',
        'Relaxed fit through thigh',
        'Soft cotton blend',
        'Easy care fabric',
        'All-day comfort waistband',
      ],
    },
  ]
}

export async function getProducts() {
  return await getJeansProducts()
}

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Awaited<ReturnType<typeof getJeansCollections>>[number]
export type TProductItem = Awaited<ReturnType<typeof getProducts>>[number]