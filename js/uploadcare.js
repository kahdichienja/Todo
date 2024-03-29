/*
 * Uploadcare (3.6.2)
 * Date: 2018-12-12 15:58:47 +0000
 * Rev: 09719f18ef
 */
! function(e, t) { e.document && ("object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.uploadcare = t(e)) }("undefined" != typeof window ? window : this, function(e, t) {
    var n, r = e.document;
    return ! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof e ? e : this, function(e, t) {
            "use strict";
            var i = [],
                n = e.document,
                r = Object.getPrototypeOf,
                a = i.slice,
                o = i.concat,
                l = i.push,
                s = i.indexOf,
                c = {},
                u = c.toString,
                p = c.hasOwnProperty,
                d = p.toString,
                h = d.call(Object),
                f = {};

            function g(e, t) {
                t = t || n;
                var i = t.createElement("script");
                i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
            }
            var m = "3.2.1",
                _ = function(e, t) { return new _.fn.init(e, t) },
                b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                v = /^-ms-/,
                y = /-([a-z])/g,
                x = function(e, t) { return t.toUpperCase() };
            _.fn = _.prototype = {
                jquery: m,
                constructor: _,
                length: 0,
                toArray: function() { return a.call(this) },
                get: function(e) { return null == e ? a.call(this) : 0 > e ? this[e + this.length] : this[e] },
                pushStack: function(e) { var t = _.merge(this.constructor(), e); return t.prevObject = this, t },
                each: function(e) { return _.each(this, e) },
                map: function(e) { return this.pushStack(_.map(this, function(t, i) { return e.call(t, i, t) })) },
                slice: function() { return this.pushStack(a.apply(this, arguments)) },
                first: function() { return this.eq(0) },
                last: function() { return this.eq(-1) },
                eq: function(e) {
                    var t = this.length,
                        i = +e + (0 > e ? t : 0);
                    return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
                },
                end: function() { return this.prevObject || this.constructor() },
                push: l,
                sort: i.sort,
                splice: i.splice
            }, _.extend = _.fn.extend = function() {
                var e, t, i, n, r, a, o = arguments[0] || {},
                    l = 1,
                    s = arguments.length,
                    c = !1;
                for ("boolean" == typeof o && (c = o, o = arguments[l] || {}, l++), "object" == typeof o || _.isFunction(o) || (o = {}), l === s && (o = this, l--); s > l; l++)
                    if (null != (e = arguments[l]))
                        for (t in e) i = o[t], n = e[t], o !== n && (c && n && (_.isPlainObject(n) || (r = Array.isArray(n))) ? (r ? (r = !1, a = i && Array.isArray(i) ? i : []) : a = i && _.isPlainObject(i) ? i : {}, o[t] = _.extend(c, a, n)) : void 0 !== n && (o[t] = n));
                return o
            }, _.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) { throw new Error(e) },
                noop: function() {},
                isFunction: function(e) { return "function" === _.type(e) },
                isWindow: function(e) { return null != e && e === e.window },
                isNumeric: function(e) { var t = _.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) },
                isPlainObject: function(e) { var t, i; return !(!e || "[object Object]" !== u.call(e) || (t = r(e)) && (i = p.call(t, "constructor") && t.constructor, "function" != typeof i || d.call(i) !== h)) },
                isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
                type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e },
                globalEval: function(e) { g(e) },
                camelCase: function(e) { return e.replace(v, "ms-").replace(y, x) },
                each: function(e, t) {
                    var i, n = 0;
                    if (w(e)) {
                        for (i = e.length; i > n; n++)
                            if (t.call(e[n], n, e[n]) === !1) break
                    } else
                        for (n in e)
                            if (t.call(e[n], n, e[n]) === !1) break; return e
                },
                trim: function(e) { return null == e ? "" : (e + "").replace(b, "") },
                makeArray: function(e, t) { var i = t || []; return null != e && (w(Object(e)) ? _.merge(i, "string" == typeof e ? [e] : e) : l.call(i, e)), i },
                inArray: function(e, t, i) { return null == t ? -1 : s.call(t, e, i) },
                merge: function(e, t) { for (var i = +t.length, n = 0, r = e.length; i > n; n++) e[r++] = t[n]; return e.length = r, e },
                grep: function(e, t, i) { for (var n, r = [], a = 0, o = e.length, l = !i; o > a; a++) n = !t(e[a], a), n !== l && r.push(e[a]); return r },
                map: function(e, t, i) {
                    var n, r, a = 0,
                        l = [];
                    if (w(e))
                        for (n = e.length; n > a; a++) r = t(e[a], a, i), null != r && l.push(r);
                    else
                        for (a in e) r = t(e[a], a, i), null != r && l.push(r);
                    return o.apply([], l)
                },
                guid: 1,
                proxy: function(e, t) { var i, n, r; return "string" == typeof t && (i = e[t], t = e, e = i), _.isFunction(e) ? (n = a.call(arguments, 2), r = function() { return e.apply(t || this, n.concat(a.call(arguments))) }, r.guid = e.guid = e.guid || _.guid++, r) : void 0 },
                now: Date.now,
                support: f
            }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = i[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { c["[object " + t + "]"] = t.toLowerCase() });

            function w(e) {
                var t = !!e && "length" in e && e.length,
                    i = _.type(e);
                return "function" !== i && !_.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            var k = function(e) {
                var t, i, n, r, a, o, l, s, c, u, p, d, h, f, g, m, _, b, v, y = "sizzle" + 1 * new Date,
                    x = e.document,
                    w = 0,
                    k = 0,
                    C = le(),
                    z = le(),
                    T = le(),
                    S = function(e, t) { return e === t && (p = !0), 0 },
                    F = {}.hasOwnProperty,
                    A = [],
                    j = A.pop,
                    D = A.push,
                    P = A.push,
                    I = A.slice,
                    E = function(e, t) {
                        for (var i = 0, n = e.length; n > i; i++)
                            if (e[i] === t) return i;
                        return -1
                    },
                    O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    U = "[\\x20\\t\\r\\n\\f]",
                    M = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
                    R = "\\[" + U + "*(" + M + ")(?:" + U + "*([*^$|!~]?=)" + U + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + U + "*\\]",
                    L = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    B = new RegExp(U + "+", "g"),
                    q = new RegExp("^" + U + "+|((?:^|[^\\\\])(?:\\\\.)*)" + U + "+$", "g"),
                    N = new RegExp("^" + U + "*," + U + "*"),
                    V = new RegExp("^" + U + "*([>+~]|" + U + ")" + U + "*"),
                    W = new RegExp("=" + U + "*([^\\]'\"]*?)" + U + "*\\]", "g"),
                    H = new RegExp(L),
                    G = new RegExp("^" + M + "$"),
                    K = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + L), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + U + "*(even|odd|(([+-]|)(\\d*)n|)" + U + "*(?:([+-]|)" + U + "*(\\d+)|))" + U + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + U + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + U + "*((?:-\\d)?\\d*)" + U + "*\\)|)(?=[^-]|$)", "i") },
                    J = /^(?:input|select|textarea|button)$/i,
                    X = /^h\d$/i,
                    Q = /^[^{]+\{\s*\[native \w/,
                    Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    $ = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + U + "?|(" + U + ")|.)", "ig"),
                    ee = function(e, t, i) { var n = "0x" + t - 65536; return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320) },
                    te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function(e, t) { return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
                    ne = function() { d() },
                    re = ve(function(e) { return e.disabled === !0 && ("form" in e || "label" in e) }, { dir: "parentNode", next: "legend" });
                try { P.apply(A = I.call(x.childNodes), x.childNodes), A[x.childNodes.length].nodeType } catch (ae) {
                    P = {
                        apply: A.length ? function(e, t) { D.apply(e, I.call(t)) } : function(e, t) {
                            var i = e.length,
                                n = 0;
                            while (e[i++] = t[n++]);
                            e.length = i - 1
                        }
                    }
                }

                function oe(e, t, n, r) {
                    var a, l, c, u, p, f, _, b = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return n;
                    if (!r && ((t ? t.ownerDocument || t : x) !== h && d(t), t = t || h, g)) {
                        if (11 !== w && (p = Y.exec(e)))
                            if (a = p[1]) { if (9 === w) { if (!(c = t.getElementById(a))) return n; if (c.id === a) return n.push(c), n } else if (b && (c = b.getElementById(a)) && v(t, c) && c.id === a) return n.push(c), n } else { if (p[2]) return P.apply(n, t.getElementsByTagName(e)), n; if ((a = p[3]) && i.getElementsByClassName && t.getElementsByClassName) return P.apply(n, t.getElementsByClassName(a)), n }
                        if (i.qsa && !T[e + " "] && (!m || !m.test(e))) {
                            if (1 !== w) b = t, _ = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                (u = t.getAttribute("id")) ? u = u.replace(te, ie): t.setAttribute("id", u = y), f = o(e), l = f.length;
                                while (l--) f[l] = "#" + u + " " + be(f[l]);
                                _ = f.join(","), b = $.test(e) && me(t.parentNode) || t
                            }
                            if (_) try { return P.apply(n, b.querySelectorAll(_)), n } catch (k) {} finally { u === y && t.removeAttribute("id") }
                        }
                    }
                    return s(e.replace(q, "$1"), t, n, r)
                }

                function le() {
                    var e = [];

                    function t(i, r) { return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r }
                    return t
                }

                function se(e) { return e[y] = !0, e }

                function ce(e) { var t = h.createElement("fieldset"); try { return !!e(t) } catch (i) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

                function ue(e, t) {
                    var i = e.split("|"),
                        r = i.length;
                    while (r--) n.attrHandle[i[r]] = t
                }

                function pe(e, t) {
                    var i = t && e,
                        n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (n) return n;
                    if (i)
                        while (i = i.nextSibling)
                            if (i === t) return -1;
                    return e ? 1 : -1
                }

                function de(e) { return function(t) { var i = t.nodeName.toLowerCase(); return "input" === i && t.type === e } }

                function he(e) { return function(t) { var i = t.nodeName.toLowerCase(); return ("input" === i || "button" === i) && t.type === e } }

                function fe(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function ge(e) {
                    return se(function(t) {
                        return t = +t, se(function(i, n) {
                            var r, a = e([], i.length, t),
                                o = a.length;
                            while (o--) i[r = a[o]] && (i[r] = !(n[r] = i[r]))
                        })
                    })
                }

                function me(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
                i = oe.support = {}, a = oe.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, d = oe.setDocument = function(e) {
                    var t, r, o = e ? e.ownerDocument || e : x;
                    return o !== h && 9 === o.nodeType && o.documentElement ? (h = o, f = h.documentElement, g = !a(h), x !== h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)), i.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), i.getElementsByTagName = ce(function(e) { return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length }), i.getElementsByClassName = Q.test(h.getElementsByClassName), i.getById = ce(function(e) { return f.appendChild(e).id = y, !h.getElementsByName || !h.getElementsByName(y).length }), i.getById ? (n.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { return e.getAttribute("id") === t } }, n.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && g) { var i = t.getElementById(e); return i ? [i] : [] } }) : (n.filter.ID = function(e) { var t = e.replace(Z, ee); return function(e) { var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return i && i.value === t } }, n.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && g) {
                            var i, n, r, a = t.getElementById(e);
                            if (a) {
                                if (i = a.getAttributeNode("id"), i && i.value === e) return [a];
                                r = t.getElementsByName(e), n = 0;
                                while (a = r[n++])
                                    if (i = a.getAttributeNode("id"), i && i.value === e) return [a]
                            }
                            return []
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                        var i, n = [],
                            r = 0,
                            a = t.getElementsByTagName(e);
                        if ("*" === e) { while (i = a[r++]) 1 === i.nodeType && n.push(i); return n }
                        return a
                    }, n.find.CLASS = i.getElementsByClassName && function(e, t) { return "undefined" != typeof t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0 }, _ = [], m = [], (i.qsa = Q.test(h.querySelectorAll)) && (ce(function(e) { f.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + U + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + U + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + y + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + y + "+*").length || m.push(".#.+[+~]") }), ce(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = h.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + U + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (i.matchesSelector = Q.test(b = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ce(function(e) { i.disconnectedMatch = b.call(e, "*"), b.call(e, "[s!='']:x"), _.push("!=", L) }), m = m.length && new RegExp(m.join("|")), _ = _.length && new RegExp(_.join("|")), t = Q.test(f.compareDocumentPosition), v = t || Q.test(f.contains) ? function(e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e,
                            n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, S = t ? function(e, t) { if (e === t) return p = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === h || e.ownerDocument === x && v(x, e) ? -1 : t === h || t.ownerDocument === x && v(x, t) ? 1 : u ? E(u, e) - E(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                        if (e === t) return p = !0, 0;
                        var i, n = 0,
                            r = e.parentNode,
                            a = t.parentNode,
                            o = [e],
                            l = [t];
                        if (!r || !a) return e === h ? -1 : t === h ? 1 : r ? -1 : a ? 1 : u ? E(u, e) - E(u, t) : 0;
                        if (r === a) return pe(e, t);
                        i = e;
                        while (i = i.parentNode) o.unshift(i);
                        i = t;
                        while (i = i.parentNode) l.unshift(i);
                        while (o[n] === l[n]) n++;
                        return n ? pe(o[n], l[n]) : o[n] === x ? -1 : l[n] === x ? 1 : 0
                    }, h) : h
                }, oe.matches = function(e, t) { return oe(e, null, null, t) }, oe.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== h && d(e), t = t.replace(W, "='$1']"), i.matchesSelector && g && !T[t + " "] && (!_ || !_.test(t)) && (!m || !m.test(t))) try { var n = b.call(e, t); if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (r) {}
                    return oe(t, h, null, [e]).length > 0
                }, oe.contains = function(e, t) { return (e.ownerDocument || e) !== h && d(e), v(e, t) }, oe.attr = function(e, t) {
                    (e.ownerDocument || e) !== h && d(e);
                    var r = n.attrHandle[t.toLowerCase()],
                        a = r && F.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                    return void 0 !== a ? a : i.attributes || !g ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
                }, oe.escape = function(e) { return (e + "").replace(te, ie) }, oe.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, oe.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        a = 0;
                    if (p = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(S), p) { while (t = e[a++]) t === e[a] && (r = n.push(a)); while (r--) e.splice(n[r], 1) }
                    return u = null, e
                }, r = oe.getText = function(e) {
                    var t, i = "",
                        n = 0,
                        a = e.nodeType;
                    if (a) { if (1 === a || 9 === a || 11 === a) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) i += r(e) } else if (3 === a || 4 === a) return e.nodeValue } else
                        while (t = e[n++]) i += r(t);
                    return i
                }, n = oe.selectors = {
                    cacheLength: 50,
                    createPseudo: se,
                    match: K,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function(e) { return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e }, PSEUDO: function(e) { var t, i = !e[6] && e[2]; return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && H.test(i) && (t = o(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3)) } },
                    filter: {
                        TAG: function(e) { var t = e.replace(Z, ee).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                        CLASS: function(e) { var t = C[e + " "]; return t || (t = new RegExp("(^|" + U + ")" + e + "(" + U + "|$)")) && C(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                        ATTR: function(e, t, i) { return function(n) { var r = oe.attr(n, e); return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-")) } },
                        CHILD: function(e, t, i, n, r) {
                            var a = "nth" !== e.slice(0, 3),
                                o = "last" !== e.slice(-4),
                                l = "of-type" === t;
                            return 1 === n && 0 === r ? function(e) { return !!e.parentNode } : function(t, i, s) {
                                var c, u, p, d, h, f, g = a !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    _ = l && t.nodeName.toLowerCase(),
                                    b = !s && !l,
                                    v = !1;
                                if (m) {
                                    if (a) {
                                        while (g) {
                                            d = t;
                                            while (d = d[g])
                                                if (l ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType) return !1;
                                            f = g = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [o ? m.firstChild : m.lastChild], o && b) {
                                        d = m, p = d[y] || (d[y] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[e] || [], h = c[0] === w && c[1], v = h && c[2], d = h && m.childNodes[h];
                                        while (d = ++h && d && d[g] || (v = h = 0) || f.pop())
                                            if (1 === d.nodeType && ++v && d === t) { u[e] = [w, h, v]; break }
                                    } else if (b && (d = t, p = d[y] || (d[y] = {}), u = p[d.uniqueID] || (p[d.uniqueID] = {}), c = u[e] || [], h = c[0] === w && c[1], v = h), v === !1)
                                        while (d = ++h && d && d[g] || (v = h = 0) || f.pop())
                                            if ((l ? d.nodeName.toLowerCase() === _ : 1 === d.nodeType) && ++v && (b && (p = d[y] || (d[y] = {}),
                                                    u = p[d.uniqueID] || (p[d.uniqueID] = {}), u[e] = [w, v]), d === t)) break;
                                    return v -= r, v === n || v % n === 0 && v / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                            return r[y] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, i) {
                                var n, a = r(e, t),
                                    o = a.length;
                                while (o--) n = E(e, a[o]), e[n] = !(i[n] = a[o])
                            }) : function(e) { return r(e, 0, i) }) : r
                        }
                    },
                    pseudos: {
                        not: se(function(e) {
                            var t = [],
                                i = [],
                                n = l(e.replace(q, "$1"));
                            return n[y] ? se(function(e, t, i, r) {
                                var a, o = n(e, null, r, []),
                                    l = e.length;
                                while (l--)(a = o[l]) && (e[l] = !(t[l] = a))
                            }) : function(e, r, a) { return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop() }
                        }),
                        has: se(function(e) { return function(t) { return oe(e, t).length > 0 } }),
                        contains: se(function(e) {
                            return e = e.replace(Z, ee),
                                function(t) { return (t.textContent || t.innerText || r(t)).indexOf(e) > -1 }
                        }),
                        lang: se(function(e) {
                            return G.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(),
                                function(t) {
                                    var i;
                                    do
                                        if (i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) { var i = e.location && e.location.hash; return i && i.slice(1) === t.id },
                        root: function(e) { return e === f },
                        focus: function(e) { return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                        enabled: fe(!1),
                        disabled: fe(!0),
                        checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                        selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) { return !n.pseudos.empty(e) },
                        header: function(e) { return X.test(e.nodeName) },
                        input: function(e) { return J.test(e.nodeName) },
                        button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                        text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                        first: ge(function() { return [0] }),
                        last: ge(function(e, t) { return [t - 1] }),
                        eq: ge(function(e, t, i) { return [0 > i ? i + t : i] }),
                        even: ge(function(e, t) { for (var i = 0; t > i; i += 2) e.push(i); return e }),
                        odd: ge(function(e, t) { for (var i = 1; t > i; i += 2) e.push(i); return e }),
                        lt: ge(function(e, t, i) { for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n); return e }),
                        gt: ge(function(e, t, i) { for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n); return e })
                    }
                }, n.pseudos.nth = n.pseudos.eq;
                for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) n.pseudos[t] = de(t);
                for (t in { submit: !0, reset: !0 }) n.pseudos[t] = he(t);

                function _e() {}
                _e.prototype = n.filters = n.pseudos, n.setFilters = new _e, o = oe.tokenize = function(e, t) {
                    var i, r, a, o, l, s, c, u = z[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    l = e, s = [], c = n.preFilter;
                    while (l) { i && !(r = N.exec(l)) || (r && (l = l.slice(r[0].length) || l), s.push(a = [])), i = !1, (r = V.exec(l)) && (i = r.shift(), a.push({ value: i, type: r[0].replace(q, " ") }), l = l.slice(i.length)); for (o in n.filter) !(r = K[o].exec(l)) || c[o] && !(r = c[o](r)) || (i = r.shift(), a.push({ value: i, type: o, matches: r }), l = l.slice(i.length)); if (!i) break }
                    return t ? l.length : l ? oe.error(e) : z(e, s).slice(0)
                };

                function be(e) { for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value; return n }

                function ve(e, t, i) {
                    var n = t.dir,
                        r = t.next,
                        a = r || n,
                        o = i && "parentNode" === a,
                        l = k++;
                    return t.first ? function(t, i, r) {
                        while (t = t[n])
                            if (1 === t.nodeType || o) return e(t, i, r);
                        return !1
                    } : function(t, i, s) {
                        var c, u, p, d = [w, l];
                        if (s) {
                            while (t = t[n])
                                if ((1 === t.nodeType || o) && e(t, i, s)) return !0
                        } else
                            while (t = t[n])
                                if (1 === t.nodeType || o)
                                    if (p = t[y] || (t[y] = {}), u = p[t.uniqueID] || (p[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[n] || t;
                                    else { if ((c = u[a]) && c[0] === w && c[1] === l) return d[2] = c[2]; if (u[a] = d, d[2] = e(t, i, s)) return !0 } return !1
                    }
                }

                function ye(e) {
                    return e.length > 1 ? function(t, i, n) {
                        var r = e.length;
                        while (r--)
                            if (!e[r](t, i, n)) return !1;
                        return !0
                    } : e[0]
                }

                function xe(e, t, i) { for (var n = 0, r = t.length; r > n; n++) oe(e, t[n], i); return i }

                function we(e, t, i, n, r) { for (var a, o = [], l = 0, s = e.length, c = null != t; s > l; l++)(a = e[l]) && (i && !i(a, n, r) || (o.push(a), c && t.push(l))); return o }

                function ke(e, t, i, n, r, a) {
                    return n && !n[y] && (n = ke(n)), r && !r[y] && (r = ke(r, a)), se(function(a, o, l, s) {
                        var c, u, p, d = [],
                            h = [],
                            f = o.length,
                            g = a || xe(t || "*", l.nodeType ? [l] : l, []),
                            m = !e || !a && t ? g : we(g, d, e, l, s),
                            _ = i ? r || (a ? e : f || n) ? [] : o : m;
                        if (i && i(m, _, l, s), n) { c = we(_, h), n(c, [], l, s), u = c.length; while (u--)(p = c[u]) && (_[h[u]] = !(m[h[u]] = p)) }
                        if (a) {
                            if (r || e) {
                                if (r) {
                                    c = [], u = _.length;
                                    while (u--)(p = _[u]) && c.push(m[u] = p);
                                    r(null, _ = [], c, s)
                                }
                                u = _.length;
                                while (u--)(p = _[u]) && (c = r ? E(a, p) : d[u]) > -1 && (a[c] = !(o[c] = p))
                            }
                        } else _ = we(_ === o ? _.splice(f, _.length) : _), r ? r(null, o, _, s) : P.apply(o, _)
                    })
                }

                function Ce(e) {
                    for (var t, i, r, a = e.length, o = n.relative[e[0].type], l = o || n.relative[" "], s = o ? 1 : 0, u = ve(function(e) { return e === t }, l, !0), p = ve(function(e) { return E(t, e) > -1 }, l, !0), d = [function(e, i, n) { var r = !o && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : p(e, i, n)); return t = null, r }]; a > s; s++)
                        if (i = n.relative[e[s].type]) d = [ve(ye(d), i)];
                        else {
                            if (i = n.filter[e[s].type].apply(null, e[s].matches), i[y]) {
                                for (r = ++s; a > r; r++)
                                    if (n.relative[e[r].type]) break;
                                return ke(s > 1 && ye(d), s > 1 && be(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(q, "$1"), i, r > s && Ce(e.slice(s, r)), a > r && Ce(e = e.slice(r)), a > r && be(e))
                            }
                            d.push(i)
                        }
                    return ye(d)
                }

                function ze(e, t) {
                    var i = t.length > 0,
                        r = e.length > 0,
                        a = function(a, o, l, s, u) {
                            var p, f, m, _ = 0,
                                b = "0",
                                v = a && [],
                                y = [],
                                x = c,
                                k = a || r && n.find.TAG("*", u),
                                C = w += null == x ? 1 : Math.random() || .1,
                                z = k.length;
                            for (u && (c = o === h || o || u); b !== z && null != (p = k[b]); b++) {
                                if (r && p) {
                                    f = 0, o || p.ownerDocument === h || (d(p), l = !g);
                                    while (m = e[f++])
                                        if (m(p, o || h, l)) { s.push(p); break }
                                    u && (w = C)
                                }
                                i && ((p = !m && p) && _--, a && v.push(p))
                            }
                            if (_ += b, i && b !== _) {
                                f = 0;
                                while (m = t[f++]) m(v, y, o, l);
                                if (a) {
                                    if (_ > 0)
                                        while (b--) v[b] || y[b] || (y[b] = j.call(s));
                                    y = we(y)
                                }
                                P.apply(s, y), u && !a && y.length > 0 && _ + t.length > 1 && oe.uniqueSort(s)
                            }
                            return u && (w = C, c = x), v
                        };
                    return i ? se(a) : a
                }
                return l = oe.compile = function(e, t) {
                    var i, n = [],
                        r = [],
                        a = T[e + " "];
                    if (!a) {
                        t || (t = o(e)), i = t.length;
                        while (i--) a = Ce(t[i]), a[y] ? n.push(a) : r.push(a);
                        a = T(e, ze(r, n)), a.selector = e
                    }
                    return a
                }, s = oe.select = function(e, t, i, r) {
                    var a, s, c, u, p, d = "function" == typeof e && e,
                        h = !r && o(e = d.selector || e);
                    if (i = i || [], 1 === h.length) {
                        if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (c = s[0]).type && 9 === t.nodeType && g && n.relative[s[1].type]) {
                            if (t = (n.find.ID(c.matches[0].replace(Z, ee), t) || [])[0], !t) return i;
                            d && (t = t.parentNode), e = e.slice(s.shift().value.length)
                        }
                        a = K.needsContext.test(e) ? 0 : s.length;
                        while (a--) { if (c = s[a], n.relative[u = c.type]) break; if ((p = n.find[u]) && (r = p(c.matches[0].replace(Z, ee), $.test(s[0].type) && me(t.parentNode) || t))) { if (s.splice(a, 1), e = r.length && be(s), !e) return P.apply(i, r), i; break } }
                    }
                    return (d || l(e, h))(r, t, !g, i, !t || $.test(e) && me(t.parentNode) || t), i
                }, i.sortStable = y.split("").sort(S).join("") === y, i.detectDuplicates = !!p, d(), i.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(h.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || ue("type|href|height|width", function(e, t, i) { return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), i.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || ue("value", function(e, t, i) { return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || ue(O, function(e, t, i) { var n; return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null }), oe
            }(e);
            _.find = k, _.expr = k.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = k.uniqueSort, _.text = k.getText, _.isXMLDoc = k.isXML, _.contains = k.contains, _.escapeSelector = k.escape;
            var C = function(e, t, i) {
                    var n = [],
                        r = void 0 !== i;
                    while ((e = e[t]) && 9 !== e.nodeType)
                        if (1 === e.nodeType) {
                            if (r && _(e).is(i)) break;
                            n.push(e)
                        }
                    return n
                },
                z = function(e, t) { for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e); return i },
                T = _.expr.match.needsContext;

            function S(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
            var F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                A = /^.[^:#\[\.,]*$/;

            function j(e, t, i) {
                return _.isFunction(t) ? _.grep(e, function(e, n) { return !!t.call(e, n, e) !== i }) : t.nodeType ? _.grep(e, function(e) { return e === t !== i }) : "string" != typeof t ? _.grep(e, function(e) { return s.call(t, e) > -1 !== i }) : A.test(t) ? _.filter(t, e, i) : (t = _.filter(t, e),
                    _.grep(e, function(e) { return s.call(t, e) > -1 !== i && 1 === e.nodeType }))
            }
            _.filter = function(e, t, i) { var n = t[0]; return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? _.find.matchesSelector(n, e) ? [n] : [] : _.find.matches(e, _.grep(t, function(e) { return 1 === e.nodeType })) }, _.fn.extend({
                find: function(e) {
                    var t, i, n = this.length,
                        r = this;
                    if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                        for (t = 0; n > t; t++)
                            if (_.contains(r[t], this)) return !0
                    }));
                    for (i = this.pushStack([]), t = 0; n > t; t++) _.find(e, r[t], i);
                    return n > 1 ? _.uniqueSort(i) : i
                },
                filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
                not: function(e) { return this.pushStack(j(this, e || [], !0)) },
                is: function(e) { return !!j(this, "string" == typeof e && T.test(e) ? _(e) : e || [], !1).length }
            });
            var D, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                I = _.fn.init = function(e, t, i) {
                    var r, a;
                    if (!e) return this;
                    if (i = i || D, "string" == typeof e) {
                        if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)), F.test(r[1]) && _.isPlainObject(t))
                                for (r in t) _.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        return a = n.getElementById(r[2]), a && (this[0] = a, this.length = 1), this
                    }
                    return e.nodeType ? (this[0] = e, this.length = 1, this) : _.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(_) : _.makeArray(e, this)
                };
            I.prototype = _.fn, D = _(n);
            var E = /^(?:parents|prev(?:Until|All))/,
                O = { children: !0, contents: !0, next: !0, prev: !0 };
            _.fn.extend({
                has: function(e) {
                    var t = _(e, this),
                        i = t.length;
                    return this.filter(function() {
                        for (var e = 0; i > e; e++)
                            if (_.contains(this, t[e])) return !0
                    })
                },
                closest: function(e, t) {
                    var i, n = 0,
                        r = this.length,
                        a = [],
                        o = "string" != typeof e && _(e);
                    if (!T.test(e))
                        for (; r > n; n++)
                            for (i = this[n]; i && i !== t; i = i.parentNode)
                                if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && _.find.matchesSelector(i, e))) { a.push(i); break }
                    return this.pushStack(a.length > 1 ? _.uniqueSort(a) : a)
                },
                index: function(e) { return e ? "string" == typeof e ? s.call(_(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
                add: function(e, t) { return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t)))) },
                addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
            });

            function U(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
            _.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return C(e, "parentNode") }, parentsUntil: function(e, t, i) { return C(e, "parentNode", i) }, next: function(e) { return U(e, "nextSibling") }, prev: function(e) { return U(e, "previousSibling") }, nextAll: function(e) { return C(e, "nextSibling") }, prevAll: function(e) { return C(e, "previousSibling") }, nextUntil: function(e, t, i) { return C(e, "nextSibling", i) }, prevUntil: function(e, t, i) { return C(e, "previousSibling", i) }, siblings: function(e) { return z((e.parentNode || {}).firstChild, e) }, children: function(e) { return z(e.firstChild) }, contents: function(e) { return S(e, "iframe") ? e.contentDocument : (S(e, "template") && (e = e.content || e), _.merge([], e.childNodes)) } }, function(e, t) { _.fn[e] = function(i, n) { var r = _.map(this, t, i); return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = _.filter(n, r)), this.length > 1 && (O[e] || _.uniqueSort(r), E.test(e) && r.reverse()), this.pushStack(r) } });
            var M = /[^\x20\t\r\n\f]+/g;

            function R(e) { var t = {}; return _.each(e.match(M) || [], function(e, i) { t[i] = !0 }), t }
            _.Callbacks = function(e) {
                e = "string" == typeof e ? R(e) : _.extend({}, e);
                var t, i, n, r, a = [],
                    o = [],
                    l = -1,
                    s = function() {
                        for (r = r || e.once, n = t = !0; o.length; l = -1) { i = o.shift(); while (++l < a.length) a[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = a.length, i = !1) }
                        e.memory || (i = !1), t = !1, r && (a = i ? [] : "")
                    },
                    c = { add: function() { return a && (i && !t && (l = a.length - 1, o.push(i)), function n(t) { _.each(t, function(t, i) { _.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== _.type(i) && n(i) }) }(arguments), i && !t && s()), this }, remove: function() { return _.each(arguments, function(e, t) { var i; while ((i = _.inArray(t, a, i)) > -1) a.splice(i, 1), l >= i && l-- }), this }, has: function(e) { return e ? _.inArray(e, a) > -1 : a.length > 0 }, empty: function() { return a && (a = []), this }, disable: function() { return r = o = [], a = i = "", this }, disabled: function() { return !a }, lock: function() { return r = o = [], i || t || (a = i = ""), this }, locked: function() { return !!r }, fireWith: function(e, i) { return r || (i = i || [], i = [e, i.slice ? i.slice() : i], o.push(i), t || s()), this }, fire: function() { return c.fireWith(this, arguments), this }, fired: function() { return !!n } };
                return c
            };

            function L(e) { return e }

            function B(e) { throw e }

            function q(e, t, i, n) { var r; try { e && _.isFunction(r = e.promise) ? r.call(e).done(t).fail(i) : e && _.isFunction(r = e.then) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n)) } catch (e) { i.apply(void 0, [e]) } }
            _.extend({
                Deferred: function(t) {
                    var i = [
                            ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                            ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                        ],
                        n = "pending",
                        r = {
                            state: function() { return n },
                            always: function() { return a.done(arguments).fail(arguments), this },
                            "catch": function(e) { return r.then(null, e) },
                            pipe: function() {
                                var e = arguments;
                                return _.Deferred(function(t) {
                                    _.each(i, function(i, n) {
                                        var r = _.isFunction(e[n[4]]) && e[n[4]];
                                        a[n[1]](function() {
                                            var e = r && r.apply(this, arguments);
                                            e && _.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, r ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            then: function(t, n, r) {
                                var a = 0;

                                function o(t, i, n, r) {
                                    return function() {
                                        var l = this,
                                            s = arguments,
                                            c = function() {
                                                var e, c;
                                                if (!(a > t)) {
                                                    if (e = n.apply(l, s), e === i.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = e && ("object" == typeof e || "function" == typeof e) && e.then, _.isFunction(c) ? r ? c.call(e, o(a, i, L, r), o(a, i, B, r)) : (a++, c.call(e, o(a, i, L, r), o(a, i, B, r), o(a, i, L, i.notifyWith))) : (n !== L && (l = void 0, s = [e]), (r || i.resolveWith)(l, s))
                                                }
                                            },
                                            u = r ? c : function() { try { c() } catch (e) { _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= a && (n !== B && (l = void 0, s = [e]), i.rejectWith(l, s)) } };
                                        t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                                    }
                                }
                                return _.Deferred(function(e) { i[0][3].add(o(0, e, _.isFunction(r) ? r : L, e.notifyWith)), i[1][3].add(o(0, e, _.isFunction(t) ? t : L)), i[2][3].add(o(0, e, _.isFunction(n) ? n : B)) }).promise()
                            },
                            promise: function(e) { return null != e ? _.extend(e, r) : r }
                        },
                        a = {};
                    return _.each(i, function(e, t) {
                        var o = t[2],
                            l = t[5];
                        r[t[1]] = o.add, l && o.add(function() { n = l }, i[3 - e][2].disable, i[0][2].lock), o.add(t[3].fire), a[t[0]] = function() { return a[t[0] + "With"](this === a ? void 0 : this, arguments), this }, a[t[0] + "With"] = o.fireWith
                    }), r.promise(a), t && t.call(a, a), a
                },
                when: function(e) {
                    var t = arguments.length,
                        i = t,
                        n = Array(i),
                        r = a.call(arguments),
                        o = _.Deferred(),
                        l = function(e) { return function(i) { n[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : i, --t || o.resolveWith(n, r) } };
                    if (1 >= t && (q(e, o.done(l(i)).resolve, o.reject, !t), "pending" === o.state() || _.isFunction(r[i] && r[i].then))) return o.then();
                    while (i--) q(r[i], l(i), o.reject);
                    return o.promise()
                }
            });
            var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            _.Deferred.exceptionHook = function(t, i) { e.console && e.console.warn && t && N.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i) }, _.readyException = function(t) { e.setTimeout(function() { throw t }) };
            var V = _.Deferred();
            _.fn.ready = function(e) { return V.then(e)["catch"](function(e) { _.readyException(e) }), this }, _.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                    (e === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, e !== !0 && --_.readyWait > 0 || V.resolveWith(n, [_]))
                }
            }), _.ready.then = V.then;

            function W() { n.removeEventListener("DOMContentLoaded", W), e.removeEventListener("load", W), _.ready() }
            "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(_.ready) : (n.addEventListener("DOMContentLoaded", W), e.addEventListener("load", W));
            var H = function(e, t, i, n, r, a, o) {
                    var l = 0,
                        s = e.length,
                        c = null == i;
                    if ("object" === _.type(i)) { r = !0; for (l in i) H(e, t, l, i[l], !0, a, o) } else if (void 0 !== n && (r = !0, _.isFunction(n) || (o = !0), c && (o ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) { return c.call(_(e), i) })), t))
                        for (; s > l; l++) t(e[l], i, o ? n : n.call(e[l], l, t(e[l], i)));
                    return r ? e : c ? t.call(e) : s ? t(e[0], i) : a
                },
                G = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

            function K() {
                this.expando = _.expando + K.uid++
            }
            K.uid = 1, K.prototype = {
                cache: function(e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
                set: function(e, t, i) {
                    var n, r = this.cache(e);
                    if ("string" == typeof t) r[_.camelCase(t)] = i;
                    else
                        for (n in t) r[_.camelCase(n)] = t[n];
                    return r
                },
                get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][_.camelCase(t)] },
                access: function(e, t, i) { return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t) },
                remove: function(e, t) { var i, n = e[this.expando]; if (void 0 !== n) { if (void 0 !== t) { Array.isArray(t) ? t = t.map(_.camelCase) : (t = _.camelCase(t), t = t in n ? [t] : t.match(M) || []), i = t.length; while (i--) delete n[t[i]] }(void 0 === t || _.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
                hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !_.isEmptyObject(t) }
            };
            var J = new K,
                X = new K,
                Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Y = /[A-Z]/g;

            function $(e) { return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Q.test(e) ? JSON.parse(e) : e) }

            function Z(e, t, i) {
                var n;
                if (void 0 === i && 1 === e.nodeType)
                    if (n = "data-" + t.replace(Y, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                        try { i = $(i) } catch (r) {}
                        X.set(e, t, i)
                    } else i = void 0;
                return i
            }
            _.extend({ hasData: function(e) { return X.hasData(e) || J.hasData(e) }, data: function(e, t, i) { return X.access(e, t, i) }, removeData: function(e, t) { X.remove(e, t) }, _data: function(e, t, i) { return J.access(e, t, i) }, _removeData: function(e, t) { J.remove(e, t) } }), _.fn.extend({
                data: function(e, t) {
                    var i, n, r, a = this[0],
                        o = a && a.attributes;
                    if (void 0 === e) {
                        if (this.length && (r = X.get(a), 1 === a.nodeType && !J.get(a, "hasDataAttrs"))) {
                            i = o.length;
                            while (i--) o[i] && (n = o[i].name, 0 === n.indexOf("data-") && (n = _.camelCase(n.slice(5)), Z(a, n, r[n])));
                            J.set(a, "hasDataAttrs", !0)
                        }
                        return r
                    }
                    return "object" == typeof e ? this.each(function() { X.set(this, e) }) : H(this, function(t) { var i; if (a && void 0 === t) { if (i = X.get(a, e), void 0 !== i) return i; if (i = Z(a, e), void 0 !== i) return i } else this.each(function() { X.set(this, e, t) }) }, null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) { return this.each(function() { X.remove(this, e) }) }
            }), _.extend({
                queue: function(e, t, i) { var n; return e ? (t = (t || "fx") + "queue", n = J.get(e, t), i && (!n || Array.isArray(i) ? n = J.access(e, t, _.makeArray(i)) : n.push(i)), n || []) : void 0 },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var i = _.queue(e, t),
                        n = i.length,
                        r = i.shift(),
                        a = _._queueHooks(e, t),
                        o = function() { _.dequeue(e, t) };
                    "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !n && a && a.empty.fire()
                },
                _queueHooks: function(e, t) { var i = t + "queueHooks"; return J.get(e, i) || J.access(e, i, { empty: _.Callbacks("once memory").add(function() { J.remove(e, [t + "queue", i]) }) }) }
            }), _.fn.extend({
                queue: function(e, t) {
                    var i = 2;
                    return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var i = _.queue(this, e, t);
                        _._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && _.dequeue(this, e)
                    })
                },
                dequeue: function(e) { return this.each(function() { _.dequeue(this, e) }) },
                clearQueue: function(e) { return this.queue(e || "fx", []) },
                promise: function(e, t) {
                    var i, n = 1,
                        r = _.Deferred(),
                        a = this,
                        o = this.length,
                        l = function() {--n || r.resolveWith(a, [a]) };
                    "string" != typeof e && (t = e, e = void 0), e = e || "fx";
                    while (o--) i = J.get(a[o], e + "queueHooks"), i && i.empty && (n++, i.empty.add(l));
                    return l(), r.promise(t)
                }
            });
            var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
                ie = ["Top", "Right", "Bottom", "Left"],
                ne = function(e, t) { return e = t || e, "none" === e.style.display || "" === e.style.display && _.contains(e.ownerDocument, e) && "none" === _.css(e, "display") },
                re = function(e, t, i, n) {
                    var r, a, o = {};
                    for (a in t) o[a] = e.style[a], e.style[a] = t[a];
                    r = i.apply(e, n || []);
                    for (a in t) e.style[a] = o[a];
                    return r
                };

            function ae(e, t, i, n) {
                var r, a = 1,
                    o = 20,
                    l = n ? function() { return n.cur() } : function() { return _.css(e, t, "") },
                    s = l(),
                    c = i && i[3] || (_.cssNumber[t] ? "" : "px"),
                    u = (_.cssNumber[t] || "px" !== c && +s) && te.exec(_.css(e, t));
                if (u && u[3] !== c) {
                    c = c || u[3], i = i || [], u = +s || 1;
                    do a = a || ".5", u /= a, _.style(e, t, u + c); while (a !== (a = l() / s) && 1 !== a && --o)
                }
                return i && (u = +u || +s || 0, r = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = r)), r
            }
            var oe = {};

            function le(e) {
                var t, i = e.ownerDocument,
                    n = e.nodeName,
                    r = oe[n];
                return r ? r : (t = i.body.appendChild(i.createElement(n)), r = _.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), oe[n] = r, r)
            }

            function se(e, t) { for (var i, n, r = [], a = 0, o = e.length; o > a; a++) n = e[a], n.style && (i = n.style.display, t ? ("none" === i && (r[a] = J.get(n, "display") || null, r[a] || (n.style.display = "")), "" === n.style.display && ne(n) && (r[a] = le(n))) : "none" !== i && (r[a] = "none", J.set(n, "display", i))); for (a = 0; o > a; a++) null != r[a] && (e[a].style.display = r[a]); return e }
            _.fn.extend({ show: function() { return se(this, !0) }, hide: function() { return se(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { ne(this) ? _(this).show() : _(this).hide() }) } });
            var ce = /^(?:checkbox|radio)$/i,
                ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                pe = /^$|\/(?:java|ecma)script/i,
                de = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;

            function he(e, t) { var i; return i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && S(e, t) ? _.merge([e], i) : i }

            function fe(e, t) { for (var i = 0, n = e.length; n > i; i++) J.set(e[i], "globalEval", !t || J.get(t[i], "globalEval")) }
            var ge = /<|&#?\w+;/;

            function me(e, t, i, n, r) {
                for (var a, o, l, s, c, u, p = t.createDocumentFragment(), d = [], h = 0, f = e.length; f > h; h++)
                    if (a = e[h], a || 0 === a)
                        if ("object" === _.type(a)) _.merge(d, a.nodeType ? [a] : a);
                        else if (ge.test(a)) {
                    o = o || p.appendChild(t.createElement("div")), l = (ue.exec(a) || ["", ""])[1].toLowerCase(), s = de[l] || de._default, o.innerHTML = s[1] + _.htmlPrefilter(a) + s[2], u = s[0];
                    while (u--) o = o.lastChild;
                    _.merge(d, o.childNodes), o = p.firstChild, o.textContent = ""
                } else d.push(t.createTextNode(a));
                p.textContent = "", h = 0;
                while (a = d[h++])
                    if (n && _.inArray(a, n) > -1) r && r.push(a);
                    else if (c = _.contains(a.ownerDocument, a), o = he(p.appendChild(a), "script"), c && fe(o), i) { u = 0; while (a = o[u++]) pe.test(a.type || "") && i.push(a) }
                return p
            }! function() {
                var e = n.createDocumentFragment(),
                    t = e.appendChild(n.createElement("div")),
                    i = n.createElement("input");
                i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            var _e = n.documentElement,
                be = /^key/,
                ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                ye = /^([^.]*)(?:\.(.+)|)/;

            function xe() { return !0 }

            function we() { return !1 }

            function ke() { try { return n.activeElement } catch (e) {} }

            function Ce(e, t, i, n, r, a) {
                var o, l;
                if ("object" == typeof t) { "string" != typeof i && (n = n || i, i = void 0); for (l in t) Ce(e, l, i, n, t[l], a); return e }
                if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), r === !1) r = we;
                else if (!r) return e;
                return 1 === a && (o = r, r = function(e) { return _().off(e), o.apply(this, arguments) }, r.guid = o.guid || (o.guid = _.guid++)), e.each(function() { _.event.add(this, t, r, n, i) })
            }
            _.event = {
                global: {},
                add: function(e, t, i, n, r) {
                    var a, o, l, s, c, u, p, d, h, f, g, m = J.get(e);
                    if (m) {
                        i.handler && (a = i, i = a.handler, r = a.selector), r && _.find.matchesSelector(_e, r), i.guid || (i.guid = _.guid++), (s = m.events) || (s = m.events = {}), (o = m.handle) || (o = m.handle = function(t) { return "undefined" != typeof _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0 }), t = (t || "").match(M) || [""], c = t.length;
                        while (c--) l = ye.exec(t[c]) || [], h = g = l[1], f = (l[2] || "").split(".").sort(), h && (p = _.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, p = _.event.special[h] || {}, u = _.extend({ type: h, origType: g, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && _.expr.match.needsContext.test(r), namespace: f.join(".") }, a), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, n, f, o) !== !1 || e.addEventListener && e.addEventListener(h, o)),
                            p.add && (p.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), _.event.global[h] = !0)
                    }
                },
                remove: function(e, t, i, n, r) {
                    var a, o, l, s, c, u, p, d, h, f, g, m = J.hasData(e) && J.get(e);
                    if (m && (s = m.events)) {
                        t = (t || "").match(M) || [""], c = t.length;
                        while (c--)
                            if (l = ye.exec(t[c]) || [], h = g = l[1], f = (l[2] || "").split(".").sort(), h) {
                                p = _.event.special[h] || {}, h = (n ? p.delegateType : p.bindType) || h, d = s[h] || [], l = l[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = d.length;
                                while (a--) u = d[a], !r && g !== u.origType || i && i.guid !== u.guid || l && !l.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (d.splice(a, 1), u.selector && d.delegateCount--, p.remove && p.remove.call(e, u));
                                o && !d.length && (p.teardown && p.teardown.call(e, f, m.handle) !== !1 || _.removeEvent(e, h, m.handle), delete s[h])
                            } else
                                for (h in s) _.event.remove(e, h + t[c], i, n, !0);
                        _.isEmptyObject(s) && J.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t = _.event.fix(e),
                        i, n, r, a, o, l, s = new Array(arguments.length),
                        c = (J.get(this, "events") || {})[t.type] || [],
                        u = _.event.special[t.type] || {};
                    for (s[0] = t, i = 1; i < arguments.length; i++) s[i] = arguments[i];
                    if (t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) { l = _.event.handlers.call(this, t, c), i = 0; while ((a = l[i++]) && !t.isPropagationStopped()) { t.currentTarget = a.elem, n = 0; while ((o = a.handlers[n++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation())) } return u.postDispatch && u.postDispatch.call(this, t), t.result }
                },
                handlers: function(e, t) {
                    var i, n, r, a, o, l = [],
                        s = t.delegateCount,
                        c = e.target;
                    if (s && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
                                for (a = [], o = {}, i = 0; s > i; i++) n = t[i], r = n.selector + " ", void 0 === o[r] && (o[r] = n.needsContext ? _(r, this).index(c) > -1 : _.find(r, this, null, [c]).length), o[r] && a.push(n);
                                a.length && l.push({ elem: c, handlers: a })
                            }
                    return c = this, s < t.length && l.push({ elem: c, handlers: t.slice(s) }), l
                },
                addProp: function(e, t) { Object.defineProperty(_.Event.prototype, e, { enumerable: !0, configurable: !0, get: _.isFunction(t) ? function() { return this.originalEvent ? t(this.originalEvent) : void 0 } : function() { return this.originalEvent ? this.originalEvent[e] : void 0 }, set: function(t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
                fix: function(e) { return e[_.expando] ? e : new _.Event(e) },
                special: { load: { noBubble: !0 }, focus: { trigger: function() { return this !== ke() && this.focus ? (this.focus(), !1) : void 0 }, delegateType: "focusin" }, blur: { trigger: function() { return this === ke() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return "checkbox" === this.type && this.click && S(this, "input") ? (this.click(), !1) : void 0 }, _default: function(e) { return S(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
            }, _.removeEvent = function(e, t, i) { e.removeEventListener && e.removeEventListener(t, i) }, _.Event = function(e, t) { return this instanceof _.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(e, t) }, _.Event.prototype = {
                constructor: _.Event,
                isDefaultPrevented: we,
                isPropagationStopped: we,
                isImmediatePropagationStopped: we,
                isSimulated: !1,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, _.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, _.event.addProp), _.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, t) {
                _.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var i, n = this,
                            r = e.relatedTarget,
                            a = e.handleObj;
                        return r && (r === n || _.contains(n, r)) || (e.type = a.origType, i = a.handler.apply(this, arguments), e.type = t), i
                    }
                }
            }), _.fn.extend({ on: function(e, t, i, n) { return Ce(this, e, t, i, n) }, one: function(e, t, i, n) { return Ce(this, e, t, i, n, 1) }, off: function(e, t, i) { var n, r; if (e && e.preventDefault && e.handleObj) return n = e.handleObj, _(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this; if ("object" == typeof e) { for (r in e) this.off(r, t, e[r]); return this } return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = we), this.each(function() { _.event.remove(this, e, i, t) }) } });
            var ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Te = /<script|<style|<link/i,
                Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Fe = /^true\/(.*)/,
                Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function je(e, t) { return S(e, "table") && S(11 !== t.nodeType ? t : t.firstChild, "tr") ? _(">tbody", e)[0] || e : e }

            function De(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

            function Pe(e) { var t = Fe.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

            function Ie(e, t) {
                var i, n, r, a, o, l, s, c;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (a = J.access(e), o = J.set(t, a), c = a.events)) {
                        delete o.handle, o.events = {};
                        for (r in c)
                            for (i = 0, n = c[r].length; n > i; i++) _.event.add(t, r, c[r][i])
                    }
                    X.hasData(e) && (l = X.access(e), s = _.extend({}, l), X.set(t, s))
                }
            }

            function Ee(e, t) { var i = t.nodeName.toLowerCase(); "input" === i && ce.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue) }

            function Oe(e, t, i, n) {
                t = o.apply([], t);
                var r, a, l, s, c, u, p = 0,
                    d = e.length,
                    h = d - 1,
                    m = t[0],
                    b = _.isFunction(m);
                if (b || d > 1 && "string" == typeof m && !f.checkClone && Se.test(m)) return e.each(function(r) {
                    var a = e.eq(r);
                    b && (t[0] = m.call(this, r, a.html())), Oe(a, t, i, n)
                });
                if (d && (r = me(t, e[0].ownerDocument, !1, e, n), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || n)) {
                    for (l = _.map(he(r, "script"), De), s = l.length; d > p; p++) c = r, p !== h && (c = _.clone(c, !0, !0), s && _.merge(l, he(c, "script"))), i.call(e[p], c, p);
                    if (s)
                        for (u = l[l.length - 1].ownerDocument, _.map(l, Pe), p = 0; s > p; p++) c = l[p], pe.test(c.type || "") && !J.access(c, "globalEval") && _.contains(u, c) && (c.src ? _._evalUrl && _._evalUrl(c.src) : g(c.textContent.replace(Ae, ""), u))
                }
                return e
            }

            function Ue(e, t, i) { for (var n, r = t ? _.filter(t, e) : e, a = 0; null != (n = r[a]); a++) i || 1 !== n.nodeType || _.cleanData(he(n)), n.parentNode && (i && _.contains(n.ownerDocument, n) && fe(he(n, "script")), n.parentNode.removeChild(n)); return e }
            _.extend({
                htmlPrefilter: function(e) { return e.replace(ze, "<$1></$2>") },
                clone: function(e, t, i) {
                    var n, r, a, o, l = e.cloneNode(!0),
                        s = _.contains(e.ownerDocument, e);
                    if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                        for (o = he(l), a = he(e), n = 0, r = a.length; r > n; n++) Ee(a[n], o[n]);
                    if (t)
                        if (i)
                            for (a = a || he(e), o = o || he(l), n = 0, r = a.length; r > n; n++) Ie(a[n], o[n]);
                        else Ie(e, l);
                    return o = he(l, "script"), o.length > 0 && fe(o, !s && he(e, "script")), l
                },
                cleanData: function(e) {
                    for (var t, i, n, r = _.event.special, a = 0; void 0 !== (i = e[a]); a++)
                        if (G(i)) {
                            if (t = i[J.expando]) {
                                if (t.events)
                                    for (n in t.events) r[n] ? _.event.remove(i, n) : _.removeEvent(i, n, t.handle);
                                i[J.expando] = void 0
                            }
                            i[X.expando] && (i[X.expando] = void 0)
                        }
                }
            }), _.fn.extend({
                detach: function(e) { return Ue(this, e, !0) },
                remove: function(e) { return Ue(this, e) },
                text: function(e) {
                    return H(this, function(e) {
                        return void 0 === e ? _.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Oe(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = je(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return Oe(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = je(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() { return Oe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
                after: function() { return Oe(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
                empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(he(e, !1)), e.textContent = ""); return this },
                clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return _.clone(this, e, t) }) },
                html: function(e) {
                    return H(this, function(e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Te.test(e) && !de[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = _.htmlPrefilter(e);
                            try {
                                for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (_.cleanData(he(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (r) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Oe(this, arguments, function(t) {
                        var i = this.parentNode;
                        _.inArray(this, e) < 0 && (_.cleanData(he(this)), i && i.replaceChild(t, this))
                    }, e)
                }
            }), _.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) { _.fn[e] = function(e) { for (var i, n = [], r = _(e), a = r.length - 1, o = 0; a >= o; o++) i = o === a ? this : this.clone(!0), _(r[o])[t](i), l.apply(n, i.get()); return this.pushStack(n) } });
            var Me = /^margin/,
                Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
                Le = function(t) { var i = t.ownerDocument.defaultView; return i && i.opener || (i = e), i.getComputedStyle(t) };
            ! function() {
                function t() {
                    if (s) {
                        s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", _e.appendChild(l);
                        var t = e.getComputedStyle(s);
                        i = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", a = "4px" === t.marginRight, _e.removeChild(l), s = null
                    }
                }
                var i, r, a, o, l = n.createElement("div"),
                    s = n.createElement("div");
                s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === s.style.backgroundClip, l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", l.appendChild(s), _.extend(f, { pixelPosition: function() { return t(), i }, boxSizingReliable: function() { return t(), r }, pixelMarginRight: function() { return t(), a }, reliableMarginLeft: function() { return t(), o } }))
            }();

            function Be(e, t, i) { var n, r, a, o, l = e.style; return i = i || Le(e), i && (o = i.getPropertyValue(t) || i[t], "" !== o || _.contains(e.ownerDocument, e) || (o = _.style(e, t)), !f.pixelMarginRight() && Re.test(o) && Me.test(t) && (n = l.width, r = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = i.width, l.width = n, l.minWidth = r, l.maxWidth = a)), void 0 !== o ? o + "" : o }

            function qe(e, t) { return { get: function() { return e() ? void delete this.get : (this.get = t).apply(this, arguments) } } }
            var Ne = /^(none|table(?!-c[ea]).+)/,
                Ve = /^--/,
                We = { position: "absolute", visibility: "hidden", display: "block" },
                He = { letterSpacing: "0", fontWeight: "400" },
                Ge = ["Webkit", "Moz", "ms"],
                Ke = n.createElement("div").style;

            function Je(e) {
                if (e in Ke) return e;
                var t = e[0].toUpperCase() + e.slice(1),
                    i = Ge.length;
                while (i--)
                    if (e = Ge[i] + t, e in Ke) return e
            }

            function Xe(e) { var t = _.cssProps[e]; return t || (t = _.cssProps[e] = Je(e) || e), t }

            function Qe(e, t, i) { var n = te.exec(t); return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t }

            function Ye(e, t, i, n, r) { var a, o = 0; for (a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; 4 > a; a += 2) "margin" === i && (o += _.css(e, i + ie[a], !0, r)), n ? ("content" === i && (o -= _.css(e, "padding" + ie[a], !0, r)), "margin" !== i && (o -= _.css(e, "border" + ie[a] + "Width", !0, r))) : (o += _.css(e, "padding" + ie[a], !0, r), "padding" !== i && (o += _.css(e, "border" + ie[a] + "Width", !0, r))); return o }

            function $e(e, t, i) {
                var n, r = Le(e),
                    a = Be(e, t, r),
                    o = "border-box" === _.css(e, "boxSizing", !1, r);
                return Re.test(a) ? a : (n = o && (f.boxSizingReliable() || a === e.style[t]), "auto" === a && (a = e["offset" + t[0].toUpperCase() + t.slice(1)]), a = parseFloat(a) || 0, a + Ye(e, t, i || (o ? "border" : "content"), n, r) + "px")
            }
            _.extend({
                cssHooks: { opacity: { get: function(e, t) { if (t) { var i = Be(e, "opacity"); return "" === i ? "1" : i } } } },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: { "float": "cssFloat" },
                style: function(e, t, i, n) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r, a, o, l = _.camelCase(t),
                            s = Ve.test(t),
                            c = e.style;
                        return s || (t = Xe(l)), o = _.cssHooks[t] || _.cssHooks[l], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(e, !1, n)) ? r : c[t] : (a = typeof i, "string" === a && (r = te.exec(i)) && r[1] && (i = ae(e, t, r), a = "number"), void(null != i && i === i && ("number" === a && (i += r && r[3] || (_.cssNumber[l] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n)) || (s ? c.setProperty(t, i) : c[t] = i))))
                    }
                },
                css: function(e, t, i, n) {
                    var r, a, o, l = _.camelCase(t),
                        s = Ve.test(t);
                    return s || (t = Xe(l)), o = _.cssHooks[t] || _.cssHooks[l], o && "get" in o && (r = o.get(e, !0, i)), void 0 === r && (r = Be(e, t, n)), "normal" === r && t in He && (r = He[t]), "" === i || i ? (a = parseFloat(r), i === !0 || isFinite(a) ? a || 0 : r) : r
                }
            }), _.each(["height", "width"], function(e, t) {
                _.cssHooks[t] = {
                    get: function(e, i, n) { return i ? !Ne.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? $e(e, t, n) : re(e, We, function() { return $e(e, t, n) }) : void 0 },
                    set: function(e, i, n) {
                        var r, a = n && Le(e),
                            o = n && Ye(e, t, n, "border-box" === _.css(e, "boxSizing", !1, a), a);
                        return o && (r = te.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i, i = _.css(e, t)), Qe(e, i, o)
                    }
                }
            }), _.cssHooks.marginLeft = qe(f.reliableMarginLeft, function(e, t) { return t ? (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" : void 0 }), _.each({ margin: "", padding: "", border: "Width" }, function(e, t) { _.cssHooks[e + t] = { expand: function(i) { for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + ie[n] + t] = a[n] || a[n - 2] || a[0]; return r } }, Me.test(e) || (_.cssHooks[e + t].set = Qe) }), _.fn.extend({
                css: function(e, t) {
                    return H(this, function(e, t, i) {
                        var n, r, a = {},
                            o = 0;
                        if (Array.isArray(t)) { for (n = Le(e), r = t.length; r > o; o++) a[t[o]] = _.css(e, t[o], !1, n); return a }
                        return void 0 !== i ? _.style(e, t, i) : _.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            });

            function Ze(e, t, i, n, r) { return new Ze.prototype.init(e, t, i, n, r) }
            _.Tween = Ze, Ze.prototype = { constructor: Ze, init: function(e, t, i, n, r, a) { this.elem = e, this.prop = i, this.easing = r || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (_.cssNumber[i] ? "" : "px") }, cur: function() { var e = Ze.propHooks[this.prop]; return e && e.get ? e.get(this) : Ze.propHooks._default.get(this) }, run: function(e) { var t, i = Ze.propHooks[this.prop]; return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ze.propHooks._default.set(this), this } }, Ze.prototype.init.prototype = Ze.prototype, Ze.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) }, set: function(e) { _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[_.cssProps[e.prop]] && !_.cssHooks[e.prop] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit) } } }, Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, _.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, _.fx = Ze.prototype.init, _.fx.step = {};
            var et, tt, it = /^(?:toggle|show|hide)$/,
                nt = /queueHooks$/;

            function rt() { tt && (n.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, _.fx.interval), _.fx.tick()) }

            function at() { return e.setTimeout(function() { et = void 0 }), et = _.now() }

            function ot(e, t) {
                var i, n = 0,
                    r = { height: e };
                for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = ie[n], r["margin" + i] = r["padding" + i] = e;
                return t && (r.opacity = r.width = e), r
            }

            function lt(e, t, i) {
                for (var n, r = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), a = 0, o = r.length; o > a; a++)
                    if (n = r[a].call(i, t, e)) return n
            }

            function st(e, t, i) {
                var n, r, a, o, l, s, c, u, p = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    f = e.style,
                    g = e.nodeType && ne(e),
                    m = J.get(e, "fxshow");
                i.queue || (o = _._queueHooks(e, "fx"), null == o.unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() { o.unqueued || l() }), o.unqueued++, d.always(function() { d.always(function() { o.unqueued--, _.queue(e, "fx").length || o.empty.fire() }) }));
                for (n in t)
                    if (r = t[n], it.test(r)) {
                        if (delete t[n], a = a || "toggle" === r, r === (g ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[n]) continue;
                            g = !0
                        }
                        h[n] = m && m[n] || _.style(e, n)
                    }
                if (s = !_.isEmptyObject(t), s || !_.isEmptyObject(h)) { p && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], c = m && m.display, null == c && (c = J.get(e, "display")), u = _.css(e, "display"), "none" === u && (c ? u = c : (se([e], !0), c = e.style.display || c, u = _.css(e, "display"), se([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (s || (d.done(function() { f.display = c }), null == c && (u = f.display, c = "none" === u ? "" : u)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() { f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2] })), s = !1; for (n in h) s || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", { display: c }), a && (m.hidden = !g), g && se([e], !0), d.done(function() { g || se([e]), J.remove(e, "fxshow"); for (n in h) _.style(e, n, h[n]) })), s = lt(g ? m[n] : 0, n, d), n in m || (m[n] = s.start, g && (s.end = s.start, s.start = 0)) }
            }

            function ct(e, t) {
                var i, n, r, a, o;
                for (i in e)
                    if (n = _.camelCase(i), r = t[n], a = e[i], Array.isArray(a) && (r = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), o = _.cssHooks[n], o && "expand" in o) { a = o.expand(a), delete e[n]; for (i in a) i in e || (e[i] = a[i], t[i] = r) } else t[n] = r
            }

            function ut(e, t, i) {
                var n, r, a = 0,
                    o = ut.prefilters.length,
                    l = _.Deferred().always(function() { delete s.elem }),
                    s = function() { if (r) return !1; for (var t = et || at(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, a = 1 - n, o = 0, s = c.tweens.length; s > o; o++) c.tweens[o].run(a); return l.notifyWith(e, [c, a, i]), 1 > a && s ? i : (s || l.notifyWith(e, [c, 1, 0]), l.resolveWith(e, [c]), !1) },
                    c = l.promise({
                        elem: e,
                        props: _.extend({}, t),
                        opts: _.extend(!0, { specialEasing: {}, easing: _.easing._default }, i),
                        originalProperties: t,
                        originalOptions: i,
                        startTime: et || at(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function(t, i) { var n = _.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing); return c.tweens.push(n), n },
                        stop: function(t) {
                            var i = 0,
                                n = t ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n > i; i++) c.tweens[i].run(1);
                            return t ? (l.notifyWith(e, [c, 1, 0]), l.resolveWith(e, [c, t])) : l.rejectWith(e, [c, t]), this
                        }
                    }),
                    u = c.props;
                for (ct(u, c.opts.specialEasing); o > a; a++)
                    if (n = ut.prefilters[a].call(c, e, u, c.opts)) return _.isFunction(n.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = _.proxy(n.stop, n)), n;
                return _.map(u, lt, c), _.isFunction(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(s, { elem: e, anim: c, queue: c.opts.queue })), c
            }
            _.Animation = _.extend(ut, { tweeners: { "*": [function(e, t) { var i = this.createTween(e, t); return ae(i.elem, e, te.exec(t), i), i }] }, tweener: function(e, t) { _.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(M); for (var i, n = 0, r = e.length; r > n; n++) i = e[n], ut.tweeners[i] = ut.tweeners[i] || [], ut.tweeners[i].unshift(t) }, prefilters: [st], prefilter: function(e, t) { t ? ut.prefilters.unshift(e) : ut.prefilters.push(e) } }), _.speed = function(e, t, i) { var n = e && "object" == typeof e ? _.extend({}, e) : { complete: i || !i && t || _.isFunction(e) && e, duration: e, easing: i && t || t && !_.isFunction(t) && t }; return _.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in _.fx.speeds ? n.duration = _.fx.speeds[n.duration] : n.duration = _.fx.speeds._default), null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() { _.isFunction(n.old) && n.old.call(this), n.queue && _.dequeue(this, n.queue) }, n }, _.fn.extend({
                    fadeTo: function(e, t, i, n) { return this.filter(ne).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n) },
                    animate: function(e, t, i, n) {
                        var r = _.isEmptyObject(e),
                            a = _.speed(t, i, n),
                            o = function() {
                                var t = ut(this, _.extend({}, e), a);
                                (r || J.get(this, "finish")) && t.stop(!0)
                            };
                        return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
                    },
                    stop: function(e, t, i) {
                        var n = function(e) {
                            var t = e.stop;
                            delete e.stop, t(i)
                        };
                        return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                r = null != e && e + "queueHooks",
                                a = _.timers,
                                o = J.get(this);
                            if (r) o[r] && o[r].stop && n(o[r]);
                            else
                                for (r in o) o[r] && o[r].stop && nt.test(r) && n(o[r]);
                            for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(i), t = !1, a.splice(r, 1));
                            !t && i || _.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, i = J.get(this),
                                n = i[e + "queue"],
                                r = i[e + "queueHooks"],
                                a = _.timers,
                                o = n ? n.length : 0;
                            for (i.finish = !0, _.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                            for (t = 0; o > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                            delete i.finish
                        })
                    }
                }), _.each(["toggle", "show", "hide"], function(e, t) {
                    var i = _.fn[t];
                    _.fn[t] = function(e, n, r) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ot(t, !0), e, n, r) }
                }), _.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { _.fn[e] = function(e, i, n) { return this.animate(t, e, i, n) } }), _.timers = [], _.fx.tick = function() {
                    var e, t = 0,
                        i = _.timers;
                    for (et = _.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
                    i.length || _.fx.stop(), et = void 0
                }, _.fx.timer = function(e) { _.timers.push(e), _.fx.start() }, _.fx.interval = 13, _.fx.start = function() { tt || (tt = !0, rt()) }, _.fx.stop = function() { tt = null }, _.fx.speeds = { slow: 600, fast: 200, _default: 400 }, _.fn.delay = function(t, i) {
                    return t = _.fx ? _.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
                        var r = e.setTimeout(i, t);
                        n.stop = function() { e.clearTimeout(r) }
                    })
                },
                function() {
                    var e = n.createElement("input"),
                        t = n.createElement("select"),
                        i = t.appendChild(n.createElement("option"));
                    e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = i.selected, e = n.createElement("input"), e.value = "t", e.type = "radio", f.radioValue = "t" === e.value
                }();
            var pt, dt = _.expr.attrHandle;
            _.fn.extend({ attr: function(e, t) { return H(this, _.attr, e, t, arguments.length > 1) }, removeAttr: function(e) { return this.each(function() { _.removeAttr(this, e) }) } }), _.extend({
                attr: function(e, t, i) { var n, r, a = e.nodeType; return 3 !== a && 8 !== a && 2 !== a ? "undefined" == typeof e.getAttribute ? _.prop(e, t, i) : (1 === a && _.isXMLDoc(e) || (r = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? pt : void 0)), void 0 !== i ? null === i ? void _.removeAttr(e, t) : r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : r && "get" in r && null !== (n = r.get(e, t)) ? n : (n = _.find.attr(e, t), null == n ? void 0 : n)) : void 0 },
                attrHooks: { type: { set: function(e, t) { if (!f.radioValue && "radio" === t && S(e, "input")) { var i = e.value; return e.setAttribute("type", t), i && (e.value = i), t } } } },
                removeAttr: function(e, t) {
                    var i, n = 0,
                        r = t && t.match(M);
                    if (r && 1 === e.nodeType)
                        while (i = r[n++]) e.removeAttribute(i)
                }
            }), pt = { set: function(e, t, i) { return t === !1 ? _.removeAttr(e, i) : e.setAttribute(i, i), i } }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var i = dt[t] || _.find.attr;
                dt[t] = function(e, t, n) { var r, a, o = t.toLowerCase(); return n || (a = dt[o], dt[o] = r, r = null != i(e, t, n) ? o : null, dt[o] = a), r }
            });
            var ht = /^(?:input|select|textarea|button)$/i,
                ft = /^(?:a|area)$/i;
            _.fn.extend({ prop: function(e, t) { return H(this, _.prop, e, t, arguments.length > 1) }, removeProp: function(e) { return this.each(function() { delete this[_.propFix[e] || e] }) } }), _.extend({ prop: function(e, t, i) { var n, r, a = e.nodeType; return 3 !== a && 8 !== a && 2 !== a ? (1 === a && _.isXMLDoc(e) || (t = _.propFix[t] || t, r = _.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]) : void 0 }, propHooks: { tabIndex: { get: function(e) { var t = _.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : ht.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), f.optSelected || (_.propHooks.selected = {
                get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { _.propFix[this.toLowerCase()] = this });

            function gt(e) { var t = e.match(M) || []; return t.join(" ") }

            function mt(e) { return e.getAttribute && e.getAttribute("class") || "" }
            _.fn.extend({
                addClass: function(e) {
                    var t, i, n, r, a, o, l, s = 0;
                    if (_.isFunction(e)) return this.each(function(t) { _(this).addClass(e.call(this, t, mt(this))) });
                    if ("string" == typeof e && e) {
                        t = e.match(M) || [];
                        while (i = this[s++])
                            if (r = mt(i), n = 1 === i.nodeType && " " + gt(r) + " ") {
                                o = 0;
                                while (a = t[o++]) n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                                l = gt(n), r !== l && i.setAttribute("class", l)
                            }
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, i, n, r, a, o, l, s = 0;
                    if (_.isFunction(e)) return this.each(function(t) { _(this).removeClass(e.call(this, t, mt(this))) });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e) {
                        t = e.match(M) || [];
                        while (i = this[s++])
                            if (r = mt(i), n = 1 === i.nodeType && " " + gt(r) + " ") {
                                o = 0;
                                while (a = t[o++])
                                    while (n.indexOf(" " + a + " ") > -1) n = n.replace(" " + a + " ", " ");
                                l = gt(n), r !== l && i.setAttribute("class", l)
                            }
                    }
                    return this
                },
                toggleClass: function(e, t) { var i = typeof e; return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : _.isFunction(e) ? this.each(function(i) { _(this).toggleClass(e.call(this, i, mt(this), t), t) }) : this.each(function() { var t, n, r, a; if ("string" === i) { n = 0, r = _(this), a = e.match(M) || []; while (t = a[n++]) r.hasClass(t) ? r.removeClass(t) : r.addClass(t) } else void 0 !== e && "boolean" !== i || (t = mt(this), t && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : J.get(this, "__className__") || "")) }) },
                hasClass: function(e) {
                    var t, i, n = 0;
                    t = " " + e + " ";
                    while (i = this[n++])
                        if (1 === i.nodeType && (" " + gt(mt(i)) + " ").indexOf(t) > -1) return !0;
                    return !1
                }
            });
            var _t = /\r/g;
            _.fn.extend({
                val: function(e) {
                    var t, i, n, r = this[0];
                    return arguments.length ? (n = _.isFunction(e), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = n ? e.call(this, i, _(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = _.map(r, function(e) { return null == e ? "" : e + "" })), t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    })) : r ? (t = _.valHooks[r.type] || _.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(_t, "") : null == i ? "" : i)) : void 0
                }
            }), _.extend({
                valHooks: {
                    option: { get: function(e) { var t = _.find.attr(e, "value"); return null != t ? t : gt(_.text(e)) } },
                    select: {
                        get: function(e) {
                            var t, i, n, r = e.options,
                                a = e.selectedIndex,
                                o = "select-one" === e.type,
                                l = o ? null : [],
                                s = o ? a + 1 : r.length;
                            for (n = 0 > a ? s : o ? a : 0; s > n; n++)
                                if (i = r[n], (i.selected || n === a) && !i.disabled && (!i.parentNode.disabled || !S(i.parentNode, "optgroup"))) {
                                    if (t = _(i).val(), o) return t;
                                    l.push(t)
                                }
                            return l
                        },
                        set: function(e, t) {
                            var i, n, r = e.options,
                                a = _.makeArray(t),
                                o = r.length;
                            while (o--) n = r[o], (n.selected = _.inArray(_.valHooks.option.get(n), a) > -1) && (i = !0);
                            return i || (e.selectedIndex = -1), a
                        }
                    }
                }
            }), _.each(["radio", "checkbox"], function() { _.valHooks[this] = { set: function(e, t) { return Array.isArray(t) ? e.checked = _.inArray(_(e).val(), t) > -1 : void 0 } }, f.checkOn || (_.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) });
            var bt = /^(?:focusinfocus|focusoutblur)$/;
            _.extend(_.event, {
                trigger: function(t, i, r, a) {
                    var o, l, s, c, u, d, h, f = [r || n],
                        g = p.call(t, "type") ? t.type : t,
                        m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (l = s = r = r || n, 3 !== r.nodeType && 8 !== r.nodeType && !bt.test(g + _.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, t = t[_.expando] ? t : new _.Event(g, "object" == typeof t && t), t.isTrigger = a ? 2 : 3, t.namespace = m.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), i = null == i ? [t] : _.makeArray(i, [t]), h = _.event.special[g] || {}, a || !h.trigger || h.trigger.apply(r, i) !== !1)) {
                        if (!a && !h.noBubble && !_.isWindow(r)) {
                            for (c = h.delegateType || g, bt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) f.push(l), s = l;
                            s === (r.ownerDocument || n) && f.push(s.defaultView || s.parentWindow || e)
                        }
                        o = 0;
                        while ((l = f[o++]) && !t.isPropagationStopped()) t.type = o > 1 ? c : h.bindType || g, d = (J.get(l, "events") || {})[t.type] && J.get(l, "handle"), d && d.apply(l, i), d = u && l[u], d && d.apply && G(l) && (t.result = d.apply(l, i), t.result === !1 && t.preventDefault());
                        return t.type = g, a || t.isDefaultPrevented() || h._default && h._default.apply(f.pop(), i) !== !1 || !G(r) || u && _.isFunction(r[g]) && !_.isWindow(r) && (s = r[u], s && (r[u] = null), _.event.triggered = g, r[g](), _.event.triggered = void 0, s && (r[u] = s)), t.result
                    }
                },
                simulate: function(e, t, i) {
                    var n = _.extend(new _.Event, i, { type: e, isSimulated: !0 });
                    _.event.trigger(n, null, t)
                }
            }), _.fn.extend({ trigger: function(e, t) { return this.each(function() { _.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var i = this[0]; return i ? _.event.trigger(e, t, i, !0) : void 0 } }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) { _.fn[t] = function(e, i) { return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t) } }), _.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), f.focusin = "onfocusin" in e, f.focusin || _.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                var i = function(e) { _.event.simulate(t, e.target, _.event.fix(e)) };
                _.event.special[t] = {
                    setup: function() {
                        var n = this.ownerDocument || this,
                            r = J.access(n, t);
                        r || n.addEventListener(e, i, !0), J.access(n, t, (r || 0) + 1)
                    },
                    teardown: function() {
                        var n = this.ownerDocument || this,
                            r = J.access(n, t) - 1;
                        r ? J.access(n, t, r) : (n.removeEventListener(e, i, !0), J.remove(n, t))
                    }
                }
            });
            var vt = e.location,
                yt = _.now(),
                xt = /\?/;
            _.parseXML = function(t) { var i; if (!t || "string" != typeof t) return null; try { i = (new e.DOMParser).parseFromString(t, "text/xml") } catch (n) { i = void 0 } return i && !i.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), i };
            var wt = /\[\]$/,
                kt = /\r?\n/g,
                Ct = /^(?:submit|button|image|reset|file)$/i,
                zt = /^(?:input|select|textarea|keygen)/i;

            function Tt(e, t, i, n) {
                var r;
                if (Array.isArray(t)) _.each(t, function(t, r) { i || wt.test(e) ? n(e, r) : Tt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n) });
                else if (i || "object" !== _.type(t)) n(e, t);
                else
                    for (r in t) Tt(e + "[" + r + "]", t[r], i, n)
            }
            _.param = function(e, t) {
                var i, n = [],
                    r = function(e, t) {
                        var i = _.isFunction(t) ? t() : t;
                        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                    };
                if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() { r(this.name, this.value) });
                else
                    for (i in e) Tt(i, e[i], t, r);
                return n.join("&")
            }, _.fn.extend({ serialize: function() { return _.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = _.prop(this, "elements"); return e ? _.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !_(this).is(":disabled") && zt.test(this.nodeName) && !Ct.test(e) && (this.checked || !ce.test(e)) }).map(function(e, t) { var i = _(this).val(); return null == i ? null : Array.isArray(i) ? _.map(i, function(e) { return { name: t.name, value: e.replace(kt, "\r\n") } }) : { name: t.name, value: i.replace(kt, "\r\n") } }).get() } });
            var St = /%20/g,
                Ft = /#.*$/,
                At = /([?&])_=[^&]*/,
                jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Pt = /^(?:GET|HEAD)$/,
                It = /^\/\//,
                Et = {},
                Ot = {},
                Ut = "*/".concat("*"),
                Mt = n.createElement("a");
            Mt.href = vt.href;

            function Rt(e) {
                return function(t, i) {
                    "string" != typeof t && (i = t, t = "*");
                    var n, r = 0,
                        a = t.toLowerCase().match(M) || [];
                    if (_.isFunction(i))
                        while (n = a[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
                }
            }

            function Lt(e, t, i, n) {
                var r = {},
                    a = e === Ot;

                function o(l) { var s; return r[l] = !0, _.each(e[l] || [], function(e, l) { var c = l(t, i, n); return "string" != typeof c || a || r[c] ? a ? !(s = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1) }), s }
                return o(t.dataTypes[0]) || !r["*"] && o("*")
            }

            function Bt(e, t) { var i, n, r = _.ajaxSettings.flatOptions || {}; for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]); return n && _.extend(!0, e, n), e }

            function qt(e, t, i) {
                var n, r, a, o, l = e.contents,
                    s = e.dataTypes;
                while ("*" === s[0]) s.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)
                    for (r in l)
                        if (l[r] && l[r].test(n)) { s.unshift(r); break }
                if (s[0] in i) a = s[0];
                else {
                    for (r in i) {
                        if (!s[0] || e.converters[r + " " + s[0]]) { a = r; break }
                        o || (o = r)
                    }
                    a = a || o
                }
                return a ? (a !== s[0] && s.unshift(a), i[a]) : void 0
            }

            function Nt(e, t, i, n) {
                var r, a, o, l, s, c = {},
                    u = e.dataTypes.slice();
                if (u[1])
                    for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                a = u.shift();
                while (a)
                    if (e.responseFields[a] && (i[e.responseFields[a]] = t), !s && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = a, a = u.shift())
                        if ("*" === a) a = s;
                        else if ("*" !== s && s !== a) {
                    if (o = c[s + " " + a] || c["* " + a], !o)
                        for (r in c)
                            if (l = r.split(" "), l[1] === a && (o = c[s + " " + l[0]] || c["* " + l[0]])) { o === !0 ? o = c[r] : c[r] !== !0 && (a = l[0], u.unshift(l[1])); break }
                    if (o !== !0)
                        if (o && e["throws"]) t = o(t);
                        else try { t = o(t) } catch (p) { return { state: "parsererror", error: o ? p : "No conversion from " + s + " to " + a } }
                }
                return { state: "success", data: t }
            }
            _.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: { url: vt.href, type: "GET", isLocal: Dt.test(vt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Ut, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": _.parseXML }, flatOptions: { url: !0, context: !0 } },
                ajaxSetup: function(e, t) { return t ? Bt(Bt(e, _.ajaxSettings), t) : Bt(_.ajaxSettings, e) },
                ajaxPrefilter: Rt(Et),
                ajaxTransport: Rt(Ot),
                ajax: function(t, i) {
                    "object" == typeof t && (i = t, t = void 0), i = i || {};
                    var r, a, o, l, s, c, u, p, d, h, f = _.ajaxSetup({}, i),
                        g = f.context || f,
                        m = f.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                        b = _.Deferred(),
                        v = _.Callbacks("once memory"),
                        y = f.statusCode || {},
                        x = {},
                        w = {},
                        k = "canceled",
                        C = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (u) {
                                    if (!l) { l = {}; while (t = jt.exec(o)) l[t[1].toLowerCase()] = t[2] }
                                    t = l[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            },
                            getAllResponseHeaders: function() { return u ? o : null },
                            setRequestHeader: function(e, t) { return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this },
                            overrideMimeType: function(e) { return null == u && (f.mimeType = e), this },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (u) C.always(e[C.status]);
                                    else
                                        for (t in e) y[t] = [y[t], e[t]];
                                return this
                            },
                            abort: function(e) { var t = e || k; return r && r.abort(t), T(0, t), this }
                        };
                    if (b.promise(C), f.url = ((t || f.url || vt.href) + "").replace(It, vt.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(M) || [""], null == f.crossDomain) { c = n.createElement("a"); try { c.href = f.url, c.href = c.href, f.crossDomain = Mt.protocol + "//" + Mt.host != c.protocol + "//" + c.host } catch (z) { f.crossDomain = !0 } }
                    if (f.data && f.processData && "string" != typeof f.data && (f.data = _.param(f.data, f.traditional)), Lt(Et, f, i, C), u) return C;
                    p = _.event && f.global, p && 0 === _.active++ && _.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Pt.test(f.type), a = f.url.replace(Ft, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(St, "+")) : (h = f.url.slice(a.length), f.data && (a += (xt.test(a) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (a = a.replace(At, "$1"), h = (xt.test(a) ? "&" : "?") + "_=" + yt++ + h), f.url = a + h), f.ifModified && (_.lastModified[a] && C.setRequestHeader("If-Modified-Since", _.lastModified[a]), _.etag[a] && C.setRequestHeader("If-None-Match", _.etag[a])), (f.data && f.hasContent && f.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : f.accepts["*"]);
                    for (d in f.headers) C.setRequestHeader(d, f.headers[d]);
                    if (f.beforeSend && (f.beforeSend.call(g, C, f) === !1 || u)) return C.abort();
                    if (k = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), r = Lt(Ot, f, i, C)) {
                        if (C.readyState = 1, p && m.trigger("ajaxSend", [C, f]), u) return C;
                        f.async && f.timeout > 0 && (s = e.setTimeout(function() { C.abort("timeout") }, f.timeout));
                        try { u = !1, r.send(x, T) } catch (z) {
                            if (u) throw z;
                            T(-1, z)
                        }
                    } else T(-1, "No Transport");

                    function T(t, i, n, l) {
                        var c, d, h, x, w, k = i;
                        u || (u = !0, s && e.clearTimeout(s), r = void 0, o = l || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, n && (x = qt(f, C, n)), x = Nt(f, x, C, c), c ? (f.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (_.lastModified[a] = w), w = C.getResponseHeader("etag"), w && (_.etag[a] = w)), 204 === t || "HEAD" === f.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = x.state, d = x.data, h = x.error, c = !h)) : (h = k, !t && k || (k = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (i || k) + "", c ? b.resolveWith(g, [d, k, C]) : b.rejectWith(g, [C, k, h]), C.statusCode(y), y = void 0, p && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : h]), v.fireWith(g, [C, k]), p && (m.trigger("ajaxComplete", [C, f]), --_.active || _.event.trigger("ajaxStop")))
                    }
                    return C
                },
                getJSON: function(e, t, i) { return _.get(e, t, i, "json") },
                getScript: function(e, t) { return _.get(e, void 0, t, "script") }
            }), _.each(["get", "post"], function(e, t) { _[t] = function(e, i, n, r) { return _.isFunction(i) && (r = r || n, n = i, i = void 0), _.ajax(_.extend({ url: e, type: t, dataType: r, data: i, success: n }, _.isPlainObject(e) && e)) } }), _._evalUrl = function(e) { return _.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, _.fn.extend({
                wrapAll: function(e) { var t; return this[0] && (_.isFunction(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
                wrapInner: function(e) {
                    return _.isFunction(e) ? this.each(function(t) { _(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                        var t = _(this),
                            i = t.contents();
                        i.length ? i.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) { var t = _.isFunction(e); return this.each(function(i) { _(this).wrapAll(t ? e.call(this, i) : e) }) },
                unwrap: function(e) { return this.parent(e).not("body").each(function() { _(this).replaceWith(this.childNodes) }), this }
            }), _.expr.pseudos.hidden = function(e) { return !_.expr.pseudos.visible(e) }, _.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, _.ajaxSettings.xhr = function() { try { return new e.XMLHttpRequest } catch (t) {} };
            var Vt = { 0: 200, 1223: 204 },
                Wt = _.ajaxSettings.xhr();
            f.cors = !!Wt && "withCredentials" in Wt, f.ajax = Wt = !!Wt, _.ajaxTransport(function(t) {
                var i, n;
                return f.cors || Wt && !t.crossDomain ? {
                    send: function(r, a) {
                        var o, l = t.xhr();
                        if (l.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (o in t.xhrFields) l[o] = t.xhrFields[o];
                        t.mimeType && l.overrideMimeType && l.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        for (o in r) l.setRequestHeader(o, r[o]);
                        i = function(e) { return function() { i && (i = n = l.onload = l.onerror = l.onabort = l.onreadystatechange = null, "abort" === e ? l.abort() : "error" === e ? "number" != typeof l.status ? a(0, "error") : a(l.status, l.statusText) : a(Vt[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? { binary: l.response } : { text: l.responseText }, l.getAllResponseHeaders())) } }, l.onload = i(), n = l.onerror = i("error"), void 0 !== l.onabort ? l.onabort = n : l.onreadystatechange = function() { 4 === l.readyState && e.setTimeout(function() { i && n() }) }, i = i("abort");
                        try { l.send(t.hasContent && t.data || null) } catch (s) { if (i) throw s }
                    },
                    abort: function() { i && i() }
                } : void 0
            }), _.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), _.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return _.globalEval(e), e } } }), _.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), _.ajaxTransport("script", function(e) { if (e.crossDomain) { var t, i; return { send: function(r, a) { t = _("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", i = function(e) { t.remove(), i = null, e && a("error" === e.type ? 404 : 200, e.type) }), n.head.appendChild(t[0]) }, abort: function() { i && i() } } } });
            var Ht = [],
                Gt = /(=)\?(?=&|$)|\?\?/;
            _.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Ht.pop() || _.expando + "_" + yt++; return this[e] = !0, e } }), _.ajaxPrefilter("json jsonp", function(t, i, n) {
                var r, a, o, l = t.jsonp !== !1 && (Gt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Gt.test(t.data) && "data");
                return l || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = _.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(Gt, "$1" + r) : t.jsonp !== !1 && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() { return o || _.error(r + " was not called"), o[0] }, t.dataTypes[0] = "json", a = e[r], e[r] = function() { o = arguments }, n.always(function() { void 0 === a ? _(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = i.jsonpCallback, Ht.push(r)), o && _.isFunction(a) && a(o[0]), o = a = void 0 }), "script") : void 0
            }), f.createHTMLDocument = function() { var e = n.implementation.createHTMLDocument("").body; return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length }(), _.parseHTML = function(e, t, i) { if ("string" != typeof e) return []; "boolean" == typeof t && (i = t, t = !1); var r, a, o; return t || (f.createHTMLDocument ? (t = n.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = n.location.href, t.head.appendChild(r)) : t = n), a = F.exec(e), o = !i && [], a ? [t.createElement(a[1])] : (a = me([e], t, o), o && o.length && _(o).remove(), _.merge([], a.childNodes)) }, _.fn.load = function(e, t, i) {
                var n, r, a, o = this,
                    l = e.indexOf(" ");
                return l > -1 && (n = gt(e.slice(l)), e = e.slice(0, l)), _.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && _.ajax({ url: e, type: r || "GET", dataType: "html", data: t }).done(function(e) { a = arguments, o.html(n ? _("<div>").append(_.parseHTML(e)).find(n) : e) }).always(i && function(e, t) { o.each(function() { i.apply(this, a || [e.responseText, t, e]) }) }), this
            }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { _.fn[t] = function(e) { return this.on(t, e) } }), _.expr.pseudos.animated = function(e) { return _.grep(_.timers, function(t) { return e === t.elem }).length }, _.offset = {
                setOffset: function(e, t, i) {
                    var n, r, a, o, l, s, c, u = _.css(e, "position"),
                        p = _(e),
                        d = {};
                    "static" === u && (e.style.position = "relative"), l = p.offset(), a = _.css(e, "top"), s = _.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + s).indexOf("auto") > -1, c ? (n = p.position(), o = n.top, r = n.left) : (o = parseFloat(a) || 0, r = parseFloat(s) || 0), _.isFunction(t) && (t = t.call(e, i, _.extend({}, l))), null != t.top && (d.top = t.top - l.top + o), null != t.left && (d.left = t.left - l.left + r), "using" in t ? t.using.call(e, d) : p.css(d)
                }
            }, _.fn.extend({
                offset: function(e) { if (arguments.length) return void 0 === e ? this : this.each(function(t) { _.offset.setOffset(this, e, t) }); var t, i, n, r, a = this[0]; return a ? a.getClientRects().length ? (n = a.getBoundingClientRect(), t = a.ownerDocument, i = t.documentElement, r = t.defaultView, { top: n.top + r.pageYOffset - i.clientTop, left: n.left + r.pageXOffset - i.clientLeft }) : { top: 0, left: 0 } : void 0 },
                position: function() {
                    if (this[0]) {
                        var e, t, i = this[0],
                            n = { top: 0, left: 0 };
                        return "fixed" === _.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S(e[0], "html") || (n = e.offset()), n = { top: n.top + _.css(e[0], "borderTopWidth", !0), left: n.left + _.css(e[0], "borderLeftWidth", !0) }), { top: t.top - n.top - _.css(i, "marginTop", !0), left: t.left - n.left - _.css(i, "marginLeft", !0) }
                    }
                },
                offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === _.css(e, "position")) e = e.offsetParent; return e || _e }) }
            }), _.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
                var i = "pageYOffset" === t;
                _.fn[e] = function(n) { return H(this, function(e, n, r) { var a; return _.isWindow(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r ? a ? a[t] : e[n] : void(a ? a.scrollTo(i ? a.pageXOffset : r, i ? r : a.pageYOffset) : e[n] = r) }, e, n, arguments.length) }
            }), _.each(["top", "left"], function(e, t) { _.cssHooks[t] = qe(f.pixelPosition, function(e, i) { return i ? (i = Be(e, t), Re.test(i) ? _(e).position()[t] + "px" : i) : void 0 }) }), _.each({ Height: "height", Width: "width" }, function(e, t) {
                _.each({ padding: "inner" + e, content: t, "": "outer" + e }, function(i, n) {
                    _.fn[n] = function(r, a) {
                        var o = arguments.length && (i || "boolean" != typeof r),
                            l = i || (r === !0 || a === !0 ? "margin" : "border");
                        return H(this, function(t, i, r) { var a; return _.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? _.css(t, i, l) : _.style(t, i, r, l) }, t, o ? r : void 0, o)
                    }
                })
            }), _.fn.extend({ bind: function(e, t, i) { return this.on(e, null, t, i) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, i, n) { return this.on(t, e, i, n) }, undelegate: function(e, t, i) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i) } }), _.holdReady = function(e) { e ? _.readyWait++ : _.ready(!0) }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = S, "function" == typeof define && define.amd && define("jquery", [], function() { return _ });
            var Kt = e.jQuery,
                Jt = e.$;
            return _.noConflict = function(t) { return e.$ === _ && (e.$ = Jt), t && e.jQuery === _ && (e.jQuery = Kt), _ }, t || (e.jQuery = e.$ = _), _
        }),
        function() {
            n = { __exports: {} }, n.namespace = function(e, t) {
                var i, r, a, o, l;
                if (r = n, e)
                    for (l = e.split("."), a = 0, o = l.length; o > a; a++) i = l[a], r[i] || (r[i] = {}), r = r[i];
                return t(r)
            }, n.expose = function(e, t) { var i, r, a, o, l, s, c; for (a = e.split("."), i = a.pop(), l = n.__exports, o = n, s = 0, c = a.length; c > s; s++) r = a[s], l[r] || (l[r] = {}), l = l[r], o = null != o ? o[r] : void 0; return l[i] = t || o[i] }
        }.call(this),
        function() {
            var i, r;
            if (r = n, r.version = "3.6.2", r.jQuery = t || e.jQuery, "undefined" == typeof r.jQuery) throw new ReferenceError("jQuery is not defined");
            i = r.expose, i("version"), i("jQuery"), i("plugin", function(e) { return e(r) })
        }.call(this), e.XDomainRequest && n.jQuery.ajaxTransport(function(e) {
            if (e.crossDomain && e.async) {
                e.timeout && (e.xdrTimeout = e.timeout, delete e.timeout);
                var t;
                return {
                    send: function(i, n) {
                        function r(e, i, r, a) { t.onload = t.onerror = t.ontimeout = function() {}, t = void 0, n(e, i, r, a) }
                        t = new XDomainRequest, t.onload = function() { r(200, "OK", { text: t.responseText }, "Content-Type: " + t.contentType) }, t.onerror = function() { r(404, "Not Found") }, t.onprogress = function() {}, t.ontimeout = function() { r(0, "timeout") }, t.timeout = e.xdrTimeout || Number.MAX_VALUE, t.open(e.type, e.url.replace(/^https?:/, "")), t.send(e.hasContent && e.data || null)
                    },
                    abort: function() { t && (t.onerror = function() {}, t.abort()) }
                }
            }
        }),
        function() {
            n.namespace("utils.abilities", function(t) {
                var i, n, a, o;
                t.fileAPI = !!(e.File && e.FileList && e.FileReader), t.sendFileAPI = !(!e.FormData || !t.fileAPI), t.dragAndDrop = function() { var e; return e = r.createElement("div"), "draggable" in e || "ondragstart" in e && "ondrop" in e }(), t.canvas = function() { var e; return e = r.createElement("canvas"), !(!e.getContext || !e.getContext("2d")) }(), t.fileDragAndDrop = t.fileAPI && t.dragAndDrop, t.iOSVersion = null, (i = /^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent)) && (a = /OS (\d)_(\d)/.exec(i[1])) && (t.iOSVersion = +a[1] + a[2] / 10), t.Blob = !1;
                try { new e.Blob && (t.Blob = e.Blob) } catch (l) {}
                return n = e.URL || e.webkitURL || !1, t.URL = n && n.createObjectURL && n, t.FileReader = (null != (o = e.FileReader) ? o.prototype.readAsArrayBuffer : void 0) && e.FileReader
            })
        }.call(this),
        function() {
            var e, t = {}.hasOwnProperty,
                i = function(e, i) {
                    for (var n in i) t.call(i, n) && (e[n] = i[n]);

                    function r() { this.constructor = e }
                    return r.prototype = i.prototype, e.prototype = new r, e.__super__ = i.prototype, e
                },
                r = [].indexOf || function(e) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                a = function(e, t) { return function() { return e.apply(t, arguments) } },
                o = [].slice;
            e = n.jQuery, n.namespace("utils", function(t) {
                var n;
                return t.Collection = function() {
                    function t(t) { var i, n, r; for (null == t && (t = []), this.onAdd = e.Callbacks(), this.onRemove = e.Callbacks(), this.onSort = e.Callbacks(), this.onReplace = e.Callbacks(), this.__items = [], n = 0, r = t.length; r > n; n++) i = t[n], this.add(i) }
                    return t.prototype.add = function(e) { return this.__add(e, this.__items.length) }, t.prototype.__add = function(e, t) { return this.__items.splice(t, 0, e), this.onAdd.fire(e, t) }, t.prototype.remove = function(t) { var i; return i = e.inArray(t, this.__items), -1 !== i ? this.__remove(t, i) : void 0 }, t.prototype.__remove = function(e, t) { return this.__items.splice(t, 1), this.onRemove.fire(e, t) }, t.prototype.clear = function() { var e, t, i, n, r, a; for (i = this.get(), this.__items.length = 0, a = [], e = n = 0, r = i.length; r > n; e = ++n) t = i[e], a.push(this.onRemove.fire(t, e)); return a }, t.prototype.replace = function(t, i) { var n; return t !== i && (n = e.inArray(t, this.__items), -1 !== n) ? this.__replace(t, i, n) : void 0 }, t.prototype.__replace = function(e, t, i) { return this.__items[i] = t, this.onReplace.fire(e, t, i) }, t.prototype.sort = function(e) { return this.__items.sort(e), this.onSort.fire() }, t.prototype.get = function(e) {
                        return null != e ? this.__items[e] : this.__items.slice(0)
                    }, t.prototype.length = function() { return this.__items.length }, t
                }(), t.UniqCollection = function(e) {
                    i(t, e);

                    function t() { return n = t.__super__.constructor.apply(this, arguments) }
                    return t.prototype.add = function(e) { return r.call(this.__items, e) >= 0 ? void 0 : t.__super__.add.apply(this, arguments) }, t.prototype.__replace = function(e, i, n) { return r.call(this.__items, i) >= 0 ? this.remove(e) : t.__super__.__replace.apply(this, arguments) }, t
                }(t.Collection), t.CollectionOfPromises = function(t) {
                    i(n, t);

                    function n() { this.onAnyProgress = a(this.onAnyProgress, this), this.onAnyFail = a(this.onAnyFail, this), this.onAnyDone = a(this.onAnyDone, this), this.anyDoneList = e.Callbacks(), this.anyFailList = e.Callbacks(), this.anyProgressList = e.Callbacks(), this._thenArgs = null, this.anyProgressList.add(function(t, i) { return e(t).data("lastProgress", i) }), n.__super__.constructor.apply(this, arguments) }
                    return n.prototype.onAnyDone = function(e) { var t, i, n, r, a; for (this.anyDoneList.add(e), r = this.__items, a = [], i = 0, n = r.length; n > i; i++) t = r[i], "resolved" === t.state() ? a.push(t.done(function() { return e.apply(null, [t].concat(o.call(arguments))) })) : a.push(void 0); return a }, n.prototype.onAnyFail = function(e) { var t, i, n, r, a; for (this.anyFailList.add(e), r = this.__items, a = [], i = 0, n = r.length; n > i; i++) t = r[i], "rejected" === t.state() ? a.push(t.fail(function() { return e.apply(null, [t].concat(o.call(arguments))) })) : a.push(void 0); return a }, n.prototype.onAnyProgress = function(t) { var i, n, r, a, o; for (this.anyProgressList.add(t), a = this.__items, o = [], n = 0, r = a.length; r > n; n++) i = a[n], o.push(t(i, e(i).data("lastProgress"))); return o }, n.prototype.lastProgresses = function() { var t, i, n, r, a; for (r = this.__items, a = [], i = 0, n = r.length; n > i; i++) t = r[i], a.push(e(t).data("lastProgress")); return a }, n.prototype.add = function(e) { return e && e.then ? (this._thenArgs && (e = e.then.apply(e, this._thenArgs)), n.__super__.add.apply(this, arguments), this.__watchItem(e)) : void 0 }, n.prototype.__replace = function(e, t, i) { return t && t.then ? (n.__super__.__replace.apply(this, arguments), this.__watchItem(t)) : this.remove(e) }, n.prototype.__watchItem = function(e) { var t, i = this; return t = function(t) { return function() { return r.call(i.__items, e) >= 0 ? t.fire.apply(t, [e].concat(o.call(arguments))) : void 0 } }, e.then(t(this.anyDoneList), t(this.anyFailList), t(this.anyProgressList)) }, n.prototype.autoThen = function() { var e, t, i, n, r, a; if (this._thenArgs) throw new Error("CollectionOfPromises.then() could be used only once"); for (this._thenArgs = arguments, r = this.__items, a = [], e = i = 0, n = r.length; n > i; e = ++i) t = r[e], a.push(this.__replace(t, t.then.apply(t, this._thenArgs), e)); return a }, n
                }(t.UniqCollection)
            })
        }.call(this),
        function() {
            var e;
            e = n.jQuery, n.namespace("utils", function(t) { var i; return i = function(t, i) { var n, r = this; return n = e.Deferred(), i && (t.src = i), t.complete ? n.resolve(t) : (e(t).one("load", function() { return n.resolve(t) }), e(t).one("error", function() { return n.reject(t) })), n.promise() }, t.imageLoader = function(n) { return e.isArray(n) ? e.when.apply(null, e.map(n, t.imageLoader)) : n.src ? i(n) : i(new Image, n) }, t.videoLoader = function(t) { var i; return i = e.Deferred(), e("<video/>").on("loadeddata", i.resolve).on("error", i.reject).attr("src", t).get(0).load(), i.promise() } })
        }.call(this),
        function() {
            var t = [].slice;
            n.namespace("utils", function(i) { var n, r; return i.log = function() { var t; try { return null != (t = e.console) && "function" == typeof t.log ? t.log.apply(t, arguments) : void 0 } catch (i) {} }, i.debug = function() { var n, r; if (null != (n = e.console) ? !n.debug : !0) return i.log.apply(i, ["Debug:"].concat(t.call(arguments))); try { return (r = e.console).debug.apply(r, arguments) } catch (a) {} }, i.warn = function() { var n, r; if (null != (n = e.console) ? !n.warn : !0) return i.log.apply(i, ["Warning:"].concat(t.call(arguments))); try { return (r = e.console).warn.apply(r, arguments) } catch (a) {} }, r = {}, i.warnOnce = function(e) { return null == r[e] ? (r[e] = !0, i.warn(e)) : void 0 }, n = { publicKey: "Global public key not set. Uploads may not work!\nAdd this to the <head> tag to set your key:\n\n<script>\nUPLOADCARE_PUBLIC_KEY = 'your_public_key';\n</script>" }, i.commonWarning = function(e) { return null != n[e] ? i.warnOnce(n[e]) : void 0 } })
        }.call(this),
        function() {
            var t;
            t = n.jQuery, n.namespace("utils", function(i) {
                var n, r = this;
                return n = {}, t(e).on("message", function(e) {
                    var t, i, r, a, o, l, s;
                    t = e.originalEvent;
                    try { r = JSON.parse(t.data) } catch (c) { return }
                    if ((null != r ? r.type : void 0) && r.type in n) { for (l = n[r.type], s = [], a = 0, o = l.length; o > a; a++) i = l[a], t.source === i[0] ? s.push(i[1](r)) : s.push(void 0); return s }
                }), i.registerMessage = function(e, t, i) { return e in n || (n[e] = []), n[e].push([t, i]) }, i.unregisterMessage = function(e, i) { return e in n ? n[e] = t.grep(n[e], function(e) { return e[0] !== i }) : void 0 }
            })
        }.call(this),
        function() {
            var e, t = [].indexOf || function(e) {
                    for (var t = 0, i = this.length; i > t; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                i = [].slice;
            e = n.jQuery, n.namespace("utils", function(n) {
                var a;
                return n.unique = function(e) { var i, n, r, a; for (n = [], r = 0, a = e.length; a > r; r++) i = e[r], t.call(n, i) < 0 && n.push(i); return n }, n.defer = function(e) { return setTimeout(e, 0) }, n.gcd = function(e, t) { var i; while (t) i = e % t, e = t, t = i; return e }, n.once = function(e) {
                    var t, i;
                    return t = !1, i = null,
                        function() { return t || (i = e.apply(this, arguments), t = !0), i }
                }, n.wrapToPromise = function(t) { return e.Deferred().resolve(t).promise() }, n.then = function(t, i, n, r) { var a, o; return o = e.Deferred(), a = function(e, t) { return e && t ? function() { return t.call(this, e.apply(this, arguments)) } : e || t }, t.then(a(i, o.resolve), a(n, o.reject), a(r, o.notify)), o.promise() }, n.bindAll = function(t, i) { var n; return n = {}, e.each(i, function(i, r) { var a; return a = t[r], e.isFunction(a) ? n[r] = function() { var e; return e = a.apply(t, arguments), e === t ? n : e } : n[r] = a }), n }, n.upperCase = function(e) { return e.replace(/([A-Z])/g, "_$1").toUpperCase() }, n.publicCallbacks = function(e) { var t; return t = e.add, t.add = e.add, t.remove = e.remove, t }, n.uuid = function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t, i; return t = 16 * Math.random() | 0, i = "x" === e ? t : 3 & t | 8, i.toString(16) }) }, n.splitUrlRegex = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?\#]*))?([^?\#]*)\??([^\#]*)\#?(.*)$/, n.uuidRegex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i, n.groupIdRegex = new RegExp("" + n.uuidRegex.source + "~[0-9]+", "i"), n.cdnUrlRegex = new RegExp("^/?(" + n.uuidRegex.source + ")(?:/(-/(?:[^/]+/)+)?([^/]*))?$", "i"), n.splitCdnUrl = function(e) { return n.cdnUrlRegex.exec(n.splitUrlRegex.exec(e)[3]) }, n.escapeRegExp = function(e) { return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }, n.globRegexp = function(t, i) { var r; return null == i && (i = "i"), r = e.map(t.split("*"), n.escapeRegExp), new RegExp("^" + r.join(".+") + "$", i) }, n.normalizeUrl = function(e) { var t; return t = r.location.protocol, "http:" !== t && (t = "https:"), e.replace(/^\/\//, t + "//").replace(/\/+$/, "") }, n.fitText = function(e, t) { var i, n; return e.length > t ? (i = Math.ceil((t - 3) / 2), n = Math.floor((t - 3) / 2), e.slice(0, i) + "..." + e.slice(-n)) : e }, n.fitSizeInCdnLimit = function(e) { return n.fitSize(e, [2048, 2048]) }, n.fitSize = function(e, t, i) { var n, r; return e[0] > t[0] || e[1] > t[1] || i ? (r = t[0] / e[0], n = t[1] / e[1], !t[0] || t[1] && r > n ? [Math.round(n * e[0]), t[1]] : [t[0], Math.round(r * e[1])]) : e.slice() }, n.applyCropCoordsToInfo = function(t, i, n, r) { var a, o, l, s, c, u, p; return u = r.width, o = r.height, s = i.preferedSize, l = "", p = u === n[0] && o === n[1], p || (l += "-/crop/" + u + "x" + o + "/" + r.left + "," + r.top + "/"), a = i.downscale && (u > s[0] || o > s[1]), c = i.upscale && (u < s[0] || o < s[1]), a || c ? (r.sw = s[0], r.sh = s[1], l += "-/resize/" + s.join("x") + "/") : p || (l += "-/preview/"), t = e.extend({}, t), t.cdnUrlModifiers = l, t.cdnUrl = "" + t.originalUrl + (l || ""), t.crop = r, t }, n.fileInput = function(t, i, n) { var r, a, o; return a = null, r = i.inputAcceptTypes, "" === r && (r = i.imagesOnly ? "image/*" : null), (o = function() { return a = e(i.multiple ? '<input type="file" multiple>' : '<input type="file">').attr("accept", r).css({ position: "absolute", top: 0, opacity: 0, margin: 0, padding: 0, width: "auto", height: "auto", cursor: t.css("cursor") }).on("change", function() { return n(this), e(this).hide(), o() }), t.append(a) })(), t.css({ position: "relative", overflow: "hidden" }).mousemove(function(t) { var i, n, r, o; return o = e(this).offset(), i = o.left, n = o.top, r = a.width(), a.css({ left: t.pageX - i - r + 10, top: t.pageY - n - 10 }) }) }, n.fileSelectDialog = function(t, i, n, r) {
                    var a;
                    return null == r && (r = {}), a = i.inputAcceptTypes, "" === a && (a = i.imagesOnly ? "image/*" : null), e(i.multiple ? '<input type="file" multiple>' : '<input type="file">').attr("accept", a).attr(r).css({
                        position: "fixed",
                        bottom: 0,
                        opacity: 0
                    }).on("change", function() { return n(this), e(this).remove() }).appendTo(t).focus().click().hide()
                }, n.fileSizeLabels = "B KB MB GB TB PB EB ZB YB".split(" "), n.readableFileSize = function(e, t, i, r) {
                    var a, o, l, s;
                    if (null == t && (t = ""), null == i && (i = ""), null == r && (r = ""), e = parseInt(e, 10), isNaN(e)) return t;
                    a = 2, l = 0, s = 1e3 - 5 * Math.pow(10, 2 - Math.max(a, 3));
                    while (e > s && l < n.fileSizeLabels.length - 1) l++, e /= 1024;
                    return e += 1e-15, o = Math.max(0, a - Math.floor(e).toFixed(0).length), e = Number(e.toFixed(o)), "" + i + e + " " + n.fileSizeLabels[l] + r
                }, n.ajaxDefaults = { dataType: "json", crossDomain: !0, cache: !1 }, n.jsonp = function(t, i, r, a) { return null == a && (a = {}), e.ajax(e.extend({ url: t, type: i, data: r }, a, n.ajaxDefaults)).then(function(t) { var i; return t.error ? (i = t.error.content || t.error, e.Deferred().reject(i)) : t }, function(e, i, r) { var a; return a = "" + i + " (" + r + ")", n.warn("JSONP unexpected error: " + a + " while loading " + t), a }) }, n.canvasToBlob = function(e, t, i, n) { var r, a, o, l, s, c; if (HTMLCanvasElement.prototype.toBlob) return e.toBlob(n, t, i); for (o = e.toDataURL(t, i), o = o.split(","), a = atob(o[1]), r = new Uint8Array(a.length), l = s = 0, c = a.length; c > s; l = s += 1) r[l] = a.charCodeAt(l); return n(new Blob([r], { type: /:(.+\/.+);/.exec(o[0])[1] })) }, n.taskRunner = function(e) { var t, i, r, a; return a = 0, t = [], i = function() { var e; return t.length ? (e = t.shift(), n.defer(function() { return e(i) })) : a -= 1 }, r = function(r) { return !e || e > a ? (a += 1, n.defer(function() { return r(i) })) : t.push(r) } }, a = [
                    ["notify", "progress", 2],
                    ["resolve", "done", 0],
                    ["reject", "fail", 1]
                ], n.fixedPipe = function() { var t, n; return n = arguments[0], t = 2 <= arguments.length ? i.call(arguments, 1) : [], e.Deferred(function(i) { return e.each(a, function(r, a) { var o; return o = e.isFunction(t[a[2]]) && t[a[2]], n[a[1]](function() { var t; return t = o && o.apply(this, arguments), t && e.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[a[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments) }) }) }).promise() }
            })
        }.call(this),
        function() {
            var t, i, a, o, l = [].indexOf || function(e) {
                for (var t = 0, i = this.length; i > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
            i = n.expose, a = n.utils, t = n.jQuery, o = n.version, n.namespace("settings", function(s) {
                var c, u, p, d, h, f, g, m, _, b, v, y, x, w, k, C, z, T;
                return h = { live: !0, manualStart: !1, locale: null, localePluralize: null, localeTranslations: null, systemDialog: !1, crop: !1, previewStep: !1, imagesOnly: !1, clearable: !1, multiple: !1, multipleMax: 1e3, multipleMin: 1, multipleMaxStrict: !1, imageShrink: !1, pathValue: !0, tabs: "file camera url facebook gdrive gphotos dropbox instagram evernote flickr skydrive", preferredTypes: "", inputAcceptTypes: "", doNotStore: !1, publicKey: null, secureSignature: "", secureExpire: "", pusherKey: "79ae88bd931ea68464d9", cdnBase: "https://ucarecdn.com", urlBase: "https://upload.uploadcare.com", socialBase: "https://social.uploadcare.com", previewProxy: null, previewUrlCallback: null, imagePreviewMaxSize: 26214400, multipartMinSize: 10485760, multipartPartSize: 5242880, multipartMinLastPartSize: 1048576, multipartConcurrency: 4, multipartMaxAttempts: 3, parallelDirectUploads: 10, passWindowOpen: !1, audioBitsPerSecond: null, videoBitsPerSecond: null, scriptBase: "//ucarecdn.com/widget/" + n.version + "/uploadcare/", debugUploads: !1, integration: "" }, z = { multipleMax: { from: 0, to: 1e3 } }, p = { multipleMax: { min: 1, max: 1e3 } }, x = { tabs: { all: "file camera url facebook gdrive gphotos dropbox instagram evernote flickr skydrive box vk huddle", "default": h.tabs } }, w = r.currentScript || function() { var e; return e = r.getElementsByTagName("script"), e[e.length - 1] }(), m = t(w).data("integration"), void 0 !== m && (h = t.extend(h, { integration: m })), k = function(e) { return t.isArray(e) || (e = t.trim(e), e = e ? e.split(" ") : []), e }, c = function(e, t) {
                    var i, n, r, o, l, s, c, u;
                    for (l = 0, c = t.length; c > l; l++) {
                        if (n = t[l], o = r = k(e[n]), x.hasOwnProperty(n))
                            for (o = [], s = 0, u = r.length; u > s; s++) i = r[s], x[n].hasOwnProperty(i) ? o = o.concat(k(x[n][i])) : o.push(i);
                        e[n] = a.unique(o)
                    }
                    return e
                }, T = function(e, t) { var i, n, r; for (n = 0, r = t.length; r > n; n++) i = t[n], null != e[i] && (e[i] = a.normalizeUrl(e[i])); return e }, f = function(e, i) { var n, r, a, o; for (a = 0, o = i.length; o > a; a++) n = i[a], null != e[n] && (r = e[n], "string" === t.type(r) ? (r = t.trim(r).toLowerCase(), e[n] = !("false" === r || "disabled" === r)) : e[n] = !!r); return e }, g = function(e, t) { var i, n, r; for (n = 0, r = t.length; r > n; n++) i = t[n], null != e[i] && (e[i] = parseInt(e[i])); return e }, _ = function(e) { return e._userAgent = "UploadcareWidget/" + o + "/" + e.publicKey + " (JavaScript" + (e.integration ? "; " + e.integration : "") + ")", e }, C = function(e, t) { var i, n; for (i in t) n = t[i], null != e[i] && e[i] === n.from && (e[i] = n.to); return e }, u = function(e, t) { var i, n, r, a; for (i in t) a = t[i], r = a.min, n = a.max, null != e[i] && (e[i] = Math.min(Math.max(e[i], r), n)); return e }, v = function(e) { var i, n; return n = /^([0-9]+)([x:])([0-9]+)\s*(|upscale|minimum)$/i, i = n.exec(t.trim(e.toLowerCase())) || [], { downscale: "x" === i[2], upscale: !!i[4], notLess: "minimum" === i[4], preferedSize: i.length ? [+i[1], +i[3]] : void 0 } }, y = function(e) { var i, n, r; return i = /^([0-9]+)x([0-9]+)(?:\s+(\d{1,2}|100)%)?$/i, n = i.exec(t.trim(e.toLowerCase())) || [], n.length ? (r = n[1] * n[2], r > 5e6 ? (a.warnOnce("Shrinked size can not be larger than 5MP. " + ("You have set " + n[1] + "x" + n[2] + " (") + ("" + Math.ceil(r / 1e3 / 100) / 10 + "MP).")), !1) : { quality: n[3] ? n[3] / 100 : void 0, size: r }) : !1 }, d = function(e, t) { var i, n, r, a; return this.previewProxy ? (r = !/\?/.test(this.previewProxy), n = r || !/\=$/.test(this.previewProxy), i = !r && !/[\&\?\=]$/.test(this.previewProxy), a = encodeURIComponent(e), n && (a = "url=" + a), i && (a = "&" + a), r && (a = "?" + a), this.previewProxy + a) : e }, b = function(e) { return c(e, ["tabs", "preferredTypes"]), T(e, ["cdnBase", "socialBase", "urlBase", "scriptBase"]), f(e, ["doNotStore", "imagesOnly", "multiple", "clearable", "pathValue", "previewStep", "systemDialog", "debugUploads", "multipleMaxStrict"]), g(e, ["multipleMax", "multipleMin", "multipartMinSize", "multipartPartSize", "multipartMinLastPartSize", "multipartConcurrency", "multipartMaxAttempts", "parallelDirectUploads"]), C(e, z), u(e, p), _(e), e.crop === !1 || t.isArray(e.crop) || (/^(disabled?|false|null)$/i.test(e.crop) ? e.crop = !1 : t.isPlainObject(e.crop) ? e.crop = [e.crop] : e.crop = t.map(("" + e.crop).split(","), v)), e.imageShrink && !t.isPlainObject(e.imageShrink) && (e.imageShrink = y(e.imageShrink)), (e.crop || e.multiple) && (e.previewStep = !0), a.abilities.sendFileAPI || (e.systemDialog = !1), e.validators && (e.validators = e.validators.slice()), e.previewProxy && !e.previewUrlCallback && (e.previewUrlCallback = d), e }, i("defaults", t.extend({ allTabs: x.tabs.all }, h)), s.globals = function() {
                    var t, i, n;
                    i = {};
                    for (t in h) n = e["UPLOADCARE_" + a.upperCase(t)], void 0 !== n && (i[t] = n);
                    return i
                }, s.common = a.once(function(e, i) { var n; return i || (h = t.extend(h, s.globals())), n = b(t.extend(h, e || {})), n.publicKey || a.commonWarning("publicKey"), s.waitForSettings.fire(n), n }), s.build = function(e) { var i; return i = t.extend({}, s.common()), t.isEmptyObject(e) || (i = b(t.extend(i, e))), i }, s.waitForSettings = t.Callbacks("once memory"), s.CssCollector = function() {
                    function e() { this.urls = [], this.styles = [] }
                    return e.prototype.addUrl = function(e) { if (!/^https?:\/\//i.test(e)) throw new Error("Embedded urls should be absolute. " + e); return l.call(this.urls, e) >= 0 ? void 0 : this.urls.push(e) }, e.prototype.addStyle = function(e) { return this.styles.push(e) }, e
                }(), n.tabsCss = new s.CssCollector, h._emptyKeyText = '<div class="uploadcare--tab__content">\n<div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">Hello!</div>\n<div class="uploadcare--text">Your <a class="uploadcare--link" href="https://uploadcare.com/dashboard/">public key</a> is not set.</div>\n<div class="uploadcare--text">Add this to the &lt;head&gt; tag to start uploading files:</div>\n<div class="uploadcare--text uploadcare--text_pre">&lt;script&gt;\nUPLOADCARE_PUBLIC_KEY = \'your_public_key\';\n&lt;/script&gt;</div>\n</div>'
            })
        }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.en = {
                    uploading: "Uploading... Please wait.",
                    loadingInfo: "Loading info...",
                    errors: { "default": "Error", baddata: "Incorrect value", size: "File too big", upload: "Can’t upload", user: "Upload canceled", info: "Can’t load info", image: "Only images allowed", createGroup: "Can’t create file group", deleted: "File was deleted" },
                    draghere: "Drop a file here",
                    file: { one: "%1 file", other: "%1 files" },
                    buttons: { cancel: "Cancel", remove: "Remove", choose: { files: { one: "Choose a file", other: "Choose files" }, images: { one: "Choose an image", other: "Choose images" } } },
                    dialog: {
                        close: "Close",
                        openMenu: "Open menu",
                        done: "Done",
                        showFiles: "Show files",
                        tabs: { names: { "empty-pubkey": "Welcome", preview: "Preview", file: "Local Files", url: "Direct Link", camera: "Camera", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Google Drive", gphotos: "Google Photos", instagram: "Instagram", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "drag & drop<br>any files", nodrop: "Upload files from your&nbsp;computer", cloudsTip: "Cloud storages<br>and social networks", or: "or", button: "Choose a local file", also: "or choose from" }, url: { title: "Files from the Web", line1: "Grab any file off the web.", line2: "Just provide the link.", input: "Paste your link here...", button: "Upload" }, camera: { title: "File from web camera", capture: "Take a photo", mirror: "Mirror", startRecord: "Record a video", stopRecord: "Stop", cancelRecord: "Cancel", retry: "Request permissions again", pleaseAllow: { title: "Please allow access to your camera", text: "You have been prompted to allow camera access from this site.<br>In order to take pictures with your camera you must approve this request." }, notFound: { title: "No camera detected", text: "Looks like you have no camera connected to this device." } }, preview: { unknownName: "unknown", change: "Cancel", back: "Back", done: "Add", unknown: { title: "Uploading... Please wait for a preview.", done: "Skip preview and accept" }, regular: { title: "Add this file?", line1: "You are about to add the file above.", line2: "Please confirm." }, image: { title: "Add this image?", change: "Cancel" }, crop: { title: "Crop and add this image", done: "Done", free: "free" }, video: { title: "Add this video?", change: "Cancel" }, error: { "default": { title: "Oops!", text: "Something went wrong during the upload.", back: "Please try again" }, image: { title: "Only image files are accepted.", text: "Please try again with another file.", back: "Choose image" }, size: { title: "The file you selected exceeds the limit.", text: "Please try again with another file." }, loadImage: { title: "Error", text: "Can’t load image" } }, multiple: { title: "You’ve chosen %files%.", question: "Add %files%?", tooManyFiles: "You’ve chosen too many files. %max% is maximum.", tooFewFiles: "You’ve chosen %files%. At least %min% required.", clear: "Remove all", done: "Add", file: { preview: "Preview %file%", remove: "Remove %file%" } } } },
                        footer: { text: "powered by", link: "uploadcare" }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.en = function(e) { return 1 === e ? "one" : "other" } })
        }.call(this),
        function() {
            var e, t, i;
            i = n.utils, t = n.settings, e = n.jQuery, n.namespace("locale", function(n) {
                var r, a, o, l, s;
                return a = "en", o = { lang: a, translations: n.translations[a], pluralize: n.pluralize[a] }, s = function(t) { var i, r, a; return i = t.locale || o.lang, a = e.extend(!0, {}, n.translations[i], t.localeTranslations), r = e.isFunction(t.localePluralize) ? t.localePluralize : n.pluralize[i], { lang: i, translations: a, pluralize: r } }, r = i.once(function() { return s(t.build()) }), n.rebuild = function(e) { var i; return i = s(t.build(e)), r = function() { return i } }, l = function(e, t) {
                    var i, n, r, a;
                    for (i = e.split("."), r = 0, a = i.length; a > r; r++) {
                        if (n = i[r], null == t) return null;
                        t = t[n]
                    }
                    return t
                }, n.t = function(e, t) { var i, n, a; return i = r(), n = l(e, i.translations), null == n && i.lang !== o.lang && (i = o, n = l(e, i.translations)), null != t && (n = null != i.pluralize ? (null != (a = n[i.pluralize(t)]) ? a.replace("%1", t) : void 0) || t : ""), n || "" }
            })
        }.call(this),
        function() {
            var e, t, i;
            t = n.locale, i = n.utils, e = n.jQuery, n.namespace("templates", function(r) { return r.JST = {}, r.tpl = function(a, o) { var l; return null == o && (o = {}), l = r.JST[a], null != l ? l(e.extend({ t: t.t, utils: i, uploadcare: n }, o)) : "" } })
        }.call(this), n.templates.JST.dialog = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--dialog">\n  <div class="uploadcare--dialog__container">\n    <button type="button" title="', ("" + e.t("dialog.close")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close">\n      <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n        <use xlink:href="#uploadcare--icon-close"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--dialog__placeholder"></div>\n  </div>\n  <div class="uploadcare--powered-by uploadcare--dialog__powered-by">\n    ', ("" + e.t("dialog.footer.text")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/', ("" + e.uploadcare.version).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '/"\n       target="_blank">\n      <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n      ', ("" + e.t("dialog.footer.link")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n    </a>\n  </div>\n</div>\n"), __p.join("")
        }, n.templates.JST.dialog__panel = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--panel">\n  <div class="uploadcare--menu uploadcare--panel__menu">\n    <button type="button" title="', ("" + e.t("dialog.openMenu")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '"\n            class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle">\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu">\n        <use xlink:href="#uploadcare--icon-menu"></use>\n      </svg>\n      <svg role="presentation" width="32" height="32"\n           class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back">\n        <use xlink:href="#uploadcare--icon-back"></use>\n      </svg>\n    </button>\n    <div class="uploadcare--menu__items"></div>\n  </div>\n\n  <div class="uploadcare--panel__content">\n\n    <div class="uploadcare--footer uploadcare--panel__footer">\n      <div class="uploadcare--footer__additions uploadcare--panel__message"></div>\n\n      <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--panel__show-files">\n        ', ("" + e.t("dialog.showFiles")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), ' <div class="uploadcare--panel__file-counter"></div>\n      </button>\n\n      <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done">\n          ', ("" + e.t("dialog.done")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n      </button>\n    </div>\n\n    <div class="uploadcare--powered-by uploadcare--panel__powered-by">\n        ', ("" + e.t("dialog.footer.text")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n      <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/', ("" + e.uploadcare.version).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '/"\n         target="_blank">\n        <svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg>\n          ', ("" + e.t("dialog.footer.link")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n      </a>\n    </div>\n  </div>\n</div>\n"), __p.join("")
        }, n.templates.JST.icons = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() {
                    __p.push.apply(__p, arguments)
                };
            return __p.push('<svg width="0" height="0" style="position:absolute"><symbol viewBox="0 0 32 32" id="uploadcare--icon-back"><path d="M21.132 9.06a1.5 1.5 0 0 0-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 1 0 2.122-2.121l-6.94-6.94 7.01-7.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-box"><path d="M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 0 0-2.887.96V9.958c0-.48-.482-.959-.963-.959zm17.08 4.257a.841.841 0 0 0-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 0 1-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878zm8.66 0a2.89 2.89 0 0 1 2.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 0 1-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-camera"><path d="M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 0 1 5 22v-9a3 3 0 0 1 3-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10zm-5 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zm0-2a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-close"><path d="M10.06 7.94a1.5 1.5 0 0 0-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 0 0 2.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 0 0 2.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 0 0-2.122-2.12L16 13.878l-5.94-5.94z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-crop-free"><path d="M8 12a2.004 2.004 0 0 1-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0 1 24 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0 1 20 24h-8a2.004 2.004 0 0 1-2.01 2H8.01A2.004 2.004 0 0 1 6 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8zm2 0v8a2.004 2.004 0 0 1 2 2h8a2.004 2.004 0 0 1 2-2v-8a2.004 2.004 0 0 1-2-2h-8a2.004 2.004 0 0 1-2 2zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-dropbox"><path d="M9.5 5L16 9.141l-6.5 4.141L3 9.141 9.5 5zm13 0L29 9.141l-6.5 4.141L16 9.141 22.5 5zM3 17.423l6.5-4.141 6.5 4.141-6.5 4.141L3 17.423zm19.5-4.141l6.5 4.141-6.5 4.141-6.5-4.141 6.5-4.141zm-13 9.662l6.5-4.14 6.5 4.14-6.5 4.141-6.5-4.14z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-empty-pubkey"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-error"><path d="M18.122 23.93V21a.583.583 0 0 0-.179-.434.585.585 0 0 0-.423-.175h-2.616a.585.585 0 0 0-.424.175.583.583 0 0 0-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 0 0 .423-.175.583.583 0 0 0 .18-.434zm-.037-6.326l.339-9.05a.404.404 0 0 0-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 0 0 .198-.304z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-evernote"><path d="M7.998 8.648h2.245a.233.233 0 0 0 .232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 0 0-.026.014l-4.359 4.34a.05.05 0 0 0-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 0 1-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616zm-3.3 8.792a4.75 4.75 0 0 0-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-facebook"><path fill-rule="evenodd" d="M24.897 6H7.103C6.494 6 6 6.494 6 7.103v17.794C6 25.506 6.494 26 7.103 26h9.587v-7.734h-2.604v-3.028h2.604V13.01c0-2.582 1.579-3.99 3.882-3.99.777-.001 1.552.038 2.325.118v2.7H21.31c-1.255 0-1.5.593-1.5 1.469v1.927h3l-.39 3.028h-2.627V26h5.104c.609 0 1.103-.494 1.103-1.103V7.103C26 6.494 25.506 6 24.897 6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-file"><path d="M19 6l5 5h-4c-.556 0-1-.448-1-1V6zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 0 1 8 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-flickr"><path d="M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 0 1 0 8zm10.001 0a4 4 0 1 1-.002-8 4 4 0 0 1 .002 8z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gdrive"><path d="M19.461 6l7.109 12h-7.004L12.539 6h6.922zm-9.27 19l3.467-6H27l-3.466 6H10.192zM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gphotos"><path d="M21.845 21.452l-2.562-4.03h6.69l-4.128 4.03zm-5.758-3.986L14.533 16.1l1.38-1.566 1.555 1.366-1.38 1.566zm-1.5 8.512l-4.037-4.121 4.036-2.559v6.68zm-8.56-11.4l4.128-4.03 2.562 4.03h-6.69zm11.387-8.555l4.036 4.12-4.036 2.559v-6.68zM28.479 15.9h-5.01v-5.757l-6.866-6.912c-.397-.4-.713-.267-.713.29v5.013h-5.735l-6.924 6.854c-.4.396-.267.712.29.712h5.01v5.757l6.866 6.912c.397.4.713.267.713-.29v-5.012h5.735l6.924-6.855c.4-.396.267-.712-.29-.712z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-huddle"><path d="M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-instagram"><path d="M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 0 1 1.949 1.27 5.392 5.392 0 0 1 1.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.949 5.391 5.391 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.949-1.27 5.391 5.391 0 0 1-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 0 1 1.268-1.949 5.392 5.392 0 0 1 1.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 0 0-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064zm0 3.37a5.649 5.649 0 1 1 0 11.297 5.649 5.649 0 0 1 0-11.298zm0 9.315a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334zm7.192-9.539a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-menu"><path d="M7.5 10a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17zm0 7a1.5 1.5 0 0 1 0-3h17a1.5 1.5 0 0 1 0 3h-17z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-more"><path d="M21 16a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-remove"><path d="M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0 1 10.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002zM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0 1 19 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0 1 23 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 0 1 9 7h4z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-skydrive"><path d="M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 0 0-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 0 0 2.568 1.317h1.513a4.49 4.49 0 0 1-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 0 0-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-uploadcare"><path fill="#ffd800" d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 1 0 0-2.592 1.296 1.296 0 0 0 0 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-url"><path d="M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5zm6.076 6.327a.992.992 0 1 0-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 0 0-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 1 0 1.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 0 0 .464-4.7l1.125-1.125zm-4.252 3.841a.982.982 0 0 0 .701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 1 0-1.404-1.404l-.801.802a1.752 1.752 0 0 1-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 0 1 1.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 0 0 .7 1.693z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-vk"><path d="M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 0 0-.25.007l-.163.038-.062.032-.05.039a.56.56 0 0 0-.137.134.882.882 0 0 0-.125.223 21.072 21.072 0 0 1-1.337 2.875 27.31 27.31 0 0 1-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 0 1-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 0 1-.213-.05.843.843 0 0 1-.281-.314 1.425 1.425 0 0 1-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 0 0-.131-.409.684.684 0 0 0-.256-.307 1.426 1.426 0 0 0-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 0 0-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 0 1-.169.6 2.55 2.55 0 0 1-.15.281.217.217 0 0 1-.062.064.918.918 0 0 1-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 0 1-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 0 1-.7-1.328l-.2-.37a32.156 32.156 0 0 1-.512-1.042 20.306 20.306 0 0 1-.575-1.323.84.84 0 0 0-.3-.408l-.062-.039a.85.85 0 0 0-.2-.108 1.304 1.304 0 0 0-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 0 0-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 0 0 1.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 0 0 .094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 0 1 .08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 0 1 .482-.562.806.806 0 0 1 .1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 0 0-.088-.338 1.694 1.694 0 0 0-.082-.16z"/></symbol></svg>\n'),
                __p.join("")
        }, n.templates.JST.progress__text = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--progress__text-container">\n  <div class="uploadcare--progress__text"></div>\n</div>\n'), __p.join("")
        }, n.templates.JST.styles = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('.uploadcare--jcrop-handle{box-sizing:border-box;padding:12.5px;width:45px;height:45px;background:transparent;z-index:2147483621}@media (min-width:760px){.uploadcare--jcrop-handle{height:35px;width:35px;padding:10px}}.uploadcare--jcrop-handle:before{content:"";display:block;width:20px;height:20px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);border-radius:50%}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{margin-top:-22.5px;margin-left:-22.5px;top:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-top:-22.5px;margin-right:-22.5px;top:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{margin-bottom:-22.5px;margin-right:-22.5px;bottom:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-right:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-handle.ord-sw{margin-bottom:-22.5px;margin-left:-22.5px;bottom:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-left:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-hline{width:100%;height:1px!important;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{width:1px!important;height:100%;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.uploadcare--jcrop-holder img{max-width:none;max-height:none}.uploadcare--text{margin:0 0 10px;padding:0;font-size:17.5px;line-height:25px}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{box-sizing:border-box;overflow-x:auto;padding:20px;max-width:100%;background:#e3e1e1;font-family:monospace;white-space:pre;text-align:left}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{all:initial;color:inherit;fill:currentColor;margin:0;padding:0;max-width:100%;width:32px;height:32px;cursor:inherit}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{cursor:pointer;color:#157cfc;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{all:initial;-ms-flex-negative:0;flex-shrink:0;display:inline-block;overflow:hidden;box-sizing:border-box;margin:0;padding:10px;width:auto;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;background:transparent;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s}.uploadcare--button svg{pointer-events:none}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{padding:10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--button_icon{padding:14px;min-width:0;width:60px;height:60px}.uploadcare--button_muted{border-color:transparent!important;color:#a4a2a1;border-radius:0}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{padding:10px 25px;font-size:20px;line-height:30px}.uploadcare--button_size_small{padding:5px 10px;min-width:80px;font-size:15px;line-height:20px}.uploadcare--input{-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-negative:0;flex-shrink:0;display:block;box-sizing:border-box;margin:5px 0 15px;padding:10px 15px;width:100%;font-size:17.5px;line-height:25px;background:#fff;color:#353535;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input::-webkit-input-placeholder{color:#a4a2a1}.uploadcare--input:-ms-input-placeholder,.uploadcare--input::-ms-input-placeholder{color:#a4a2a1}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:7.5px 0;font-size:12.5px;line-height:15px;color:#fff;text-align:center}.uploadcare--powered-by__link{color:inherit!important;text-decoration:none!important}.uploadcare--powered-by__link,.uploadcare--powered-by__logo{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.uploadcare--powered-by__logo{width:20px;height:15px;vertical-align:text-bottom}.uploadcare--progress__canvas{width:100%;height:100%}.uploadcare--progress__text{display:table-cell;vertical-align:middle;text-align:center;font-size:60%;line-height:1}.uploadcare--progress__text-container{width:100%;height:100%;display:table;white-space:normal}.uploadcare--progress_type_canvas{padding:2px;width:32px;height:32px;color:#ffd800;border-color:#e3e1e1}.uploadcare--progressbar{overflow:hidden;width:100%;height:100%;background:#e3e1e1;border-radius:6px}.uploadcare--progressbar__value{width:0;height:100%;background:#ffd800}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;width:100%;width:100vw;max-width:100%;height:100%;overflow:hidden}@media (min-width:760px){.uploadcare--menu{width:60px}}@media (max-width:759px){.uploadcare--menu{height:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);margin-left:0}}.uploadcare--menu__item{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100vw;height:60px;overflow:hidden;cursor:default;background:#e3e1e1;color:#666;transition:background .3s,color .3s}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{outline:none;box-shadow:inset 0 0 0 2px rgba(21,124,252,.5)}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}.uploadcare--menu__item:after{content:attr(title);-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;height:30px;font-size:17px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{overflow:hidden;max-width:170px;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-right:100vw;overflow-y:auto;overflow-x:hidden;background:#e3e1e1}.uploadcare--menu__toggle{width:60px;height:60px;transition:none}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}}@media (max-width:759px){.uploadcare--menu_opened{position:relative;z-index:1000;height:100%}.uploadcare--menu_opened .uploadcare--menu__toggle{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;width:100%;text-align:left;background:#e3e1e1}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;margin-top:10px;padding:5px 20px 15px}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{visibility:hidden;padding:0}.uploadcare--footer__button{margin-top:5px;margin-bottom:5px}.uploadcare--footer__button:first-of-type{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{margin:20px;background:#e3e1e1;color:#a4a2a1;border:2px dashed;border-radius:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;padding:5px 0 5px 20px;color:#353535;cursor:default}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-width:100%;max-height:100%}.uploadcare--file__name{overflow:hidden;margin:0;max-width:calc(100vw - 200px);line-height:25px;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;float:left;box-sizing:border-box;margin-right:10px;padding:2px;width:60px;height:60px;overflow:hidden;border:1px solid;border-radius:6px;background:transparent;color:#e3e1e1;transition:border .3s}.uploadcare--file__progressbar{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;margin:0 10px;width:60px;height:10px}.uploadcare--file__size{font-size:12.5px;color:#a4a2a1}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:hsla(0,71%,66%,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;width:100%;height:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.uploadcare--crop-sizes__item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;height:65px;background:transparent;border-color:transparent;color:#353535}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{content:"";display:block;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{box-sizing:border-box;width:30px;height:30px;border:2px solid;border-radius:2px;color:inherit;-webkit-transform:scale(.666);transform:scale(.666)}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;-webkit-transform:none;transform:none}.uploadcare--file-source{margin:10px;border-color:#e3e1e1;background:#e3e1e1;color:#353535}.uploadcare--file-source_all{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;border-color:currentColor;background:transparent;color:#157cfc}.uploadcare--file-sources{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.uploadcare--media__image{position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;width:auto;max-width:100%;height:auto;min-height:100px;max-height:100%}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{position:absolute;top:15px;left:50%;margin:0;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.uploadcare--camera__video{transition:-webkit-transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1);transition:transform .8s cubic-bezier(.23,1,.32,1),-webkit-transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.uploadcare--camera__video-container{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;position:relative;margin-bottom:10px}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--crop-widget>.uploadcare--preview__image{-webkit-filter:brightness(60%);filter:brightness(60%);-webkit-transform:none;transform:none}.uploadcare--tab{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;flex-shrink:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;padding:0 20px;overflow:hidden}@media (min-width:760px){.uploadcare--tab__header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:60px;height:60px}}.uploadcare--tab__iframe{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;height:100%;border:0;opacity:0}.uploadcare--tab__title{margin-top:10px;margin-bottom:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;overflow:hidden;width:100%;height:500px;border:1px solid #a4a2a1;border-radius:6px;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px}@media (min-width:760px){.uploadcare--panel{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel__content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{padding-top:15px;background:#fff9d8}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{padding:6px 60px 0;min-height:60px}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--tab_name_preview{height:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{position:relative;margin-top:0;padding-top:15px}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{content:"";position:absolute;top:0;left:20px;width:calc(100% - 40px);height:1px;background:#e3e1e1}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;left:0;z-index:2147483647;box-sizing:border-box;overflow:hidden;width:100%;height:100%;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px;opacity:0;transition:opacity .33s cubic-bezier(.05,.7,.25,1)}@media (min-width:760px){.uploadcare--dialog{-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:auto;background:rgba(0,0,0,.5)}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;top:0;right:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;overflow:hidden}@media (max-width:759px){.uploadcare--dialog__container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{width:calc(100% - 60px);max-width:900px;height:calc(100% - 60px);min-height:500px;max-height:660px;border-radius:6px}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{height:100%;border:none;border-radius:0}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;display:inline-block;box-sizing:border-box;margin:0;padding:.4em 1em;width:auto;min-width:0;height:auto;min-height:0;border-radius:6px;border:none;background:#c3c3c3;color:#fff;cursor:default;text-align:center;white-space:nowrap;font:inherit;line-height:inherit;box-shadow:none;text-shadow:inherit;transition:background .3s}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;color:#fff;font:inherit;box-shadow:none;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{position:absolute;top:0;left:0;box-sizing:border-box;min-width:100%;min-height:100%;margin:0;padding:calc(.4em - 1.5px) 1em;font:inherit;line-height:inherit;text-align:center;white-space:nowrap;border:1.5px dashed;border-radius:6px;background:#e3e1e1;color:#a4a2a1;transition:color .3s;display:none}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;width:1.8em;height:1.8em;margin:0 .2em 0 0;padding:0;line-height:0;vertical-align:middle}.uploadcare--widget__text{display:inline-block;box-sizing:border-box;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{width:auto;min-width:0;max-width:100%;height:auto;min-height:0;max-height:100%;overflow:hidden}.uploadcare--mouse-focused:focus{outline:none}\n\n'),
                __p.join("")
        }, n.templates.JST["tab-camera-capture"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">\n    ', ("" + e.t("dialog.tabs.camera.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_photo">\n      ', ("" + e.t("dialog.tabs.camera.capture")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </button>\n    <button type="button"\n            class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_video">\n      ', ("" + e.t("dialog.tabs.camera.startRecord")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n    </button>\n  </div>\n</div>\n"), __p.join("")
        }, n.templates.JST["tab-camera"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ("" + e.t("dialog.tabs.camera.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n\n  <div class="uploadcare--media uploadcare--camera__video-container">\n    <video muted class="uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored"></video>\n\n    <button type="button" class="uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror">\n      ', ("" + e.t("dialog.tabs.camera.mirror")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__controls">\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record">\n      ', ("" + e.t("dialog.tabs.camera.startRecord")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture">\n      ', ("" + e.t("dialog.tabs.camera.capture")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record">\n      ', ("" + e.t("dialog.tabs.camera.cancelRecord")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </button>\n    <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record">\n      ', ("" + e.t("dialog.tabs.camera.stopRecord")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </button>\n  </div>\n\n  <div class="uploadcare--camera__please-allow">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ', ("" + e.t("dialog.tabs.camera.pleaseAllow.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </div>\n    <div class="uploadcare--text">\n        ', e.t("dialog.tabs.camera.pleaseAllow.text"), '\n    </div>\n  </div>\n\n  <div class="uploadcare--camera__not-found">\n    <div class="uploadcare--text uploadcare--text_size_medium">\n        ', ("" + e.t("dialog.tabs.camera.notFound.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </div>\n    <div class="uploadcare--text">\n        ', ("" + e.t("dialog.tabs.camera.notFound.text")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry">\n    ', ("" + e.t("dialog.tabs.camera.retry")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </button>\n</div>\n"), __p.join("")
        }, n.templates.JST["tab-file"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__content uploadcare--draganddrop">\n  <div class="uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show">\n    ', e.t("draghere"), '\n  </div>\n\n  <div class="uploadcare--draganddrop__title uploadcare--dragging__hide">\n    <div class="uploadcare--draganddrop__supported">\n      <div class="uploadcare--text uploadcare--text_size_extra-large">\n        ', e.t("dialog.tabs.file.drag"), '\n      </div>\n      <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted">\n        ', ("" + e.t("dialog.tabs.file.or")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n      </div>\n    </div>\n\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported">\n      ', e.t("dialog.tabs.file.nodrop"), '\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick  uploadcare--dragging__hide">\n    ', ("" + e.t("dialog.tabs.file.button")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </button>\n\n  <div class="uploadcare--file-sources uploadcare--dragging__hide">\n    <div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption">\n      ', ("" + e.t("dialog.tabs.file.also")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </div>\n    <div class="uploadcare--file-sources__items">\n      <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources_item">\n          <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n              <use xlink:href="#uploadcare--icon-more"></use>\n          </svg>\n      </button>\n    </div>\n  </div>\n</div>\n'), __p.join("")
        }, n.templates.JST["tab-preview-error"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__content uploadcare--preview__content uploadcare--error">\n    <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n      ', ("" + e.t("dialog.tabs.preview.error." + e.error + ".title") || e.t("dialog.tabs.preview.error.default.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </div>\n\n    <div class="uploadcare--text">', ("" + e.t("dialog.tabs.preview.error." + e.error + ".text") || e.t("dialog.tabs.preview.error.default.text")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n\n    <button type="button" class="uploadcare--button uploadcare--preview__back">\n        ', ("" + e.t("dialog.tabs.preview.error." + e.error + ".back") || e.t("dialog.tabs.preview.error.default.back")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n    </button>\n</div>\n"),
                __p.join("")
        }, n.templates.JST["tab-preview-image"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ("" + e.t("dialog.tabs.preview.image.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media"><!--\n      1162x684 is 1.5 size of conteiner\n      TODO Use picture and srcset for create responsive image\n    --><img\n        src="', ("" + e.src).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '"\n        title="', ("" + (e.name || "")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '"\n        alt="', ("" + (e.name || "")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '"\n      class="uploadcare--media__image uploadcare--preview__image"\n    />\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions">\n    '), e.crop && __p.push('\n    <div class="uploadcare--crop-sizes">\n      <div role="button" tabindex="0"\n           class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free">\n        <div class="uploadcare--crop-sizes__icon"></div>\n      </div>\n    </div>\n    '), __p.push('\n  </div>\n\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ("" + e.t("dialog.tabs.preview.image.change")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ("" + e.t("dialog.tabs.preview.done")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </button>\n</div>\n"), __p.join("")
        }, n.templates.JST["tab-preview-multiple-file"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--file uploadcare--files__item uploadcare--file_status_uploading">\n  <div class="uploadcare--file__description" tabindex="0">\n    <div class="uploadcare--file__preview"></div>\n    <div class="uploadcare--file__name">\n        ', ("" + e.t("dialog.tabs.preview.unknownName")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n    </div>\n    <div class="uploadcare--file__size"></div>\n    <div class="uploadcare--file__error"></div>\n  </div>\n\n  <div class="uploadcare--file__progressbar">\n    <div class="uploadcare--progressbar">\n      <div class="uploadcare--progressbar__value"></div>\n    </div>\n  </div>\n\n  <button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove">\n    <svg role="presentation" width="32" height="32" class="uploadcare--icon">\n      <use xlink:href="#uploadcare--icon-remove"></use>\n    </svg>\n  </button>\n</div>\n'), __p.join("")
        }, n.templates.JST["tab-preview-multiple"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title"></div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--files"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <div class="uploadcare--footer__additions uploadcare--preview__message"></div>\n\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ("" + e.t("dialog.tabs.preview.multiple.clear")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ("" + e.t("dialog.tabs.preview.multiple.done")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </button>\n</div>\n"), __p.join("")
        }, n.templates.JST["tab-preview-regular"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ("" + e.t("dialog.tabs.preview.regular.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name">\n    ', ("" + (e.file.name || e.t("dialog.tabs.preview.unknownName"))).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "", ("" + e.utils.readableFileSize(e.file.size, "", ", ")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ("" + e.t("dialog.tabs.preview.change")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ("" + e.t("dialog.tabs.preview.done")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </button>\n</div>\n\n"), __p.join("")
        }, n.templates.JST["tab-preview-unknown"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ("" + e.t("dialog.tabs.preview.unknown.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--text uploadcare--preview__file-name"></div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <!-- TODO Change Cancel to Remove -->\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ("" + e.t("dialog.tabs.preview.change")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </button>\n\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ("" + e.t("dialog.tabs.preview.unknown.done")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </button>\n</div>\n"), __p.join("")
        }, n.templates.JST["tab-preview-video"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() {
                    __p.push.apply(__p, arguments)
                };
            return __p.push('<div class="uploadcare--tab__header">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">\n    ', ("" + e.t("dialog.tabs.preview.video.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </div>\n</div>\n\n<div class="uploadcare--tab__content uploadcare--preview__content">\n  <div class="uploadcare--media">\n    <video controls class="uploadcare--media__video uploadcare--preview__video"></video>\n  </div>\n</div>\n\n<div class="uploadcare--footer uploadcare--tab__footer">\n  <button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">\n      ', ("" + e.t("dialog.tabs.preview.video.change")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '\n  </button>\n  <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">\n      ', ("" + e.t("dialog.tabs.preview.done")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n  </button>\n</div>\n"), __p.join("")
        }, n.templates.JST["tab-url"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--tab__content">\n  <div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">', ("" + e.t("dialog.tabs.url.title")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n\n  <div class="uploadcare--text">', ("" + e.t("dialog.tabs.url.line1")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n  <div class="uploadcare--text">', ("" + e.t("dialog.tabs.url.line2")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n\n  <form class="uploadcare--form">\n    <input type="text" class="uploadcare--input" placeholder="', ("" + e.t("dialog.tabs.url.input")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '">\n    <button type="submit" class="uploadcare--button uploadcare--button_primary uploadcare--tab__action-button" type="submit">', ("" + e.t("dialog.tabs.url.button")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "</button>\n  </form>\n</div>\n"), __p.join("")
        }, n.templates.JST["widget-button"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<button type="button" class="uploadcare--widget__button uploadcare--widget__button_type_', e.name, '">\n    ', ("" + e.caption).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n</button>\n"), __p.join("")
        }, n.templates.JST["widget-file-name"] = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--link uploadcare--widget__file-name"\n     tabindex="0" role="link">', ("" + e.utils.fitText(e.name, 20)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div><!--\n--><div class="uploadcare--widget__file-size">,\n    ', ("" + e.utils.readableFileSize(e.size)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), "\n</div>\n"), __p.join("")
        }, n.templates.JST.widget = function(e) {
            e.__scope || (e.__scope = {});
            var __p = [],
                t = function() { __p.push.apply(__p, arguments) };
            return __p.push('<div class="uploadcare--widget">\n  <div class="uploadcare--widget__dragndrop-area">', ("" + e.t("draghere")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;"), '</div>\n  <div class="uploadcare--widget__progress"></div>\n  <div class="uploadcare--widget__text"></div>\n</div>\n'), __p.join("")
        },
        function() {
            var e, t;
            e = n.jQuery, t = n.templates.tpl, n.settings.waitForSettings.add(function(i) { var n, a; return n = t("styles", { settings: i }), a = r.createElement("style"), a.setAttribute("type", "text/css"), null != a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(r.createTextNode(n)), e("head").prepend(a) })
        }.call(this),
        function(t) {
            t.Jcrop = function(e, i) {
                var n = t.extend({}, t.Jcrop.defaults),
                    a, o;

                function l(e) { return Math.round(e) + "px" }

                function s(e) { return n.baseClass + "-" + e }

                function c() { return t.fx.step.hasOwnProperty("backgroundColor") }

                function u(e) { var i = t(e).offset(); return [i.left, i.top] }

                function p(e) { return [e.pageX - a[0], e.pageY - a[1]] }

                function d(e) { "object" != typeof e && (e = {}), n = t.extend(n, e), t.each(["onChange", "onSelect", "onRelease", "onDblClick"], function(e, t) { "function" != typeof n[t] && (n[t] = function() {}) }) }

                function h(e, t) {
                    if (a = u(S), "move" === e) return $.activateHandlers(g(t), y);
                    var i = X.getFixed(),
                        n = m(e),
                        r = X.getCorner(m(n));
                    X.setPressed(X.getCorner(n)), X.setCurrent(r), $.activateHandlers(f(e, i), y)
                }

                function f(e, t) {
                    return function(i) {
                        if (n.aspectRatio) switch (e) {
                            case "e":
                                i[1] = t.y + 1;
                                break;
                            case "w":
                                i[1] = t.y + 1;
                                break;
                            case "n":
                                i[0] = t.x + 1;
                                break;
                            case "s":
                                i[0] = t.x + 1
                        } else switch (e) {
                            case "e":
                                i[1] = t.y2;
                                break;
                            case "w":
                                i[1] = t.y2;
                                break;
                            case "n":
                                i[0] = t.x2;
                                break;
                            case "s":
                                i[0] = t.x2
                        }
                        X.setCurrent(i), Y.update()
                    }
                }

                function g(e) {
                    var t = e;
                    return Z.watchKeys(),
                        function(e) { X.moveOffset([e[0] - t[0], e[1] - t[1]]), t = e, Y.update() }
                }

                function m(e) {
                    switch (e) {
                        case "n":
                            return "sw";
                        case "s":
                            return "nw";
                        case "e":
                            return "nw";
                        case "w":
                            return "ne";
                        case "ne":
                            return "sw";
                        case "nw":
                            return "se";
                        case "se":
                            return "nw";
                        case "sw":
                            return "ne"
                    }
                }

                function _(e) { return function(t) { return n.disabled ? !1 : "move" !== e || n.allowMove ? (a = u(S), H = !0, h(e, p(t)), t.stopPropagation(), t.preventDefault(), !1) : !1 } }

                function b(e, t, i) {
                    var n = e.width(),
                        r = e.height();
                    n > t && t > 0 && (n = t, r = t / e.width() * e.height()), r > i && i > 0 && (r = i, n = i / e.height() * e.width()), N = e.width() / n, V = e.height() / r, e.width(n).height(r)
                }

                function v(e) { return { x: e.x * N, y: e.y * V, x2: e.x2 * N, y2: e.y2 * V, w: e.w * N, h: e.h * V } }

                function y(e) {
                    var t = X.getFixed();
                    Y.enableHandles(), Y.done()
                }

                function x(e) { X.setCurrent(e), Y.update() }

                function w() { var e = t("<div></div>").addClass(s("tracker")); return e.css({ opacity: 0, backgroundColor: "white" }), e }
                "object" != typeof e && (e = t(e)[0]), "object" != typeof i && (i = {}), d(i);
                var k = { border: "none", visibility: "visible", margin: 0, padding: 0, position: "absolute", top: 0, left: 0 },
                    C = t(e),
                    z = !0;
                if ("IMG" == e.tagName) {
                    if (0 != C[0].width && 0 != C[0].height) C.width(C[0].width), C.height(C[0].height);
                    else {
                        var T = new Image;
                        T.src = C[0].src, C.width(T.width), C.height(T.height)
                    }
                    var S = C.clone().removeAttr("id").css(k).show();
                    S.width(C.width()), S.height(C.height()), C.after(S).hide()
                } else S = C.css(k).show(), z = !1, null === n.shade && (n.shade = !0);
                b(S, n.boxWidth, n.boxHeight);
                var F = S.width(),
                    A = S.height(),
                    j = t("<div />").width(F).height(A).addClass(s("holder")).css({ position: "relative", backgroundColor: n.bgColor }).insertAfter(C).append(S);
                n.addClass && j.addClass(n.addClass);
                var D = t("<div />"),
                    P = t("<div />").width("100%").height("100%").css({ zIndex: 310, position: "absolute", overflow: "hidden" }),
                    I = t("<div />").css({ position: "absolute", zIndex: 600 }).dblclick(function() {
                        var e = X.getFixed();
                        n.onDblClick.call(de, e)
                    }).insertBefore(S).append(P);
                z && (D = t("<img />").attr("src", S.attr("src")).css(k).width(F).height(A), P.append(D));
                var E = n.boundary,
                    O = w().width(F + 2 * E).height(A + 2 * E).css({ position: "absolute", top: l(-E), left: l(-E), zIndex: 290 }),
                    U = n.bgColor,
                    M = n.bgOpacity,
                    R, L, B, q, N, V, W = !0,
                    H, G, K;
                a = u(S);
                var J = function() {
                        function e() {
                            var e = {},
                                t = ["touchstart", "touchmove", "touchend"],
                                i = r.createElement("div"),
                                n;
                            try {
                                for (n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a = "on" + a;
                                    var o = a in i;
                                    o || (i.setAttribute(a, "return;"), o = "function" == typeof i[a]), e[t[n]] = o
                                }
                                return e.touchstart && e.touchend && e.touchmove
                            } catch (l) { return !1 }
                        }

                        function t() {
                            return n.touchSupport === !0 || n.touchSupport === !1 ? n.touchSupport : e();
                        }
                        return { createDragger: function(e) { return function(t) { return t.pageX = t.originalEvent.changedTouches[0].pageX, t.pageY = t.originalEvent.changedTouches[0].pageY, n.disabled ? !1 : "move" !== e || n.allowMove ? (H = !0, h(e, p(t)), t.stopPropagation(), t.preventDefault(), !1) : !1 } }, isSupported: e, support: t() }
                    }(),
                    X = function() {
                        var e = 0,
                            t = 0,
                            i = 0,
                            r = 0,
                            a, o;

                        function l(n) { n = h(n), i = e = n[0], r = t = n[1] }

                        function s(e) { e = h(e), a = e[0] - i, o = e[1] - r, i = e[0], r = e[1] }

                        function c() { return [a, o] }

                        function u(n) {
                            var a = n[0],
                                o = n[1];
                            0 > e + a && (a -= a + e), 0 > t + o && (o -= o + t), r + o > A && (o += A - (r + o)), i + a > F && (a += F - (i + a)), e += a, i += a, t += o, r += o
                        }

                        function p(e) {
                            var t = d();
                            switch (e) {
                                case "ne":
                                    return [t.x2, t.y];
                                case "nw":
                                    return [t.x, t.y];
                                case "se":
                                    return [t.x2, t.y2];
                                case "sw":
                                    return [t.x, t.y2]
                            }
                        }

                        function d() {
                            if (!n.aspectRatio) return g();
                            var a = n.aspectRatio,
                                o = n.minSize[0] / N,
                                l = n.maxSize[0] / N,
                                s = n.maxSize[1] / V,
                                c = i - e,
                                u = r - t,
                                p = Math.abs(c),
                                d = Math.abs(u),
                                h = p / d,
                                _, b, v, y;
                            return 0 === l && (l = 10 * F), 0 === s && (s = 10 * A), a > h ? (b = r, v = d * a, _ = 0 > c ? e - v : v + e, 0 > _ ? (_ = 0, y = Math.abs((_ - e) / a), b = 0 > u ? t - y : y + t) : _ > F && (_ = F, y = Math.abs((_ - e) / a), b = 0 > u ? t - y : y + t)) : (_ = i, y = p / a, b = 0 > u ? t - y : t + y, 0 > b ? (b = 0, v = Math.abs((b - t) * a), _ = 0 > c ? e - v : v + e) : b > A && (b = A, v = Math.abs(b - t) * a, _ = 0 > c ? e - v : v + e)), _ > e ? (o > _ - e ? _ = e + o : _ - e > l && (_ = e + l), b = b > t ? t + (_ - e) / a : t - (_ - e) / a) : e > _ && (o > e - _ ? _ = e - o : e - _ > l && (_ = e - l), b = b > t ? t + (e - _) / a : t - (e - _) / a), 0 > _ ? (e -= _, _ = 0) : _ > F && (e -= _ - F, _ = F), 0 > b ? (t -= b, b = 0) : b > A && (t -= b - A, b = A), m(f(e, t, _, b))
                        }

                        function h(e) { return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > F && (e[0] = F), e[1] > A && (e[1] = A), [e[0], e[1]] }

                        function f(e, t, i, n) {
                            var r = e,
                                a = i,
                                o = t,
                                l = n;
                            return e > i && (r = i, a = e), t > n && (o = n, l = t), [r, o, a, l]
                        }

                        function g() {
                            var n = i - e,
                                a = r - t,
                                o;
                            return R && Math.abs(n) > R && (i = n > 0 ? e + R : e - R), L && Math.abs(a) > L && (r = a > 0 ? t + L : t - L), q / V && Math.abs(a) < q / V && (r = a > 0 ? t + q / V : t - q / V), B / N && Math.abs(n) < B / N && (i = n > 0 ? e + B / N : e - B / N), 0 > e && (i -= e, e -= e), 0 > t && (r -= t, t -= t), 0 > i && (e -= i, i -= i), 0 > r && (t -= r, r -= r), i > F && (o = i - F, e -= o, i -= o), r > A && (o = r - A, t -= o, r -= o), e > F && (o = e - A, r -= o, t -= o), t > A && (o = t - A, r -= o, t -= o), m(f(e, t, i, r))
                        }

                        function m(e) { return { x: e[0], y: e[1], x2: e[2], y2: e[3], w: e[2] - e[0], h: e[3] - e[1] } }
                        return { flipCoords: f, setPressed: l, setCurrent: s, getOffset: c, moveOffset: u, getCorner: p, getFixed: d }
                    }(),
                    Q = function() {
                        var e = !1,
                            i = t("<div />").css({ position: "absolute", zIndex: 240, opacity: 0 }),
                            r = { top: c(), left: c().height(A), right: c().height(A), bottom: c() };

                        function a(e, t) { r.left.css({ height: l(t) }), r.right.css({ height: l(t) }) }

                        function o() { return s(X.getFixed()) }

                        function s(e) { r.top.css({ left: l(e.x), width: l(e.w), height: l(e.y) }), r.bottom.css({ top: l(e.y2), left: l(e.x), width: l(e.w), height: l(A - e.y2) }), r.right.css({ left: l(e.x2), width: l(F - e.x2) }), r.left.css({ width: l(e.x) }) }

                        function c() { return t("<div />").css({ position: "absolute", backgroundColor: n.shadeColor || n.bgColor }).appendTo(i) }

                        function u() { e || (e = !0, i.insertBefore(S), o(), Y.setBgOpacity(1, 0, 1), D.hide(), p(n.shadeColor || n.bgColor, 1), Y.isAwake() ? h(n.bgOpacity, 1) : h(1, 1)) }

                        function p(e, t) { ue(g(), e, t) }

                        function d() { e && (i.remove(), D.show(), e = !1, Y.isAwake() ? Y.setBgOpacity(n.bgOpacity, 1, 1) : (Y.setBgOpacity(1, 1, 1), Y.disableHandles()), ue(j, 0, 1)) }

                        function h(t, r) { e && (n.bgFade && !r ? i.animate({ opacity: 1 - t }, { queue: !1, duration: n.fadeTime }) : i.css({ opacity: 1 - t })) }

                        function f() { n.shade ? u() : d(), Y.isAwake() && h(n.bgOpacity) }

                        function g() { return i.children() }
                        return { update: o, updateRaw: s, getShades: g, setBgColor: p, enable: u, disable: d, resize: a, refresh: f, opacity: h }
                    }(),
                    Y = function() {
                        var e, i = {},
                            a = {},
                            o = {},
                            c = !1;

                        function u(e) { var i = t("<div />").css({ position: "absolute" }).addClass(s(e)); return I.append(i), i }

                        function p(e) { var i = t("<div />").mousedown(_(e)).css({ cursor: e + "-resize", position: "absolute" }).append("<div/>").addClass("ord-" + e); return J.support && i.on("touchstart.jcrop", J.createDragger(e)), I.append(i), i }

                        function d(e) { return p(e).addClass(s("handle")) }

                        function h(e) {
                            var t, n;
                            for (n = 0; n < e.length; n++) {
                                switch (e[n]) {
                                    case "n":
                                        t = "hline";
                                        break;
                                    case "s":
                                        t = "hline bottom";
                                        break;
                                    case "e":
                                        t = "vline right";
                                        break;
                                    case "w":
                                        t = "vline"
                                }
                                i[e[n]] = u(t)
                            }
                        }

                        function f(e) { var t; for (t = 0; t < e.length; t++) a[e[t]] = d(e[t]) }

                        function g(e, t) { n.shade || D.css({ top: l(-t), left: l(-e) }), I.css({ top: l(t), left: l(e) }) }

                        function m(e, t) { I.width(Math.round(e)).height(Math.round(t)) }

                        function b() {
                            var e = X.getFixed();
                            X.setPressed([e.x, e.y]), X.setCurrent([e.x2, e.y2]), y()
                        }

                        function y(t) { return e ? x(t) : void 0 }

                        function x(t) {
                            var i = X.getFixed();
                            m(i.w, i.h), g(i.x, i.y), n.shade && Q.updateRaw(i), e || C(), t ? n.onSelect.call(de, v(i)) : n.onChange.call(de, v(i))
                        }

                        function k(t, i, r) {
                            (e || i) && (n.bgFade && !r ? S.animate({ opacity: t }, { queue: !1, duration: n.fadeTime }) : S.css("opacity", t))
                        }

                        function C() { I.show(), n.shade ? Q.opacity(M) : k(M, !0), e = !0 }

                        function z() { F(), I.hide(), n.shade ? Q.opacity(1) : k(1), e = !1, n.onRelease.call(de) }

                        function T() { return c = !0, n.allowResize ? !0 : void 0 }

                        function F() { c = !1 }

                        function A(e) { e ? (G = !0, F()) : (G = !1, T()) }

                        function j() { A(!1), b() }
                        t.isArray(n.createHandles) && f(n.createHandles), n.drawBorders && t.isArray(n.createBorders) && h(n.createBorders), t(r).on("touchstart.jcrop-ios", function(e) { t(e.currentTarget).hasClass("jcrop-tracker") && e.stopPropagation() });
                        var E = w().mousedown(_("move")).css({ cursor: "move", position: "absolute", zIndex: 360 });
                        return J.support && E.on("touchstart.jcrop", J.createDragger("move")), P.append(E), F(), { updateVisible: y, update: x, release: z, refresh: b, isAwake: function() { return e }, setCursor: function(e) { E.css("cursor", e) }, enableHandles: T, enableOnly: function() { c = !0 }, disableHandles: F, animMode: A, setBgOpacity: k, done: j }
                    }(),
                    $ = function() {
                        var e = function() {},
                            i = function() {},
                            a = n.trackDocument;

                        function o() { O.css({ zIndex: 450 }), J.support && t(r).on("touchmove.jcrop", d).on("touchend.jcrop", h), a && t(r).on("mousemove.jcrop", s).on("mouseup.jcrop", c) }

                        function l() { O.css({ zIndex: 290 }), t(r).off(".jcrop") }

                        function s(t) { return e(p(t)), !1 }

                        function c(t) { return t.preventDefault(), t.stopPropagation(), H && (H = !1, i(p(t)), Y.isAwake() && n.onSelect.call(de, v(X.getFixed())), l(), e = function() {}, i = function() {}), !1 }

                        function u(t, n) { return H = !0, e = t, i = n, o(), !1 }

                        function d(e) { return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, s(e) }

                        function h(e) { return e.pageX = e.originalEvent.changedTouches[0].pageX, e.pageY = e.originalEvent.changedTouches[0].pageY, c(e) }
                        return a || O.mousemove(s).mouseup(c).mouseout(c), S.before(O), { activateHandlers: u }
                    }(),
                    Z = function() {
                        var e = t('<input type="radio" />').css({ position: "fixed", left: "-120px", width: "12px" }).addClass("jcrop-keymgr"),
                            i = t("<div />").css({ position: "absolute", overflow: "hidden" }).append(e);

                        function r() { n.keySupport && (e.show(), e.focus()) }

                        function a(t) { e.hide() }

                        function o(e, t, i) { n.allowMove && (X.moveOffset([t, i]), Y.updateVisible(!0)), e.preventDefault(), e.stopPropagation() }

                        function l(e) {
                            if (e.ctrlKey || e.metaKey) return !0;
                            K = e.shiftKey ? !0 : !1;
                            var t = K ? 10 : 1;
                            switch (e.keyCode) {
                                case 37:
                                    o(e, -t, 0);
                                    break;
                                case 39:
                                    o(e, t, 0);
                                    break;
                                case 38:
                                    o(e, 0, -t);
                                    break;
                                case 40:
                                    o(e, 0, t);
                                    break;
                                case 9:
                                    return !0
                            }
                            return !1
                        }
                        return n.keySupport && (e.keydown(l).blur(a), e.css({ position: "absolute", left: "-20px" }), i.append(e).insertBefore(S)), { watchKeys: r }
                    }();

                function ee(e) { j.removeClass().addClass(s("holder")).addClass(e) }

                function te(e) { ie([e[0] / N, e[1] / V, e[2] / N, e[3] / V]), n.onSelect.call(de, v(X.getFixed())), Y.enableHandles() }

                function ie(e) { X.setPressed([e[0], e[1]]), X.setCurrent([e[2], e[3]]), Y.update() }

                function ne() { return v(X.getFixed()) }

                function re() { return X.getFixed() }

                function ae(e) { d(e), pe() }

                function oe() { n.disabled = !0, Y.disableHandles(), Y.setCursor("default") }

                function le() { n.disabled = !1, pe() }

                function se() { Y.done(), $.activateHandlers(null, null) }

                function ce() { j.remove(), C.show(), C.css("visibility", "visible"), t(e).removeData("Jcrop") }

                function ue(e, t, i) {
                    var r = t || n.bgColor;
                    n.bgFade && c() && n.fadeTime && !i ? e.animate({ backgroundColor: r }, { queue: !1, duration: n.fadeTime }) : e.css("backgroundColor", r)
                }

                function pe(e) { n.allowResize ? e ? Y.enableOnly() : Y.enableHandles() : Y.disableHandles(), Y.setCursor(n.allowMove ? "move" : "default"), n.hasOwnProperty("trueSize") && (N = n.trueSize[0] / F, V = n.trueSize[1] / A), n.hasOwnProperty("setSelect") && (te(n.setSelect), Y.done(), delete n.setSelect), Q.refresh(), n.bgColor != U && (ue(n.shade ? Q.getShades() : j, n.shade ? n.shadeColor || n.bgColor : n.bgColor), U = n.bgColor), M != n.bgOpacity && (M = n.bgOpacity, n.shade ? Q.refresh() : Y.setBgOpacity(M)), R = n.maxSize[0] || 0, L = n.maxSize[1] || 0, B = n.minSize[0] || 0, q = n.minSize[1] || 0, n.hasOwnProperty("outerImage") && (S.attr("src", n.outerImage), delete n.outerImage), Y.refresh() }
                pe(!0);
                var de = {
                    setSelect: te,
                    setOptions: ae,
                    tellSelect: ne,
                    tellScaled: re,
                    setClass: ee,
                    disable: oe,
                    enable: le,
                    cancel: se,
                    release: Y.release,
                    destroy: ce,
                    focus: Z.watchKeys,
                    getBounds: function() { return [F * N, A * V] },
                    getWidgetSize: function() { return [F, A] },
                    getScaleFactor: function() { return [N, V] },
                    getOptions: function() { return n },
                    ui: { holder: j, selection: I }
                };
                return C.data("Jcrop", de), de
            }, t.fn.Jcrop = function(e, i) {
                var n;
                return this.each(function() {
                    if (t(this).data("Jcrop")) {
                        if ("api" === e) return t(this).data("Jcrop");
                        t(this).data("Jcrop").setOptions(e)
                    } else "IMG" == this.tagName ? t.Jcrop.Loader(this, function() { t(this).css({ display: "block", visibility: "hidden" }), n = t.Jcrop(this, e), t.isFunction(i) && i.call(n) }) : (t(this).css({ display: "block", visibility: "hidden" }), n = t.Jcrop(this, e), t.isFunction(i) && i.call(n))
                }), this
            }, t.Jcrop.Loader = function(i, n, r) {
                var a = t(i),
                    o = a[0];

                function l() { o.complete ? (a.off(".jcloader"), t.isFunction(n) && n.call(o)) : e.setTimeout(l, 50) }
                a.on("load.jcloader", l).on("error.jcloader", function(e) { a.off(".jcloader"), t.isFunction(r) && r.call(o) }), o.complete && t.isFunction(n) && (a.off(".jcloader"), n.call(o))
            }, t.Jcrop.defaults = { allowMove: !0, allowResize: !0, trackDocument: !0, baseClass: "jcrop", addClass: null, bgColor: "black", bgOpacity: .6, bgFade: !1, aspectRatio: 0, keySupport: !0, createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"], createBorders: ["n", "s", "e", "w"], drawBorders: !0, dragEdges: !0, fixedSupport: !0, touchSupport: null, shade: null, boxWidth: 0, boxHeight: 0, boundary: 2, fadeTime: 400, animationDelay: 20, swingSpeed: 3, maxSize: [0, 0], minSize: [0, 0], onChange: function() {}, onSelect: function() {}, onDblClick: function() {}, onRelease: function() {} }
        }(n.jQuery),
        function() {
            var e, t;
            e = n.jQuery, t = n.utils, n.namespace("crop", function(i) {
                return i.CropWidget = function() {
                    var i;

                    function n(t, i, n) { this.element = t, this.originalSize = i, null == n && (n = {}), this.__api = e.Jcrop(this.element[0], { trueSize: this.originalSize, baseClass: "uploadcare--jcrop", addClass: "uploadcare--crop-widget", createHandles: ["nw", "ne", "se", "sw"], bgColor: "transparent", bgOpacity: .8 }), this.setCrop(n), this.setSelection() }
                    return n.prototype.setCrop = function(e) { return this.crop = e, this.__api.setOptions({ aspectRatio: e.preferedSize ? e.preferedSize[0] / e.preferedSize[1] : 0, minSize: e.notLess ? t.fitSize(e.preferedSize, this.originalSize) : [0, 0] }) }, n.prototype.setSelection = function(e) { var i, n, r, a; return e ? (i = e.center, r = [e.width, e.height]) : (i = !0, r = this.originalSize), this.crop.preferedSize && (r = t.fitSize(this.crop.preferedSize, r, !0)), i ? (n = (this.originalSize[0] - r[0]) / 2, a = (this.originalSize[1] - r[1]) / 2) : (n = e.left || 0, a = e.top || 0), this.__api.setSelect([n, a, r[0] + n, r[1] + a]) }, i = /-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i, n.prototype.__parseModifiers = function(e) { var t; return (t = null != e ? e.match(i) : void 0) ? { width: parseInt(t[1], 10), height: parseInt(t[2], 10), center: "center" === t[4], left: parseInt(t[5], 10) || void 0, top: parseInt(t[6], 10) || void 0 } : void 0 }, n.prototype.setSelectionFromModifiers = function(e) { return this.setSelection(this.__parseModifiers(e)) }, n.prototype.getSelection = function() { var e, t, i; return e = this.__api.tellSelect(), t = Math.round(Math.max(0, e.x)), i = Math.round(Math.max(0, e.y)), { left: t, top: i, width: Math.round(Math.min(this.originalSize[0], e.x2)) - t, height: Math.round(Math.min(this.originalSize[1], e.y2)) - i } }, n.prototype.applySelectionToFile = function(e) { var i = this; return e.then(function(e) { return t.applyCropCoordsToInfo(e, i.crop, i.originalSize, i.getSelection()) }) }, n
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r, a = function(e, t) { return function() { return e.apply(t, arguments) } },
                o = [].slice;
            t = n.namespace, i = n.settings, e = n.jQuery, r = n.utils, t("files", function(t) {
                return t.BaseFile = function() {
                    function t(e, t, i) {
                        var n;
                        this.settings = t, this.sourceInfo = null != i ? i : {}, this.__extendApi = a(this.__extendApi, this), this.__cancel = a(this.__cancel, this), this.__resolveApi = a(this.__resolveApi, this), this.__rejectApi = a(this.__rejectApi, this), this.__runValidators = a(this.__runValidators, this), this.__fileInfo = a(this.__fileInfo, this), this.__handleFileData = a(this.__handleFileData, this), this.__updateInfo = a(this.__updateInfo, this), this.__completeUpload = a(this.__completeUpload, this), this.fileId = null, this.fileName = null, this.sanitizedName = null, this.fileSize = null, this.isStored = null, this.cdnUrlModifiers = null, this.isImage = null, this.imageInfo = null, this.mimeType = null, this.s3Bucket = null, (n = this.sourceInfo).source || (n.source = this.sourceName), this.__setupValidation(), this.__initApi()
                    }
                    return t.prototype.__startUpload = function() { return e.Deferred().resolve() }, t.prototype.__completeUpload = function() { var e, t, i, n, a = this; return i = 0, this.settings.debugUploads && (r.debug("Load file info.", this.fileId, this.settings.publicKey), t = setInterval(function() { return r.debug("Still waiting for file ready.", i, a.fileId, a.settings.publicKey) }, 5e3), this.apiDeferred.done(function() { return r.debug("File uploaded.", i, a.fileId, a.settings.publicKey) }).always(function() { return clearInterval(t) })), n = 100, (e = function() { return "pending" === a.apiDeferred.state() ? (i += 1, a.__updateInfo().done(function() { return setTimeout(e, n), n += 50 })) : void 0 })() }, t.prototype.__updateInfo = function() { var e = this; return r.jsonp("" + this.settings.urlBase + "/info/", "GET", { jsonerrors: 1, file_id: this.fileId, pub_key: this.settings.publicKey, wait_is_ready: +(null === this.isImage) }, { headers: { "X-UC-User-Agent": this.settings._userAgent } }).fail(function(t) { return e.settings.debugUploads && r.log("Can't load file info. Probably removed.", e.fileId, e.settings.publicKey, t), e.__rejectApi("info") }).done(this.__handleFileData) }, t.prototype.__handleFileData = function(e) { return this.fileName = e.original_filename, this.sanitizedName = e.filename, this.fileSize = e.size, this.isImage = e.is_image, this.imageInfo = e.image_info, this.mimeType = e.mime_type, this.isStored = e.is_stored, this.s3Bucket = e.s3_bucket, e.default_effects && (this.cdnUrlModifiers = "-/" + e.default_effects), this.s3Bucket && this.cdnUrlModifiers && this.__rejectApi("baddata"), this.__runValidators(), e.is_ready ? this.__resolveApi() : void 0 }, t.prototype.__progressInfo = function() { var e; return { state: this.__progressState, uploadProgress: this.__progress, progress: "ready" === (e = this.__progressState) || "error" === e ? 1 : .9 * this.__progress, incompleteFileInfo: this.__fileInfo() } }, t.prototype.__fileInfo = function() { var e; return e = this.s3Bucket ? "https://" + this.s3Bucket + ".s3.amazonaws.com/" + this.fileId + "/" + this.sanitizedName : "" + this.settings.cdnBase + "/" + this.fileId + "/", { uuid: this.fileId, name: this.fileName, size: this.fileSize, isStored: this.isStored, isImage: !this.s3Bucket && this.isImage, originalImageInfo: this.imageInfo, mimeType: this.mimeType, originalUrl: this.fileId ? e : null, cdnUrl: this.fileId ? "" + e + (this.cdnUrlModifiers || "") : null, cdnUrlModifiers: this.cdnUrlModifiers, sourceInfo: this.sourceInfo } }, t.prototype.__setupValidation = function() { return this.validators = this.settings.validators || this.settings.__validators || [], this.settings.imagesOnly ? this.validators.push(function(e) { if (e.isImage === !1) throw new Error("image") }) : void 0 }, t.prototype.__runValidators = function() {
                        var e, t, i, n, r, a, o;
                        t = this.__fileInfo();
                        try { for (a = this.validators, o = [], n = 0, r = a.length; r > n; n++) i = a[n], o.push(i(t)); return o } catch (l) { return e = l, this.__rejectApi(e.message) }
                    }, t.prototype.__initApi = function() { return this.apiDeferred = e.Deferred(), this.__progressState = "uploading", this.__progress = 0, this.__notifyApi() }, t.prototype.__notifyApi = function() { return this.apiDeferred.notify(this.__progressInfo()) }, t.prototype.__rejectApi = function(e) { return this.__progressState = "error", this.__notifyApi(), this.apiDeferred.reject(e, this.__fileInfo()) }, t.prototype.__resolveApi = function() { return this.__progressState = "ready", this.__notifyApi(), this.apiDeferred.resolve(this.__fileInfo()) }, t.prototype.__cancel = function() { return this.__rejectApi("user") }, t.prototype.__extendApi = function(e) { var t = this; return e.cancel = this.__cancel, e.pipe = e.then = function() { return t.__extendApi(r.fixedPipe.apply(r, [e].concat(o.call(arguments)))) }, e }, t.prototype.promise = function() {
                        var e, t = this;
                        return this.__apiPromise || (this.__apiPromise = this.__extendApi(this.apiDeferred.promise()), this.__runValidators(), "pending" === this.apiDeferred.state() && (e = this.__startUpload(), e.done(function() { return t.__progressState = "uploaded", t.__progress = 1, t.__notifyApi(), t.__completeUpload() }), e.progress(function(e) {
                            return e > t.__progress ? (t.__progress = e,
                                t.__notifyApi()) : void 0
                        }), e.fail(function() { return t.__rejectApi("upload") }), this.apiDeferred.always(e.reject))), this.__apiPromise
                    }, t
                }()
            }), t("utils", function(e) { return e.isFile = function(e) { return e && e.done && e.fail && e.cancel }, e.valueToFile = function(t, i) { return t && !e.isFile(t) && (t = n.fileFrom("uploaded", t, i)), t || null } })
        }.call(this),
        function() {
            var t, i, a, o, l, s, c;
            t = n.jQuery, l = n.utils, s = n.utils, c = s.abilities, i = c.Blob, a = c.FileReader, o = c.URL, n.namespace("utils.image", function(n) {
                var s, c;
                return s = e.DataView, c = l.taskRunner(1), n.shrinkFile = function(e, r) { var a, u = this; return a = t.Deferred(), o && s && i ? (c(function(t) { var i; return a.always(t), i = l.imageLoader(o.createObjectURL(e)), i.always(function(e) { return o.revokeObjectURL(e.src) }), i.fail(function() { return a.reject("not image") }), i.done(function(t) { return a.notify(.1), n.getExif(e).always(function(e) { var o, s; return a.notify(.2), s = "resolved" === i.state(), i = n.shrinkImage(t, r), i.progress(function(e) { return a.notify(.2 + .6 * e) }), i.fail(a.reject), i.done(function(t) { var o, c; return o = "image/jpeg", c = r.quality || .8, !s && n.hasTransparency(t) && (o = "image/png", c = void 0), l.canvasToBlob(t, o, c, function(r) { return t.width = t.height = 1, a.notify(.9), e ? (i = n.replaceJpegChunk(r, 225, [e.buffer]), i.done(a.resolve), i.fail(function() { return a.resolve(r) })) : a.resolve(r) }) }), o = null }) }) }), a.promise()) : a.reject("support") }, n.shrinkImage = function(e, i) { var n, a, o, s, c, u, p, d, h, f, g, m, _; return a = t.Deferred(), m = .71, e.width * m * e.height * m < i.size ? a.reject("not required") : (g = u = e.width, f = e.height, p = g / f, _ = Math.floor(Math.sqrt(i.size * p)), o = Math.floor(i.size / Math.sqrt(i.size * p)), c = 5e6, s = 4096, d = function() { return _ >= g ? void a.resolve(e) : l.defer(function() { var t; return g = Math.round(g * m), f = Math.round(f * m), _ > g * m && (g = _, f = o), g * f > c && (g = Math.floor(Math.sqrt(c * p)), f = Math.floor(c / Math.sqrt(c * p))), g > s && (g = s, f = Math.round(g / p)), f > s && (f = s, g = Math.round(p * f)), t = r.createElement("canvas"), t.width = g, t.height = f, t.getContext("2d").drawImage(e, 0, 0, g, f), e.src = "//:0", e.width = e.height = 1, e = t, a.notify((u - g) / (u - _)), d() }) }, h = function() { var t, i; return t = r.createElement("canvas"), t.width = _, t.height = o, i = t.getContext("2d"), i.imageSmoothingQuality = "high", i.drawImage(e, 0, 0, _, o), e.src = "//:0", e.width = e.height = 1, a.resolve(t) }, n = r.createElement("canvas").getContext("2d"), "imageSmoothingQuality" in n ? h() : d(), a.promise()) }, n.drawFileToCanvas = function(e, i, a, s, c) {
                    var u, p;
                    return u = t.Deferred(), o ? (p = l.imageLoader(o.createObjectURL(e)), p.always(function(e) { return o.revokeObjectURL(e.src) }), p.fail(function() { return u.reject("not image") }), p.done(function(t) {
                        return u.always(function() { return t.src = "//:0" }), c && t.width * t.height > c ? u.reject("max source") : n.getExif(e).always(function(e) {
                            var o, c, p, d, h, f, g, m, _, b;
                            return h = n.parseExifOrientation(e) || 1, g = h > 4, f = g ? [t.height, t.width] : [t.width, t.height], _ = l.fitSize(f, [i, a]), d = _[0], p = _[1], (m = [
                                [1, 0, 0, 1, 0, 0],
                                [-1, 0, 0, 1, d, 0],
                                [-1, 0, 0, -1, d, p],
                                [1, 0, 0, -1, 0, p],
                                [0, 1, 1, 0, 0, 0],
                                [0, 1, -1, 0, d, 0],
                                [0, -1, -1, 0, d, p],
                                [0, -1, 1, 0, 0, p]
                            ][h - 1]) ? (o = r.createElement("canvas"), o.width = d, o.height = p, c = o.getContext("2d"), c.transform.apply(c, m), g && (b = [p, d], d = b[0], p = b[1]), s && (c.fillStyle = s, c.fillRect(0, 0, d, p)), c.drawImage(t, 0, 0, d, p), u.resolve(o, f)) : u.reject("bad image")
                        })
                    }), u.promise()) : u.reject("support")
                }, n.readJpegChunks = function(e) {
                    var i, n, r, o, l;
                    return l = function(e, t) { var n; return n = new a, n.onload = function() { return t(new s(n.result)) }, n.onerror = function(e) { return i.reject("reader", e) }, n.readAsArrayBuffer(e) }, r = function() {
                        return l(e.slice(n, n + 128), function(e) {
                            var t, i, r;
                            for (t = i = 0, r = e.byteLength; r >= 0 ? r > i : i > r; t = r >= 0 ? ++i : --i)
                                if (255 === e.getUint8(t)) { n += t; break }
                            return o()
                        })
                    }, o = function() { var t; return t = n, l(e.slice(n, n += 4), function(a) { var o, s; return 4 !== a.byteLength || 255 !== a.getUint8(0) ? i.reject("corrupted") : (s = a.getUint8(1), 218 === s ? i.resolve() : (o = a.getUint16(2) - 2, l(e.slice(n, n += o), function(e) { return e.byteLength !== o ? i.reject("corrupted") : (i.notify(t, o, s, e), r()) }))) }) }, i = t.Deferred(), a && s ? (n = 2, l(e.slice(0, 2), function(e) { return 65496 !== e.getUint16(0) ? i.reject("not jpeg") : r() }), i.promise()) : i.reject("support")
                }, n.replaceJpegChunk = function(e, r, a) { var o, l, c, u; return o = t.Deferred(), c = [], l = [], u = n.readJpegChunks(e), u.fail(o.reject), u.progress(function(e, t, i) { return i === r ? (c.push(e), l.push(t)) : void 0 }), u.done(function() { var t, n, u, p, d, h, f, g, m; for (p = [e.slice(0, 2)], h = 0, g = a.length; g > h; h++) t = a[h], u = new s(new ArrayBuffer(4)), u.setUint16(0, 65280 + r), u.setUint16(2, t.byteLength + 2), p.push(u.buffer), p.push(t); for (d = 2, n = f = 0, m = c.length; m >= 0 ? m > f : f > m; n = m >= 0 ? ++f : --f) c[n] > d && p.push(e.slice(d, c[n])), d = c[n] + l[n] + 4; return p.push(e.slice(d, e.size)), o.resolve(new i(p, { type: e.type })) }), o.promise() }, n.getExif = function(e) { var i, r; return i = null, r = n.readJpegChunks(e), r.progress(function(e, t, n, r) { return !i && 225 === n && r.byteLength >= 14 && 1165519206 === r.getUint32(0) && 0 === r.getUint16(4) ? i = r : void 0 }), r.then(function() { return i }, function(e) { return t.Deferred().reject(i, e) }) }, n.parseExifOrientation = function(e) {
                    var t, i, n, r, a;
                    if (!e || e.byteLength < 14 || 1165519206 !== e.getUint32(0) || 0 !== e.getUint16(4)) return null;
                    if (18761 === e.getUint16(6)) n = !0;
                    else {
                        if (19789 !== e.getUint16(6)) return null;
                        n = !1
                    }
                    if (42 !== e.getUint16(8, n)) return null;
                    for (r = 8 + e.getUint32(10, n), t = e.getUint16(r - 2, n), i = a = 0; t >= 0 ? t > a : a > t; i = t >= 0 ? ++a : --a) {
                        if (e.byteLength < r + 10) return null;
                        if (274 === e.getUint16(r, n)) return e.getUint16(r + 8, n);
                        r += 12
                    }
                    return null
                }, n.hasTransparency = function(e) {
                    var t, i, n, a, o, l, s;
                    for (o = 50, t = r.createElement("canvas"), t.width = t.height = o, i = t.getContext("2d"), i.drawImage(e, 0, 0, o, o), n = i.getImageData(0, 0, o, o).data, t.width = t.height = 1, a = l = 3, s = n.length; s > l; a = l += 4)
                        if (n[a] < 254) return !0;
                    return !1
                }
            })
        }.call(this),
        function() {
            var e, t, i = function(e, t) { return function() { return e.apply(t, arguments) } },
                r = {}.hasOwnProperty,
                a = function(e, t) {
                    for (var i in t) r.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            e = n.jQuery, t = n.utils, n.namespace("files", function(n) {
                return n.ObjectFile = function(n) {
                    var r;
                    a(o, n), r = null, o.prototype.sourceName = "local";

                    function o(e) { this.__file = e, this.setFile = i(this.setFile, this), o.__super__.constructor.apply(this, arguments), this.fileName = this.__file.name || "original", this.__notifyApi() }
                    return o.prototype.setFile = function(e) { return e && (this.__file = e), this.sourceInfo.file = this.__file, this.__file ? (this.fileSize = this.__file.size, this.fileType = this.__file.type || "application/octet-stream", this.settings.debugUploads && t.debug("Use local file.", this.fileName, this.fileType, this.fileSize), this.__runValidators(), this.__notifyApi()) : void 0 }, o.prototype.__startUpload = function() { var i, n, r, a = this; return this.apiDeferred.always(function() { return a.__file = null }), this.__file.size >= this.settings.multipartMinSize && t.abilities.Blob ? (this.setFile(), this.multipartUpload()) : (n = t.abilities.iOSVersion, !this.settings.imageShrink || n && 8 > n ? (this.setFile(), this.directUpload()) : (i = e.Deferred(), r = .4, t.image.shrinkFile(this.__file, this.settings.imageShrink).progress(function(e) { return i.notify(e * r) }).done(this.setFile).fail(function() { return a.setFile(), r = .1 * r }).always(function() { return i.notify(r), a.directUpload().done(i.resolve).fail(i.reject).progress(function(e) { return i.notify(r + e * (1 - r)) }) }), i)) }, o.prototype.__autoAbort = function(e) { return this.apiDeferred.fail(e.abort), e }, o.prototype.directRunner = function(e) { return r || (r = t.taskRunner(this.settings.parallelDirectUploads)), r(e) }, o.prototype.directUpload = function() {
                        var t, i = this;
                        return t = e.Deferred(), this.__file ? this.fileSize > 104857600 ? (this.__rejectApi("size"), t) : (this.directRunner(function(n) {
                            var r;
                            return t.always(n), "pending" === i.apiDeferred.state() ? (r = new FormData, r.append("UPLOADCARE_PUB_KEY", i.settings.publicKey), r.append("signature", i.settings.secureSignature), r.append("expire", i.settings.secureExpire), r.append("UPLOADCARE_STORE", i.settings.doNotStore ? "" : "auto"), r.append("file", i.__file, i.fileName), r.append("file_name", i.fileName), r.append("source", i.sourceInfo.source), i.__autoAbort(e.ajax({
                                xhr: function() { var i; return i = e.ajaxSettings.xhr(), i.upload && i.upload.addEventListener("progress", function(e) { return t.notify(e.loaded / e.total) }, !1), i },
                                crossDomain: !0,
                                type: "POST",
                                url: "" + i.settings.urlBase + "/base/?jsonerrors=1",
                                headers: { "X-UC-User-Agent": i.settings._userAgent },
                                contentType: !1,
                                processData: !1,
                                data: r,
                                dataType: "json",
                                error: t.reject,
                                success: function(e) { return (null != e ? e.file : void 0) ? (i.fileId = e.file, t.resolve()) : t.reject() }
                            }))) : void 0
                        }), t) : (this.__rejectApi("baddata"), t)
                    }, o.prototype.multipartUpload = function() { var t, i = this; return t = e.Deferred(), this.__file ? (this.multipartStart().done(function(e) { return i.uploadParts(e.parts, e.uuid).done(function() { return i.multipartComplete(e.uuid).done(function(e) { return i.fileId = e.uuid, i.__handleFileData(e), t.resolve() }).fail(t.reject) }).progress(t.notify).fail(t.reject) }).fail(t.reject), t) : t }, o.prototype.multipartStart = function() { var e, i = this; return e = { UPLOADCARE_PUB_KEY: this.settings.publicKey, signature: this.settings.secureSignature, expire: this.settings.secureExpire, filename: this.fileName, source: this.sourceInfo.source, size: this.fileSize, content_type: this.fileType, part_size: this.settings.multipartPartSize, UPLOADCARE_STORE: this.settings.doNotStore ? "" : "auto" }, this.__autoAbort(t.jsonp("" + this.settings.urlBase + "/multipart/start/?jsonerrors=1", "POST", e, { headers: { "X-UC-User-Agent": this.settings._userAgent } }).fail(function(n) { return i.settings.debugUploads ? t.log("Can't start multipart upload.", n, e) : void 0 })) }, o.prototype.uploadParts = function(i, n) { var r, a, o, l, s, c, u, p, d, h, f, g = this; for (s = [], l = e.now(), d = function(t, i) { var n, a, o; if (s[t] = i, !(e.now() - l < 250)) { for (l = e.now(), n = 0, a = 0, o = s.length; o > a; a++) i = s[a], n += i; return r.notify(n / g.fileSize) } }, r = e.Deferred(), o = 0, p = 0, u = 0, c = function() { var a, l, h, f, m; if (!(u >= g.fileSize)) return h = u + g.settings.multipartPartSize, g.fileSize < h + g.settings.multipartMinLastPartSize && (h = g.fileSize), l = g.__file.slice(u, h), u = h, f = p, o += 1, p += 1, a = 0, (m = function() { return "pending" === g.apiDeferred.state() ? (s[f] = 0, g.__autoAbort(e.ajax({ xhr: function() { var t; return t = e.ajaxSettings.xhr(), t.responseType = "text", t.upload && t.upload.addEventListener("progress", function(e) { return d(f, e.loaded) }, !1), t }, url: i[f], crossDomain: !0, type: "PUT", processData: !1, contentType: g.fileType, data: l, error: function() { return a += 1, a > g.settings.multipartMaxAttempts ? (g.settings.debugUploads && t.log("Part #" + f + " and file upload is failed.", n), r.reject()) : (g.settings.debugUploads && t.debug("Part #" + f + "(" + a + ") upload is failed.", n), m()) }, success: function() { return o -= 1, c(), o ? void 0 : r.resolve() } }))) : void 0 })() }, a = h = 0, f = this.settings.multipartConcurrency; f >= 0 ? f > h : h > f; a = f >= 0 ? ++h : --h) c(); return r }, o.prototype.multipartComplete = function(e) { var i, n = this; return i = { UPLOADCARE_PUB_KEY: this.settings.publicKey, uuid: e }, this.__autoAbort(t.jsonp("" + this.settings.urlBase + "/multipart/complete/?jsonerrors=1", "POST", i, { headers: { "X-UC-User-Agent": this.settings._userAgent } }).fail(function(i) { return n.settings.debugUploads ? t.log("Can't complete multipart upload.", e, n.settings.publicKey, i) : void 0 })) }, o
                }(n.BaseFile)
            })
        }.call(this),
        function() {
            var e, t, i = function(e, t) { return function() { return e.apply(t, arguments) } },
                r = {}.hasOwnProperty,
                a = function(e, t) {
                    for (var i in t) r.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            e = n.jQuery, t = n.utils, n.namespace("files", function(n) {
                return n.InputFile = function(n) {
                    a(r, n), r.prototype.sourceName = "local-compat";

                    function r(n) { this.__input = n, this.__cleanUp = i(this.__cleanUp, this), r.__super__.constructor.apply(this, arguments), this.fileId = t.uuid(), this.fileName = e(this.__input).val().split("\\").pop(), this.__notifyApi() }
                    return r.prototype.__startUpload = function() { var t, i, n, r; return t = e.Deferred(), r = "" + this.settings.urlBase + "/iframe/", n = "uploadcare--iframe-" + this.fileId, this.__iframe = e("<iframe>").attr({ id: n, name: n }).css("display", "none").appendTo("body").on("load", t.resolve).on("error", t.reject), i = function(t, i) { return e("<input/>", { type: "hidden", name: t, value: i }) }, e(this.__input).attr("name", "file"), this.__iframeForm = e("<form>").attr({ method: "POST", action: r, enctype: "multipart/form-data", target: n }).append(i("UPLOADCARE_PUB_KEY", this.settings.publicKey)).append(i("UPLOADCARE_SIGNATURE", this.settings.secureSignature)).append(i("UPLOADCARE_EXPIRE", this.settings.secureExpire)).append(i("UPLOADCARE_FILE_ID", this.fileId)).append(i("UPLOADCARE_STORE", this.settings.doNotStore ? "" : "auto")).append(i("UPLOADCARE_SOURCE", this.sourceInfo.source)).append(this.__input).css("display", "none").appendTo("body").submit(), t.always(this.__cleanUp) }, r.prototype.__cleanUp = function() { var e, t; return null != (e = this.__iframe) && e.off("load error").remove(), null != (t = this.__iframeForm) && t.remove(), this.__iframe = null, this.__iframeForm = null }, r
                }(n.BaseFile)
            })
        }.call(this),
        function() {
            var t, n;
            ! function() {
                void 0 === Function.prototype.scopedTo && (Function.prototype.scopedTo = function(e, t) { var i = this; return function() { return i.apply(e, Array.prototype.slice.call(t || []).concat(Array.prototype.slice.call(arguments))) } }), t = function(e, i) {
                    this.options = i || {}, this.key = e, this.channels = new t.Channels, this.global_emitter = new t.EventsDispatcher;
                    var n = this;
                    this.checkAppKey(), this.connection = new t.Connection(this.key, this.options), this.connection.bind("connected", function() { n.subscribeAll() }).bind("message", function(e) {
                        var t = 0 === e.event.indexOf("pusher_internal:");
                        if (e.channel) {
                            var i;
                            (i = n.channel(e.channel)) && i.emit(e.event, e.data)
                        }
                        t || n.global_emitter.emit(e.event, e.data)
                    }).bind("disconnected", function() { n.channels.disconnect() }).bind("error", function(e) { t.warn("Error", e) }), t.instances.push(this), t.isReady && n.connect()
                }, t.instances = [], t.prototype = {
                    channel: function(e) { return this.channels.find(e) },
                    connect: function() { this.connection.connect() },
                    disconnect: function() { this.connection.disconnect() },
                    bind: function(e, t) { return this.global_emitter.bind(e, t), this },
                    bind_all: function(e) { return this.global_emitter.bind_all(e), this },
                    subscribeAll: function() { var e; for (channelName in this.channels.channels) this.channels.channels.hasOwnProperty(channelName) && this.subscribe(channelName) },
                    subscribe: function(e) {
                        var t = this,
                            i = this.channels.add(e, this);
                        return "connected" === this.connection.state && i.authorize(this.connection.socket_id, this.options, function(n, r) { n ? i.emit("pusher:subscription_error", r) : t.send_event("pusher:subscribe", { channel: e, auth: r.auth, channel_data: r.channel_data }) }), i
                    },
                    unsubscribe: function(e) { this.channels.remove(e), "connected" === this.connection.state && this.send_event("pusher:unsubscribe", { channel: e }) },
                    send_event: function(e, t, i) { return this.connection.send_event(e, t, i) },
                    checkAppKey: function() {
                        (null === this.key || void 0 === this.key) && t.warn("Warning", "You must pass your app key when you instantiate Pusher.")
                    }
                }, t.Util = {
                    extend: function n(e, t) { for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? e[i] = n(e[i] || {}, t[i]) : e[i] = t[i]; return e },
                    stringify: function r() { for (var t = ["Pusher"], i = 0; i < arguments.length; i++) "string" == typeof arguments[i] ? t.push(arguments[i]) : void 0 == e.JSON ? t.push(arguments[i].toString()) : t.push(JSON.stringify(arguments[i])); return t.join(" : ") },
                    arrayIndexOf: function(e, t) {
                        var n = Array.prototype.indexOf;
                        if (null == e) return -1;
                        if (n && e.indexOf === n) return e.indexOf(t);
                        for (i = 0, l = e.length; i < l; i++)
                            if (e[i] === t) return i;
                        return -1
                    }
                }, t.debug = function() { t.log && t.log(t.Util.stringify.apply(this, arguments)) }, t.warn = function() {
                    if (e.console && e.console.warn) e.console.warn(t.Util.stringify.apply(this, arguments));
                    else {
                        if (!t.log) return;
                        t.log(t.Util.stringify.apply(this, arguments))
                    }
                }, t.VERSION = "1.12.2", t.host = "ws.pusherapp.com", t.ws_port = 80, t.wss_port = 443, t.channel_auth_endpoint = "/pusher/auth", t.cdn_http = "http://js.pusher.com/", t.cdn_https = "https://d3dy5gmtp8yhk7.cloudfront.net/", t.dependency_suffix = ".min", t.channel_auth_transport = "ajax", t.activity_timeout = 12e4, t.pong_timeout = 3e4, t.isReady = !1, t.ready = function() { t.isReady = !0; for (var e = 0, i = t.instances.length; i > e; e++) t.instances[e].connect() }
            }(),
            function() {
                function e() { this._callbacks = {} }
                e.prototype.get = function(e) { return this._callbacks[this._prefix(e)] }, e.prototype.add = function(e, t) {
                    var i = this._prefix(e);
                    this._callbacks[i] = this._callbacks[i] || [], this._callbacks[i].push(t)
                }, e.prototype.remove = function(e, i) {
                    if (this.get(e)) {
                        var n = t.Util.arrayIndexOf(this.get(e), i);
                        this._callbacks[this._prefix(e)].splice(n, 1)
                    }
                }, e.prototype._prefix = function(e) { return "_" + e };

                function i(t) { this.callbacks = new e, this.global_callbacks = [], this.failThrough = t }
                i.prototype.bind = function(e, t) {
                    return this.callbacks.add(e, t), this;
                }, i.prototype.unbind = function(e, t) { return this.callbacks.remove(e, t), this }, i.prototype.emit = function(e, t) {
                    for (var i = 0; i < this.global_callbacks.length; i++) this.global_callbacks[i](e, t);
                    var n = this.callbacks.get(e);
                    if (n)
                        for (var i = 0; i < n.length; i++) n[i](t);
                    else this.failThrough && this.failThrough(e, t);
                    return this
                }, i.prototype.bind_all = function(e) { return this.global_callbacks.push(e), this }, t.EventsDispatcher = i
            }(),
            function() {
                function e(e) { return e.substr(0, 1).toUpperCase() + e.substr(1) }

                function i(e, t, i) { void 0 !== t[e] && t[e](i) }

                function n(e, i, n) { t.EventsDispatcher.call(this), this.state = void 0, this.errors = [], this.stateActions = n, this.transitions = i, this.transition(e) }
                n.prototype.transition = function(n, r) {
                    var a = this.state,
                        o = this.stateActions;
                    if (a && -1 == t.Util.arrayIndexOf(this.transitions[a], n)) throw this.emit("invalid_transition_attempt", { oldState: a, newState: n }), new Error("Invalid transition [" + a + " to " + n + "]");
                    i(a + "Exit", o, r), i(a + "To" + e(n), o, r), i(n + "Pre", o, r), this.state = n, this.emit("state_change", { oldState: a, newState: n }), i(n + "Post", o, r)
                }, n.prototype.is = function(e) { return this.state === e }, n.prototype.isNot = function(e) { return this.state !== e }, t.Util.extend(n.prototype, t.EventsDispatcher.prototype), t.Machine = n
            }(),
            function() {
                var i = function() {
                    var i = this;
                    t.EventsDispatcher.call(this), void 0 !== e.addEventListener && (e.addEventListener("online", function() { i.emit("online", null) }, !1), e.addEventListener("offline", function() { i.emit("offline", null) }, !1))
                };
                i.prototype.isOnLine = function() { return void 0 === e.navigator.onLine ? !0 : e.navigator.onLine }, t.Util.extend(i.prototype, t.EventsDispatcher.prototype), t.NetInfo = i
            }(),
            function() {
                var e = { initialized: ["waiting", "failed"], waiting: ["connecting", "permanentlyClosed"], connecting: ["open", "permanentlyClosing", "impermanentlyClosing", "waiting"], open: ["connected", "permanentlyClosing", "impermanentlyClosing", "waiting"], connected: ["permanentlyClosing", "waiting"], impermanentlyClosing: ["waiting", "permanentlyClosing"], permanentlyClosing: ["permanentlyClosed"], permanentlyClosed: ["waiting", "failed"], failed: ["permanentlyClosed"] },
                    i = 2e3,
                    n = 2e3,
                    a = 2e3,
                    o = 5 * i,
                    l = 5 * n,
                    s = 5 * a;

                function c(e) { e.connectionWait = 0, "flash" === t.TransportType ? e.openTimeout = 5e3 : e.openTimeout = 2e3, e.connectedTimeout = 2e3, e.connectionSecure = e.compulsorySecure, e.connectionAttempts = 0 }

                function u(u, p) {
                    var d = this;
                    t.EventsDispatcher.call(this), this.options = t.Util.extend({ encrypted: !1 }, p), this.netInfo = new t.NetInfo, this.netInfo.bind("online", function() { d._machine.is("waiting") && (d._machine.transition("connecting"), T("connecting")) }), this.netInfo.bind("offline", function() { d._machine.is("connected") && (d.socket.onclose = void 0, d.socket.onmessage = void 0, d.socket.onerror = void 0, d.socket.onopen = void 0, d.socket.close(), d.socket = void 0, d._machine.transition("waiting")) }), this._machine = new t.Machine("initialized", e, {
                        initializedPre: function() { d.compulsorySecure = d.options.encrypted, d.key = u, d.socket = null, d.socket_id = null, d.state = "initialized" },
                        waitingPre: function() { d.connectionWait > 0 && d.emit("connecting_in", d.connectionWait), T(d.netInfo.isOnLine() && d.connectionAttempts <= 4 ? "connecting" : "unavailable"), d.netInfo.isOnLine() && (d._waitingTimer = setTimeout(function() { d._machine.transition("connecting") }, b())) },
                        waitingExit: function() { clearTimeout(d._waitingTimer) },
                        connectingPre: function() {
                            if (d.netInfo.isOnLine() === !1) return d._machine.transition("waiting"), void T("unavailable");
                            var e = f(d.key, d.connectionSecure);
                            t.debug("Connecting", e), d.socket = new t.Transport(e), d.socket.onopen = v, d.socket.onclose = C, d.socket.onerror = z, d._connectingTimer = setTimeout(g, d.openTimeout)
                        },
                        connectingExit: function() { clearTimeout(d._connectingTimer), d.socket.onopen = void 0 },
                        connectingToWaiting: function() { h() },
                        connectingToImpermanentlyClosing: function() { h() },
                        openPre: function() { d.socket.onmessage = x, d.socket.onerror = z, d.socket.onclose = C, d._openTimer = setTimeout(g, d.connectedTimeout) },
                        openExit: function() { clearTimeout(d._openTimer), d.socket.onmessage = void 0 },
                        openToWaiting: function() { h() },
                        openToImpermanentlyClosing: function() { h() },
                        connectedPre: function(e) { d.socket_id = e, d.socket.onmessage = w, d.socket.onerror = z, d.socket.onclose = C, c(d), d.connectedAt = (new Date).getTime(), m() },
                        connectedPost: function() { T("connected") },
                        connectedExit: function() { _(), T("disconnected") },
                        impermanentlyClosingPost: function() { d.socket && (d.socket.onclose = C, d.socket.close()) },
                        permanentlyClosingPost: function() { d.socket ? (d.socket.onclose = function() { c(d), d._machine.transition("permanentlyClosed") }, d.socket.close()) : (c(d), d._machine.transition("permanentlyClosed")) },
                        failedPre: function() { T("failed"), t.debug("WebSockets are not available in this browser.") },
                        permanentlyClosedPost: function() { T("disconnected") }
                    });

                    function h() { d.connectionWait < o && (d.connectionWait += i), d.openTimeout < l && (d.openTimeout += n), d.connectedTimeout < s && (d.connectedTimeout += a), d.compulsorySecure !== !0 && (d.connectionSecure = !d.connectionSecure), d.connectionAttempts++ }

                    function f(e, i) {
                        var n = t.ws_port,
                            a = "ws://";
                        (i || "https:" === r.location.protocol) && (n = t.wss_port, a = "wss://");
                        var o = "flash" === t.TransportType ? "true" : "false";
                        return a + t.host + ":" + n + "/app/" + e + "?protocol=5&client=js&version=" + t.VERSION + "&flash=" + o
                    }

                    function g() { d._machine.transition("impermanentlyClosing") }

                    function m() { d._activityTimer && clearTimeout(d._activityTimer), d._activityTimer = setTimeout(function() { d.send_event("pusher:ping", {}), d._activityTimer = setTimeout(function() { d.socket.close() }, d.options.pong_timeout || t.pong_timeout) }, d.options.activity_timeout || t.activity_timeout) }

                    function _() { d._activityTimer && clearTimeout(d._activityTimer) }

                    function b() {
                        var e = d.connectionWait;
                        if (0 === e && d.connectedAt) {
                            var t = 1e3,
                                i = (new Date).getTime() - d.connectedAt;
                            t > i && (e = t - i)
                        }
                        return e
                    }

                    function v() { d._machine.transition("open") }

                    function y(e, t) { d.emit("error", { type: "PusherError", data: { code: e, message: t } }), 4e3 === e ? (d.compulsorySecure = !0, d.connectionSecure = !0, d.options.encrypted = !0, g()) : 4100 > e ? d._machine.transition("permanentlyClosing") : 4200 > e ? (d.connectionWait = 1e3, d._machine.transition("waiting")) : 4300 > e ? g() : d._machine.transition("permanentlyClosing") }

                    function x(e) {
                        var t = k(e);
                        void 0 !== t && ("pusher:connection_established" === t.event ? d._machine.transition("connected", t.data.socket_id) : "pusher:error" === t.event && y(t.data.code, t.data.message))
                    }

                    function w(e) {
                        m();
                        var i = k(e);
                        if (void 0 !== i) {
                            switch (t.debug("Event recd", i), i.event) {
                                case "pusher:error":
                                    d.emit("error", { type: "PusherError", data: i.data });
                                    break;
                                case "pusher:ping":
                                    d.send_event("pusher:pong", {})
                            }
                            d.emit("message", i)
                        }
                    }

                    function k(e) {
                        try {
                            var t = JSON.parse(e.data);
                            if ("string" == typeof t.data) try { t.data = JSON.parse(t.data) } catch (i) { if (!(i instanceof SyntaxError)) throw i }
                            return t
                        } catch (i) { d.emit("error", { type: "MessageParseError", error: i, data: e.data }) }
                    }

                    function C() { d._machine.transition("waiting") }

                    function z(e) { d.emit("error", { type: "WebSocketError", error: e }) }

                    function T(e, i) {
                        var n = d.state;
                        d.state = e, n !== e && (t.debug("State changed", n + " -> " + e), d.emit("state_change", { previous: n, current: e }), d.emit(e, i))
                    }
                }
                u.prototype.connect = function() { this._machine.is("failed") || t.Transport ? this._machine.is("initialized") ? (c(this), this._machine.transition("waiting")) : this._machine.is("waiting") && this.netInfo.isOnLine() === !0 ? this._machine.transition("connecting") : this._machine.is("permanentlyClosed") && (c(this), this._machine.transition("waiting")) : this._machine.transition("failed") }, u.prototype.send = function(e) { if (this._machine.is("connected")) { var t = this; return setTimeout(function() { t.socket.send(e) }, 0), !0 } return !1 }, u.prototype.send_event = function(e, i, n) { var r = { event: e, data: i }; return n && (r.channel = n), t.debug("Event sent", r), this.send(JSON.stringify(r)) }, u.prototype.disconnect = function() { this._machine.is("permanentlyClosed") || (this._machine.is("waiting") || this._machine.is("failed") ? this._machine.transition("permanentlyClosed") : this._machine.transition("permanentlyClosing")) }, t.Util.extend(u.prototype, t.EventsDispatcher.prototype), t.Connection = u
            }(),
            function() {
                t.Channels = function() { this.channels = {} }, t.Channels.prototype = {
                    add: function(e, i) { var n = this.find(e); if (n) return n; var r = t.Channel.factory(e, i); return this.channels[e] = r, r },
                    find: function(e) { return this.channels[e] },
                    remove: function(e) { delete this.channels[e] },
                    disconnect: function() {
                        for (var e in this.channels) this.channels[e].disconnect();
                    }
                }, t.Channel = function(e, i) {
                    var n = this;
                    t.EventsDispatcher.call(this, function(i, n) { t.debug("No callbacks on " + e + " for " + i) }), this.pusher = i, this.name = e, this.subscribed = !1, this.bind("pusher_internal:subscription_succeeded", function(e) { n.onSubscriptionSucceeded(e) })
                }, t.Channel.prototype = { init: function() {}, disconnect: function() { this.subscribed = !1, this.emit("pusher_internal:disconnected") }, onSubscriptionSucceeded: function(e) { this.subscribed = !0, this.emit("pusher:subscription_succeeded") }, authorize: function(e, t, i) { return i(!1, {}) }, trigger: function(e, t) { return this.pusher.send_event(e, t, this.name) } }, t.Util.extend(t.Channel.prototype, t.EventsDispatcher.prototype), t.Channel.PrivateChannel = {
                    authorize: function(e, i, n) {
                        var r = this,
                            a = new t.Channel.Authorizer(this, t.channel_auth_transport, i);
                        return a.authorize(e, function(e, t) { e || r.emit("pusher_internal:authorized", t), n(e, t) })
                    }
                }, t.Channel.PresenceChannel = { init: function() { this.members = new e(this) }, onSubscriptionSucceeded: function(e) { this.subscribed = !0 } };
                var e = function(e) {
                    var t = this,
                        i = function() { this._members_map = {}, this.count = 0, this.me = null };
                    i.call(this), e.bind("pusher_internal:authorized", function(i) {
                        var n = JSON.parse(i.channel_data);
                        e.bind("pusher_internal:subscription_succeeded", function(i) { t._members_map = i.presence.hash, t.count = i.presence.count, t.me = t.get(n.user_id), e.emit("pusher:subscription_succeeded", t) })
                    }), e.bind("pusher_internal:member_added", function(i) { null === t.get(i.user_id) && t.count++, t._members_map[i.user_id] = i.user_info, e.emit("pusher:member_added", t.get(i.user_id)) }), e.bind("pusher_internal:member_removed", function(i) {
                        var n = t.get(i.user_id);
                        n && (delete t._members_map[i.user_id], t.count--, e.emit("pusher:member_removed", n))
                    }), e.bind("pusher_internal:disconnected", function() { i.call(t) })
                };
                e.prototype = { each: function(e) { for (var t in this._members_map) e(this.get(t)) }, get: function(e) { return this._members_map.hasOwnProperty(e) ? { id: e, info: this._members_map[e] } : null } }, t.Channel.factory = function(e, i) { var n = new t.Channel(e, i); return 0 === e.indexOf("private-") ? t.Util.extend(n, t.Channel.PrivateChannel) : 0 === e.indexOf("presence-") && (t.Util.extend(n, t.Channel.PrivateChannel), t.Util.extend(n, t.Channel.PresenceChannel)), n.init(), n }
            }(),
            function() {
                t.Channel.Authorizer = function(e, t, i) { this.channel = e, this.type = t, this.authOptions = (i || {}).auth || {} }, t.Channel.Authorizer.prototype = { composeQuery: function(e) { var t = "&socket_id=" + encodeURIComponent(e) + "&channel_name=" + encodeURIComponent(this.channel.name); for (var i in this.authOptions.params) t += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]); return t }, authorize: function(e, i) { return t.authorizers[this.type].call(this, e, i) } }, t.auth_callbacks = {}, t.authorizers = {
                    ajax: function(i, n) {
                        var r = this,
                            a;
                        a = t.XHR ? new t.XHR : e.XMLHttpRequest ? new e.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), a.open("POST", t.channel_auth_endpoint, !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        for (var o in this.authOptions.headers) a.setRequestHeader(o, this.authOptions.headers[o]);
                        return a.onreadystatechange = function() {
                            if (4 == a.readyState)
                                if (200 == a.status) {
                                    var e, i = !1;
                                    try { e = JSON.parse(a.responseText), i = !0 } catch (r) { n(!0, "JSON returned from webapp was invalid, yet status code was 200. Data was: " + a.responseText) }
                                    i && n(!1, e)
                                } else t.warn("Couldn't get auth info from your webapp", a.status), n(!0, a.status)
                        }, a.send(this.composeQuery(i)), a
                    },
                    jsonp: function(e, i) {
                        void 0 !== this.authOptions.headers && t.warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
                        var n = r.createElement("script");
                        t.auth_callbacks[this.channel.name] = function(e) { i(!1, e) };
                        var a = "Pusher.auth_callbacks['" + this.channel.name + "']";
                        n.src = t.channel_auth_endpoint + "?callback=" + encodeURIComponent(a) + this.composeQuery(e);
                        var o = r.getElementsByTagName("head")[0] || r.documentElement;
                        o.insertBefore(n, o.firstChild)
                    }
                }
            }();
            var n = function() {
                function e(e, t) {
                    r.addEventListener ? e.addEventListener("load", t, !1) : e.attachEvent("onreadystatechange", function() {
                        ("loaded" == e.readyState || "complete" == e.readyState) && t()
                    })
                }

                function t(t, i) {
                    var n = r.getElementsByTagName("head")[0],
                        a = r.createElement("script");
                    a.setAttribute("src", t), a.setAttribute("type", "text/javascript"), a.setAttribute("async", !0), e(a, function() { i() }), n.appendChild(a)
                }
                return function(e, i) { for (var n = 0, r = 0; r < e.length; r++) t(e[r], function() { e.length == ++n && setTimeout(i, 0) }) }
            }();
            ! function() {
                !e.WebSocket && e.MozWebSocket && (e.WebSocket = e.MozWebSocket), e.WebSocket && (t.Transport = e.WebSocket, t.TransportType = "native");
                var i = "http:" == r.location.protocol ? t.cdn_http : t.cdn_https,
                    a = i + t.VERSION,
                    o = [];
                e.JSON || o.push(a + "/json2" + t.dependency_suffix + ".js"), e.WebSocket || (e.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0, o.push(a + "/flashfallback" + t.dependency_suffix + ".js"));
                var l = function() { return e.WebSocket ? function() { t.ready() } : function() { e.WebSocket ? (t.Transport = e.WebSocket, t.TransportType = "flash", e.WEB_SOCKET_SWF_LOCATION = "https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf", WebSocket.__addTask(function() { t.ready() }), WebSocket.__initialize()) : (t.Transport = null, t.TransportType = "none", t.ready()) } }(),
                    s = function(e) {
                        var t = function() { r.body ? e() : setTimeout(t, 0) };
                        t()
                    },
                    c = function() { s(l) };
                o.length > 0 ? n(o, c) : c()
            }(), this.Pusher = t
        }.call(n),
        function() {
            var e, t = {}.hasOwnProperty,
                i = function(e, i) {
                    for (var n in i) t.call(i, n) && (e[n] = i[n]);

                    function r() { this.constructor = e }
                    return r.prototype = i.prototype, e.prototype = new r, e.__super__ = i.prototype, e
                };
            e = n.jQuery, n.namespace("utils.pusher", function(t) {
                var r, a, o;
                return a = {}, n.Pusher.prototype.constructor = n.Pusher, r = function(t) {
                    i(n, t);

                    function n() { return o = n.__super__.constructor.apply(this, arguments) }
                    return n.prototype.subscribe = function(e) { return this.disconnectTimeout && (clearTimeout(this.disconnectTimeout), this.disconnectTimeout = null), this.connect(), n.__super__.subscribe.apply(this, arguments) }, n.prototype.unsubscribe = function(t) { var i = this; return n.__super__.unsubscribe.apply(this, arguments), e.isEmptyObject(this.channels.channels) ? this.disconnectTimeout = setTimeout(function() { return i.disconnectTimeout = null, i.disconnect() }, 5e3) : void 0 }, n
                }(n.Pusher), t.getPusher = function(e) { return null == a[e] && (a[e] = new r(e)), a[e].connect(), a[e] }
            })
        }.call(this),
        function() {
            var e, t, i, r = function(e, t) { return function() { return e.apply(t, arguments) } },
                a = {}.hasOwnProperty,
                o = function(e, t) {
                    for (var i in t) a.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            e = n.jQuery, i = n.utils, t = n.utils.pusher, n.namespace("files", function(n) {
                var a, l;
                return n.UrlFile = function(t) {
                    o(n, t), n.prototype.sourceName = "url", n.prototype.allEvents = "progress success error fail";

                    function n(e) {
                        var t, a;
                        if (this.__url = e, this.__listenWatcher = r(this.__listenWatcher, this), n.__super__.constructor.apply(this, arguments), a = i.splitUrlRegex.exec(this.__url)[3].split("/").pop()) try { this.fileName = decodeURIComponent(a) } catch (o) { t = o, this.fileName = a }
                        this.__notifyApi()
                    }
                    return n.prototype.setName = function(e) { return this.fileName = e, this.__realFileName = e, this.__notifyApi() }, n.prototype.setIsImage = function(e) { return this.isImage = e, this.__notifyApi() }, n.prototype.__startUpload = function() {
                        var t, n, r, o, s = this;
                        return n = e.Deferred(), o = new l(this.settings), r = new a(this.settings), t = { pub_key: this.settings.publicKey, signature: this.settings.secureSignature, expire: this.settings.secureExpire, source_url: this.__url, filename: this.__realFileName || "", source: this.sourceInfo.source, store: this.settings.doNotStore ? "" : "auto", jsonerrors: 1 }, i.defer(function() {
                            return "pending" === s.apiDeferred.state() ? i.jsonp("" + s.settings.urlBase + "/from_url/", "GET", t, { headers: { "X-UC-User-Agent": s.settings._userAgent } }).fail(function(e) { return s.settings.debugUploads && i.debug("Can't start upload from URL.", e, t), n.reject() }).done(function(t) {
                                var a;
                                if ("pending" === s.apiDeferred.state()) return s.settings.debugUploads && (i.debug("Start watchers.", t.token), a = setInterval(function() { return i.debug("Still watching.", t.token) }, 5e3), n.done(function() { return i.debug("Stop watchers.", t.token) }).always(function() { return clearInterval(a) })), s.__listenWatcher(n, e([o, r])), n.always(function() { return e([o, r]).off(s.allEvents), o.stopWatching(), r.stopWatching() }), e(o).one(s.allEvents, function() {
                                    return r.interval ? (s.settings.debugUploads && i.debug("Start using pusher.", t.token), r.stopWatching()) : void 0
                                }), o.watch(t.token), r.watch(t.token)
                            }) : void 0
                        }), n
                    }, n.prototype.__listenWatcher = function(t, i) { var n = this; return i.on("progress", function(e, i) { return n.fileSize = i.total, t.notify(i.done / i.total) }).on("success", function(i, r) { return e(i.target).trigger("progress", r), n.fileId = r.uuid, n.__handleFileData(r), t.resolve() }).on("error fail", t.reject) }, n
                }(n.BaseFile), l = function() {
                    function i(e) { this.settings = e; try { this.pusher = t.getPusher(this.settings.pusherKey) } catch (i) { this.pusher = null } }
                    return i.prototype.watch = function(t) { var i, n = this; return this.token = t, this.pusher ? (i = this.pusher.subscribe("task-status-" + this.token), i.bind_all(function(t, i) { return e(n).trigger(t, i) })) : void 0 }, i.prototype.stopWatching = function() { return this.pusher ? this.pusher.unsubscribe("task-status-" + this.token) : void 0 }, i
                }(), a = function() {
                    function t(e) { this.settings = e, this.poolUrl = "" + this.settings.urlBase + "/from_url/status/" }
                    return t.prototype.watch = function(e) { var t, i = this; return this.token = e, (t = function() { return i.interval = setTimeout(function() { return i.__updateStatus().done(function() { return i.interval ? t() : void 0 }) }, 333) })() }, t.prototype.stopWatching = function() { return this.interval && clearTimeout(this.interval), this.interval = null }, t.prototype.__updateStatus = function() { var t = this; return i.jsonp(this.poolUrl, "GET", { token: this.token }, { headers: { "X-UC-User-Agent": this.settings._userAgent } }).fail(function(i) { return e(t).trigger("error") }).done(function(i) { return e(t).trigger(i.status, i) }) }, t
                }()
            })
        }.call(this),
        function() {
            var e, t, i = {}.hasOwnProperty,
                r = function(e, t) {
                    for (var n in t) i.call(t, n) && (e[n] = t[n]);

                    function r() { this.constructor = e }
                    return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
                };
            e = n.jQuery, t = n.utils, n.namespace("files", function(e) {
                return e.UploadedFile = function(e) {
                    r(i, e), i.prototype.sourceName = "uploaded";

                    function i(e) {
                        var n;
                        i.__super__.constructor.apply(this, arguments), n = t.splitCdnUrl(e), n ? (this.fileId = n[1], n[2] && (this.cdnUrlModifiers = n[2])) : this.__rejectApi("baddata")
                    }
                    return i
                }(e.BaseFile), e.ReadyFile = function(e) {
                    r(t, e), t.prototype.sourceName = "uploaded";

                    function t(e) { t.__super__.constructor.apply(this, arguments), e ? (this.fileId = e.uuid, this.__handleFileData(e)) : this.__rejectApi("deleted") }
                    return t
                }(e.BaseFile)
            })
        }.call(this),
        function() {
            var e, t, i, r, a, o, l, s = [].slice,
                c = {}.hasOwnProperty,
                u = function(e, t) {
                    for (var i in t) c.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            t = n.namespace, e = n.jQuery, o = n.utils, l = n.locale, r = l.t, i = n.settings, a = n.files, t("files", function(t) {
                return t.FileGroup = function() {
                    function t(t, n) {
                        var r = this;
                        this.__uuid = null, this.settings = i.build(n), this.__fileColl = new o.CollectionOfPromises(t), this.__allFilesDf = e.when.apply(e, this.files()), this.__fileInfosDf = function() { var i; return t = function() { var t, n, r, a; for (r = this.files(), a = [], t = 0, n = r.length; n > t; t++) i = r[t], a.push(i.then(null, function(t, i) { return e.when(i) })); return a }.call(r), e.when.apply(e, t) }(), this.__createGroupDf = e.Deferred(), this.__initApiDeferred()
                    }
                    return t.prototype.files = function() { return this.__fileColl.get() }, t.prototype.__save = function() { var e = this; return this.__saved ? void 0 : (this.__saved = !0, this.__allFilesDf.done(function() { return e.__createGroup().done(function(t) { return e.__uuid = t.id, e.__buildInfo(function(t) { return e.settings.imagesOnly && !t.isImage ? e.__createGroupDf.reject("image", t) : e.__createGroupDf.resolve(t) }) }).fail(function() { return e.__createGroupDf.reject("createGroup") }) })) }, t.prototype.promise = function() { return this.__save(), this.__apiDf.promise() }, t.prototype.__initApiDeferred = function() { var t, i, n, r = this; return this.__apiDf = e.Deferred(), this.__progressState = "uploading", i = function(e) { return r.__buildInfo(function(t) { return r.__apiDf.reject(e, t) }) }, n = function(e) { return r.__apiDf.resolve(e) }, t = function() { return r.__apiDf.notify(r.__progressInfo()) }, t(), this.__fileColl.onAnyProgress(t), this.__allFilesDf.done(function() { return r.__progressState = "uploaded", t() }).fail(i), this.__createGroupDf.done(function(e) { return r.__progressState = "ready", t(), n(e) }).fail(i) }, t.prototype.__progressInfo = function() { var e, t, i, n, r; for (e = 0, i = this.__fileColl.lastProgresses(), n = 0, r = i.length; r > n; n++) t = i[n], e += ((null != t ? t.progress : void 0) || 0) / i.length; return { state: this.__progressState, uploadProgress: e, progress: "ready" === this.__progressState ? 1 : .9 * e } }, t.prototype.__buildInfo = function(e) { var t; return t = { uuid: this.__uuid, cdnUrl: this.__uuid ? "" + this.settings.cdnBase + "/" + this.__uuid + "/" : null, name: r("file", this.__fileColl.length()), count: this.__fileColl.length(), size: 0, isImage: !0, isStored: !0 }, this.__fileInfosDf.done(function() { var i, n, r, a; for (i = 1 <= arguments.length ? s.call(arguments, 0) : [], n = 0, a = i.length; a > n; n++) r = i[n], t.size += r.size, r.isImage || (t.isImage = !1), r.isStored || (t.isStored = !1); return e(t) }) }, t.prototype.__createGroup = function() { var t, i = this; return t = e.Deferred(), this.__fileColl.length() ? this.__fileInfosDf.done(function() { var e, n; return n = 1 <= arguments.length ? s.call(arguments, 0) : [], o.jsonp("" + i.settings.urlBase + "/group/", "POST", { pub_key: i.settings.publicKey, signature: i.settings.secureSignature, expire: i.settings.secureExpire, files: function() { var t, i, r; for (r = [], t = 0, i = n.length; i > t; t++) e = n[t], r.push("/" + e.uuid + "/" + (e.cdnUrlModifiers || "")); return r }() }, { headers: { "X-UC-User-Agent": i.settings._userAgent } }).fail(function(e) { return i.settings.debugUploads && o.log("Can't create group.", i.settings.publicKey, e), t.reject() }).done(t.resolve) }) : t.reject(), t.promise() }, t.prototype.api = function() { return this.__api || (this.__api = o.bindAll(this, ["promise", "files"])), this.__api }, t
                }(), t.SavedFileGroup = function(e) {
                    u(t, e);

                    function t(e, i) {
                        var r;
                        this.__data = e, r = n.filesFrom("ready", this.__data.files, i), t.__super__.constructor.call(this, r, i)
                    }
                    return t.prototype.__createGroup = function() { return o.wrapToPromise(this.__data) }, t
                }(t.FileGroup)
            }), t("", function(t) {
                return t.FileGroup = function(e, t) {
                    var i, n, r, l, s, c, u, p;
                    for (null == e && (e = []), n = [], l = 0, c = e.length; c > l; l++)
                        if (r = e[l], o.isFile(r)) n.push(r);
                        else if (o.isFileGroup(r))
                        for (p = r.files(), s = 0, u = p.length; u > s; s++) i = p[s], n.push(i);
                    return new a.FileGroup(n, t).api()
                }, t.loadFileGroup = function(t, n) { var r, l, s = this; return n = i.build(n), r = e.Deferred(), l = o.groupIdRegex.exec(t), l ? o.jsonp("" + n.urlBase + "/group/info/", "GET", { jsonerrors: 1, pub_key: n.publicKey, group_id: l[0] }, { headers: { "X-UC-User-Agent": n._userAgent } }).fail(function(e) { return n.debugUploads && o.log("Can't load group info. Probably removed.", l[0], n.publicKey, e), r.reject() }).done(function(e) { var t; return t = new a.SavedFileGroup(e, n), r.resolve(t.api()) }) : r.reject(), r.promise() }
            }), t("utils", function(t) {
                return t.isFileGroup = function(e) { return e && e.files && e.promise }, t.valueToGroup = function(i, r) {
                    var a, o;
                    if (i)
                        if (e.isArray(i)) a = function() { var e, n, a; for (a = [], e = 0, n = i.length; n > e; e++) o = i[e], a.push(t.valueToFile(o, r)); return a }(), i = n.FileGroup(a, r);
                        else if (!t.isFileGroup(i)) return n.loadFileGroup(i, r);
                    return t.wrapToPromise(i || null)
                }, t.isFileGroupsEqual = function(e, i) {
                    var n, r, a, o, l, s;
                    if (e === i) return !0;
                    if (!t.isFileGroup(e) || !t.isFileGroup(i)) return !1;
                    if (r = e.files(), a = i.files(), r.length !== a.length) return !1;
                    for (o = l = 0, s = r.length; s > l; o = ++l)
                        if (n = r[o], n !== a[o]) return !1;
                    return !0
                }
            })
        }.call(this),
        function() {
            var e, t, i, r;
            r = n.utils, e = n.jQuery, t = n.files, i = n.settings, n.namespace("", function(n) { var r; return n.fileFrom = function(e, t, i) { return n.filesFrom(e, [t], i)[0] }, n.filesFrom = function(t, n, a) { var o, l, s, c, u; for (a = i.build(a || {}), u = [], s = 0, c = n.length; c > s; s++) l = n[s], o = null, e.isArray(l) && (o = l[1], l = l[0]), u.push(new r[t](l, a, o).promise()); return u }, r = { object: t.ObjectFile, input: t.InputFile, url: t.UrlFile, uploaded: t.UploadedFile, ready: t.ReadyFile } })
        }.call(this),
        function() {
            var e, t, i;
            i = n.utils, t = n.settings, e = n.jQuery, n.namespace("dragdrop", function(a) {
                return a.support = i.abilities.fileDragAndDrop, a.uploadDrop = function(e, i, r) { return r = t.build(r), a.receiveDrop(e, function(e, t) { return i(r.multiple ? n.filesFrom(e, t, r) : n.fileFrom(e, t[0], r)) }) }, a.support ? (a.receiveDrop = function(t, i) {
                    return a.watchDragging(t), e(t).on({
                        dragover: function(e) { return e.preventDefault(), e.originalEvent.dataTransfer.dropEffect = "copy" },
                        drop: function(t) {
                            var n, r, a, o, l, s;
                            if (t.preventDefault(), n = t.originalEvent.dataTransfer) { if (n.files.length) return i("object", n.files); for (a = [], s = n.getData("text/uri-list").split(), o = 0, l = s.length; l > o; o++) r = s[o], r = e.trim(r), r && "#" !== r[0] && a.push(r); return a ? i("url", a) : void 0 }
                        }
                    })
                }, a.watchDragging = function(t, i) { var n, r, a; return a = !1, r = 0, n = function(i) { return a !== i ? e(t).toggleClass("uploadcare--dragging", a = i) : void 0 }, e(i || t).on({ dragenter: function() { return r += 1, n(!0) }, dragleave: function() { return r -= 1, 0 === r ? n(!1) : void 0 }, "drop mouseenter": function() { return r = 0, n(!1) } }) }, a.watchDragging("body", r)) : a.receiveDrop = function() {}
            })
        }.call(this),
        function() {
            var e, t, i, r, a, o, l = function(e, t) { return function() { return e.apply(t, arguments) } },
                s = {}.hasOwnProperty,
                c = function(e, t) {
                    for (var i in t) s.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            i = n.files, e = n.jQuery, a = n.utils, t = a.abilities, o = n.templates, r = o.tpl, n.namespace("ui.progress", function(i) {
                return i.Circle = function() {
                    function e(e) { this.update = l(this.update, this), t.canvas ? this.renderer = new i.CanvasRenderer(e) : this.renderer = new i.TextRenderer(e), this.observed = null }
                    return e.prototype.listen = function(e, t) { var i, n = this; return this.reset(), i = null != t ? function(e) { return e[t] } : function(e) { return e }, this.observed = e, "resolved" === this.observed.state() ? this.renderer.setValue(1, !0) : this.observed.progress(function(t) { return e === n.observed ? n.renderer.setValue(i(t)) : void 0 }).always(function(t) { return e === n.observed ? n.renderer.setValue(1, !1) : void 0 }), this }, e.prototype.reset = function(e) { return null == e && (e = !1), this.observed = null, this.renderer.setValue(e ? 1 : 0, !0) }, e.prototype.update = function() { return this.renderer.update() }, e
                }(), i.BaseRenderer = function() {
                    function t(t) { this.element = e(t), this.element.data("uploadcare-progress-renderer", this), this.element.addClass("uploadcare--progress") }
                    return t.prototype.update = function() {}, t
                }(), i.TextRenderer = function(e) {
                    c(t, e);

                    function t() { t.__super__.constructor.apply(this, arguments), this.element.addClass("uploadcare--progress_type_text"), this.element.html(r("progress__text")), this.text = this.element.find(".uploadcare--progress__text") }
                    return t.prototype.setValue = function(e) { return e = Math.round(100 * e), this.text.html("" + e + " %") }, t
                }(i.BaseRenderer), i.CanvasRenderer = function(t) {
                    c(i, t);

                    function i() { i.__super__.constructor.apply(this, arguments), this.canvasEl = e("<canvas>").addClass("uploadcare--progress__canvas").get(0), this.element.addClass("uploadcare--progress_type_canvas"), this.element.html(this.canvasEl), this.setValue(0, !0) }
                    return i.prototype.update = function() { var e, t, i, n; return i = Math.floor(Math.min(this.element.width(), this.element.height())), n = 2 * i, i ? ((this.canvasEl.width !== n || this.canvasEl.height !== n) && (this.canvasEl.width = n, this.canvasEl.height = n), t = this.canvasEl.getContext("2d"), e = function(e, n) { var r; return r = -Math.PI / 2, t.beginPath(), t.moveTo(i, i), t.arc(i, i, e, r, r + 2 * Math.PI * n, !1), t.fill() }, t.clearRect(0, 0, n, n), t.globalCompositeOperation = "source-over", t.fillStyle = this.element.css("border-left-color"), e(i - .5, 1), t.fillStyle = this.element.css("color"), e(i, this.val), t.globalCompositeOperation = "destination-out", e(i / 7, 1)) : void 0 }, i.prototype.__animateValue = function(e) { var t, i, n, r = this; return n = this.val, i = new Date, t = e > n ? 2 : -2, this.__animIntervalId = setInterval(function() { var a; return a = n + (new Date - i) / 1e3 * t, a = (t > 0 ? Math.min : Math.max)(a, e), a === e && r.__stopAnimation(), r.__setValue(a) }, 15) }, i.prototype.__stopAnimation = function() { return this.__animIntervalId && clearInterval(this.__animIntervalId), this.__animIntervalId = null }, i.prototype.__setValue = function(e) { return this.val = e, this.update() }, i.prototype.setValue = function(e, t) { return null == t && (t = !1), this.__stopAnimation(), t ? this.__setValue(e) : this.__animateValue(e) }, i
                }(i.BaseRenderer)
            })
        }.call(this),
        function() {
            var e, t, i, r, a, o, l, s;
            e = n.jQuery, a = n.utils, o = n.ui, t = o.progress, l = n.locale, i = l.t, s = n.templates, r = s.tpl, n.namespace("widget", function(n) {
                return n.Template = function() {
                    function n(i, n) { this.settings = i, this.element = n, this.content = e(r("widget")), this.element.after(this.content), this.circle = new t.Circle(this.content.find(".uploadcare--widget__progress").removeClass("uploadcare--widget__progress")), this.content.find(".uploadcare--progress").addClass("uploadcare--widget__progress"), this.statusText = this.content.find(".uploadcare--widget__text"), this.content.toggleClass("uploadcare--widget_option_clearable", this.settings.clearable) }
                    return n.prototype.addButton = function(t, i) { return null == i && (i = ""), e(r("widget-button", { name: t, caption: i })).appendTo(this.content) }, n.prototype.setStatus = function(e) { var t; return t = "uploadcare--widget_status_", this.content.removeClass(t + this.content.attr("data-status")), this.content.attr("data-status", e), this.content.addClass(t + e), this.element.trigger("" + e + ".uploadcare") }, n.prototype.reset = function() { return this.circle.reset(), this.setStatus("ready"), this.__file = null }, n.prototype.loaded = function() { return this.setStatus("loaded"), this.circle.reset(!0) }, n.prototype.listen = function(e) {
                        var t = this;
                        return this.__file = e, this.circle.listen(e, "uploadProgress"), this.setStatus("started"), e.progress(function(n) {
                            if (e === t.__file) switch (n.state) {
                                case "uploading":
                                    return t.statusText.text(i("uploading"));
                                case "uploaded":
                                    return t.statusText.text(i("loadingInfo"))
                            }
                        })
                    }, n.prototype.error = function(e) { return this.statusText.text(i("errors." + (e || "default"))), this.setStatus("error") }, n.prototype.setFileInfo = function(e) { return this.statusText.html(r("widget-file-name", e)).find(".uploadcare--widget__file-name").toggleClass("needsclick", this.settings.systemDialog) }, n
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r, a, o, l, s = function(e, t) { return function() { return e.apply(t, arguments) } };
            a = n.utils, t = n.dragdrop, o = n.locale, i = o.t, e = n.jQuery, l = n.templates, r = l.tpl, n.namespace("widget.tabs", function(n) {
                return n.FileTab = function() {
                    function n(e, t, i, n, a) { this.container = e, this.tabButton = t, this.dialogApi = i, this.settings = n, this.name = a, this.__initTabsList = s(this.__initTabsList, this), this.container.append(r("tab-file")), this.__setupFileButton(), this.__initDragNDrop(), this.__initTabsList() }
                    return n.prototype.__initDragNDrop = function() { var e, i = this; return e = this.container.find(".uploadcare--draganddrop"), a.abilities.fileDragAndDrop ? (t.receiveDrop(e, function(e, t) { return i.dialogApi.addFiles(e, t), i.dialogApi.switchTab("preview") }), e.addClass("uploadcare--draganddrop_supported")) : void 0 }, n.prototype.__setupFileButton = function() { var e, t = this; return e = this.container.find(".uploadcare--tab__action-button"), a.abilities.sendFileAPI ? e.on("click", function() { return a.fileSelectDialog(t.container, t.settings, function(e) { return t.dialogApi.addFiles("object", e.files), t.dialogApi.switchTab("preview") }), !1 }) : a.fileInput(e, this.settings, function(e) { return t.dialogApi.addFiles("input", [e]), t.dialogApi.switchTab("preview") }) }, n.prototype.__initTabsList = function() { var e, t, i, n, r, a, o, l = this; for (t = this.container.find(".uploadcare--file-sources__items"), t.remove(".uploadcare--file-sources__item:not(.uploadcare--file-source_all)"), i = 0, o = this.settings.tabs, r = 0, a = o.length; a > r; r++) n = o[r], "file" !== n && "url" !== n && "camera" !== n && this.dialogApi.isTabVisible(n) && (i += 1, i > 5 || t.append([this.__tabButton(n), " "])); return e = t.find(".uploadcare--file-source_all").on("click", function() { return l.dialogApi.openMenu() }), i > 5 && t.addClass("uploadcare--file-sources__items_many"), this.container.find(".uploadcare--file-sources").attr("hidden", 0 === i) }, n.prototype.__tabButton = function(t) { var n, r, a = this; return r = e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-" + t + "'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--file-source__icon"), n = e("<button>").addClass("uploadcare--button").addClass("uploadcare--button_icon").addClass("uploadcare--file-source").addClass("uploadcare--file-source_" + t).addClass("uploadcare--file-sources__item").attr("type", "button").attr("title", i("dialog.tabs.names." + t)).attr("data-tab", t).append(r).on("click", function() { return a.dialogApi.switchTab(t) }) }, n
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r;
            e = n.jQuery, r = n.templates, i = r.tpl, t = n.locale.t, n.namespace("widget.tabs", function(t) {
                return t.UrlTab = function() {
                    var t, n;
                    n = /^[a-z][a-z0-9+\-.]*:?\/\//,
                        t = function(t) { return t = e.trim(t), n.test(t) ? t : "http://" + t };

                    function r(n, r, a, o, l) {
                        var s, c, u = this;
                        this.container = n, this.tabButton = r, this.dialogApi = a, this.settings = o, this.name = l, this.container.append(i("tab-url")), c = this.container.find(".uploadcare--input"), c.on("change keyup input", function() { return s.attr("disabled", !e.trim(this.value)) }), s = this.container.find(".uploadcare--button[type=submit]").attr("disabled", !0), this.container.find(".uploadcare--form").on("submit", function() {
                            var e;
                            return (e = t(c.val())) && (u.dialogApi.addFiles("url", [
                                [e, { source: "url-tab" }]
                            ]), c.val("").trigger("change")), !1
                        })
                    }
                    return r
                }()
            })
        }.call(this),
        function() {
            var t, i, a, o, l = function(e, t) { return function() { return e.apply(t, arguments) } };
            a = n.utils, t = n.jQuery, o = n.templates, i = o.tpl, n.namespace("widget.tabs", function(n) {
                var o;
                return o = "https:" === r.location.protocol, n.CameraTab = function() {
                    function n(e, t, n, r, a) {
                        var o;
                        if (this.container = e, this.tabButton = t, this.dialogApi = n, this.settings = r, this.name = a, this.__cancelRecording = l(this.__cancelRecording, this), this.__stopRecording = l(this.__stopRecording, this), this.__startRecording = l(this.__startRecording, this), this.__capture = l(this.__capture, this), this.__mirror = l(this.__mirror, this), this.__revoke = l(this.__revoke, this), this.__requestCamera = l(this.__requestCamera, this), this.__setState = l(this.__setState, this), this.__captureInputHandle = l(this.__captureInputHandle, this), this.__captureInput = l(this.__captureInput, this), this.__checkCapture()) this.container.append(i("tab-camera-capture")), this.container.addClass("uploadcare--camera"), this.container.find(".uploadcare--camera__button_type_photo").on("click", this.__captureInput("image/*")), o = this.container.find(".uploadcare--camera__button_type_video").on("click", this.__captureInput("video/*")), this.settings.imagesOnly && o.hide();
                        else {
                            if (!this.__checkCompatibility()) return void this.dialogApi.hideTab(this.name);
                            this.__initCamera()
                        }
                    }
                    return n.prototype.__captureInput = function(e) { var t = this; return function() { return a.fileSelectDialog(t.container, { inputAcceptTypes: e }, t.__captureInputHandle, { capture: "camera" }) } }, n.prototype.__captureInputHandle = function(e) { return this.dialogApi.addFiles("object", e.files), this.dialogApi.switchTab("preview") }, n.prototype.__initCamera = function() { var e, t = this; return this.__loaded = !1, this.mirrored = !0, this.container.append(i("tab-camera")), this.container.addClass("uploadcare--camera"), this.container.addClass("uploadcare--camera_status_requested"), this.container.find(".uploadcare--camera__button_type_capture").on("click", this.__capture), e = this.container.find(".uploadcare--camera__button_type_start-record").on("click", this.__startRecording), this.container.find(".uploadcare--camera__button_type_stop-record").on("click", this.__stopRecording), this.container.find(".uploadcare--camera__button_type_cancel-record").on("click", this.__cancelRecording), this.container.find(".uploadcare--camera__button_type_mirror").on("click", this.__mirror), this.container.find(".uploadcare--camera__button_type_retry").on("click", this.__requestCamera), (!this.MediaRecorder || this.settings.imagesOnly) && e.hide(), this.video = this.container.find(".uploadcare--camera__video"), this.video.on("loadeddata", function() { return this.play() }), this.dialogApi.progress(function(e) { if (e === t.name) { if (!t.__loaded) return t.__requestCamera() } else if (t.__loaded && o) return t.__revoke() }), this.dialogApi.always(this.__revoke) }, n.prototype.__checkCompatibility = function() { var t; return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? this.getUserMedia = function(e, t, i) { return navigator.mediaDevices.getUserMedia(e).then(t)["catch"](i) } : this.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia, this.URL = e.URL || e.webkitURL, this.MediaRecorder = e.MediaRecorder, o || a.warn("Camera is not allowed for HTTP. Please use HTTPS connection."), t = "localhost" === r.location.hostname, !!this.getUserMedia && Uint8Array && (o || t) }, n.prototype.__checkCapture = function() { var e; return e = r.createElement("input"), e.setAttribute("capture", "camera"), !!e.capture }, n.prototype.__setState = function(e) { var t; return t = ["", "ready", "requested", "denied", "not-founded", "recording"].join(" uploadcare--camera_status_"), this.container.removeClass(t).addClass("uploadcare--camera_status_" + e) }, n.prototype.__requestCamera = function() { var e = this; return this.__loaded = !0, this.getUserMedia.call(navigator, { audio: !0, video: { optional: [{ minWidth: 320 }, { minWidth: 640 }, { minWidth: 1024 }, { minWidth: 1280 }, { minWidth: 1920 }] } }, function(t) { return e.__setState("ready"), e.__stream = t, "srcObject" in e.video[0] ? (e.video.prop("srcObject", t), e.video.on("loadedmetadata", function() { return e.video[0].play() })) : (e.URL ? (e.__streamObject = e.URL.createObjectURL(t), e.video.prop("src", e.__streamObject)) : e.video.prop("src", t), e.video[0].play()) }, function(t) { return "NO_DEVICES_FOUND" === t || "DevicesNotFoundError" === t.name ? e.__setState("not-founded") : e.__setState("denied"), e.__loaded = !1 }) }, n.prototype.__revoke = function() { var e; return this.__setState("requested"), this.__loaded = !1, this.__stream ? (this.__streamObject && this.URL.revokeObjectURL(this.__streamObject), this.__stream.getTracks ? t.each(this.__stream.getTracks(), function() { return "function" == typeof this.stop ? this.stop() : void 0 }) : "function" == typeof(e = this.__stream).stop && e.stop(), this.__stream = null) : void 0 }, n.prototype.__mirror = function() { return this.mirrored = !this.mirrored, this.video.toggleClass("uploadcare--camera__video_mirrored", this.mirrored) }, n.prototype.__capture = function() {
                        var e, t, i, n, o, l = this;
                        return n = this.video[0], o = n.videoWidth, i = n.videoHeight, e = r.createElement("canvas"), e.width = o, e.height = i, t = e.getContext("2d"), this.mirrored && (t.translate(o, 0), t.scale(-1, 1)), t.drawImage(n, 0, 0, o, i), a.canvasToBlob(e, "image/jpeg", .9, function(t) {
                            return e.width = e.height = 1, t.name = "camera.jpg", l.dialogApi.addFiles("object", [
                                [t, { source: "camera" }]
                            ]), l.dialogApi.switchTab("preview")
                        })
                    }, n.prototype.__startRecording = function() { var e, t = this; return this.__setState("recording"), this.__chunks = [], e = {}, null !== this.settings.audioBitsPerSecond && (e.audioBitsPerSecond = this.settings.audioBitsPerSecond), null !== this.settings.videoBitsPerSecond && (e.videoBitsPerSecond = this.settings.videoBitsPerSecond), 0 !== Object.keys(e).length ? this.__recorder = new this.MediaRecorder(this.__stream, e) : this.__recorder = new this.MediaRecorder(this.__stream), this.__recorder.start(), this.__recorder.ondataavailable = function(e) { return t.__chunks.push(e.data) } }, n.prototype.__stopRecording = function() {
                        var e = this;
                        return this.__setState("ready"), this.__recorder.onstop = function() {
                            var t, i;
                            return t = new Blob(e.__chunks, { type: e.__recorder.mimeType }), i = e.__guessExtensionByMime(e.__recorder.mimeType), t.name = "record." + i, e.dialogApi.addFiles("object", [
                                [t, { source: "camera" }]
                            ]), e.dialogApi.switchTab("preview"), e.__chunks = []
                        }, this.__recorder.stop()
                    }, n.prototype.__cancelRecording = function() { return this.__setState("ready"), this.__recorder.stop(), this.__chunks = [] }, n.prototype.__guessExtensionByMime = function(e) { var t, i; return i = { mp4: "mp4", ogg: "ogg", webm: "webm", quicktime: "mov", "x-matroska": "mkv" }, "" === e ? "webm" : e && (e = e.split("/"), "video" === e[0] && (e = e.slice(1).join("/"), t = e.split(";")[0], i[t])) ? i[t] : "avi" }, n
                }()
            })
        }.call(this),
        function() {
            var t, i, r, a, o, l, s, c = function(e, t) { return function() { return e.apply(t, arguments) } };
            r = n.locale, l = n.utils, o = n.tabsCss, t = n.jQuery, s = n.locale, a = s.t, i = n.files, n.namespace("widget.tabs", function(r) {
                return r.RemoteTab = function() {
                    function r(e, t, i, n, r) {
                        var a = this;
                        this.container = e, this.tabButton = t, this.dialogApi = i, this.settings = n, this.name = r, this.__createIframe = c(this.__createIframe, this), this.dialogApi.progress(function(e) { return e === a.name && a.__createIframe(), a.__sendMessage({ type: "visibility-changed", visible: e === a.name }) })
                    }
                    return r.prototype.remoteUrl = function() { return "" + this.settings.socialBase + "/window3/" + this.name + "?" + t.param({ lang: this.settings.locale, public_key: this.settings.publicKey, widget_version: n.version, images_only: this.settings.imagesOnly, pass_window_open: this.settings.passWindowOpen }) }, r.prototype.__sendMessage = function(e) { var t, i; return null != (t = this.iframe) && null != (i = t[0].contentWindow) ? i.postMessage(JSON.stringify(e), "*") : void 0 }, r.prototype.__createIframe = function() {
                        var n, r = this;
                        if (!this.iframe) return this.iframe = t("<iframe>", {
                            src: this.remoteUrl(),
                            marginheight: 0,
                            marginwidth: 0,
                            frameborder: 0,
                            allowTransparency: "true"
                        }).addClass("uploadcare--tab__iframe").appendTo(this.container).on("load", function() { var e, t, i, n, a, l, s, c; for (r.iframe.css("opacity", "1"), s = o.urls, i = 0, a = s.length; a > i; i++) t = s[i], r.__sendMessage({ type: "embed-css", url: t }); for (c = o.styles, n = 0, l = c.length; l > n; n++) e = c[n], r.__sendMessage({ type: "embed-css", style: e }) }), this.container.addClass("uploadcare--tab_remote"), n = this.iframe[0].contentWindow, l.registerMessage("file-selected", n, function(e) {
                            var n, a, o;
                            return o = function() {
                                var t, i, n, a, o;
                                if (e.alternatives)
                                    for (o = r.settings.preferredTypes, n = 0, a = o.length; a > n; n++) {
                                        i = o[n], i = l.globRegexp(i);
                                        for (t in e.alternatives)
                                            if (i.test(t)) return e.alternatives[t]
                                    }
                                return e.url
                            }(), a = t.extend({ source: r.name }, e.info || {}), n = new i.UrlFile(o, r.settings, a), e.filename && n.setName(e.filename), null != e.is_image && n.setIsImage(e.is_image), r.dialogApi.addFiles([n.promise()])
                        }), l.registerMessage("open-new-window", n, function(t) { var i, n, a; return r.settings.debugUploads && l.debug("Open new window message.", r.name), (n = e.open(t.url, "_blank")) ? (a = function() { return r.settings.debugUploads && l.debug("Window is closed.", r.name), r.__sendMessage({ type: "navigate", fragment: "" }) }, "closed" in n ? i = setInterval(function() { return n.closed ? (clearInterval(i), a()) : void 0 }, 100) : n.addEventListener("exit", a)) : void l.warn("Can't open new window. Possible blocked.", r.name) }), this.dialogApi.done(function() { return l.unregisterMessage("file-selected", n), l.unregisterMessage("open-new-window", n) })
                    }, r
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r;
            i = n.ui, r = i.progress, t = r.Circle, e = n.jQuery, n.namespace("widget.tabs", function(i) {
                return i.BasePreviewTab = function() {
                    function i(e, t, i, n, r) {
                        var a, o = this;
                        this.container = e, this.tabButton = t, this.dialogApi = i, this.settings = n, this.name = r, this.__initTabButtonCircle(), this.container.addClass("uploadcare--preview"), a = ":not(:disabled)", this.container.on("click", ".uploadcare--preview__back" + a, function() { return o.dialogApi.fileColl.clear() }), this.container.on("click", ".uploadcare--preview__done" + a, this.dialogApi.resolve)
                    }
                    return i.prototype.__initTabButtonCircle = function() { var i, n, r, a, o = this; return r = this.tabButton.find(".uploadcare--panel__icon"), n = e.Deferred(), a = function() { var e, t, i, r, a; for (e = o.dialogApi.fileColl.lastProgresses(), t = 0, r = 0, a = e.length; a > r; r++) i = e[r], t += ((null != i ? i.progress : void 0) || 0) / e.length; return n.notify(t) }, this.dialogApi.fileColl.onAnyProgress(a), this.dialogApi.fileColl.onAdd.add(a), this.dialogApi.fileColl.onRemove.add(a), a(), i = new t(r).listen(n.promise()), this.dialogApi.progress(i.update) }, i
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r, a, o, l, s, c, u, p, d, h, f = function(e, t) { return function() { return e.apply(t, arguments) } },
                g = {}.hasOwnProperty,
                m = function(e, t) {
                    for (var i in t) g.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            l = n.utils, s = n.utils, c = s.abilities, i = c.URL, u = n.ui, r = u.progress, p = n.templates, o = p.tpl, e = n.jQuery, d = n.crop, t = d.CropWidget, h = n.locale, a = h.t, n.namespace("widget.tabs", function(n) {
                return n.PreviewTab = function(n) {
                    m(r, n);

                    function r(t, i, n, a, o) {
                        var l = this;
                        this.container = t, this.tabButton = i, this.dialogApi = n, this.settings = a, this.name = o, this.populateCropSizes = f(this.populateCropSizes, this), this.initImage = f(this.initImage, this), this.__setState = f(this.__setState, this), this.__tryToLoadVideoPreview = f(this.__tryToLoadVideoPreview, this), this.__tryToLoadImagePreview = f(this.__tryToLoadImagePreview, this), this.__setFile = f(this.__setFile, this), r.__super__.constructor.apply(this, arguments), e.each(this.dialogApi.fileColl.get(), function(e, t) { return l.__setFile(t) }), this.dialogApi.fileColl.onAdd.add(this.__setFile), this.widget = null, this.__state = null
                    }
                    return r.prototype.__setFile = function(e) { var t, i, n, r = this; return this.file = e, t = function(t) { return function() { return e === r.file ? t.apply(null, arguments) : void 0 } }, i = l.once(this.__tryToLoadImagePreview), n = l.once(this.__tryToLoadVideoPreview), this.__setState("unknown", {}), this.file.progress(t(function(t) { var a, o, s; return t = t.incompleteFileInfo, o = (t.name || "") + l.readableFileSize(t.size, "", ", "), r.container.find(".uploadcare--preview__file-name").text(o), s = t.sourceInfo, a = l.abilities.Blob, s.file && a && s.file instanceof a ? i(e, s.file).fail(function() { return n(e, s.file) }) : void 0 })), this.file.done(t(function(e) { var t, i; if ("video" !== r.__state) return e.isImage ? "image" !== r.__state ? (i = e.originalUrl, i += "-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/", r.settings.previewUrlCallback && (i = r.settings.previewUrlCallback(i, e)), t = e.originalImageInfo, r.__setState("image", { src: i, name: e.name, info: e }), r.initImage([t.width, t.height], e.cdnUrlModifiers)) : void 0 : r.__setState("regular", { file: e }) })), this.file.fail(t(function(e, t) { return r.__setState("error", { error: e, file: t }) })) }, r.prototype.__tryToLoadImagePreview = function(t, n) { var r, a = this; return r = e.Deferred(), "pending" !== t.state() || !n.size || n.size >= this.settings.multipartMinSize ? r.reject().promise() : (l.image.drawFileToCanvas(n, 1550, 924, "#ffffff", this.settings.imagePreviewMaxSize).done(function(e, n) { return l.canvasToBlob(e, "image/jpeg", .95, function(o) { var l; return r.resolve(), e.width = e.height = 1, "pending" === t.state() && "pending" === a.dialogApi.state() && a.file === t ? (l = i.createObjectURL(o), a.dialogApi.always(function() { return i.revokeObjectURL(l) }), "image" !== a.__state ? (a.__setState("image", { src: l, name: "" }), a.initImage(n)) : void 0) : void 0 }) }).fail(r.reject), r.promise()) }, r.prototype.__tryToLoadVideoPreview = function(t, n) { var r, a, o, s = this; return r = e.Deferred(), i && n.size ? (o = i.createObjectURL(n), a = l.videoLoader(o), a.fail(function() { return i.revokeObjectURL(o), r.reject() }).done(function() { var e; return r.resolve(), s.dialogApi.always(function() { return i.revokeObjectURL(o) }), s.__setState("video"), e = s.container.find(".uploadcare--preview__video"), e.on("loadeddata", function() { var t; return t = e.get(0), t.currentTime = 36e4, e.off("loadeddata") }), e.on("ended", function() { var t; return t = e.get(0), t.currentTime = 0, e.off("ended") }), e.attr("src", o), e.get(0).load() }), r.promise()) : r.reject().promise() }, r.prototype.__setState = function(e, t) { return this.__state = e, t = t || {}, t.crop = this.settings.crop, this.container.empty().append(o("tab-preview-" + e, t)), this.container.removeClass(function(e, t) { return t.split(" ").filter(function(e) { return !!~e.indexOf("uploadcare--preview_status_") }).join(" ") }), "unknown" === e && this.settings.crop && this.container.find(".uploadcare--preview__done").hide(), "error" === e ? this.container.addClass("uploadcare--preview_status_error-" + t.error) : void 0 }, r.prototype.initImage = function(e, i) { var n, r, o, s, c = this; return r = this.container.find(".uploadcare--preview__image"), n = this.container.find(".uploadcare--preview__done"), o = l.imageLoader(r[0]).done(function() { return c.container.addClass("uploadcare--preview_status_loaded") }).fail(function() { return c.file = null, c.__setState("error", { error: "loadImage" }) }), s = function() { return c.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled", !1).attr("tabindex", 0), n.attr("disabled", !1), c.widget = new t(r, e, c.settings.crop[0]), i && c.widget.setSelectionFromModifiers(i), n.on("click", function() { var e; return e = c.widget.applySelectionToFile(c.file), c.dialogApi.fileColl.replace(c.file, e), !0 }) }, this.settings.crop ? (this.container.find(".uploadcare--preview__title").text(a("dialog.tabs.preview.crop.title")), this.container.find(".uploadcare--preview__content").addClass("uploadcare--preview__content_crop"), n.attr("disabled", !0), n.text(a("dialog.tabs.preview.crop.done")), this.populateCropSizes(), this.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled", !0).attr("tabindex", -1), o.done(function() { return l.defer(s) })) : void 0 }, r.prototype.populateCropSizes = function() {
                        var t, i, n, r = this;
                        return t = this.container.find(".uploadcare--crop-sizes"), n = t.children(), i = "uploadcare--crop-sizes__item_current", e.each(this.settings.crop, function(o, s) {
                            var c, u, p, d, h, f;
                            return h = s.preferedSize, h ? (u = l.gcd(h[0], h[1]), c = "" + h[0] / u + ":" + h[1] / u) : c = a("dialog.tabs.preview.crop.free"), d = n.clone().appendTo(t).attr("data-caption", c).on("click", function(n) {
                                "true" !== e(n.currentTarget).attr("aria-disabled") && !e(n.currentTarget).hasClass(i) && r.settings.crop.length > 1 && r.widget && (r.widget.setCrop(s),
                                    t.find(">*").removeClass(i), d.addClass(i))
                            }), h ? (f = l.fitSize(h, [30, 30], !0), d.children().css({ width: Math.max(20, f[0]), height: Math.max(12, f[1]) })) : (p = e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-crop-free'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon"), d.children().append(p).addClass("uploadcare--crop-sizes__icon_free"))
                        }), n.remove(), t.find(">*").eq(0).addClass(i)
                    }, r
                }(n.BasePreviewTab)
            })
        }.call(this),
        function(e) {
            function t(e) { this.targets = e, this.last = null, this.update() }
            t.prototype = {
                update: function() {
                    var t = {};
                    this.targets.each(function(i) {
                        var n = e(this).offset();
                        n.top in t || (t[n.top] = []), t[n.top].push([n.left + this.offsetWidth / 2, this])
                    }), this.rows = t
                },
                find: function(e, t) {
                    var i = 1 / 0,
                        n = this.rows,
                        r, a, o;
                    for (a in n) {
                        var l = Math.abs(a - t);
                        i > l && (i = l, r = n[a])
                    }
                    i = Math.abs(r[0][0] - e), o = r[0][1];
                    for (var s = 1; s < r.length; s++) {
                        var l = Math.abs(r[s][0] - e);
                        i > l && (i = l, o = r[s][1])
                    }
                    return o
                },
                findNotLast: function(e, t) { var i = this.find(e, t); return this.last && i && this.last == i ? null : this.last = i }
            };
            var i = "uploadcareMovable",
                n = "uploadcareSortable",
                a = {};
            a[i] = function(t) {
                t = e.extend({ distance: 4, anyButton: !1, axis: !1, zIndex: 1e3, start: e.noop, move: e.noop, finish: e.noop, items: null, keepFake: !1, touch: !0 }, t);

                function n(e) {
                    if (t.touch) {
                        var i, n;
                        if (n = e.originalEvent.touches, n && n.length) i = n[0];
                        else {
                            if (n = e.originalEvent.changedTouches, !n || !n.length) return;
                            i = n[0]
                        }
                        e.pageX = i.pageX, e.pageY = i.pageY, e.which = 1
                    }
                }
                var a = "mousedown.{} touchstart.{}".replace(/\{}/g, i);
                this.on(a, t.items, null, function(a) {
                    if (n(a), t.anyButton || 1 == a.which) {
                        a.preventDefault();
                        var o = !1,
                            l = e(this),
                            s = !1,
                            c = l.position();
                        c.top += l.offsetParent().scrollTop(), c.left += l.offsetParent().scrollLeft();
                        var u = "mousemove.{} touchmove.{}".replace(/\{}/g, i);
                        e(r).on(u, function(e) {
                            if (n(e), !o && (Math.abs(e.pageX - a.pageX) > t.distance || Math.abs(e.pageY - a.pageY) > t.distance) && (o = !0, s = l.clone().css({ position: "absolute", zIndex: t.zIndex, width: l.width() }).appendTo(l.offsetParent()), t.start({ event: e, dragged: l, fake: s })), o) {
                                e.preventDefault();
                                var i = "y" == t.axis ? 0 : e.pageX - a.pageX,
                                    r = "x" == t.axis ? 0 : e.pageY - a.pageY;
                                s.css({ left: i + c.left, top: r + c.top }), t.move({ event: e, dragged: l, fake: s, dx: i, dy: r })
                            }
                        });
                        var u = "mouseup.{} touchend.{} touchcancel.{} touchleave.{}";
                        e(r).on(u.replace(/\{}/g, i), function(c) {
                            n(c);
                            var u = "mousemove.{} touchmove.{} mouseup.{} touchend.{} touchcancel.{} touchleave.{}";
                            if (e(r).off(u.replace(/\{}/g, i)), o) {
                                c.preventDefault();
                                var p = c.pageX - a.pageX,
                                    d = c.pageY - a.pageY;
                                o = !1, t.finish({ event: c, dragged: l, fake: s, dx: p, dy: d }), t.keepFake || s.remove()
                            }
                        })
                    }
                })
            }, a[n] = function(n) {
                var r = e.extend({ items: ">*" }, n),
                    n = e.extend({ checkBounds: function() { return !0 }, start: e.noop, attach: e.noop, move: e.noop, finish: e.noop }, n),
                    a, o = !1,
                    l = this;
                return r.start = function(e) { n.start(e), a = new t(l.find(r.items).not(e.fake)), o = e.dragged.next() }, r.move = function(t) {
                    if (t.nearest = null, n.checkBounds(t)) {
                        var i = t.fake.offset(),
                            r = a.findNotLast(i.left + t.dragged.width() / 2, i.top);
                        t.nearest = e(r), r && r != t.dragged[0] && (t.dragged.nextAll().filter(r).length > 0 ? t.dragged.insertAfter(r) : t.dragged.insertBefore(r), n.attach(t), a.last = null, a.update())
                    } else null !== a.last && (a.last = null, o.length ? t.dragged.insertBefore(o) : t.dragged.parent().append(t.dragged), n.attach(t), a.update());
                    n.move(t)
                }, r.finish = function(t) {
                    var i = t.fake.offset();
                    t.nearest = null, n.checkBounds(t) && (t.nearest = e(a.find(i.left + t.dragged.width() / 2, i.top))), n.finish(t), a = null
                }, this[i](r)
            }, e.fn.extend(a)
        }(n.jQuery),
        function() {
            var e, t, i, r, a, o, l, s, c, u = function(e, t) { return function() { return e.apply(t, arguments) } },
                p = {}.hasOwnProperty,
                d = function(e, t) {
                    for (var i in t) p.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            o = n.utils, l = n.ui, t = l.progress, s = n.templates, r = s.tpl, e = n.jQuery, c = n.locale, i = c.t, a = n, n.namespace("widget.tabs", function(t) {
                return t.PreviewTabMultiple = function(t) {
                    d(n, t);

                    function n() {
                        this.__fileReplaced = u(this.__fileReplaced, this), this.__fileRemoved = u(this.__fileRemoved, this), this.__fileAdded = u(this.__fileAdded, this), this.__fileFailed = u(this.__fileFailed, this), this.__fileDone = u(this.__fileDone, this), this.__fileProgress = u(this.__fileProgress, this), this.__updateContainerView = u(this.__updateContainerView, this);
                        var t = this;
                        n.__super__.constructor.apply(this, arguments), this.container.append(r("tab-preview-multiple")), this.__fileTpl = e(r("tab-preview-multiple-file")), this.fileListEl = this.container.find(".uploadcare--files"), this.doneBtnEl = this.container.find(".uploadcare--preview__done"), e.each(this.dialogApi.fileColl.get(), function(e, i) { return t.__fileAdded(i) }), this.__updateContainerView(), this.dialogApi.fileColl.onAdd.add(this.__fileAdded, this.__updateContainerView), this.dialogApi.fileColl.onRemove.add(this.__fileRemoved, this.__updateContainerView), this.dialogApi.fileColl.onReplace.add(this.__fileReplaced, this.__updateContainerView), this.dialogApi.fileColl.onAnyProgress(this.__fileProgress), this.dialogApi.fileColl.onAnyDone(this.__fileDone), this.dialogApi.fileColl.onAnyFail(this.__fileFailed), this.fileListEl.addClass(this.settings.imagesOnly ? "uploadcare--files_type_tiles" : "uploadcare--files_type_table"), this.__setupSorting()
                    }
                    return n.prototype.__setupSorting = function() { var e = this; return this.fileListEl.uploadcareSortable({ touch: !1, axis: this.settings.imagesOnly ? "xy" : "y", start: function(e) { return e.dragged.css("visibility", "hidden") }, finish: function(t) { var i, n; return t.dragged.css("visibility", "visible"), i = e.container.find(".uploadcare--file"), n = function(t) { return i.index(e.__fileToEl(t)) }, e.dialogApi.fileColl.sort(function(e, t) { return n(e) - n(t) }) } }) }, n.prototype.__updateContainerView = function() { var e, t, n, r, a, o, l; return t = this.dialogApi.fileColl.length(), o = t > this.settings.multipleMax, a = t < this.settings.multipleMin, n = o || a, this.doneBtnEl.attr("disabled", n), r = i("dialog.tabs.preview.multiple.question").replace("%files%", i("file", t)), this.container.find(".uploadcare--preview__title").text(r), e = this.container.find(".uploadcare--preview__message"), e.empty(), n ? (l = o ? i("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%", this.settings.multipleMax) : t && a ? i("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%", this.settings.multipleMin).replace("%files%", i("file", t)) : void 0, e.addClass("uploadcare--error").text(l)) : void 0 }, n.prototype.__updateFileInfo = function(e, t) { var n; return n = t.name || i("dialog.tabs.preview.unknownName"), e.find(".uploadcare--file__name").text(n), e.find(".uploadcare--file__description").attr("title", i("dialog.tabs.preview.multiple.file.preview").replace("%file%", n)), e.find(".uploadcare--file__remove").attr("title", i("dialog.tabs.preview.multiple.file.remove").replace("%file%", n)), e.find(".uploadcare--file__size").text(o.readableFileSize(t.size, "–")) }, n.prototype.__fileProgress = function(e, t) { var i; return i = this.__fileToEl(e), i.find(".uploadcare--progressbar__value").css("width", Math.round(100 * t.progress) + "%"), this.__updateFileInfo(i, t.incompleteFileInfo) }, n.prototype.__fileDone = function(t, i) { var n, r, o, l = this; return r = this.__fileToEl(t).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_uploaded"), r.find(".uploadcare--progressbar__value").css("width", "100%"), this.__updateFileInfo(r, i), i.isImage ? (n = "" + i.cdnUrl + "-/quality/lightest/-/preview/108x108/", this.settings.previewUrlCallback && (n = this.settings.previewUrlCallback(n, i)), o = e("<img>").attr("src", n).addClass("uploadcare--file__icon")) : o = e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-file'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--file__icon"), r.find(".uploadcare--file__preview").html(o), r.find(".uploadcare--file__description").on("click", function() { return a.openPreviewDialog(t, l.settings).done(function(e) { return l.dialogApi.fileColl.replace(t, e) }) }) }, n.prototype.__fileFailed = function(t, n, r) { var a, o; return a = this.__fileToEl(t).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_error"), a.find(".uploadcare--file__error").text(i("errors." + n)), o = e("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-error'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--file__icon"), a.find(".uploadcare--file__preview").html(o) }, n.prototype.__fileAdded = function(e) {
                        var t;
                        return t = this.__createFileEl(e), t.appendTo(this.fileListEl)
                    }, n.prototype.__fileRemoved = function(t) { return this.__fileToEl(t).remove(), e(t).removeData() }, n.prototype.__fileReplaced = function(e, t) { var i; return i = this.__createFileEl(t), i.insertAfter(this.__fileToEl(e)), this.__fileRemoved(e) }, n.prototype.__fileToEl = function(t) { return e(t).data("dpm-el") || e() }, n.prototype.__createFileEl = function(t) { var i, n = this; return i = this.__fileTpl.clone().on("click", ".uploadcare--file__remove", function() { return n.dialogApi.fileColl.remove(t) }), e(t).data("dpm-el", i), i }, n
                }(t.BasePreviewTab)
            })
        }.call(this),
        function() {
            var t, i, a, o, l, s, c, u, p, d, h = function(e, t) { return function() { return e.apply(t, arguments) } };
            c = n.utils, u = n.locale, o = u.t, p = n.templates, s = p.tpl, i = n.files, d = n.widget, l = d.tabs, a = n.settings, t = n.jQuery, n.namespace("", function(u) {
                var p, d, f, g, m, _ = this;
                return f = function(e, t) {
                    var i, n;
                    return n = e.scrollTop(), i = e.scrollLeft(), t && e.scrollTop(0).scrollLeft(0),
                        function() { return e.scrollTop(n).scrollLeft(i) }
                }, t(e).on("keydown", function(e) { return u.isDialogOpened() && 27 === e.which ? (e.stopImmediatePropagation(), "undefined" != typeof d && null !== d ? d.reject() : void 0) : void 0 }), d = null, g = "uploadcare--page", u.isDialogOpened = function() { return null !== d }, u.closeDialog = function() {
                    var e;
                    e = [];
                    while (d) e.push(d.reject());
                    return e
                }, u.openDialog = function(i, n, a) { var o, l, c; return u.closeDialog(), l = t(s("dialog")).appendTo("body"), c = u.openPanel(l.find(".uploadcare--dialog__placeholder"), i, n, a), l.find(".uploadcare--panel").addClass("uploadcare--dialog__panel"), l.addClass("uploadcare--dialog_status_active"), c.dialogElement = l, o = f(t(e), "absolute" === l.css("position")), t("html, body").addClass(g), l.find(".uploadcare--dialog__close").on("click", c.reject), l.on("dblclick", function(e) { var i; if (t.contains(r.documentElement, e.target) && (i = ".uploadcare--dialog__panel, .uploadcare--dialog__powered-by", !t(e.target).is(i) && !t(e.target).parents(i).length)) return c.reject() }), d = c.always(function() { return t("html, body").removeClass(g), d = null, l.remove(), o() }) }, u.openPreviewDialog = function(e, i) { var r, a, o = this; return a = d, d = null, i = t.extend({}, i, { multiple: !1, tabs: "" }), r = n.openDialog(e, "preview", i), null != a && a.dialogElement.addClass("uploadcare--dialog_status_inactive"), r.always(function() { return d = a, null != a ? (t("html, body").addClass(g), a.dialogElement.removeClass("uploadcare--dialog_status_inactive")) : void 0 }), r.onTabVisibility(function(e, t) { return "preview" !== e || t ? void 0 : r.reject() }), r }, u.openPanel = function(e, i, r, o) { var l, s; return t.isPlainObject(r) && (o = r, r = null), i ? c.isFileGroup(i) ? i = i.files() : t.isArray(i) || (i = [i]) : i = [], o = a.build(o), s = new p(o, e, i, r).publicPromise(), l = function(e) { return o.multiple ? n.FileGroup(e, o) : e[0] }, c.then(s, l, l).promise(s) }, m = {}, u.registerTab = function(e, t) { return m[e] = t }, u.registerTab("file", l.FileTab), u.registerTab("url", l.UrlTab), u.registerTab("camera", l.CameraTab), u.registerTab("facebook", l.RemoteTab), u.registerTab("dropbox", l.RemoteTab), u.registerTab("gdrive", l.RemoteTab), u.registerTab("gphotos", l.RemoteTab), u.registerTab("instagram", l.RemoteTab), u.registerTab("flickr", l.RemoteTab), u.registerTab("vk", l.RemoteTab), u.registerTab("evernote", l.RemoteTab), u.registerTab("box", l.RemoteTab), u.registerTab("skydrive", l.RemoteTab), u.registerTab("huddle", l.RemoteTab), u.registerTab("empty-pubkey", function(e, t, i, n) { return e.append(n._emptyKeyText) }), u.registerTab("preview", function(e, t, i, n, r) { var a; if (n.previewStep || 0 !== i.fileColl.length()) return new(a = n.multiple ? l.PreviewTabMultiple : l.PreviewTab)(e, t, i, n, r) }), p = function() {
                    function e(e, i, n, r) {
                        var a, o = this;
                        this.settings = e, this.openMenu = h(this.openMenu, this), this.isTabVisible = h(this.isTabVisible, this), this.hideTab = h(this.hideTab, this), this.showTab = h(this.showTab, this), this.switchTab = h(this.switchTab, this), this.__closePanel = h(this.__closePanel, this), this.__updateFooter = h(this.__updateFooter, this), this.__reject = h(this.__reject, this), this.__resolve = h(this.__resolve, this), this.addFiles = h(this.addFiles, this), this.dfd = t.Deferred(), this.dfd.always(this.__closePanel), a = ".uploadcare--panel", this.content = t(s("dialog__panel")), this.panel = this.content.find(a).add(this.content.filter(a)), this.placeholder = t(i), this.placeholder.replaceWith(this.content), this.panel.append(t(s("icons"))), this.settings.multiple && this.panel.addClass("uploadcare--panel_multiple"), this.panel.find(".uploadcare--menu__toggle").on("click", function() { return o.panel.find(".uploadcare--menu").toggleClass("uploadcare--menu_opened") }), this.files = new c.CollectionOfPromises(n), this.files.onRemove.add(function() { return 0 === o.files.length() ? o.hideTab("preview") : void 0 }), this.__autoCrop(this.files), this.tabs = {}, this.__prepareFooter(), this.onTabVisibility = t.Callbacks().add(function(e, t) { return o.panel.find(".uploadcare--menu__item_tab_" + e).toggleClass("uploadcare--menu__item_hidden", !t) }), this.settings.publicKey ? this.__prepareTabs(r) : this.__welcome()
                    }
                    return e.prototype.publicPromise = function() { return this.promise || (this.promise = this.dfd.promise({ reject: this.__reject, resolve: this.__resolve, fileColl: this.files, addFiles: this.addFiles, switchTab: this.switchTab, hideTab: this.hideTab, showTab: this.showTab, isTabVisible: this.isTabVisible, openMenu: this.openMenu, onTabVisibility: c.publicCallbacks(this.onTabVisibility) })), this.promise }, e.prototype.addFiles = function(e, t) { var i, n, r; for (t && (e = u.filesFrom(e, t, this.settings)), this.settings.multiple || (this.files.clear(), e = [e[0]]), n = 0, r = e.length; r > n; n++) i = e[n], this.settings.multipleMaxStrict && this.files.length() >= this.settings.multipleMax ? i.cancel() : this.files.add(i); return this.settings.previewStep ? (this.showTab("preview"), this.settings.multiple ? void 0 : this.switchTab("preview")) : this.__resolve() }, e.prototype.__autoCrop = function(e) {
                        var t, i, n, r, a = this;
                        if (this.settings.crop && this.settings.multiple) {
                            for (r = this.settings.crop, i = 0, n = r.length; n > i; i++)
                                if (t = r[i], !t.preferedSize) return;
                            return e.autoThen(function(e) { var t, i; return !e.isImage || e.cdnUrlModifiers || e.crop ? e : (t = e.originalImageInfo, i = c.fitSize(a.settings.crop[0].preferedSize, [t.width, t.height], !0), c.applyCropCoordsToInfo(e, a.settings.crop[0], [t.width, t.height], { width: i[0], height: i[1], left: Math.round((t.width - i[0]) / 2), top: Math.round((t.height - i[1]) / 2) })) })
                        }
                    }, e.prototype.__resolve = function() { return this.dfd.resolve(this.files.get()) }, e.prototype.__reject = function() { return this.dfd.reject(this.files.get()) }, e.prototype.__prepareTabs = function(e) { var t, i, n, r; for (this.addTab("preview"), r = this.settings.tabs, i = 0, n = r.length; n > i; i++) t = r[i], this.addTab(t); return this.files.length() ? (this.showTab("preview"), this.switchTab("preview")) : (this.hideTab("preview"), this.switchTab(e || this.__firstVisibleTab())), 0 === this.settings.tabs.length ? (this.panel.addClass("uploadcare--panel_menu-hidden"), this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--panel__menu_hidden")) : void 0 }, e.prototype.__prepareFooter = function() { var e, t = this; return this.footer = this.panel.find(".uploadcare--panel__footer"), e = ":not(:disabled)", this.footer.on("click", ".uploadcare--panel__show-files" + e, function() { return t.switchTab("preview") }), this.footer.on("click", ".uploadcare--panel__done" + e, this.__resolve), this.__updateFooter(), this.files.onAdd.add(this.__updateFooter), this.files.onRemove.add(this.__updateFooter) }, e.prototype.__updateFooter = function() { var e, t, n; return i = this.files.length(), n = i > this.settings.multipleMax, t = i < this.settings.multipleMin, this.footer.find(".uploadcare--panel__done").attr("disabled", n || t), this.footer.find(".uploadcare--panel__show-files").attr("disabled", 0 === i), e = n ? o("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%", this.settings.multipleMax) : i && t ? o("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%", this.settings.multipleMin) : o("dialog.tabs.preview.multiple.title"), this.footer.find(".uploadcare--panel__message").toggleClass("uploadcare--panel__message_hidden", 0 === i).toggleClass("uploadcare--error", n || t).text(e.replace("%files%", o("file", i))), this.footer.find(".uploadcare--panel__file-counter").toggleClass("uploadcare--error", n || t).text(i ? "(" + i + ")" : "") }, e.prototype.__closePanel = function() { return this.panel.replaceWith(this.placeholder), this.content.remove() }, e.prototype.addTab = function(e) {
                        var i, n, r, a, l = this;
                        if (!(e in this.tabs)) {
                            if (i = m[e], !i) throw new Error("No such tab: " + e);
                            return a = t("<div>").addClass("uploadcare--tab").addClass("uploadcare--tab_name_" + e).insertBefore(this.footer), r = "preview" === e ? t('<div class="uploadcare--menu__icon uploadcare--panel__icon">') : t("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-" + e + "'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--menu__icon"), n = t("<div>", { role: "button", tabindex: "0" }).addClass("uploadcare--menu__item").addClass("uploadcare--menu__item_tab_" + e).attr("title", o("dialog.tabs.names." + e)).append(r).appendTo(this.panel.find(".uploadcare--menu__items")).on("click", function() { return e === l.currentTab ? l.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened") : l.switchTab(e) }), this.tabs[e] = new i(a, n, this.publicPromise(), this.settings, e)
                        }
                    }, e.prototype.switchTab = function(e) { var t; if (e && this.currentTab !== e) return this.currentTab = e, this.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened").attr("data-current", e), this.panel.find(".uploadcare--menu__item").removeClass("uploadcare--menu__item_current").filter(".uploadcare--menu__item_tab_" + e).addClass("uploadcare--menu__item_current"), t = "uploadcare--tab", this.panel.find("." + t).removeClass("" + t + "_current").filter("." + t + "_name_" + e).addClass("" + t + "_current"), this.dfd.notify(e) }, e.prototype.showTab = function(e) { return this.onTabVisibility.fire(e, !0) }, e.prototype.hideTab = function(e) { return this.onTabVisibility.fire(e, !1), this.currentTab === e ? this.switchTab(this.__firstVisibleTab()) : void 0 }, e.prototype.isTabVisible = function(e) { return !this.panel.find(".uploadcare--menu__item_tab_" + e).is(".uploadcare--menu__item_hidden") }, e.prototype.openMenu = function() { return this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--menu_opened") }, e.prototype.__firstVisibleTab = function() {
                        var e, t, i, n;
                        for (n = this.settings.tabs, t = 0, i = n.length; i > t; t++)
                            if (e = n[t], this.isTabVisible(e)) return e
                    }, e.prototype.__welcome = function() { var e, t, i, n; for (this.addTab("empty-pubkey"), this.switchTab("empty-pubkey"), n = this.settings.tabs, t = 0, i = n.length; i > t; t++) e = n[t], this.__addFakeTab(e); return null }, e.prototype.__addFakeTab = function(e) { var i; return i = t("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-" + e + "'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--menu__icon"), "empty-pubkey" === e && i.addClass("uploadcare--panel__icon"), t("<div>").addClass("uploadcare--menu__item").addClass("uploadcare--menu__item_tab_" + e).attr("aria-disabled", !0).attr("title", o("dialog.tabs.names." + e)).append(i).appendTo(this.panel.find(".uploadcare--menu__items")) }, e
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r, a, o = function(e, t) { return function() { return e.apply(t, arguments) } };
            r = n.utils, e = n.jQuery, t = n.dragdrop, a = n.locale, i = a.t, n.namespace("widget", function(a) {
                return a.BaseWidget = function() {
                    function l(t, i) {
                        var n = this;
                        this.element = t, this.settings = i, this.reloadInfo = o(this.reloadInfo, this), this.__setObject = o(this.__setObject, this), this.__reset = o(this.__reset, this), this.validators = this.settings.validators = [], this.currentObject = null, this.__onDialogOpen = e.Callbacks(), this.__onUploadComplete = e.Callbacks(), this.__onChange = e.Callbacks().add(function(e) { return null != e ? e.promise().done(function(e) { return n.__onUploadComplete.fire(e) }) : void 0 }), this.__setupWidget(), this.element.on("change.uploadcare", this.reloadInfo), this.__hasValue = !1, r.defer(function() { return n.__hasValue ? void 0 : n.reloadInfo() })
                    }
                    return l.prototype.__setupWidget = function() { var e, n = this; return this.template = new a.Template(this.settings, this.element), e = ["buttons.choose"], e.push(this.settings.imagesOnly ? "images" : "files"), e.push(this.settings.multiple ? "other" : "one"), this.template.addButton("open", i(e.join("."))).toggleClass("needsclick", this.settings.systemDialog).on("click", function() { return n.openDialog() }), this.template.addButton("cancel", i("buttons.cancel")).on("click", function() { return n.__setObject(null) }), this.template.addButton("remove", i("buttons.remove")).on("click", function() { return n.__setObject(null) }), this.template.content.on("click", ".uploadcare--widget__file-name", function() { return n.openDialog() }), t.receiveDrop(this.template.content, this.__handleDirectSelection), this.template.reset() }, l.prototype.__infoToValue = function(e) { return e.cdnUrlModifiers || this.settings.pathValue ? e.cdnUrl : e.uuid }, l.prototype.__reset = function() { var e; return e = this.currentObject, this.currentObject = null, null != e && "function" == typeof e.cancel && e.cancel(), this.template.reset() }, l.prototype.__setObject = function(e) { return e !== this.currentObject ? (this.__reset(), e ? (this.currentObject = e, this.__watchCurrentObject()) : this.element.val(""), this.__onChange.fire(this.currentObject)) : void 0 }, l.prototype.__watchCurrentObject = function() { var e, t = this; return e = this.__currentFile(), e ? (this.template.listen(e), e.done(function(i) { return e === t.__currentFile() ? t.__onUploadingDone(i) : void 0 }).fail(function(i) { return e === t.__currentFile() ? t.__onUploadingFailed(i) : void 0 })) : void 0 }, l.prototype.__onUploadingDone = function(e) { return this.element.val(this.__infoToValue(e)), this.template.setFileInfo(e), this.template.loaded() }, l.prototype.__onUploadingFailed = function(e) { return this.template.reset(), this.template.error(e) }, l.prototype.__setExternalValue = function(e) { return this.__setObject(r.valueToFile(e, this.settings)) }, l.prototype.value = function(e) { return void 0 !== e ? (this.__hasValue = !0, this.__setExternalValue(e), this) : this.currentObject }, l.prototype.reloadInfo = function() { return this.value(this.element.val()) }, l.prototype.openDialog = function(e) { var t = this; return this.settings.systemDialog ? r.fileSelectDialog(this.template.content, this.settings, function(e) { return t.__handleDirectSelection("object", e.files) }) : this.__openDialog(e) }, l.prototype.__openDialog = function(e) { var t; return t = n.openDialog(this.currentObject, e, this.settings), this.__onDialogOpen.fire(t), t.done(this.__setObject) }, l.prototype.api = function() { return this.__api || (this.__api = r.bindAll(this, ["openDialog", "reloadInfo", "value", "validators"]), this.__api.onChange = r.publicCallbacks(this.__onChange), this.__api.onUploadComplete = r.publicCallbacks(this.__onUploadComplete), this.__api.onDialogOpen = r.publicCallbacks(this.__onDialogOpen), this.__api.inputElement = this.element.get(0)), this.__api }, l
                }()
            })
        }.call(this),
        function() {
            var e, t, i, r = function(e, t) { return function() { return e.apply(t, arguments) } },
                a = {}.hasOwnProperty,
                o = function(e, t) {
                    for (var i in t) a.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            i = n.utils, t = n.files, e = n.jQuery, n.namespace("widget", function(e) {
                var t;
                return e.Widget = function(e) {
                    o(i, e);

                    function i() { return this.__handleDirectSelection = r(this.__handleDirectSelection, this), t = i.__super__.constructor.apply(this, arguments) }
                    return i.prototype.__currentFile = function() { return this.currentObject }, i.prototype.__handleDirectSelection = function(e, t) { var i; return i = n.fileFrom(e, t[0], this.settings), this.settings.systemDialog || !this.settings.previewStep ? this.__setObject(i) : this.__openDialog("preview").addFiles([i]) }, i
                }(e.BaseWidget), e.Widget._name = "SingleWidget"
            })
        }.call(this),
        function() {
            var e, t, i, r, a = function(e, t) { return function() { return e.apply(t, arguments) } },
                o = {}.hasOwnProperty,
                l = function(e, t) {
                    for (var i in t) o.call(t, i) && (e[i] = t[i]);

                    function n() { this.constructor = e }
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                };
            i = n.utils, e = n.jQuery, r = n.locale, t = r.t, n.namespace("widget", function(e) {
                var r;
                return e.MultipleWidget = function(e) {
                    l(o, e);

                    function o() { return this.__handleDirectSelection = a(this.__handleDirectSelection, this), this.__setObject = a(this.__setObject, this), r = o.__super__.constructor.apply(this, arguments) }
                    return o.prototype.__currentFile = function() { var e; return null != (e = this.currentObject) ? e.promise() : void 0 }, o.prototype.__setObject = function(e) { return i.isFileGroupsEqual(this.currentObject, e) ? e ? void 0 : (this.__reset(), this.element.val("")) : o.__super__.__setObject.apply(this, arguments) }, o.prototype.__setExternalValue = function(e) {
                        var n, r = this;
                        return this.__lastGroupPr = n = i.valueToGroup(e, this.settings), e && (this.template.setStatus("started"), this.template.statusText.text(t("loadingInfo"))),
                            n.done(function(e) { return r.__lastGroupPr === n ? r.__setObject(e) : void 0 }).fail(function() { return r.__lastGroupPr === n ? r.__onUploadingFailed("createGroup") : void 0 })
                    }, o.prototype.__handleDirectSelection = function(e, t) { var i; return i = n.filesFrom(e, t, this.settings), this.settings.systemDialog ? this.__setObject(n.FileGroup(i, this.settings)) : this.__openDialog("preview").addFiles(i) }, o
                }(e.BaseWidget), e.MultipleWidget._name = "MultipleWidget"
            })
        }.call(this),
        function() {
            var t, i, r;
            r = n.utils, i = n.settings, t = n.jQuery, n.namespace("", function(n) { var a, o, l, s, c; return o = "uploadcareWidget", c = '[role~="uploadcare-uploader"]', n.initialize = function(e) { var i, n, r, a, o, s; for (null == e && (e = ":root"), n = [], s = t(e), a = 0, o = s.length; o > a; a++) i = s[a], r = l(i.querySelectorAll(c)), n = n.concat(r); return n }, l = function(e) { var i, n, r, a, l; for (l = [], r = 0, a = e.length; a > r; r++) i = e[r], n = t(i).data(o), n && n.inputElement === i || l.push(s(i)); return l }, n.SingleWidget = function(e) { return s(e, n.widget.Widget) }, n.MultipleWidget = function(e) { return s(e, n.widget.MultipleWidget) }, n.Widget = function(e) { return s(e) }, s = function(e, l) { var s, c, u, p, d; if (u = t(e), 0 === u.length) throw new Error("No DOM elements found matching selector"); if (u.length > 1 && r.warn("There are multiple DOM elements matching selector"), e = u.eq(0), p = i.build(e.data()), s = p.multiple ? n.widget.MultipleWidget : n.widget.Widget, l && s !== l) throw new Error("This element should be processed using " + s._name); return c = e.data(o), c && c.inputElement === e[0] || (a(e), d = new s(e, p), c = d.api(), e.data(o, c), d.template.content.data(o, c)), c }, a = function(e) { return e.off(".uploadcare").each(function() { var e, i; return i = t(this).next(".uploadcare--widget"), e = i.data(o), e && e.inputElement === this ? i.remove() : void 0 }) }, n.start = r.once(function(e, t) { return e = i.common(e, t), t ? void 0 : (e.live && setInterval(n.initialize, 100), n.initialize()) }), t(function() { return e.UPLOADCARE_MANUAL_START ? void 0 : n.start() }) })
        }.call(this),
        function() {
            var e, t, i, a, o, l;
            e = n.jQuery, t = function(e) { var t; return t = "[data-status=started], [data-status=error]", !e.find(".uploadcare--widget").is(t) }, a = function(e, t) { return e.attr("data-uploadcare-submitted", t), e.find(":submit").attr("disabled", t) }, l = '[role~="uploadcare-upload-form"]', o = l + "[data-uploadcare-submitted]", e(r).on("submit", l, function() { var i; return i = e(this), t(i) ? !0 : (a(i, !0), !1) }), e(r).on("loaded.uploadcare", o, function() { return e(this).submit() }), i = "ready.uploadcare error.uploadcare", e(r).on(i, o, function() { var i; return i = e(this), t(i) ? a(i, !1) : void 0 })
        }.call(this),
        function() {
            var e, t, i, a;
            a = n.utils, e = n.jQuery, t = [".uploadcare--menu__item", ".uploadcare--file__description", ".uploadcare--crop-sizes__item"].join(", "), i = "uploadcare--mouse-focused", e(r.documentElement).on("mousedown", t, function(t) { return a.defer(function() { var t; return t = r.activeElement, t && t !== r.body ? e(t).addClass(i).one("blur", function() { return e(t).removeClass(i) }) : void 0 }) }).on("keypress", t, function(t) { return 13 === t.which || 32 === t.which ? (e(this).click(), t.preventDefault(), t.stopPropagation()) : void 0 })
        }.call(this),
        function() {
            var e;
            e = n.expose, e("globals", n.settings.common), e("start"), e("initialize"), e("fileFrom"), e("filesFrom"), e("FileGroup"), e("loadFileGroup"), e("openDialog"), e("closeDialog"), e("openPanel"), e("registerTab"), e("Circle", n.ui.progress.Circle), e("SingleWidget"), e("MultipleWidget"), e("Widget"), e("tabsCss"), e("dragdrop.support"), e("dragdrop.receiveDrop"), e("dragdrop.uploadDrop")
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.ar = { uploading: "جاري الرفع... الرجاء الانتظار", loadingInfo: "جار تحميل المعلومات ...", errors: { "default": "خطأ", baddata: "قيمة غير صحيحة", size: "ملف كبير جداً", upload: "يتعذر الرفع", user: "تم إلغاء الرفع", info: "يتعذر تحميل المعلومات", image: "يسمح بالصور فقط", createGroup: "لا يمكن إنشاء مجموعة ملفات", deleted: "تم حذف الملف" }, draghere: "أسقط ملف هنا", file: { one: "%1 ملف", other: "%1 ملفات" }, buttons: { cancel: "إلغاء", remove: "إزالة", choose: { files: { one: "اختر ملف", other: "اختر ملفات" }, images: { one: "اختر صورة", other: "اختر صور" } } }, dialog: { close: "أغلق", openMenu: "افتح القائمة", done: "موافق", showFiles: "اظهار الملفات", tabs: { names: { "empty-pubkey": "مرحبا!", preview: "معاينة", file: "ملفات محلية", url: "رابط مباشر", camera: "كاميرا", facebook: "فيس بوك", dropbox: "دروب بوكس", gdrive: "جوجل دريف", gphotos: "صور غوغل", instagram: "إينستجرام", vk: "في كي", evernote: "إيفرنوت", box: "بوكس", skydrive: "ون درايف", flickr: "فليكر", huddle: "هادل" }, file: { drag: "سحب وإفلات<br>أي ملف", nodrop: "رفع ملفات من&nbsp;الحاسوب", cloudsTip: "مخازن على السحابة<br>والشبكات الاجتماعية", or: "أو", button: "اختر ملف محلي", also: "أو اختر من" }, url: { title: "ملفات من شبكة الإنترنت", line1: "التقاط أي ملف من على شبكة الإنترنت", line2: "فقط قم بتوفير الرابط", input: "الصق الرابط هنا...", button: "رفع" }, camera: { title: "ملف من كاميرا الويب", capture: "التقاط صورة", mirror: "عكس الصورة", startRecord: "سجل فيديو", stopRecord: "توقف", cancelRecord: "إلغاء", retry: "طلب الإذن مرة أخرى", pleaseAllow: { title: "يرجى السماح بالوصول إلى الكاميرا", text: "تمت مطالبتك بالسماح بالدخول إلى الكاميرا من هذا الموقع<br>من أجل التقاط الصور من الكاميرا يجب عليك الموافقة على هذا الطلب" }, notFound: { title: "لم يتم اكتشاف أي كاميرا", text: "يبدو أنه ليس لديك كاميرا متصلة بهذا الجهاز" } }, preview: { unknownName: "غير معروف", change: "إلغاء", back: "الرجوع", done: "إضافة", unknown: { title: "جار الرفع ... يرجى الانتظار للحصول على معاينة", done: "تخطي المعاينة والقبول" }, regular: { title: "إضافة هذا الملف؟", line1: "أنت على وشك إضافة الملف أعلاه", line2: "يرجى التأكيد" }, image: { title: "إضافة هذة الصورة", change: "إلغاء" }, crop: { title: "قص وإضافة هذه الصورة", done: "موافق", free: "حر" }, video: { title: "إضافة هذا الفيديو", change: "إلغاء" }, error: { "default": { title: "عفوا آسف", text: "حدث خطأ أثناء الرفع", back: "حاول مرة اخرى" }, image: { title: "يتم قبول ملفات الصور فقط", text: "الرجاء إعادة المحاولة باستخدام ملف آخر", back: "اختر صورة" }, size: { title: "الملف الذي حددتة يتجاوز الحد المسموح بة", text: "الرجاء إعادة المحاولة باستخدام ملف آخر" }, loadImage: { title: "خطأ", text: "لا يمكن تحميل الصورة" } }, multiple: { title: "لقد اخترت %files%", question: "إضافة %files%?", tooManyFiles: "لقد اخترت عددا كبيرا جدا من الملفات %max% هو الحد الأقصى", tooFewFiles: "لقد اخترت %files%. على الأقل %min% مطلوب", clear: "حذف الكل", done: "إضافة", file: { preview: "معاينة %file%", remove: "حذف %file%" } } } }, footer: { text: "مدعوم بواسطة", link: "ابلود كير" } } } }), n.namespace("locale.pluralize", function(e) { return e.ar = function(e) { var t; return 0 === e ? "zero" : 1 === e ? "one" : 2 === e ? "two" : (t = e % 100, t >= 3 && 10 >= t ? "few" : t >= 11 && 99 >= t ? "many" : "other") } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.az = {
                    uploading: "Yüklənilir... Lütfən, gözləyin.",
                    loadingInfo: "İnfo yüklənilir...",
                    errors: { "default": "Xəta", baddata: "Yanlış dəyər", size: "Fayl çox böyükdür", upload: "Yüklənilə bilmədi", user: "Yükləmə ləğv edildi", info: "İnfo yüklənə bilmədi", image: "Yalnız təsvirlərə icazə verilir", createGroup: "Fayl qrupu yaradıla bilmir", deleted: "Fayl silindi" },
                    draghere: "Faylı bura atın",
                    file: { one: "%1 fayl", other: "%1 fayl" },
                    buttons: { cancel: "Ləğv edin", remove: "Silin", choose: { files: { one: "Fayl seçin", other: "Fayllar seçin" }, images: { one: "Təsvir seçin", other: "Təsvirlər seçin" } } },
                    dialog: {
                        done: "Hazırdır",
                        showFiles: "Faylları göstərin",
                        tabs: {
                            names: { "empty-pubkey": "Xoş gəlmisiniz", preview: "Önbaxış", file: "Lokal Fayllar", url: "İxtiyari linklər", camera: "Kamera", gdrive: "Google Disk" },
                            file: { drag: "Faylı bura atın", nodrop: "Kompüterinizdən faylları yükləyin", cloudsTip: "Bulud yaddaşlar <br>və sosial xidmətlər", or: "or", button: "Lokal fayl seçin", also: "Həmçinin, buradan seçə bilərsiniz" },
                            url: { title: "Vebdən fayllar", line1: "Vebdən istənilən faylı götürün.", line2: "Sadəcə, link verin.", input: "Linkinizi bura yerləşdirin...", button: "Yükləyin" },
                            camera: { capture: "Şəkil çəkin", mirror: "Güzgü", retry: "Yenidən icazə sorğusu göndərin.", pleaseAllow: { title: "Lütfən, kameranıza giriş hüququ verin", text: "Bu saytdan kameranıza daxil olmaq icazəsi verildi. Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz." }, notFound: { title: "Kamera aşkar edilmədi", text: "Görünür, bu cihaza kamera qoşulmayıb." } },
                            preview: {
                                unknownName: "naməlum",
                                change: "Ləğv edin",
                                back: "Geri",
                                done: "Əlavə edin",
                                unknown: { title: "Yüklənilir... Lütfən, önbaxış üçün gözləyin.", done: "Önbaxışı ötürün və qəbul edin" },
                                regular: { title: "Bu fayl əlavə edilsin?", line1: "Yuxarıdakı faylı əlavə etmək üzrəsiniz.", line2: "Lütfən, təsdiq edin." },
                                image: {
                                    title: "Bu təsvir əlavə edilsin?",
                                    change: "Ləğv edin"
                                },
                                crop: { title: "Bu təsviri kəsin və əlavə edin", done: "Hazırdır", free: "pulsuz" },
                                error: { "default": { title: "Ups!", text: "Yükləmə zamanı nəsə xəta baş verdi.", back: "Lütfən, y enidən cəhd edin." }, image: { title: "Yaınız təsvir faylları qəbul olunur.", text: "Lütfən, başqa fayl ilə cəhd edin.", back: "Təsvir seçin" }, size: { title: "Seçdiyiniz fayl limiti keçir.", text: "Lütfən, başqa fayl ilə cəhd edin." }, loadImage: { title: "Xəta", text: "Təsvir yüklənilə bilmir" } },
                                multiple: { title: "%files% fayl seçdiniz.", question: "Bütün bu faylları əlavə etmək istəyirsiniz?", tooManyFiles: "Həddindən çox fayl seçdiniz. %max% maksimumdur.", tooFewFiles: "%files% fayl seçdiniz. Ən azı %min% tələb olunur.", clear: "Hamısını silin", done: "Hazırdır" }
                            }
                        }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.az = function(e) { return "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.ca = { uploading: "Carregant... Si us plau esperi.", loadingInfo: "Carregant informació...", errors: { "default": "Error", baddata: "Valor incorrecte", size: "Massa gran", upload: "No s'ha pogut carregar", user: "Carrega cancel·lada", info: "No s'ha pogut carregar la informació", image: "Només es permeten imatges", createGroup: "No es pot crear el grup d'arxius", deleted: "Fitxer eliminat" }, draghere: "Arrossega els fitxers fins aquí", file: { one: "%1 fitxer", other: "%1 fitxers" }, buttons: { cancel: "Cancel·lar", remove: "Eliminar", choose: { files: { one: "Escull un fitxer", other: "Escull fitxers" }, images: { one: "Escull una imatge", other: "Escull imatges" } } }, dialog: { done: "Fet", showFiles: "Mostra fitxers", tabs: { names: { "empty-pubkey": "Benvingut", preview: "Avanci", file: "Ordinador", url: "Enllaços arbitraris", camera: "Càmera" }, file: { drag: "Arrossega un fitxer aquí", nodrop: "Carrega fitxers des del teu ordinador", cloudsTip: "Emmagatzematge al núvol<br>i xarxes socials", or: "o", button: "Escull un fitxer des del teu ordinador", also: "També pots seleccionar-lo de" }, url: { title: "Fitxers de la web", line1: "Selecciona qualsevol fitxer de la web.", line2: "Només proporcioni el link.", input: "Copiï el link aquí...", button: "Pujar" }, camera: { capture: "Realitza una foto", mirror: "Mirall", retry: "Demanar permisos una altra vegada", pleaseAllow: { title: "Si us plau, permet accés a la teva càmera", text: "Aquest lloc t'ha demanat de permetre accés a la càmera. Per tal de realitzar imatges amb la teva càmera has d'acceptar aquesta petició." }, notFound: { title: "No s'ha detectat cap càmera", text: "Sembla que no tens cap càmera connectada a aquest dispositiu." } }, preview: { unknownName: "desconegut", change: "Cancel·lar", back: "Endarrere", done: "Pujar", unknown: { title: "Carregant. Si us plau esperi per la visualització prèvia.", done: "Saltar visualització prèvia i acceptar" }, regular: { title: "Vols pujar aquest fitxer?", line1: "Estàs a punt de pujar el fitxer superior.", line2: "Confirmi, si us plau." }, image: { title: "Vols pujar aquesta imatge?", change: "Cancel·lar" }, crop: { title: "Tallar i pujar aquesta imatge", done: "Fet", free: "lliure" }, error: { "default": { title: "La pujada ha fallat!", text: "S'ha produït un error durant la pujada.", back: "Si us plau, provi-ho de nou." }, image: { title: "Només s'accepten fitxers d'imatges.", text: "Si us plau, provi-ho de nou amb un altre fitxer.", back: "Escull imatge" }, size: { title: "La mida del fitxer que has seleccionat sobrepassa el límit.", text: "Si us plau, provi-ho de nou amb un altre fitxer." }, loadImage: { title: "Error", text: "No s'ha pogut carregar la imatge" } }, multiple: { title: "N'has escollit %files%", question: "Vols afegir tots aquests fitxers?", tooManyFiles: "Has escollit massa fitxers. %max% és el màxim.", tooFewFiles: "Has escollit %files%. Com a mínim en calen %min%.", clear: "Eliminar-los tots", done: "Fet" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.ca = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.cs = { uploading: "Nahrávám... Malý moment.", loadingInfo: "Nahrávám informace...", errors: { "default": "Chyba", baddata: "Neplatná hodnota", size: "Soubor je příliš velký", upload: "Nelze nahrát", user: "Nahrávání zrušeno", info: "Nelze nahrát informace", image: "Lze nahrát pouze obrázky", createGroup: "Nelze vytvořit adresář", deleted: "Soubor byl smazán" }, draghere: "Přetáhněte soubor sem", file: { one: "%1 soubor", few: "%1 soubory", many: "%1 souborů" }, buttons: { cancel: "Zrušit", remove: "Odstranit", choose: { files: { one: "Vyberte soubor", other: "Vyberte soubory" }, images: { one: "Vyberte obrázek", other: "Vyberte obrázky" } } }, dialog: { done: "Hotovo", showFiles: "Zobrazit soubory", tabs: { names: { "empty-pubkey": "Vítejte", preview: "Náhled", file: "Soubor z počítače", url: "Soubor z internetu", camera: "Webkamera", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Google Drive", instagram: "Instagram", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "Přetáhněte soubor sem", nodrop: "Nahrajte soubory z vašeho počítače", cloudsTip: "Cloudové úložiště<br>a sociální sítě", or: "nebo", button: "Vyberte soubor z počítače", also: "Můžete také nahrát soubor z" }, url: { title: "Soubory z internetu", line1: "Nahrajte jakýkoliv soubor z internetu.", line2: "Stačí vložit odkaz.", input: "Odkaz vložte zde...", button: "Nahrát" }, camera: { capture: "Pořídit fotografii", mirror: "Zrcadlo", retry: "Znovu požádat o povolení", pleaseAllow: { title: "Prosím povolte přístup k webkameře", text: "Byl(a) jste požádán(a) o přístup k webkameře. Abyste mohl(a) pořídit fotografii, musíte přístup povolit." }, notFound: { title: "Nebyla nalezena webkamera", text: "Zdá se, že k tomuto zařízení není připojena žádná webkamera." } }, preview: { unknownName: "neznámý", change: "Zrušit", back: "Zpět", done: "Přidat", unknown: { title: "Nahrávám... Prosím vyčkejte na náhled.", done: "Přeskočit náhled a odeslat" }, regular: { title: "Přidat tento soubor?", line1: "Tímto přidáte výše vybraný soubor.", line2: "Prosím potvrďte." }, image: { title: "Přidat tento obrázek?", change: "Zrušit" }, crop: { title: "Oříznout a přidat tento obrázek", done: "Hotovo", free: "zdarma" }, error: { "default": { title: "Jejda!", text: "Něco se v průběhu nahrávání nepodařilo.", back: "Zkuste to prosím znovu." }, image: { title: "Lze nahrávat pouze obrázky.", text: "Zkuste to prosím s jiným souborem.", back: "Vyberte obrázek" }, size: { title: "Soubor přesahuje povolenou velikost.", text: "Prosím zkuste to s jiným souborem." }, loadImage: { title: "Chyba", text: "Nelze nahrát obrázek" } }, multiple: { title: "Bylo vybráno %files% souborů", question: "Chcete přidat všechny tyto soubory?", tooManyFiles: "Bylo vybráno moc souborů. Maximum je %max%", tooFewFiles: "Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%", clear: "Odstranit vše", done: "Hotovo" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.cs = function(e) { return 1 === e ? "one" : e >= 2 && 4 >= e ? "few" : "many" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.da = {
                    uploading: "Uploader... Vent venligst.",
                    loadingInfo: "Henter information...",
                    errors: { "default": "Fejl", baddata: "Forkert værdi", size: "Filen er for stor", upload: "Kan ikke uploade / sende fil", user: "Upload fortrudt", info: "Kan ikke hente information", image: "Kun billeder er tilladt", createGroup: "Kan ikke oprette fil gruppe", deleted: "Filen blev slettet" },
                    draghere: "Drop en fil her",
                    file: { one: "%1 fil", other: "%1 filer" },
                    buttons: { cancel: "Annuller", remove: "Fjern", choose: { files: { one: "Vælg en fil", other: "Vælg filer" }, images: { one: "Vælg et billede", other: "Vælg billeder" } } },
                    dialog: {
                        done: "Færdig",
                        showFiles: "Vis filer",
                        tabs: {
                            names: { preview: "Vis", file: "Computer", gdrive: "Google Drev", url: "Direkte link" },
                            file: { drag: "Drop en fil her", nodrop: "Hent filer fra din computer", or: "eller", button: "Hent fil fra din computer", also: "Du kan også hente fra" },
                            url: { title: "Filer fra en Web adresse", line1: "Vælg en fil fra en web adresse.", line2: "Skriv bare linket til filen.", input: "Indsæt link her...", button: "Upload / Send" },
                            preview: {
                                unknownName: "ukendt",
                                change: "Annuller",
                                back: "Tilbage",
                                done: "Fortsæt",
                                unknown: { title: "Uploader / sender... Vent for at se mere.", done: "Fortsæt uden at vente på resultat" },
                                regular: { title: "Tilføje fil?", line1: "Du er ved at tilføje filen ovenfor.", line2: "Venligst accepter." },
                                image: { title: "Tilføj billede?", change: "Annuller" },
                                crop: { title: "Beskær og tilføj dette billede", done: "Udfør" },
                                error: {
                                    "default": {
                                        title: "Hov!",
                                        text: "Noget gik galt under upload.",
                                        back: "Venligst prøv igen"
                                    },
                                    image: { title: "Du kan kun vælge billeder.", text: "Prøv igen med en billedfil.", back: "Vælg billede" },
                                    size: { title: "Den fil du valgte, er desværre større end tilladt.", text: "Venligst prøv med en mindre fil." },
                                    loadImage: { title: "Fejl", text: "Kan ikke åbne billede" }
                                },
                                multiple: { title: "Du har valgt %files% filer", question: "Vil du tilføje alle disse filer?", tooManyFiles: "Du har valgt for mange filer. %max% er maximum.", tooFewFiles: "Du har valgt %files% filer. Men du skal vælge mindst %min%.", clear: "Fjern alle", done: "Fortsæt" }
                            }
                        }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.da = function(e) { return 1 === e ? "one" : "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.de = { uploading: "Hochladen... Bitte warten.", loadingInfo: "Laden der Informationen...", errors: { "default": "Error", baddata: "Falscher Wert", size: "Datei zu groß", upload: "Kann nicht hochgeladen werden", user: "Hochladen abgebrochen", info: "Informationen können nicht geladen werden", image: "Nur Bilder sind erlaubt", createGroup: "Datei-Gruppe kann nicht erstellt werden", deleted: "Datei wurde gelöscht" }, draghere: "Ziehen Sie eine Datei hier hinein", file: { one: "%1 Datei", other: "%1 Dateien" }, buttons: { cancel: "Abbrechen", remove: "Löschen", choose: { files: { one: "Wählen Sie eine Datei", other: "Wählen Sie die Dateien" }, images: { one: "Wählen Sie ein Bild", other: "Wählen Sie Bilder" } } }, dialog: { done: "Fertig", showFiles: "Dateien anzeigen", tabs: { names: { "empty-pubkey": "Willkommen", preview: "Vorschau", file: "Lokale Dateien", url: "Web-Links", camera: "Kamera" }, file: { drag: "Ziehen Sie eine Datei hier hinein", nodrop: "Laden Sie Dateien von Ihrem PC hoch", cloudsTip: "Cloud Speicher<br>und soziale Dienste", or: "oder", button: "Wählen Sie eine lokale Datei", also: "Sie können sie auch wählen von" }, url: { title: "Dateien vom Web", line1: "Holen Sie sich irgendeine Datei vom Web.", line2: "Geben Sie einfach den Link an.", input: "Bitte geben Sie den Link hier an...", button: "Hochladen" }, camera: { capture: "Machen Sie ein Foto", mirror: "Spiegel", retry: "Berechtigungen erneut anfordern", pleaseAllow: { title: "Bitte erlauben Sie den Zugriff auf Ihre Kamera", text: "Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen." }, notFound: { title: "Keine Kamera festgestellt", text: "Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen." } }, preview: { unknownName: "nicht bekannt", change: "Abbrechen", back: "Zurück", done: "Hinzufügen", unknown: { title: "Hochladen... Bitte warten Sie auf die Vorschau.", done: "Vorschau überspringen und Datei annehmen" }, regular: { title: "Diese Datei hinzufügen?", line1: "Diese Datei wird nun hinzugefügt.", line2: "Bitte bestätigen Sie." }, image: { title: "Dieses Bild hinzufügen?", change: "Abbrechen" }, crop: { title: "Dieses Bild beschneiden und hinzufügen", done: "Fertig", free: "frei" }, error: { "default": { title: "Oops!", text: "Etwas ist während dem Hochladen schief gelaufen.", back: "Bitte versuchen Sie es erneut" }, image: { title: "Nur Bilder sind akzeptiert.", text: "Bitte veruschen Sie es erneut mit einer anderen Datei.", back: "Bild wählen" }, size: { title: "Die gewählte Datei überschreitet das Limit.", text: "Bitte veruschen Sie es erneut mit einer anderen Datei." }, loadImage: { title: "Fehler", text: "Das Bild kann nicht geladen werden" } }, multiple: { title: "Sie haben %files% Dateien gewählt", question: "Möchten Sie all diese Datein hinzufügen?", tooManyFiles: "Sie haben zu viele Dateien gewählt. %max% ist das Maximum.", tooFewFiles: "Sie haben %files% Dateien. Es sind mindestens %min% nötig.", clear: "Alle löschen", done: "Fertig" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.de = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.el = { loadingInfo: "Φόρτωση πληροφοριών...", errors: { "default": "Σφάλμα", baddata: "Λανθασμένη αξία", size: "Πολύ μεγάλο αρχείο", upload: "Δεν μπορεί να γίνει φόρτωση", user: "Η φόρτωση ακυρώθηκε", info: "Δεν μπορούν να φορτωθούν πληροφορίες", image: "Μόνο εικόνες επιτρέπονται", createGroup: "Δεν μπορεί να δημιουργηθεί ομάδα αρχείων", deleted: "Το αρχείο διαγράφηκε" }, uploading: "Φόρτωση... Παρακαλούμε περιμένετε.", draghere: "Αποθέστε ένα αρχείο εδώ", file: { one: "%1 αρχείο", other: "%1 αρχεία" }, buttons: { cancel: "Ακύρωση", remove: "Κατάργηση", choose: { files: { one: "Επιλέξτε ένα αρχείο", other: "Επιλέξτε αρχεία" }, images: { one: "Επιλέξτε μία εικόνα", other: "Επιλέξτε εικόνες" } } }, dialog: { close: "Κλείσιμο", openMenu: "Άνοιγμα μενού", done: "Εντάξει", showFiles: "Προβολή αρχείων", tabs: { names: { "empty-pubkey": "Καλώς ήρθατε", preview: "Προεπισκόπηση", file: "Τοπικά αρχεία", url: "Απευθείας σύνδεσμος", camera: "Κάμερα", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Google Drive", instagram: "Instagram", gphotos: "Google Photos", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "σύρετε & αποθέστε<br>οποιαδήποτε αρχεία", nodrop: "Φορτώστε αρχεία από τον&nbsp;υπολογιστή σας", cloudsTip: "Αποθήκευση νέφους<br>και κοινωνικά δίκτυα", or: "ή", button: "Επιλέξτε ένα τοπικό αρχείο", also: "ή επιλέξτε από" }, url: { title: "Αρχεία από τον Ιστό", line1: "Πάρτε οποιοδήποτε αρχείο από το διαδίκτυο.", line2: "Γράψτε απλώς τον σύνδεσμο.", input: "Επικολλήστε τον σύνδεσμό σας εδώ...", button: "Φόρτωση" }, camera: { title: "Αρχείο από κάμερα web", capture: "Τραβήξτε μια φωτογραφία", mirror: "Καθρέφτης", startRecord: "Εγγραφή βίντεο", cancelRecord: "Ακύρωση", stopRecord: "Διακοπή", retry: "Νέο αίτημα για άδεια", pleaseAllow: { text: "Έχετε δεχτεί υπόδειξη να επιτρέψετε την πρόσβαση στην κάμερα από αυτόν τον ιστότοπο.<br>Για να τραβήξετε φωτογραφίες με την κάμερά σας πρέπει να εγκρίνετε αυτό το αίτημα.", title: "Παρακαλούμε επιτρέψτε την πρόσβαση στην κάμερά σας" }, notFound: { title: "Δεν εντοπίστηκε κάμερα", text: "Φαίνεται ότι δεν έχετε κάμερα συνδεδεμένη με αυτή τη συσκευή." } }, preview: { unknownName: "άγνωστο", change: "Ακύρωση", back: "Πίσω", done: "Προσθήκη", unknown: { title: "Φόρτωση... Παρακαλούμε περιμένετε για προεπισκόπηση.", done: "Παράλειψη επισκόπησης και αποδοχή" }, regular: { title: "Να προστεθεί αυτό το αρχείο;", line1: "Πρόκειται να προσθέσετε το παραπάνω αρχείο.", line2: "Παρακαλούμε επιβεβαιώστε." }, image: { title: "Να προστεθεί αυτή η εικόνα;", change: "Ακύρωση" }, crop: { title: "Περικοπή και προσθήκη αυτής της εικόνας", done: "Εντάξει", free: "δωρεάν" }, video: { title: "Να προστεθεί αυτό το βίντεο;", change: "Ακύρωση" }, error: { "default": { title: "Ουπς!", back: "Παρακαλούμε προσπαθήστε ξανά", text: "Κάτι πήγε στραβά κατά τη φόρτωση." }, image: { title: "Μόνο αρχεία εικόνων γίνονται δεκτά.", text: "Δοκιμάστε ξανά με άλλο αρχείο.", back: "Επιλέξτε εικόνα" }, size: { title: "Το αρχείο που επιλέξατε υπερβαίνει το όριο.", text: "Δοκιμάστε ξανά με άλλο αρχείο." }, loadImage: { title: "Σφάλμα", text: "Δεν μπορεί να φορτωθεί η εικόνα" } }, multiple: { title: "Έχετε επιλέξει %files%", question: "Προσθήκη %files%;", tooManyFiles: "Έχετε επιλέξει πάρα πολλά αρχεία. Το μέγιστο είναι %max%.", tooFewFiles: "Έχετε επιλέξει %files%. Απαιτούνται τουλάχιστον %min%.", clear: "Κατάργηση όλων", file: { preview: "Προεπισκόπηση %file%", remove: "Αφαίρεση %file%" }, done: "Προσθήκη" } } }, footer: { text: "παρέχεται από", link: "uploadcare" } } } }), n.namespace("locale.pluralize", function(e) { return e.el = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.es = {
                    uploading: "Subiendo... Por favor espere.",
                    loadingInfo: "Cargando información...",
                    errors: { "default": "Error", baddata: "Valor incorrecto", size: "Archivo demasiado grande", upload: "No se puede subir", user: "Subida cancelada", info: "No se puede cargar la información", image: "Solo se permiten imágenes", createGroup: "No se puede crear el grupo de archivos", deleted: "El archivo fue eliminado" },
                    draghere: "Arrastra un archivo aquí",
                    file: { one: "%1 archivo", other: "%1 archivos" },
                    buttons: { cancel: "Cancelar", remove: "Eliminar", choose: { files: { one: "Escoge un archivo", other: "Escoge archivos" }, images: { one: "Escoge una imagen", other: "Escoge imágenes" } } },
                    dialog: {
                        done: "Hecho",
                        showFiles: "Mostrar archivos",
                        tabs: {
                            names: { "empty-pubkey": "Bienvenido", preview: "Previsualización", file: "Archivos locales", url: "Enlaces arbitrarios", camera: "Cámara" },
                            file: {
                                drag: "Arrastra un archivo aquí",
                                nodrop: "Sube fotos desde tu ordenador",
                                cloudsTip: "Almacenamiento en la nube<br>y redes sociales",
                                or: "o",
                                button: "Elige un archivo de tu ordenador",
                                also: "Tambien puedes seleccionarlo de"
                            },
                            url: { title: "Archivos de la Web", line1: "Coge cualquier archivo de la web.", line2: "Solo danos el link.", input: "Pega tu link aquí...", button: "Subir" },
                            camera: { capture: "Hacer una foto", mirror: "Espejo", retry: "Solicitar permisos de nuevo", pleaseAllow: { title: "Por favor, permite el acceso a tu cámara", text: "Este sitio ha pedido permiso para acceder a la cámara. Para tomar imágenes con tu cámara debes aceptar esta petición." }, notFound: { title: "No se ha detectado ninguna cámara", text: "Parece que no tienes ninguna cámara conectada a este dispositivo." } },
                            preview: { unknownName: "desconocido", change: "Cancelar", back: "Atrás", done: "Añadir", unknown: { title: "Subiendo. Por favor espera para una vista previa.", done: "Saltar vista previa y aceptar" }, regular: { title: "¿Quieres subir este archivo?", line1: "Estás a punto de subir el archivo de arriba.", line2: "Confírmalo por favor." }, image: { title: "¿Quieres subir esta imagen?", change: "Cancelar" }, crop: { title: "Cortar y añadir esta imagen", done: "Listo", free: "libre" }, error: { "default": { title: "Ups!", text: "Algo salió mal durante la subida.", back: "Por favor, inténtalo de nuevo." }, image: { title: "Solo se aceptan archivos de imagen.", text: "Por favor, inténtalo de nuevo con otro archivo.", back: "Escoger imagen" }, size: { title: "El archivo que has seleccinado excede el límite.", text: "Por favor, inténtalo de nuevo con otro archivo." }, loadImage: { title: "Error", text: "No puede cargar la imagen" } }, multiple: { title: "Has escogido %files%", question: "¿Quieres añadir todos estos archivos?", tooManyFiles: "Has escogido demasiados archivos. %max% es el máximo.", tooFewFiles: "Has escogido %files%. Hacen falta al menos %min%.", clear: "Eliminar todo", done: "Hecho" } }
                        }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.es = function(e) { return 1 === e ? "one" : "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.et = { uploading: "Üleslaadimine… Palun oota.", loadingInfo: "Info laadimine...", errors: { "default": "Viga", baddata: "Incorrect value", size: "Fail on liiga suur", upload: "Ei saa üles laadida", user: "Üleslaadimine tühistatud", info: "Ei saa infot laadida", image: "Ainult pildid lubatud", createGroup: "Ei saa luua failigruppi", deleted: "Fail on kustutatud" }, draghere: "Tiri fail siia", file: { one: "%1 fail", other: "%1 failid" }, buttons: { cancel: "Tühista", remove: "Kustuta", choose: { files: { one: "Vali fail", other: "Vali failid" }, images: { one: "Vali pilt", other: "Vali pildid" } } }, dialog: { done: "Valmis", showFiles: "Näita faile", tabs: { names: { "empty-pubkey": "Tere", preview: "Eelvaade", file: "Failid Kõvakettalt", url: "Veebilink", camera: "Kaamera" }, file: { drag: "Tiri failid siia", nodrop: "Lae failid arvutist", cloudsTip: "Pilv<br>ja sotsiaalmeedia", or: "või", button: "Vali fail kõvakettalt", also: "Saad samuti valida" }, url: { title: "Failid veebist", line1: "Ükskõik mis fail otse veebist.", line2: "Lihtsalt sisesta URL.", input: "Kleebi link siia...", button: "Lae üles" }, camera: { capture: "Take a photo", mirror: "Mirror", startRecord: "Record a video", stopRecord: "Stop", cancelRecord: "Cancel", retry: "Request permissions again", pleaseAllow: { title: "Please allow access to your camera", text: "You have been prompted to allow camera access from this site. In order to take pictures with your camera you must approve this request." }, notFound: { title: "No camera detected", text: "Looks like you have no camera connected to this device." } }, preview: { unknownName: "teadmata", change: "Tühista", back: "Tagasi", done: "Lisa", unknown: { title: "Üleslaadimine... Palun oota eelvaadet.", done: "Jäta eelvaade vahele ja nõustu" }, regular: { title: "Lisa see fail?", line1: "Oled lisamas ülaltoodud faili.", line2: "Palun kinnita." }, image: { title: "Lisa pilt?", change: "Tühista" }, crop: { title: "Lõika ja lisa pilt", done: "Valmis", free: "vaba" }, video: { title: "Lisa video?", change: "Tühista" }, error: { "default": { title: "Oihh!", text: "Midagi läks üleslaadimisel valesti.", back: "Palun proovi uuesti" }, image: { title: "Ainult pildifailid on lubatud.", text: "Palun proovi uuesti teise failiga.", back: "Vali pilt" }, size: { title: "Valitud fail ületab maksimaalse suuruse.", text: "Palun proovi uuesti teise failiga." }, loadImage: { title: "Viga", text: "Ei saa pilti laadida" } }, multiple: { title: "Oled valinud %files%", question: "Kas sa soovid lisada kõik failid?", tooManyFiles: "Oled valinud liiga suure hulga faile. %max% on maksimaalne.", tooFewFiles: "Oled valinud %files%. Vähemalt %min% nõutud.", clear: "Eemalda kõik", done: "Valmis" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.et = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.fr = { uploading: "Envoi en cours... Merci de patienter.", loadingInfo: "Chargement des informations...", errors: { "default": "Erreur", baddata: "Valeur incorrecte", size: "Fichier trop volumineux", upload: "Envoi impossible", user: "Envoi annulé", info: "Impossible de charger les informations", image: "Seules les images sont autorisées", createGroup: "Création d'1 groupe impossible", deleted: "Le fichier a été supprimé" }, draghere: "Glissez-déposez un fichier ici", file: { one: "%1 fichier", other: "%1 fichiers" }, buttons: { cancel: "Annuler", remove: "Supprimer", choose: { files: { one: "Sélectionner un fichier", other: "Sélectionner des fichiers" }, images: { one: "Sélectionner une image", other: "Sélectionner des images" } } }, dialog: { close: "Fermer", openMenu: "Ouvrir le menu", done: "Terminer", showFiles: "Voir les fichiers", tabs: { names: { "empty-pubkey": "Bienvenue", preview: "Avant-première", file: "Fichier en local", url: "Une adresse web", camera: "Caméra", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Google Drive", gphotos: "Google Photos", instagram: "Instagram", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "Glissez-déposez un fichier ici", nodrop: "Envoyez des fichiers depuis votre ordinateur", cloudsTip: "Stockage sur le cloud<br>et réseaux sociaux", or: "ou", button: "Choisir un fichier local", also: "Vous pouvez également le sélectionner depuis" }, url: { title: "Fichiers depuis le Web", line1: "Prenez n'importe quel fichier depuis un site web.", line2: "Saisissez simplement son adresse.", input: "Collez le lien ici...", button: "Envoi" }, camera: { title: "Fichier depuis la caméra", capture: "Prendre une photo", mirror: "Miroir", startRecord: "Enregistrer une vidéo", stopRecord: "Arrêter", cancelRecord: "Annuler", retry: "Envoyer une nouvelle demande de permission", pleaseAllow: { title: "Autorisez l'accès à votre appareil photo", text: "Vous avez été invité à autoriser l'accès à votre appareil photo. Pour prendre des photos avec votre caméra vous devez approuver cette demande." }, notFound: { title: "Aucun appareil photo détecté", text: "Il semblerait que vous n'ayez pas d'appareil photo connecté à cet appareil." } }, preview: { unknownName: "inconnu", change: "Annuler", back: "Retour", done: "Ajouter", unknown: { title: "Envoi en cours... Merci de patienter pour prévisualiser.", done: "Passer la prévisualisation et accepter" }, regular: { title: "Ajouter ce fichier ?", line1: "Vous êtes sur le point d'ajouter le fichier ci-dessus.", line2: "Merci de confirmer." }, image: { title: "Ajouter cette image ?", change: "Annuler" }, crop: { title: "Recadrer et ajouter cette image", done: "Terminer", free: "libre" }, video: { title: "Ajouter cette vidéo ?", change: "Annuler" }, error: { "default": { title: "Oups!", text: "Quelque chose n'a pas fonctionné pendant l'envoi.", back: "Merci de bien vouloir recommencer" }, image: { title: "Seules les images sont acceptées.", text: "Merci de bien vouloir recommencer avec un autre fichier.", back: "Choisir une image" }, size: { title: "Le fichier sélectionné est trop volumineux.", text: "Merci de bien vouloir recommencer avec un autre fichier." }, loadImage: { title: "Erreur", text: "Impossible de charger l'image" } }, multiple: { title: "Vous avez choisi %files%", question: "Voulez vous ajouter tous ces fichiers ?", tooManyFiles: "Vous avez choisi trop de fichiers. %max% est le maximum.", tooFewFiles: "Vous avez choisi %fichiers%. %min% est le minimum.", clear: "Tout retirer", done: "Terminer", file: { preview: "Prévisualiser %file%", remove: "Supprimer %file%" } } } } } } }), n.namespace("locale.pluralize", function(e) { return e.fr = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) { return e.he = { uploading: "טוען... אנא המתן.", loadingInfo: "טוען מידע...", errors: { "default": "שגיאה", baddata: "ערך שגוי", size: "קובץ גדול מידי", upload: "לא ניתן להעלות", user: "העלאה בוטלה", info: "לא ניתן לטעון מידע", image: "ניתן להעלות רק תמונות", createGroup: "לא ניתן ליצור קבוצה", deleted: "הקובץ נמחק" }, draghere: "שחרר כאן קובץ", file: { one: "קובץ %1", other: "%1 קבצים" }, buttons: { cancel: "ביטול", remove: "הסר", choose: { files: { one: "בחר קובץ", other: "בחר קבצים" }, images: { one: "בחר תמונה", other: "בחר תמונות" } } }, dialog: { done: "סיום", showFiles: "הצג קבצים", tabs: { names: { facebook: "פייסבוק", dropbox: "דרופבוקס", gdrive: "כונן גוגל", instagram: "אינסטגרם", url: "לינק מהאינטרנט" }, file: { drag: "שחרר כאן קובץ", nodrop: "העלה קבצים מהמחשב", or: "או", button: "בחר קובץ מהמחשב", also: "ניתן לבחור גם מ" }, url: { title: "קובץ מהאינטרנט", line1: "גרור קובץ מהאינטרנט", line2: "ספק את כתובת הקובץ", input: "הדבק את כתובת הקובץ...", button: "העלה" }, preview: { unknownName: "לא ידוע", change: "ביטול", back: "חזרה", done: "הוסף", unknown: { title: "מעלה... נא המתן לתצוגה מקדימה.", done: "דלג על תצוגה מקדימה" }, regular: { title: "להוסיף קובץ זה?", line1: "קובץ זה יועלה", line2: "נא אשר." }, image: { title: "להוסיף תמונה זו?", change: "ביטול" }, crop: { title: "חתוך והוסף תמונה זו", done: "סיום" }, error: { "default": { title: "אופס!", text: "משהו השתבש בזמן ההעלאה.", back: "נא נסה שוב" }, image: { title: "ניתן לקבל רק קבצי תמונות.", text: "נא נסה שוב עם קובץ אחר.", back: "בחר תמונה" }, size: { title: "הקובץ שבחרת חורג מהגבול.", text: "נא נסה שוב עם קובץ אחר." }, loadImage: { title: "שגיאה", text: "טעינת התמונה נכשלה" } }, multiple: { title: "בחרת %files%", question: "אתה מעוניין להוסיף את כל הקבצים האלו?", tooManyFiles: "בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.", tooFewFiles: "בחרת %files%. יש לבחור לפחות %min%.", clear: "הסר הכל", done: "סיום" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.he = function(e) { return 1 === e ? "one" : "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.it = { uploading: "Caricamento in corso... Si prega di attendere.", loadingInfo: "Caricamento informazioni in corso...", errors: { "default": "Errore", baddata: "Valore errato", size: "Il file è troppo grande", upload: "Impossibile fare l’upload", user: "Upload cancellato", info: "Impossibile caricare le informazioni", image: "Sono ammesse solo immagini", createGroup: "Impossibile creare gruppo di file", deleted: "Il file è stato eliminato" }, draghere: "Trascina un file qui", file: { one: "file %1", other: "file %1" }, buttons: { cancel: "Cancella", remove: "Rimuovi", choose: { files: { one: "Seleziona un file", other: "Seleziona file" }, images: { one: "Seleziona un’immagine", other: "Seleziona immagini" } } }, dialog: { done: "Fatto", showFiles: "Mostra file", tabs: { names: { "empty-pubkey": "Benvenuto", preview: "Anteprima", file: "File locali", url: "Link arbitrari", camera: "Fotocamera" }, file: { drag: "Trascina un file qui", nodrop: "Carica file dal tuo computer", cloudsTip: "Salvataggi nel cloud<br>e servizi sociali", or: "o", button: "Seleziona un file locale", also: "Puoi anche scegliere da" }, url: { title: "File dal web", line1: "Preleva un file dal web.", line2: "È sufficiente fornire il link.", input: "Incolla il tuo link qui...", button: "Carica" }, camera: { capture: "Scatta una foto", mirror: "Specchio", retry: "Richiedi di nuovo le autorizzazioni", pleaseAllow: { title: "Consenti l’accesso alla tua fotocamera", text: "Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta." }, notFound: { title: "Nessuna fotocamera rilevata", text: "Non risulta che tu non abbia una fotocamera collegata a questo dispositivo." } }, preview: { unknownName: "sconosciuto", change: "Cancella", back: "Indietro", done: "Aggiungi", unknown: { title: "Caricamento in corso... Attendi l’anteprima.", done: "Salta l’anteprima e accetta" }, regular: { title: "Vuoi aggiungere questo file?", line1: "Stai per aggiungere il file sopra.", line2: "Conferma." }, image: { title: "Vuoi aggiungere questa immagine?", change: "Cancella" }, crop: { title: "Ritaglia e aggiungi questa immagine", done: "Fatto", free: "gratis" }, error: { "default": { title: "Ops!", text: "Si è verificato un problema durante l’upload.", back: "Si prega di riprovare" }, image: { title: "Sono accettati solo file immagine.", text: "Riprova con un altro file.", back: "Scegli immagine" }, size: { title: "Il file selezionato supera il limite.", text: "Riprova con un altro file." }, loadImage: { title: "Errore", text: "Impossibile caricare l’immagine" } }, multiple: { title: "Hai selezionato %files%", question: "Vuoi aggiungere tutti questi file?", tooManyFiles: "Hai selezionato troppi file. %max% è il massimo.", tooFewFiles: "Hai selezionato %files%. È richiesto almeno %min%.", clear: "Rimuovi tutto", done: "Fatto" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.it = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.ja = { uploading: "アップロードしています… 完了までお待ち下さい。", loadingInfo: "読み込み中…", errors: { "default": "エラー", baddata: "間違った値", size: "ファイルが大きすぎます", upload: "アップロードできませんでした", user: "アップロードがキャンセルされました", info: "読み込みに失敗しました", image: "アップロードできるのは画像ファイルのみです", createGroup: "グループの作成に失敗しました", deleted: "削除されたファイルです" }, draghere: "ここにファイルをドロップ", file: { other: "%1ファイル" }, buttons: { cancel: "キャンセル", remove: "削除", choose: { files: { one: "ファイルを選択", other: "ファイルを選択" }, images: { one: "画像を選択", other: "画像を選択" } } }, dialog: { done: "完了", showFiles: "ファイルを表示", tabs: { names: { preview: "プレビュー", file: "ローカルファイル", url: "URLを直接入力" }, file: { drag: "ここにファイルをドロップ", nodrop: "ファイルを選択してアップロード", cloudsTip: "クラウドストレージ<br>およびソーシャルサービス", or: "もしくは", button: "ローカルのファイルを選択", also: "次からも選択可能です：" }, url: { title: "ウェブ上のファイル", line1: "ウェブ上からファイルを取得します。", line2: "URLを入力してください。", input: "ここにURLを貼り付けしてください…", button: "アップロード" }, preview: { unknownName: "不明なファイル", change: "キャンセル", back: "戻る", done: "追加", unknown: { title: "アップロードしています… プレビューの表示をお待ちください。", done: "プレビューの確認をスキップして完了" }, regular: { title: "このファイルを追加しますか？", line1: "こちらのファイルを追加しようとしています。", line2: "確認してください。" }, image: { title: "この画像を追加しますか？", change: "キャンセル" }, crop: { title: "画像の切り取りと追加", done: "完了", free: "リセット" }, error: { "default": { title: "失敗しました", text: "アップロード中に不明なエラーが発生しました。", back: "もう一度お試し下さい" }, image: { title: "画像ファイルのみ許可されています", text: "他のファイルで再度お試し下さい。", back: "画像を選択" }, size: { title: "ファイルサイズが大きすぎます。", text: "他のファイルで再度お試し下さい。" }, loadImage: { title: "エラー", text: "画像のロードに失敗しました。" } }, multiple: { title: "%files%つのファイルを選択中", question: "これら全てのファイルを追加しますか？", tooManyFiles: "選択ファイルが多すぎます。%max%つ以下にしてください。", tooFewFiles: "選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。", clear: "全て削除", done: "完了" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.ja = function(e) { return "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.ko = {
                    uploading: "업로드중 기다려주세요",
                    loadingInfo: "정보 로드중...",
                    errors: { "default": "오류", baddata: "잘못된 값", size: "파일용량 초과", upload: "업로드 실패", user: "업로드 취소됨", info: "정보를 불러올 수 없습니다", image: "허용된 이미지만 가능", createGroup: "파일 그룹 만들기 실패", deleted: "파일이 삭제되었습니다" },
                    draghere: "여기에 끌어다 놓기",
                    file: { one: "%1 파일", other: "%1 파일" },
                    buttons: { cancel: "취소", remove: "삭제", choose: { files: { one: "파일 첨부", other: "파일 첨부" }, images: { one: "이미지 첨부", other: "이미지 첨부" } } },
                    dialog: {
                        close: "닫기",
                        openMenu: "메뉴 열기",
                        done: "완료",
                        showFiles: "파일 표시",
                        tabs: {
                            names: { "empty-pubkey": "반갑습니다", preview: "미리보기", file: "파일 첨부", url: "링크 연결", camera: "카메라", facebook: "페이스북", dropbox: "드롭박스", gdrive: "구글 드라이브", gphotos: "구글 포토", instagram: "인스타그램", evernote: "에버노트", box: "박스", skydrive: "스카이드라이브", flickr: "플리커" },
                            file: { drag: "모든 파일을<br>드래그 & 드롭", nodrop: "파일 업로드", cloudsTip: "클라우드 스토리지 및 소셜", or: "또는", button: "파일 선택", also: "또는 선택하십시오" },
                            url: { title: "웹에서 파일 링크 연결", line1: "웹에서 모든파일을 가져옵니다", line2: "링크만 연결합니다.", input: "링크 붙여 넣기...", button: "업로드" },
                            camera: { title: "카메라 연결", capture: "사진 찍기", mirror: "거울", startRecord: "비디오 녹화", stopRecord: "정지", cancelRecord: "취소", retry: "재 시도", pleaseAllow: { title: "카메라 접근 허용", text: "카메라 접근을 허용하시겠습니까?<br>승인 요청을 해주셔야 합니다" }, notFound: { title: "카메라가 없습니다", text: "이 기기에 연결된 카메라가 없습니다" } },
                            preview: {
                                unknownName: "알수없음",
                                change: "취소",
                                back: "뒤로",
                                done: "추가",
                                unknown: { title: "업로드중, 기다려주세요", done: "미리보기 건너뛰기" },
                                regular: { title: "이 파일을 추가하시겠습니까?", line1: "위 파일을 추가하려고 합니다", line2: "확인 하십시오" },
                                image: { title: "이미지를 추가하시겠습니까?", change: "취소" },
                                crop: { title: "이미지 자르기 및 추가", done: "완료", free: "무료" },
                                video: { title: "비디오를 추가하시겠습니까?", change: "취소" },
                                error: {
                                    "default": { title: "죄송합니다", text: "업로드에 문제가 있습니다", back: "다시 시도해 주세요" },
                                    image: { title: "이미지 파일만 허용됩니다", text: "다른 파일로 다시 시도하세요", back: "이미지 선택" },
                                    size: {
                                        title: "선택한 파일이 한도 초과하였습니다",
                                        text: "다른 파일로 다시 시도하세요"
                                    },
                                    loadImage: { title: "오류", text: "이미지를 불러올 수 없습니다" }
                                },
                                multiple: { title: "%files%을(를) 선택하였습니다", question: "%files%을 추가하시겠습니까?", tooManyFiles: "너무 많은 파일을 추가하셨습니다. %max%가 최대 한도입니다", tooFewFiles: "%files%을(를) 선택하였습니다 최소 %min%이상 필요합니다", clear: "모두 삭제", done: "추가", file: { preview: "%file% 미리보기", remove: "%file% 삭제" } }
                            }
                        },
                        footer: { text: "powered by", link: "uploadcare" }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.ko = function(e) { return 1 === e ? "one" : "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.lv = { uploading: "Augšupielādē... Lūdzu, gaidiet.", errors: { "default": "Kļūda", image: "Atļauti tikai attēli" }, draghere: "Velciet failus šeit", file: { zero: "%1 failu", one: "%1 fails", other: "%1 faili" }, buttons: { cancel: "Atcelt", remove: "Dzēst" }, dialog: { title: "Ielādēt jebko no jebkurienes", poweredby: "Darbināts ar", support: { images: "Attēli", audio: "Audio", video: "Video", documents: "Dokumenti" }, tabs: { file: { title: "Mans dators", line1: "Paņemiet jebkuru failu no jūsu datora.", line2: "Izvēlēties ar dialogu vai ievelciet iekšā.", button: "Meklēt failus" }, url: { title: "Faili no tīmekļa", line1: "Paņemiet jebkuru failu no tīmekļa.", line2: "Tikai uzrādiet linku.", input: "Ielīmējiet linku šeit...", button: "Ielādēt" } } } } }), n.namespace("locale.pluralize", function(e) { return e.lv = function(e) { return 0 === e ? "zero" : e % 10 === 1 && e % 100 !== 11 ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.nb = { uploading: "Laster opp... Vennligst vent.", loadingInfo: "Laster inn info...", errors: { "default": "Feil", baddata: "Ugyldig verdi", size: "Filen er for stor", upload: "Kan ikke laste opp", user: "Opplasting avbrutt", info: "Kan ikke laste inn info", image: "Kun bilder er tillatt", createGroup: "Kan ikke opprette filgruppe", deleted: "Filen er slettet" }, draghere: "Dra en fil hit", file: { one: "%1 fil", other: "%1 filer" }, buttons: { cancel: "Avbryt", remove: "Fjern", choose: { files: { one: "Velg en fil", other: "Velg filer" }, images: { one: "Velg et bilde", other: "Velg bilder" } } }, dialog: { done: "Ferdig", showFiles: "Vis filer", tabs: { names: { preview: "Forhåndsvising", file: "Lokale filer", url: "Direktelink" }, file: { drag: "Dra og slipp en fil her", nodrop: "Last opp filer fra datamaskinen", cloudsTip: "Skylagring<br>og sosiale tjenester", or: "eller", button: "Velg en lokal fil", also: "Du kan også velge det fra" }, url: { title: "Filer fra internett", line1: "Velg hvilken som helst fil fra internett.", line2: "Bare gi oss linken.", input: "Lim inn linken her...", button: "Last opp" }, preview: { unknownName: "ukjent", change: "Avbryt", back: "Tilbake", done: "Legg til", unknown: { title: "Laster opp... Vennligst vent på forhåndsvisning.", done: "Hopp over forhåndsvisning og godkjenn" }, regular: { title: "Legge til denne filen?", line1: "Filen legges nå til.", line2: "Vennligst bekreft." }, image: { title: "Legge til dette bildet?", change: "Avbryt" }, crop: { title: "Kutt og legg til dette bildet", done: "Ferdig", free: "frigjør" }, error: { "default": { title: "Ops!", text: "Noe gikk galt under opplastingen.", back: "Vennligst prøv igjen" }, image: { title: "Kun bilder er akseptert.", text: "Prøv igjen med en annen fil.", back: "Velg bilde" }, size: { title: "Den valgte filen overskrider tilatt størrelse.", text: "Vennligst prøv igjen med en annen fil." }, loadImage: { title: "Feil", text: "Kan ikke laste bildet" } }, multiple: { title: "Du har valgt %files%", question: "Ønsker du å legge til alle filene?", tooManyFiles: "Du har valgt for mange filer. %max% er maksimum.", tooFewFiles: "Du har valgt %files%. Minimum %min% er påkrevd.", clear: "Fjern alle", done: "Ferdig" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.nb = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.nl = { uploading: "Uploaden... Even geduld.", loadingInfo: "Laden informatie...", errors: { "default": "Fout", baddata: "Ongeldige waarde", size: "Bestand is te groot", upload: "Kan niet uploaden", user: "Upload geannuleerd", info: "Kan informatie niet laden", image: "Alleen afbeeldingen toegestaan", createGroup: "Kan bestandsgroep niet maken", deleted: "Bestand is verwijderd" }, draghere: "Drop hier een bestand", file: { one: "%1 bestand", other: "%1 bestanden" }, buttons: { cancel: "Annuleren", remove: "Verwijderen", choose: { files: { one: "Kies een bestand", other: "Kies bestanden" }, images: { one: "Kies een afbeelding", other: "Kies afbeeldingen" } } }, dialog: { done: "Klaar", showFiles: "Toon bestanden", tabs: { names: { preview: "Voorvertoning", file: "Computer", url: "Directe links" }, file: { drag: "Drop hier een bestand", nodrop: "Upload bestanden van je computer", or: "of", button: "Selecteer een bestand op je computer", also: "Je kan ook selecteren van" }, url: { title: "Bestanden op het web", line1: "Selecteer een bestand op het web.", line2: "Voer de link in.", input: "Plak de link hier...", button: "Upload" }, preview: { unknownName: "onbekend", change: "Annuleren", back: "Terug", done: "Toevoegen", unknown: { title: "Uploaden... Wacht op de voorvertoning.", done: "Voorvertoning overslaan an accepteren" }, regular: { title: "Dit bestand toevoegen?", line1: "Je staat op het punt bovenstaand bestand toe te voegen.", line2: "Bevestig" }, image: { title: "Voeg deze afbeelding toe?", change: "Annuleren" }, crop: { title: "Afbeelding bijknippen en toevoegen", done: "Klaar" }, error: { "default": { title: "Oeps!", text: "Er is een fout opgetreden tijdens het uploaden.", back: "Probeer opnieuw" }, image: { title: "Alleen afbeeldingen worden geaccepteerd.", text: "Probeer opnieuw met een andere bestand.", back: "Selecteer afbeelding" }, size: { title: "Het geselecteerd bestand is groter dan de limiet.", text: "Probeer opnieuw met een andere bestand." }, loadImage: { title: "Fout", text: "Kan afbeelding niet laden" } }, multiple: { title: "Je hebt de volgende bestanden geselecteerd %files%", question: "Wil je al deze bestanden toevoegen?", tooManyFiles: "Je hebt teveel bestanden geselecteerd. %max% is het maximum.", tooFewFiles: "Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.", clear: "Verwijder alle bestanden", done: "Klaar" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.nl = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.pl = {
                    uploading: "Przesyłanie... Proszę czekać.",
                    loadingInfo: "Ładowanie...",
                    errors: { "default": "Błąd", baddata: "Niepoprawna wartość", size: "Plik zbyt duży", upload: "Nie udało się przesłać", user: "Przesyłanie anulowane", info: "Nie udało się załadować informacji", image: "Dozwolone są tylko obrazy", createGroup: "Nie udało się utworzyć grupy plików", deleted: "Plik został usunięty" },
                    draghere: "Upuść plik tutaj",
                    file: { one: "%1 plik", few: "%1 pliki", many: "%1 plików" },
                    buttons: { cancel: "Anuluj", remove: "Usuń", choose: { files: { one: "Wybierz plik", other: "Wybierz pliki" }, images: { one: "Wybierz obraz", other: "Wybierz obrazy" } } },
                    dialog: {
                        close: "Zamknij",
                        openMenu: "Otwórz menu",
                        done: "Wykonano",
                        showFiles: "Pokaż pliki",
                        tabs: {
                            names: { "empty-pubkey": "Witaj", preview: "Podgląd", file: "Pliki lokalne", url: "Plik z Sieci", camera: "Aparat" },
                            file: { drag: "Upuść plik tutaj", nodrop: "Prześlij pliki z Twojego komputera", cloudsTip: "Dane w chmurze<br>i sieci społecznościowe", or: "lub", button: "Wybierz plik lokalny", also: "Możesz również wybrać z" },
                            url: { title: "Pliki z Sieci", line1: "Złap jakikolwiej plik z sieci.", line2: "Podaj adres.", input: "Wklej link...", button: "Prześlij" },
                            camera: { title: "Plik z kamery internetowej", capture: "Zrób zdjęcie", mirror: "Odbicie lustrzane", startRecord: "Nagraj film", stopRecord: "Zakończ", cancelRecord: "Anuluj", retry: "Poproś ponownie o dostęp", pleaseAllow: { title: "Prośba o udostępnienie aparatu", text: "Zostałeś poproszony przez tę stronę o dostęp do aparatu. Aby robić zdjecia, musisz zaakceptować tę prośbę." }, notFound: { title: "Nie wykryto aparatu.", text: "Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia." } },
                            preview: {
                                unknownName: "nieznany",
                                change: "Anuluj",
                                back: "Wstecz",
                                done: "Dodaj",
                                unknown: { title: "Przesyłanie... Proszę czekać na podgląd.", done: "Omiń podgląd i zaakceptuj." },
                                regular: { title: "Dodać ten plik?", line1: "Zamierzasz dodać nowy plik.", line2: "Potwierdź, proszę." },
                                image: { title: "Dodać ten obraz?", change: "Anuluj" },
                                crop: { title: "Przytnij i dodaj ten obraz", done: "Wykonano", free: "wolny" },
                                video: { title: "Dodać ten film?", change: "Anuluj" },
                                error: {
                                    "default": { title: "Oops!", text: "Coś poszło nie tak podczas przesyłania.", back: "Spróbuj ponownie" },
                                    image: {
                                        title: "Akceptowane są tylko obrazy.",
                                        text: "Spróbuj ponownie z innym plikiem.",
                                        back: "Wybierz obraz"
                                    },
                                    size: { title: "Plik, który wybrałeś, przekracza dopuszczalny rozmiar", text: "Spróbuj ponownie z innym plikiem." },
                                    loadImage: { title: "Błąd", text: "Nie udało się załadować obrazu" }
                                },
                                multiple: { title: "Wybrałeś %files%", question: "Czy chcesz dodać wszystkie te pliki?", tooManyFiles: "Wybrałeś zbyt wiele plików. Maksimum to %max%.", tooFewFiles: "Wybrałeś %files%. Wymagane jest co najmniej %min%.", clear: "Usuń wszystkie", done: "Wykonano", file: { preview: "Zobacz %file%", remove: "Usuń %file%" } }
                            }
                        }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.pl = function(e) { var t; return 1 === e ? "one" : 2 <= (t = e % 10) && 4 >= t && 1 !== (e / 10 % 10 | 0) ? "few" : "many" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.pt = { uploading: "Fazendo upload... Aguarde.", loadingInfo: "Carregando informações...", errors: { "default": "Erro", baddata: "Valor incorreto", size: "Arquivo muito grande", upload: "Não foi possível fazer o upload", user: "Upload cancelado", info: "Não foi possível carregar as informações", image: "Apenas imagens são permitidas", createGroup: "Não foi possível criar o grupo de arquivos", deleted: "O arquivo foi excluído" }, draghere: "Arraste um arquivo aqui", file: { one: "%1 arquivo", other: "%1 arquivos" }, buttons: { cancel: "Cancelar", remove: "Excluir", choose: { files: { one: "Escolha um arquivo", other: "Escolha arquivos" }, images: { one: "Escolha uma imagem", other: "Escolha imagens" } } }, dialog: { done: "OK", showFiles: "Mostrar arquivos", tabs: { names: { preview: "Pré-estréia", file: "Computador", url: "Link da web" }, file: { drag: "Arraste um arquivo aqui", nodrop: "Faça upload de arquivos do seu computador", or: "ou", button: "Escolha um arquivo do computador", also: "Você também pode escolher arquivos de" }, url: { title: "Arquivos da web", line1: "Faça upload de qualquer arquivo da web.", line2: "Apenas informe o link.", input: "Cole seu link aqui...", button: "Upload" }, camera: { capture: "Tirar uma foto", mirror: "Espelhar", startRecord: "Gravar um vídeo", stopRecord: "Parar", cancelRecord: "Cancelar", retry: "Requisitar permissão novamente", pleaseAllow: { title: "Por favor permita o acesso a sua câmera", text: "Você foi solicitado a permitir o acesso à câmera a partir deste site. Para tirar fotos com sua câmera, você deve aprovar este pedido." }, notFoud: { title: "Câmera não detectada", text: "Parece que você não tem uma câmera conectada a este dispositivo" } }, preview: { unknownName: "desconhecido", change: "Cancelar", back: "Voltar", done: "Adicionar", unknown: { title: "Fazendo upload... Aguarde a visualização.", done: "Pular visualização e aceitar" }, regular: { title: "Adicionar esse arquivo?", line1: "Você está prestes a adicionar o arquivo acima.", line2: "Por favor, confirme." }, image: { title: "Adicionar essa imagem?", change: "Cancelar" }, crop: { title: "Cortar e adicionar essa imagem", done: "OK", free: "livre" }, error: { "default": { title: "Oops!", text: "Alguma coisa deu errado durante o upload.", back: "Por favor, tente novamente" }, image: { title: "Apenas arquivos de imagem são aceitos.", text: "Por favor, tente novamente com outro arquivo.", back: "Escolher a imagem" }, size: { title: "O arquivo que você escolheu excede o limite.", text: "Por favor, tente novamente com outro arquivo." }, loadImage: { title: "Erro", text: "Não foi possível carregar a imagem" } }, multiple: { title: "Você escolheu", question: "Você quer adicionar todos esses arquivos?", clear: "Excluir todos", done: "OK" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.pt = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.ro = { uploading: "Se încarcă... Răbdare.", loadingInfo: "Info încărcare...", errors: { "default": "Eroare", baddata: "Valoare incorectă", size: "Fișier prea mare", upload: "Nu pot încărca", user: "Încărcare anulată", info: "Nu pot încărca info", image: "Doar imagini, vă rog", createGroup: "Nu pot crea grup de fișiere", deleted: "Fișierul a fost șters" }, draghere: "Trage un fișier aici", file: { one: "%1 fișier", other: "%1 fișiere" }, buttons: { cancel: "Anulare", remove: "Șterge", choose: { files: { one: "Alege un fișier", other: "Alege fișiere" }, images: { one: "Alege o imagine", other: "Alege imagini" } } }, dialog: { close: "Închide", openMenu: "Deschide meniu", done: "Gata", showFiles: "Arată fișiere", tabs: { names: { "empty-pubkey": "Bine ai venit", preview: "Previzualizare", file: "Fișiere locale", url: "Link direct", camera: "Camera", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Google Drive", gphotos: "Google Photos", instagram: "Instagram", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "trage aici<br>fișierele", nodrop: "Încarcă fișiere din computer", cloudsTip: "Cloud <br>și rețle sociale", or: "sau", button: "Alege un fișier local", also: "sau alege din" }, url: { title: "Fișiere din Web", line1: "Ia orice fișier din Web.", line2: "Trebuie să ai doar linkul.", input: "Lipește linkul aici...", button: "Încarcă" }, camera: { title: "Fișier din camera web", capture: "Fă o fotografie", mirror: "Mirror", startRecord: "Înregistrează un video", stopRecord: "Stop", cancelRecord: "Anulează", retry: "Cere permisiune din nou", pleaseAllow: { title: "Te rog sa-mi dai acces la cameră", text: "Ai fost rugat să dai acces la cameră de acest site.<br>Pentru a putea face fotografii cu camera, trebuie să aprobi această cerere." }, notFound: { title: "Nicio cameră detectată", text: "Se pare că nu ai nicio cameră atașată acestui device." } }, preview: { unknownName: "necunoscut", change: "Anulează", back: "Înapoi", done: "Adaugă", unknown: { title: "Se încarcă... Te rog așteaptă previzualizarea.", done: "Sari peste previzualizare și acceptă" }, regular: { title: "Adaug acest fișier?", line1: "Ești pe punctul de a adăuga fișierul de mai sus.", line2: "Te rog confirmă." }, image: { title: "Adaug această imagine?", change: "Anulează" }, crop: { title: "Decupează și adaugă aceasta imagine", done: "Gata", free: "gratis" }, video: { title: "Adaug acest video?", change: "anulează" }, error: { "default": { title: "Oops!", text: "A intervenit o problemă la încărcare.", back: "te rog încearcă din nou" }, image: { title: "Sunt acceptate doar imagini.", text: "Te rog încearcă din nou cu un alt fișier.", back: "Alege imagine" }, size: { title: "Fișierul selectat de tine este prea mare.", text: "Te rog să încerci cu alt fișier." }, loadImage: { title: "Eroare", text: "Nu pot încărca imaginea" } }, multiple: { title: "Ai ales %files%.", question: "Adaug %files%?", tooManyFiles: "Ai ales prea multe fișiere. %max% is maximum.", tooFewFiles: "Ai ales %files%. Minimul este %min% .", clear: "Șterge toate", done: "Adaugă", file: { preview: "Previzualizare %file%", remove: "Șterge %file%" } } } }, footer: { text: "powered by", link: "uploadcare" } } } }), n.namespace("locale.pluralize", function(e) { return e.ro = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.ru = {
                    uploading: "Идет загрузка",
                    loadingInfo: "Загрузка информации...",
                    errors: { "default": "Ошибка", baddata: "Некорректные данные", size: "Слишком большой файл", upload: "Ошибка при загрузке", user: "Загрузка прервана", info: "Ошибка при загрузке информации", image: "Разрешены только изображения", createGroup: "Не удалось создать группу файлов", deleted: "Файл удалён" },
                    draghere: "Перетащите файл сюда",
                    file: { one: "%1 файл", few: "%1 файла", many: "%1 файлов" },
                    buttons: { cancel: "Отмена", remove: "Удалить", choose: { files: { one: "Выбрать файл", other: "Выбрать файлы" }, images: { one: "Выбрать изображение", other: "Выбрать изображения" } } },
                    dialog: {
                        done: "Готово",
                        showFiles: "Показать файлы",
                        tabs: {
                            names: { preview: "Предпросмотр", "empty-pubkey": "Приветствие", file: "Локальные файлы", vk: "ВКонтакте", url: "Ссылка", camera: "Камера" },
                            file: { drag: "Перетащите файл сюда", nodrop: "Загрузка файлов с вашего компьютера", cloudsTip: "Облачные хранилища<br>и социальные сети", or: "или", button: "Выберите локальный файл", also: "Вы также можете загрузить файлы, используя:" },
                            url: { title: "Файлы с других сайтов", line1: "Загрузите любой файл из сети.", line2: "", input: "Укажите здесь ссылку...", button: "Загрузить" },
                            camera: { capture: "Сделать снимок", mirror: "Отразить", retry: "Повторно запросить разрешение", pleaseAllow: { title: "Пожалуйста, разрешите доступ к камере", text: "Для того, чтобы сделать снимок, мы запросили разрешение на доступ к камере с этого сайта." }, notFound: { title: "Камера не найдена", text: "Скорее всего камера не подключена или не настроена." } },
                            preview: {
                                unknownName: "неизвестно",
                                change: "Отмена",
                                back: "Назад",
                                done: "Добавить",
                                unknown: { title: "Загрузка... Пожалуйста подождите.", done: "Пропустить предварительный просмотр" },
                                regular: { title: "Загрузить этот файл?", line1: "Вы собираетесь добавить этот файл:", line2: "Пожалуйста, подтвердите." },
                                image: { title: "Добавить это изображение?", change: "Отмена" },
                                video: { title: "Добавить это видео?", change: "Отмена" },
                                crop: { title: "Обрезать и добавить это изображение", done: "Готово", free: "произв." },
                                error: { "default": { title: "Ой!", text: "Что-то пошло не так во время загрузки.", back: "Пожалуйста, попробуйте ещё раз" }, image: { title: "Можно загружать только изображения.", text: "Попробуйте загрузить другой файл.", back: "Выберите изображение" }, size: { title: "Размер выбранного файла превышает лимит.", text: "Попробуйте загрузить другой файл." }, loadImage: { title: "Ошибка", text: "Изображение не удалось загрузить" } },
                                multiple: { title: "Вы выбрали %files%", question: "Добавить все эти файлы?", tooManyFiles: "Вы выбрали слишком много файлов. %max% максимум.", tooFewFiles: "Вы выбрали %files%. Нужно не меньше %min%.", clear: "Удалить все", done: "Добавить", file: { preview: "Предпросмотр %file%", remove: "Удалить %file%" } }
                            }
                        }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.ru = function(e) { return 1 === (e / 10 % 10 | 0) || e % 10 === 0 || e % 10 > 4 ? "many" : e % 10 === 1 ? "one" : "few" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.sk = { uploading: "Nahrávam... Prosím počkajte.", loadingInfo: "Nahrávam informácie...", errors: { "default": "Chyba", baddata: "Nesprávna hodnota", size: "Súbor je príliš veľký", upload: "Nedá sa nahrať", user: "Nahrávanie bolo zrušené", info: "Informácie sa nedajú nahrať", image: "Povolené sú len obrázky", createGroup: "Nie je možné vytvoriť priečinok", deleted: "Súbor bol odstránený" }, draghere: "Sem presuňte súbor", file: { one: "%1 súbor", few: "%1 súbory", other: "%1 súborov" }, buttons: { cancel: "Zrušiť", remove: "Odstrániť", choose: { files: { one: "Vyberte súbor", other: "Vyberte súbory" }, images: { one: "Vyberte obrázok", other: "Vyberte obrázky" } } }, dialog: { close: "Zavrieť", openMenu: "Otvoriť menu", done: "Hotovo", showFiles: "Ukázať súbory", tabs: { names: { "empty-pubkey": "Vitajte", preview: "Náhľad", file: "Z počítača", url: "Z internetu", camera: "Kamera", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Disk Google", gphotos: "Google Obrázky", instagram: "Instagram", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "presuňte a vložte<br>akékoľvek súbory", nodrop: "Nahrajte súbory z vášho&nbsp;počítača", cloudsTip: "Cloud úložiská<br>a sociálne siete", or: "alebo", button: "Vyberte súbor z počítača", also: "alebo vyberte z" }, url: { title: "Súbory z internetu", line1: "Uložte akýkoľvek súbor z internetu.", line2: "Stačí pridať odkaz na neho.", input: "Vložte svoj odkaz sem...", button: "Nahrať" }, camera: { title: "Súbor z webkamery", capture: "Odfotiť", mirror: "Zrkadliť", startRecord: "Natočte video", stopRecord: "Prestať natáčať", cancelRecord: "Zrušiť", retry: "Znovu požiadať o prístup", pleaseAllow: { title: "Prosím povoľte prístup k vašej kamere", text: "Boli ste vyzvaní aby ste umožnili tejto stránke prístup ku kamere.<br>Prístup musíte povolit aby ste mohli fotiť s vašou kamerou." }, notFound: { title: "Kamera nebola nájdená", text: "Zdá sa, že k tomuto zariadeniu nemáte pripojenú kameru." } }, preview: { unknownName: "neznámy", change: "Zrušiť", back: "Späť", done: "Pridať", unknown: { title: "Nahráva sa... Prosím počkajte na náhľad.", done: "Preskočiť náhľad a nahrať" }, regular: { title: "Pridať tento súbor?", line1: "Chystáte sa pridať vyššie uvedený súbor.", line2: "Prosím potvrďte váš výber." }, image: { title: "Pridať tento obrázok?", change: "Zrušiť" }, crop: { title: "Orezať a pridať túto fotku", done: "Hotovo", free: "obnoviť" }, video: { title: "Pridať toto video?", change: "Zrušiť" }, error: { "default": { title: "Ejha!", text: "Pri nahrávaní sa vyskytla chyba.", back: "Skúste to znovu" }, image: { title: "Je možné nahrávať len obrázky", text: "Skúste to znovu s iným súborom.", back: "Vybrať obrázok" }, size: { title: "Súbor, ktorý ste vybrali presahuje povolenú veľkosť.", text: "Skúste to znovu s iným súborom." }, loadImage: { title: "Chyba", text: "Obrázok nie je možné vyhľadať" } }, multiple: { title: "Vybrali ste %files%.", question: "Pridať %files%?", tooManyFiles: "Vybrali ste príliš veľa súborov. Maximum je %max%.", tooFewFiles: "Vybrali ste %files%. Potrebných je aspoň %min%.", clear: "Odstrániť všetky", done: "Pridať", file: { preview: "Nahliadnuť na %file%", remove: "Odstrániť %file%" } } } } } } }), n.namespace("locale.pluralize", function(e) { return e.sk = function(e) { return 1 === e ? "one" : e >= 2 && 4 >= e ? "few" : "many" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.sr = { uploading: "Шаљем... Молимо сачекајте.", loadingInfo: "Учитавам информације...", errors: { "default": "Грешка", baddata: "Погрешна вредност", size: "Фајл је сувише велик", upload: "Не могу да пошаљем", user: "Слање прекинуто", info: "Не могу да учитам информације", image: "Дозвољене су само слике", createGroup: "Не могу да направим групу фајлова", deleted: "Фајл је обрисан" }, draghere: "Убаците фајл овде", file: { one: "%1 фајл", other: "%1 фајлова" }, buttons: { cancel: "Поништи", remove: "Избаци", choose: { files: { one: "Изабери фајл", other: "Изабери фајлове" }, images: { one: "Изабери слику", other: "Изабери слике" } } }, dialog: { close: "Затвори", openMenu: "Отвори мени", done: "Готово", showFiles: "Покажи фајлове", tabs: { names: { "empty-pubkey": "Добродошли", preview: "Погледај", file: "Локални фајлови", url: "Директан линк", camera: "Камера", facebook: "Фејсбук", dropbox: "Dropbox", gdrive: "Google Drive", gphotos: "Google Photos", instagram: "Инстаграм", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "превуци<br>било које фајлове", nodrop: "Пошаљи фајлове са твог&nbsp;компјутера", cloudsTip: "Клауд<br>и социјалне мреже", or: "или", button: "Изабери локални фајл", also: "или изабери" }, url: { title: "Фајлове са Интернета", line1: "Изабери било који фајл са Интернета.", line2: "Само убаци линк.", input: "Убаци линк овде...", button: "Пошаљи" }, camera: { title: "Фајл са камере", capture: "Усликај", mirror: "Огледало", startRecord: "Сними видео", stopRecord: "Заустави", cancelRecord: "Поништи", retry: "Тражи дозволу поново", pleaseAllow: { title: "Молимо вас да дозволите приступ вашој камери", text: "Упитани сте да дозволите приступ вашој камери са овог сајта.<br>Уколико желите да сликате, морате одобрити овај захтев." }, notFound: { title: "Камера није препозната", text: "Изгледа да немате камеру на овом уређају." } }, preview: { unknownName: "непознато", change: "Поништи", back: "Назад", done: "Додај", unknown: { title: "Шаљем... Сачекајте за приказ.", done: "Прескочи приказ и прихвати" }, regular: { title: "Додај овај фајл?", line1: "Управо ћете додати овај фајл изнад.", line2: "Молимо потврдите." }, image: { title: "Додај ову слику?", change: "Поништи" }, crop: { title: "Кропуј и додај ову слику", done: "Урађено", free: "слободно" }, video: { title: "Додај овај видео?", change: "Поништи" }, error: { "default": { title: "Ооопс!", text: "Нешто је искрсло у току слања.", back: "Молимо покушајте поново" }, image: { title: "Дозвљене су само слике.", text: "Молимо покушајте са другим фајлом.", back: "Изабери слику" }, size: { title: "Фајл који сте изабрали премашује лимит.", text: "Молимо покушајте са другим фајлом." }, loadImage: { title: "Грешка", text: "Не могу да учитам слику" } }, multiple: { title: "Изабрали сте %files%.", question: "Додај %files%?", tooManyFiles: "Изабрали сте превише фајлова. %max% је максимално.", tooFewFiles: "Изабрали сте %files%. Морате најмање %min% фајла.", clear: "Избаци све", done: "Додај", file: { preview: "Прегледај %file%", remove: "Избаци %file%" } } } }, footer: { text: "направио", link: "uploadcare" } } } }), n.namespace("locale.pluralize", function(e) { return e.sr = function(e) { return 1 === e ? "one" : "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.sv = {
                    uploading: "Laddar... Var god vänta.",
                    loadingInfo: "Laddar info...",
                    errors: { "default": "Fel", baddata: "Felaktigt värde", size: "Filen är för stor", upload: "Kan inte ladda upp", user: "Uppladdning avbruten", info: "Kan inte ladda informationen", image: "Endast bilder tillåtna", createGroup: "Kan inte skapa filgrupp", deleted: "Fil raderad" },
                    draghere: "Dra filen hit",
                    file: { one: "%1 fil", other: "%1 filer" },
                    buttons: { cancel: "Avbryt", remove: "Ta bort", choose: { files: { one: "Välj fil", other: "Välj filer" }, images: { one: "Välj en bild", other: "Välj bilder" } } },
                    dialog: {
                        done: "Klar",
                        showFiles: "Visa filer",
                        tabs: { names: { "empty-pubkey": "Välkommen", preview: "Förhandsgranskning", file: "Lokala filer", url: "Direkta länkar", camera: "Kamera" }, file: { drag: "Släpp filen här", nodrop: "Ladda upp filer från din dator", cloudsTip: "Molnlagring<br>och sociala nätverk", or: "eller", button: "Välj en lokal fil", also: "Du kan också välja den från" }, url: { title: "Filer från webben", line1: "Välj en fil från en webbadress.", line2: "Ange bara länken till filen.", input: "Klistra in din länk här...", button: "Ladda upp" }, camera: { capture: "Ta ett foto", mirror: "Spegel", retry: "Begär tillstånd igen", pleaseAllow: { title: "Vänligen ge tillgång till din kamera", text: "Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.För att ta bilder med din kamera måste du godkänna denna begäran." }, notFound: { title: "Ingen kamera hittades", text: "Det verkar som att du inte har någon kamera ansluten till denna enheten." } }, preview: { unknownName: "okänd", change: "Avbryt", back: "Tillbaka", done: "Lägg till", unknown: { title: "Laddar... Vänligen vänta på förhandsgranskning.", done: "Skippa förhandsgranskning och acceptera" }, regular: { title: "Lägg till denna filen?", line1: "Du håller på att lägga till filen ovan.", line2: "Vänligen bekräfta." }, image: { title: "Lägg till denna bilden?", change: "Avbryt" }, crop: { title: "Beskär och lägg till denna bild", done: "Klar", free: "fri" }, error: { "default": { title: "Oops!", text: "Någonting gick fel under uppladdningen.", back: "Vänligen försök igen" }, image: { title: "Endast bildfiler accepteras.", text: "Vänligen försök igen med en annan fil.", back: "Välj bild" }, size: { title: "Filen du har valt är för stor.", text: "Vänligen försök igen med en annan fil." }, loadImage: { title: "Fel", text: "Kan inte ladda bild" } }, multiple: { title: "Du har valt %files%", question: "Vill du lägga till alla dessa filer?", tooManyFiles: "Du har valt för många filer. %max% är max.", tooFewFiles: "Du har valt %files%. Minst %min% krävs.", clear: "Ta bort alla", done: "Klar" } } }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.sv = function(e) { return 1 === e ? "one" : "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.tr = { uploading: "Yükleniyor... Lütfen bekleyin.", loadingInfo: "Bilgiler yükleniyor...", errors: { "default": "Hata", baddata: "Geçersiz değer", size: "Dosya çok büyük", upload: "Yüklenemedi", user: "Yükleme iptal edildi", info: "Bilgiler getirilemedi", image: "Sadece resim dosyası yüklenebilir", createGroup: "Dosya grubu yaratılamıyor", deleted: "Dosya silinmiş" }, draghere: "Buraya bir dosya bırakın", file: { other: "%1 dosya" }, buttons: { cancel: "İptal", remove: "Kaldır", choose: { files: { one: "Dosya Seçin", other: "Dosya Seçin" }, images: { one: "Resim Dosyası Seçin", other: "Resim Dosyası Seçin" } } }, dialog: { done: "Bitti", showFiles: "Dosyaları Göster", tabs: { names: { "empty-pubkey": "Hoş geldiniz", preview: "Önizleme", file: "Bilgisayar", url: "Dış Bağlantılar", camera: "Kamera" }, file: { drag: "Buraya bir dosya bırakın", nodrop: "Bilgisayarınızdan dosya yükleyin", or: "ya da", button: "Bilgisayardan bir dosya seç", also: "Diğer yükleme seçenekleri", cloudsTip: "Bulut depolamalar<br>ve sosyal hizmetler" }, url: { title: "Webden dosyalar", line1: "Webden herhangi bir dosya seçin.", line2: "Dosya bağlantısını sağlayın.", input: "Bağlantınızı buraya yapıştırın...", button: "Yükle" }, camera: { capture: "Fotoğraf çek", mirror: "Ayna", retry: "Tekrar izin iste", pleaseAllow: { title: "Lütfen kameranıza erişilmesine izin verin", text: "Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir." }, notFound: { title: "Kamera algılanamadı", text: "Bu cihaza kamera bağlantısının olmadığı görünüyor." } }, preview: { unknownName: "bilinmeyen", change: "İptal", back: "Geri", done: "Ekle", unknown: { title: "Yükleniyor... Önizleme için lütfen bekleyin.", done: "Önizlemeyi geç ve kabul et" }, regular: { title: "Bu dosya eklensin mi?", line1: "Yukarıdaki dosyayı eklemek üzeresiniz.", line2: "Lütfen onaylayın." }, image: { title: "Bu görsel eklensin mi?", change: "İptal" }, crop: { title: "Bu görseli kes ve ekle", done: "Bitti" }, error: { "default": { title: "Aman!", text: "Yükleme sırasında bir hata oluştu.", back: "Lütfen tekrar deneyin." }, image: { title: "Sadece resim dosyaları kabul edilmektedir.", text: "Lütfen başka bir dosya ile tekrar deneyin.", back: "Resim dosyası seç" }, size: { title: "Seçtiğiniz dosya limitleri aşıyor.", text: "Lütfen başka bir dosya ile tekrar deneyin." }, loadImage: { title: "Hata", text: "Resim dosyası yüklenemedi" } }, multiple: { title: "%files% dosya seçtiniz", question: "Bu dosyaların hepsini eklemek istiyor musunuz?", tooManyFiles: "Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.", tooFewFiles: "%files% dosya seçtiniz, en az %min% dosya olmalıdır.", clear: "Hepsini kaldır", done: "Bitti" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.tr = function(e) { return "other" } }) }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.vi = { loadingInfo: "Đang tải thông tin...", errors: { "default": "Lỗi", baddata: "Giá trị không đúng", size: "Tệp quá lớn", upload: "Không thể tải lên", user: "Tải lên bị hủy", info: "Không thể nạp thông tin", image: "Chỉ cho phép các hình ảnh", createGroup: "Không thể tạo nhóm tệp", deleted: "Tệp đã bị xóa" }, uploading: "Đang tải lên... Vui lòng chờ đợi.", draghere: "Thả một tệp vào đây", file: { other: "%1 tệp" }, buttons: { cancel: "Hủy", remove: "Xóa", choose: { files: { other: "Lựa chọn các tệp" }, images: { other: "Lựa chọn hình ảnh" } } }, dialog: { close: "Đóng", openMenu: "Mở menu", done: "Xong", showFiles: "Hiển thị tệp", tabs: { names: { "empty-pubkey": "Chào mừng", preview: "Xem trước", file: "Các tệp trên máy", url: "Liên kết tr.tiếp", camera: "Máy ảnh", facebook: "Facebook", dropbox: "Dropbox", gdrive: "Google Drive", instagram: "Instagram", gphotos: "Google Photos", vk: "VK", evernote: "Evernote", box: "Box", skydrive: "OneDrive", flickr: "Flickr", huddle: "Huddle" }, file: { drag: "kéo & thả<br>bất kỳ tệp nào", nodrop: "Tải lên các tệp từ &nbsp;máy tính của bạn", cloudsTip: "Lưu trữ Đám mây<br>và các mạng xã hội", or: "hoặc", button: "Lựa chọn một tệp trên máy", also: "hoặc lựa chọn từ" }, url: { title: "Các tệp trên Web", line1: "Chọn bất từ tệp nào từ web.", line2: "Chỉ cần cung cấp liên kết.", input: "Dán liên kết của bạn xuống đây...", button: "Tải lên" }, camera: { title: "Tệp từ web cam", capture: "Chụp một bức ảnh", mirror: "Gương", startRecord: "Quay một video", cancelRecord: "Hủy", stopRecord: "Dừng", retry: "Yêu cầu cấp phép lần nữa", pleaseAllow: { text: "Bạn đã được nhắc nhở để cho phép truy cập vào camera từ trang này.<br>Để có thể chụp ảnh với camera, bạn phải chấp thuận yêu cầu này.", title: "Vui lòng cho phép truy cập tới camera của bạn" }, notFound: { title: "Không tìm thấy camera nào", text: "Có vẻ như bạn không có camera nào nối với thiết bị này." } }, preview: { unknownName: "vô danh", change: "Hủy", back: "Quay lại", done: "Thêm", unknown: { title: "Đang tải lên...Vui lòng đợi để xem trước.", done: "Bỏ qua và chấp nhận" }, regular: { title: "Thêm tệp này?", line1: "Bạn dự định thêm tệp ở trên.", line2: "Vui lòng chấp thuận." }, image: { title: "Thêm hình ảnh này?", change: "Hủy" }, crop: { title: "Cắt và thêm ảnh này", done: "Xong", free: "miễn phí" }, video: { title: "Thêm video này?", change: "Hủy" }, error: { "default": { title: "Ồ!", back: "Vui lòng thử lại", text: "Có lỗi gì đó trong quá trình tải lên." }, image: { title: "Chỉ chấp thuận các tệp hình ảnh.", text: "Vui lòng thử lại với một tệp mới.", back: "Lựa chọn hình ảnh" }, size: { title: "Tệp bạn đã lựa chọn vượt quá giới hạn", text: "Vui lòng thử lại với một tệp khác." }, loadImage: { title: "Lỗi", text: "Không thể tải hình ảnh" } }, multiple: { title: "Bạn đã lựa chọn %files%", question: "Thêm %files%?", tooManyFiles: "Bạn đã lựa chọn quá nhiều tệp. %max% là tối đa.", tooFewFiles: "Bạn đã lựa chọn %files%. Ít nhất cần %min%", clear: "Xoá Tất cả", file: { preview: "Xem trước %file%", remove: "Xóa %file%" }, done: "Thêm" } } }, footer: { text: "được hỗ trợ bởi", link: "uploadcare" } } } }), n.namespace("locale.pluralize", function(e) { return e.vi = function(e) { return "other" } }) }.call(this),
        function() {
            n.namespace("locale.translations", function(e) {
                return e.zhTW = {
                    uploading: "上傳中...請等待",
                    loadingInfo: "正在讀取資訊...",
                    errors: { "default": "錯誤", baddata: "錯誤資料", size: "檔案太大", upload: "無法上傳", user: "上傳被取消", info: "無法讀取資訊", image: "只允許圖片檔案", createGroup: "無法建立檔案群組", deleted: "檔案已被刪除" },
                    draghere: "拖放檔案到這裡",
                    file: { other: "%1 個檔案" },
                    buttons: { cancel: "取消", remove: "刪除", choose: { files: { one: "選擇檔案", other: "選擇檔案" }, images: { one: "選擇圖片", other: "選擇圖片" } } },
                    dialog: {
                        done: "完成",
                        showFiles: "顯示檔案",
                        tabs: { names: { "empty-pubkey": "歡迎", preview: "預覽", file: "從本機上傳", url: "任意圖片連結", camera: "相機" }, file: { drag: "拖放檔案到這裡", nodrop: "從你的本機中上傳", cloudsTip: "雲端硬碟<br>與社群網站", or: "或者", button: "從本機中選取檔案", also: "你也可以選自" }, url: { title: "來自網際網路的檔案", line1: "從網際網路選取檔案", line2: "只需提供連結", input: "將連結複製至此...", button: "上傳" }, camera: { capture: "拍照", mirror: "鏡像", retry: "重新取得相機權限", pleaseAllow: { title: "請允許使存取您的相機", text: "你一直在提示允許來自這個網站的訪問攝像頭。為了拍照用你的相機，你必須批准這一請求。" }, notFound: { title: "沒有找到相機", text: "看起來你有沒有將連接相機。" } }, preview: { unknownName: "未知", change: "取消", back: "返回", done: "加入", unknown: { title: "上傳中...請等待預覽", done: "跳過預覽，直接接受" }, regular: { title: "加入這個檔案？", line1: "你將加入上面的檔案。", line2: "請確認。" }, image: { title: "加入這個圖片？", change: "取消" }, crop: { title: "裁切並加入這個圖片", done: "完成", free: "自由裁切" }, error: { "default": { title: "錯誤！", text: "上傳過程中出錯。", back: "請重試" }, image: { title: "只允許上傳圖片檔案。", text: "請選擇其他檔案重新上傳。", back: "選擇圖片" }, size: { title: "你選取的檔案超過了100MB的上限", text: "請用另一個檔案再試一次。" }, loadImage: { title: "錯誤", text: "無法讀取圖片" } }, multiple: { title: "你已經選擇 %files%", question: "你要加入所有檔案嗎？", tooManyFiles: "你選了太多的檔案. 最多可選擇%max%. 請刪除一些。", tooFewFiles: "你所選擇的檔案 %files%. 至少要 %min% .", clear: "清空", done: "完成" } } }
                    }
                }
            }), n.namespace("locale.pluralize", function(e) { return e.zhTW = function(e) { return "other" } })
        }.call(this),
        function() { n.namespace("locale.translations", function(e) { return e.zh = { uploading: "上传中...请等待", loadingInfo: "正在读取信息...", errors: { "default": "错误", baddata: "错误数据", size: "文件太大", upload: "无法上传", user: "上传被取消", info: "无法读取信息", image: "只允许图形文件", createGroup: "无法建立文件组", deleted: "文件已被删除" }, draghere: "拖放文件到这里", file: { other: "%1 个文件" }, buttons: { cancel: "取消", remove: "删除" }, dialog: { done: "完成", showFiles: "显示文件", tabs: { names: { url: "任意图片链接" }, file: { drag: "拖放文件到这里", nodrop: "从你的电脑中上传", or: "或者", button: "从电脑中选取文件", also: "你也可以选自" }, url: { title: "来自互联网的文件", line1: "从互联网选取文件", line2: "只需提供链接", input: "将链接拷贝至此...", button: "上传" }, preview: { unknownName: "未知", change: "取消", back: "返回", done: "添加", unknown: { title: "上传中...请等待预览", done: "跳过预览，直接接受" }, regular: { title: "添加这个文件?", line1: "你将添加上面的文件。", line2: "请确认。" }, image: { title: "添加这个图片?", change: "取消" }, crop: { title: "剪裁并添加这个图片", done: "完成" }, error: { "default": { title: "错误!", text: "上传过程中出错。", back: "请重试" }, image: { title: "只允许上传图片文件。", text: "请选择其他文件重新上传。", back: "选择图片" }, size: { title: "你选取的文件超过了100MB的上限", text: "请用另一个文件再试一次。" }, loadImage: { title: "错误", text: "无法读取图片" } }, multiple: { title: "你已经选择 %files%", question: "你要添加所有文件吗？", tooManyFiles: "你选了太多的文件. 最多可选择%max%. 请删除一些。", clear: "清空", done: "完成" } } } } } }), n.namespace("locale.pluralize", function(e) { return e.zh = function() { return "other" } }) }.call(this),
        function() {
            var e;
            n.jQuery.noConflict(!0), n.expose("locales", function() {
                var t;
                t = [];
                for (e in n.locale.translations) t.push(e);
                return t
            }())
        }.call(this), n.__exports
});