import Category from '../models/category';
import Food from '../models/food';

export const CATEGORIES = [
    new Category('c1', 'İtalyan', 'pink'),
    new Category('c2', 'Aperatif', 'darkpink'),
    new Category('c3', 'Hamburger', 'brown'),
    new Category('c4', 'Alman', 'yellow'),
    new Category('c5', 'Diyet', 'blue'),
    new Category('c6', 'Egzotik', 'green'),
    new Category('c7', 'Kahvaltı', 'lightblue'),
    new Category('c8', 'Hint', 'lightgreen'),
];

export const FOODS = [
    new Food(
        'm1',
        ['c1', 'c2'],
        'Domates soslu Spagetti',
        'bütçeye uygun',
        'normal kalorili',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
        [
            '4 Domates',
            '1 Çay Kaşığı Zeytinyağı',
            '2 Soğan',
            '200g Spaghetti',
            'Baharatlar',
            'Peynir',
        ]
    ),
    new Food(
        'm2',
        ['c2'],
        'Tost',
        'bütçeye uygun',
        'çok kalorili',
        'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
        ['Yarım Ekmek', 'Sucuk', 'Salam', 'Kaşar Peyniri', 'Margarin']
    ),
    new Food(
        'm3',
        ['c3'],
        'Hamburger',
        'bütçeye uygun',
        'çok kalorili',
        'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
        [
            '150 gr et',
            '2 Dilim Domates',
            '1 Dilim Chedar Peyniri',
            '1 Dilim Soğan',
            'Ketçap',
            'Mayonez',
        ]
    ),
    new Food(
        'm4',
        ['c4'],
        'Tavuk Sote',
        'bütçeye uygun',
        'normal kalorili',
        'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
        [
            '200 gr Tavuk',
            'Domates',
            'Biber',
            'Fesleğen',
            'Limon',
            'Zeytinyağı',
            'Tuz',
        ]
    ),
    new Food(
        'm5',
        ['c2', 'c5'],
        'Balıklı Salata',
        'pahalı',
        'az kalorili',
        'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
        [
            'Somon Balığı',
            'Domates',
            'Limon',
            'Salata Sosu',
            'Taze Soğan',
            'Hardal',
            'Zeytin Yağı',
            'Tuz',
        ]
    ),
    new Food(
        'm6',
        ['c6'],
        'Portakallı Muhallebi',
        'bütçeye uygun',
        'çok kalorili',
        'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
        [
            'Portakal Suyu',
            '200gr Şeker',
            '100gr Yoğurt',
            '200g Krem Şanti',
            'Portakal Dilimleri',
        ]
    ),
    new Food(
        'm7',
        ['c7'],
        'Pankek',
        'bütçeye uygun',
        'az kalorili',
        'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
        [
            '3 yemek kaşığı un',
            '1 Tatlı Kaşığı Tuz',
            '1 Tatlı Kaşığı Şeker',
            '2 bardak süt',
            '2 Yumurta',
            '2 Yemek Kaşığı Yağ',
        ]
    ),
    new Food(
        'm8',
        ['c8'],
        'Tavuklu Hint Yemeği',
        'bütçeye uygun',
        'normal kalorili',
        'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
        [
            '6 Tavuk Butu',
            '2 Soğan',
            '4 Diş Sarımsak',
            '1 Çay Kaşığı Zerdeçal',
            '1 litre Süt',
            'Yarım Litre Krem Şanti',
            'Tuz',
        ]
    ),

    new Food(
        'm10',
        ['c2', 'c5'],
        'Çilekli Yaz Salatası',
        'bütçeye uygun',
        'az kalorili',
        'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
        ['Çilek', 'Domates', 'Salatalık', 'Tuz', 'Salata Sosu', 'Zeytin Yağı']
    ),
];
