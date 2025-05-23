(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/data/products.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"cerveja_brahma_600ml\",\"name\":\"Cerveja Brahma 600ml\",\"category\":\"cervejas\",\"price\":6.99,\"image\":\"/images/categories/cervejas/CervBRH600ml.png\",\"options\":[\"1 unidade\",\"12 unidades\",\"24 unidades\"]},{\"id\":\"cerveja_skol_600ml\",\"name\":\"Cerveja Skol 600ml\",\"category\":\"cervejas\",\"price\":5.99,\"image\":\"/images/categories/cervejas/CervSKOL600ml.png\",\"options\":[\"1 unidade\",\"12 unidades\",\"24 unidades\"]},{\"id\":\"cerveja_eisenbahn_600ml\",\"name\":\"Cerveja Eisenbahn 600ml\",\"category\":\"cervejas\",\"price\":7.49,\"image\":\"/images/categories/cervejas/CervEISEN600ml.png\",\"options\":[\"1 unidade\",\"12 unidades\",\"24 unidades\"]},{\"id\":\"cerveja_original_600ml\",\"name\":\"Cerveja Original 600ml\",\"category\":\"cervejas\",\"price\":8.99,\"image\":\"/images/categories/cervejas/CervORIG600ml.png\",\"options\":[\"1 unidade\",\"12 unidades\",\"24 unidades\"]},{\"id\":\"cerveja_itaipava_600ml\",\"name\":\"Cerveja Itaipava 600ml\",\"category\":\"cervejas\",\"price\":4.99,\"image\":\"/images/categories/cervejas/CervITAI600ml.png\",\"options\":[\"1 unidade\",\"12 unidades\",\"24 unidades\"]},{\"id\":\"cerveja_boh_600ml\",\"name\":\"Cerveja Bohêmia 600ml\",\"category\":\"cervejas\",\"price\":7.99,\"image\":\"/images/categories/cervejas/CervBOH600ml.png\",\"options\":[\"1 unidade\",\"12 unidades\",\"24 unidades\"]},{\"id\":4,\"name\":\"Água Prata 300ml\",\"category\":\"Água\",\"price\":2.5,\"image\":\"/images/agua/AguaPrata300ml.png\",\"variations\":[{\"label\":\"1 Unidade\",\"multiplier\":1}]},{\"id\":5,\"name\":\"Água Indaiá 500ml\",\"category\":\"Água\",\"price\":2.8,\"image\":\"/images/agua/AguaIndaia500ml.png\",\"variations\":[{\"label\":\"1 Unidade\",\"multiplier\":1}]},{\"id\":6,\"name\":\"Refrigerante Coca-Cola 2L\",\"category\":\"Refrigerantes\",\"price\":7.0,\"image\":\"/images/refrigerantes/PetCOCA2L.png\",\"variations\":[{\"label\":\"1 Unidade\",\"multiplier\":1}]}]"));}}),
"[project]/src/data/categories.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"slug\":\"cervejas\",\"name\":\"Cervejas\",\"description\":\"As melhores cervejas nacionais e importadas.\",\"image\":\"/images/categories/cervejas/cervejas.png\"},{\"slug\":\"refrigerantes\",\"name\":\"Refrigerantes\",\"description\":\"Sua bebida refrescante favorita.\",\"image\":\"/images/categories/refrigerantes/refrigerantes.png\"},{\"slug\":\"agua\",\"name\":\"Água\",\"description\":\"Águas naturais e com gás para sua hidratação.\",\"image\":\"/images/categories/agua/agua.png\"},{\"slug\":\"energetico\",\"name\":\"Energéticos\",\"description\":\"Mais energia para sua rotina ou balada.\",\"image\":\"/images/categories/energetico/energetico.png\"},{\"slug\":\"destilados\",\"name\":\"Destilados\",\"description\":\"As melhores opções de destilados.\",\"image\":\"/images/categories/destilados/destilados.png\"},{\"slug\":\"outros\",\"name\":\"Outros\",\"description\":\"Chocolates, cigarros e outros produtos.\",\"image\":\"/images/categories/outros/outros.png\"}]"));}}),
"[project]/src/components/ProductCard.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/components/ProductCard.js'

Unterminated regexp literal`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),
"[project]/src/app/categoria/[slug]/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/app/categoria/[slug]/page.js
__turbopack_context__.s({
    "default": (()=>CategoriaPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/products.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/categories.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function CategoriaPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = params.slug;
    // Encontrar a categoria e seus produtos
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$categories$2e$json__$28$json$29$__["default"].find((c)=>c.slug === slug);
    const categoryProducts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$products$2e$json__$28$json$29$__["default"].filter((p)=>p.category === slug);
    // Estados para filtro e ordenação
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [sort, setSort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-4 bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-gray-800 mb-2",
                        children: category?.name || 'Categoria'
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-gray-600",
                        children: category?.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    category?.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: category.image,
                            alt: category.name,
                            width: 600,
                            height: 300,
                            layout: "responsive",
                            objectFit: "cover",
                            className: "rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/src/app/categoria/[slug]/page.js",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "filter",
                                children: "Filtrar por tipo:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "filter",
                                value: filter,
                                onChange: (e)=>setFilter(e.target.value),
                                className: "border border-gray-300 rounded px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "Todos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "lager",
                                        children: "Lager"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ipa",
                                        children: "IPA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "stout",
                                        children: "Stout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ale",
                                        children: "Ale"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sort",
                                children: "Ordenar por:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "sort",
                                value: sort,
                                onChange: (e)=>setSort(e.target.value),
                                className: "border border-gray-300 rounded px-2 py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "default",
                                        children: "Padrão"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price_asc",
                                        children: "Preço: Menor → Maior"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "price_desc",
                                        children: "Preço: Maior → Menor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/categoria/[slug]/page.js",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                children: sortedProducts.length > 0 ? sortedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        product: product
                    }, product.id, false, {
                        fileName: "[project]/src/app/categoria/[slug]/page.js",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 col-span-full text-center",
                    children: "Nenhum produto encontrado nesta categoria."
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition",
                    children: "Voltar ao Início"
                }, void 0, false, {
                    fileName: "[project]/src/app/categoria/[slug]/page.js",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/categoria/[slug]/page.js",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/categoria/[slug]/page.js",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(CategoriaPage, "d30BeUqz+hC13DlaOsA1V5+1r58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = CategoriaPage;
var _c;
__turbopack_context__.k.register(_c, "CategoriaPage");
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

//# sourceMappingURL=_f91a0300._.js.map