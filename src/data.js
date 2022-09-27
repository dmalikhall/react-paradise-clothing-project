const products = [
    // short sleeves
    {
        id: 'jfjfjddo',
        name: 'forever fashion t-shirt',
        image: 'https://source.unsplash.com/h2dY1o-3rp0',
        mainCategory: 'all-tops',
        subCategory: 'short-sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 49.99,



    },
    {
        id: 'oe8efh4uh',
        name: 'two peace t-shirt',
        image: 'https://source.unsplash.com/wzRKn-AjKf4',
        mainCategory: 'all-tops',
        subCategory: 'short-sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 49.99,
    }, {
        id: '03kf9ff7fg7',
        name: 'infuse t-shirt',
        image: 'https://source.unsplash.com/-yPg8cusGD8',
        mainCategory: 'all-tops',
        subCategory: 'short-sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 49.99,
    }, {
        id: 'pffif8f7fy7',
        name: 'mona lisa t-shirt',
        image: 'https://source.unsplash.com/Rc80cSN_MZQ',
        mainCategory: 'all-tops',
        subCategory: 'short-sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 49.99,
    },
    // long sleeves
    
    {
        id: 'hdgwy72ef',
        name: 'fleece long sleeve',
        image: 'https://source.unsplash.com/2lQ9lvIAxWY',
        mainCategory: 'all-tops',
        subCategory: 'long sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 54.99,

    }, 
    {
        id: 'lsdhf73jfh',
        name: 'tangerine long sleeve',
        image: 'https://source.unsplash.com/d7ResQ8TS80',
        mainCategory: 'all-tops',
        subCategory: 'long sleeves',
        sizes: ['medium', 'large'],
        price: 54.99,
    },
    {
        id: 'adtgd6dgwu2',
        name: 'boreal long sleeve',
        image: 'https://source.unsplash.com/WhnbNX5yeJo',
        mainCategory: 'all-tops',
        subCategory: 'long sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 54.99,
    },
    {
        id:'0sjd7h32',
        name: 'city long sleeve',
        image: 'https://source.unsplash.com/8WBH9pcKZ-8',
        mainCategory: 'all-tops',
        subCategory: 'long sleeves',
        sizes: ['small', 'medium', 'large'],
        price: 54.99,
    },
    // jackets
    {
        id: '9dhdh3h3',
        name: 'padded jacket',
        image: 'https://source.unsplash.com/WIWVM_Z1x7c',
        mainCategory: 'all-tops',
        subCategory: 'jackets',
        sizes: ['small', 'medium', 'large'],
        price: 67.99,
    },
    {
        id: '10shhhkkwue1q',
        name: 'jean jacket',
        image: 'https://source.unsplash.com/i49yJtWD57w',
        mainCategory: 'all-tops',
        subCategory: 'jackets',
        sizes: ['small', 'medium', 'large'],
        price: 67.99,
    },
    {
        id: 'k3jd7w6dhk',
        name: 'robe jacket',
        image: 'https://source.unsplash.com/X2UprmSxIHQ',
        mainCategory: 'all-tops',
        subCategory: 'jackets',
        sizes: ['small', 'medium',],
        price: 67.99,
    },
    {
        id:'6hskh2hdg6',
        name: 'top face jacket',
        image: 'https://source.unsplash.com/27rnV5tE9_8',
        mainCategory: 'all-tops',
        subCategory: 'jackets',
        sizes: [ 'medium','large'],
        price: 67.99,
    },

    // hoodies
    {
        id: 'hoody365agg2',
        name: 'vale hoody',
        image: 'https://source.unsplash.com/6ExulFuSnJI',
        mainCategory: 'all-tops',
        subCategory: 'hoodies',
        sizes: [ 'small','medium','large'],
        price: 65.99,
    },
    {
        id: 'ps39fdhf73',
        name: 'three stripe hoody',
        image: 'https://source.unsplash.com/TfXwOZPfND4',
        mainCategory: 'all-tops',
        subCategory: 'hoodies',
        sizes: [ 'small','medium','large'],
        price: 65.99,

    },
    {
        id: 'mdj9ddh0d',
        name: 'mujeres hoody',
        image: 'https://source.unsplash.com/1i9K55ni5Dk',
        mainCategory: 'all-tops',
        subCategory: 'hoodies',
        sizes: [ 'small','medium','large'],
        price: 65.99,
    },

    // shorts

    {
        id: 'sp8rhf6h',
        name: 'fila shorts',
        image: 'https://source.unsplash.com/t41KnBoPM9I',
        mainCategory: 'all-bottoms',
        subCategory: 'shorts',
        sizes: [ 'small','medium','large'],
        price: 54.99,
    },
    {
        id: '028dhdoa8j',
        name: 'basketball shorts',
        image: 'https://source.unsplash.com/1UpSKFSOhKg',
        mainCategory: 'all-bottoms',
        subCategory: 'shorts',
        sizes: [ 'small','medium','large'],
        price: 54.99,
    },
    {
        id: '5ss7shdhf',
        name: 'navia shorts',
        image: 'https://source.unsplash.com/0Wc1xvxm-U0',
        mainCategory: 'all-bottoms',
        subCategory: 'shorts',
        sizes: [ 'small','medium','large'],
        price: 54.99,
    },
    {
        id: '5ddhw7dhsg',
        name: 'jean shorts',
        image: 'https://source.unsplash.com/UovQf6b0KeA',
        mainCategory: 'all-bottoms',
        subCategory: 'shorts',
        sizes: [ 'small','medium','large'],
        price: 54.99,
    },

    // jogging pants
    {
        id: '2jdk9dhhdy',
        name: 'champion jogging pants',
        image: 'https://source.unsplash.com/MJszCGakKlA',
        mainCategory: 'all-bottoms',
        subCategory: 'jogging pants',
        sizes: [ 'small','medium','large'],
        price: 67.99,

    },
    {
        id: 'dhd78dhs0',
        name: 'stripe jogging pants',
        image: 'https://source.unsplash.com/bhtkwAORouk',
        mainCategory: 'all-bottoms',
        subCategory: 'jogging pants',
        sizes: [ 'small','medium','large'],
        price: 67.99,

    },
    {
        id: 'vbh7dhdwhd0',
        name: 'black jogging pants',
        image: 'https://source.unsplash.com/gA8NSsKxMDg',
        mainCategory: 'all-bottoms',
        subCategory: 'jogging pants',
        sizes: [ 'small','medium','large'],
        price: 67.99,

    },
    {
        id: '1kd0dj3pfj',
        name: 'grey jogging pants',
        image: 'https://source.unsplash.com/oXYGKCYhQOI',
        mainCategory: 'all-bottoms',
        subCategory: 'jogging pants',
        sizes: [ 'small','medium','large'],
        price: 67.99,

    },

    // tights
    {
        id:'m19snd7bd',
        name: 'black leggings',
        image: 'https://source.unsplash.com/tGGvjUsWvyY',
        mainCategory: 'all-bottoms',
        subCategory: 'tights',
        sizes: [ 'small','medium','large'],
        price: 59.99,

    },
    {
        id: 'ahs662gs8',
        name: 'men black leggings',
        image: 'https://source.unsplash.com/MXnkWolg3Ug',
        mainCategory: 'all-bottoms',
        subCategory: 'tights',
        sizes: [ 'small','medium','large'],
        price: 59.99,
    },
    {
        id:'rahd83yih',
        name: 'blue leggings',
        image: 'https://source.unsplash.com/Y1drF0Y3Oe0',
        mainCategory: 'all-bottoms',
        subCategory: 'tights',
        sizes: [ 'small','medium','large'],
        price: 59.99,

    },

    // hats

    {
        id: 'aodheu29hds',
        name: 'palm tree hat',
        image: 'https://source.unsplash.com/6NVrH0HB_DE',
        mainCategory: 'all-accessories',
        subCategory: 'hats',
        sizes: [ 'small','medium','large'],
        price: 30.00,

    },
    {
        id:'wqoi82dh37',
        name: 'army green hat',
        image: 'https://source.unsplash.com/YxZHKfCPVPU',
        mainCategory: 'all-accessories',
        subCategory: 'hats',
        sizes: [ 'small','medium','large'],
        price: 30.00,

    },
    {
        id:'681he7fddsd',
        name: 'flight man hat',
        image: 'https://source.unsplash.com/Wzv5dt20SW0',
        mainCategory: 'all-accessories',
        subCategory: 'hats',
        sizes: [ 'small','medium','large'],
        price: 30.00,

    },
    {
        id: '23khfhsls0',
        name: 'one stand hat',
        image: 'https://source.unsplash.com/5a_Q9TY9w_o',
        mainCategory: 'all-accessories',
        subCategory: 'hats',
        sizes: [ 'small','medium','large'],
        price: 30.00,

    },
    // sunglasses
    {
        id: 'dh2d829hf2',
        name: 'circle glasses',
        image: 'https://source.unsplash.com/Hnp-cs9QVOc',
        mainCategory: 'all-accessories',
        subCategory: 'sunglasses',
        sizes: [ 'regular'],
        price: 25.99,
    },
    {
        id: 's7u2nydw2',
        name: 'aviators',
        image: 'https://source.unsplash.com/n2WT4H30L9k',
        mainCategory: 'all-accessories',
        subCategory: 'sunglasses',
        sizes: [ 'regular'],
        price: 25.99,

    },
    {
        id: '0381gixbwod8',
        name: 'golden eyes',
        image: 'https://source.unsplash.com/s-Zw9Dtec08',
        mainCategory: 'all-accessories',
        subCategory: 'sunglasses',
        sizes: [ 'regular'],
        price: 25.99,

    },
    {
        id: 'dhd72hd8cho1',
        name: 'cheetah print',
        image: 'https://source.unsplash.com/Q7y7GVH4mtI',
        mainCategory: 'all-accessories',
        subCategory: 'sunglasses',
        sizes: [ 'regular'],
        price: 25.99,

    },
    // headphones
    {
        id: '2hdhd3idh7',
        name: 'rose gold beats',
        image: 'https://source.unsplash.com/bWZAPKm0zZE',
        mainCategory: 'all-accessories',
        subCategory: 'headphones',
        sizes: [ 'regular'],
        price: 99.99,

    },
    {
        id: '1gsh0g3gd',
        name: 'white gold beats',
        image: 'https://source.unsplash.com/vISNAATFXlE',
        mainCategory: 'all-accessories',
        subCategory: 'headphones',
        sizes: [ 'regular'],
        price: 99.99,

    },
    {
        id: 'chsk3kdh89',
        name: 'midnight listens',
        image: 'https://source.unsplash.com/cDrIiiptFqE',
        mainCategory: 'all-accessories',
        subCategory: 'headphones',
        sizes: [ 'regular'],
        price: 99.99,

    },
    {
        id: 'dj2837fhjs',
        name: 'dark gold',
        image: 'https://source.unsplash.com/lUMj2Zv5HUE',
        mainCategory: 'all-accessories',
        subCategory: 'headphones',
        sizes: [ 'regular'],
        price: 99.99,

    },
    {
        id: 'tdh727dgdi9a',
        name: 'apple earbuds',
        image: 'https://source.unsplash.com/mru38VH7tII',
        mainCategory: 'all-accessories',
        subCategory: 'headphones',
        sizes: [ 'regular'],
        price: 99.99,

    }



    
    

]

export default products