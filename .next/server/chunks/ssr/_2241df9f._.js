module.exports = {

"[project]/src/components/ProductCard.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/components/ProductCard.jsx
__turbopack_context__.s({
    "default": (()=>ProductCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-ssr] (ecmascript)");
;
;
;
;
function ProductCard({ product }) {
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    // Ajusta a quantidade aumentando ou diminuindo uma unidade
    const handleIncrement = ()=>setQuantity((prev)=>prev + 1);
    const handleDecrement = ()=>setQuantity((prev)=>prev > 1 ? prev - 1 : 1);
    // Adiciona a quantidade selecionada ao carrinho
    const handleAddToCart = ()=>{
        let option;
        if (quantity === 6) option = "6";
        else if (quantity === 12) option = "12";
        else option = `${quantity}`;
        addToCart(product, option); // Envia produto e opção para o contexto
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 w-75",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-2/3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-800",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mb-2",
                                children: product.description || 'Descrição não disponível'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold text-yellow-600",
                                children: [
                                    "R$ ",
                                    product.price.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:w-1/3 md:ml-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: product.image,
                            alt: product.name,
                            width: 112,
                            height: 225,
                            className: "rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-t border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDecrement,
                                className: "bg-gray-200 py-1 px-2 rounded-l focus:outline-none",
                                children: "-"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: quantity
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleIncrement,
                                className: "bg-gray-200 py-1 px-2 rounded-r focus:outline-none",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.jsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQuantity((prev)=>prev + 6),
                                className: "bg-gray-200 py-1 px-2 rounded focus:outline-none",
                                children: "+ 6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setQuantity((prev)=>prev + 12),
                                className: "bg-gray-200 py-1 px-2 rounded focus:outline-none",
                                children: "+ 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProductCard.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProductCard.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAddToCart,
                    className: "w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded",
                    children: [
                        "Adicionar (",
                        quantity,
                        ") · R$ ",
                        (product.price * quantity).toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ProductCard.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/data/products_cervejas.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Cerveja Skol Lager 600ml\",\"description\":\"Cerveja pilsen leve e refrescante.\",\"price\":5.99,\"image\":\"/public/images/cervejas/LataSKOL473ml.png\",\"type\":\"lager\",\"category\":\"cervejas\"},{\"id\":2,\"name\":\"Cerveja Eisenbrau Pilsen 600ml\",\"description\":\"Cerveja premium sabor clássico.\",\"price\":7.49,\"image\":\"/public/images/cervejas/CervEISEN600ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":3,\"name\":\"Cerveja Original Pilsen 600ml\",\"description\":\"Cerveja amarga e equilibrada.\",\"price\":6.99,\"image\":\"/public/images/cervejas/CervORIG600ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":4,\"name\":\"Cerveja Bohemia Pilsen 600ml\",\"description\":\"Cerveja tradicional com sabor marcante.\",\"price\":6.49,\"image\":\"/public/images/cervejas/CervBOH600ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":5,\"name\":\"Cerveja Itaipava Pilsen 600ml\",\"description\":\"Cerveja sabor suave e equilibrada.\",\"price\":6.29,\"image\":\"/public/images/cervejas/CervITAI600ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":6,\"name\":\"Cerveja Kaiser Pilsen 473ml\",\"description\":\"Cerveja leve e refrescante.\",\"price\":5.89,\"image\":\"/public/images/cervejas/LataKAIS473ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":7,\"name\":\"Cerveja Eisenbrau 473ml\",\"description\":\"Cerveja premium em lata.\",\"price\":6.99,\"image\":\"/public/images/cervejas/LataEISEN473.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":8,\"name\":\"Cerveja Lokal Pilsen 473ml\",\"description\":\"Cerveja alemã sabor intensa.\",\"price\":5.99,\"image\":\"/public/images/cervejas/LataLOK473ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":9,\"name\":\"Cerveja Spaten Pilsen 473ml\",\"description\":\"Cerveja tradicional alemã.\",\"price\":6.79,\"image\":\"/public/images/cervejas/LataSPAT473ml.png\",\"type\":\"pilsen\",\"category\":\"cervejas\"},{\"id\":10,\"name\":\"IPA - 00 IPA 350ml\",\"description\":\"Cerveja artesanal tipo IPA, sabor forte e amargo.\",\"price\":8.99,\"image\":\"/public/images/cervejas/00ipa.jpg\",\"type\":\"ipa\",\"category\":\"cervejas\"}]"));}}),
"[project]/src/data/products_refrigerantes.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Refrigerante Coca-Cola 350ml\",\"description\":\"O clássico refrigerante sabor cola.\",\"price\":4.99,\"image\":\"/public/images/refrigerantes/RefriCOCA350ml.png\",\"type\":\"cola\",\"category\":\"refrigerantes\"},{\"id\":2,\"name\":\"Refrigerante Fanta Laranja 350ml\",\"description\":\"Sabor laranja refrescante e delicioso.\",\"price\":4.79,\"image\":\"/public/images/refrigerantes/RefriFANTA350ml.png\",\"type\":\"laranja\",\"category\":\"refrigerantes\"},{\"id\":3,\"name\":\"Refrigerante Guaraná Antarctica 350ml\",\"description\":\"O sabor do Brasil em cada gole.\",\"price\":4.69,\"image\":\"/public/images/refrigerantes/RefriGUAR350ml.png\",\"type\":\"guaraná\",\"category\":\"refrigerantes\"},{\"id\":4,\"name\":\"Refrigerante Pepsi 350ml\",\"description\":\"O clássico refrigerante sabor pepsi.\",\"price\":4.89,\"image\":\"/public/images/refrigerantes/RefriPEPS350ml.png\",\"type\":\"pepsi\",\"category\":\"refrigerantes\"},{\"id\":5,\"name\":\"Refrigerante Sprite 350ml\",\"description\":\"Sabor limão-limpa perfeito para o verão.\",\"price\":4.99,\"image\":\"/public/images/refrigerantes/RefriSPRI350ml.png\",\"type\":\"limão\",\"category\":\"refrigerantes\"},{\"id\":6,\"name\":\"Refrigerante Sukita Uva 350ml\",\"description\":\"Sabor uva suave e refrescante.\",\"price\":4.79,\"image\":\"/public/images/refrigerantes/RefriSUK350ml.png\",\"type\":\"uva\",\"category\":\"refrigerantes\"},{\"id\":7,\"name\":\"Refrigerante Coca-Cola 2L\",\"description\":\"Clássico refrigerante sabor cola em garrafa PET.\",\"price\":19.99,\"image\":\"/public/images/refrigerantes/PetCOCA2L.png\",\"type\":\"cola\",\"category\":\"refrigerantes\"},{\"id\":8,\"name\":\"Refrigerante Fanta Laranja 2L\",\"description\":\"Sabor laranja refrescante em embalagem de 2 litros.\",\"price\":18.99,\"image\":\"/public/images/refrigerantes/PetFANTA2L.png\",\"type\":\"laranja\",\"category\":\"refrigerantes\"},{\"id\":9,\"name\":\"Refrigerante Guaraná Antarctica 2L\",\"description\":\"Guaraná clássico em embalagem de 2 litros.\",\"price\":18.49,\"image\":\"/public/images/refrigerantes/PetGUARA2L.png\",\"type\":\"guaraná\",\"category\":\"refrigerantes\"},{\"id\":10,\"name\":\"Refrigerante Pepsi 2L\",\"description\":\"Pepsi tradicional em garrafa de 2 litros.\",\"price\":19.49,\"image\":\"/public/images/refrigerantes/PetPEPS2L.png\",\"type\":\"pepsi\",\"category\":\"refrigerantes\"},{\"id\":11,\"name\":\"Refrigerante Sprite 2L\",\"description\":\"Sabor limão-limpa em embalagem de 2 litros.\",\"price\":19.99,\"image\":\"/public/images/refrigerantes/PetSPRIT2L.png\",\"type\":\"limão\",\"category\":\"refrigerantes\"},{\"id\":12,\"name\":\"Refrigerante Sukita Uva 2L\",\"description\":\"Sabor uva suave em embalagem de 2 litros.\",\"price\":18.99,\"image\":\"/public/images/refrigerantes/PetSUKITA2L.png\",\"type\":\"uva\",\"category\":\"refrigerantes\"}]"));}}),
"[project]/src/data/products_agua.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Água Indaia Natural 500ml\",\"description\":\"Água mineral natural sem gás.\",\"price\":2.99,\"image\":\"/public/images/agua/AguaIndaia500ml.png\",\"type\":\"natural\",\"category\":\"agua\"},{\"id\":2,\"name\":\"Água Prata 300ml\",\"description\":\"Água pura e refrescante.\",\"price\":1.99,\"image\":\"/public/images/agua/AguaPrata300ml.png\",\"type\":\"natural\",\"category\":\"agua\"},{\"id\":3,\"name\":\"Água Indaia Gasosa 500ml\",\"description\":\"Água gasosa saborizada.\",\"price\":3.49,\"image\":\"/public/images/agua/AguaIndaiaGas500ml.png\",\"type\":\"gasosa\",\"category\":\"agua\"}]"));}}),
"[project]/src/data/products_destilados.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Cachaca 51 1L\",\"description\":\"Cachaça premium com sabor intenso e longa duração.\",\"price\":24.99,\"image\":\"/public/images/destilados/cachaça51_1L.png\",\"type\":\"cachaça\",\"category\":\"destilados\"},{\"id\":2,\"name\":\"Absolut Regular 1L\",\"description\":\"Vodka sueca suave e versátil.\",\"price\":28.99,\"image\":\"/public/images/destilados/absolut_regular_1l.png\",\"type\":\"vodka\",\"category\":\"destilados\"},{\"id\":3,\"name\":\"Conhaque Hennessy Very Special 700ml\",\"description\":\"Conhaque francês famoso por seu sabor complexo e equilibrado.\",\"price\":59.99,\"image\":\"/public/images/destilados/Conh Francês Hennessy Very Special 700ml.png\",\"type\":\"conhaque\",\"category\":\"destilados\"},{\"id\":4,\"name\":\"Red Label 1L\",\"description\":\"Whisky escocês leve e suave, ideal para novatos.\",\"price\":34.99,\"image\":\"/public/images/destilados/redLabel _1L.png\",\"type\":\"whisky\",\"category\":\"destilados\"},{\"id\":5,\"name\":\"Tanqueray Old Tom Gin 700ml\",\"description\":\"Gin artesanal com sabores herbáceos e doces.\",\"price\":49.99,\"image\":\"/public/images/destilados/tanqueray-old-tom-gin.png\",\"type\":\"gin\",\"category\":\"destilados\"}]"));}}),
"[project]/src/data/products_energeticos.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Energético Monster Black 473ml\",\"description\":\"Energético sabor forte e energizante.\",\"price\":5.99,\"image\":\"/public/images/energetico/monsterBlcak473ml.png\",\"type\":\"energético\",\"category\":\"energeticos\"},{\"id\":2,\"name\":\"Energético Red Bull Original 250ml\",\"description\":\"O clássico energético mais conhecido.\",\"price\":6.49,\"image\":\"/public/images/energetico/redebullOriginal250ml.png\",\"type\":\"energético\",\"category\":\"energeticos\"},{\"id\":3,\"name\":\"Energético TNT Original 473ml\",\"description\":\"Energético refrescante e potente.\",\"price\":5.79,\"image\":\"/public/images/energetico/tntOrigina473ml.png\",\"type\":\"energético\",\"category\":\"energeticos\"},{\"id\":4,\"name\":\"Energético Monster Juice 473ml\",\"description\":\"Sabor frutado e energético potente.\",\"price\":5.99,\"image\":\"/public/images/energetico/MosterJuice473ml.png\",\"type\":\"energético\",\"category\":\"energeticos\"},{\"id\":5,\"name\":\"Energético Baly Abacaxi 473ml\",\"description\":\"Sabor abacaxi suave e energético.\",\"price\":5.69,\"image\":\"/public/images/energetico/Baly_Abacaxi473ml.png\",\"type\":\"energético\",\"category\":\"energeticos\"}]"));}}),
"[project]/src/data/products_outros.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Amendoim Japonês 100g\",\"description\":\"Snack crocante e saboroso.\",\"price\":3.99,\"image\":\"/public/images/outros/amendoimJapones100g.png\",\"type\":\"snack\",\"category\":\"outros\"}]"));}}),
"[project]/src/lib/utils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/productLoader.js
__turbopack_context__.s({
    "getCategoryProducts": (()=>getCategoryProducts)
});
const getCategoryProducts = (slug)=>{
    switch(slug){
        case 'cervejas':
            return __turbopack_context__.r("[project]/src/data/products_cervejas.json (json)").default;
        case 'refrigerantes':
            return __turbopack_context__.r("[project]/src/data/products_refrigerantes.json (json)").default;
        case 'agua':
            return __turbopack_context__.r("[project]/src/data/products_agua.json (json)").default;
        case 'destilados':
            return __turbopack_context__.r("[project]/src/data/products_destilados.json (json)").default;
        case 'energeticos':
            return __turbopack_context__.r("[project]/src/data/products_energeticos.json (json)").default;
        case 'outros':
            return __turbopack_context__.r("[project]/src/data/products_outros.json (json)").default;
        default:
            return [];
    }
};
}}),
"[project]/src/data/categories.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"slug\":\"cervejas\",\"name\":\"Cervejas\",\"description\":\"As melhores cervejas nacionais e importadas.\",\"image\":\"/images/categories/cervejas/cervejas.png\"},{\"slug\":\"refrigerantes\",\"name\":\"Refrigerantes\",\"description\":\"Sua bebida refrescante favorita.\",\"image\":\"/images/categories/refrigerantes/refrigerantes.png\"},{\"slug\":\"agua\",\"name\":\"Água\",\"description\":\"Águas naturais e com gás para sua hidratação.\",\"image\":\"/images/categories/agua/agua.png\"},{\"slug\":\"energetico\",\"name\":\"Energéticos\",\"description\":\"Mais energia para sua rotina ou balada.\",\"image\":\"/images/categories/energetico/energetico.png\"},{\"slug\":\"destilados\",\"name\":\"Destilados\",\"description\":\"As melhores opções de destilados.\",\"image\":\"/images/categories/destilados/destilados.png\"},{\"slug\":\"outros\",\"name\":\"Outros\",\"description\":\"Chocolates, cigarros e outros produtos.\",\"image\":\"/images/categories/outros/outros.png\"}]"));}}),
"[project]/src/app/categoria/[slug]/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/app/categoria/[slug]/page.js
__turbopack_context__.s({
    "default": (()=>CategoriaPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CategoriaPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    // Estados para armazenar dados da categoria e seus produtos
    const [categoryProducts, setCategoryProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Estado para filtro e ordenação
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('default');
    // Carregar dados assim que o slug for definido
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchCategoryData = async ()=>{
            try {
                const categories = __turbopack_context__.r("[project]/src/data/categories.json (json)").default;
                const category = categories.find((c)=>c.slug === slug);
                setCategory(category);
                const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCategoryProducts"])(slug); // Carrega apenas produtos da categoria
                setCategoryProducts(products);
            } catch (error) {
                console.error('Erro ao carregar dados da categoria:', error);
            }
        };
        fetchCategoryData();
    }, [
        slug
    ]);
    // Função para aplicar filtros
    const filteredProducts = categoryProducts.filter((product)=>{
        if (filter === 'all') return true;
        return product.type?.toLowerCase() === filter.toLowerCase();
    });
    // Função para ordenar produtos
    const sortedProducts = [
        ...filteredProducts
    ].sort((a, b)=>{
        if (sort === 'price_asc') return a.price - b.price;
        if (sort === 'price_desc') return b.price - a.price;
        return 0; // padrão
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-4 bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-gray-800 mb-2",
                        children: category?.name || 'Categoria'
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: category?.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    category?.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: category.image,
                            alt: category.name,
                            width: 600,
                            height: 300,
                            className: "rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/categoria/[slug]/page.js",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "filter",
                                children: "Filtrar por tipo:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "filter",
                                value: filter,
                                onChange: (e)=>setFilter(e.target.value),
                                className: "border border-gray-300 rounded px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Todos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "cachaça",
                                        children: "Cachaça"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "vodka",
                                        children: "Vodka"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "conhaque",
                                        children: "Conhaque"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "whisky",
                                        children: "Whisky"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "gin",
                                        children: "Gin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sort",
                                children: "Ordenar por:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "sort",
                                value: sort,
                                onChange: (e)=>setSort(e.target.value),
                                className: "border border-gray-300 rounded px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "default",
                                        children: "Padrão"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price_asc",
                                        children: "Preço: Menor → Maior"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price_desc",
                                        children: "Preço: Maior → Menor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                children: sortedProducts.length > 0 ? sortedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 col-span-full text-center",
                    children: "Nenhum produto encontrado nesta categoria."
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition",
                    children: "Voltar ao Início"
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/categoria/[slug]/page.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_2241df9f._.js.map