
/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */ ! function(d, c) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = d.document ? c(d, !0) : function(b) {
        if (!b.document) {
            throw new Error("jQuery requires a window with a document")
        }
        return c(b)
    } : c(d)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "2.2.0",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) {
                for (b in a) {
                    c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d))
                }
            }
        }
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) {
                return !1
            }
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            } else {
                for (d in a) {
                    if (b.call(a[d], d, a[d]) === !1) {
                        break
                    }
                }
            }
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d]
            }
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f])
            }
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a)) {
                for (d = a.length; d > g; g++) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            } else {
                for (g in a) {
                    e = b(a[g], g, c), null != e && h.push(e)
                }
            }
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    if (a[c] === b) {
                        return c
                    }
                }
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]) {}
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) {
                return d
            }
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) {
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) {
                                return d
                            }
                            if (j.id === f) {
                                return d.push(j), d
                            }
                        } else {
                            if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) {
                                return d.push(j), d
                            }
                        }
                    } else {
                        if (o[2]) {
                            return H.apply(d, b.getElementsByTagName(a)), d
                        }
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) {
                            return H.apply(d, b.getElementsByClassName(f)), d
                        }
                    }
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) {
                        w = b, s = a
                    } else {
                        if ("object" !== b.nodeName.toLowerCase()) {
                            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                            while (h--) {
                                r[h] = l + " " + qa(r[h])
                            }
                            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                        }
                    }
                    if (s) {
                        try {
                            return H.apply(d, w.querySelectorAll(s)), d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) {
                d.attrHandle[c[e]] = b
            }
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) {
                return d
            }
            if (c) {
                while (c = c.nextSibling) {
                    if (c === b) {
                        return -1
                    }
                }
            }
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    }
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c)
                    }
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        if (b === a) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = b ? function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) {
                    return l = !0, 0
                }
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) {
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0
                }
                if (e === f) {
                    return ka(a, b)
                }
                c = a;
                while (c = c.parentNode) {
                    g.unshift(c)
                }
                c = b;
                while (c = c.parentNode) {
                    h.unshift(c)
                }
                while (g[d] === h[d]) {
                    d++
                }
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) {
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
                        return d
                    }
                } catch (e) {}
            }
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f))
                }
                while (e--) {
                    a.splice(d[e], 1)
                }
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) {
                        return a.textContent
                    }
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a)
                    }
                } else {
                    if (3 === f || 4 === f) {
                        return a.nodeValue
                    }
                }
            } else {
                while (b = a[d++]) {
                    c += e(b)
                }
            }
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) {
                                            return !1
                                        }
                                    }
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                                }
                            } else {
                                if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) {
                                    while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                        if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) {
                                            break
                                        }
                                    }
                                }
                            }
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g])
                        }
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f))
                        }
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do {
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
                                    return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-")
                                }
                            } while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) {
                            return !1
                        }
                    }
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c)
                    }
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d)
                    }
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d)
                    }
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) {
            d.pseudos[b] = la(b)
        }
        for (b in {
            submit: !0,
            reset: !0
        }) {
            d.pseudos[b] = ma(b)
        }

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) {
                return b ? 0 : k.slice(0)
            }
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) {
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length))
                }
                if (!c) {
                    break
                }
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value
            }
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        return a(b, c, f)
                    }
                }
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) {
                            return !0
                        }
                    }
                } else {
                    while (b = b[d]) {
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) {
                                return k[2] = h[2]
                            }
                            if (i[d] = k, k[2] = a(b, c, g)) {
                                return !0
                            }
                        }
                    }
                }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) {
                    if (!a[e](b, c, d)) {
                        return !1
                    }
                }
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                fa(a, b[d], c)
            }
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
            }
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) {
                                (l = r[k]) && j.push(q[k] = l)
                            }
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    }
                } else {
                    r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
                }
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) {
                    m = [ra(sa(m), c)]
                } else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) {
                                break
                            }
                        }
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || 0.1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++]) {
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) {
                            q(t, u, g, h)
                        }
                        if (f) {
                            if (r > 0) {
                                while (s--) {
                                    t[s] || u[s] || (u[s] = F.call(i))
                                }
                            }
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) {
                    f = wa(b[c]), f[u] ? d.push(f) : e.push(f)
                }
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) {
                        return e
                    }
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) {
                        break
                    }
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) {
                            return H.apply(e, f), e
                        }
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) {
                        break
                    }
                    d.push(a)
                }
            }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a)
            }
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) {
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            })
        }
        if (b.nodeType) {
            return n.grep(a, function(a) {
                return a === b !== c
            })
        }
        if ("string" == typeof b) {
            if (y.test(b)) {
                return n.filter(b, a, c)
            }
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) {
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++) {
                        if (n.contains(e[b], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (b = 0; c > b; b++) {
                n.find(a, e[b], d)
            }
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) {
                return this
            }
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) {
                    return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
                }
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) {
                        for (e in b) {
                            n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
                        }
                    }
                    return this
                }
                return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) {
                    if (n.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
                }
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) {
                        f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                    }
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) {
                            f.splice(c, 1), h >= c && h--
                        }
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1) {
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f
                }
            }
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b)
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) {
                    K(a, b, h, c[h], !0, f, g)
                }
            } else {
                if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(n(a), c)
                    })), b)) {
                    for (; i > h; h++) {
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
                    }
                }
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        L = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando]
        },
        cache: function(a) {
            if (!L(a)) {
                return {}
            }
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) {
                e[b] = c
            } else {
                for (d in b) {
                    e[d] = b[d]
                }
            }
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) {
                    this.register(a)
                } else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;
                    while (c--) {
                        delete f[d[c]]
                    }
                }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M,
        O = new M,
        P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Q = /[A-Z]/g;

    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) {
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                O.set(a, b, c)
            } else {
                c = void 0
            }
        }
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])))
                    }
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) {
                        return c
                    }
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) {
                        return c
                    }
                    if (c = R(f, d, void 0), void 0 !== c) {
                        return c
                    }
                } else {
                    d = n.camelCase(a), this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
                }
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        N.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) {
                c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h))
            }
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        U = ["Top", "Right", "Bottom", "Left"],
        V = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function W(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do {
                f = f || ".5", k /= f, n.style(a, b, k + j)
            } while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var X = /^(?:checkbox|radio)$/i,
        Y = /<([\w:-]+)/,
        Z = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
        }
    }
    var ba = /<|&#?\w+;/;

    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
            if (f = a[o], f || 0 === f) {
                if ("object" === n.type(f)) {
                    n.merge(m, f.nodeType ? [f] : f)
                } else {
                    if (ba.test(f)) {
                        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];
                        while (k--) {
                            g = g.lastChild
                        }
                        n.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
                    } else {
                        m.push(b.createTextNode(f))
                    }
                }
            }
        }
        l.textContent = "", o = 0;
        while (f = m[o++]) {
            if (d && n.inArray(f, d) > -1) {
                e && e.push(f)
            } else {
                if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
                    k = 0;
                    while (f = g[k++]) {
                        Z.test(f.type || "") && c.push(f)
                    }
                }
            }
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/,
        ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fa = /^([^.]*)(?:\.(.+)|)/;

    function ga() {
        return !0
    }

    function ha() {
        return !1
    }

    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) {
                ja(a, h, c, d, b[h], f)
            }
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) {
            e = ha
        } else {
            if (!e) {
                return this
            }
        }
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(G) || [""], j = b.length;
                while (j--) {
                    h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
                }
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--) {
                    if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) {
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k))
                        }
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else {
                        for (o in i) {
                            n.event.remove(a, o + b[j], c, d, !0)
                        }
                    }
                }
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (N.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                    }
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) {
                for (; i !== this; i = i.parentNode || this) {
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) {
                            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f)
                        }
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
                }
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) {
                return a
            }
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) {
                c = e[b], a[c] = g[c]
            }
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) {
                return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this
            }
            if ("object" == typeof a) {
                for (e in a) {
                    this.off(e, b, a[e])
                }
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        la = /<script|<style|<link/i,
        ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
        na = /^true\/(.*)/,
        oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        n.event.add(b, e, j[e][c])
                    }
                }
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i))
        }
    }

    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) {
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d)
            })
        }
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
                j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m)
            }
            if (i) {
                for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
                    j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
                }
            }
        }
        return a
    }

    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d))
        }
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) {
                for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
                    ta(f[d], g[d])
                }
            }
            if (b) {
                if (c) {
                    for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
                        sa(f[d], g[d])
                    }
                } else {
                    sa(a, h)
                }
            }
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events) {
                            for (d in b.events) {
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle)
                            }
                        }
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
            }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "")
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) {
                    return b.innerHTML
                }
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a)
                        }
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
                c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get())
            }
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };

    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function za(a) {
        var b = d,
            c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c
    }
    var Aa = /^margin/,
        Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ca = function(b) {
            var c = b.ownerDocument.defaultView;
            return c.opener || (c = a), c.getComputedStyle(b)
        },
        Da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) {
                g[f] = a.style[f], a.style[f] = b[f]
            }
            e = c.apply(a, d || []);
            for (f in b) {
                a.style[f] = g[f]
            }
            return e
        },
        Ea = d.documentElement;
    ! function() {
        var b, c, e, f, g = d.createElement("div"),
            h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);

            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(), b
                },
                boxSizingReliable: function() {
                    return null == c && i(), c
                },
                pixelMarginRight: function() {
                    return null == c && i(), e
                },
                reliableMarginLeft: function() {
                    return null == c && i(), f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b
                }
            })
        }
    }();

    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/,
        Ia = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ja = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ka = ["Webkit", "O", "Moz", "ms"],
        La = d.createElement("div").style;

    function Ma(a) {
        if (a in La) {
            return a
        }
        var b = a[0].toUpperCase() + a.slice(1),
            c = Ka.length;
        while (c--) {
            if (a = Ka[c] + b, a in La) {
                return a
            }
        }
    }

    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)))
        }
        return g
    }

    function Pa(b, c, e) {
        var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ca(b),
            i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) {
                return g
            }
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px"
    }

    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))))
        }
        for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"))
        }
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a),
                    g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g)
            }
        }
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0]
                }
                return e
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d)
                    }
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e)
    }
    n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return 0.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/,
        Va = /queueHooks$/;

    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }), Sa = n.now()
    }

    function Xa(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = U[d], e["margin" + c] = e["padding" + c] = a
        }
        return b && (e.opacity = e.width = a), e
    }

    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) {
                return d
            }
        }
    }

    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && V(a),
            q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b) {
            if (e = b[d], Ua.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) {
                        continue
                    }
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else {
                j = void 0
            }
        }
        if (n.isEmptyObject(m)) {
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j)
        } else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) {
                    n.style(a, b, m[b])
                }
            });
            for (d in m) {
                g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
    }

    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e)
                }
            } else {
                b[d] = e
            }
        }
    }

    function _a(a, b, c) {
        var d, e, f = 0,
            g = _a.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) {
                    return !1
                }
                for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                    j.tweens[g].run(f)
                }
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Sa || Wa(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) {
                        return this
                    }
                    for (e = !0; d > c; c++) {
                        j.tweens[c].run(1)
                    }
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++) {
            if (d = _a.prefilters[f].call(j, a, k, j.opts)) {
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d
            }
        }
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c), c
            }]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b)
            }
        },
        prefilters: [Za],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = _a(this, n.extend({}, a), f);
                    (e || N.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = N.get(this);
                if (e) {
                    g[e] && g[e].stop && d(g[e])
                } else {
                    for (e in g) {
                        g[e] && g[e].stop && Va.test(e) && d(g[e])
                    }
                }
                for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
                }(b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = N.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
                }
                for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this)
                }
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0,
            c = n.timers;
        for (Sa = n.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1)
        }
        c.length || n.fx.stop(), Sa = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        a.clearInterval(Ta), Ta = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
            }
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType) {
                while (c = f[e++]) {
                    d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                }
            }
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i,
        db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) {
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;

    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                })
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ")
                        }
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) {
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++]) {
                    if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ")
                            }
                        }
                        h = n.trim(d), e !== h && c.setAttribute("class", h)
                    }
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    }
                } else {
                    (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
                }
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) {
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) {
                    return !0
                }
            }
            return !1
        }
    });
    var gb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) {
                return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })
            }
            if (e) {
                return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    return n.trim(a.value)
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) {
                                return b
                            }
                            g.push(b)
                        }
                    }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) {
                        d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0)
                    }
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var hb = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
                        p.push(h), i = h
                    }
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault())
                }
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b))
            }
        }
    });
    var ib = a.location,
        jb = n.now(),
        kb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) {
            return null
        }
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = {},
        sb = {},
        tb = "*/".concat("*"),
        ub = d.createElement("a");
    ub.href = ib.href;

    function vb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) {
                while (d = f[e++]) {
                    "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                }
            }
        }
    }

    function wb(a, b, c, d) {
        var e = {},
            f = a === sb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function xb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
        }
        return d && n.extend(!0, a, d), a
    }

    function yb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"))
        }
        if (d) {
            for (e in h) {
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
            }
        }
        if (i[0] in c) {
            f = i[0]
        } else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function zb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1]) {
            for (g in a.converters) {
                j[g.toLowerCase()] = a.converters[g]
            }
        }
        f = k.shift();
        while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
                if ("*" === f) {
                    f = i
                } else {
                    if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f], !g) {
                            for (e in j) {
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                        if (g !== !0) {
                            if (g && a["throws"]) {
                                b = g(b)
                            } else {
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ib.href,
            type: "GET",
            isLocal: ob.test(ib.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a)
        },
        ajaxPrefilter: vb(rb),
        ajaxTransport: vb(sb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c),
                o = m.context || m,
                p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
                q = n.Deferred(),
                r = n.Callbacks("once memory"),
                s = m.statusCode || {},
                t = {},
                u = {},
                v = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === v) {
                            if (!h) {
                                h = {};
                                while (b = nb.exec(g)) {
                                    h[b[1].toLowerCase()] = b[2]
                                }
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === v ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return v || (a = u[c] = u[c] || a, t[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return v || (m.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a) {
                            if (2 > v) {
                                for (b in a) {
                                    s[b] = [s[b], a[b]]
                                }
                            } else {
                                x.always(a[x.status])
                            }
                        }
                        return this
                    },
                    abort: function(a) {
                        var b = a || w;
                        return e && e.abort(b), z(0, b), this
                    }
                };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) {
                return x
            }
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) {
                x.setRequestHeader(l, m.headers[l])
            }
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) {
                return x.abort()
            }
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                x[l](m[l])
            }
            if (e = wb(sb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) {
                    return x
                }
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1, e.send(t, z)
                } catch (y) {
                    if (!(2 > v)) {
                        throw y
                    }
                    z(-1, y)
                }
            } else {
                z(-1, "No Transport")
            }

            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) {
                    a = a.firstElementChild
                }
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    };
    var Ab = /%20/g,
        Bb = /\[\]$/,
        Cb = /\r?\n/g,
        Db = /^(?:submit|button|image|reset|file)$/i,
        Eb = /^(?:input|select|textarea|keygen)/i;

    function Fb(a, b, c, d) {
        var e;
        if (n.isArray(b)) {
            n.each(b, function(b, e) {
                c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            })
        } else {
            if (c || "object" !== n.type(b)) {
                d(a, b)
            } else {
                for (e in b) {
                    Fb(a + "[" + e + "]", b[e], c, d)
                }
            }
        }
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) {
            n.each(a, function() {
                e(this.name, this.value)
            })
        } else {
            for (c in a) {
                Fb(c, a[c], b, e)
            }
        }
        return d.join("&").replace(Ab, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Cb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Cb, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Gb = {
            0: 200,
            1223: 204
        },
        Hb = n.ajaxSettings.xhr();
    l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Hb && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) {
                    for (g in b.xhrFields) {
                        h[g] = b.xhrFields[g]
                    }
                }
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) {
                    h.setRequestHeader(g, e[g])
                }
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) {
                        throw i
                    }
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Ib = [],
        Jb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Ib.pop() || n.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), l.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) {
            return null
        }
        "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var Kb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Kb) {
            return Kb.apply(this, arguments)
        }
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
                g.each(function() {
                    c.apply(g, f || [a.responseText, b, a])
                })
            }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Lb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) {
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                })
            }
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) {
                return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position")) {
                    a = a.offsetParent
                }
                return a || Ea
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Lb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Mb = a.jQuery,
        Nb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n
    }, b || (a.jQuery = a.$ = n), n
});
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function(g) {
    function k(c) {
        return a.raw ? c : encodeURIComponent(c)
    }

    function h(c) {
        return a.raw ? c : decodeURIComponent(c)
    }

    function d(c) {
        return k(a.json ? JSON.stringify(c) : String(c))
    }

    function f(c) {
        0 === c.indexOf('"') && (c = c.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return c = decodeURIComponent(c.replace(j, " ")), a.json ? JSON.parse(c) : c
        } catch (i) {}
    }

    function b(l, e) {
        var c = a.raw ? l : f(l);
        return g.isFunction(e) ? e(c) : c
    }
    var j = /\+/g,
        a = g.cookie = function(e, w, z) {
            if (arguments.length > 1 && !g.isFunction(w)) {
                if (z = g.extend({}, a.defaults, z), "number" == typeof z.expires) {
                    var u = z.expires,
                        A = z.expires = new Date;
                    A.setTime(+A + 86400000 * u)
                }
                return document.cookie = [k(e), "=", d(w), z.expires ? "; expires=" + z.expires.toUTCString() : "", z.path ? "; path=" + z.path : "", z.domain ? "; domain=" + z.domain : "", z.secure ? "; secure" : ""].join("")
            }
            for (var v = e ? void 0 : {}, i = document.cookie ? document.cookie.split("; ") : [], n = 0, y = i.length; y > n; n++) {
                var o = i[n].split("="),
                    t = h(o.shift()),
                    q = o.join("=");
                if (e && e === t) {
                    v = b(q, w);
                    break
                }
                e || void 0 === (q = b(q)) || (v[t] = q)
            }
            return v
        };
    a.defaults = {}, g.removeCookie = function(e, c) {
        return void 0 === g.cookie(e) ? !1 : (g.cookie(e, "", g.extend({}, c, {
            expires: -1
        })), !g.cookie(e))
    }
});
(function(a) {
    a.fn.html5audio = function(ac) {
        var dS = false;
        var dl = this;
        var dD = a("body");
        var e0 = a(window);
        var aE = a(document);
        var dz = a.inArray(window.location.protocol, ["http:", "https:"]) ? "http:" : window.location.protocol;
        var cC;
        var bL = 150;
        var a6 = false;
        var cr = navigator.userAgent;
        var y;
        if (cr.indexOf("iPhone") > -1 || cr.indexOf("iPod") > -1 || cr.indexOf("iPad") > -1) {
            a6 = true;
            if (cr.indexOf("iPhone") > -1) {
                y = "iPhone"
            } else {
                if (cr.indexOf("iPod") > -1) {
                    y = "iPod"
                } else {
                    if (cr.indexOf("iPad") > -1) {
                        y = "iPad"
                    }
                }
            }
        }
        var dk = navigator.userAgent.toLowerCase().indexOf("safari/") > -1;
        var aO = document.createElement("audio"),
            dt, a8, c1 = false;
        if (aO.canPlayType) {
            c1 = true;
            dt = !!aO.canPlayType && "" != aO.canPlayType("audio/mpeg");
            a8 = !!aO.canPlayType && "" != aO.canPlayType('audio/ogg; codecs="vorbis"')
        } else {
            dt = true;
            a8 = false
        }
        var cZ = hap_source_path + ac.buttonsUrl.prev;
        var bE = hap_source_path + ac.buttonsUrl.prevOn;
        var eE = hap_source_path + ac.buttonsUrl.next;
        var aI = hap_source_path + ac.buttonsUrl.nextOn;
        var dC = hap_source_path + ac.buttonsUrl.play;
        var bs = hap_source_path + ac.buttonsUrl.playOn;
        var eq = hap_source_path + ac.buttonsUrl.pause;
        var cQ = hap_source_path + ac.buttonsUrl.pauseOn;
        var c4 = hap_source_path + ac.buttonsUrl.loop;
        var eR = hap_source_path + ac.buttonsUrl.loopOn;
        var ct = hap_source_path + ac.buttonsUrl.volume;
        var cE = hap_source_path + ac.buttonsUrl.volumeOn;
        var dY = hap_source_path + ac.buttonsUrl.mute;
        var bk = hap_source_path + ac.buttonsUrl.muteOn;
        var r = hap_source_path + ac.buttonsUrl.shuffle;
        var dB = hap_source_path + ac.buttonsUrl.shuffleOn;
        var et = hap_source_path + ac.buttonsUrl.playlist;
        var cR = hap_source_path + ac.buttonsUrl.playlistOn;
        var ar = hap_source_path + ac.buttonsUrl.download;
        var em = hap_source_path + ac.buttonsUrl.downloadOn;
        var e5 = hap_source_path + ac.buttonsUrl.trackUrlIcon;
        var cX = hap_source_path + ac.buttonsUrl.trackDownloadIcon;
        var cJ = hap_source_path + ac.buttonsUrl.trackRemoveIcon;
        var ad = hap_source_path + ac.buttonsUrl.link_pause;
        var ew = hap_source_path + ac.buttonsUrl.link_play;
        var aD = a(this).css("display", "block");
        var dA = aD.hasClass("hap_circle");
        var aJ = false;
        if (c1 && av()) {
            aJ = true
        }
        var bq = aD.attr("id") == "html5audio-popup";
        var dO = aD.find(".playlistHolder");
        var dw = aD.find(".playlist_inner").css("opacity", 0);
        var dc = aD.find(".playerHolder");
        var cu = aD.find(".player_mediaTime");
        var o = aD.find(".player_mediaTime_current");
        var aw = aD.find(".player_mediaTime_total");
        var eA = aD.find(".player_mediaName_Mask");
        var cK = aD.find(".player_mediaName");
        var b6 = aD.find(".player_controls");
        var j = aD.find(".player_volume");
        var aK = aD.find(".preloader");
        var au = aD.find(".player_download");
        var cx = aD.find(".componentPlaylist");
        var J = a(ac.playlistList);
        if (bq && window.opener) {
            J = window.opener.jQuery(ac.playlistList)
        }
        var be = ac.ytAppId,
            eL = new APHAPYTLoader(ac);
        a(eL).on("APHAPYTLoader.END_LOAD", function(fa, e8) {
            var e7, e6 = e8.length,
                e9;
            for (e7 = 0; e7 < e6; e7++) {
                e9 = e8[e7];
                e9.description = e9.description ? e9.description.replace(/["']/g, "") : null;
                if (bG) {
                    e9.url = bG
                }
                if (eK) {
                    e9.dlink = eK
                }
                if (dT) {
                    e9.download = dT
                }
                eF.push(e9)
            }
            if (eF.length > dp) {
                eF = eF.slice(0, dp)
            }
            ak()
        });
        var cj = ac.sound_id;
        var a4 = ac.autoPlay;
        var bt = ac.autoPlay;
        var es = ac.autoPlay;
        var ey = ac.autoLoad;
        if (isMobile) {
            a4 = false;
            ac.autoPlay = false;
            es = false
        }
        var aS = ac.useOnlyMp3Format;
        var L = ac.soundcloudApiKey;
        var eO = ac.soundcloud_result_limit;
        var b9 = ac.podcast_result_limit;
        var dp = ac.yt_playlist_result_limit;
        var aV = ac.ofm_result_limit;
        var dU = ac.useSongNameScroll;
        var bP = ac.autoSetSongTitle;
        var c3 = ac.loopingOn;
        var i = ac.randomPlay;
        var bw = ac.mediaTimeSeparator;
        var bl = ac.seekTooltipSeparator;
        var bC = ac.defaultArtistData;
        var dx = ac.useNumbersInPlaylist;
        var bi = ac.titleSeparator;
        var dG = ac.activePlaylist;
        var eB = ac.useAlertMessaging;
        var ds = ac.activatePlaylistScroll;
        var bp = ac.playlistScrollOrientation.toLowerCase();
        var dE = ac.sortablePlaylistItems;
        var z = ac.autoReuseMailForDownload;
        var am = ac.useRemoveBtnInTracks;
        var dF = ac.useVolumeTooltip;
        var e2 = ac.useSeekbarTooltip;
        var aH = ac.playlistItemContent.toLowerCase();
        var cS = ac.useKeyboardNavigation;
        var aU = ac.useBtnRollovers;
        var c5 = ac.usePlaylistRollovers;
        var bj = ac.getTrackInfoFromID3;
        o.html("0:00");
        aw.html("0:00");
        var bD = o.html();
        var cb = aw.html();
        cK.html(bC);
        o.html(bD + bw);
        aw.html(cb);
        var cp = true;
        if (!c1 || !dt && aS) {
            cp = false
        }
        var bQ;
        var ej, af, ee, bJ, ev, b3 = false,
            e = "hap_processed";
        var e3 = "hap_draggable",
            aG;
        var bG, cU, db, bu, eK, dT, du;
        var aL, dI;
        var k, cF, d, d6;
        var ef = false;
        if (dO.attr("data-playlistLocked") != undefined) {
            ef = true
        }
        var cI = "playlist_locked";
        var bm = false;
        var aN;
        var ce;
        var eg = null;
        var eS = true;
        var aq = false;
        var b2 = false;
        var eu, eX, bz = 50;
        var aT;
        var cG = false;
        var d7 = "";
        var cT = "";
        var ax = false;
        var bO, bn = hap_source_path + "includes/ba-simple-proxy.php";
        var bf = 550,
            dg, a7;
        if (c3) {
            aD.find(".player_loop").find("img").attr("src", eR)
        }
        if (i) {
            aD.find(".player_shuffle").find("img").attr("src", dB)
        }
        var dW = [];
        var aR = [];
        var t = [];
        var dr = 0;
        var W;
        var eb;
        var e4 = a('<div class="hap_feedParser"/>');
        var cY = a("<div/>");
        var bY = a("<div/>");
        if (isMobile) {
            var ai, c9 = 1000;
            if (dO.find("div[id='download_confirm']").length == 0) {
                var w = a('<div id="download_confirm"><p>DOWNLOAD STARTING</p></DIV>').css({
                    opacity: 0,
                    zIndex: 1000
                }).appendTo(dO)
            } else {
                var w = dO.find("div[id='download_confirm']")
            }
        }
        var eF = [];
        var dq = [];
        var f = ac.flashAudio;
        var h = ac.circleMain;
        if (cp) {
            var eT = false,
                en, eI, S = a('<div class="hap_audioHolder"/>')
        }
        var ea, d1, e1 = 50,
            aB, a1 = false,
            er = false,
            E, Z, dH = ac.flashYoutube,
            eG = false,
            bT = 100,
            aQ, eZ = false,
            a5 = false,
            c0 = false,
            by = false,
            R, cB = false;
        var b = [],
            c8, eV, Y, b1, bB;
        var a3;
        if (dU) {
            bd()
        }

        function bd() {
            if (aD.find("div[class='fontMeasure']").length == 0) {
                var e6 = a("<div/>").addClass("fontMeasure").appendTo(aD)
            } else {
                var e6 = aD.find("div[class='fontMeasure']")
            }
            a3 = new apTextScroller();
            a3.init(e6, cK, eA, "left", ac.scrollSeparator, ac.scrollSpeed)
        }
        var dy = {
            randomPlay: i,
            loopingOn: c3
        };
        var bK = a.playlistManager(dy);
        a(bK).on("ap_PlaylistManager.COUNTER_READY", function() {
            var e7 = bK.getCounter(),
                e6 = dW[e7];
            if (!e6) {
                return
            }
            if (ef) {
                return
            }
            b8();
            if (bP) {
                aW()
            }
            aT = e6.origtype ? e6.origtype : e6.type;
            d7 = e6.mp3;
            cT = e6.ogg;
            bO = e6.length ? e6.length : null;
            e6.download ? du = true : du = null;
            bb();
            if (typeof itemTriggered !== "undefined") {
                itemTriggered(dl, cj, e7)
            }
        });
        a(bK).on("ap_PlaylistManager.PLAYLIST_END", function() {
            b8();
            if (typeof audioPlayerPlaylistEnd !== "undefined") {
                audioPlayerPlaylistEnd(dl, cj)
            }
            ax = false;
            az("off")
        });
        a(bK).on("ap_PlaylistManager.PLAYLIST_END_ALERT", function() {
            if (typeof audioPlayerPlaylistEnd !== "undefined") {
                audioPlayerPlaylistEnd(dl, cj)
            }
        });
        var I = "";
        var eh = "";
        var bo = "";
        var dV;
        if ("ontouchstart" in window) {
            dV = true;
            I = "touchstart.ap";
            eh = "touchmove.ap";
            bo = "touchend.ap"
        } else {
            dV = false;
            I = "mousedown.ap";
            eh = "mousemove.ap";
            bo = "mouseup.ap"
        }
        var dZ = false;
        var bZ;
        var cD = false;
        var a2 = ac.defaultVolume;
        if (a2 < 0) {
            a2 = 0
        }
        if (a2 == 0) {
            bZ = 0.5
        } else {
            if (a2 > 1) {
                a2 = 1
            }
        }
        var q = aD.find(".volume_seekbar").css("cursor", "pointer").on(I, function(e6) {
            u(e6);
            cD = false;
            return false
        });
        var cy = "horizontal";
        if (q.attr("data-orientation") != undefined) {
            cy = q.attr("data-orientation").toLowerCase()
        }
        if (q.attr("data-autoHide") != undefined) {
            dZ = true;
            var co = false;
            var bx, K = parseInt(q.attr("data-autoHide"), 10);

            function m() {
                if (bx) {
                    clearTimeout(bx)
                }
                q.css("display", "none");
                co = false
            }

            function an() {
                if (bx) {
                    clearTimeout(bx)
                }
                if (!co) {
                    q.css("display", "block");
                    co = true;
                    bx = setTimeout(m, K)
                } else {
                    q.css("display", "none");
                    co = false
                }
            }
            if (!isMobile) {
                j.on("mouseover", function() {
                    if (!dS) {
                        return false
                    }
                    if (bx) {
                        clearTimeout(bx)
                    }
                    q.css("display", "block");
                    co = true;
                    return false
                }).on("mouseout", function() {
                    if (!dS) {
                        return false
                    }
                    if (bx) {
                        clearTimeout(bx)
                    }
                    bx = setTimeout(m, K);
                    return false
                })
            }
        }
        var dn = false,
            bF = 0,
            l = aD.find(".volume_level"),
            aM = aD.find(".volume_bg");

        function ay() {
            if (cy == "horizontal") {
                bF = aM.width();
                l.css("width", a2 * bF + "px")
            } else {
                bF = aM.height();
                l.css("height", a2 * bF + "px")
            }
        }

        function u(e8) {
            if (!dS || eS) {
                return
            }
            if (b0) {
                return
            }
            if (!dn) {
                var e6;
                if (dV) {
                    var e7 = e8.originalEvent.touches;
                    if (e7 && e7.length > 0) {
                        e6 = e7[0]
                    } else {
                        return false
                    }
                } else {
                    e6 = e8;
                    e8.preventDefault()
                }
                dn = true;
                aE.on(eh, function(e9) {
                    dR(e9)
                }).on(bo, function(e9) {
                    ah(e9)
                })
            }
            return false
        }

        function dR(e8) {
            var e6;
            if (dV) {
                var e7;
                if (e8.originalEvent.touches && e8.originalEvent.touches.length) {
                    e7 = e8.originalEvent.touches
                } else {
                    if (e8.originalEvent.changedTouches && e8.originalEvent.changedTouches.length) {
                        e7 = e8.originalEvent.changedTouches
                    } else {
                        return false
                    }
                }
                if (e7.length > 1) {
                    return false
                }
                e6 = e7[0];
                e8.preventDefault()
            } else {
                e6 = e8;
                e8.preventDefault()
            }
            ab(e6);
            return false
        }

        function ah(e8) {
            if (dn) {
                dn = false;
                aE.off(eh).off(bo);
                var e6;
                if (dV) {
                    var e7;
                    if (e8.originalEvent.touches && e8.originalEvent.touches.length) {
                        e7 = e8.originalEvent.touches
                    } else {
                        if (e8.originalEvent.changedTouches && e8.originalEvent.changedTouches.length) {
                            e7 = e8.originalEvent.changedTouches
                        } else {
                            return false
                        }
                    }
                    if (e7.length > 1) {
                        return false
                    }
                    e6 = e7[0];
                    e8.preventDefault()
                } else {
                    e6 = e8;
                    e8.preventDefault()
                }
                ab(e6)
            }
            return false
        }

        function ab(e7) {
            if (cy == "horizontal") {
                var e6 = e7.pageX;
                a2 = Math.max(0, Math.min(1, (e6 - aM.offset().left) / bF))
            } else {
                var e8 = e7.pageY;
                a2 = Math.max(0, Math.min(1, (e8 - aM.offset().top) / bF));
                a2 = 1 - a2
            }
            dh()
        }

        function cW() {
            if (!dS || eS) {
                return false
            }
            if (!cD) {
                bZ = a2;
                a2 = 0;
                cD = true
            } else {
                a2 = bZ;
                cD = false
            }
        }

        function dh() {
            if (cy == "horizontal") {
                l.css("width", a2 * bF + "px")
            } else {
                l.css("height", a2 * bF + "px")
            }
            if (cG) {
                if (aT == "youtube") {
                    if (c1) {
                        if (ea) {
                            ea.setVolume(a2)
                        }
                    } else {
                        if (typeof cc(dH) !== "undefined") {
                            cc(dH).pb_setVolume(a2)
                        }
                    }
                } else {
                    if (cp) {
                        if (eI) {
                            eI.volume = a2
                        }
                    } else {
                        if (typeof cc(f) !== "undefined") {
                            cc(f).pb_setVolume(a2)
                        }
                    }
                }
            }
            if (a2 > 0) {
                aD.find(".player_volume").find("img").attr("src", ct)
            } else {
                aD.find(".player_volume").find("img").attr("src", dY)
            }
            if (isMobile && dZ) {
                if (bx) {
                    clearTimeout(bx)
                }
                bx = setTimeout(m, K)
            }
        }
        if (dF && !isMobile) {
            q.on("mouseover", eN);
            var da = aD.find(".player_volume_tooltip"),
                p = parseInt(da.css("top"), 10);
            da.on("mouseenter", function() {
                q.off("mouseover", eN);
                da.css("display", "none")
            }).on("mouseleave", function() {
                q.on("mouseover", eN)
            })
        } else {
            aD.find(".player_volume_tooltip").remove()
        }

        function eN() {
            if (dZ) {
                if (bx) {
                    clearTimeout(bx)
                }
            }
            da.css("display", "block");
            q.on("mousemove", eU).on("mouseout", ex);
            aE.on("mouseout", ex)
        }

        function ex() {
            if (dZ) {
                if (bx) {
                    clearTimeout(bx)
                }
                bx = setTimeout(m, K)
            }
            da.css("display", "none");
            q.off("mousemove", eU).off("mouseout", ex);
            aE.off("mouseout", ex)
        }

        function eU(fa) {
            if (cy == "horizontal") {
                var e8 = fa.pageX - aM.offset().left;
                if (!v(e8)) {
                    return false
                }
                if (e8 < 0) {
                    e8 = 0
                } else {
                    if (e8 > bF) {
                        e8 = bF
                    }
                }
                var e6 = parseInt(fa.pageX - q.offset().left - da.width() / 2, 10);
                da.css("left", e6 + "px");
                var e7 = Math.max(0, Math.min(1, e8 / bF));
                var e9 = parseInt(e7 * 100, 10)
            } else {
                var e8 = fa.pageY - aM.offset().top;
                if (!v(e8)) {
                    return false
                }
                if (e8 < 0) {
                    e8 = 0
                } else {
                    if (e8 > bF) {
                        e8 = bF
                    }
                }
                var e6 = parseInt(e8 - da.height() / 2, 10);
                da.css("top", e6 + p + "px");
                var e7 = Math.max(0, Math.min(1, e8 / bF));
                e7 = 1 - e7;
                var e9 = parseInt(e7 * 100, 10)
            }
            da.find("p").html(e9 + " %")
        }
        var d9, d2;
        var b0 = false;
        var aF = aD.find(".progress_bg");
        var df = aD.find(".load_progress");
        var b5 = aD.find(".play_progress");
        var bA = aD.find(".player_progress");
        var aY = aF.width();
        var d4 = false;
        if (dA) {
            var bU = aD.find(".load_canvas").css("cursor", "pointer");
            var aa = aD.find(".play_canvas");
            var cH = aD.find(".circlePlayer");
            var cM = parseFloat(cH.attr("data-offOpacity"), 10);
            var dj = parseFloat(cH.attr("data-onOpacity"), 10);
            if (isMobile) {
                cM = dj = 1
            }
            var cf = {
                flash_id: ac.flash_id,
                strokeSize: parseInt(cH.attr("data-strokeSize"), 10),
                play_color: aa.attr("data-bgcolor"),
                load_color: bU.attr("data-bgcolor"),
                tolerance: parseInt(cH.attr("data-tolerance"), 10),
                offOpacity: cM,
                onOpacity: dj,
                circleWidth: bU.width(),
                circleHeight: bU.height()
            };
            if (aJ) {
                var dL = cf.strokeSize;
                var a0 = cf.play_color,
                    c2 = cf.load_color;
                var V = bU[0].getContext("2d");
                var ca = aa[0].getContext("2d");
                var bX = Math.PI * 2;
                var ch = Math.PI / 2;
                var n = cf.circleWidth;
                var eH = cf.circleHeight;
                var eP = n / 2;
                var bR = eP - dL;
                var cs = ac.tolerance;
                var bV;
                var ae = false;
                var bM = 0;
                bU.on(I, function(e6) {
                    if (bS(e6)) {
                        ae = false
                    } else {
                        ae = true
                    }
                    aX(e6);
                    return false
                });
                var bA = bU
            } else {
                bU.remove();
                aa.remove()
            }
        } else {
            var bA = aD.find(".player_progress").css("cursor", "pointer").on(I, function(e6) {
                aX(e6);
                return false
            })
        }

        function aX(e8) {
            if (!dS || eS) {
                return
            }
            if (!cG) {
                return
            }
            if (dn) {
                return
            }
            if (aq) {
                return
            }
            if (!b0) {
                var e6;
                if (dV) {
                    var e7 = e8.originalEvent.touches;
                    if (e7 && e7.length > 0) {
                        e6 = e7[0]
                    } else {
                        return false
                    }
                } else {
                    e6 = e8;
                    e8.preventDefault()
                }
                b0 = true;
                aE.on(eh, function(e9) {
                    ek(e9)
                }).on(bo, function(e9) {
                    G(e9)
                })
            }
            return false
        }

        function ek(e8) {
            var e6;
            if (dV) {
                var e7;
                if (e8.originalEvent.touches && e8.originalEvent.touches.length) {
                    e7 = e8.originalEvent.touches
                } else {
                    if (e8.originalEvent.changedTouches && e8.originalEvent.changedTouches.length) {
                        e7 = e8.originalEvent.changedTouches
                    } else {
                        return false
                    }
                }
                if (e7.length > 1) {
                    return false
                }
                e6 = e7[0];
                e8.preventDefault()
            } else {
                e6 = e8;
                e8.preventDefault()
            }
            dM(e6, e8);
            return false
        }

        function G(e9) {
            if (b0) {
                b0 = false;
                aE.off(eh).off(bo);
                var e6;
                if (dV) {
                    var e8;
                    if (e9.originalEvent.touches && e9.originalEvent.touches.length) {
                        e8 = e9.originalEvent.touches
                    } else {
                        if (e9.originalEvent.changedTouches && e9.originalEvent.changedTouches.length) {
                            e8 = e9.originalEvent.changedTouches
                        } else {
                            return false
                        }
                    }
                    if (e8.length > 1) {
                        return false
                    }
                    e6 = e8[0];
                    e9.preventDefault()
                } else {
                    e6 = e9;
                    e9.preventDefault()
                }
                dM(e6, e9)
            }
            if (dA) {
                var e7 = setTimeout(function() {
                    if (e7) {
                        clearTimeout(e7)
                    }
                    d4 = false
                }, 500)
            }
            return false
        }

        function dM(e7, fa) {
            if (!dA) {
                d9 = e7.pageX - aF.offset().left;
                if (d9 < 0) {
                    d9 = 0
                } else {
                    if (d9 > aY) {
                        d9 = aY
                    }
                }
                b5.width(d9);
                var e8 = Math.max(0, Math.min(1, d9 / aY))
            } else {
                if (aJ) {
                    if (bS(fa)) {
                        if (ae) {
                            return false
                        }
                        if (bV > bR - cs) {
                            return false
                        }
                        if (!b0) {
                            bh(true);
                            V.clearRect(0, 0, n, eH);
                            cd(bM);
                            cm()
                        }
                        return false
                    } else {
                        if (!ae) {
                            return false
                        }
                        d4 = true;
                        var e6 = e7.pageX - cH.offset().left - n / 2,
                            fb = e7.pageY - cH.offset().top - eH / 2,
                            e9 = Math.atan2(fb, e6);
                        if (e9 > -1 * Math.PI && e9 < -0.5 * Math.PI) {
                            e9 = 2 * Math.PI + e9
                        }
                        var e8 = Math.max(0, Math.min((e9 + Math.PI / 2) / 2 * Math.PI * 10)) / 100;
                        bM = e8;
                        V.clearRect(0, 0, n, eH);
                        cd(bM);
                        cm()
                    }
                } else {}
            }
            if (!v(e8)) {
                return false
            }
            d2 = bM;
            cO(e8)
        }

        function cO(e8) {
            if (aT == "youtube") {
                if (c1) {
                    var e6 = e8 * ea.getDuration(),
                        e7 = e6.toFixed(1);
                    if (v(e7)) {
                        ea.seek(e7)
                    }
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        cc(dH).pb_seek(e8)
                    }
                }
            } else {
                if (cp) {
                    if (eI && eI.seekable && eI.seekable.length > 0) {
                        if (!dk || isMobile) {
                            eI.currentTime = e8 * eI.duration
                        } else {
                            if (e8 * eI.duration >= eI.buffered.end(0) - 5) {
                                eI.currentTime = eI.buffered.end(0) - 5
                            } else {
                                eI.currentTime = e8 * eI.duration
                            }
                        }
                    }
                } else {
                    if (typeof cc(f) !== "undefined") {
                        cc(f).pb_seek(e8)
                    }
                }
            }
        }
        if (e2 && !isMobile) {
            bA.on("mouseover", ck);
            var d3 = aD.find(".player_progress_tooltip").css("zIndex", 50);
            d3.find("p").html("0:00" + bl + "0:00");
            d3.on("mouseenter", function() {
                bA.off("mouseover", ck);
                d3.css("display", "none")
            }).on("mouseleave", function() {
                bA.on("mouseover", ck)
            })
        } else {
            aD.find(".player_progress_tooltip").remove()
        }

        function ck() {
            if (!cG) {
                return
            }
            d3.css("display", "block");
            bA.on("mousemove", Q).on("mouseout", aA);
            aE.on("mouseout", aA)
        }

        function aA() {
            if (!cG) {
                return
            }
            d3.css("display", "none");
            bA.off("mousemove", Q).off("mouseout", aA);
            aE.off("mouseout", aA)
        }

        function Q(e9) {
            if (!dA) {
                var fe = e9.pageX - aF.offset().left;
                if (!v(fe)) {
                    return false
                }
                if (fe < 0) {
                    fe = 0
                } else {
                    if (fe > aY) {
                        fe = aY
                    }
                }
                var e6 = parseInt(e9.pageX - bA.offset().left - d3.width() / 2, 10);
                d3.css("left", e6 + "px");
                var fa = Math.max(0, Math.min(1, fe / aY))
            } else {
                if (aJ) {
                    if (bS(e9)) {
                        d3.css("display", "none");
                        return false
                    } else {
                        var e7 = e9.pageX - cH.offset().left,
                            fc = e9.pageY - cH.offset().top,
                            fd = e7 - n / 2,
                            fb = fc - eH / 2,
                            e8 = Math.atan2(fb, fd);
                        if (e8 > -1 * Math.PI && e8 < -0.5 * Math.PI) {
                            e8 = 2 * Math.PI + e8
                        }
                        var fa = Math.max(0, Math.min((e8 + Math.PI / 2) / 2 * Math.PI * 10)) / 100;
                        d3.css("display", "block")
                    }
                } else {}
            }
            if (!v(fa)) {
                return false
            }
            dv(fa)
        }

        function dv(e7) {
            if (!v(e7)) {
                return false
            }
            var e6, e8;
            if (aT == "youtube") {
                if (c1) {
                    e8 = ea.getDuration(), e6 = e7 * e8
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        e8 = cc(dH).pb_getFlashDuration(), e6 = e7 * e8
                    }
                }
            } else {
                if (cp) {
                    if (eI) {
                        e8 = eI.duration, e6 = e7 * e8
                    }
                } else {
                    if (typeof cc(f) !== "undefined") {
                        e8 = cc(f).pb_getFlashDuration(), e6 = e7 * e8
                    }
                }
            }
            if (v(e6) && v(e8)) {
                d3.find("p").html(b4(e6) + bl + F(e8))
            } else {
                return false
            }
        }

        function cd(e6) {
            V.beginPath();
            V.arc(n / 2, eH / 2, eP - dL / 2, -(ch), ((bX) * e6) - ch, false);
            V.strokeStyle = a0;
            V.lineCap = "butt";
            V.lineWidth = dL;
            V.stroke()
        }

        function at(e6) {
            ca.beginPath();
            ca.arc(n / 2, eH / 2, eP - dL / 2, -(ch), ((bX) * e6) - ch, false);
            ca.strokeStyle = c2;
            ca.lineCap = "butt";
            ca.lineWidth = dL;
            ca.stroke()
        }

        function cm() {
            if (!ax) {
                var e6 = 65,
                    fh = 57,
                    fd = 65,
                    fc = 102,
                    fi = fd - e6,
                    ff = fc - fh,
                    fg = Math.atan2(ff, fi) - Math.PI / 3,
                    fa = Math.sqrt(fi * fi + ff * ff),
                    e9 = Math.cos(fg) * fa + e6,
                    e8 = Math.sin(fg) * fa + fh;
                V.beginPath();
                V.fillStyle = a0;
                V.moveTo(e6, fh);
                V.lineTo(fd, fc);
                V.lineTo(e9, e8);
                V.fill()
            } else {
                var e6 = 62,
                    fh = 57,
                    e7 = 14,
                    fe = 45,
                    fb = 23;
                V.fillStyle = a0;
                V.fillRect(e6, fh, e7, fe);
                V.fillRect(e6 + fb, fh, e7, fe)
            }
        }

        function bS(fb) {
            var e7;
            if (dV) {
                var fa;
                if (fb.originalEvent.touches && fb.originalEvent.touches.length) {
                    fa = fb.originalEvent.touches
                } else {
                    if (fb.originalEvent.changedTouches && fb.originalEvent.changedTouches.length) {
                        fa = fb.originalEvent.changedTouches
                    } else {
                        return false
                    }
                }
                if (fa.length > 1) {
                    return false
                }
                e7 = fa[0]
            } else {
                e7 = fb
            }
            var e6 = e7.pageX - cH.offset().left,
                fc = e7.pageY - cH.offset().top,
                e9 = n / 2,
                e8 = eH / 2;
            bV = Math.sqrt((e6 - e9) * (e6 - e9) + (fc - e8) * (fc - e8));
            return Math.sqrt((e6 - e9) * (e6 - e9) + (fc - e8) * (fc - e8)) < bR
        }

        function b7(e7) {
            if (aD.find(".componentPlaylist").length == 0) {
                return
            }
            if (!W) {
                var e6 = aD.find(".componentPlaylist");
                W = e6.jScrollPane().data().jsp;
                e6.on("jsp-initialised", function(e9, e8) {}).jScrollPane({
                    mouseWheelSpeed: 20
                });
                if (bp == "horizontal") {
                    if (!isMobile) {
                        e6.on("mousewheel", P)
                    }
                }
            } else {
                if (bp == "vertical") {
                    if (dw.outerHeight(true) >= dO.height()) {
                        W.reinitialise();
                        if (e7) {
                            W.scrollToY(0);
                            a(".jspPane").css("top", 0 + "px")
                        }
                    } else {
                        W.destroy();
                        W = null
                    }
                } else {
                    W.reinitialise();
                    if (e7) {
                        W.scrollToX(0);
                        a(".jspPane").css("left", 0 + "px")
                    }
                }
            }
        }

        function P(e8, fa, e7, e6) {
            if (!dS || eS) {
                return false
            }
            var e9 = fa > 0 ? -1 : 1;
            if (W) {
                W.scrollByX(e9 * 100)
            }
            return false
        }

        function el() {
            var e9 = [aD.find(".controls_next"), aD.find(".controls_prev"), aD.find(".controls_toggle"), aD.find(".player_volume"), aD.find(".player_download"), aD.find(".player_loop"), aD.find(".player_shuffle")];
            var e8, e6 = e9.length,
                e7 = 0;
            for (e7; e7 < e6; e7++) {
                e8 = a(e9[e7]).css("cursor", "pointer").on(I, aZ);
                if (aU && !isMobile) {
                    e8.on("mouseover", al).on("mouseout", bv)
                }
            }
        }

        function bh(e6) {
            if (ax) {
                if (aT == "youtube") {
                    if (!c0) {
                        return false
                    }
                    if (c1) {
                        ea.togglePlayback()
                    } else {
                        if (typeof cc(dH) !== "undefined") {
                            cc(dH).pb_togglePlayback()
                        }
                        cG = true
                    }
                } else {
                    if (cp) {
                        if (eI) {
                            eI.pause()
                        }
                    } else {
                        if (typeof cc(f) !== "undefined") {
                            cc(f).pb_pause()
                        }
                    }
                }
                ax = false;
                az("off")
            } else {
                if (aT == "youtube") {
                    if (!c0) {
                        return false
                    }
                    if (c1) {
                        if (isMobile) {
                            if (!by && a4) {
                                dS = false;
                                c7("on")
                            } else {
                                ea.togglePlayback()
                            }
                        } else {
                            ea.togglePlayback()
                        }
                    } else {
                        if (typeof cc(dH) !== "undefined") {
                            cc(dH).pb_togglePlayback()
                        }
                        cG = true
                    }
                } else {
                    if (cp) {
                        if (eI) {
                            eI.play()
                        }
                    } else {
                        if (typeof cc(f) !== "undefined") {
                            cc(f).pb_play()
                        }
                    }
                }
                ax = true;
                B("off")
            }
            if (!e6) {
                return false
            }
        }

        function ec(e8) {
            if (!dS || eS) {
                return false
            }
            if (!e8) {
                var e8 = window.event
            }
            if (e8.cancelBubble) {
                e8.cancelBubble = true
            } else {
                if (e8.stopPropagation) {
                    e8.stopPropagation()
                }
            }
            var e7 = a(e8.currentTarget),
                e9 = e7.attr("data-id"),
                e6 = e7.closest(".playlistItem");
            if (e6.hasClass(cI)) {
                return false
            }
            a4 = true;
            cw();
            bK.processPlaylistRequest(e9);
            return false
        }

        function aZ(e8) {
            if (!dS || eS) {
                return false
            }
            if (!e8) {
                var e8 = window.event
            }
            if (e8.cancelBubble) {
                e8.cancelBubble = true
            } else {
                if (e8.stopPropagation) {
                    e8.stopPropagation()
                }
            }
            var e7 = a(e8.currentTarget),
                e9 = e7.attr("class");
            var e6 = e9.split(" ");
            if (a.inArray("controls_prev", e6) != -1) {
                a4 = true;
                cw();
                bK.advanceHandler(-1, true)
            } else {
                if (a.inArray("controls_toggle", e6) != -1) {
                    if (!cG) {
                        return
                    }
                    bh()
                } else {
                    if (a.inArray("controls_next", e6) != -1) {
                        a4 = true;
                        cw();
                        bK.advanceHandler(1, true)
                    } else {
                        if (a.inArray("player_volume", e6) != -1) {
                            if (!isMobile) {
                                cW();
                                dh()
                            } else {
                                if (dZ) {
                                    an()
                                } else {
                                    cW();
                                    dh()
                                }
                            }
                        } else {
                            if (a.inArray("player_download", e6) != -1) {
                                H()
                            } else {
                                if (a.inArray("player_loop", e6) != -1) {
                                    if (c3) {
                                        aD.find(".player_loop").find("img").attr("src", c4);
                                        c3 = false
                                    } else {
                                        aD.find(".player_loop").find("img").attr("src", eR);
                                        c3 = true
                                    }
                                    bK.setLooping(c3)
                                } else {
                                    if (a.inArray("player_shuffle", e6) != -1) {
                                        if (i) {
                                            aD.find(".player_shuffle").find("img").attr("src", r);
                                            i = false
                                        } else {
                                            aD.find(".player_shuffle").find("img").attr("src", dB);
                                            i = true
                                        }
                                        bK.setRandom(i)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return false
        }

        function al(e8) {
            if (!dS) {
                return
            }
            if (!e8) {
                var e8 = window.event
            }
            if (e8.cancelBubble) {
                e8.cancelBubble = true
            } else {
                if (e8.stopPropagation) {
                    e8.stopPropagation()
                }
            }
            var e7 = a(e8.currentTarget),
                e9 = e7.attr("class");
            var e6 = e9.split(" ");
            if (a.inArray("controls_prev", e6) != -1) {
                aD.find(".controls_prev").find("img").attr("src", bE)
            } else {
                if (a.inArray("controls_toggle", e6) != -1) {
                    if (ax) {
                        B("on")
                    } else {
                        az("on")
                    }
                } else {
                    if (a.inArray("controls_next", e6) != -1) {
                        aD.find(".controls_next").find("img").attr("src", aI)
                    } else {
                        if (a.inArray("player_volume", e6) != -1) {
                            if (a2 > 0) {
                                aD.find(".player_volume").find("img").attr("src", cE)
                            } else {
                                aD.find(".player_volume").find("img").attr("src", bk)
                            }
                        } else {
                            if (a.inArray("player_download", e6) != -1) {
                                aD.find(".player_download").find("img").attr("src", em)
                            } else {
                                if (a.inArray("player_loop", e6) != -1) {
                                    if (c3) {
                                        aD.find(".player_loop").find("img").attr("src", c4)
                                    } else {
                                        aD.find(".player_loop").find("img").attr("src", eR)
                                    }
                                } else {
                                    if (a.inArray("player_shuffle", e6) != -1) {
                                        if (i) {
                                            aD.find(".player_shuffle").find("img").attr("src", r)
                                        } else {
                                            aD.find(".player_shuffle").find("img").attr("src", dB)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return false
        }

        function bv(e8) {
            if (!dS) {
                return
            }
            if (!e8) {
                var e8 = window.event
            }
            if (e8.cancelBubble) {
                e8.cancelBubble = true
            } else {
                if (e8.stopPropagation) {
                    e8.stopPropagation()
                }
            }
            var e7 = a(e8.currentTarget),
                e9 = e7.attr("class");
            var e6 = e9.split(" ");
            if (a.inArray("controls_prev", e6) != -1) {
                aD.find(".controls_prev").find("img").attr("src", cZ)
            } else {
                if (a.inArray("controls_toggle", e6) != -1) {
                    if (ax) {
                        B("off")
                    } else {
                        az("off")
                    }
                } else {
                    if (a.inArray("controls_next", e6) != -1) {
                        aD.find(".controls_next").find("img").attr("src", eE)
                    } else {
                        if (a.inArray("player_volume", e6) != -1) {
                            if (a2 > 0) {
                                aD.find(".player_volume").find("img").attr("src", ct)
                            } else {
                                aD.find(".player_volume").find("img").attr("src", dY)
                            }
                        } else {
                            if (a.inArray("player_download", e6) != -1) {
                                aD.find(".player_download").find("img").attr("src", ar)
                            } else {
                                if (a.inArray("player_loop", e6) != -1) {
                                    if (c3) {
                                        aD.find(".player_loop").find("img").attr("src", eR)
                                    } else {
                                        aD.find(".player_loop").find("img").attr("src", c4)
                                    }
                                } else {
                                    if (a.inArray("player_shuffle", e6) != -1) {
                                        if (i) {
                                            aD.find(".player_shuffle").find("img").attr("src", dB)
                                        } else {
                                            aD.find(".player_shuffle").find("img").attr("src", r)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return false
        }

        function cw() {
            if (b3) {
                return
            }
            if (bK.getCounter() != -1) {
                var e6 = a(aR[bK.getCounter()]);
                if (e6 && e6.hasClass("playlistSelected")) {
                    var e7 = e6.attr("data-id");
                    e6.removeClass("playlistSelected").addClass("playlistNonSelected");
                    if (typeof playlistItemEnabled !== "undefined") {
                        playlistItemEnabled(dl, cj, e6, e7)
                    }
                }
            }
        }

        function b8() {
            if (b3) {
                return
            }
            var e6 = a(aR[bK.getCounter()]);
            if (e6 && e6.hasClass("playlistNonSelected")) {
                var e7 = e6.attr("data-id");
                e6.removeClass("playlistNonSelected").addClass("playlistSelected");
                if (typeof playlistItemDisabled !== "undefined") {
                    playlistItemDisabled(dl, cj, e6, e7)
                }
            }
        }

        function aj() {
            var e6 = ac.activeItem;
            if (v(e6) && e6 != -1) {
                if (e6 < 0) {
                    e6 = 0
                } else {
                    if (e6 > dr - 1) {
                        e6 = dr - 1
                    }
                }
                bK.setCounter(e6, false)
            } else {
                a4 = true
            }
        }

        function bW() {
            if (!eg) {
                return
            }
            if (bK.getCounter() == -1) {
                return
            }
            dN();
            bg();
            cw()
        }

        function M() {
            dN();
            bg();
            var e7 = 0,
                e6;
            for (e7; e7 < dr; e7++) {
                e6 = a(aR[e7]).off("click", ec);
                if (c5 && !isMobile) {
                    e6.off("mouseenter").off("mouseleave")
                }
            }
            if (eg) {
                eg.children().each(function() {
                    var e8 = a(this);
                    if (e8.data("hap_wrap_player")) {
                        e8.data("hap_wrap_player").destroyPlaylist()
                    }
                });
                eg.empty();
                eg = null
            }
            dw.empty();
            bm = false;
            b3 = false;
            ce = null;
            eK = null;
            du = null;
            ee = false;
            bJ = false;
            ev = false;
            dG = null;
            bK.reSetCounter();
            dW = [];
            aR = [];
            t = [];
            if (W) {
                W.reinitialise()
            }
        }

        function dN() {
            if (a5) {
                if (c1) {
                    if (ea) {
                        ea.stop()
                    }
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        cc(dH).pb_dispose()
                    }
                }
                a5 = false
            }
            if (cp) {
                if (dg) {
                    clearInterval(dg)
                }
                if (eI) {
                    eI.pause();
                    eI.src = ""
                }
                if (en) {
                    en.off("ended pause play canplay canplaythrough loadedmetadata")
                }
            } else {
                if (typeof cc(f) !== "undefined") {
                    cc(f).pb_dispose()
                }
            }
            c();
            du ? au.css("display", "block") : au.css("display", "none");
            d2 = null;
            aq = false;
            ax = false;
            cG = false;
            b2 = false;
            if (!d6) {
                d = undefined
            }
        }

        function D(e7) {
            if (typeof(e7) === "undefined") {
                if (eB) {
                    alert("setPlaylist method requires data parameter. loadPlaylist failed.")
                }
                return false
            }
            if (typeof(e7.hidden) === "undefined") {
                if (eB) {
                    alert("setPlaylist method requires data.hidden parameter. loadPlaylist failed.")
                }
                return false
            } else {
                var e6 = U(e7.hidden)
            }
            if (typeof(e7.id) === "undefined") {
                if (eB) {
                    alert("setPlaylist method requires data.id parameter. loadPlaylist failed.")
                }
                return false
            } else {
                var e9 = e7.id
            }
            eS = true;
            if (!eb) {
                eb = true
            }
            dJ();
            dw.css("opacity", 0);
            if (eg) {
                M()
            }
            bm = false;
            b3 = e6;
            if (bq && isIE) {
                var e8 = a(J.find(e9).css("display", "block").clone().wrap("<p>").parent().html());
                a(J.find(e9).css("display", "none"))
            } else {
                var e8 = J.find(e9).css("display", "block").clone();
                J.find(e9).css("display", "none")
            }
            e8.css("fontSize", 0);
            if (e8.length == 0) {
                if (eB) {
                    alert('Failed to select playlist! Make sure that element: "' + e9 + '" exist in playlist list! Quitting.')
                }
                s();
                return false
            }
            if (b3) {
                cY.empty();
                e8.appendTo(cY);
                af = 0;
                ej = true;
                bJ = true;
                ev = true;
                eg = bY
            } else {
                if (W) {
                    e8.appendTo(dw)
                } else {
                    if (dw.length == 0) {
                        if (eB) {
                            alert("playlist_inner html element seems to be missing! You could be trying to use loadPlaylist method without having necessary html elements inside componentWrapper. Quitting.")
                        }
                        return false
                    }
                    e8.appendTo(dw)
                }
                eg = e8
            }
            dW = [];
            aR = [];
            t = [];
            dq = [];
            e8.find("li[class*='playlistItem']").each(function() {
                dq.push(a(this))
            });
            bN()
        }

        function bN() {
            if (dq.length) {
                eo()
            } else {
                C()
            }
        }

        function eo() {
            bG = null;
            eK = null;
            dT = null;
            aL = null;
            dI = null;
            aG = false;
            var fi = dq[0],
                fl = fi.attr("data-type").toLowerCase(),
                e8 = fi.attr("data-path"),
                fb = fi.hasClass(e);
            eF = [];
            if (fi.hasClass(e3)) {
                aG = true
            }
            if (fi.attr("data-plink") != undefined && !dP(fi.attr("data-plink"))) {
                bG = fi.attr("data-plink")
            }
            if (fi.attr("data-dlink") != undefined) {
                if (fl == "youtube_single" || fl == "youtube_single_list" || fl == "youtube_playlist") {
                    if (!dP(fi.attr("data-dlink"))) {
                        eK = fi.attr("data-dlink")
                    }
                } else {
                    if (!dP(fi.attr("data-dlink"))) {
                        eK = fi.attr("data-dlink")
                    } else {
                        eK = true
                    }
                }
            }
            if (fi.attr("data-download") != undefined) {
                if (fl == "youtube_single" || fl == "youtube_single_list" || fl == "youtube_playlist") {
                    if (!dP(fi.attr("data-download"))) {
                        dT = fi.attr("data-download")
                    }
                } else {
                    if (!dP(fi.attr("data-download"))) {
                        dT = fi.attr("data-download")
                    } else {
                        dT = true
                    }
                }
            }
            if (fi.attr("data-thumb") != undefined && !dP(fi.attr("data-thumb"))) {
                aL = fi.attr("data-thumb")
            }
            if (!dP(a.trim(fi.html()))) {
                dI = fi.html()
            }
            if (fb) {
                ce = fi;
                dq.shift();
                bN()
            } else {
                if (fl == "local") {
                    ce = fi;
                    dq.shift();
                    bN()
                } else {
                    if (fl == "soundcloud") {
                        ce = fi.data("toremove", "true");
                        eX = 0;
                        ep(e8)
                    } else {
                        if (fl == "podcast") {
                            ce = fi.data("toremove", "true");
                            var e6 = "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=xml&num=" + b9 + "&callback=?&q=" + encodeURIComponent(e8);
                            a.ajax({
                                type: "GET",
                                url: e6,
                                dataType: "jsonp",
                                cache: false
                            }).done(function(fw) {
                                if (fw.responseData == null) {
                                    if (eB) {
                                        alert("Playlist process failed, podcast: " + e8)
                                    }
                                    if (ce && ce.data("toremove") == "true") {
                                        ce.remove()
                                    }
                                    dq.shift();
                                    bN();
                                    return
                                }
                                if (!ieBelow9) {
                                    e4.html(fw.responseData.xmlString);
                                    var fu = e4.get(0).getElementsByTagName("item");
                                    var fr = 0,
                                        fs = fu.length,
                                        fv, fo, fq, fn;
                                    for (fr; fr < fs; fr++) {
                                        fv = fu[fr];
                                        if (fv.getElementsByTagName("enclosure")[0] != undefined) {
                                            fq = {};
                                            fq.type = "podcast";
                                            fq.mp3 = fv.getElementsByTagName("enclosure")[0].getAttribute("url");
                                            fq.ogg = "";
                                            if (fv.getElementsByTagName("itunes:duration")[0] != undefined) {
                                                fo = di(fv.getElementsByTagName("itunes:duration")[0].childNodes[0].nodeValue);
                                                fq.length = parseInt((fo * 1000), 10)
                                            }
                                            if (fv.getElementsByTagName("media:thumbnail")[0] != undefined) {
                                                if (fv.getElementsByTagName("media:thumbnail")[0].getAttribute("url") != undefined) {
                                                    fq.thumb = fv.getElementsByTagName("media:thumbnail")[0].getAttribute("url")
                                                } else {
                                                    if (aL) {
                                                        fq.thumb = aL
                                                    }
                                                }
                                            } else {
                                                if (aL) {
                                                    fq.thumb = aL
                                                }
                                            }
                                            fq.title = fv.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                                            if (bG) {
                                                fq.url = bG
                                            }
                                            if (eK) {
                                                fq.dlink = eK
                                            }
                                            if (dT) {
                                                fq.download = dT
                                            }
                                            eF.push(fq)
                                        }
                                    }
                                } else {
                                    var fp = dK(fw.responseData.xmlString),
                                        ft, fq;
                                    a(fp).find("item").each(function() {
                                        ft = a(this);
                                        fq = {};
                                        fq.type = "podcast";
                                        fq.mp3 = ft.find("enclosure").attr("url");
                                        fq.ogg = "";
                                        fq.title = ft.find("title").text();
                                        if (ft.find("media\\:thumbnail").length > 0) {
                                            if (ft.find("media\\:thumbnail").attr("url")) {
                                                fq.thumb = ft.find("media\\:thumbnail").attr("url")
                                            } else {
                                                if (aL) {
                                                    fq.thumb = aL
                                                }
                                            }
                                        } else {
                                            if (aL) {
                                                fq.thumb = aL
                                            }
                                        }
                                        if (bG) {
                                            fq.url = bG
                                        }
                                        if (eK) {
                                            fq.dlink = eK
                                        }
                                        if (dT) {
                                            fq.download = dT
                                        }
                                        eF.push(fq)
                                    })
                                }
                                ak()
                            }).fail(function(fn, fp, fo) {
                                if (eB) {
                                    alert("Parse feed error: " + fn.responseText)
                                }
                                if (eB) {
                                    alert("Playlist process failed, podcast: " + e8)
                                }
                                if (ce && ce.data("toremove") == "true") {
                                    ce.remove()
                                }
                                dq.shift();
                                bN()
                            })
                        } else {
                            if (fl == "folder") {
                                ce = fi.data("toremove", "true");
                                var e6 = hap_source_path + "folder_parser.php",
                                    fm = true;
                                if (fi.attr("data-subdirs") != undefined && fi.attr("data-subdirs") == "false") {
                                    fm = false
                                }
                                var fd = {
                                    dir: e8,
                                    subdirs: fm
                                };
                                a.ajax({
                                    type: "GET",
                                    url: e6,
                                    data: fd,
                                    dataType: "json"
                                }).done(function(fs) {
                                    cn(fs, "title");
                                    var fp = 0,
                                        fn = fs.length,
                                        fq, fr;
                                    if (bj) {
                                        bQ = eF.length ? eF.length - 1 : 0
                                    }
                                    for (fp; fp < fn; fp++) {
                                        fq = fs[fp];
                                        path = cg(fq.path);
                                        fr = {};
                                        fr.type = "folder";
                                        if (/.mp3/.test(path)) {
                                            fr.mp3 = path;
                                            fr.ogg = path.substr(0, path.lastIndexOf(".")) + ".ogg";
                                            var fo = path.substr(0, path.lastIndexOf("."));
                                            if (/\//i.test(fo)) {
                                                title = fo.substr(fo.lastIndexOf("/") + 1)
                                            } else {
                                                title = fo
                                            }
                                            title = title.split("_").join(" ");
                                            fr.title = title;
                                            fr.thumb = path.substr(0, path.lastIndexOf(".")) + ".jpg";
                                            fr.size = parseInt(fq.size, 10);
                                            fr.lastmod = parseInt(fq.lastmod, 10);
                                            if (bG) {
                                                fr.url = bG
                                            }
                                            if (eK) {
                                                fr.dlink = eK
                                            }
                                            if (dT) {
                                                fr.download = dT
                                            }
                                            if (aL) {
                                                fr.thumb = aL
                                            }
                                            eF.push(fr)
                                        }
                                    }
                                    if (eF.length && bj) {
                                        cz()
                                    } else {
                                        ak()
                                    }
                                }).fail(function(fn, fp, fo) {
                                    if (eB) {
                                        alert("Read folder error! Make sure you run this online or on local server!")
                                    }
                                    if (eB) {
                                        alert("Playlist process failed, folder: " + e8)
                                    }
                                    if (ce && ce.data("toremove") == "true") {
                                        ce.remove()
                                    }
                                    dq.shift();
                                    bN()
                                })
                            } else {
                                if (fl == "xml") {
                                    ce = fi;
                                    var e6 = hap_source_path + e8,
                                        fh, fg, fk, fj, fc, e9 = [];
                                    a.ajax({
                                        type: "GET",
                                        url: e6,
                                        dataType: "html",
                                        cache: false
                                    }).done(function(fo) {
                                        dq.shift();
                                        a(fo).find("li[class='playlistItem']").each(function() {
                                            fk = g(a(this));
                                            if (ce) {
                                                ce.after(a(fk))
                                            } else {
                                                if (eg.children().size() > 0) {
                                                    a(fk).prependTo(eg)
                                                } else {
                                                    a(fk).appendTo(eg)
                                                }
                                            }
                                            ce = a(fk);
                                            e9.push(a(fk))
                                        });
                                        var fp = 0,
                                            fn = e9.length;
                                        e9.reverse();
                                        for (fp; fp < fn; fp++) {
                                            dq.unshift(e9[fp])
                                        }
                                        e9 = null;
                                        fi.remove();
                                        bN()
                                    }).fail(function(fn, fp, fo) {
                                        if (eB) {
                                            alert("Playlist process failed, xml: " + e8)
                                        }
                                        if (ce) {
                                            ce.remove()
                                        }
                                        dq.shift();
                                        bN()
                                    })
                                } else {
                                    if (fl == "database_data" || fl == "database_html") {
                                        if (fi.attr("data-table") == undefined || dP(fi.attr("data-table"))) {
                                            if (eB) {
                                                alert("Database table missing!");
                                                alert("Playlist process failed, database query: " + e8)
                                            }
                                            dq.shift();
                                            bN();
                                            return
                                        }
                                        var fa = null,
                                            ff = null,
                                            e7 = null;
                                        if (fi.attr("data-limit") != undefined && !dP(fi.attr("data-limit"))) {
                                            fa = parseInt(fi.attr("data-limit"), 10)
                                        }
                                        if (fi.attr("data-range") != undefined && !dP(fi.attr("data-range"))) {
                                            var fe = fi.attr("data-range").split(",");
                                            if (fe.length == 2) {
                                                ff = fe[0];
                                                e7 = fe[1]
                                            }
                                        }
                                        ce = fi;
                                        var e6 = hap_source_path + "includes/database.php",
                                            fh, fg, fk, fj, fc, e9 = [],
                                            fd = {
                                                db_name: e8,
                                                db_table: fi.attr("data-table"),
                                                db_type: fl,
                                                limit: fa,
                                                range_from: ff,
                                                range_to: e7
                                            };
                                        a.ajax({
                                            type: "POST",
                                            url: e6,
                                            data: fd
                                        }).done(function(fo) {
                                            if (fo.indexOf("Database information missing!") > -1 || fo.indexOf("Db connection failed") > -1 || fo.indexOf("Db selection failed") > -1 || fo.indexOf("Db query failed") > -1) {
                                                if (eB) {
                                                    alert(fo);
                                                    alert("Playlist process failed, database query: " + e8)
                                                }
                                                if (ce) {
                                                    ce.remove()
                                                }
                                                dq.shift();
                                                bN();
                                                return
                                            }
                                            dq.shift();
                                            var fq = a.parseJSON(fo),
                                                fp = 0,
                                                fn = fq.length,
                                                fs, fr;
                                            for (fp; fp < fn; fp++) {
                                                fs = fq[fp];
                                                if (fl == "database_data") {
                                                    if (fs.type && fs.mp3 || fs.path) {
                                                        fk = eC(fs)
                                                    } else {
                                                        continue
                                                    }
                                                } else {
                                                    if (fs.path) {
                                                        fk = g(fs.path)
                                                    } else {
                                                        continue
                                                    }
                                                }
                                                if (ce) {
                                                    ce.after(a(fk))
                                                } else {
                                                    if (eg.children().size() > 0) {
                                                        a(fk).prependTo(eg)
                                                    } else {
                                                        a(fk).appendTo(eg)
                                                    }
                                                }
                                                ce = a(fk);
                                                e9.push(a(fk))
                                            }
                                            var fp = 0,
                                                fn = e9.length;
                                            e9.reverse();
                                            for (fp; fp < fn; fp++) {
                                                dq.unshift(e9[fp])
                                            }
                                            e9 = null;
                                            fi.remove();
                                            bN()
                                        }).fail(function(fn, fp, fo) {
                                            if (eB) {
                                                alert("Playlist process failed, database query: " + e8)
                                            }
                                            if (ce) {
                                                ce.remove()
                                            }
                                            dq.shift();
                                            bN()
                                        })
                                    } else {
                                        if (fl == "youtube_single" || fl == "youtube_single_list" || fl == "youtube_playlist") {
                                            ce = fi.data("toremove", "true");
                                            eL.setData({
                                                type: fl,
                                                path: e8
                                            })
                                        } else {
                                            if (fl == "ofm_single") {
                                                ce = fi.data("toremove", "true");
                                                b = [];
                                                b.push({
                                                    id: e8,
                                                    type: fl
                                                });
                                                X()
                                            } else {
                                                if (fl == "ofm_playlist" || fl == "ofm_project") {
                                                    ce = fi.data("toremove", "true");
                                                    c8 = fl;
                                                    Y = e8;
                                                    b = [];
                                                    b1 = 1;
                                                    x()
                                                } else {
                                                    if (eB) {
                                                        alert("Invalid playlist data-type attribute!")
                                                    }
                                                    dq.shift();
                                                    bN();
                                                    return
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function ak() {
            if (eF.length) {
                var e7, e8, e9 = 0,
                    e6 = eF.length,
                    fb, fa;
                for (e9; e9 < e6; e9++) {
                    fb = eF[e9];
                    e7 = a('<li class="playlistItem" data-type="' + fb.type + '"data-mp3="' + fb.mp3 + '" data-ogg="' + fb.ogg + '" data-thumb="' + fb.thumb + '"></li>');
                    fa = fb.mp3;
                    if (!(/\.(mp3)$/i).test(fb.mp3)) {
                        fa += ".mp3"
                    }
                    if (aG) {
                        e7.addClass(e3)
                    }
                    if (fb.url) {
                        e7.attr("data-plink", fb.url)
                    }
                    if (fb.dlink) {
                        if (fb.dlink != true && fb.dlink != "true") {
                            e7.attr("data-dlink", fb.dlink)
                        } else {
                            e7.attr("data-dlink", fa)
                        }
                    }
                    if (fb.download) {
                        if (fb.download != true && fb.download != "true") {
                            e7.attr("data-download", fb.download)
                        } else {
                            e7.attr("data-download", fa)
                        }
                    }
                    if (fb.title) {
                        e7.attr("data-title", fb.title)
                    }
                    if (fb.thumb) {
                        if (fb.thumb.substr(0, 2) == "//") {
                            fb.thumb = "http:" + fb.thumb
                        }
                        e7.attr("data-thumb", fb.thumb)
                    }
                    if (fb.length) {
                        e7.attr("data-length", fb.length)
                    }
                    if (aH == "title") {
                        e8 = a('<a class="playlistNonSelected" href="#">' + fb.title + "</a>").appendTo(e7)
                    } else {
                        if (aH == "thumb") {
                            e8 = a('<a class="playlistNonSelected" href="#"><img src="' + fb.thumb + '" alt="thumb"/></a>').appendTo(e7)
                        } else {
                            if (aH == "all") {
                                e8 = a('<a class="playlistNonSelected" href="#"></a>').appendTo(e7);
                                a('<span class="hap_thumb"><img src="' + fb.thumb + '" alt="thumb"/></span>').appendTo(e8);
                                a('<span class="hap_title"><p>' + fb.title + "</p></span>").appendTo(e8)
                            }
                        }
                    }
                    if (dI) {
                        e8.after(dI)
                    }
                    if (!ce) {
                        e7.appendTo(eg)
                    } else {
                        ce.after(e7);
                        if (ce.data("toremove") == "true") {
                            ce.remove()
                        }
                    }
                    ce = e7
                }
            }
            dq.shift();
            bN()
        }

        function C() {
            if (ee || bJ) {
                var e7 = 0;
                ce = null;
                var e6;
                cY.find("li[class*='playlistItem']").each(function() {
                    e6 = a(this);
                    if (!ce) {
                        if (ej) {
                            e6.appendTo(eg)
                        } else {
                            eg.children().eq(af).before(e6)
                        }
                    } else {
                        ce.after(e6)
                    }
                    ce = e6;
                    e7++
                });
                cY.empty()
            }
            bH();
            dw.css("opacity", 1);
            if (!dS) {
                br()
            }
            ce = null;
            eS = false;
            s();
            if (dr > 0) {
                if (!ee && !bJ) {
                    bK.setPlaylistItems(dr);
                    aj()
                } else {
                    var e8 = bK.getCounter();
                    bK.setPlaylistItems(dr, false);
                    if (af <= e8) {
                        if (!ej) {
                            bK.reSetCounter(e8 + e7)
                        }
                    }
                    if (ev) {
                        ev = false;
                        aj()
                    }
                }
                if (bP) {
                    aW()
                }
            }
            ee = false;
            bJ = false;
            if (dr == 0) {
                if (typeof playlistEmpty !== "undefined") {
                    playlistEmpty(dl, cj)
                }
            }
            if (typeof audioPlayerPlaylistLoaded !== "undefined") {
                audioPlayerPlaylistLoaded(dl, cj)
            }
            bm = true
        }

        function bH() {
            dW = [];
            t = [];
            aR = [];
            if (eg.length == 0) {
                if (eB) {
                    alert("lastPlaylist html element seems to be missing! You could be trying to use addTrack method without having necessary html elements inside componentWrapper. Quitting.")
                }
                return false
            }
            var fi = 0,
                fm, fe, e7 = eg.find("li"),
                fj = e7.length,
                fo, fn, e9, fh, fa, fc, fb, fa, e8, e6, fd, fk;
            aN = 0;
            for (fi; fi < fj; fi++) {
                fe = a(e7[fi]).addClass(e);
                t.push(fe);
                if (ef) {
                    fe.addClass(cI)
                }
                if (bp == "horizontal") {
                    aN += fe.outerWidth(true)
                } else {
                    aN += fe.outerHeight(true)
                }
                fm = fe.find("a[class=playlistNonSelected]");
                if (fm.length == 0) {
                    fm = fe.find("a[class=playlistSelected]")
                }
                fm.off().on("click", ec).attr("data-id", fi);
                aR.push(fm);
                if (c5 && !isMobile) {
                    fm.on("mouseenter", function(fs) {
                        if (!dS || eS) {
                            return false
                        }
                        if (!fs) {
                            var fs = window.event
                        }
                        if (fs.cancelBubble) {
                            fs.cancelBubble = true
                        } else {
                            if (fs.stopPropagation) {
                                fs.stopPropagation()
                            }
                        }
                        var fr = a(fs.currentTarget),
                            fu = fr.attr("data-id");
                        var fp = a(aR[fu]),
                            ft = bK.getCounter(),
                            fq = false;
                        if (ft == fu) {
                            fq = true
                        }
                        if (typeof playlistItemRollover !== "undefined") {
                            playlistItemRollover(dl, cj, fp, fu, fq)
                        }
                        return false
                    }).on("mouseleave", function(fs) {
                        if (!dS || eS) {
                            return false
                        }
                        if (!fs) {
                            var fs = window.event
                        }
                        if (fs.cancelBubble) {
                            fs.cancelBubble = true
                        } else {
                            if (fs.stopPropagation) {
                                fs.stopPropagation()
                            }
                        }
                        var fr = a(fs.currentTarget),
                            fu = fr.attr("data-id");
                        var fp = a(aR[fu]),
                            ft = bK.getCounter(),
                            fq = false;
                        if (ft == fu) {
                            fq = true
                        }
                        if (typeof playlistItemRollout !== "undefined") {
                            playlistItemRollout(dl, cj, fp, fu, fq)
                        }
                        return false
                    })
                }
                fo = "";
                if (fe.attr("data-title") != undefined) {
                    fo = fe.attr("data-title")
                } else {
                    if (aH == "title") {
                        fo = fm.html()
                    } else {
                        if (aH == "thumb") {} else {
                            if (aH == "all") {
                                fo = fm.find("span[class=hap_title]").find("p").html()
                            }
                        }
                    }
                }
                if (dx) {
                    fn = d8(fi) + bi + fo;
                    fm.html(fn)
                }
                fe = a(t[fi]).attr({
                    "data-id": fi,
                    "data-title": fo
                });
                fc = "", fb = "", e9 = "", fh = "", fa = undefined, e8 = null, e6 = null, fd = null, fk = null;
                if (fe.attr("data-mp3") != undefined) {
                    fc = fe.attr("data-mp3")
                }
                if (fe.attr("data-ogg") != undefined) {
                    fb = fe.attr("data-ogg")
                }
                if (fe.attr("data-type") != undefined) {
                    e9 = fe.attr("data-type")
                }
                if (fe.attr("data-origtype") != undefined) {
                    fh = fe.attr("data-origtype")
                }
                if (fe.attr("data-length") != undefined && !dP(fe.attr("data-length"))) {
                    fa = fe.attr("data-length")
                }
                if (e9 == "youtube") {
                    if (fe.attr("data-download") != undefined && !dP(fe.attr("data-download"))) {
                        e8 = fe.attr("data-download")
                    }
                    if (fe.attr("data-dlink") != undefined && !dP(fe.attr("data-dlink"))) {
                        e6 = fe.attr("data-dlink")
                    }
                } else {
                    if (fe.attr("data-download") != undefined) {
                        if (!dP(fe.attr("data-download")) && fe.attr("data-download") != "true") {
                            e8 = fe.attr("data-download")
                        } else {
                            e8 = fc
                        }
                    }
                    if (fe.attr("data-dlink") != undefined) {
                        if (!dP(fe.attr("data-dlink")) && fe.attr("data-dlink") != "true") {
                            e6 = fe.attr("data-dlink")
                        } else {
                            e6 = fc
                        }
                    }
                }
                if (fe.attr("data-plink") != undefined && !dP(fe.attr("data-plink"))) {
                    fd = fe.attr("data-plink")
                }
                if (fe.attr("data-thumb") != undefined && !dP(fe.attr("data-thumb"))) {
                    fk = fe.attr("data-thumb")
                }
                if (!b3) {
                    if (fd) {
                        if (fe.find("a[class=plink]").length == 0) {
                            var fg = a('<a class="plink" href="' + fd + '" target="_blank"><img src="' + e5 + '" alt="purchase"/></a>');
                            fm.after(fg)
                        }
                    }
                    if (e6) {
                        if (fe.find("a[class=dlink]").length == 0) {
                            var fl = a('<a class="dlink" href="#" data-dlink="' + e6 + '"><img src="' + cX + '" alt="download"/></a>');
                            fm.after(fl);
                            if (dP(fe.attr("data-dlink"))) {}
                        }
                    }
                    if (am) {
                        if (fe.find("a[class=premove]").length == 0) {
                            var ff = a('<a class="premove" href="#"><img src="' + cJ + '" alt="remove"/></a>');
                            fm.after(ff)
                        }
                    }
                }
                dW.push({
                    id: fi,
                    type: e9,
                    origtype: fh,
                    title: fo,
                    mp3: fc,
                    ogg: fb,
                    length: fa,
                    download: e8,
                    thumb: fk
                })
            }
            e7 = null;
            dr = dW.length;
            if (!b3) {
                dd();
                if (dE && dO.length) {
                    if (!eg.hasClass("ui-sortable")) {
                        eg.on("sortstart", function(fp, fq) {
                            fq.helper.css("margin-top", e0.scrollTop())
                        });
                        eg.on("sortbeforestop", function(fp, fq) {
                            fq.helper.css("margin-top", 0)
                        });
                        eg.sortable({
                            cursor: "move",
                            update: function(fq, fr) {
                                bH();
                                if (dr > 0) {
                                    bK.setPlaylistItems(dr)
                                }
                                var fp = dw.find("a[class=playlistSelected]").attr("data-id");
                                if (fp) {
                                    bK.reSetCounter(fp);
                                    if (bP) {
                                        aW()
                                    }
                                }
                                if (dr == 1) {
                                    aj()
                                }
                            },
                            receive: function(fp, fq) {
                                if (typeof dropReceive !== "undefined") {
                                    dropReceive(dl, cj)
                                }
                            }
                        })
                    }
                }
                if (ds) {
                    if (bp == "horizontal") {
                        dw.width(aN)
                    }
                    b7(true)
                }
            }
            return true
        }

        function br() {
            dS = true;
            eS = false;
            s();
            setTimeout(function() {
                cA();
                ay();
                dh()
            }, 100);
            if (typeof audioPlayerSetupDone !== "undefined") {
                audioPlayerSetupDone(dl, cj)
            }
        }

        function H() {
            if (bu) {
                return false
            }
            var e8 = aT;
            if (!aT) {
                if (eB) {
                    alert("Invalid data-type for file download function! Quitting.")
                }
                bu = false;
                return false
            }
            var fa = bK.getCounter(),
                e9 = dW[fa].download,
                e7 = eD(fa, false);
            var e6 = O(e8, e7, e9);
            cV(e6.name, e6.path)
        }

        function dd() {
            var e6 = dV ? I : "click";
            aD.find("a[class=dlink]").off().on(e6, function(fd) {
                fd.preventDefault();
                if (bu) {
                    return false
                }
                var e8 = a(this),
                    e7 = e8.closest(".playlistItem"),
                    fb, fe = e7.attr("data-id");
                if (e7.hasClass(cI)) {
                    return false
                }
                if (e7.attr("data-type") != undefined && !dP(e7.attr("data-type"))) {
                    fb = e7.attr("data-type");
                    if (e7.attr("data-origtype") != undefined && !dP(e7.attr("data-origtype"))) {
                        fb = e7.attr("data-origtype")
                    }
                } else {
                    if (eB) {
                        alert("Invalid data-type for file download function! Quitting.")
                    }
                    bu = false;
                    return false
                }
                if (e8.attr("data-dlink") != undefined && !dP(e8.attr("data-dlink"))) {
                    var fc = e8.attr("data-dlink"),
                        fa = eD(fe, false);
                    var e9 = O(fb, fa, fc);
                    cV(e9.name, e9.path)
                }
            });
            aD.find("a[class=plink]").off().on("click", function(e9) {
                var e8 = a(this),
                    e7 = e8.closest(".playlistItem");
                if (e7.hasClass(cI)) {
                    return false
                }
            });
            if (am) {
                aD.find("a[class=premove]").off().on("click", function(e9) {
                    e9.preventDefault();
                    var e8 = a(this),
                        e7 = e8.closest(".playlistItem"),
                        fa = parseInt(e7.attr("data-id"), 10);
                    if (e7.hasClass(cI)) {
                        return false
                    }
                    dl.removeTrack(fa)
                })
            }
        }

        function O(e7, e6, e9) {
            if (e7 == "local" || e7 == "folder") {
                if (e9.indexOf("\\")) {
                    e9 = e9.replace(/\\/g, "/")
                }
                if (!e9.match(/^http([s]?):\/\/.*/)) {
                    var e8 = window.location.href;
                    e8 = e8.substr(0, e8.lastIndexOf("/") + 1);
                    if ((/^\.\.\//i).test(e9)) {
                        e9 = e9.substr(3);
                        if (e8.charAt(e8.length - 1) == "/") {
                            e8 = e8.substr(0, e8.lastIndexOf("/"))
                        }
                        e8 = e8.substr(0, e8.lastIndexOf("/") + 1)
                    }
                    e9 = e8 + e9
                }
                if (!isMobile) {
                    if (e9.lastIndexOf("/") > 0) {
                        e6 = e9.substr(e9.lastIndexOf("/") + 1)
                    } else {
                        e6 = e9
                    }
                }
            } else {
                if (e7 == "soundcloud") {
                    e9 = e9.replace(/\/stream\\?/, "/download").replace(/\.mp3/, "")
                }
            }
            e6 = e6.replace(/[^A-Z0-9\-\_\.]+/ig, "_");
            if (!(/\.(mp3)$/i).test(e6)) {
                e6 += ".mp3"
            }
            return {
                name: e6,
                path: e9
            }
        }

        function cV(e7, e8) {
            if (!isMobile) {
                dl_iframe.attr("src", hap_source_path + "dl.php?path=" + e8 + "&name=" + e7)
            } else {
                bu = true;
                if (z) {
                    if (!cU) {
                        db = aC();
                        if (db) {
                            cU = true
                        }
                    }
                    if (db) {
                        ei(db, e7, e8)
                    } else {
                        bu = false
                    }
                } else {
                    var e6 = aC();
                    if (e6) {
                        ei(e6, e7, e8)
                    } else {
                        bu = false
                    }
                }
            }
        }

        function ei(e6, e7, e9) {
            var e8 = "mail=" + e6 + "&name=" + e7 + "&path=" + e9;
            a.ajax({
                type: "POST",
                url: hap_source_path + "mail.php",
                data: e8
            }).done(function(fa) {
                bu = false
            }).fail(function(fa, fc, fb) {
                if (eB) {
                    alert("Send email error: " + fa.responseText)
                }
                eQ();
                bu = false
            });
            w.css({
                marginTop: -w.height() / 2 + "px",
                display: "block"
            }).stop().animate({
                opacity: 1
            }, {
                duration: 500
            });
            if (ai) {
                clearTimeout(ai)
            }
            ai = setTimeout(eQ, c9)
        }

        function eQ() {
            if (ai) {
                clearTimeout(ai)
            }
            w.stop().animate({
                opacity: 0
            }, {
                duration: 500,
                complete: function() {
                    w.css("display", "none")
                }
            })
        }

        function aC() {
            var e6 = prompt("Please enter your email address where download link will be sent:");
            var e7 = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            while (!e7.test(e6) || dP(e6)) {
                if (e6 == null) {
                    break
                }
                e6 = prompt("Please enter a valid email address:")
            }
            return e6
        }

        function dX() {
            a(".hap_text_link").each(function() {
                var e7 = a(this),
                    e6 = e7.attr("href");
                if (typeof e6 !== "undefined" && e6 !== false) {
                    if (e6.toLowerCase().indexOf(".mp3") > -1) {
                        e7.prepend('<img class="play_link" src="' + ew + '"/>')
                    }
                }
            });
            a(".hap_text_link, .hap_image_link").click(function(e8) {
                if (!dS) {
                    return false
                }
                if (eS) {
                    return false
                }
                var e7 = a(this),
                    e6 = e7.attr("href");
                if (typeof e6 === "undefined" || e6 === false) {
                    return false
                }
                if (d && d == e6) {
                    return bh()
                } else {
                    cw();
                    bK.reSetCounter();
                    d = e6;
                    k = e7;
                    d6 = true;
                    if (cF) {
                        cF.attr("src", ew)
                    }
                    if (e7.hasClass("hap_text_link")) {
                        cF = e7.find("img").attr("src", ad)
                    }
                    d7 = d;
                    cT = d7.substr(0, d7.lastIndexOf(".")) + ".ogg";
                    a4 = true;
                    if (!cp) {
                        if (typeof cc(f) !== "undefined") {
                            cc(f).pb_setAutoplay(true)
                        }
                    }
                    bb();
                    d6 = false;
                    return false
                }
            })
        }

        function X() {
            if (b.length) {
                T(b.shift())
            } else {
                if (eF.length == 0) {
                    if (ce && ce.data("toremove") == "true") {
                        ce.remove()
                    }
                }
                if (eF.length > aV) {
                    eF = eF.slice(0, aV)
                }
                ak()
            }
        }

        function T(e9) {
            var fa = e9.id,
                e8 = e9.type;
            var e7 = "http://api.official.fm/tracks/" + fa + "?fields=streaming,cover&api_version=2",
                e6 = bn + "?url=" + encodeURIComponent(e7);
            a.ajax({
                url: e6,
                dataType: "html",
                cache: false
            }).done(function(fg) {
                var fd = JSON.parse(fg).contents,
                    fe = {},
                    fc, fb, ff;
                if (fd.track && fd.track.streaming && fd.track.streaming.http) {
                    fc = fd.track;
                    fe.type = e8;
                    fe.length = fc.duration ? fc.duration : null;
                    fe.mp3 = fc.streaming.http;
                    fe.ogg = fc.streaming.http;
                    fb = fc.artist ? fc.artist : "Official Fm artist";
                    ff = fc.title ? fc.title : "Official Fm track";
                    fe.title = fb + " - " + ff;
                    if (bG) {
                        fe.url = bG
                    }
                    if (eK) {
                        fe.dlink = eK
                    }
                    if (dT) {
                        fe.download = dT
                    }
                    if (fc.cover.urls.small) {
                        fe.thumb = fc.cover.urls.small
                    } else {
                        if (aL) {
                            fe.thumb = aL
                        }
                    }
                    eF.push(fe);
                    X()
                } else {
                    X()
                }
            }).fail(function(fb, fd, fc) {
                if (eB) {
                    alert("Playlist process failed, ofm: " + fa)
                }
                X()
            })
        }

        function bc() {
            if (bB > 1) {
                b1 += 1;
                if (b1 <= bB && b.length < aV) {
                    x()
                } else {
                    if (b.length) {
                        X()
                    } else {
                        dq.shift();
                        bN()
                    }
                }
            } else {
                if (b.length) {
                    X()
                } else {
                    if (eF.length == 0) {
                        if (ce && ce.data("toremove") == "true") {
                            ce.remove()
                        }
                    }
                    dq.shift();
                    bN()
                }
            }
        }

        function x() {
            if (c8 == "ofm_playlist") {
                var e7 = "http://api.official.fm/playlists/" + Y + "/tracks?api_version=2&page=" + b1 + ""
            } else {
                var e7 = "http://api.official.fm/projects/" + Y + "/tracks?fields=cover&api_version=2&page=" + b1 + ""
            }
            var e6 = bn + "?url=" + encodeURIComponent(e7);
            a.ajax({
                url: e6,
                dataType: "html",
                cache: false
            }).done(function(fd) {
                var fc = JSON.parse(fd).contents;
                bB = fc.total_pages;
                if (fc.tracks && fc.tracks.length) {
                    var fa = 0,
                        e8 = fc.tracks.length,
                        e9, fb, fe;
                    if (e8 > aV) {
                        e8 = aV
                    }
                    for (fa; fa < e8; fa++) {
                        e9 = fc.tracks[fa].track;
                        if (e9.url) {
                            fb = e9.url.substr(e9.url.lastIndexOf("/") + 1);
                            fe = fb.substr(0, fb.indexOf("?"));
                            b.push({
                                id: fe,
                                type: c8
                            })
                        }
                    }
                    bc()
                } else {
                    bc()
                }
            }).fail(function(e8, fa, e9) {
                if (eB) {
                    alert("Playlist process failed, ofm: " + Y)
                }
                bc()
            })
        }

        function cP() {
            if (!a1) {
                if (aD.find("div[class='youtubeIframeMain']").length == 0) {
                    Z = a("<div/>").css({
                        display: "block",
                        left: -10000 + "px"
                    }).addClass("youtubeIframeMain").appendTo(aD)
                } else {
                    Z = aD.find("div[class='youtubeIframeMain']")
                }
                var e6 = {
                    autoPlay: es,
                    defaultVolume: a2,
                    mediaPath: d7,
                    youtubeHolder: Z,
                    youtubeChromeless: er,
                    isMobile: isMobile,
                    initialAutoplay: bt,
                    quality: null,
                    protocol: dz
                };
                ea = a.youtubePlayer(e6, ac);
                a(ea).on("ap_YoutubePlayer.YT_READY", function() {
                    if (!R) {
                        Z.css("left", -10000 + "px")
                    }
                    c0 = true
                });
                a(ea).on("ap_YoutubePlayer.START_PLAY", function() {
                    if (dg) {
                        clearInterval(dg)
                    }
                    dg = setInterval(eJ, bf);
                    if (cB) {
                        ea.stop();
                        ea.initVideo(d7);
                        cB = false
                    }
                    if (!by && isMobile) {
                        c7("off");
                        by = true;
                        dS = true
                    }
                });
                a(ea).on("ap_YoutubePlayer.END_PLAY", function() {
                    dm()
                });
                a(ea).on("ap_YoutubePlayer.STATE_PLAYING", function() {
                    cq()
                });
                a(ea).on("ap_YoutubePlayer.STATE_PAUSED", function() {
                    if (isMobile) {
                        if (y == "iPhone" || y == "iPod") {
                            if (ax) {
                                ax = false;
                                az("off")
                            }
                        } else {
                            N()
                        }
                    } else {
                        N()
                    }
                });
                a1 = true
            } else {
                if (isMobile) {
                    if (!by) {
                        dS = false;
                        cB = true;
                        c7("on")
                    } else {
                        ea.initVideo(d7)
                    }
                } else {
                    ea.initVideo(d7)
                }
            }
            a5 = true;
            cG = true
        }

        function c7(e6) {
            if (e6 == "on") {
                R = true;
                Z.css({
                    top: 0 + "px",
                    left: 0 + "px"
                })
            } else {
                Z.css("left", -10000 + "px");
                R = null
            }
        }
        this.flashVideoPause = function() {
            az("off");
            ax = false;
            N()
        };
        this.flashVideoResume = function() {
            B("off");
            ax = true;
            cq()
        };
        this.flashVideoEnd = function() {
            dm()
        };
        this.flashVideoStart = function() {
            B("off");
            ax = true;
            cG = true;
            cq()
        };
        this.flashYoutubeData = function(e9, e6, e7, e8) {
            if (!dA) {
                if (v(e9) && v(e6)) {
                    if (df) {
                        df.width((e9 / e6) * aY)
                    }
                }
                if (v(e7) && v(e8)) {
                    if (b5) {
                        b5.width((e7 / e8) * aY)
                    }
                }
            } else {
                if (v(e9) && v(e6)) {
                    if (typeof cc(h) !== "undefined") {
                        cc(h).pb_drawLoadbar(e9 / e6)
                    }
                }
                if (v(e7) && v(e8)) {
                    bM = e7 / e8;
                    if (!b0) {
                        if (typeof cc(h) !== "undefined") {
                            cc(h).pb_drawSeekbar(e7 / e8)
                        }
                    }
                }
            }
            if (v(e7) && v(e8)) {
                if (o) {
                    o.html(b4(e7) + bw)
                }
                if (aw) {
                    aw.html(F(e8))
                }
            }
        };
        this.flashAudioData = function(fb, e7, e8, fa) {
            var e9 = fb / e7;
            if (!dA) {
                if (!b0 && b5) {
                    b5.width((e8 / fa) * aY)
                }
                if (e9 !== null) {
                    var e6 = e9 * aY;
                    if (e6 > aY) {
                        e6 = aY
                    }
                    if (df) {
                        df.width(e6)
                    }
                }
                if (v(e8) && v(fa)) {
                    if (o) {
                        o.html(b4(e8) + bw)
                    }
                    if (aw) {
                        aw.html(F(fa))
                    }
                }
            } else {
                if (aJ) {
                    if (v(e9)) {
                        at(e9)
                    }
                    if (v(e8) && v(fa)) {
                        bM = e8 / fa;
                        if (!b0 && ax) {
                            cd(e8 / fa)
                        }
                    }
                } else {
                    if (e9 !== null) {
                        if (typeof cc(h) !== "undefined") {
                            cc(h).pb_drawLoadbar(e9)
                        }
                    }
                    if (v(e8) && v(fa)) {
                        bM = e8 / fa;
                        if (!b0) {
                            if (typeof cc(h) !== "undefined") {
                                cc(h).pb_drawSeekbar(e8 / fa)
                            }
                        }
                    }
                }
            }
        };
        this.flashAudioEnd = function() {
            dm()
        };
        this.flashCircleToggle = function(e6) {
            bh()
        };
        this.flashCircleOverLoader = function(e6) {
            d3.css("display", "block");
            dv(e6)
        };
        this.flashCircleOutLoader = function() {
            d3.css("display", "none")
        };
        this.flashCircleSeek = function(e6) {
            cO(e6)
        };
        this.embedFlash = function() {
            if (!c1) {
                var e6 = dH.substr(1);
                embedFlashMain(e6);
                var e6 = f.substr(1);
                embedFlashAudio(e6);
                if (dA) {
                    var e6 = h.substr(1);
                    embedFlashCircle(e6)
                }
            } else {
                if (ac.useOnlyMp3Format && !dt) {
                    var e6 = f.substr(1);
                    embedFlashAudio(e6)
                }
            }
        };

        function dQ() {
            var e6 = dH.substr(1);
            embedFlashMain(e6);
            var e6 = f.substr(1);
            embedFlashAudio(e6);
            if (typeof cc(dH) !== "undefined") {
                aQ = setInterval(ed, bT)
            } else {
                if (eB) {
                    alert("Problems with flash initialization (startFlashInit)! Flash for youtube not initialized! Sound_id: " + cj)
                }
                eM()
            }
        }

        function ed() {
            if (cc(dH).setData != undefined) {
                if (aQ) {
                    clearInterval(aQ)
                }
                cc(dH).setData(ac);
                aD.find(".flashMain").css("left", -10000 + "px");
                eM()
            }
        }

        function eM() {
            if (typeof cc(f) !== "undefined") {
                aQ = setInterval(ba, bT)
            } else {
                if (eB) {
                    alert("Problems with flash initialization (checkFlashSound)! Flash audio backup not initialized! Sound_id: " + cj)
                }
                cv()
            }
        }

        function ci() {
            var e7 = f.substr(1);
            embedFlashAudio(e7);
            var e6 = setTimeout(function() {
                if (e6) {
                    clearTimeout(e6)
                }
                if (typeof cc(f) !== "undefined") {
                    aQ = setInterval(cl, bT)
                } else {
                    if (eB) {
                        alert("Problems with flash initialization (checkFlashSound_b)! Flash audio backup not initialized! Sound_id: " + cj)
                    }
                    ez()
                }
            }, 500)
        }

        function ba() {
            if (cc(f).setData != undefined) {
                if (aQ) {
                    clearInterval(aQ)
                }
                cc(f).setData(ac);
                aD.find(".flashAudio").css("left", -10000 + "px");
                cv()
            }
        }

        function cl() {
            if (cc(f).setData != undefined) {
                if (aQ) {
                    clearInterval(aQ)
                }
                cc(f).setData(ac);
                aD.find(".flashAudio").css("left", -10000 + "px");
                ez()
            }
        }

        function cv() {
            if (dA) {
                var e6 = h.substr(1);
                embedFlashCircle(e6);
                if (typeof cc(h) !== "undefined") {
                    aQ = setInterval(a9, bT)
                } else {
                    if (eB) {
                        alert("Problems with flash initialization (checkFlashCircle)! Flash circle backup (canvas support is false) not initialized! Sound_id: " + cj)
                    }
                    ez()
                }
            } else {
                a(".circleMain").remove();
                ez()
            }
        }

        function a9() {
            if (cc(h).setData != undefined) {
                if (aQ) {
                    clearInterval(aQ)
                }
                cc(h).setData(cf);
                ez()
            }
        }

        function cc(e6) {
            if (e6.charAt(0) == "#") {
                e6 = e6.substr(1)
            }
            return (navigator.appName.indexOf("Microsoft") != -1) ? window[e6] : document[e6]
        }

        function ep(e6) {
            if (dP(L)) {
                alert("soundcloudApiKey has not been set! Skipping Soundcloud url.");
                dq.shift();
                bN();
                return false
            }
            if (/\/favorites$/.test(e6)) {
                e6 = e6.replace(/\/favorites$/, "/likes")
            }
            var e7 = de(e6, L);
            a.ajax({
                url: e7,
                dataType: "jsonp",
                cache: false
            }).done(function(fb) {
                var fc, e8, fa, e9;
                if (fb.tracks) {
                    e8 = fb.tracks.length;
                    if (e8 > eO) {
                        e8 = eO
                    }
                    for (fa = 0; fa < e8; fa++) {
                        if (fb.tracks[fa].streamable && fb.tracks[fa].stream_url) {
                            eF.push(eY(fb.tracks[fa]))
                        } else {
                            e8 += 1;
                            if (e8 > fb.tracks.length) {
                                e8 = fb.tracks.length
                            }
                            continue
                        }
                    }
                    if (eF.length > eO) {
                        eF = eF.slice(0, eO)
                    }
                    ak()
                } else {
                    if (fb.duration) {
                        fb.permalink_url = e6;
                        if (fb.streamable && fb.stream_url) {
                            eF.push(eY(fb))
                        }
                        if (eF.length > eO) {
                            eF = eF.slice(0, eO)
                        }
                        ak()
                    } else {
                        if (fb.username) {
                            if (/likes/.test(e6)) {
                                eu = fb.uri + "/likes";
                                ep(eu)
                            } else {
                                if (/favorites/.test(e6)) {
                                    eu = fb.uri + "/favorites";
                                    ep(eu)
                                } else {
                                    eu = fb.uri + "/tracks";
                                    ep(eu)
                                }
                            }
                        } else {
                            if (a.isArray(fb)) {
                                e8 = fb.length;
                                if (e8 > eO) {
                                    e8 = eO
                                }
                                for (fa = 0; fa < e8; fa++) {
                                    if (fb[fa].streamable && fb[fa].stream_url) {
                                        eF.push(eY(fb[fa]))
                                    } else {
                                        e8 += 1;
                                        if (e8 > fb.length) {
                                            e8 = fb.length
                                        }
                                        continue
                                    }
                                }
                                if (e8 == bz) {
                                    eX += bz;
                                    if (eX < eO) {
                                        ep(eu)
                                    } else {
                                        if (eF.length > eO) {
                                            eF = eF.slice(0, eO)
                                        }
                                        ak()
                                    }
                                } else {
                                    if (eF.length > eO) {
                                        eF = eF.slice(0, eO)
                                    }
                                    ak()
                                }
                            } else {
                                if (fb.kind && fb.kind == "group") {
                                    eu = fb.uri + "/tracks";
                                    ep(eu)
                                } else {
                                    dq.shift();
                                    bN()
                                }
                            }
                        }
                    }
                }
            }).fail(function(e8, fa, e9) {
                if (eB) {
                    alert("Playlist process failed, soundcloud: " + e6)
                }
                dq.shift();
                bN()
            })
        }

        function eY(e6) {
            var e7 = {};
            e7.type = "soundcloud";
            if (e6.duration) {
                e7.length = e6.duration
            }
            e7.mp3 = e6.stream_url + (/\?/.test(e6.stream_url) ? "&" : "?") + "consumer_key=" + L;
            e7.ogg = "";
            e7.title = e6.title;
            if (bG) {
                e7.url = bG
            }
            if (e6.downloadable && e6.download_url) {
                if (eK) {
                    e7.dlink = eK
                }
                if (dT) {
                    e7.download = dT
                }
            } else {
                if (eK && eK != true) {
                    if (eK != "true") {
                        e7.dlink = eK
                    }
                }
                if (dT && dT != true) {
                    if (dT != "true") {
                        e7.download = dT
                    }
                }
            }
            if (e6.artwork_url) {
                e7.thumb = e6.artwork_url
            } else {
                if (aL) {
                    e7.thumb = aL
                }
            }
            return e7
        }

        function de(e6, e7) {
            var e9 = false;
            var e8 = e9 ? "sandbox-soundcloud.com" : "soundcloud.com";
            return (/api\./.test(e6) ? e6 + "?" : "http://api." + e8 + "/resolve?url=" + e6 + "&") + "format=json&offset=" + eX + "&consumer_key=" + e7 + "&callback=?"
        }

        function cz() {
            var e6 = eF[bQ].mp3 + "?rand=" + (Math.random() * 99999999);
            ID3.loadTags(e6, function() {
                var e8 = ID3.getAllTags(e6);
                if (e8.title) {
                    eF[bQ].title = e8.title
                }
                if (e8.artist) {
                    eF[bQ].artist = e8.artist
                }
                if (e8.album) {
                    eF[bQ].album = e8.album
                }
                var fa = e8.picture;
                if (fa) {
                    var fb = "",
                        e9 = 0,
                        e7 = fa.data.length;
                    for (e9; e9 < e7; e9++) {
                        fb += String.fromCharCode(fa.data[e9])
                    }
                    eF[bQ].thumb = "data:" + fa.format + ";base64," + window.btoa(fb)
                }
                bQ++;
                if (bQ < eF.length) {
                    cz()
                } else {
                    ak()
                }
            }, {
                tags: ["title", "artist", "album", "picture"],
                onError: function(e7) {
                    if (e7.error === "xhr") {}
                }
            })
        }

        function bb() {
            dN();
            ao()
        }

        function eJ() {
            if (c1) {
                var e6 = ea.getCurrentTime(),
                    e7 = ea.getDuration();
                a7 = ea.getVideoBytesLoaded() / ea.getVideoBytesTotal();
                if (v(e6) && v(e7)) {
                    aq = false;
                    o.html(b4(e6) + bw);
                    aw.html(F(e7));
                    if (!dA) {
                        if (v(a7)) {
                            df.width(a7 * aY)
                        }
                        if (!b0) {
                            b5.width((e6 / e7) * aY)
                        }
                    } else {
                        if (aJ) {
                            if (v(a7)) {
                                at(a7)
                            }
                            bM = e6 / e7;
                            if (!b0 && ax) {
                                if (!d4) {
                                    cd(e6 / e7)
                                }
                            }
                        } else {}
                    }
                } else {
                    aq = true
                }
            }
        }

        function ap() {
            var e7 = eI.currentTime,
                e8 = eI.duration;
            if ((eI.buffered != undefined) && (eI.buffered.length != 0) && v(e8)) {
                a7 = (eI.buffered.end(0) / e8)
            }
            if (v(e7) && v(e8)) {
                if (o) {
                    o.html(b4(e7) + bw)
                }
                if (aw) {
                    aw.html(F(e8))
                }
            }
            if (!dA) {
                if (v(a7)) {
                    var e6 = a7 * aY;
                    if (e6 > aY) {
                        e6 = aY
                    }
                    if (df) {
                        df.width(e6)
                    }
                }
                if (v(e7) && v(e8)) {
                    if (!b0 && b5) {
                        b5.width((e7 / e8) * aY)
                    }
                }
            } else {
                if (aJ) {
                    if (v(a7)) {
                        at(a7)
                    }
                    if (v(e7) && v(e8)) {
                        bM = e7 / e8;
                        if (!b0 && ax) {
                            cd(e7 / e8)
                        }
                    }
                } else {}
            }
        }

        function dm() {
            if (typeof audioPlayerSoundEnd !== "undefined") {
                audioPlayerSoundEnd(dl, cj, bK.getCounter())
            }
            cw();
            bK.advanceHandler(1, true)
        }

        function cq() {
            if (!b2) {
                if (typeof audioPlayerSoundStart !== "undefined") {
                    audioPlayerSoundStart(dl, cj, bK.getCounter())
                }
                b2 = true
            }
            if (typeof audioPlayerSoundPlay !== "undefined") {
                audioPlayerSoundPlay(dl, cj, bK.getCounter())
            }
            if (dA && aJ) {
                cm()
            }
        }

        function N() {
            if (typeof audioPlayerSoundPause !== "undefined") {
                audioPlayerSoundPause(dl, cj, bK.getCounter())
            }
        }

        function ao() {
            if (aT == "youtube") {
                if (c1) {
                    cP();
                    if (isMobile && !by && a4) {
                        dS = false;
                        c7("on")
                    }
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        cc(dH).pb_play(d7, 0, 100, 100, "youtube", a4);
                        cG = true
                    }
                    c0 = true;
                    a5 = true
                }
            } else {
                if (cp) {
                    if (!eT) {
                        var e6 = "";
                        if (ey) {
                            e6 += '<audio class="hap_audio_cont" preload="auto">'
                        } else {
                            e6 += '<audio class="hap_audio_cont" preload="none">'
                        }
                        e6 += "</audio>";
                        S.html(e6);
                        en = S.find(".hap_audio_cont");
                        eI = en[0];
                        eI.volume = a2;
                        eT = true
                    }
                    if (dt) {
                        eI.src = d7
                    } else {
                        if (a8) {
                            eI.src = cT
                        }
                    }
                    if (a4) {
                        eI.load();
                        eI.play()
                    }
                    en.on("ended", function(e7) {
                        dm()
                    }).on("pause", function(e7) {
                        N()
                    }).on("play", function(e7) {
                        if (dg) {
                            clearInterval(dg)
                        }
                        dg = setInterval(ap, bf);
                        cq()
                    }).on("canplay", function(e7) {
                        if (d2) {
                            if (eI.seekable && eI.seekable.length > 0) {
                                eI.currentTime = d2 * eI.duration
                            }
                            d2 = null
                        }
                    }).on("canplaythrough", function(e7) {}).on("loadedmetadata", function(e7) {}).on("error", function(e7) {}).on("abort", function(e7) {}).on("stalled", function(e7) {}).on("suspend", function(e7) {});
                    if (dg) {
                        clearInterval(dg)
                    }
                    dg = setInterval(ap, bf)
                } else {
                    if (typeof cc(f) !== "undefined") {
                        cc(f).pb_initAudio(d7)
                    }
                }
            }
            if (a4) {
                ax = true;
                B("off")
            } else {
                ax = false;
                az("off")
            }
            dh();
            if (aT != "youtube") {
                cG = true
            }
            if (!isMobile && a4 && ea) {
                ea.setAutoPlay(true)
            }
            a4 = true
        }

        function d0() {
            if (c1) {
                a(".flashMain").remove();
                a(".circleMain").remove();
                if (!cp) {
                    ci()
                } else {
                    a(".flashAudio").remove();
                    ez()
                }
            } else {
                dQ()
            }
        }

        function ez() {
            el();
            dX();
            if (dG) {
                D(dG)
            } else {
                if (!dS) {
                    br()
                }
            }
        }
        if (cS) {
            aE.keyup(function(e7) {
                if (!dS || eS) {
                    return false
                }
                if (!e7) {
                    var e7 = window.event
                }
                if (e7.cancelBubble) {
                    e7.cancelBubble = true
                } else {
                    if (e7.stopPropagation) {
                        e7.stopPropagation()
                    }
                }
                var e6 = e7.keyCode;
                if (e6 == 37) {
                    dl.previousAudio()
                } else {
                    if (e6 == 39) {
                        dl.nextAudio()
                    } else {
                        if (e6 == 32) {
                            dl.toggleAudio()
                        } else {
                            if (e6 == 77) {
                                cW();
                                dh()
                            }
                        }
                    }
                }
                return false
            })
        }
        e0.resize(function() {
            if (!dS || eS) {
                return false
            }
            if (cC) {
                clearTimeout(cC)
            }
            cC = setTimeout(cA, bL)
        });

        function cA() {
            if (!dA) {
                aY = aF.width();
                if (v(a7) && df) {
                    df.width(a7 * aY)
                }
                if (!b0 && b5) {
                    var e6, e7;
                    if (aT == "youtube") {} else {
                        if (cp) {
                            if (eI) {
                                e6 = eI.currentTime, e7 = eI.duration
                            }
                        } else {
                            if (typeof cc(f) !== "undefined") {
                                try {
                                    e6 = cc(f).pb_getFlashPosition, e7 = cc(f).pb_getFlashDuration()
                                } catch (e8) {}
                            }
                        }
                        try {
                            if (e6 && v(e6) && e7 && v(e7)) {
                                b5.width((e6 / e7) * aY)
                            }
                        } catch (e8) {}
                    }
                }
            }
            if (ds && !b3) {
                b7()
            }
            if (dU && a3) {
                a3.checkSize()
            }
        }

        function s() {
            aK.css("display", "none")
        }

        function dJ() {
            aK.css("display", "block")
        }

        function bg() {
            if (dg) {
                clearInterval(dg)
            }
            if (dU && a3) {
                a3.deactivate()
            }
            cK.html(bC);
            o.html(bD + bw);
            aw.html(cb);
            if (!dA) {
                b5.width(0);
                df.width(0)
            } else {
                if (aJ) {
                    bM = 0;
                    V.clearRect(0, 0, n, eH);
                    ca.clearRect(0, 0, n, eH)
                } else {}
            }
            az("off");
            au.css("display", "none")
        }

        function c() {
            if (dg) {
                clearInterval(dg)
            }
            if (!bP) {
                if (dU && a3) {
                    a3.deactivate()
                }
                cK.html(bC)
            }
            o.html(bD + bw);
            aw.html(cb);
            if (!dA) {
                b5.width(0);
                df.width(0)
            } else {
                if (aJ) {
                    bM = 0;
                    V.clearRect(0, 0, n, eH);
                    ca.clearRect(0, 0, n, eH)
                } else {}
            }
            az("off");
            au.css("display", "none")
        }
        this.setPlayIcon = function() {
            if (cF && cF.hasClass("play_link")) {
                cF.attr("src", ew)
            }
            ax = false
        };

        function az(e6) {
            if (e6 == "on") {
                aD.find(".controls_toggle").find("img").attr("src", bs)
            } else {
                aD.find(".controls_toggle").find("img").attr("src", dC)
            }
            if (cF && cF.hasClass("play_link")) {
                cF.attr("src", ew)
            }
            if (dA) {
                if (aJ) {
                    V.clearRect(0, 0, n, eH);
                    cd(bM);
                    cm()
                } else {
                    if (typeof cc(h) !== "undefined") {
                        cc(h).pb_toggle_icon("play")
                    }
                }
            }
        }

        function B(e6) {
            if (e6 == "on") {
                aD.find(".controls_toggle").find("img").attr("src", cQ)
            } else {
                aD.find(".controls_toggle").find("img").attr("src", eq)
            }
            if (cF && cF.hasClass("play_link")) {
                if (k.hasClass("hap_text_link")) {
                    cF.attr("src", ad)
                }
            }
            if (dA) {
                if (aJ) {
                    V.clearRect(0, 0, n, eH);
                    cd(bM);
                    cm()
                } else {
                    if (typeof cc(h) !== "undefined") {
                        cc(h).pb_toggle_icon("pause")
                    }
                }
            }
        }

        function v(e6) {
            return !isNaN(parseFloat(e6)) && isFinite(e6)
        }

        function b4(e6) {
            e6 = Math.round(e6);
            minutes = Math.floor(e6 / 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
            e6 = Math.floor(e6 % 60);
            e6 = (e6 >= 10) ? e6 : "0" + e6;
            return minutes + ":" + e6
        }

        function F(e6) {
            e6 = Math.round(e6);
            minutes = Math.floor(e6 / 60);
            minutes = (minutes >= 10) ? minutes : "0" + minutes;
            e6 = Math.floor(e6 % 60);
            e6 = (e6 >= 10) ? e6 : "0" + e6;
            return minutes + ":" + e6
        }

        function aW(e7) {
            if (typeof(e7) === "string") {
                if (dx && bK && bK.getCounter() != -1) {
                    var e8 = bK.getCounter();
                    var e6 = d8(dW[e8].id) + bi + e7
                } else {
                    var e6 = e7
                }
            } else {
                if (typeof(e7) === "number") {
                    if (!bK) {
                        return false
                    }
                    if (e7 < 0 || e7 > dr - 1) {
                        return false
                    } else {
                        var e8 = bK.getCounter(),
                            e6 = eD(e8)
                    }
                } else {
                    if (!bK) {
                        return false
                    }
                    var e8 = bK.getCounter(),
                        e6 = eD(e8)
                }
            }
            if (dU && a3) {
                a3.input(e6);
                a3.activate()
            } else {
                if (cK) {
                    cK.html(e6)
                }
            }
        }

        function eD(e7, e6) {
            if (typeof e6 === "undefined" || e6 === null) {
                e6 = true
            }
            if (!dW[e7] || !dW[e7].title || dP(dW[e7].title)) {
                return bC
            }
            if (e6) {
                if (dx) {
                    return d8(dW[e7].id) + bi + dW[e7].title
                } else {
                    return dW[e7].title
                }
            } else {
                return dW[e7].title
            }
        }

        function cg(e6) {
            e6 = e6.replace(/\\'/g, "'");
            e6 = e6.replace(/\\"/g, '"');
            e6 = e6.replace(/\\0/g, "\0");
            e6 = e6.replace(/\\\\/g, "\\");
            return e6
        }

        function d8(e6) {
            var e7;
            if (e6 < 9) {
                e7 = "0" + (e6 + 1)
            } else {
                e7 = e6 + 1
            }
            return e7
        }

        function cN(e6) {
            a(e6).each(function() {
                a(this).attr("unselectable", "on").css({
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none",
                    "user-select": "none"
                }).each(function() {
                    this.onselectstart = function() {
                        return false
                    }
                })
            })
        }

        function d5(e9) {
            var e7 = [],
                fb = [],
                fa = 0;
            for (fa; fa < e9; fa++) {
                e7[fa] = fa
            }
            var e8 = 0,
                e6;
            for (e8; e8 < e9; e8++) {
                e6 = Math.round(Math.random() * (e7.length - 1));
                fb[e8] = e7[e6];
                e7.splice(e6, 1)
            }
            return fb
        }

        function ag(e7) {
            var e6 = [],
                e8 = 0;
            for (e8; e8 < e7; e8++) {
                e6[e8] = e8
            }
            return e6
        }

        function eW(e6, e8) {
            var e7 = e6.length;
            while (e7--) {
                if (RegExp(e6[e7]).test(e8)) {
                    return true
                }
            }
            return false
        }

        function cn(e6, e7, e8) {
            if (e7 == "title") {
                e6.sort(function(fa, e9) {
                    return fa.title == e9.title ? 0 : fa.title < e9.title ? -1 : 1
                })
            } else {
                if (e7 == "type") {
                    e6.sort(function(fa, e9) {
                        return fa.type == e9.type ? 0 : fa.type < e9.type ? -1 : 1
                    })
                }
            }
            if (e8) {
                e6.reverse()
            }
        }

        function dP(e6) {
            if (!e6) {
                return true
            }
            return e6.replace(/^\s+|\s+$/g, "").length == 0
        }

        function cL(e7) {
            var e6 = e7.split(":");
            return seconds = (+e6[0]) * 60 * 60 + (+e6[1]) * 60 + (+e6[2])
        }

        function di(e9) {
            var e8 = e9.split(":"),
                e7 = 0,
                e6 = 1;
            while (e8.length > 0) {
                e7 += e6 * parseInt(e8.pop());
                e6 *= 60
            }
            return e7
        }

        function dK(e6) {
            if (window.ActiveXObject && window.GetObject) {
                var e7 = new ActiveXObject("Microsoft.XMLDOM");
                e7.loadXML(e6);
                return e7
            }
            if (window.DOMParser) {
                return new DOMParser().parseFromString(e6, "text/xml")
            } else {
                throw new Error("No XML parser available")
            }
        }

        function aP(e6) {
            var e7 = e6.firstChild;
            while (e7 != null && e7.nodeType == 3) {
                e7 = e7.nextSibling
            }
            return e7
        }

        function bI(e6) {
            return a("<div/>").html(e6).text()
        }

        function A(e7, e6) {
            return (e6 - e7)
        }

        function U(e6) {
            if (typeof(e6) === "string") {
                switch (e6.toLowerCase()) {
                    case "true":
                    case "yes":
                    case "1":
                        return true;
                    case "false":
                    case "no":
                    case "0":
                    case null:
                        return false;
                    default:
                        return Boolean(e6)
                }
            } else {
                if (typeof(e6) === "boolean") {
                    return Boolean(e6)
                }
            }
        }

        function av() {
            var e6 = document.createElement("canvas");
            return !!(e6.getContext && e6.getContext("2d"))
        }
        this.playAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (ax) {
                return false
            }
            if (!cG) {
                return false
            }
            if (aT == "youtube") {
                if (!c0) {
                    return false
                }
                if (c1) {
                    ea.togglePlayback()
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        cc(dH).pb_togglePlayback()
                    }
                }
            } else {
                if (cp) {
                    if (eI) {
                        eI.play()
                    }
                } else {
                    if (typeof cc(f) !== "undefined") {
                        cc(f).pb_play()
                    }
                }
            }
            B("off");
            ax = true;
            cG = true
        };
        this.pauseAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (!ax) {
                return false
            }
            if (!cG) {
                return false
            }
            if (aT == "youtube") {
                if (!c0) {
                    return false
                }
                if (c1) {
                    ea.togglePlayback()
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        cc(dH).pb_togglePlayback()
                    }
                }
            } else {
                if (cp) {
                    if (eI) {
                        eI.pause()
                    }
                } else {
                    if (typeof cc(f) !== "undefined") {
                        cc(f).pb_pause()
                    }
                }
            }
            az("off");
            ax = false
        };
        this.toggleAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (!cG) {
                return false
            }
            bh()
        };
        this.stopAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (!cG) {
                return false
            }
            if (aT == "youtube") {
                if (!c0) {
                    return false
                }
                if (c1) {
                    ea.stop()
                } else {
                    if (typeof cc(dH) !== "undefined") {
                        cc(dH).pb_dispose()
                    }
                }
            } else {
                if (cp) {
                    if (eI) {
                        eI.src = "";
                        if (dt) {
                            eI.src = d7
                        } else {
                            if (a8) {
                                eI.src = cT
                            }
                        }
                    }
                } else {
                    if (typeof cc(f) !== "undefined") {
                        cc(f).pb_dispose()
                    }
                }
            }
            c();
            ax = false
        };
        this.checkAudio = function(e6) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            var e7 = e6.toLowerCase();
            if (ax) {
                if (e7 == "pause") {
                    if (aT == "youtube") {
                        if (!c0) {
                            return false
                        }
                        if (c1) {
                            ea.togglePlayback()
                        } else {
                            if (typeof cc(dH) !== "undefined") {
                                cc(dH).pb_togglePlayback()
                            }
                        }
                    } else {
                        if (cp) {
                            if (eI) {
                                eI.pause()
                            }
                        } else {
                            if (typeof cc(f) !== "undefined") {
                                cc(f).pb_pause()
                            }
                        }
                    }
                } else {
                    if (e7 == "stop") {
                        if (aT == "youtube") {
                            if (!c0) {
                                return false
                            }
                            ea.stop()
                        } else {
                            if (cp) {
                                if (eI) {
                                    eI.src = "";
                                    if (dt) {
                                        eI.src = d7
                                    } else {
                                        if (a8) {
                                            eI.src = cT
                                        }
                                    }
                                }
                            } else {
                                if (typeof cc(f) !== "undefined") {
                                    cc(f).pb_dispose()
                                }
                            }
                        }
                        c()
                    }
                }
                ax = false;
                az("off")
            }
        };
        this.nextAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            cw();
            bK.advanceHandler(1, true)
        };
        this.previousAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            cw();
            bK.advanceHandler(-1, true)
        };
        this.loadAudio = function(e8) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (typeof(e8) === "string") {
                var e6 = 0,
                    e7 = false;
                for (e6; e6 < dr; e6++) {
                    if (e8 == dW[e6].title) {
                        e8 = e6;
                        e7 = true;
                        break
                    }
                }
                if (!e7) {
                    if (eB) {
                        alert('Track with name "' + e8 + '" doesnt exist. Load audio failed.')
                    }
                    return false
                }
            } else {
                if (typeof(e8) === "number") {
                    if (e8 < 0) {
                        if (eB) {
                            alert('Invalid track number. Track number  "' + e8 + '" doesnt exist. Load audio failed.')
                        }
                        return false
                    } else {
                        if (e8 > dr - 1) {
                            if (eB) {
                                alert('Invalid track number. Track number  "' + e8 + '" doesnt exist. Load audio failed.')
                            }
                            return false
                        }
                    }
                } else {
                    if (eB) {
                        alert("Load audio method requires either a track number or a track title to load. Load audio failed.")
                    }
                    return false
                }
            }
            cw();
            bK.processPlaylistRequest(e8)
        };
        this.loadPlaylist = function(e6) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (typeof(e6) === "undefined") {
                if (eB) {
                    alert("loadPlaylist method requires data parameter. loadPlaylist failed.")
                }
                return false
            }
            dG = e6;
            D(dG)
        };
        this.addTrack = function(fe, fg, e6, fb) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (typeof(fe) === "undefined") {
                if (eB) {
                    alert("addTrack method requires type parameter. AddTrack failed.")
                }
                return false
            }
            if (typeof(fg) === "undefined") {
                if (eB) {
                    alert("addTrack method requires format parameter. AddTrack failed.")
                }
                return false
            }
            if (typeof(e6) === "undefined") {
                if (eB) {
                    alert("addTrack method requires track parameter. AddTrack failed.")
                }
                return false
            }
            var fd = 1,
                e9 = false;
            if (typeof(e6) === "string" || Object.prototype.toString.call(e6) === "[object Object]") {} else {
                if (Object.prototype.toString.call(e6) === "[object Array]") {
                    fd = e6.length;
                    e9 = true
                } else {
                    if (eB) {
                        alert("addTrack method requires track as string, object or array parameter. AddTrack failed.")
                    }
                    return false
                }
            }
            af = fb;
            fe = fe.toLowerCase();
            if (fe == "visible") {
                if (eg && b3) {
                    M()
                }
                ee = true;
                b3 = false
            } else {
                if (eg && !b3) {
                    M()
                }
                bJ = true;
                b3 = true
            }
            ej = false;
            if (eg) {
                if (typeof(af) !== "undefined") {
                    if (af < 0) {
                        if (eB) {
                            alert('Invalid position to insert track to. Position number "' + fb + '" doesnt exist. AddTrack failed.')
                        }
                        return false
                    } else {
                        if (af > dr) {
                            if (eB) {
                                alert('Invalid position to insert track to. Position number "' + fb + '" doesnt exist. AddTrack failed.')
                            }
                            return false
                        } else {
                            if (af == dr) {
                                ej = true
                            }
                        }
                    }
                } else {
                    ej = true;
                    af = dr
                }
            } else {
                if (typeof(af) !== "undefined") {
                    if (af != 0) {
                        if (eB) {
                            alert('Invalid position to insert track to. Position number "' + fb + '" doesnt exist. AddTrack failed.')
                        }
                        return false
                    }
                } else {
                    af = 0
                }
                ej = true
            }
            dJ();
            eS = true;
            bm = false;
            var fa = 0,
                fc, e8, ff = "playlist" + Math.floor((Math.random() * 9999)),
                e7 = a("<ul id = " + ff + "></ul>");
            fg = fg.toLowerCase();
            for (fa; fa < fd; fa++) {
                e8 = e9 ? e6[fa] : e6;
                if (fg == "html") {
                    fc = g(e8).appendTo(e7)
                } else {
                    if (e8.type && e8.mp3 || e8.path) {
                        fc = eC(e8).appendTo(e7)
                    } else {
                        continue
                    }
                }
            }
            dq = [];
            cY.empty();
            e7.appendTo(cY).find("li[class='playlistItem']").each(function() {
                dq.push(a(this))
            });
            ev = false;
            if (!eg) {
                ev = true;
                if (fe == "visible") {
                    if (W) {
                        eg = dw
                    } else {
                        eg = dw
                    }
                } else {
                    eg = bY
                }
            }
            bN()
        };

        function eC(fm) {
            var e8, fg = "",
                fa, e9 = "",
                fn = "",
                fj = "",
                e7, e6, fc, fe, fd, fh, fi, fb;
            e8 = fm.type.toLowerCase();
            if (fm.origtype) {
                fg = fm.origtype.toLowerCase()
            }
            if (fm.mp3) {
                fa = fm.mp3
            } else {
                if (fm.path) {
                    fa = fm.path
                }
            }
            if (fm.ogg) {
                e9 = fm.ogg
            }
            if (fm.title) {
                fn = fm.title
            }
            if (fm.thumb) {
                fj = fm.thumb
            }
            if (fm.download) {
                if (e8 == "youtube_single" || e8 == "youtube_single_list" || e8 == "youtube_playlist") {
                    if (fm.download != true && fm.download != "true" && !dP(fm.download)) {
                        e7 = fm.download
                    }
                } else {
                    if (fm.download == true) {
                        e7 = fa
                    } else {
                        e7 = fm.download
                    }
                }
            }
            if (fm.url) {
                fc = fm.url
            }
            if (fm.dlink) {
                if (e8 == "youtube_single" || e8 == "youtube_single_list" || e8 == "youtube_playlist") {
                    if (fm.dlink != true && fm.dlink != "true" && !dP(fm.dlink)) {
                        e6 = fm.dlink
                    }
                } else {
                    if (fm.dlink == true) {
                        e6 = fa
                    } else {
                        e6 = fm.dlink
                    }
                }
            }
            if (e8 == "local") {
                if (aH == "title") {
                    fh = "<li class= 'playlistItem' data-type='local' data-origtype='" + fg + "' data-mp3='" + fa + "' data-ogg='" + e9 + "' data-thumb='" + fj + "' data-title='" + fn + "'><a class='playlistNonSelected' href='#'>" + fn + "</a></li>"
                } else {
                    if (aH == "thumb") {
                        fh = "<li class= 'playlistItem' data-type='local' data-origtype='" + fg + "' data-mp3='" + fa + "' data-ogg='" + e9 + "' data-thumb='" + fj + "' data-title='" + fn + "'><a class='playlistNonSelected' href='#'><img src='" + fj + "' alt='thumb'/></a></li>"
                    } else {
                        if (aH == "all") {
                            fh = "<li class= 'playlistItem' data-type='local' data-origtype='" + fg + "' data-mp3='" + fa + "' data-ogg='" + e9 + "' data-thumb='" + fj + "' data-title='" + fn + "'><a class='playlistNonSelected' href='#'><span class='hap_thumb'><img src='" + fj + "' alt='thumb'/></span><span class='hap_title'><p>'" + fn + "'</p></span></a></li>"
                        }
                    }
                }
            } else {
                fh = "<li class= 'playlistItem' data-type='" + e8 + "' data-path='" + fa + "' data-thumb='" + fj + "'></li>";
                if (e8 == "database_data") {
                    var fk = fm.table ? fm.table : null;
                    var fl = fm.limit ? fm.limit : null;
                    var ff = fm.range ? fm.range : null;
                    if (fk) {
                        fi = ' data-table="' + fk + '" ';
                        fb = fh.match(/\>/);
                        fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                    }
                    if (fl) {
                        fi = ' data-limit="' + fl + '" ';
                        fb = fh.match(/\>/);
                        fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                    }
                    if (ff) {
                        fi = ' data-range="' + ff + '" ';
                        fb = fh.match(/\>/);
                        fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                    }
                }
            }
            if (e7) {
                fi = ' data-download="' + e7 + '" ';
                fb = fh.match(/\>/);
                fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
            }
            if (e8 == "local") {
                if (e6) {
                    fi = "<a class='dlink' href='#' data-dlink='" + e6 + "'><img src='" + cX + "' alt='download'/></a>";
                    fb = fh.match(/\<\/a\>\<\/li\>/);
                    fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                }
                if (fc) {
                    fi = "<a class='plink' href='" + fc + "' target='_blank'><img src='" + e5 + "' alt='purchase'/></a>";
                    fb = fh.match(/\<\/a\>\<\/li\>/);
                    fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                }
            } else {
                if (e6) {
                    fi = ' data-dlink="' + e6 + '" ';
                    fb = fh.match(/\>/);
                    fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                }
                if (fc) {
                    fi = ' data-plink="' + fc + '" ';
                    fb = fh.match(/\>/);
                    fh = fh.slice(0, fb.index) + fi + fh.slice(fb.index)
                }
            }
            fe = document.createElement("ul");
            fe.innerHTML = fh;
            fd = fe.firstChild;
            return a(fd)
        }

        function g(e8) {
            var e9 = a(e8),
                fa, e7, e6;
            fa = a("<div>").append(e9.clone()).html();
            e7 = document.createElement("ul");
            e7.innerHTML = fa;
            e6 = e7.firstChild;
            return a(e6)
        }
        this.inputAudio = function(e6) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (typeof(e6) === "undefined") {
                if (eB) {
                    alert("inputAudio method requires data parameter. inputAudio failed.")
                }
                return false
            }
            if (e6.mp3 === "undefined") {
                if (eB) {
                    alert("inputAudio method requires data.mp3 parameter. inputAudio failed.")
                }
                return false
            }
            cw();
            bK.reSetCounter();
            d7 = e6.mp3;
            if (e6.ogg !== "undefined") {
                cT = e6.ogg
            }
            if (e6.title !== "undefined") {
                aW(e6.title)
            } else {
                aW(bC)
            }
            if (isMobile) {
                a4 = true;
                if (!cp) {
                    if (typeof cc(f) !== "undefined") {
                        cc(f).pb_setAutoplay(true)
                    }
                }
            }
            bb()
        };
        this.removeTrack = function(e7) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (typeof(e7) === "undefined") {
                if (eB) {
                    alert("removeTrack method requires track parameter. removeTrack failed.")
                }
                return false
            }
            if (typeof(e7) === "string") {
                var fa = 0,
                    fd = false;
                for (fa; fa < dr; fa++) {
                    if (e7 == dW[fa].title) {
                        e7 = fa;
                        fd = true;
                        break
                    }
                }
                if (!fd) {
                    if (eB) {
                        alert('Track with name "' + e7 + '" doesnt exist. RemoveTrack failed.')
                    }
                    return false
                }
                if (t[e7] && dW[e7]) {
                    t[e7].remove();
                    dW.splice(e7, 1);
                    c6(e7)
                } else {
                    if (eB) {
                        alert('RemoveTrack with name "' + e7 + '" failed.')
                    }
                }
            } else {
                if (typeof(e7) === "number") {
                    if (e7 < 0 || e7 > dr - 1) {
                        if (eB) {
                            alert('Invalid track number. Track number  "' + e7 + '" doesnt exist. RemoveTrack failed.')
                        }
                        return false
                    }
                    if (t[e7] && dW[e7]) {
                        t[e7].remove();
                        dW.splice(e7, 1);
                        c6(e7)
                    } else {
                        if (eB) {
                            alert('RemoveTrack with name "' + e7 + '" failed.')
                        }
                    }
                } else {
                    if (Object.prototype.toString.call(e7) === "[object Array]") {
                        var fb;
                        if (typeof(e7[0]) === "string") {
                            fb = true
                        } else {
                            if (typeof(e7[0]) === "number") {
                                fb = false
                            }
                        }
                        if (fb) {
                            var fa = 0,
                                e6 = e7.length,
                                e8, fc, e9;
                            outer: for (fa; fa < e6; fa++) {
                                fc = e7[fa];
                                if (typeof(fc) === "string") {
                                    e9 = 0, e8 = dW.length;
                                    if (e8 == 0) {
                                        c6();
                                        break outer
                                    }
                                    for (e9; e9 < e8; e9++) {
                                        if (fc == dW[e9].title) {
                                            if (t[e9] && dW[e9]) {
                                                t[e9].remove();
                                                dW.splice(e9, 1);
                                                c6(e9);
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            e7.sort(A);
                            var fa = 0,
                                e6 = e7.length,
                                e8, fc;
                            outer: for (fa; fa < e6; fa++) {
                                fc = e7[fa];
                                if (typeof(fc) === "number") {
                                    e8 = dW.length;
                                    if (e8 == 0) {
                                        c6();
                                        break outer
                                    }
                                    if (fc > -1 && fc < e8) {
                                        if (t[fc] && dW[fc]) {
                                            t[fc].remove();
                                            dW.splice(fc, 1);
                                            c6(fc)
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (eB) {
                            alert("removeTrack method requires track parameter as string, number or array. removeTrack failed.")
                        }
                        return false
                    }
                }
            }
        };

        function c6(e6) {
            dr = dW.length;
            if (dr > 0) {
                bH();
                var e7 = bK.getCounter();
                if (e6 == e7) {
                    bW();
                    bK.setPlaylistItems(dr)
                } else {
                    bK.setPlaylistItems(dr, false);
                    if (e6 < e7) {
                        bK.reSetCounter(bK.getCounter() - 1)
                    } else {}
                }
                if (bP) {
                    aW()
                }
            } else {
                M();
                dG = null;
                if (typeof playlistEmpty !== "undefined") {
                    playlistEmpty(dl, cj)
                }
            }
        }
        this.destroyAudio = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            bW()
        };
        this.destroyPlaylist = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            M()
        };
        this.setTitle = function(e6) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            aW(e6)
        };
        this.toggleShuffle = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (i) {
                aD.find(".player_shuffle").find("img").attr("src", r);
                i = false
            } else {
                aD.find(".player_shuffle").find("img").attr("src", dB);
                i = true
            }
            bK.setRandom(i)
        };
        this.toggleLoop = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (c3) {
                aD.find(".player_loop").find("img").attr("src", c4);
                c3 = false
            } else {
                aD.find(".player_loop").find("img").attr("src", eR);
                c3 = true
            }
            bK.setLooping(c3)
        };
        this.setVolume = function(e6) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (e6 < 0) {
                e6 = 0
            } else {
                if (e6 > 1) {
                    e6 = 1
                }
            }
            a2 = e6;
            dh()
        };
        this.getVolume = function() {
            if (!dS) {
                return false
            }
            return a2
        };
        this.setAutoPlay = function(e6) {
            if (!dS) {
                return false
            }
            a4 = e6;
            if (!cp) {
                if (typeof cc(f) !== "undefined") {
                    cc(f).pb_setAutoplay(e6)
                }
            }
        };
        this.getAutoPlay = function() {
            if (!dS) {
                return false
            }
            return a4
        };
        this.getIsMobile = function() {
            return isMobile
        };
        this.getMobileType = function() {
            return y
        };
        this.getSetupDone = function() {
            return dS
        };
        this.getPlaylistLoaded = function() {
            return bm
        };
        this.getPlaylistTransition = function() {
            return eS
        };
        this.getMediaPlaying = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            return ax
        };
        this.getAudioInited = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            return cG
        };
        this.getMediaType = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            return aT
        };
        this.getActiveItem = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            return bK.getCounter()
        };
        this.getPlaylistItems = function(e6) {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!t || t.length == 0) {
                return false
            }
            if (typeof(e6) === "string") {
                return t
            } else {
                if (typeof(e6) === "number") {
                    if (num < 0 || num > dr - 1) {
                        return false
                    }
                    if (!t[num]) {
                        return false
                    }
                    return t[num]
                }
            }
        };
        this.getMediaCount = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            return v(dr) ? dr : 0
        };
        this.getPlaylistHidden = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            return b3
        };
        this.get_hidden_playlist_holder = function() {
            if (!dS) {
                return false
            }
            return bY
        };
        this.getPlaylistList = function() {
            if (!dS) {
                return false
            }
            if (!J || J.length == 0) {
                return false
            }
            return J
        };
        this.orderPlaylist = function(e8, e7) {
            if (!dS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (typeof(e8) === "undefined") {
                if (eB) {
                    alert("orderPlaylist method requires action parameter. orderPlaylist failed.")
                }
                return false
            }
            var fc = eg.children("li"),
                e6 = fc.length;
            if (e6 == 0) {
                return false
            }
            var fb = e8.toLowerCase();
            if (fb == "reverse") {
                eg.append(fc.get().reverse())
            } else {
                if (fb == "random" || fb == "remap" || fb == "swap") {
                    if (fb == "random") {
                        var e7 = d5(e6)
                    } else {
                        if (fb == "remap") {
                            if (typeof(e7) === "undefined" || e7.length != e6) {
                                return false
                            }
                        } else {
                            if (fb == "swap") {
                                if (typeof(e7) === "undefined" || e7.length != 2) {
                                    return false
                                }
                                var fa = ag(e6);
                                fa.splice(e7[1], 1, e7[0]);
                                fa.splice(e7[0], 1, e7[1]);
                                var e7 = a.extend(true, [], fa)
                            } else {
                                return false
                            }
                        }
                    }
                    orderedItems = jQuery.map(e7, function(fd) {
                        return jQuery(t).get(fd)
                    });
                    eg.empty().html(orderedItems)
                } else {
                    if (eB) {
                        alert("Wrong action parameter for orderPlaylist method. orderPlaylist failed.")
                    }
                    return false
                }
            }
            bH();
            var e9 = dw.find("a[class=playlistSelected]").attr("data-id");
            if (e9) {
                bK.reSetCounter(e9);
                if (bP) {
                    aW()
                }
            }
        };
        this.checkScroll = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            b7()
        };
        this.reinitScroll = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            if (W) {
                W.reinitialise();
                if (bp == "vertical") {
                    W.scrollToY(0);
                    a(".jspPane").css("top", 0 + "px")
                } else {
                    W.scrollToX(0);
                    a(".jspPane").css("left", 0 + "px")
                }
            }
            if (dU && a3) {
                if (bK && bK.getCounter() != -1) {
                    if (bP) {
                        aW()
                    }
                }
            }
        };
        this.getPlaylistData = function() {
            if (!dS) {
                return false
            }
            if (eS) {
                return false
            }
            if (!eg) {
                return false
            }
            return dW
        };
        this.getSoundId = function() {
            if (!dS) {
                return false
            }
            return cj
        };
        this.getTouch = function() {
            if (!dS) {
                return false
            }
            return dV
        };
        this.get_hap_source_path = function() {
            if (!dS) {
                return false
            }
            return hap_source_path
        };
        d0();
        return this
    }
})(jQuery);
(function(a) {
    var b = function(x) {
        var s = this,
            g, n, f = [],
            w = [],
            r = [],
            k = 0,
            j, u, t, h, v = 50,
            i, o, q = ["date", "rating", "relevance", "title", "videoCount", "viewCount"],
            l = x.ytAppId,
            p = $.inArray(a.location.protocol, ["http:", "https:"]) ? "http:" : a.location.protocol;
        this.setData = function(y) {
            if (!l || l == "") {
                alert("Youtube APMBI key missing! Please set APMBI key in player settings.");
                return
            }
            w = [];
            f = $.extend(true, [], [y]);
            e()
        };

        function e() {
            if (f.length) {
                n = f.shift();
                g = n.type;
                var A = n.path,
                    y;
                r = [];
                h = 0;
                t = 1;
                i = n.limit ? n.limit : 200;
                o = n.order ? n.order : "relevance";
                if (g == "youtube_single" || g == "youtube_single_list") {
                    y = "https://www.googleapis.com/youtube/v3/videos?id=" + A + "&key=" + l + "&part=snippet,contentDetails,statistics,status"
                } else {
                    if ($.inArray(o, q) == -1) {
                        o = "relevance"
                    }
                    if (g == "youtube_playlist") {
                        y = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status,contentDetails&maxResults=" + v + "&playlistId=" + A + "&key=" + l + ""
                    } else {
                        if (g == "youtube_video_query") {
                            var z = n.query || n.path;
                            y = "https://www.googleapis.com/youtube/v3/search?part=id,snippet&type=video&maxResults=" + v + "&order=" + o + "&q=" + z + "&key=" + l + ""
                        } else {
                            if (g == "youtube_user_channels") {
                                y = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&maxResults=" + v + "&forUsername=" + A + "&key=" + l + ""
                            } else {
                                if (g == "youtube_channel") {
                                    y = "https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails&id=" + A + "&key=" + l + ""
                                } else {
                                    alert("Wrong youtube type V3!");
                                    return
                                }
                            }
                        }
                    }
                }
                m(y)
            } else {
                $(s).trigger("APHAPYTLoader.END_LOAD", [w])
            }
        }

        function m(y) {
            $.ajax({
                url: y,
                dataType: "jsonp"
            }).done(function(z) {
                d(z)
            }).fail(function(z, B, A) {
                alert("There was an error retrieveing youtube data: " + z.responseText);
                e()
            })
        }

        function d(A, F) {
            if (A.error && A.error.message) {
                alert(A.error.message)
            }
            var C, z = A.items.length,
                E;
            if (z + h > i) {
                z = i - h
            }
            for (C = 0; C < z; C++) {
                _item = A.items[C];
                if (_item) {
                    if (g == "youtube_playlist" || g == "youtube_single" || g == "youtube_single_list") {
                        if (_item.status.privacyStatus != "private") {
                            w.push(c(_item, g))
                        } else {}
                        h++
                    } else {
                        if (g == "youtube_video_query") {
                            w.push(c(_item, g));
                            h++
                        } else {
                            if (g == "youtube_user_channels" || g == "youtube_channel") {
                                r.push(_item.contentDetails.relatedPlaylists.uploads)
                            }
                        }
                    }
                }
            }
            if (g == "youtube_single" || g == "youtube_single_list") {
                e()
            } else {
                if (g != "youtube_user_channels" && g != "youtube_channel") {
                    t += v;
                    if (t < i) {
                        var y = A.pageInfo.totalResults;
                        if (t <= y && A.nextPageToken) {
                            var D = n.path;
                            if (g == "youtube_playlist") {
                                var B = "https://www.googleapis.com/youtube/v3/playlistItems?pageToken=" + A.nextPageToken + "&part=snippet,status,contentDetails&maxResults=" + v + "&playlistId=" + D + "&key=" + l + ""
                            } else {
                                if (g == "youtube_video_query") {
                                    var B = "https://www.googleapis.com/youtube/v3/search?pageToken=" + A.nextPageToken + "&part=id,snippet&maxResults=" + v + "&order=" + o + "&q=" + D + "&key=" + l + ""
                                }
                            }
                            m(B)
                        } else {
                            e()
                        }
                    } else {
                        if (u) {
                            k++;
                            if (k < r.length) {
                                t = 0;
                                j = r[k];
                                var B = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status,contentDetails&maxResults=" + v + "&playlistId=" + j + "&key=" + l + "";
                                m(B)
                            } else {
                                u = false;
                                e()
                            }
                        }
                        e()
                    }
                } else {
                    if (r.length) {
                        if (r.length > 1) {
                            u = true
                        }
                        j = r[k];
                        var B = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status,contentDetails&maxResults=" + v + "&playlistId=" + j + "&key=" + l + "";
                        g = "youtube_playlist";
                        m(B)
                    } else {
                        e()
                    }
                }
            }
        }

        function c(y, z) {
            var A = jQuery.extend(true, {}, n);
            if (A.deeplink) {
                if (A.type != "youtube_single") {
                    A.deeplink = A.deeplink + (h + 1).toString()
                }
            }
            A.data = y;
            A.type = "youtube";
            A.origtype = z;
            if (z == "youtube_single" || z == "youtube_single_list") {
                A.id = y.id
            } else {
                if (z == "youtube_playlist") {
                    A.id = y.contentDetails.videoId
                } else {
                    if (z == "youtube_video_query") {
                        A.id = y.id.videoId
                    }
                }
            }
            if (!A.title) {
                A.title = y.snippet.title ? y.snippet.title : null
            }
            if (!A.description) {
                A.description = y.snippet.description ? y.snippet.description : null
            }
            if (!A.thumb && y.snippet.thumbnails) {
                if (y.snippet.thumbnails.medium) {
                    A.thumb = y.snippet.thumbnails.medium.url
                } else {
                    if (y.snippet.thumbnails.standard) {
                        A.thumb = y.snippet.thumbnails.standard.url
                    }
                }
            } else {
                if (default_artwork) {
                    A.thumb = default_artwork
                }
            }
            A.mp3 = A.id;
            A.ogg = "";
            return A
        }
    };
    a.APHAPYTLoader = b
}(window));
(function(a) {
    a.youtubePlayer = function(d, c) {
        return new b(d, c)
    };

    function b(w, q) {
        var e = this;
        this.isIE = w.isIE ? w.isIE : false;
        this.isMobile = w.isMobile;
        this.initialAutoplay = w.initialAutoplay;
        this._inited = false;
        this._player;
        this._autoPlay = w.autoPlay;
        this._defaultVolume = w.defaultVolume;
        this._youtubeHolder = w.youtubeHolder;
        this._frameId = "ytplayer" + Math.floor(Math.random() * 16777215);
        if (w.quality) {
            this.quality = w.quality
        }
        if (w.small_embed) {
            this.small_embed = w.small_embed
        }
        if (w.loop) {
            this.loop = w.loop
        }
        this.lastID;
        this.playerReadyInterval = 100;
        this.playerReadyIntervalID;
        this.playerReady = false;
        this.protocol = w.protocol;
        var n = w.youtubeChromeless;
        if (n == false) {
            q.useControls = true;
            q.ytShowinfo = true
        }
        var k = "&amp;wmode=transparent";
        var d = "&amp;enablejsapi=1";
        var p = "?controls=" + (q.useControls ? 1 : 0).toString();
        var v = "&amp;autohide=" + (q.autoHideControls ? 1 : 0).toString();
        var j = "&amp;showinfo=" + (q.ytShowinfo ? 1 : 0).toString();
        var f = "&amp;modestbranding=" + (q.ytModestbranding ? 1 : 0).toString();
        var i = "&amp;rel=" + (q.ytRel ? 1 : 0).toString();
        var m = "&amp;theme=" + (q.ytTheme ? q.ytTheme : "dark");
        var h = "&amp;autoplay=1";
        var l = "&amp;loop=1";
        this.forceMainStop = false;
        this.forcePreviewStop = false;
        var s = "https://www.youtube.com/embed/" + w.mediaPath + p + i + j + v + d + m + f + k;
        this.youtubeVideoIframe = a("<iframe />", {
            frameborder: 0,
            src: s,
            width: 100 + "%",
            height: 100 + "%",
            id: this._frameId,
            webkitAllowFullScreen: true,
            mozallowfullscreen: true,
            allowFullScreen: true
        });
        this._youtubeHolder.css("display", "block").append(this.youtubeVideoIframe);
        var x = document.createElement("script");
        x.src = this.protocol + "//www.youtube.com/iframe_api";
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(x, t);
        var r = setInterval(function() {
            if (window.YT && window.YT.Player) {
                if (r) {
                    clearInterval(r)
                }
                e._player = new YT.Player(e._frameId, {
                    events: {
                        onReady: o,
                        onPlaybackQualityChange: c,
                        onStateChange: g,
                        onError: u
                    }
                })
            }
        }, 100);
        window.onYouTubeIframeAPIReady = function() {};

        function o(y) {
            e.playerReady = true;
            if (e.forcePreviewStop) {
                return
            }
            a(e).trigger("ap_YoutubePlayer.YT_READY");
            if (typeof e._player.setVolume !== "undefined") {
                e._player.setVolume(e._defaultVolume * 100)
            }
            if (e._autoPlay) {
                e._player.playVideo()
            }
        }

        function c(y) {
            a(e).trigger("ap_YoutubePlayer.QUALITY_CHANGE", [y.data])
        }

        function g(y) {
            if (e.forceMainStop) {
                e.forceMainStop = false;
                if (typeof e._player.stopVideo !== "undefined") {
                    e._player.stopVideo();
                    a(e).trigger("ap_YoutubePlayer.FORCE_MAIN_STOP");
                    return
                }
            }
            if (y.data == -1) {} else {
                if (y.data == 0) {
                    a(e).trigger("ap_YoutubePlayer.END_PLAY");
                    if (e.loop) {
                        e._player.playVideo()
                    }
                } else {
                    if (y.data == 1) {
                        if (e.forcePreviewStop) {
                            if (typeof e._player.stopVideo !== "undefined") {
                                e._player.stopVideo()
                            }
                        }
                        e._autoPlay = true;
                        if (e.small_embed && typeof e._player.setVolume !== "undefined") {
                            e._player.setVolume(e._defaultVolume * 100)
                        }
                        if (!e._inited) {
                            a(e).trigger("ap_YoutubePlayer.START_PLAY");
                            e._inited = true;
                            if (!e.small_embed && e.quality) {
                                e._player.setPlaybackQuality(e.quality)
                            } else {
                                if (e.small_embed) {
                                    e._player.setPlaybackQuality(e._player.getAvailableQualityLevels()[e._player.getAvailableQualityLevels().length - 1])
                                }
                            }
                        }
                        a(e).trigger("ap_YoutubePlayer.STATE_PLAYING")
                    } else {
                        if (y.data == 2) {
                            a(e).trigger("ap_YoutubePlayer.STATE_PAUSED")
                        } else {
                            if (y.data == 5) {
                                a(e).trigger("ap_YoutubePlayer.STATE_CUED")
                            }
                        }
                    }
                }
            }
        }

        function u(y) {
            switch (y.data) {
                case 2:
                    break;
                case 100:
                    break;
                case 101:
                    break;
                case 150:
                    break
            }
            a(e).trigger("ap_YoutubePlayer.ERROR_HANDLER", [y.data])
        }
    }
    b.prototype = {
        clean: function(c) {
            if (this._player) {
                if (typeof this._player.stopVideo !== "undefined") {
                    this._player.stopVideo()
                }
                this._player = null
            }
            if (this.youtubeVideoIframe) {
                this.youtubeVideoIframe.attr("src", "");
                this.youtubeVideoIframe.remove();
                this.youtubeVideoIframe = null
            }
            if (this._youtubeHolder) {
                this._youtubeHolder.empty().css("display", "none")
            }
        },
        stopPreview: function() {
            this.forcePreviewStop = true
        },
        initVideo: function(e, d) {
            this.forceMainStop = false;
            this.forcePreviewStop = false;
            this.quality = d;
            if (this.playerReady) {
                if (this._player) {
                    this._inited = false;
                    if (this._autoPlay) {
                        if (typeof this._player.loadVideoById !== "undefined") {
                            this._player.loadVideoById(e)
                        }
                    } else {
                        if (typeof this._player.cueVideoById !== "undefined") {
                            this._player.cueVideoById(e)
                        }
                    }
                }
            } else {
                var c = this;
                this.lastID = e;
                if (this.playerReadyIntervalID) {
                    return
                }
                this.playerReadyIntervalID = setInterval(function() {
                    if (c.playerReady) {
                        if (c.playerReadyIntervalID) {
                            clearInterval(c.playerReadyIntervalID)
                        }
                        if (!c.forceMainStop) {
                            c.initVideo(c.lastID)
                        }
                    }
                }, this.playerReadyInterval)
            }
        },
        stop: function() {
            this.forceMainStop = true;
            if (this._player && typeof this._player.stopVideo !== "undefined") {
                this._player.stopVideo()
            }
        },
        play: function() {
            if (this._player && typeof this._player.playVideo !== "undefined") {
                this._player.playVideo()
            }
        },
        pause: function() {
            if (this._player && typeof this._player.pauseVideo !== "undefined") {
                this._player.pauseVideo()
            }
        },
        togglePlayback: function(d) {
            if (this._player) {
                if (d == undefined) {
                    if (typeof this._player.getPlayerState === "undefined") {
                        return false
                    }
                    var c = this._player.getPlayerState();
                    if (c == 1) {
                        if (typeof this._player.pauseVideo !== "undefined") {
                            this._player.pauseVideo()
                        }
                    } else {
                        if (c == 2) {
                            if (typeof this._player.playVideo !== "undefined") {
                                this._player.playVideo()
                            }
                        } else {
                            if (c == -1 || c == 5 || c == 0) {
                                if (typeof this._player.playVideo !== "undefined") {
                                    this._player.playVideo()
                                }
                            }
                        }
                    }
                } else {
                    if (d) {
                        if (typeof this._player.playVideo !== "undefined") {
                            this._player.playVideo()
                        }
                    } else {
                        if (typeof this._player.pauseVideo !== "undefined") {
                            this._player.pauseVideo()
                        }
                    }
                }
            }
        },
        seek: function(c) {
            if (this._player && typeof this._player.seekTo !== "undefined") {
                this._player.seekTo(c)
            }
        },
        isMuted: function() {
            if (this._player && typeof this._player.isMuted !== "undefined") {
                return this._player.isMuted()
            }
        },
        getDuration: function() {
            if (this._player && typeof this._player.getDuration !== "undefined") {
                return this._player.getDuration()
            }
        },
        getCurrentTime: function() {
            if (this._player && typeof this._player.getCurrentTime !== "undefined") {
                return this._player.getCurrentTime()
            }
        },
        getVideoLoadedFraction: function() {
            if (this._player && typeof this._player.getVideoLoadedFraction !== "undefined") {
                return this._player.getVideoLoadedFraction()
            }
        },
        getVideoBytesLoaded: function() {
            if (this._player && typeof this._player.getVideoBytesLoaded !== "undefined") {
                return this._player.getVideoBytesLoaded()
            }
        },
        getVideoBytesTotal: function() {
            if (this._player && typeof this._player.getVideoBytesTotal !== "undefined") {
                return this._player.getVideoBytesTotal()
            }
        },
        setVolume: function(c) {
            if (c < 0) {
                vol = 0
            } else {
                if (c > 1) {
                    c = 1
                }
            }
            if (this._player && typeof this._player.setVolume !== "undefined") {
                this._player.setVolume(c * 100)
            }
        },
        getPlayerState: function() {
            if (this._player && typeof this._player.getPlayerState !== "undefined") {
                return this._player.getPlayerState()
            }
        },
        setAutoPlay: function(c) {
            this._autoPlay = c
        },
        getQualityLevels: function() {
            return this._player.getAvailableQualityLevels()
        },
        getCurrQuality: function() {
            return this._player.getPlaybackQuality()
        },
        setPlaybackQuality: function(c) {
            this._player.setPlaybackQuality(c)
        }
    }
})(jQuery);
(function(b) {
    b.playlistManager = function(d) {
        var c = new a(d);
        return c
    };

    function a(c) {
        this._loopingOn = c.loopingOn;
        this._randomPlay = c.randomPlay;
        this._playlistItems;
        this._lastInOrder = false;
        this._counter = -1;
        this._lastPlayedFromPlaylistClick;
        this._lastRandomCounter;
        this._randomPaused = false;
        this._randomArr = [];
        this._playlistSelect = false
    }
    a.prototype = {
        setCounter: function(c, d) {
            if (typeof d === "undefined") {
                d = true
            }
            if (d) {
                this._counter += parseInt(c, 10)
            } else {
                this._counter = parseInt(c, 10)
            }
            this._checkCounter()
        },
        getCounter: function() {
            var c;
            if (this._randomPlay) {
                if (!this._playlistSelect) {
                    c = this._randomArr[this._counter]
                } else {
                    c = this._counter
                }
            } else {
                c = this._counter
            }
            return c
        },
        advanceHandler: function(c) {
            this._playlistSelect = false;
            if (this._randomPaused) {
                this._handleRandomPaused(c)
            } else {
                this.setCounter(c)
            }
        },
        processPlaylistRequest: function(c) {
            this._playlistSelect = false;
            if (this._randomPlay) {
                this._playlistSelect = true;
                this._lastPlayedFromPlaylistClick = c;
                if (!this._randomPaused) {
                    this._lastRandomCounter = this._counter;
                    this._randomPaused = true
                }
            }
            this.setCounter(c, false)
        },
        getLastInOrder: function() {
            return this._lastInOrder
        },
        getRandomPaused: function() {
            return this._randomPaused
        },
        setPlaylistItems: function(d, c) {
            if (typeof c === "undefined") {
                c = true
            }
            if (c) {
                this._counter = -1
            }
            this._playlistItems = d;
            if (this._randomPlay) {
                this._makeRandomList()
            }
        },
        reSetCounter: function(c) {
            if (typeof c === "undefined") {
                this._counter = -1
            } else {
                var d = parseInt(c, 10);
                if (this._playlistItems) {
                    if (d > this._playlistItems - 1) {
                        d = this._playlistItems - 1
                    } else {
                        if (d < 0) {
                            d = 0
                        }
                    }
                    this._counter = d
                } else {
                    this._counter = -1
                }
            }
        },
        setRandom: function(c) {
            this._randomPlay = c;
            if (this._randomPlay) {
                this._makeRandomList()
            }
            this._randomChange()
        },
        setLooping: function(c) {
            this._loopingOn = c
        },
        _handleRandomPaused: function(c) {
            var d = b(this);
            this._randomPaused = false;
            if (this._lastRandomCounter + c > this._playlistItems - 1) {
                this._counter = this._playlistItems - 1;
                d.trigger("ap_PlaylistManager.COUNTER_READY");
                return
            } else {
                if (this._lastRandomCounter + c < 0) {
                    this._counter = 0;
                    d.trigger("ap_PlaylistManager.COUNTER_READY");
                    return
                }
            }
            this.setCounter(this._lastRandomCounter + c, false)
        },
        _randomChange: function() {
            if (this._randomPlay) {
                this._activeIndexFirst();
                this._counter = 0
            } else {
                if (this._randomPaused) {
                    this._counter = this._lastPlayedFromPlaylistClick;
                    this._randomPaused = false
                } else {
                    this._counter = this._randomArr[this._counter]
                }
            }
        },
        _checkCounter: function() {
            if (isNaN(this._counter)) {
                alert("ap_PlaylistManager message: No active media, counter = " + this._counter);
                return
            }
            var c = b(this);
            this._lastInOrder = false;
            if (this._loopingOn) {
                if (this._randomPlay) {
                    if (this._counter > this._playlistItems - 1) {
                        this._counter = this._randomArr[this._playlistItems - 1];
                        this._makeRandomList();
                        this._firstIndexCheck();
                        this._counter = 0;
                        c.trigger("ap_PlaylistManager.PLAYLIST_END")
                    } else {
                        if (this._counter < 0) {
                            this._counter = this._randomArr[0];
                            this._makeRandomList();
                            this._lastIndexCheck();
                            this._counter = this._playlistItems - 1
                        }
                    }
                } else {
                    if (this._counter > this._playlistItems - 1) {
                        this._counter = 0;
                        c.trigger("ap_PlaylistManager.PLAYLIST_END")
                    } else {
                        if (this._counter < 0) {
                            this._counter = this._playlistItems - 1
                        }
                    }
                }
                c.trigger("ap_PlaylistManager.COUNTER_READY")
            } else {
                if (this._counter > this._playlistItems - 1) {
                    this._counter = this._playlistItems - 1;
                    this._lastInOrder = true
                } else {
                    if (this._counter < 0) {
                        this._counter = 0
                    }
                }
                if (!this._lastInOrder) {
                    c.trigger("ap_PlaylistManager.COUNTER_READY")
                } else {
                    c.trigger("ap_PlaylistManager.PLAYLIST_END")
                }
            }
        },
        _makeRandomList: function() {
            if (this._playlistItems < 3) {
                return
            }
            this._randomArr = this._randomiseIndex(this._playlistItems)
        },
        _firstIndexCheck: function() {
            if (this._randomArr[0] == this._counter) {
                var c = this._randomArr.splice(0, 1);
                this._randomArr.push(c)
            }
        },
        _lastIndexCheck: function() {
            if (this._randomArr[this._playlistItems - 1] == this._counter) {
                var c = this._randomArr.splice(this._playlistItems - 1, 1);
                this._randomArr.unshift(c)
            }
        },
        _activeIndexFirst: function() {
            var e, c = this._randomArr.length,
                d;
            for (e = 0; e < c; e++) {
                if (this._randomArr[e] == this._counter) {
                    if (e == 0) {
                        break
                    }
                    d = this._randomArr.splice(e, 1);
                    this._randomArr.unshift(parseInt(d, 10));
                    break
                }
            }
        },
        _randomiseIndex: function(f) {
            var d = [],
                h = [],
                g;
            for (g = 0; g < f; g++) {
                d[g] = g
            }
            var e, c;
            for (e = 0; e < f; e++) {
                c = Math.round(Math.random() * (d.length - 1));
                h[e] = d[c];
                d.splice(c, 1)
            }
            return h
        }
    }
})(jQuery);
(function(a) {
    apTextScroller = function() {
        var d;
        var p;
        var l;
        var j;
        var e;
        var m;
        var h = 100;
        var o;
        var c = 0;
        var f;
        var b, k, i;
        var g = false;
        this.init = function(t, r, s, u, v, q) {
            f = t;
            d = r;
            l = s;
            m = u;
            j = v;
            p = q
        };
        this.input = function(x) {
            b = x;
            f.html(x);
            k = f.width();
            var w = x.replace(/\s/g, "&nbsp;");
            var v = w + j;
            d.html("");
            d.css("width", "auto");
            d.html(v);
            e = d.width();
            if (e == 0) {
                return
            }
            var u;
            var y = v;
            if (e <= l.width() * 2) {
                var q = Math.floor(l.width() * 2 / e);
                for (var r = 0; r < q; r++) {
                    y += v
                }
                u = e * (q + 1)
            } else {
                y += v;
                u = e * 2
            }
            d.html(y);
            d.css("width", u + 1 + "px");
            i = y;
            g = true
        };
        this.inputSingle = function(q) {};
        this.activate = function() {
            this.deactivate();
            if (l.width() >= k) {
                d.html(b)
            } else {
                d.html(i);
                o = setInterval(n, h)
            }
        };
        this.deactivate = function() {
            if (o) {
                clearInterval(o)
            }
            if (m == "left") {
                d.css("left", 0 + "px");
                c = 0
            }
        };
        this.checkSize = function() {
            if (!g) {
                return
            }
            if (l.width() >= k) {
                this.deactivate();
                d.html(b)
            } else {
                d.html(i);
                this.activate()
            }
        };

        function n() {
            if (m == "left") {
                c -= p;
                d.css("left", c + "px");
                if (parseInt(d.css("left"), 10) < -e) {
                    c = -p
                }
            } else {}
        }
    }
})(jQuery);

function api_playAudio(a) {
    if (a) {
        a.playAudio()
    }
}

function api_pauseAudio(a) {
    if (a) {
        a.pauseAudio()
    }
}

function api_toggleAudio(a) {
    if (a) {
        a.toggleAudio()
    }
}

function api_stopAudio(a) {
    if (a) {
        a.stopAudio()
    }
}

function api_checkAudio(a, b) {
    if (a) {
        a.checkAudio(b)
    }
}

function api_nextAudio(a) {
    if (a) {
        a.nextAudio()
    }
}

function api_previousAudio(a) {
    if (a) {
        a.previousAudio()
    }
}

function api_loadAudio(a, b) {
    if (a) {
        a.loadAudio(b)
    }
}

function api_loadPlaylist(a, b) {
    if (a) {
        a.loadPlaylist(b)
    }
}

function api_addTrack(b, c, d, a, e) {
    if (b) {
        b.addTrack(c, d, a, e)
    }
}

function api_inputAudio(b, a) {
    if (b) {
        b.inputAudio(a)
    }
}

function api_removeTrack(a, b) {
    if (a) {
        a.removeTrack(b)
    }
}

function api_destroyAudio(a) {
    if (a) {
        a.destroyAudio()
    }
}

function api_destroyPlaylist(a) {
    if (a) {
        a.destroyPlaylist()
    }
}

function api_toggleShuffle(a) {
    if (a) {
        a.toggleShuffle()
    }
}

function api_toggleLoop(a) {
    if (a) {
        a.toggleLoop()
    }
}

function api_checkScroll(a) {
    if (a) {
        a.checkScroll()
    }
}

function api_reinitScroll(a) {
    if (a) {
        a.reinitScroll()
    }
}

function api_orderPlaylist(a, c, b) {
    if (a) {
        a.orderPlaylist(c, b)
    }
}

function api_getVolume(a) {
    if (a) {
        return a.getVolume()
    }
}

function api_setVolume(a, b) {
    if (a) {
        a.setVolume(b)
    }
}

function api_getAutoPlay(a) {
    if (a) {
        return a.getAutoPlay()
    }
}

function api_setAutoPlay(a, b) {
    if (a) {
        a.setAutoPlay(b)
    }
}

function api_setTitle(a, b) {
    if (a) {
        a.setTitle(b)
    }
}

function api_getSetupDone(a) {
    if (a) {
        return a.getSetupDone()
    }
}

function api_getPlaylistLoaded(a) {
    if (a) {
        return a.getPlaylistLoaded()
    }
}

function api_getPlaylistTransition(a) {
    if (a) {
        return a.getPlaylistTransition()
    }
}

function api_getMediaPlaying(a) {
    if (a) {
        return a.getMediaPlaying()
    }
}

function api_getAudioInited(a) {
    if (a) {
        return a.getAudioInited()
    }
}

function api_getMediaType(a) {
    if (a) {
        return a.getMediaType()
    }
}

function api_getActiveItem(a) {
    if (a) {
        return a.getActiveItem()
    }
}

function api_getPlaylistItems(a, b) {
    if (a) {
        return a.getPlaylistItems(b)
    }
}

function api_getMediaCount(a) {
    if (a) {
        return a.getMediaCount()
    }
}

function api_getPlaylistHidden(a) {
    if (a) {
        return a.getPlaylistHidden()
    }
}

function api_getPlaylistList(a) {
    if (a) {
        return a.getPlaylistList()
    }
}

function api_getPlaylistData(a) {
    if (a) {
        return a.getPlaylistData()
    }
}

function api_getSoundId(a) {
    if (a) {
        return a.getSoundId()
    }
}

function audioPlayerSetupDone(j, d) {
    if (d == "popup" || d == "classic_popup") {
        j.find(".popup_open").css({
            cursor: "pointer",
            display: "block"
        }).bind("click", function() {
            open_popup(popup_url, popup_width, popup_height, resizable);
            return false
        })
    } else {
        if (d == "circle_slideshow" || d == "bg_slideshow") {
            loadImage()
        }
    }
    if (d == "classic_single" || d == "classic" || d == "classic_white" || d == "classic_no_time" || d == "classic_full" || d == "classic_no_time_advance" || d == "classic_no_time_no_seekbar_advance" || d == "classic_min" || d == "classic_playlist" || d == "classic_popup" || d == "wall" || d == "drag_to_play" || /wrap_multi/g.test(d)) {
        if (j.getTouch()) {
            j.find(".controls_toggle").addClass("hap_no_hover");
            j.find(".player_volume").addClass("hap_no_hover");
            j.find(".controls_prev").addClass("hap_no_hover");
            j.find(".controls_next").addClass("hap_no_hover");
            j.find(".popup_open").addClass("hap_no_hover")
        }
    }
    if (typeof(hap_group) !== "undefined") {
        if (hap_group == "wrap_multi" || hap_group == "wrap_multi2") {
            if (hap_group == "wrap_multi2" && d == "wrap_multi2_selector") {
                return
            }
            var c, g, e, i = "",
                h, b, a, f = jQuery(j).closest(".playlistItem");
            if (f.attr("data-type") != undefined) {
                g = f.attr("data-type")
            }
            if (f.attr("data-mp3") != undefined) {
                e = f.attr("data-mp3")
            }
            if (g && e) {
                if (f.attr("data-ogg") != undefined) {
                    i = f.attr("data-ogg")
                }
                if (f.attr("data-title") != undefined) {
                    h = f.attr("data-title")
                }
                if (f.attr("data-thumb") != undefined) {
                    b = f.attr("data-thumb")
                }
                if (f.attr("data-download") != undefined) {
                    a = f.attr("data-download")
                }
                c = [{
                    type: "local",
                    origtype: g,
                    mp3: e,
                    ogg: i,
                    title: h,
                    thumb: b,
                    download: a
                }];
                j.addTrack("visible", "data", c[0])
            }
        }
    }
}

function audioPlayerPlaylistLoaded(a, b) {
    if (typeof(hap_group) !== "undefined") {
        if (hap_group == "wrap_multi2" && b == "wrap_multi2_selector") {
            makeHapPlayers(a)
        }
    }
    if (b == "drag_text1" || b == "drag_thumb1") {
        a.find("li[class*=hap_draggable]").draggable({
            connectToSortable: ".hap_sortable",
            helper: "clone",
            revert: "invalid"
        })
    } else {
        if (b == "drag_text2" || b == "drag_thumb2") {
            jQuery("#playlist2").droppable({
                tolerance: "touch",
                drop: function(d, e) {
                    var c = jQuery(e.draggable);
                    if (c.hasClass("playlist_locked")) {
                        c.removeClass("playlist_locked")
                    }
                }
            })
        }
    }
    if (jQuery("#hap_playlist").length) {
        jQuery("#hap_playlist").selectbox("enable")
    }
}

function audioPlayerPlaylistEnd(a, b) {}

function audioPlayerSoundEnd(a, c, b) {}

function audioPlayerSoundStart(a, c, b) {}

function audioPlayerSoundPlay(b, d, c) {
    if (typeof(hap_group) !== "undefined" && typeof(hap_players) !== "undefined" && hap_players.length && typeof(soundArr) !== "undefined" && soundArr.length) {
        var e = 0,
            a = soundArr.length;
        for (e; e < a; e++) {
            if (d != soundArr[e].sound_id) {
                if (typeof api_checkAudio !== "undefined") {
                    api_checkAudio(soundArr[e].player_id, "pause")
                }
            }
        }
    }
}

function audioPlayerSoundPause(a, c, b) {}

function itemTriggered(a, d, b) {
    if (d == "artwork1" || d == "basic" || d == "basic_h") {
        var f = a.find(".player_thumb").find("img"),
            e = a.getPlaylistData(),
            c = e[b].thumb;
        if (f.length && c) {
            f.attr("src", a.get_hap_source_path() + c)
        }
    }
}

function playlistItemEnabled(a, b, c, d) {
    if (b == "wall") {
        jQuery(c).find("p[class=hap_title]").remove()
    }
}

function playlistItemDisabled(a, b, e, g) {
    if (b == "wall") {
        var c = a.getPlaylistData(),
            f = c[g].title;
        if (f) {
            var d = jQuery('<p>"' + f + '"</p>').addClass("hap_title");
            d.appendTo(jQuery(e)).css("marginTop", -d.outerHeight(true) / 2 + "px")
        }
    }
}

function playlistItemRollover(a, b, f, h, e) {
    if (b == "wall" && !e) {
        var c = a.getPlaylistData(),
            g = c[h].title;
        if (g) {
            var d = jQuery('<p>"' + g + '"</p>').addClass("hap_title");
            d.appendTo(jQuery(f)).css("marginTop", -d.outerHeight(true) / 2 + "px")
        }
    }
}

function playlistItemRollout(a, b, d, e, c) {
    if (b == "wall" && !c) {
        jQuery(d).find("p[class=hap_title]").remove()
    }
}

function playlistEmpty(a, b) {
    if (b == "drag_text2" || b == "drag_thumb2") {
        a.destroyAudio();
        if (a.find("p[class=drag_info]").length == 0) {
            a.find(".playlist_inner").prepend($('<p class="drag_info">DRAG THE SONGS IN HERE!</p>'));
            a.loadPlaylist({
                hidden: false,
                id: "#playlist2"
            })
        }
    }
}

function dropReceive(a, b) {
    if (b == "drag_text2" || b == "drag_thumb2") {
        a.find("p[class=drag_info]").remove()
    }
}
var trackList_local1 = ["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3' 		 data-ogg='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg' data-download><a class='playlistNonSelected' href='#'>Tim McMorris - A Bright And Hopeful Future</a><a class='dlink' href='#' data-dlink='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3'><img src='media/data/dlink.png' alt = ''/></a><a class='plink' href='http://codecanyon.net/user/Tean/portfolio' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_Be_My_Valentine.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_Be_My_Valentine.ogg'><a class='playlistNonSelected' href='#'>Tim McMorris - Be My Valentine</a><a class='dlink' href='#' data-dlink='../media/audio/1/Tim_McMorris_-_Be_My_Valentine.mp3'><img src='media/data/dlink.png' alt = ''/></a><a class='plink' href='http://www.google.com' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.ogg' data-download><a class='playlistNonSelected' href='#'>Tim McMorris - Give Our Dreams Their Wings To Fly</a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.ogg'><a class='playlistNonSelected' href='#'>Tim McMorris - Happy Days Are Here To Stay</a><a class='plink' href='http://www.greensock.com' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>"];
var trackList_local2 = ["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_A_Way_To_The_Top.mp3' data-ogg='../media/audio/2/Soundroll_-_A_Way_To_The_Top.ogg'><a class='playlistNonSelected' href='#'>Soundroll - A Way To The Top</a><a class='plink' href='http://codecanyon.net/user/Tean/portfolio' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Feel_Good_Journey.mp3' data-ogg='../media/audio/2/Soundroll_-_Feel_Good_Journey.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Feel Good Journey</a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Fight_No_More.mp3' data-ogg='../media/audio/2/Soundroll_-_Fight_No_More.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Fight No More</a><a class='plink' href='http://www.google.com' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Funky_Boom.mp3' data-ogg='../media/audio/2/Soundroll_-_Funky_Boom.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Funky Boom</a><a class='plink' href='http://codecanyon.net/user/Tean/portfolio' target='_blank'><img src='media/data/url.png' alt = 'purchase'/></a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Pump_The_Club.mp3' data-ogg='../media/audio/2/Soundroll_-_Pump_The_Club.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Pump The Club</a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Rush.mp3' data-ogg='../media/audio/2/Soundroll_-_Rush.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Rush</a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Sun_Is_So_Bright.mp3' data-ogg='../media/audio/2/Soundroll_-_Sun_Is_So_Bright.ogg'><a class='playlistNonSelected' href='#'>Soundroll - Sun Is So Bright</a></li>"];
var trackList_local_thumb = ["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_A_Way_To_The_Top.mp3' data-ogg='../media/audio/2/Soundroll_-_A_Way_To_The_Top.ogg'><a class='playlistNonSelected' href='#'><span class='hap_thumb'><img src='../media/audio/2/Soundroll_-_A_Way_To_The_Top.jpg' alt=''/></span><span class='hap_title'><p>Soundroll - A Way To The Top</p></span></a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/2/Soundroll_-_Feel_Good_Journey.mp3' data-ogg='../media/audio/2/Soundroll_-_Feel_Good_Journey.ogg'><a class='playlistNonSelected' href='#'><span class='hap_thumb'><img src='../media/audio/2/Soundroll_-_Feel_Good_Journey.jpg' alt=''/></span><span class='hap_title'><p>Soundroll - Feel Good Journey</p></span></a></li>"];
var trackList_podcast = ["<li class= 'playlistItem' data-type='podcast' data-path='http://gidilounge.fm/?feed=podcast'/>", "<li class= 'playlistItem' data-type='podcast' data-path='http://www.kingola.com/feed/podcast/'/>"];
var trackList_soundcloud = ["<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/computer-magic'/>", "<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/an21/favorites'/>"];
var trackList_folder = ["<li class= 'playlistItem' data-type='folder' data-path='../media/audio/1/'/>", "<li class= 'playlistItem' data-type='folder' data-path='../media/audio/2/'/>"];
var trackList_xml = ["<li class= 'playlistItem' data-type='xml' data-path='xml/playlist1.xml'/>", "<li class= 'playlistItem' data-type='xml' data-path='xml/playlist2.xml'/>"];
var trackList_yt_single = ["<li class='playlistItem' data-type='youtube_single' data-path='opL4oe62XL8' ></li>", "<li class='playlistItem' data-type='youtube_single' data-path='Akb7SJgGx1A' ></li>", "<li class='playlistItem' data-type='youtube_single' data-path='uPOUgobWTT0' ></li>"];
var trackList_yt_playlist = ["<li class= 'playlistItem' data-type='youtube_playlist' data-path='PLE0311B1CFA360F55'></li>"];
var trackList_ofm_single = ["<li class= 'playlistItem' data-type='ofm_single' data-path='D4lw'></li>", "<li class= 'playlistItem' data-type='ofm_single' data-path='B1pl'></li>", "<li class= 'playlistItem' data-type='ofm_single' data-path='GGXE'></li>"];
var trackList_ofm_playlist = ["<li class= 'playlistItem' data-type='ofm_playlist' data-path='1rp7'></li>"];
var trackList_ofm_project = ["<li class= 'playlistItem' data-type='ofm_project' data-path='edB6'></li>"];
var trackList_database = ["<li class= 'playlistItem' data-type='database_html' data-path='ap_hap' data-table='sound1'/>"];
var trackList_database2 = ["<li class= 'playlistItem' data-type='database_html' data-path='ap_hap' data-table='sound1' data-limit='3'/>"];
var trackList_database3 = ["<li class= 'playlistItem' data-type='database_html' data-path='ap_hap' data-table='sound1' data-range='1,5'/>"];
var trackList_mixed = ["<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg' data-thumb='../media/audio/1/_A_Bright_And_Hopeful_Future.jpg' data-dlink='local_dlink' data-download='local_global'><a class='playlistNonSelected' href='#'>Tim McMorris - A Bright And Hopeful Future</a></li>", "<li class= 'playlistItem' data-type='local' data-mp3='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3' data-ogg='../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg' data-thumb='../media/audio/1/_A_Bright_And_Hopeful_Future.jpg' data-dlink data-download><a class='playlistNonSelected' href='#'>Tim McMorris - A Bright And Hopeful Future</a></li>", "<li class= 'playlistItem' data-type='podcast' data-path='http://www.npr.org/rss/podcast.php?id=510008' data-dlink='podcast_dlink' data-download='podcast_global' data-thumb='media/default_artwork/podcast/01.jpg'/>", "<li class= 'playlistItem' data-type='podcast' data-path='http://www.npr.org/rss/podcast.php?id=510008' data-dlink data-download data-thumb='media/default_artwork/podcast/01.jpg'/>", "<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/computer-magic' data-dlink='soundcloud_dlink' data-download='soundcloud_global' data-thumb='media/default_artwork/soundcloud/01.jpg'/>", "<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/computer-magic' data-dlink data-download data-thumb='media/default_artwork/soundcloud/01.jpg'/>", "<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/trance/trance-single-138-bpm-anvil' data-dlink='soundcloud_dlink_NON_DW' data-download='soundcloud_global_NON_DW' data-thumb='media/default_artwork/soundcloud/01.jpg'/>", "<li class= 'playlistItem' data-type='soundcloud' data-path='http://soundcloud.com/trance/trance-single-138-bpm-anvil' data-dlink data-download data-thumb='media/default_artwork/soundcloud/01.jpg'/>", "<li class= 'playlistItem' data-type='ofm_single' data-dlink='ofm_single_dlink' data-download='ofm_single_global' data-path='B1pl' data-thumb='media/default_artwork/ofm_single/01.jpg'></li>", "<li class= 'playlistItem' data-type='ofm_single' data-dlink data-download data-path='B1pl' data-thumb='media/default_artwork/ofm_single/01.jpg'></li>", "<li class= 'playlistItem' data-type='ofm_playlist' data-dlink='ofm_playlist_dlink' data-download='ofm_playlist_global' data-path='1rp7' data-thumb='media/default_artwork/ofm_playlist/01.jpg'></li>", "<li class= 'playlistItem' data-type='ofm_playlist' data-dlink data-download data-path='1rp7' data-thumb='media/default_artwork/ofm_playlist/01.jpg'></li>", "<li class= 'playlistItem' data-type='ofm_project' data-dlink='ofm_project_dlink' data-download='ofm_project_global' data-path='edB6' data-thumb='media/default_artwork/ofm_project/01.jpg'></li>", "<li class= 'playlistItem' data-type='ofm_project' data-dlink data-download data-path='edB6' data-thumb='media/default_artwork/ofm_project/01.jpg'></li>", "<li class= 'playlistItem' data-type='youtube_single' data-dlink='youtube_single_dlink' data-download='youtube_single_global' data-path='opL4oe62XL8' data-thumb='media/default_artwork/yt_single/01.jpg'></li>", "<li class= 'playlistItem' data-type='youtube_single' data-dlink data-download data-path='opL4oe62XL8' data-thumb='media/default_artwork/yt_single/01.jpg'></li>", "<li class= 'playlistItem' data-type='youtube_playlist' data-dlink='youtube_playlist_dlink' data-download='youtube_playlist_global' data-path='PLE0311B1CFA360F55' data-thumb='media/default_artwork/yt_playlist/01.jpg'></li>", "<li class= 'playlistItem' data-type='youtube_playlist' data-dlink data-download data-path='PLE0311B1CFA360F55' data-thumb='media/default_artwork/yt_playlist/01.jpg'></li>"];
var trackList2_local1 = [{
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",
    title: "Tim McMorris - A Bright And Hopeful Future",
    thumb: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg"
}, {
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_Be_My_Valentine.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_Be_My_Valentine.ogg",
    title: "Tim McMorris - Be My Valentine",
    thumb: "../media/audio/1/Tim_McMorris_-_Be_My_Valentine.jpg"
}, {
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_Give_Our_Dreams_Their_Wings_To_Fly.ogg",
    title: "Tim McMorris - Give Our Dreams Their Wings To Fly"
}, {
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_Happy_Days_Are_Here_To_Stay.ogg",
    title: "Tim McMorris - Happy Days Are Here To Stay"
}, {
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_Health_Happiness_Success.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_Health_Happiness_Success.ogg",
    title: "Tim McMorris - Health Happiness Success"
}, {
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_Marketing_Advertising_Music.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_Marketing_Advertising_Music.ogg",
    title: "Tim McMorris - Marketing Advertising Music"
}, {
    type: "local",
    mp3: "../media/audio/3/Bluegestalt_-_Becoming.mp3",
    ogg: "../media/audio/3/Bluegestalt_-_Becoming.ogg",
    title: "Bluegestalt - Becoming"
}];
var trackList2_local2 = [{
    type: "local",
    mp3: "../media/audio/2/Soundroll_-_Funky_Boom.mp3",
    ogg: "../media/audio/2/Soundroll_-_Funky_Boom.ogg",
    title: "Soundroll - Funky Boom",
    download: "../media/audio/2/Soundroll_-_Funky_Boom.mp3",
    thumb: "../media/audio/2/Soundroll_-_Funky_Boom.jpg",
    plink: "http://www.google.com",
    dlink: true
}, {
    type: "local",
    mp3: "../media/audio/2/Soundroll_-_Fight_No_More.mp3",
    ogg: "../media/audio/2/Soundroll_-_Fight_No_More.ogg",
    title: "Soundroll - Fight No More"
}, {
    type: "local",
    mp3: "../media/audio/2/Soundroll_-_Rush.mp3",
    ogg: "../media/audio/2/Soundroll_-_Rush.ogg",
    title: "Soundroll - Rush"
}];
var trackList2_soundcloud = [{
    type: "soundcloud",
    path: "http://soundcloud.com/trance/trance-single-138-bpm-anvil",
    download: true,
    dlink: true,
    plink: "http://www.google.com"
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/an21/favorites"
}];
var trackList2_podcast = [{
    type: "podcast",
    path: "http://www.npr.org/rss/podcast.php?id=510008",
    download: true
}, {
    type: "podcast",
    path: "http://feeds.feedburner.com/xpnmusicnotes/",
    plink: "http://www.google.com"
}, {
    type: "podcast",
    path: "http://robertkelly.libsyn.com/rss",
    dlink: true,
    plink: "http://codecanyon.net/user/Tean/portfolio"
}];
var trackList2_folder = [{
    type: "folder",
    path: "../media/audio/1/",
    download: true
}, {
    type: "folder",
    path: "../media/audio/2/"
}];
var trackList2_xml = [{
    type: "xml",
    path: "xml/playlist1.xml"
}, {
    type: "xml",
    path: "xml/playlist2.xml"
}];
var trackList2_yt_single = [{
    type: "youtube_single",
    path: "opL4oe62XL8",
    download: "path/to/custom/youtube_single.extension"
}, {
    type: "youtube_single",
    path: "Akb7SJgGx1A",
    download: true,
    plink: "http://www.google.com"
}, {
    type: "youtube_single",
    path: "uPOUgobWTT0"
}];
var trackList2_yt_playlist = [{
    type: "youtube_playlist",
    path: "PLE0311B1CFA360F55",
    download: true
}];
var trackList2_ofm_single = [{
    type: "ofm_single",
    path: "D4lw",
    download: "path/to/custom/ofm_single.extension"
}, {
    type: "ofm_single",
    path: "B1pl"
}, {
    type: "ofm_single",
    path: "GGXE",
    download: true
}];
var trackList2_ofm_playlist = [{
    type: "ofm_playlist",
    path: "1rp7"
}];
var trackList2_ofm_project = [{
    type: "ofm_project",
    path: "edB6"
}];
var trackList2_database = [{
    type: "database_data",
    path: "ap_hap",
    table: "sound"
}];
var trackList2_database2 = [{
    type: "database_data",
    path: "ap_hap",
    table: "sound",
    limit: 5
}];
var trackList2_database3 = [{
    type: "database_data",
    path: "ap_hap",
    table: "sound",
    range: "1,4"
}];
var trackList2_mixed = [{
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",
    title: "Tim McMorris - A Bright And Hopeful Future",
    thumb: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg",
    dlink: "local_dlink",
    download: "path/to/custom/local.extension"
}, {
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",
    title: "Tim McMorris - A Bright And Hopeful Future",
    thumb: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.jpg",
    dlink: true,
    download: true
}, {
    type: "podcast",
    path: "http://www.npr.org/rss/podcast.php?id=510008",
    dlink: "podcast_dlink",
    download: "path/to/custom/podcast.extension"
}, {
    type: "podcast",
    path: "http://www.npr.org/rss/podcast.php?id=510008",
    dlink: true,
    download: true
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/computer-magic",
    dlink: "soundcloud_dlink",
    download: "path/to/custom/soundcloud.extension"
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/computer-magic",
    dlink: true,
    download: true
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/trance/trance-single-138-bpm-anvil",
    dlink: "soundcloud_dlink_NON_DW",
    download: "path/to/custom/soundcloud.extension_NON_DW"
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/trance/trance-single-138-bpm-anvil",
    dlink: true,
    download: true
}, {
    type: "ofm_single",
    path: "B1pl",
    dlink: "ofm_single_dlink",
    download: "path/to/custom/ofm_single.extension"
}, {
    type: "ofm_single",
    path: "B1pl",
    dlink: true,
    download: true
}, {
    type: "ofm_playlist",
    path: "1rp7",
    dlink: "ofm_playlist_dlink",
    download: "path/to/custom/ofm_playlist.extension"
}, {
    type: "ofm_playlist",
    path: "1rp7",
    dlink: true,
    download: true
}, {
    type: "ofm_project",
    path: "edB6",
    dlink: "ofm_project_dlink",
    download: "path/to/custom/ofm_project.extension"
}, {
    type: "ofm_project",
    path: "edB6",
    dlink: true,
    download: true
}, {
    type: "youtube_single",
    path: "opL4oe62XL8",
    dlink: "youtube_single_dlink",
    download: "path/to/custom/youtube_single.extension"
}, {
    type: "youtube_single",
    path: "opL4oe62XL8",
    dlink: true,
    download: true
}, {
    type: "youtube_playlist",
    path: "PLE0311B1CFA360F55",
    dlink: "youtube_playlist_dlink",
    download: "path/to/custom/youtube_playlist.extension"
}, {
    type: "youtube_playlist",
    path: "PLE0311B1CFA360F55",
    dlink: true,
    download: true
}];
var trackList2_mixed2 = [{
    type: "local",
    mp3: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.mp3",
    ogg: "../media/audio/1/Tim_McMorris_-_A_Bright_And_Hopeful_Future.ogg",
    title: "Tim McMorris - A Bright And Hopeful Future",
    download: true,
    dlink: "custom/path/to/download"
}, {
    type: "podcast",
    path: "http://www.npr.org/rss/podcast.php?id=510008",
    download: true,
    dlink: true
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/computer-magic",
    download: true,
    dlink: true
}, {
    type: "soundcloud",
    path: "http://soundcloud.com/trance/trance-single-138-bpm-anvil",
    download: true,
    dlink: true
}, {
    type: "youtube_single",
    path: "opL4oe62XL8",
    download: true
}, {
    type: "ofm_single",
    path: "D4lw"
}];
var titleList = ["Tim McMorris - A Bright And Hopeful Future", "Tim McMorris - Be My Valentine", "Tim McMorris - Give Our Dreams Their Wings To Fly", "Tim McMorris - Happy Days Are Here To Stay", "Tim McMorris - Health Happiness Success", "Tim McMorris - Marketing Advertising Music", "Tim McMorris - Successful Business Venture"];
var titleList2 = ["Soundroll - A Way To The Top", "Soundroll - Feel Good Journey", "Soundroll - Fight No More", "Soundroll - Funky Boom", "Soundroll - Pump The Club", "Soundroll - Rush", "Soundroll - Sun Is So Bright"];
var audio = document.createElement("audio"),
    mp3Support, oggSupport, html5Support = false,
    hap_source_path = "";
if (audio.canPlayType) {
    html5Support = true;
    mp3Support = !!audio.canPlayType && "" != audio.canPlayType("audio/mpeg");
    oggSupport = !!audio.canPlayType && "" != audio.canPlayType('audio/ogg; codecs="vorbis"')
}
var isMobile = (/Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent));
var isIE = false,
    ieBelow9 = false,
    ieBelow8 = false;
var ie_check = getInternetExplorerVersion();
if (ie_check != -1) {
    isIE = true;
    if (ie_check < 9) {
        ieBelow9 = true
    }
    if (ie_check < 8) {
        ieBelow8 = true
    }
}

function getInternetExplorerVersion() {
    var c = -1;
    if (navigator.appName == "Microsoft Internet Explorer") {
        var a = navigator.userAgent;
        var b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        if (b.exec(a) != null) {
            c = parseFloat(RegExp.$1)
        }
    } else {
        if (navigator.appName == "Netscape") {
            var a = navigator.userAgent;
            var b = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
            if (b.exec(a) != null) {
                c = parseFloat(RegExp.$1)
            }
        }
    }
    return c
}

function checkFlash(a, d) {
    var e = 0,
        g = a.length;
    if (!html5Support) {
        for (e; e < g; e++) {
            var f = "flashAudio" + e;
            var b = "flashMain" + e;
            var m = "circleMain" + e;
            a[e].settings.flash_id = e;
            a[e].settings.flashAudio = "#" + f;
            a[e].settings.flashYoutube = "#" + b;
            a[e].settings.circleMain = "#" + m;
            var h = jQuery("<div/>").addClass("flashAudio");
            var l = jQuery("<div id='" + f + "'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(h);
            var k = jQuery("<div/>").addClass("flashMain");
            var c = jQuery("<div id='" + b + "'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(k);
            a[e].holder.append(h);
            a[e].holder.append(k);
            if (d) {
                var n = jQuery("<div/>").addClass("circleMain");
                var j = jQuery("<div id='" + m + "'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player'/></a></div>").appendTo(n);
                a[e].holder.find("div[class=circlePlayer]").append(n)
            }
        }
    } else {
        e = 0;
        for (e; e < g; e++) {
            if (a[e].settings.useOnlyMp3Format && !mp3Support) {
                var f = "flashAudio" + e;
                a[e].settings.flash_id = e;
                a[e].settings.flashAudio = "#" + f;
                var h = jQuery("<div/>").addClass("flashAudio");
                var l = jQuery("<div id='" + f + "'><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></div>").appendTo(h);
                a[e].holder.append(h)
            }
        }
    }
}
var hap_params = {
    quality: "high",
    scale: "noscale",
    salign: "tl",
    wmode: "transparent",
    bgcolor: "#111111",
    devicefont: "false",
    allowfullscreen: "true",
    allowscriptaccess: "always"
};

function embedFlashMain(c) {
    if (jQuery(".flashMain").length == 0) {
        return
    }
    jQuery(".flashMain").css("display", "block");
    var a = {},
        b = {
            id: c
        };
    swfobject.embedSWF("preview.swf", c, "320px", "240px", "9.0.0", "expressInstall.swf", a, hap_params, b)
}

function embedFlashAudio(c) {
    if (jQuery(".flashAudio").length == 0) {
        return
    }
    jQuery(".flashAudio").css("display", "block");
    var a = {},
        b = {
            id: c
        };
    swfobject.embedSWF("preview2.swf", c, "100px", "100px", "9.0.0", "expressInstall.swf", a, hap_params, b)
}

function embedFlashCircle(c) {
    if (jQuery(".circleMain").length == 0) {
        return
    }
    jQuery(".circleMain").css("display", "block");
    var a = {},
        b = {
            id: c
        };
    swfobject.embedSWF("circle.swf", c, "160px", "160px", "9.0.0", "expressInstall.swf", a, hap_params, b)
}
var jsReady = false;

function isReady() {
    return jsReady
}

function flashVideoEnd(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashVideoEnd()
    }
}

function flashVideoStart(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashVideoStart()
    }
}

function flashVideoPause(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashVideoPause()
    }
}

function flashVideoResume(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashVideoResume()
    }
}

function flashYoutubeData(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashYoutubeData(a.bl, a.bt, a.t, a.d)
    }
}

function flashAudioEnd(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashAudioEnd()
    }
}

function flashAudioData(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashAudioData(a.bl, a.bt, a.t, a.d)
    }
}

function flashCircleToggle(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashCircleToggle()
    }
}

function flashCircleOverLoader(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashCircleOverLoader(a.val)
    }
}

function flashCircleOutLoader(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashCircleOutLoader()
    }
}

function flashCircleSeek(a) {
    if (hap_players[a.id]) {
        hap_players[a.id].flashCircleSeek(a.val)
    }
}

function notify_popup() {
    if (hap_popup && hap_popup.initPopup != undefined) {
        if (hap_settings.autoUpdateWindowData) {
            updatePlayerData()
        }
        if (hap_players && hap_players[0]) {
            if (hap_players[0].destroyPlaylist != undefined) {
                hap_players[0].destroyPlaylist()
            }
        }
        jQuery("#componentWrapper").css("display", "none");
        try {
            if (hap_popup.initPopup != undefined) {
                hap_popup.initPopup(hap_settings)
            }
            if (hap_players[0]) {
                hap_players[0].find(".popup_open").css("display", "none")
            }
        } catch (a) {
            alert("parent notify_popup error: " + a.message);
            return false
        }
    }
}

function open_player(a) {
    if (hap_settings.autoUpdateWindowData) {
        if (a) {
            hap_players[0] = a
        }
        updatePlayerData(true)
    }
    hap_players[0] = jQuery("#componentWrapper").css("display", "block").html5audio(hap_settings);
    if (!html5Support) {
        hap_players[0].embedFlash()
    }
    hap_players[0].find(".popup_open").css("display", "block")
}

function open_popup(c, b, f, d) {
    if (typeof(c) === "undefined" || typeof(b) === "undefined" || typeof(f) === "undefined") {
        return false
    }
    var a = (window.screen.width - b) / 2,
        e = (window.screen.height - f) / 2;
    if (!hap_popup || hap_popup.closed) {
        if (d) {
            hap_popup = window.open(c, "hap_popup_window", "menubar=no,toolbar=no,location=no,scrollbars=1,resizable,width=" + b + ",height=" + f + ",left=" + a + ",top=" + e + "")
        } else {
            hap_popup = window.open(c, "hap_popup_window", "menubar=no,toolbar=no,location=no,width=" + b + ",height=" + f + ",left=" + a + ",top=" + e + "")
        }
        if (!hap_popup) {
            alert("Music Player can not be opened in a popup window because your browser is blocking Pop-Ups. Please allow Pop-Ups in browser for this site to use the Music Player.");
            return false
        }
        if (window.focus) {
            hap_popup.focus()
        }
    } else {}
    return false
}

function updatePlayerData(d) {
    if (!hap_players[0] || !hap_settings) {
        return false
    }
    if (!isNaN(hap_players[0].getVolume())) {
        hap_settings.defaultVolume = hap_players[0].getVolume()
    }
    if (!isNaN(hap_players[0].getActiveItem())) {
        hap_settings.activeItem = hap_players[0].getActiveItem()
    }
    var e = hap_players[0].getPlaylistLoaded();
    if (e) {
        var f = hap_players[0].getPlaylistHidden();
        if (!f) {
            var g = hap_players[0].find(".playlist_inner").find("ul");
            if (g.length > 0) {
                var a = g.attr("id");
                if (d && isIE) {
                    var c = jQuery(g.clone(true, true).wrap("<p>").parent().html())
                } else {
                    var c = g.clone(true, true)
                }
                jQuery(hap_settings.playlistList).find("#" + a).remove();
                c.appendTo(jQuery(hap_settings.playlistList));
                hap_settings.activePlaylist = {
                    hidden: false,
                    id: "#" + a
                }
            }
        } else {
            var g = hap_players[0].get_hidden_playlist_holder().children();
            if (g.length > 0) {
                var a = "playlist" + Math.floor((Math.random() * 9999));
                var c = jQuery("<ul id=" + a + "/>");
                if (d && isIE) {
                    jQuery(g.clone(true, true).wrap("<p>").parent().html()).appendTo(c)
                } else {
                    g.clone(true, true).appendTo(c)
                }
                if (hap_players[0].getPlaylistList()) {
                    c.appendTo(hap_players[0].getPlaylistList());
                    hap_settings.activePlaylist = {
                        hidden: true,
                        id: "#" + a
                    };
                    hap_players[0].get_hidden_playlist_holder().html("")
                }
            }
        }
        var b = hap_players[0].getMediaPlaying();
        b ? hap_settings.autoPlay = true : hap_settings.autoPlay = false
    } else {
        hap_settings.activePlaylist = ""
    }
}

function guid() {
    function a() {
        return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
    }
    return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
}

function get_ts() {
    return Math.floor(Date.now() / 1000)
}

function CookieStatInit() {
    if (typeof($.cookie("___guid")) == "undefined") {
        $.cookie("___create_ts", get_ts(), {
            expires: 365
        });
        $.cookie("___guid", guid(), {
            expires: 365
        })
    }
    if (typeof($.cookie("__pages")) == "undefined") {
        $.cookie("__pages", 1, {
            expires: 1
        })
    } else {
        $.cookie("__pages", parseInt($.cookie("__pages")) + 1, {
            expires: 365
        })
    }
    UserActivityStatRequest(window.location.pathname)
}

function UserActivityStatRequest(a) {
    window.GLOBALSTAT = {
        uri: a,
        page: $.cookie("__pages"),
        guid: $.cookie("___guid"),
    };
    if (typeof($.cookie("___create_ts")) != "undefined") {
        window.GLOBALSTAT.create_ts = $.cookie("___create_ts")
    }
    window.GLOBALSTAT.action = "user_activity_stat";
    $.ajax({
        url: window.STATISTIC_LOGER_URL,
        data: window.GLOBALSTAT,
        dataType: "jsonp"
    })
}
var DEFAULT_CONFIG = {
    useOnlyMp3Format: true,
    activeItem: 0,
    defaultVolume: 0.5,
    autoPlay: false,
    autoLoad: false,
    randomPlay: false,
    loopingOn: false,
    usePlaylistRollovers: false,
    playlistItemContent: "title",
    useNumbersInPlaylist: true,
    titleSeparator: ".&nbsp;",
    autoSetSongTitle: true,
    useSongNameScroll: false,
    scrollSpeed: 1,
    scrollSeparator: "&nbsp;&#42;&#42;&#42;&nbsp;",
    mediaTimeSeparator: "",
    useVolumeTooltip: true,
    useSeekbarTooltip: true,
    seekTooltipSeparator: "&nbsp;/&nbsp;",
    defaultArtistData: "Artist&nbsp;Name&nbsp;-&nbsp;Artist&nbsp;Title",
    useBtnRollovers: false,
    buttonsUrl: {
        prev: "",
        prevOn: "",
        next: "",
        nextOn: "",
        pause: "",
        pauseOn: "",
        play: "",
        playOn: "",
        volume: "",
        volumeOn: "",
        mute: "",
        muteOn: "",
        download: "",
        downloadOn: "",
        loop: "",
        loopOn: "",
        shuffle: "",
        shuffleOn: "",
        trackUrlIcon: "",
        trackDownloadIcon: "",
        trackRemoveIcon: "",
        link_play: "",
        link_pause: ""
    },
    useAlertMessaging: true,
    activatePlaylistScroll: false,
    playlistScrollOrientation: "vertical",
    sortablePlaylistItems: false,
    useRemoveBtnInTracks: true,
    autoReuseMailForDownload: true,
    useKeyboardNavigation: false,
    getTrackInfoFromID3: false,
    ytAppId: "",
};

function base64_decode(g) {
    var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var c, b, a, l, k, j, h, m, f = 0,
        e = "";
    do {
        l = d.indexOf(g.charAt(f++));
        k = d.indexOf(g.charAt(f++));
        j = d.indexOf(g.charAt(f++));
        h = d.indexOf(g.charAt(f++));
        m = l << 18 | k << 12 | j << 6 | h;
        c = m >> 16 & 255;
        b = m >> 8 & 255;
        a = m & 255;
        if (j == 64) {
            e += String.fromCharCode(c)
        } else {
            if (h == 64) {
                e += String.fromCharCode(c, b)
            } else {
                e += String.fromCharCode(c, b, a)
            }
        }
    } while (f < g.length);
    return e
}

function audioPlayerSoundEnd(a) {
    try {
        AudioPlayer._eventAudioPlayerSoundEnd(a)
    } catch (b) {
        console.log(b)
    }
}

function audioPlayerSoundStart(a) {
    AudioPlayer.current_audio_id = $(a).parents(".listenSongItem").attr("rel");
    AudioPlayer._eventAudioStart(a)
}

function audioPlayerSoundPlay(a) {
    if (AudioPlayer.IsPlayButtonLocked()) {
        a.checkAudio("pause")
    }
}
jsReady = true;
var AudioPlayer = {
    onCliclStaticAdd: true,
    _lockPlayButtonActions: false,
    PlayCurrent: function() {
        var a = AudioPlayer.instances[AudioPlayer.current_audio_id];
        a.playAudio()
    },
    IsPlayButtonLocked: function() {
        return AudioPlayer._lockPlayButtonActions
    },
    LockPlayButtonActions: function() {
        AudioPlayer._lockPlayButtonActions = true
    },
    UnlockPlayButtonActions: function() {
        AudioPlayer._lockPlayButtonActions = false
    },
    volumeDefaultLevel: 0.5,
    getVolumeLevel: function() {
        if ($.cookie("volumeLevel") == null) {
            return AudioPlayer.volumeDefaultLevel
        } else {
            return $.cookie("volumeLevel")
        }
    },
    _catchedPlay: function() {},
    _catchedPause: function() {},
    _eventAudioStart: function() {},
    ClickByAudioId: function(a) {
        var b = $(AudioPlayer.instances[a]).children(".controls_toggle");
        b.click()
    },
    _eventAudioPlayerSoundEnd: function(a) {
        App.track("Audio", "End play");
        var d = $(a).parents(".listenSongItem").attr("rel");
        var e = AudioPlayer.audio_ids.indexOf(d);
        var b = e + 1;
        if (AudioPlayer.audio_ids.length != 1) {
            var f;
            if (typeof AudioPlayer.audio_ids[b] != "undefined") {
                f = AudioPlayer.audio_ids[b]
            } else {
                if (!$(".pagination").exists()) {
                    f = AudioPlayer.audio_ids[0]
                } else {
                    if ($(".pagination li.current").next().exists()) {
                        $.cookie("autoplayNewPage", 1, {
                            expires: (1 / 24) * ((1 / 60))
                        });
                        document.location.href = $(".pagination li.current").next().find("a").attr("href")
                    } else {
                        f = AudioPlayer.audio_ids[0]
                    }
                }
            }
            var g = $(a).children(".controls_toggle");
            g.click();
            if (typeof AudioPlayer.instances[f] != "undefined") {
                var c = AudioPlayer.instances[f];
                var h = $(c).children(".controls_toggle");
                h.click()
            }
        }
    },
    default_config: null,
    instances: [],
    audio_ids: [],
    current_audio_id: null,
    pauseAll: function(a) {
        $(AudioPlayer.audio_ids).each(function(b, c) {
            if (a != c) {
                AudioPlayer.instances[c].checkAudio("stop");
                $("#componentWrapper" + c).find(".player_mediaTime_current").text($("#componentWrapper" + c).find(".truetime").text())
            } else {
                AudioPlayer.instances[c].checkAudio("pause")
            }
        })
    },
    initAudioAdvBlock: function() {},
    initOnSelector: function(a) {
        $(a + ".listenSongItem").each(function(f, g) {
            var b = $(g).attr("rel");
            var d = base64_decode($(g).attr("data-url"));
            $("#playlistItem_" + b).attr("data-mp3", d);
            var c = AudioPlayer.default_config;
            c.sound_id = "pl_" + b;
            c.playlistList = "#playlist_list_" + b;
            c.activePlaylist = {
                hidden: true,
                id: "#playlist_" + b
            };
            if (typeof AudioPlayer.instances[b] == "undefined") {
                AudioPlayer.audio_ids.push(b);
                AudioPlayer.instances[b] = $("#componentWrapper" + b).html5audio(c);
                AudioPlayer.instances[b].find(".player_mediaTime_current").text(AudioPlayer.instances[b].find(".truetime").text())
            }
        });
        $(a + ".controls_toggle").on("click", function(g) {
            var k = ".othersArtists, .componentWrapper .player_volume_wrapper, .componentWrapper .player_progress, .componentWrapper .item-likes-wrapper";
            if (AudioPlayer.IsPlayButtonLocked()) {
                if ($(this).hasClass("clicked")) {
                    $(this).removeClass("clicked");
                    $(this).closest(".listenSongItem").removeClass("active").find(k).slideUp(300);
                    AudioPlayer._catchedPause()
                } else {
                    $(".songPlay").show();
                    $(".songPause").hide();
                    $(".controls_toggle.clicked").removeClass("clicked").closest(".listenSongItem.active").removeClass("active").find(k).slideUp(300);
                    console.log("up");
                    $(this).addClass("clicked");
                    $(this).closest(".listenSongItem").addClass("active").find(k).slideDown(300);
                    AudioPlayer._catchedPlay()
                }
                return
            }
            var f = $(g.target).parents(".listenSongItem").attr("rel");
            var j = AudioPlayer.instances[f];
            AudioPlayer.pauseAll(f);
            if ($(this).hasClass("clicked")) {
                j.pauseAudio();
                $(this).removeClass("clicked");
                $(this).closest(".listenSongItem").removeClass("active").find(k).slideUp(300)
            } else {
                j.playAudio();
                $(".songPlay").show();
                $(".songPause").hide();
                $(".controls_toggle.clicked").removeClass("clicked").closest(".listenSongItem.active").removeClass("active").find(k).slideUp(300);
                $(this).addClass("clicked");
                $(this).closest(".listenSongItem").addClass("active").find(k).slideDown(300);
                try {
                    App.track("Audio Desktop", "Play");
                    App.track("Audio", "Play")
                } catch (g) {
                    console.log(g)
                }
                var c = {
                    action: "audio_listen",
                    record_id: f
                };
                if (typeof SELECTION_ID != "undefined" && parseInt(SELECTION_ID) > 0) {
                    c.selection_id = SELECTION_ID
                }
                $.ajax({
                    url: window.STATISTIC_LOGER_URL,
                    data: c,
                    dataType: "jsonp"
                });
                var h;
                if (typeof $.cookie("TrackTraceMusic") != "undefined" && $.cookie("TrackTraceMusic") != null) {
                    h = $.cookie("TrackTraceMusic").split("|");
                    if ($.inArray(f, h) == -1) {
                        h.unshift(f)
                    }
                } else {
                    h = [f]
                }
                if (h.length > 200) {
                    var l = [];
                    for (var d = 0; d < 200; d++) {
                        l.unshift(h[h.length - d])
                    }
                    h = l
                }
                $.cookie("TrackTraceMusic", h.join("|"), {
                    expires: 300
                });
                if (window.IS_NUR) {
                    var b;
                    if (typeof $.cookie("TraceMusic") != "undefined" && $.cookie("TraceMusic") != null) {
                        b = $.cookie("TraceMusic").split("|");
                        if ($.inArray(f, b) == -1) {
                            b.push(f)
                        } else {
                            return
                        }
                    } else {
                        b = [f]
                    }
                    $.cookie("TraceMusic", b.join("|"), {
                        expires: (1 / 24) * ((1 / 60) * 45)
                    });
                    if (b.length > 1) {
                        $.ajax({
                            url: window.STATISTIC_LOGER_URL,
                            data: {
                                action: "audio_trace",
                                audio_ids: $.cookie("TraceMusic")
                            },
                            dataType: "jsonp"
                        })
                    }
                }
            }
        })
    },
    init: function(a) {
        AudioPlayer.default_config = a;
        $(".listenSongItem").each(function(g, h) {
            var c = $(h).attr("rel");
            var f = base64_decode($(h).attr("data-url"));
            $("#playlistItem_" + c).attr("data-mp3", f);
            var d = AudioPlayer.default_config;
            d.sound_id = "pl_" + c;
            d.playlistList = "#playlist_list_" + c;
            d.activePlaylist = {
                hidden: true,
                id: "#playlist_" + c
            };
            if (typeof AudioPlayer.instances[c] == "undefined") {
                AudioPlayer.audio_ids.push(c);
                AudioPlayer.instances[c] = $("#componentWrapper" + c).html5audio(d);
                AudioPlayer.instances[c].find(".player_mediaTime_current").text(AudioPlayer.instances[c].find(".truetime").text())
            }
        });
        $(".controls_toggle").on("click", function(h) {
            var l = ".othersArtists, .componentWrapper .player_volume_wrapper, .componentWrapper .player_progress, .componentWrapper .item-likes-wrapper";
            if (AudioPlayer.IsPlayButtonLocked()) {
                if ($(this).hasClass("clicked")) {
                    $(this).removeClass("clicked");
                    $(this).closest(".listenSongItem").removeClass("active").find(l).slideUp(300);
                    AudioPlayer._catchedPause()
                } else {
                    $(".songPlay").show();
                    $(".songPause").hide();
                    $(".controls_toggle.clicked").removeClass("clicked").closest(".listenSongItem.active").removeClass("active").find(l).slideUp(300);
                    console.log("up");
                    $(this).addClass("clicked");
                    $(this).closest(".listenSongItem").addClass("active").find(l).slideDown(300);
                    AudioPlayer._catchedPlay()
                }
                return
            }
            var g = $(h.target).parents(".listenSongItem").attr("rel");
            var k = AudioPlayer.instances[g];
            AudioPlayer.pauseAll(g);
            if ($(this).hasClass("clicked")) {
                k.pauseAudio();
                $(this).removeClass("clicked");
                $(this).closest(".listenSongItem").removeClass("active").find(l).slideUp(300)
            } else {
                k.playAudio();
                $(".songPlay").show();
                $(".songPause").hide();
                $(".controls_toggle.clicked").removeClass("clicked").closest(".listenSongItem.active").removeClass("active").find(l).slideUp(300);
                $(this).addClass("clicked");
                $(this).closest(".listenSongItem").addClass("active").find(l).slideDown(300);
                try {
                    App.track("Audio Desktop", "Play");
                    App.track("Audio", "Play")
                } catch (h) {
                    console.log(h)
                }
                var d = {
                    action: "audio_listen",
                    record_id: g
                };
                if (typeof SELECTION_ID != "undefined" && parseInt(SELECTION_ID) > 0) {
                    d.selection_id = SELECTION_ID
                }
                $.ajax({
                    url: window.STATISTIC_LOGER_URL,
                    data: d,
                    dataType: "jsonp"
                });
                var j;
                if (typeof $.cookie("TrackTraceMusic") != "undefined" && $.cookie("TrackTraceMusic") != null) {
                    j = $.cookie("TrackTraceMusic").split("|");
                    if ($.inArray(g, j) == -1) {
                        j.unshift(g)
                    }
                } else {
                    j = [g]
                }
                if (j.length > 200) {
                    var m = [];
                    for (var f = 0; f < 200; f++) {
                        m.unshift(j[j.length - f])
                    }
                    j = m
                }
                $.cookie("TrackTraceMusic", j.join("|"), {
                    expires: 300
                });
                if (window.IS_NUR) {
                    var c;
                    if (typeof $.cookie("TraceMusic") != "undefined" && $.cookie("TraceMusic") != null) {
                        c = $.cookie("TraceMusic").split("|");
                        if ($.inArray(g, c) == -1) {
                            c.push(g)
                        } else {
                            return
                        }
                    } else {
                        c = [g]
                    }
                    $.cookie("TraceMusic", c.join("|"), {
                        expires: (1 / 24) * ((1 / 60) * 45)
                    });
                    if (c.length > 1) {
                        $.ajax({
                            url: window.STATISTIC_LOGER_URL,
                            data: {
                                action: "audio_trace",
                                audio_ids: $.cookie("TraceMusic")
                            },
                            dataType: "jsonp"
                        })
                    }
                }
            }
        });
        if ($.cookie("autoplayNewPage") == "1") {
            try {
                $(".controls_toggle").first().click()
            } catch (b) {
                console.log(b)
            }
            $.cookie("autoplayNewPage", 0, {
                expires: (1 / 24) * ((1 / 60))
            })
        }
    }
};
AudioPlayer.init(DEFAULT_CONFIG);
jQuery.fn.exists = function() {
    return jQuery(this).length
};
var winWidth = $(window).width();
var winHeight = $(window).height();
$(".h__menu_btn").on("click", function() {
    $(this).toggleClass("close").closest("body").find(".overlayBox").toggleClass("show")
});
$(".m__menu_sublist_caption").on("click", function() {
    $(this).toggleClass("clicked").closest(".m__menu_item").find(".m__menu_sublist").slideToggle()
});
$(".mainMenu .allMenuLink a").on("click", function(a) {
    a.preventDefault();
    $(".allMenuList").slideToggle(300)
});
$(".closeAllMenu").on("click", function() {
    $(this).closest(".allMenuList").slideUp(300)
});
$(".userAccountMenu span").on("click", function() {
    $(this).closest(".userAccountMenu").toggleClass("clicked").find("ul").slideToggle(300)
});
$(".showModerationTools").on("click", function() {
    $(this).toggleClass("clicked").closest(".mainMenu").find(".moderationTools").slideToggle(300)
});
$(".downloadSongLinkFull").on("click", function(b) {
    var a = $(b.target).parents(".listenSongItem").attr("rel");
    location.href = "/aget&id=" + a
});
if (!window.LOGGEDIN) {
    $LAB.script(window.STATIC_CDN + "/static/frontend/js/Audio/fancybox.2.15.js").wait(function() {
        $("#loginLink").fancybox({
            wrapCSS: "fancyboxLoginPopup",
            closeBtn: false,
            helpers: {
                overlay: {
                    css: {
                        background: "rgba(0,0,0,0.5)"
                    }
                }
            }
        })
    });
    $(".closePopup").on("click", function(a) {
        a.preventDefault();
        parent.$.fancybox.close()
    })
}
$(".songPlay").not(".disabled").on("click", function() {
    $(".songPlay").show();
    $(".songPause").hide();
    $(this).hide();
    $(this).closest(".songItem").find(".songPause").show();
    $(".controls_toggle.clicked").removeClass("clicked").closest(".listenSongItem.active").removeClass("active").find(".othersArtists, .componentWrapper .player_volume_wrapper, .componentWrapper .player_progress").slideUp(300)
});
$(".songPause").on("click", function() {
    $(".songPlay").show();
    $(".songPause").hide()
});
$(".player_volume").on("click", function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked")
    } else {
        $(".player_volume.clicked").removeClass("clicked");
        $(this).addClass("clicked")
    }
});
$(".genresList span").on("click", function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked").closest(".genresList").find(".genresListPopup").slideUp(300)
    } else {
        $(".genresList span.clicked + .genresListPopup").slideUp(300);
        $(".genresList span.clicked").removeClass("clicked");
        $(this).addClass("clicked").closest(".genresList").find(".genresListPopup").slideDown(300)
    }
});
$(".filterList span").on("click", function() {
    if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked").closest(".filterList").find(".filterListPopup").slideUp(300)
    } else {
        $(".filterList span.clicked + .filterListPopup").slideUp(300);
        $(".filterList span.clicked").removeClass("clicked");
        $(this).addClass("clicked").closest(".filterList").find(".filterListPopup").slideDown(300)
    }
});
$(document).on("click", function(a) {
    if (!$(a.target).parents().hasClass("genresList")) {
        $(".genresListPopup").hide();
        $(".genresList span").removeClass("clicked")
    }
});
$(document).on("click", function(a) {
    if (!$(a.target).parents().hasClass("filterList")) {
        $(".filterListPopup").hide();
        $(".filterList span").removeClass("clicked")
    }
});
$(".artistAlbums .thm-btn-1").on("click", function(a) {
    a.preventDefault();
    $(this).toggleClass("clicked").closest(".artistAlbumsWrap").find(".artistAlbumItem").not(".artistAlbumItem:nth-child(1), .artistAlbumItem:nth-child(2), .artistAlbumItem:nth-child(3), .artistAlbumItem:nth-child(4)").slideToggle(300)
});
$(".showItemDesc").on("click", function(a) {
    a.preventDefault();
    $(this).closest(".itemDesc-widget").find(".itemDescWrap").find("p").not("p:first-child").slideToggle(300)
});
$(".showTextAddFrom").on("click", function(a) {
    a.preventDefault();
    $(this).closest(".itemDesc-widget").find(".addTextSongForm").slideDown(300)
});
$(".artistWidgetItem p").mousemove(function(f) {
    var a = $(this).find(".artistNamePopup").outerWidth();
    var d = $(this).offset();
    var c = f.pageX - d.left - (a / 2);
    var b = f.pageY - d.top - 46;
    $(this).find(".artistNamePopup").css({
        top: b,
        left: c
    })
});

function get_likes() {
    $.post("/ajax&action=get_likes&type=" + window.likesType + "&id=" + window.likesId, function(a) {
        $(".likes span").text(a.content.likes);
        $(".dislikes span").text(a.content.dislikes)
    })
}

function like(d, g, e) {
    if (typeof window.likesLock != "undefined" || typeof window.dislikesLock != "undefined") {
        return
    } else {
        window.likesLock = true;
        window.dislikesLock = true
    }
    if (typeof d != "undefined") {
        window.likesType = d
    }
    if (typeof g != "undefined") {
        window.likesId = g
    }
    if (typeof e == "undefined") {
        var b = parseInt($(".likes span").text());
        $(".likes span").text(b + 1)
    }
    $.get("/ajax&action=like&type=" + window.likesType + "&id=" + window.likesId + "&like=1");
    var f;
    if (typeof $.cookie("likesMusic") != "undefined" && $.cookie("likesMusic") != null) {
        f = $.cookie("likesMusic").split("|");
        if ($.inArray(window.likesId, f) == -1) {
            f.push(window.likesId)
        }
    } else {
        f = [window.likesId]
    }
    if (f.length > 120) {
        var a = [];
        for (var c = 0; c < 120; c++) {
            a.push(f[f.length - c])
        }
        f = a
    }
    $.cookie("likesMusic", f.join("|"), {
        expires: 300
    })
}

function dislike(d, g, f) {
    if (typeof window.likesLock != "undefined" || typeof window.dislikesLock != "undefined") {
        return
    } else {
        window.likesLock = true;
        window.dislikesLock = true
    }
    if (typeof d != "undefined") {
        window.likesType = d
    }
    if (typeof g != "undefined") {
        window.likesId = g
    }
    if (typeof f == "undefined") {
        var e = parseInt($(".dislikes span").text());
        $(".dislikes span").text(e + 1)
    }
    $.get("/ajax&action=like&type=" + window.likesType + "&id=" + window.likesId + "&like=0");
    var b;
    if (typeof $.cookie("dislikesMusic") != "undefined" && $.cookie("dislikesMusic") != null) {
        b = $.cookie("dislikesMusic").split("|");
        if ($.inArray(window.likesId, b) == -1) {
            b.push(window.likesId)
        }
    } else {
        b = [window.likesId]
    }
    if (b.length > 200) {
        var a = [];
        for (var c = 0; c < 200; c++) {
            a.push(b[b.length - c])
        }
        b = a
    }
    $.cookie("dislikesMusic", b.join("|"), {
        expires: 300
    })
}

function artist_trace() {
    var a;
    if (typeof $.cookie("ArtistTraceMusic") != "undefined" && $.cookie("ArtistTraceMusic") != null) {
        a = $.cookie("ArtistTraceMusic").split("|");
        if ($.inArray(__artistId, a) == -1) {
            a.push(__artistId)
        } else {
            return
        }
    } else {
        a = [__artistId]
    }
    $.cookie("ArtistTraceMusic", a.join("|"), {
        expires: (1 / 24) * ((1 / 60) * 45)
    });
    if (a.length > 1) {
        $.ajax({
            url: window.STATISTIC_LOGER_URL,
            data: {
                action: "artist_trace",
                artist_ids: $.cookie("ArtistTraceMusic")
            },
            dataType: "jsonp"
        })
    }
}
var App = {
    track: function(b, d, a) {
        var c = {
            hitType: "event",
            eventCategory: b,
            eventAction: d
        };
        if (typeof a != "undefined") {
            c.eventLabel = a
        }
        try {
            ga("send", c)
        } catch (f) {
            console.log(f)
        }
    }
};
var AudioModule = {
    initIndex: function() {},
    initUpload: function() {
        $LAB.script(window.STATIC_CDN + "static/frontend/js/components/swfupload.js").script(window.STATIC_CDN + "static/frontend/js/components/swfupload.progress.js").wait(function() {
            var d = 0;
            console.log(window.HOST);
            postParams = {
                PHPSESSID: sessionId,
                requestCookies: requestCookies,
                upload_type: "audio",
                upload_token: $("#upload_token").val(),
                destination_servers: $("#destination_servers").val(),
                api_host: window.HOST
            };
            if (typeof $("#selection_id").val() != "undefined") {
                postParams.selection_id = parseInt($("#selection_id").val())
            }
            if (typeof $("#parser").val() != "undefined") {
                postParams.parser = 1
            }
            var a = {
                upload_url: $("#upload_url").val(),
                file_post_name: "Filedata",
                flash_url: window.STATIC_CDN + "/static/frontend/flash/swfupload.swf",
                post_params: postParams,
                file_size_limit: "500 MB",
                file_types: "*.mp3;*.wma;*.wav;*.m4a;*.flac",
                file_types_description: "Music",
                file_upload_limit: "0",
                file_queue_limit: "0",
                button_image_url: window.STATIC_CDN + "/static/frontend/images/audio/choose" + audio_view + ".png",
                button_placeholder_id: "upload_input",
                button_width: 153,
                button_height: 37,
                swfupload_loaded_handler: function() {},
                file_dialog_start_handler: function() {},
                file_queued_handler: function(f) {
                    var e = new FileProgress(f, this.customSettings.progress_target);
                    e.setStatus(audio_queue)
                },
                file_queue_error_handler: function() {},
                file_dialog_complete_handler: function() {
                    try {
                        this.startUpload()
                    } catch (e) {}
                },
                upload_start_handler: function(g) {
                    try {
                        var e = new FileProgress(g, this.customSettings.progress_target);
                        e.setStatus(audio_upload)
                    } catch (f) {}
                },
                upload_progress_handler: function(g, j, i) {
                    try {
                        var h = Math.ceil((j / i) * 100);
                        var e = new FileProgress(g, this.customSettings.progressTarget);
                        e.setProgress(h);
                        e.setStatus(audio_upload)
                    } catch (f) {}
                },
                upload_error_handler: function(e, g, f) {},
                upload_success_handler: function(g, f) {
                    var e = new FileProgress(g, this.customSettings.progressTarget);
                    e.toggleCancel(false);
                    if (f != "error") {
                        e.setComplete();
                        e.setStatus(audio_uploaded);
                        d++
                    } else {
                        e.setError();
                        e.setStatus("<b style='color:red;'>" + audio_error + "</b>")
                    }
                },
                upload_complete_handler: function(f) {
                    var e = new FileProgress(f, this.customSettings.progressTarget);
                    e.setComplete();
                    e.setStatus(audio_uploaded);
                    if (this.getStats().files_queued > 0) {
                        this.startUpload();
                        $("#file_complete_status").html(audio_remains + ": " + this.getStats().files_queued)
                    } else {
                        $("#file_complete_status").html(audio_upload_complete)
                    }
                },
                custom_settings: {
                    progress_target: "upload_progress",
                    upload_successful: false
                },
                debug: false
            };
            try {
                var c = new SWFUpload(a)
            } catch (b) {
                console.log(b)
            }
        })
    },
};

function is_RTB_banner_load(a) {
    if (typeof(window.rtb_banners) != "undefined" && $.inArray(a, window.rtb_banners) != -1) {
        return true
    } else {
        return false
    }
}

function load_RTB_banner(a) {
    if (typeof(window.rtb_banners) == "undefined") {
        window.rtb_banners = [a]
    } else {
        window.rtb_banners.push(a)
    }
    $("#RTBDIV_" + a).html('<script type="text/javascript" src="//code.rtbsystem.com/' + a + ".js?t=" + new Date().getTime() + '" charset="utf-8" ><\/script>')
}

function close_banner(a) {
    $("#div-gpt-ad-1439554583855-0").remove()
}
window.show_iframe = function(a) {
    loadCss(window.STATIC_CDN + "/static/frontend/css/plugins/magnific-popup.css");
    $LAB.script(window.STATIC_CDN + "/static/frontend/js/plugins/jquery.magnific-popup.min.js").wait(function() {
        if ($("#show_iframe_cont").length == 0) {
            $("body").append('<div id="show_iframe_cont"></div>')
        }
        $("#show_iframe_cont").magnificPopup({
            items: [{
                src: a,
                type: "iframe",
                allowfullscreen: true
            }],
            callbacks: {
                open: function() {
                    $(".mfp-close").click(function() {
                        $("#show_iframe_cont").magnificPopup("close");
                        console.log("close click")
                    })
                },
                close: function() {
                    console.log("close")
                }
            },
            type: "image"
        }).magnificPopup("open")
    })
};
window.loadCss = function loadCSS(a, e, g, h) {
    var c = window.document.createElement("link");
    var d = e || window.document.getElementsByTagName("script")[0];
    var f = window.document.styleSheets;
    c.rel = "stylesheet";
    c.href = a;
    c.media = "only x";
    if (h) {
        c.onload = h
    }
    d.parentNode.insertBefore(c, d);

    function b() {
        var k;
        for (var j = 0; j < f.length; j++) {
            if (f[j].href && f[j].href.indexOf(c.href) > -1) {
                k = true
            }
        }
        if (k) {
            c.media = g || "all"
        } else {
            setTimeout(b)
        }
    }
    b();
    return c
};
$.fn.extend({
    cutByLength: function(b) {
        b = b || 50;
        var a = "...";
        this.each(function(f, g) {
            var c = $(g);
            var h = c.text().replace(/^\s+|\s+$/, "");
            if (h.length > b) {
                var d = h.substring(0, b).replace(/\.+$/, "");
                c.text(d + a)
            }
        })
    }
});

function load_lazy_img(a, d, c) {
    var b = 0;
    $(a).each(function(f, g) {
        if ((f >= d && b <= c) && (typeof($(g).attr("data-original")) != "undefined")) {
            $(g).attr("src", $(g).attr("data-original"));
            $(g).removeAttr("data-origi.nal")
        }
        b++
    })
};