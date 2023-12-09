import productsReducer from '../../store/reducers';
import * as actions from '../../store/actions';
import sendRequest from "../../helpers/sendRequest";

jest.mock("../../helpers/sendRequest");

describe('Products Reducer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle actionGetProducts', () => {
    const initialState = {
      products: [],
    };

    const productsData = [
      {
        "name": "Men's Casual T-Shirt",
        "brand": "Jhanvi",
        "price": 20.99,
        "image": "./src/assets/img/categories-for-men/03-plain-t-shirt.png",
        "article": "SKU123451",
        "color": "Black"
      },
      {
        "name": "Women's Skinny Jeans",
        "brand": "AS",
        "price": 34.99,
        "image": "./src/assets/img/categories-for-women/01-hoodies-sweetshirt.png",
        "article": "SKU678902",
        "color": "Blue"
      },
      {
        "name": "Unisex Hooded Sweatshirt",
        "brand": "MM",
        "price": 29.99,
        "image": "./src/assets/img/categories-for-women/02-coats-parkas.png",
        "article": "SKU135793",
        "color": "Gray"
      },
      {
        "name": "Women's Floral Dress",
        "brand": "Nike",
        "price": 45.99,
        "image": "./src/assets/img/categories-for-men/05-hoodies-sweetshirt.png",
        "article": "SKU246804",
        "color": "Red"
      },
      {
        "name": "Men's Formal Suit",
        "brand": "Tommy",
        "price": 149.99,
        "image": "./src/assets/img/categories-for-men/01-shirts.png",
        "article": "SKU357915",
        "color": "Navy"
      },
      {
        "name": "Women's Winter Coat",
        "brand": "Puma",
        "price": 79.99,
        "image": "./src/assets/img/categories-for-women/04-boxers.png",
        "article": "SKU468026",
        "color": "Black"
      },
      {
        "name": "Men's Athletic Shorts",
        "brand": "Nike",
        "price": 16.99,
        "image": "./src/assets/img/categories-for-women/03-tees-t-shirt.png",
        "article": "SKU579137",
        "color": "Gray"
      },
      {
        "name": "Women's Ankle Boots",
        "brand": "Jhanvi",
        "price": 55.99,
        "image": "./src/assets/img/categories-for-men/07-activewear.png",
        "article": "SKU680248",
        "color": "Brown"
      },
      {
        "name": "Unisex Beanie Hat",
        "brand": "MM",
        "price": 12.99,
        "image": "./src/assets/img/categories-for-women/04-boxers.png",
        "article": "SKU791359",
        "color": "Navy"
      },
      {
        "name": "Men's Plaid Shirt",
        "brand": "AS",
        "price": 24.99,
        "image": "./src/assets/img/categories-for-men/08-boxers.png",
        "article": "SKU802460",
        "color": "Green"
      },
      {
        "name": "Women's Leggings",
        "brand": "Tommy",
        "price": 18.99,
        "image": "./src/assets/img/categories-for-men/02-printed-t-shirts.png",
        "article": "SKU913511",
        "color": "Black"
      },
      {
        "name": "Women's Floral Dress",
        "brand": "Puma",
        "price": 45.99,
        "image": "./src/assets/img/categories-for-men/04-polo-t-shirt.png",
        "article": "SKU246812",
        "color": "Red"
      }
    ];

    const nextState = productsReducer(initialState, actions.actionGetProducts(productsData));

    expect(nextState.products).toEqual(productsData);
  });

  it('should handle actionGetCategoriesForMen', () => {
    const initialState = {
      categoriesForMen: [],
    };

    const categoriesForMenData = [
      {
        "name": "Shirts",
        "image": "./src/assets/img/categories-for-men/01-shirts.png"
      },
      {
        "name": "Printed T-Shirts",
        "image": "./src/assets/img/categories-for-men/02-printed-t-shirts.png"
      },
      {
        "name": "Plain T-Shirt",
        "image": "./src/assets/img/categories-for-men/03-plain-t-shirt.png"
      },
      {
        "name": "Polo T-Shirt",
        "image": "./src/assets/img/categories-for-men/04-polo-t-shirt.png"
      },
      {
        "name": "Hoodies & Sweetshirt",
        "image": "./src/assets/img/categories-for-men/05-hoodies-sweetshirt.png"
      },
      {
        "name": "Jeans",
        "image": "./src/assets/img/categories-for-men/06-jeans.png"
      },
      {
        "name": "Activewear",
        "image": "./src/assets/img/categories-for-men/07-activewear.png"
      },
      {
        "name": "Boxers",
        "image": "./src/assets/img/categories-for-men/08-boxers.png"
      }
    ];

    const nextState = productsReducer(initialState, actions.actionGetCategoriesForMen(categoriesForMenData));

    expect(nextState.categoriesForMen).toEqual(categoriesForMenData);
  });

  it('should handle actionGetCategoriesForWoman', () => {
    const initialState = {
      categoriesForWomen: [],
    };

    const categoriesForWomenData = [
      {
        "name": "Hoodies & Sweetshirt",
        "image": "./src/assets/img/categories-for-women/01-hoodies-sweetshirt.png"
      },
      {
        "name": "Coats & Parkas",
        "image": "./src/assets/img/categories-for-women/02-coats-parkas.png"
      },
      {
        "name": "Tees & T-Shirt",
        "image": "./src/assets/img/categories-for-women/03-tees-t-shirt.png"
      },
      {
        "name": "Polo T-Shirt",
        "image": "./src/assets/img/categories-for-women/04-boxers.png"
      }
    ];

    const nextState = productsReducer(initialState, actions.actionGetCategoriesForWoman(categoriesForWomenData));

    expect(nextState.categoriesForWomen).toEqual(categoriesForWomenData);
  });

  it('should handle unknown action', () => {
    const initialState = { };
    const nextState = productsReducer(initialState, { type: 'UNKNOWN_ACTION' });

    expect(nextState).toEqual(initialState);
  });

  it('should fetch products asynchronously', () => {
    const dispatchMock = jest.fn();
    sendRequest.mockResolvedValue([
      {
        "name": "Men's Casual T-Shirt",
        "brand": "Jhanvi",
        "price": 20.99,
        "image": "./src/assets/img/categories-for-men/03-plain-t-shirt.png",
        "article": "SKU123451",
        "color": "Black"
      }
    ]);

    return actions.actionFetchProducts()(dispatchMock).then(() => {
      expect(dispatchMock).toHaveBeenCalledWith(actions.actionGetProducts([
        {
          "name": "Men's Casual T-Shirt",
          "brand": "Jhanvi",
          "price": 20.99,
          "image": "./src/assets/img/categories-for-men/03-plain-t-shirt.png",
          "article": "SKU123451",
          "color": "Black"
        }
      ]));
    });
  });
});
