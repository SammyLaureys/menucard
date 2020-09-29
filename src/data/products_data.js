export const PRODUCTS_DATA = [
    {
        name: "drank",
        subcategories: [
            {
                name: "fris",
                products: [
                    {id: "cola",name: "cola", price: 2},
                    {id: "water", name: "water", price: 2},
                ],
            },
            {
                name: "alcohol",
                products: [
                    {id: "bier klein",name: "bier", price: 2, size: 25},
                    {id: "bier groot",name: "bier", price: 2.4, size: 33},
                    {id: "wijn",name: "wijn", price: 4}
                ],
            }]
    },
    {
        name: "eten",
        note: "voor de snelle honger",
        subcategories: [
            {
                name: "hapjes",
                note: "deze kan je altijd bestellen",
                products: [
                    {id: "chips",name: "chips", price: 1, note: "paprika of zout"},
                    {id: "olijven",name: "olijven", price: 2, note: "mix zwart en groen"},
                    {id: "kaas",name: "kaas", price: 4, note: "mix jonge en oude blokjes"},
                    {id: "salami",name: "salami", price: 3},
                ]
            },
            {
                name: "warm",
                note: "niet na 22:00",
                products: [
                    {id: "hamburger",name: "hamburger", price: 4},
                    {id: "pizza",name: "pizza", price: 4}
                ]
            }
        ]
    }
];