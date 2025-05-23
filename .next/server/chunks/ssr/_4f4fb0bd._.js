module.exports = {

"[project]/src/data/products.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":1,\"name\":\"Cerveja Pilsen\",\"price\":8.9,\"description\":\"Cerveja pilsen tradicional, leve e refrescante.\",\"category\":\"cervejas\",\"image\":\"/images/cervejas/pilsen.jpg\"},{\"id\":2,\"name\":\"Cerveja IPA\",\"price\":9.5,\"description\":\"Cerveja amarga e saborosa, ideal para apreciadores.\",\"category\":\"cervejas\",\"image\":\"/images/cervejas/ipa.jpg\"},{\"id\":3,\"name\":\"Refrigerante Cola Zero\",\"price\":5.5,\"description\":\"Refrescante sem açúcar.\",\"category\":\"refrigerantes\",\"image\":\"/images/refrigerantes/cola-zero.jpg\"},{\"id\":4,\"name\":\"Água Mineral Natural\",\"price\":2.0,\"description\":\"Água mineral natural em embalagem PET.\",\"category\":\"agua\",\"image\":\"/images/agua/mineral.jpg\"},{\"id\":5,\"name\":\"Energético Citrus\",\"price\":7.9,\"description\":\"Energético sabor cítrico, com cafeína e taurina.\",\"category\":\"energetico\",\"image\":\"/images/energetico/citrus.jpg\"},{\"id\":6,\"name\":\"Whisky Escocês\",\"price\":120.0,\"description\":\"Whisky escocês premium, perfeito para degustação.\",\"category\":\"destilados\",\"image\":\"/images/destilados/whisky.jpg\"}]"));}}),
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
    "default": (()=>CategoryPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/products.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/categories.json (json)");
'use client'; // <--- Adicione esta linha no topo do arquivo
;
;
;
;
;
function CategoryPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    // Encontrar a categoria pelo slug
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$json__$28$json$29$__["default"].find((cat)=>cat.slug === slug);
    if (!category) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen p-8 bg-gray-100 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold text-red-600",
                    children: "Categoria não encontrada"
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-gray-600",
                    children: "A categoria solicitada não existe."
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/categoria/[slug]/page.js",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    // Filtrar produtos pela categoria
    const filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__["default"].filter((product)=>product.category === category.slug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-8 bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-blue-600",
                        children: category.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-gray-600",
                        children: category.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                children: filteredProducts.length > 0 ? filteredProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/produto/${product.id}`,
                        className: "bg-white p-5 rounded shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-48 mb-4 flex items-center justify-center overflow-hidden rounded",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.image || '/images/default-product.jpg',
                                    alt: product.name,
                                    className: "object-cover w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: product.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-1 line-clamp-2",
                                children: product.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 font-medium text-green-600",
                                children: [
                                    "R$ ",
                                    product.price.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center col-span-full text-gray-600",
                    children: "Nenhum produto encontrado nesta categoria."
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/categoria/[slug]/page.js",
        lineNumber: 30,
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

//# sourceMappingURL=_4f4fb0bd._.js.map