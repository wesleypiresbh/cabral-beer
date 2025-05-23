(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/products.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Cerveja Pilsen\",\"price\":8.9,\"description\":\"Cerveja pilsen tradicional, leve e refrescante.\",\"category\":\"cervejas\",\"image\":\"/images/cervejas/pilsen.jpg\"},{\"id\":2,\"name\":\"Cerveja IPA\",\"price\":9.5,\"description\":\"Cerveja amarga e saborosa, ideal para apreciadores.\",\"category\":\"cervejas\",\"image\":\"/images/cervejas/ipa.jpg\"},{\"id\":3,\"name\":\"Refrigerante Cola Zero\",\"price\":5.5,\"description\":\"Refrescante sem açúcar.\",\"category\":\"refrigerantes\",\"image\":\"/images/refrigerantes/cola-zero.jpg\"},{\"id\":4,\"name\":\"Água Mineral Natural\",\"price\":2.0,\"description\":\"Água mineral natural em embalagem PET.\",\"category\":\"agua\",\"image\":\"/images/agua/mineral.jpg\"},{\"id\":5,\"name\":\"Energético Citrus\",\"price\":7.9,\"description\":\"Energético sabor cítrico, com cafeína e taurina.\",\"category\":\"energetico\",\"image\":\"/images/energetico/citrus.jpg\"},{\"id\":6,\"name\":\"Whisky Escocês\",\"price\":120.0,\"description\":\"Whisky escocês premium, perfeito para degustação.\",\"category\":\"destilados\",\"image\":\"/images/destilados/whisky.jpg\"}]"));}}),
"[project]/src/app/produto/[id]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/app/produto/[id]/page.js
__turbopack_context__.s({
    "default": (()=>ProdutoPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/products.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.js [app-client] (ecmascript)"); // ← Certifique-se de que seja o caminho correto
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProdutoPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const id = parseInt(params.id);
    const { addItemToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])(); // Função do contexto
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__["default"].find((p)=>p.id === id);
    if (!product) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Produto não encontrado."
        }, void 0, false, {
            fileName: "[project]/src/app/produto/[id]/page.js",
            lineNumber: 16,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-6 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: product.name
                }, void 0, false, {
                    fileName: "[project]/src/app/produto/[id]/page.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-64 mb-4 flex items-center justify-center overflow-hidden rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.image || '/images/default-product.jpg',
                        alt: product.name,
                        className: "object-cover w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/produto/[id]/page.js",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/produto/[id]/page.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 mb-4",
                    children: product.description
                }, void 0, false, {
                    fileName: "[project]/src/app/produto/[id]/page.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-green-600 text-xl font-bold mb-4",
                    children: [
                        "R$ ",
                        product.price.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/produto/[id]/page.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>addItemToCart(product),
                    className: "bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded transition duration-200",
                    children: "Adicionar ao Carrinho"
                }, void 0, false, {
                    fileName: "[project]/src/app/produto/[id]/page.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/produto/[id]/page.js",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/produto/[id]/page.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(ProdutoPage, "8e+bQ2piTLeIymXviTmBOJy78sI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = ProdutoPage;
var _c;
__turbopack_context__.k.register(_c, "ProdutoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_14572425._.js.map