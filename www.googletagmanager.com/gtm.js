// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "4",

            "macros": [{
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [],
            "predicates": [],
            "rules": []
        },
        "runtime": []





    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, ca = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        da = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                    a: !0
                },
                ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        fa = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var la = fa,
        ma = function(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.fl = b.prototype
        },
        na = this || self,
        oa = function(a) {
            return a
        };
    var pa = function() {},
        qa = function(a) {
            return "function" === typeof a
        },
        h = function(a) {
            return "string" === typeof a
        },
        ra = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        sa = Array.isArray,
        ta = function(a, b) {
            if (a && sa(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        ua = function(a, b) {
            if (!ra(a) || !ra(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        xa = function(a, b) {
            for (var c = new va, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        k = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        za = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Aa = function(a) {
            return Math.round(Number(a)) || 0
        },
        Ba = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Ca = function(a) {
            var b = [];
            if (sa(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Da = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Ea = function() {
            return new Date(Date.now())
        },
        Fa = function() {
            return Ea().getTime()
        },
        va = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    va.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    va.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ga = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Ha = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Ia = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Ja = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        La = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ma = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        Na = /^\w{1,9}$/,
        Oa = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            k(a, function(d, e) {
                Na.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        Qa = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function Ra() {
        for (var a = Sa, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function Ta() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var Sa, Ua;

    function Va(a) {
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                l = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | l >> 6,
                q = l & 63;
            e || (q = 64, d || (p = 64));
            b.push(Sa[m], Sa[n], Sa[p], Sa[q])
        }
        return b.join("")
    }

    function Wa(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = Ua[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        Sa = Sa || Ta();
        Ua = Ua || Ra();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                l = b(64);
            if (64 === l && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != l && (c += String.fromCharCode(g << 6 & 192 | l)))
        }
    };
    var Xa = {},
        Ya = function(a, b) {
            Xa[a] = Xa[a] || [];
            Xa[a][b] = !0
        },
        Za = function() {
            delete Xa.GA4_EVENT
        },
        $a = function(a) {
            var b = Xa[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return Va(c.join("")).replace(/\.+$/, "")
        };
    var ab = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var bb, cb = function() {
        if (void 0 === bb) {
            var a = null,
                b = na.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (c) {
                    na.console && na.console.error(c.message)
                }
                bb = a
            } else bb = a
        }
        return bb
    };
    var eb = function(a, b) {
        this.h = b === db ? a : ""
    };
    eb.prototype.toString = function() {
        return this.h + ""
    };
    var db = {};
    var fb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    var gb, hb;
    a: {
        for (var ib = ["CLOSURE_FLAGS"], jb = na, kb = 0; kb < ib.length; kb++)
            if (jb = jb[ib[kb]], null == jb) {
                hb = null;
                break a
            }
        hb = jb
    }
    var lb = hb && hb[610401301];
    gb = null != lb ? lb : !1;

    function mb() {
        var a = na.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var nb, ob = na.navigator;
    nb = ob ? ob.userAgentData || null : null;

    function pb(a) {
        return gb ? nb ? nb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function qb(a) {
        return -1 != mb().indexOf(a)
    };

    function rb() {
        return gb ? !!nb && 0 < nb.brands.length : !1
    }

    function sb() {
        return rb() ? !1 : qb("Opera")
    }

    function tb() {
        return qb("Firefox") || qb("FxiOS")
    }

    function ub() {
        return rb() ? pb("Chromium") : (qb("Chrome") || qb("CriOS")) && !(rb() ? 0 : qb("Edge")) || qb("Silk")
    };
    var vb = {},
        wb = function(a, b) {
            this.h = b === vb ? a : ""
        };
    wb.prototype.toString = function() {
        return this.h.toString()
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function xb(a, b) {
        if (void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("");
            if ("style" === a.tagName.toLowerCase()) throw Error("");
        }
        a.innerHTML = b instanceof wb && b.constructor === wb ? b.h : "type_error:SafeHtml"
    };

    function yb(a) {
        var b = a = zb(a),
            c = cb(),
            d = c ? c.createHTML(b) : b;
        return new wb(d, vb)
    }

    function zb(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Ab = navigator,
        Bb = C.currentScript && C.currentScript.src,
        Cb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Db = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Eb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Fb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Gb(a, b, c) {
        b && k(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Hb = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Gb(f, d, Eb);
            f.type = "text/javascript";
            f.async = !0;
            var g, l = zb(a),
                m = cb(),
                n = m ? m.createScriptURL(l) : l;
            g = new eb(n, db);
            f.src = g instanceof eb && g.constructor === eb ? g.h : "type_error:TrustedResourceUrl";
            var p, q, r, t = null == (r = (q = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : r.call(q, "script[nonce]");
            (p = t ? t.nonce || t.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", p);
            Db(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var u = C.getElementsByTagName("script")[0] || C.body || C.head;
                u.parentNode.insertBefore(f, u)
            }
            return f
        },
        Ib = function() {
            if (Bb) {
                var a = Bb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Jb = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                l = !1;
            g || (g = C.createElement("iframe"), l = !0);
            Gb(g, c, Fb);
            d && k(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (l) {
                var m = C.body && C.body.lastChild || C.body ||
                    C.head;
                m.parentNode.insertBefore(g, m)
            }
            Db(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Kb = function(a, b, c, d) {
            var e = new Image(1, 1);
            Gb(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Lb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Mb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        E = function(a) {
            z.setTimeout(a, 0)
        },
        Nb = function(a, b) {
            return a &&
                b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Ob = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Pb = function(a) {
            var b = C.createElement("div");
            xb(b, yb("A<div>" + a + "</div>"));
            b = b.lastChild;
            for (var c = []; b.firstChild;) c.push(b.removeChild(b.firstChild));
            return c
        },
        Qb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Rb = function(a) {
            var b;
            try {
                b = Ab.sendBeacon && Ab.sendBeacon(a)
            } catch (c) {
                Ya("TAGGING", 15)
            }
            b || Kb(a)
        },
        Sb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Tb = function() {
            var a = z.performance;
            if (a && qa(a.now)) return a.now()
        },
        Ub = function() {
            return z.performance || void 0
        };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var Vb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        Wb = function(a) {
            if (null == a) return String(a);
            var b = Vb.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        Xb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        Yb = function(a) {
            if (!a || "object" != Wb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !Xb(a, "constructor") && !Xb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || Xb(a, b)
        },
        G = function(a, b) {
            var c = b || ("array" == Wb(a) ? [] : {}),
                d;
            for (d in a)
                if (Xb(a, d)) {
                    var e = a[d];
                    "array" == Wb(e) ? ("array" != Wb(c[d]) && (c[d] = []), c[d] = G(e, c[d])) : Yb(e) ? (Yb(c[d]) || (c[d] = {}), c[d] = G(e, c[d])) : c[d] = e
                }
            return c
        };
    var Zb = function(a) {
        if (void 0 === a || sa(a) || Yb(a)) return !0;
        switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
            case "function":
                return !0
        }
        return !1
    };
    var $b = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Yh: a("consent"),
            eg: a("convert_case_to"),
            fg: a("convert_false_to"),
            gg: a("convert_null_to"),
            hg: a("convert_true_to"),
            ig: a("convert_undefined_to"),
            Lk: a("debug_mode_metadata"),
            Qa: a("function"),
            jf: a("instance_name"),
            Vi: a("live_only"),
            Wi: a("malware_disabled"),
            Xi: a("metadata"),
            aj: a("original_activity_id"),
            Pk: a("original_vendor_template_id"),
            Ok: a("once_on_load"),
            Zi: a("once_per_event"),
            dh: a("once_per_load"),
            Rk: a("priority_override"),
            Sk: a("respected_consent_types"),
            hh: a("setup_tags"),
            pb: a("tag_id"),
            mh: a("teardown_tags")
        }
    }();
    var vc;
    var wc = [],
        xc = [],
        yc = [],
        zc = [],
        Ac = [],
        Bc = {},
        Cc, Dc, Fc = function() {
            var a = Ec;
            Dc = Dc || a
        },
        Gc, Hc = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = Bc[c],
                f = {},
                g;
            for (g in a) a.hasOwnProperty(g) && 0 === g.indexOf("vtp_") && (e && d && d.rh && d.rh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]);
            e && d && d.qh && (f.vtp_gtmCachedValues = d.qh);
            if (b) {
                if (null == b.name) {
                    var l;
                    a: {
                        var m = b.index;
                        if (null == m) l = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = wc[m];
                                    break;
                                case 1:
                                    n = zc[m];
                                    break;
                                default:
                                    l = "";
                                    break a
                            }
                            var p = n && n[$b.jf];
                            l = p ? String(p) : ""
                        }
                    }
                    b.name = l
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : vc(c, f, b)
        },
        Jc = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = Ic(a[e], b, c));
            return d
        },
        Ic = function(a, b, c) {
            if (sa(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(Ic(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = wc[f];
                        if (!g || b.Cf(g)) return;
                        c[f] = !0;
                        var l =
                            String(g[$b.jf]);
                        try {
                            var m = Jc(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = Hc(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: l
                            });
                            Gc && (d = Gc.oj(d, m))
                        } catch (x) {
                            b.Ch && b.Ch(x, Number(f), l), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[Ic(a[n], b, c)] = Ic(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = Ic(a[q], b, c);
                            Dc && (p = p || r === Dc.Vd);
                            d.push(r)
                        }
                        return Dc && p ? Dc.qj(d) : d.join("");
                    case "escape":
                        d = Ic(a[1], b, c);
                        if (Dc && sa(a[1]) && "macro" ===
                            a[1][0] && Dc.Pj(a)) return Dc.jk(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) ac[a[t]] && (d = ac[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!zc[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            wh: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] = a[1];
                        var w = Kc(v, b, c),
                            y = !!a[4];
                        return y || 2 !== w ? y !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        Kc = function(a, b, c) {
            try {
                return Cc(Jc(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var Nc = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Lc(a), f = 0; f < xc.length; f++) {
                var g = xc[f],
                    l = Mc(g, e);
                if (l) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === l && b(g.block || []);
            }
            for (var p = [], q = 0; q < zc.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Mc = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var l = b(f[g]);
                if (2 === l) return null;
                if (1 === l) return !1
            }
            return !0
        },
        Lc = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = Kc(yc[c], a));
                return b[c]
            }
        };
    var Oc = {
        oj: function(a, b) {
            b[$b.eg] && "string" === typeof a && (a = 1 == b[$b.eg] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty($b.gg) && null === a && (a = b[$b.gg]);
            b.hasOwnProperty($b.ig) && void 0 === a && (a = b[$b.ig]);
            b.hasOwnProperty($b.hg) && !0 === a && (a = b[$b.hg]);
            b.hasOwnProperty($b.fg) && !1 === a && (a = b[$b.fg]);
            return a
        }
    };
    var gd = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function hd(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var id = new va;

    function jd(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = id.get(e);
            f || (f = new RegExp(b, d), id.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    };
    var qd = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function td(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a << 2 | b]
    };
    var vd = function(a) {
            return ud ? C.querySelectorAll(a) : null
        },
        wd = function(a, b) {
            if (!ud) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        xd = !1;
    if (C.querySelectorAll) try {
        var yd = C.querySelectorAll(":root");
        yd && 1 == yd.length && yd[0] == C.documentElement && (xd = !0)
    } catch (a) {}
    var ud = xd;
    var J = function(a) {
        Ya("GTM", a)
    };
    var N = {
            g: {
                H: "ad_storage",
                R: "analytics_storage",
                pd: "region",
                we: "consent_updated",
                Zf: "wait_for_update",
                ci: "app_remove",
                di: "app_store_refund",
                ei: "app_store_subscription_cancel",
                fi: "app_store_subscription_convert",
                gi: "app_store_subscription_renew",
                jg: "add_payment_info",
                kg: "add_shipping_info",
                nc: "add_to_cart",
                oc: "remove_from_cart",
                lg: "view_cart",
                Pb: "begin_checkout",
                qc: "select_item",
                sb: "view_item_list",
                Qb: "select_promotion",
                tb: "view_promotion",
                Ga: "purchase",
                sc: "refund",
                Ha: "view_item",
                mg: "add_to_wishlist",
                hi: "first_open",
                ii: "first_visit",
                ma: "gtag.config",
                Aa: "gtag.get",
                ji: "in_app_purchase",
                uc: "page_view",
                ki: "session_start",
                Be: "user_engagement",
                ub: "gclid",
                fa: "ads_data_redaction",
                W: "allow_ad_personalization_signals",
                rd: "allow_custom_scripts",
                li: "allow_display_features",
                sd: "allow_enhanced_conversions",
                kb: "allow_google_signals",
                wa: "allow_interest_groups",
                vc: "auid",
                mi: "auto_detection_enabled",
                vb: "aw_remarketing",
                Ce: "aw_remarketing_only",
                ud: "discount",
                vd: "aw_feed_country",
                wd: "aw_feed_language",
                aa: "items",
                xd: "aw_merchant_id",
                ng: "aw_basket_type",
                yd: "campaign_content",
                zd: "campaign_id",
                Ad: "campaign_medium",
                Bd: "campaign_name",
                wc: "campaign",
                Cd: "campaign_source",
                Dd: "campaign_term",
                lb: "client_id",
                ni: "content_group",
                oi: "content_type",
                Ba: "conversion_cookie_prefix",
                xc: "conversion_id",
                na: "conversion_linker",
                Rb: "conversion_api",
                Oa: "cookie_domain",
                Ca: "cookie_expires",
                Pa: "cookie_flags",
                Sb: "cookie_name",
                Ed: "cookie_path",
                Ia: "cookie_prefix",
                nb: "cookie_update",
                wb: "country",
                oa: "currency",
                Fd: "customer_lifetime_value",
                xb: "custom_map",
                ri: "gcldc",
                si: "debug_mode",
                V: "developer_id",
                ui: "disable_merchant_reported_purchases",
                De: "dc_custom_params",
                og: "dc_natural_search",
                Ee: "dynamic_event_settings",
                vi: "affiliation",
                pg: "checkout_option",
                qg: "checkout_step",
                wi: "coupon",
                Fe: "item_list_name",
                Ge: "list_name",
                xi: "promotions",
                Gd: "shipping",
                rg: "tax",
                Hd: "engagement_time_msec",
                yc: "enhanced_client_id",
                zc: "enhanced_conversions",
                sg: "enhanced_conversions_automatic_settings",
                Id: "estimated_delivery_date",
                He: "euid_logged_in_state",
                Tb: "event_callback",
                yb: "event_developer_id_string",
                ug: "event",
                Jd: "event_settings",
                Kd: "event_timeout",
                yi: "experiments",
                Ie: "firebase_id",
                Ld: "first_party_collection",
                Md: "_x_20",
                zb: "_x_19",
                vg: "fledge",
                wg: "flight_error_code",
                xg: "flight_error_message",
                zi: "fl_activity_category",
                Ai: "fl_activity_group",
                Bi: "fl_advertiser_id",
                Ci: "fl_ar_dedupe",
                Di: "fl_random_number",
                Ei: "tran",
                Fi: "u",
                Je: "gac_gclid",
                Ac: "gac_wbraid",
                yg: "gac_wbraid_multiple_conversions",
                Ke: "ga_restrict_domain",
                Le: "ga_temp_client_id",
                Me: "gdpr_applies",
                zg: "geo_granularity",
                Ua: "value_callback",
                Ja: "value_key",
                Mk: "google_ono",
                Va: "google_signals",
                Nd: "google_tld",
                Od: "groups",
                Ag: "gsa_experiment_id",
                Bg: "iframe_state",
                Pd: "ignore_referrer",
                Ne: "internal_traffic_results",
                Qd: "is_legacy_loaded",
                Oe: "is_passthrough",
                Da: "language",
                Pe: "legacy_developer_id_string",
                qa: "linker",
                Ub: "accept_incoming",
                Bb: "decorate_forms",
                O: "domains",
                Vb: "url_position",
                Cg: "method",
                Bc: "new_customer",
                Dg: "non_interaction",
                Gi: "optimize_id",
                Eg: "page_hostname",
                Wb: "page_path",
                Ea: "page_referrer",
                Cb: "page_title",
                Fg: "passengers",
                Gg: "phone_conversion_callback",
                Hi: "phone_conversion_country_code",
                Hg: "phone_conversion_css_class",
                Ii: "phone_conversion_ids",
                Ig: "phone_conversion_number",
                Jg: "phone_conversion_options",
                Rd: "quantity",
                Cc: "redact_device_info",
                Qe: "redact_enhanced_user_id",
                Ji: "redact_ga_client_id",
                Ki: "redact_user_id",
                Sd: "referral_exclusion_definition",
                Db: "restricted_data_processing",
                Li: "retoken",
                Kg: "screen_name",
                Eb: "screen_resolution",
                Mi: "search_term",
                Ka: "send_page_view",
                Fb: "send_to",
                Dc: "session_duration",
                Td: "session_engaged",
                Re: "session_engaged_time",
                Wa: "session_id",
                Ud: "session_number",
                Ec: "delivery_postal_code",
                Lg: "temporary_client_id",
                Te: "topmost_url",
                Ni: "tracking_id",
                Ue: "traffic_type",
                sa: "transaction_id",
                va: "transport_url",
                Mg: "trip_type",
                Fc: "update",
                Xa: "url_passthrough",
                Ve: "_user_agent_architecture",
                We: "_user_agent_bitness",
                Xe: "_user_agent_full_version_list",
                Ye: "_user_agent_mobile",
                Ze: "_user_agent_model",
                af: "_user_agent_platform",
                bf: "_user_agent_platform_version",
                cf: "_user_agent_wow64",
                ka: "user_data",
                Ng: "user_data_auto_latency",
                Og: "user_data_auto_meta",
                Pg: "user_data_auto_multi",
                Qg: "user_data_auto_selectors",
                Rg: "user_data_auto_status",
                df: "user_data_mode",
                ef: "user_data_settings",
                xa: "user_id",
                La: "user_properties",
                Sg: "us_privacy_string",
                ia: "value",
                Gc: "wbraid",
                Tg: "wbraid_multiple_conversions",
                Zg: "_host_name",
                ah: "_in_page_command",
                bh: "_is_passthrough_cid",
                kf: "non_personalized_ads",
                Nc: "_sst_parameters",
                Ta: "conversion_label",
                ra: "page_location",
                Ab: "global_developer_id_string",
                Se: "tc_privacy_string"
            }
        },
        Wd = {},
        Xd = Object.freeze((Wd[N.g.W] =
            1, Wd[N.g.sd] = 1, Wd[N.g.kb] = 1, Wd[N.g.aa] = 1, Wd[N.g.Oa] = 1, Wd[N.g.Ca] = 1, Wd[N.g.Pa] = 1, Wd[N.g.Sb] = 1, Wd[N.g.Ed] = 1, Wd[N.g.Ia] = 1, Wd[N.g.nb] = 1, Wd[N.g.xb] = 1, Wd[N.g.V] = 1, Wd[N.g.Ee] = 1, Wd[N.g.Tb] = 1, Wd[N.g.Jd] = 1, Wd[N.g.Kd] = 1, Wd[N.g.Ld] = 1, Wd[N.g.Ke] = 1, Wd[N.g.Va] = 1, Wd[N.g.Nd] = 1, Wd[N.g.Od] = 1, Wd[N.g.Ne] = 1, Wd[N.g.Qd] = 1, Wd[N.g.qa] = 1, Wd[N.g.Qe] = 1, Wd[N.g.Sd] = 1, Wd[N.g.Db] = 1, Wd[N.g.Ka] = 1, Wd[N.g.Fb] = 1, Wd[N.g.Dc] = 1, Wd[N.g.Re] = 1, Wd[N.g.Ec] = 1, Wd[N.g.va] = 1, Wd[N.g.Fc] = 1, Wd[N.g.ef] = 1, Wd[N.g.La] = 1, Wd[N.g.Nc] = 1, Wd));
    Object.freeze([N.g.ra, N.g.Ea, N.g.Cb, N.g.Da, N.g.Kg, N.g.xa, N.g.Ie, N.g.ni]);
    var Yd = {},
        Zd = Object.freeze((Yd[N.g.ci] = 1, Yd[N.g.di] = 1, Yd[N.g.ei] = 1, Yd[N.g.fi] = 1, Yd[N.g.gi] = 1, Yd[N.g.hi] = 1, Yd[N.g.ii] = 1, Yd[N.g.ji] = 1, Yd[N.g.ki] = 1, Yd[N.g.Be] = 1, Yd)),
        $d = {},
        ae = Object.freeze(($d[N.g.jg] = 1, $d[N.g.kg] = 1, $d[N.g.nc] = 1, $d[N.g.oc] = 1, $d[N.g.lg] = 1, $d[N.g.Pb] = 1, $d[N.g.qc] = 1, $d[N.g.sb] = 1, $d[N.g.Qb] = 1, $d[N.g.tb] = 1, $d[N.g.Ga] = 1, $d[N.g.sc] = 1, $d[N.g.Ha] = 1, $d[N.g.mg] = 1, $d)),
        be = Object.freeze([N.g.W, N.g.kb, N.g.nb]),
        ce = Object.freeze([].concat(be)),
        ee = Object.freeze([N.g.Ca, N.g.Kd, N.g.Dc, N.g.Re, N.g.Hd]),
        fe = Object.freeze([].concat(ee)),
        ge = {},
        he = (ge[N.g.H] = "1", ge[N.g.R] = "2", ge),
        ie = {},
        je = Object.freeze((ie[N.g.W] = 1, ie[N.g.sd] = 1, ie[N.g.wa] = 1, ie[N.g.vb] = 1, ie[N.g.Ce] = 1, ie[N.g.ud] = 1, ie[N.g.vd] = 1, ie[N.g.wd] = 1, ie[N.g.aa] = 1, ie[N.g.xd] = 1, ie[N.g.Ba] = 1, ie[N.g.na] = 1, ie[N.g.Oa] = 1, ie[N.g.Ca] = 1, ie[N.g.Pa] = 1, ie[N.g.Ia] = 1, ie[N.g.oa] = 1, ie[N.g.Fd] = 1, ie[N.g.V] = 1, ie[N.g.ui] = 1, ie[N.g.zc] = 1, ie[N.g.Id] = 1, ie[N.g.Ie] = 1, ie[N.g.Ld] = 1, ie[N.g.Qd] = 1, ie[N.g.Da] = 1, ie[N.g.Bc] = 1, ie[N.g.ra] = 1, ie[N.g.Ea] = 1, ie[N.g.Gg] = 1, ie[N.g.Hg] = 1, ie[N.g.Ig] =
            1, ie[N.g.Jg] = 1, ie[N.g.Db] = 1, ie[N.g.Ka] = 1, ie[N.g.Fb] = 1, ie[N.g.Ec] = 1, ie[N.g.sa] = 1, ie[N.g.va] = 1, ie[N.g.Fc] = 1, ie[N.g.Xa] = 1, ie[N.g.ka] = 1, ie[N.g.xa] = 1, ie[N.g.ia] = 1, ie));
    Object.freeze(N.g);
    var ke = {},
        le = z.google_tag_manager = z.google_tag_manager || {},
        me = Math.random();
    ke.nf = "3430";
    ke.Mc = Number("0") || 0;
    ke.ca = "dataLayer";
    ke.ai = "ChEI8JWvoQYQjfqyh8Cfh9fSARIkAFNud2XcSDrNiXt6+83bLCQ0g6ADPXDzicsF57psu6bDDveaGgJ0wg\x3d\x3d";
    var ne = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        oe = {
            __paused: !0,
            __tg: !0
        },
        pe;
    for (pe in ne) ne.hasOwnProperty(pe) && (oe[pe] = !0);
    var qe = Ba(""),
        re, se = !1;
    re = se;
    var te, ue = !1;
    te = ue;
    var ve, we = !1;
    ve = we;
    var xe, ye = !1;
    xe = ye;
    ke.qd = "www.googletagmanager.com";
    var ze = "" + ke.qd + (re ? "/gtag/js" : "/gtm.js"),
        Ae = null,
        Be = null,
        Ce = {},
        De = {},
        Ee = {},
        Fe = function() {
            var a = le.sequence || 1;
            le.sequence = a + 1;
            return a
        };
    ke.Zh = "";
    var Ge = "";
    ke.Zd = Ge;
    var He = new va,
        Ie = {},
        Je = {},
        Me = {
            name: ke.ca,
            set: function(a, b) {
                G(Ma(a, b), Ie);
                Ke()
            },
            get: function(a) {
                return Le(a, 2)
            },
            reset: function() {
                He = new va;
                Ie = {};
                Ke()
            }
        },
        Le = function(a, b) {
            return 2 != b ? He.get(a) : Ne(a)
        },
        Ne = function(a) {
            var b, c = a.split(".");
            b = b || [];
            for (var d = Ie, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Oe = function(a, b) {
            Je.hasOwnProperty(a) || (He.set(a, b), G(Ma(a, b), Ie), Ke())
        },
        Ke = function(a) {
            k(Je, function(b, c) {
                He.set(b, c);
                G(Ma(b), Ie);
                G(Ma(b,
                    c), Ie);
                a && delete Je[b]
            })
        },
        Pe = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ne(a) : He.get(a);
            "array" === Wb(d) || "object" === Wb(d) ? c = G(d) : c = d;
            return c
        };
    var Qe = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var Re = function(a) {
        Re[" "](a);
        return a
    };
    Re[" "] = function() {};
    var Te = function() {
        var a = Se,
            b = "Af";
        if (a.Af && a.hasOwnProperty(b)) return a.Af;
        var c = new a;
        return a.Af = c
    };
    var Se = function() {
        var a = {};
        this.h = function() {
            var b = Qe.h,
                c = Qe.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.m = function() {
            a[Qe.h] = !0
        }
    };
    var Ue = !1,
        Ve = !1,
        We = [];

    function Xe() {
        var a = Cb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: Ye,
            update: bf,
            declare: cf,
            addListener: df,
            notifyListeners: ef,
            active: !1,
            usedDeclare: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function cf(a, b, c, d, e) {
        var f = Xe();
        f.active = !0;
        f.usedDeclare = !0;
        var g = f.entries,
            l = g[a] || {},
            m = l.declare_region,
            n = c && h(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if ("" === d || n === e || (n === d ? m !== e : !n && !m)) {
            var p = {
                region: l.region,
                declare_region: n,
                declare: "granted" === b,
                initial: l.initial,
                update: l.update,
                quiet: l.quiet
            };
            if ("" !== d || !1 !== l.declare) g[a] = p
        }
    }

    function Ye(a, b, c, d, e, f) {
        var g = Xe();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        Ya("TAGGING", 19);
        if (void 0 == b) Ya("TAGGING", 18);
        else {
            var l = g.entries,
                m = l[a] || {},
                n = m.region,
                p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === m.update),
                    r = {
                        region: p,
                        declare_region: m.declare_region,
                        initial: "granted" === b,
                        declare: m.declare,
                        update: m.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== m.initial) l[a] =
                    r;
                q && z.setTimeout(function() {
                    l[a] === r && r.quiet && (r.quiet = !1, ff(a), ef(), Ya("TAGGING", 2))
                }, f)
            }
        }
    }

    function bf(a, b) {
        var c = Xe();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = gf(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = gf(c, a);
            f.quiet ? (f.quiet = !1, ff(a)) : g !== d && ff(a)
        }
    }

    function df(a, b) {
        We.push({
            consentTypes: a,
            xj: b
        })
    }

    function ff(a) {
        for (var b = 0; b < We.length; ++b) {
            var c = We[b];
            sa(c.consentTypes) && -1 !== c.consentTypes.indexOf(a) && (c.Gh = !0)
        }
    }

    function ef(a, b) {
        for (var c = 0; c < We.length; ++c) {
            var d = We[c];
            if (d.Gh) {
                d.Gh = !1;
                try {
                    d.xj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function gf(a, b) {
        var c = a.entries[b] || {},
            d = c.update;
        if (void 0 !== d) return d;
        d = c.initial;
        return void 0 !== d ? d : c.declare
    }
    var hf = function(a) {
            var b = Xe();
            b.accessedAny = !0;
            return gf(b, a)
        },
        jf = function(a) {
            var b = Xe();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        kf = function(a) {
            return (Xe().entries[a] || {}).declare
        },
        lf = function(a) {
            var b = Xe();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        mf = function() {
            if (!Te().h()) return !1;
            var a = Xe();
            a.accessedAny = !0;
            return a.active
        },
        nf = function() {
            var a = Xe();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        of = function(a, b) {
            Xe().addListener(a, b)
        },
        pf = function(a, b) {
            Xe().notifyListeners(a,
                b)
        },
        qf = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!lf(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1; of (b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        rf = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var l = d[g];
                    !1 === hf(l) || e[l] || (f.push(l), e[l] = !0)
                }
                return f
            }
            var d = h(b) ? [b] : b,
                e = {};
            c().length !== d.length && of (d, function(f) {
                var g = c();
                0 < g.length && (f.consentTypes = g, a(f))
            })
        };
    var sf = /:[0-9]+$/,
        tf = /^\d+\.fls\.doubleclick\.net$/,
        uf = function(a, b, c) {
            for (var d = a.split("&"), e = 0; e < d.length; e++) {
                var f = d[e].split("=");
                if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                    var g = f.slice(1).join("=");
                    return c ? g : decodeURIComponent(g).replace(/\+/g, " ")
                }
            }
        },
        xf = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = vf(a.protocol) || vf(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" ===
                a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(sf, "").toLowerCase());
            return wf(a, b, c, d, e)
        },
        wf = function(a, b, c, d, e) {
            var f, g = vf(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = yf(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(sf, "").toLowerCase();
                    if (c) {
                        var l = /^www\d*\./.exec(f);
                        l && l[0] && (f = f.substr(l[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname ||
                        a.hostname || Ya("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = uf(f, e));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        vf = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        yf = function(a) {
            var b = "";
            if (a &&
                a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        zf = function(a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ya("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(sf, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        Af = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = zf(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                l = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === l[0] && (l = l.substring(1));
            g = c(g);
            l = c(l);
            "" !== g && (g = "?" + g);
            "" !== l && (l = "#" + l);
            var m = "" + f + g + l;
            "/" === m[m.length - 1] && (m = m.substring(0, m.length - 1));
            return m
        },
        Bf = function(a) {
            var b = zf(z.location.href),
                c = xf(b, "host", !1);
            if (c && c.match(tf)) {
                var d = xf(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var Cf = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Df = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                l = g[0].replace(/^\s*|\s*$/g, "");
            if (l && l == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var Ef = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Ff = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Gf(a) {
        return "null" !== a.origin
    };
    var Jf = function(a, b, c, d) {
            return Hf(d) ? Df(a, String(b || If()), c) : []
        },
        Mf = function(a, b, c, d, e) {
            if (Hf(e)) {
                var f = Kf(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Lf(f, function(g) {
                        return g.ee
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Lf(f, function(g) {
                        return g.bd
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Nf(a, b, c, d) {
        var e = If(),
            f = window;
        Gf(f) && (f.document.cookie = a);
        var g = If();
        return e != g || void 0 != c && 0 <= Jf(b, g, !1, d).indexOf(c)
    }
    var Rf = function(a, b, c) {
            function d(t, u, v) {
                if (null == v) return delete g[u], t;
                g[u] = v;
                return t + "; " + u + "=" + v
            }

            function e(t, u) {
                if (null == u) return delete g[u], t;
                g[u] = !0;
                return t + "; " + u
            }
            if (!Hf(c.cb)) return 2;
            var f;
            void 0 == b ? f = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Of(b), f = a + "=" + b);
            var g = {};
            f = d(f, "path", c.path);
            var l;
            c.expires instanceof Date ? l = c.expires.toUTCString() : null != c.expires && (l = "" + c.expires);
            f = d(f, "expires", l);
            f = d(f, "max-age", c.Zk);
            f = d(f, "samesite",
                c.al);
            c.bl && (f = e(f, "secure"));
            var m = c.domain;
            if (m && "auto" === m.toLowerCase()) {
                for (var n = Pf(), p = 0; p < n.length; ++p) {
                    var q = "none" !== n[p] ? n[p] : void 0,
                        r = d(f, "domain", q);
                    r = e(r, c.flags);
                    if (!Qf(q, c.path) && Nf(r, a, b, c.cb)) return 0
                }
                return 1
            }
            m && "none" !== m.toLowerCase() && (f = d(f, "domain", m));
            f = e(f, c.flags);
            return Qf(m, c.path) ? 1 : Nf(f, a, b, c.cb) ? 0 : 1
        },
        Sf = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Rf(a, b, c)
        };

    function Lf(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var l = a[g],
                m = b(l);
            m === c ? d.push(l) : void 0 === f || m < f ? (e = [l], f = m) : m === f && e.push(l)
        }
        return 0 < d.length ? d : e
    }

    function Kf(a, b, c) {
        for (var d = [], e = Jf(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                l = g.shift();
            if (!b || -1 !== b.indexOf(l)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    ee: 1 * m[0] || 1,
                    bd: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var Of = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Tf = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Uf = /(^|\.)doubleclick\.net$/i,
        Qf = function(a, b) {
            return Uf.test(window.document.location.hostname) || "/" === b && Tf.test(a)
        },
        If = function() {
            return Gf(window) ? window.document.cookie : ""
        },
        Pf = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Uf.test(e) || Tf.test(e) || a.push("none");
            return a
        },
        Hf = function(a) {
            if (!Te().h() || !a || !mf()) return !0;
            if (!lf(a)) return !1;
            var b = hf(a);
            return null == b ? !0 : !!b
        };
    var Vf = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Cf(a) & 2147483647) : String(b)
        },
        Wf = function(a) {
            return [Vf(a), Math.round(Fa() / 1E3)].join(".")
        },
        Zf = function(a, b, c, d, e) {
            var f = Xf(b);
            return Mf(a, f, Yf(c), d, e)
        },
        $f = function(a, b, c, d) {
            var e = "" + Xf(c),
                f = Yf(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        Xf = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Yf = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function ag(a, b, c, d) {
        var e, f = Number(null != a.Za ? a.Za : void 0);
        0 !== f && (e = new Date((b || Fa()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            cb: d
        }
    };
    var bg;
    var fg = function() {
            var a = cg,
                b = dg,
                c = eg(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Lb(C, "mousedown", d);
                Lb(C, "keyup", d);
                Lb(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        gg = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            eg().decorators.push(f)
        },
        hg = function(a, b, c) {
            for (var d = eg().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    l;
                if (l = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    l = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        l = !0;
                        break a
                    }
                    l = !1
                }
                if (l) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Ia(e, g.callback())
                }
            }
            return e
        };

    function eg() {
        var a = Cb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var ig = /(.*?)\*(.*?)\*(.*)/,
        jg = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        kg = /^(?:www\.|m\.|amp\.)+/,
        lg = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function mg(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var og = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString() && (b.push(c), b.push(Va(String(d))))
            }
        var e = b.join("*");
        return ["1", ng(e), e].join("*")
    };

    function ng(a, b) {
        var c = [Ab.userAgent, (new Date).getTimezoneOffset(), Ab.userLanguage || Ab.language, Math.floor(Fa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = bg)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, l = 0; 8 > l; l++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        bg = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ bg[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function pg() {
        return function(a) {
            var b = zf(z.location.href),
                c = b.search.replace("?", ""),
                d = uf(c, "_gl", !0) || "";
            a.query = qg(d) || {};
            var e = xf(b, "fragment").match(mg("_gl"));
            a.fragment = qg(e && e[3] || "") || {}
        }
    }

    function rg(a, b) {
        var c = mg(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var sg = function(a, b) {
            b || (b = "_gl");
            var c = lg.exec(a);
            if (!c) return "";
            var d = c[1],
                e = rg(b, (c[2] || "").slice(1)),
                f = rg(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        tg = function(a) {
            var b = pg(),
                c = eg();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Ia(d, e.query), a && Ia(d, e.fragment));
            return d
        },
        qg = function(a) {
            try {
                var b = ug(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = Wa(d[e + 1]);
                        c[f] = g
                    }
                    Ya("TAGGING", 6);
                    return c
                }
            } catch (l) {
                Ya("TAGGING",
                    8)
            }
        };

    function ug(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = ig.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var l = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === ng(l, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return l;
                Ya("TAGGING", 7)
            }
        }
    }

    function vg(a, b, c, d) {
        function e(p) {
            p = rg(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = lg.exec(c);
        if (!f) return "";
        var g = f[1],
            l = f[2] || "",
            m = f[3] || "",
            n = a + "=" + b;
        d ? m = "#" + e(m.substring(1)) : l = "?" + e(l.substring(1));
        return "" + g + l + m
    }

    function wg(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = hg(b, 1, c),
            e = hg(b, 2, c),
            f = hg(b, 3, c);
        if (Ja(d)) {
            var g = og(d);
            c ? xg("_gl", g, a) : yg("_gl", g, a, !1)
        }
        if (!c && Ja(e)) {
            var l = og(e);
            yg("_gl", l, a, !0)
        }
        for (var m in f)
            if (f.hasOwnProperty(m)) a: {
                var n = m,
                    p = f[m],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        yg(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        xg(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && vg(n, p, q)
            }
    }

    function yg(a, b, c, d) {
        if (c.href) {
            var e = vg(a, b, c.href, void 0 === d ? !1 : d);
            fb.test(e) && (c.href = e)
        }
    }

    function xg(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var l = e[g];
                    if (l.name === a) {
                        l.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var m = C.createElement("input");
                    m.setAttribute("type", "hidden");
                    m.setAttribute("name", a);
                    m.setAttribute("value", b);
                    c.appendChild(m)
                }
            } else if ("post" === d) {
                var n = vg(a, b, c.action);
                fb.test(n) && (c.action = n)
            }
        }
    }

    function cg(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || wg(e, e.hostname)
            }
        } catch (g) {}
    }

    function dg(a) {
        try {
            if (a.action) {
                var b = xf(zf(a.action), "host");
                wg(a, b)
            }
        } catch (c) {}
    }
    var zg = function(a, b, c, d) {
            fg();
            gg(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Ag = function(a, b) {
            fg();
            gg(a, [wf(z.location, "host", !0)], b, !0, !0)
        },
        Bg = function() {
            var a = C.location.hostname,
                b = jg.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var l = a.replace(kg, ""),
                m = e.replace(kg, ""),
                n;
            if (!(n = l === m)) {
                var p = "." + m;
                n = l.substring(l.length - p.length,
                    l.length) === p
            }
            return n
        },
        Cg = function(a, b) {
            return !1 === a ? !1 : a || b || Bg()
        };
    var Dg = {},
        Eg = function(a) {
            return void 0 == Dg[a] ? !1 : Dg[a]
        };
    var Fg = ["1"],
        Gg = {},
        Hg = {},
        Jg = function(a) {
            return Gg[Ig(a)]
        },
        Wg = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = Ig(a.prefix);
            if (!Gg[c])
                if (Kg(c, a.path, a.domain)) {
                    if (Eg("enable_auid_cross_domain")) {
                        var d = Hg[Ig(a.prefix)];
                        Lg(a, d ? d.id : void 0, d ? d.Ff : void 0)
                    }
                } else {
                    if (Eg("enable_auid_fl_iframe")) {
                        var e = Bf("auiddc");
                        if (e) {
                            Ya("TAGGING", 17);
                            Gg[c] = e;
                            return
                        }
                    }
                    if (b) {
                        var f = Ig(a.prefix),
                            g = Wf();
                        if (0 === Mg(f, g, a)) {
                            var l = Cb("google_tag_data", {});
                            l._gcl_au || (l._gcl_au = g)
                        }
                        Kg(c, a.path, a.domain)
                    }
                }
        };

    function Lg(a, b, c) {
        var d = Ig(a.prefix),
            e = Gg[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var l = e;
                    b && (l = e + "." + b + "." + (c ? c : Math.floor(Fa() / 1E3)));
                    Mg(d, l, a, 1E3 * g)
                }
            }
        }
    }

    function Mg(a, b, c, d) {
        var e = $f(b, "1", c.domain, c.path),
            f = ag(c, d);
        f.cb = "ad_storage";
        return Sf(a, e, f)
    }

    function Kg(a, b, c) {
        var d = Zf(a, b, c, Fg, "ad_storage");
        if (!d) return !1;
        Xg(a, d);
        return !0
    }

    function Xg(a, b) {
        var c = b.split(".");
        5 === c.length ? (Gg[a] = c.slice(0, 2).join("."), Hg[a] = {
            id: c.slice(2, 4).join("."),
            Ff: Number(c[4]) || 0
        }) : 3 === c.length ? Hg[a] = {
            id: c.slice(0, 2).join("."),
            Ff: Number(c[2]) || 0
        } : Gg[a] = b
    }

    function Ig(a) {
        return (a || "_gcl") + "_au"
    }

    function Yg(a) {
        mf() || a();
        qf(function() {
            hf("ad_storage") && a();
            rf(a, "ad_storage")
        }, ["ad_storage"])
    }

    function Zg(a) {
        var b = tg(!0),
            c = Ig(a.prefix);
        Yg(function() {
            var d = b[c];
            if (d) {
                Xg(c, d);
                var e = 1E3 * Number(Gg[c].split(".")[1]);
                if (e) {
                    Ya("TAGGING", 16);
                    var f = ag(a, e);
                    f.cb = "ad_storage";
                    var g = $f(d, "1", a.domain, a.path);
                    Sf(c, g, f)
                }
            }
        })
    }

    function $g(a, b, c, d) {
        d = d || {};
        var e = function() {
            var f = Ig(d.prefix),
                g = {},
                l = Zf(f, d.path, d.domain, Fg, "ad_storage");
            if (!l) return g;
            g[f] = l;
            return g
        };
        Yg(function() {
            zg(e, a, b, c)
        })
    };
    var O = [];
    O[7] = !0;
    O[9] = !0;
    O[27] = !0;
    O[11] = !0;
    O[13] = !0;
    O[15] = !0;
    O[16] = !0;
    O[25] = !0;
    O[36] = !0;
    O[38] = !0;
    O[39] = !0;
    O[40] = !0;
    O[41] = !0;
    O[43] = !0;
    O[52] = !0;
    O[57] = !0;
    O[58] = !0;
    O[59] = !0;
    O[60] = !0;
    O[61] = !0;
    O[68] = !0;
    O[69] = !0;
    O[72] = !0;
    O[75] = !0;
    O[76] = !0;
    O[77] = !0;
    O[79] = !0;
    O[80] = !0;
    O[81] = !0;
    O[83] = !0;
    O[88] = !0;
    O[89] = !0;
    O[91] = !0;
    O[93] = !0;
    O[94] = !0;
    O[95] = !0;
    O[96] = !0;
    O[97] = !0;
    var P = function(a) {
        return !!O[a]
    };
    var bh = ah();

    function ah() {
        if (!P(87)) return {};
        try {
            return JSON.parse(Wa("eyIwIjoiTkciLCIxIjoiTkctTEEiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20ubmciLCI0IjoiIiwiNSI6dHJ1ZX0"))
        } catch (a) {
            return J(123), Ya("HEALTH", 2), {}
        }
    }
    var ch = {
            pj: "NG",
            qk: "NG-LA",
            Lj: "true",
            yj: ""
        },
        dh = function() {
            var a;
            return P(87) ? null != (a = bh["0"]) ? a : "" : ch.pj
        },
        eh = function() {
            var a;
            return P(87) ? null != (a = bh["1"]) ? a : "" : ch.qk
        },
        fh = function() {
            var a = "";
            return a
        },
        gh = function() {
            var a = !1;
            return a
        };
    var hh, ih = !1,
        jh = function(a) {
            if (!ih) {
                ih = !0;
                hh = hh || {}
            }
            return hh[a]
        };
    var kh = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        lh = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var l = g.indexOf("opacity(");
                    0 <= l && (g = g.substring(l + 8, g.indexOf(")", l)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };

    function Rh() {}

    function Sh() {};

    function Th(a) {
        for (var b = [], c = 0; c < Uh.length; c++) {
            var d = a(Uh[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Uh = [N.g.H, N.g.R],
        Vh = function(a) {
            for (var b = a[N.g.pd], c = Array.isArray(b) ? b : [b], d = {
                    ic: 0
                }; d.ic < c.length; d = {
                    ic: d.ic
                }, ++d.ic) k(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.pd) {
                        var l = c[e.ic],
                            m = dh(),
                            n = eh();
                        Ve = !0;
                        Ue && Ya("TAGGING", 20);
                        Xe().declare(f, g, l, m, n)
                    }
                }
            }(d))
        },
        Wh = function(a) {
            var b = a[N.g.pd];
            b && J(40);
            var c = a[N.g.Zf];
            c && J(41);
            for (var d = sa(b) ? b : [b], e = {
                    jc: 0
                }; e.jc < d.length; e = {
                    jc: e.jc
                }, ++e.jc) k(a, function(f) {
                return function(g, l) {
                    if (g !== N.g.pd && g !== N.g.Zf) {
                        var m = d[f.jc],
                            n = Number(c),
                            p = dh(),
                            q = eh();
                        Ue = !0;
                        Ve && Ya("TAGGING", 20);
                        Xe().set(g, l, m, p, q, n)
                    }
                }
            }(e))
        },
        Xh = function(a, b) {
            k(a, function(c, d) {
                Ue = !0;
                Ve && Ya("TAGGING", 20);
                Xe().update(c, d)
            });
            pf(b.eventId, b.priorityId)
        },
        Yh = function(a) {
            var b = hf(a);
            return void 0 != b ? b : !0
        },
        Zh = function() {
            return "G1" + Th(hf)
        },
        $h = function(a, b) {
            rf(a, b)
        },
        ai = function(a, b) {
            qf(a, b)
        };
    var bi = function() {
        le.dedupe_gclid || (le.dedupe_gclid = "" + Wf());
        return le.dedupe_gclid
    };
    var ci = function() {
        var a = !1;
        return a
    };
    var di = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        ei = function() {
            var a = Cb("google_tag_manager", {}),
                b = Cb("google_tag_data", {}),
                c = a.tidr;
            c || (c = b.tidr);
            c || (c = new di, a.tidr = c, b.tidr = c);
            return c
        };
    var R = {
            B: "GTM-K638SKQ",
            jb: "39271190"
        },
        fi = {
            Eh: "GTM-K638SKQ",
            Fh: "GTM-K638SKQ"
        };
    R.Jc = Ba("");
    var gi = function() {
            return fi.Eh ? fi.Eh.split("|") : [R.B]
        },
        hi = function() {
            return fi.Fh ? fi.Fh.split("|") : []
        },
        ii = function() {
            for (var a = ei(), b = gi(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = gi(), d.destinations = hi()) : a.container[b[c]] = {
                    state: 2,
                    containers: gi(),
                    destinations: hi()
                }
            }
            for (var e = hi(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && J(93);
                g ? (g.state = 2, g.containers = gi(), g.destinations = hi()) : a.destination[e[f]] = {
                    state: 2,
                    containers: gi(),
                    destinations: hi()
                }
            }
            a.canonical[R.jb] =
                2
        },
        ji = function(a) {
            return !!ei().container[a]
        };

    function ki() {
        return {
            ctid: R.B,
            isDestination: R.Jc
        }
    }
    var li = function() {
            var a = ei().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        mi = function() {
            var a = {};
            k(ei().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        };
    var ni = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        oi = function(a) {
            var b = R.B.split("-")[0].toUpperCase(),
                c = {};
            c.ctid = R.B;
            c.uk = ke.Mc;
            c.xk = ke.nf;
            c.Zj = R.Jc ? 2 : 1;
            re ? (c.qe = ni[b], c.qe || (c.qe = 0)) : c.qe = xe ? 13 : 10;
            ve ? c.If = 1 : ci() ? c.If = 2 : c.If = 3;
            var d;
            var e = c.qe,
                f = c.If;
            void 0 === e ? d = "" : (f || (f = 0), d = "" + td(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e << 2 | f]);
            var g = c.Tk,
                l = 4 + d + (g ? "" + td(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [g] : ""),
                m, n = c.xk;
            m = n && qd.test(n) ?
                "" + td(3, 2) + n : "";
            var p, q = c.uk;
            p = q ? "" + td(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [q] : "";
            var r;
            var t = c.ctid;
            if (t && a) {
                var u = t.split("-"),
                    v = u[0].toUpperCase();
                if ("GTM" !== v && "OPT" !== v) r = "";
                else {
                    var w = u[1];
                    r = "" + td(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + w.length] + (c.Zj || 0) + w
                }
            } else r = "";
            return l + m + p + r
        };

    function pi(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var qi = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function ri() {
        return gb ? !!nb && !!nb.platform : !1
    }

    function si() {
        return qb("iPhone") && !qb("iPod") && !qb("iPad")
    }

    function ti() {
        si() || qb("iPad") || qb("iPod")
    };
    sb();
    rb() || qb("Trident") || qb("MSIE");
    qb("Edge");
    !qb("Gecko") || -1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") || qb("Trident") || qb("MSIE") || qb("Edge"); - 1 != mb().toLowerCase().indexOf("webkit") && !qb("Edge") && qb("Mobile");
    ri() || qb("Macintosh");
    ri() || qb("Windows");
    (ri() ? "Linux" === nb.platform : qb("Linux")) || ri() || qb("CrOS");
    var ui = na.navigator || null;
    ui && (ui.appVersion || "").indexOf("X11");
    ri() || qb("Android");
    si();
    qb("iPad");
    qb("iPod");
    ti();
    mb().toLowerCase().indexOf("kaios");
    var vi = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var l = a.charCodeAt(e + f);
                    if (!l || 61 == l || 38 == l || 35 == l) return e
                }
                e += f + 1
            }
            return -1
        },
        wi = /#|$/,
        xi = function(a, b) {
            var c = a.search(wi),
                d = vi(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        yi = /[?&]($|#)/,
        zi = function(a, b, c) {
            for (var d, e = a.search(wi), f = 0, g, l = []; 0 <= (g = vi(a, f, b, e));) l.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            l.push(a.slice(f));
            d = l.join("").replace(yi, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var Ai = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Re(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Bi = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function Ci() {
        if (!C.head) return null;
        var a = Di("META");
        C.head.appendChild(a);
        a.httpEquiv = "origin-trial";
        a.content = 'A727AcAeLCei/ZogJHBlJUS63SxP6AeIROo7qXrkjrxkoxBu0eSSmypAHmGYwk4HjBMQp5nxCFODzfVnUIe31AQAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1RoaXJkUGFydHkiOnRydWV9';
        return a
    }
    var Ei = function() {
            if (z.top == z) return 0;
            var a = z.location.ancestorOrigins;
            return a ? a[a.length - 1] == z.location.origin ? 1 : 2 : Ai(z.top) ? 1 : 2
        },
        Di = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function Fi(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = Di("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        l = ab(g, e);
                    0 <= l && Array.prototype.splice.call(g, l, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            qi(e, "load", f);
            qi(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var Hi = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            Bi(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            Gi(c, b)
        },
        Gi = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", e.headers = {
                    "Attribution-Reporting-Eligible": "event-source"
                });
                c.fetch(a, e)
            } else Fi(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var Ii = function() {};
    var Ji = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Ki = function(a, b) {
            b = void 0 === b ? {} : b;
            this.m = a;
            this.h = null;
            this.M = {};
            this.rb = 0;
            var c;
            this.X = null != (c = b.Gk) ? c : 500;
            var d;
            this.J = null != (d = b.Uk) ? d : !1;
            this.C = null
        };
    ma(Ki, Ii);
    Ki.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.J
            },
            d = Ff(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.X && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.X));
        var f = function(g, l) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Ji(c), c.internalBlockOnErrors = b.J, l && 0 === c.internalErrorState || (c.tcString = "tcunavailable", l || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Li(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Ki.prototype.removeEventListener = function(a) {
        a && a.listenerId && Li(this, "removeEventListener", null, a.listenerId)
    };
    var Ni = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var l = c;
            2 === c ? (l = 0, 2 === g && (l = 1)) : 3 === c && (l = 1, 1 === g && (l = 0));
            var m;
            if (0 === l)
                if (a.purpose && a.vendor) {
                    var n = Mi(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Mi(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === l ? a.purpose && a.vendor ? Mi(a.purpose.legitimateInterests,
                b) && Mi(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Mi = function(a, b) {
            return !(!a || !a[b])
        },
        Li = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) {
                var e = a.m.__tcfapi;
                e(b, 2, c, d)
            } else if (Oi(a)) {
                Pi(a);
                var f = ++a.rb;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Oi = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.m, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (l) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (l) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Pi = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, qi(a.m, "message", a.C))
        },
        Qi = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Ji(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (Hi({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Ri = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        Si = pi('', 500);

    function Ti() {
        var a = le.tcf || {};
        return le.tcf = a
    }
    var Zi = function() {
        var a = Ti(),
            b = new Ki(z, {
                Gk: -1
            });
        Ui(b) && Vi() && J(124);
        if (!Vi() && !a.active && Ui(b)) {
            a.active = !0;
            a.ne = {};
            Wi();
            a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(c) {
                    if (0 !== c.internalErrorState) Xi(a), Yi(a);
                    else {
                        var d;
                        a.gdprApplies = c.gdprApplies;
                        if (!1 === c.gdprApplies) {
                            var e = {},
                                f;
                            for (f in Ri) Ri.hasOwnProperty(f) && (e[f] = !0);
                            d = e;
                            b.removeEventListener(c)
                        } else if ("tcloaded" === c.eventStatus || "useractioncomplete" === c.eventStatus || "cmpuishown" === c.eventStatus) {
                            var g = {},
                                l;
                            for (l in Ri)
                                if (Ri.hasOwnProperty(l))
                                    if ("1" ===
                                        l) {
                                        var m, n = c,
                                            p = !0;
                                        p = void 0 === p ? !1 : p;
                                        m = Qi(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Ni(n, "1", 0) : !1;
                                        g["1"] = m
                                    } else g[l] = Ni(c, l, Ri[l]);
                            d = g
                        }
                        d && (a.tcString = c.tcString || "tcempty", a.ne = d, Yi(a))
                    }
                })
            } catch (c) {
                Xi(a), Yi(a)
            }
        }
    };

    function Xi(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Wi() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = Si, a);
        Wh(b)
    }

    function Ui(a) {
        return "function" === typeof z.__tcfapi || "function" === typeof a.m.__tcfapi || null != Oi(a) ? !0 : !1
    }
    var Vi = function() {
        return !0 !== z.gtag_enable_tcf_support
    };

    function Yi(a) {
        var b = {},
            c = (b.ad_storage = a.ne["1"] ? "granted" : "denied", b);
        Xh(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: $i()
        })
    }
    var $i = function() {
            var a = Ti();
            return a.active ? a.tcString || "" : ""
        },
        aj = function() {
            var a = Ti();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        bj = function(a) {
            if (!Ri.hasOwnProperty(String(a))) return !0;
            var b = Ti();
            return b.active && b.ne ? !!b.ne[String(a)] : !0
        };
    var cj = function(a) {
            var b = String(a[$b.Qa] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        dj = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var ej = ["L", "S", "Y"],
        fj = ["S", "E"],
        gj = {
            sampleRate: "0.005000",
            Vh: "",
            Uh: Number("5"),
            Th: Number("")
        },
        hj;
    if (!(hj = dj)) {
        var ij = Math.random(),
            jj = gj.sampleRate;
        hj = ij < jj
    }
    var kj = hj,
        lj = "https://www.googletagmanager.com/a?id=" + R.B + "&cv=4",
        mj = {
            label: R.B + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        };

    function nj() {
        return [lj, "&v=3&t=t", "&pid=" + ua(), "&rv=" + ke.nf].join("")
    }
    var oj = nj();

    function pj() {
        oj = nj()
    }
    var qj = {},
        rj = "",
        sj = "",
        tj = "",
        uj = "",
        vj = [],
        wj = "",
        xj = {},
        yj = !1,
        zj = {},
        Aj = {},
        Bj = {},
        Cj = "",
        Dj = void 0,
        Ej = {},
        Fj = {},
        Gj = void 0,
        Hj = 5;
    0 < gj.Uh && (Hj = gj.Uh);
    var Ij = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Qj: function() {
                    return c < a ? !1 : Fa() - d[c % a] < b
                },
                rk: function() {
                    var f = c++ % a;
                    d[f] = Fa()
                }
            }
        }(Hj, 1E3),
        Jj = 1E3,
        Kj = "";

    function Lj(a) {
        var b = Dj;
        if (void 0 === b) return "";
        var c = $a("GTM"),
            d = $a("TAGGING"),
            e = $a("HEALTH"),
            f = oj,
            g = qj[b] ? "" : "&es=1",
            l = Ej[b],
            m = Mj(b),
            n = Nj(),
            p = rj,
            q = sj,
            r = Cj,
            t = fk(a),
            u = tj,
            v = uj,
            w;
        return [f, g, l, m, c ? "&u=" + c : "", d ? "&ut=" + d : "", e ? "&h=" + e : "", n, p, q, r, t, u, v, w, wj ? "&dl=" + encodeURIComponent(wj) : "", 0 < vj.length ? "&tdp=" + vj.join(".") : "", ke.Mc ?
            "&x=" + ke.Mc : "", "&z=0"
        ].join("")
    }

    function hk() {
        Gj && (z.clearTimeout(Gj), Gj = void 0);
        if (void 0 !== Dj && (!qj[Dj] || rj || sj))
            if (Fj[Dj] || Ij.Qj() || 0 >= Jj--) J(1), Fj[Dj] = !0;
            else {
                Ij.rk();
                var a = Lj(!0);
                Kb(a);
                if (uj || wj && 0 < vj.length) {
                    var b = a.replace("/a?", "/td?");
                    Kb(b)
                }
                qj[Dj] = !0;
                wj = uj = tj = Cj = sj = rj = "";
                vj = []
            }
    }

    function ik() {
        Gj || (Gj = z.setTimeout(hk, 500))
    }

    function jk(a) {
        return a.match(/^(gtm|gtag)\./) ? encodeURIComponent(a) : "*"
    }

    function kk() {
        2022 <= Lj().length && hk()
    }

    function Nj() {
        return "&tc=" + zc.filter(function(a) {
            return a
        }).length
    }
    var mk = function(a, b) {
            if (kj && !Fj[a] && Dj !== a) {
                hk();
                Dj = a;
                tj = rj = "";
                Ej[a] = "&e=" + jk(b) + "&eid=" + a;
                ik();
            }
        },
        nk = function(a, b, c, d) {
            if (kj && b) {
                var e = cj(b),
                    f = c + e;
                if (!Fj[a]) {
                    a !== Dj && (hk(), Dj = a);
                    rj = rj ? rj + "." + f : "&tr=" + f;
                    var g = b["function"];
                    if (!g) throw Error("Error: No function name given for function call.");
                    var l = (Bc[g] ? "1" : "2") + e;
                    tj = tj ? tj + "." + l : "&ti=" + l;
                    ik();
                    kk()
                }
            }
        },
        ok = function(a, b, c) {
            if (kj && a && a[$b.pb]) {
                var d = b + "." + a[$b.pb];
                Bj[d] = c;
                "html" == cj(a) && Kj == d && (rj += ":" + Math.floor(c))
            }
        };

    function fk(a) {}

    function Mj(a) {}
    var vk = function(a, b, c) {
            if (kj && void 0 !== a && !Fj[a]) {
                a !== Dj && (hk(), Dj = a);
                var d = c + b;
                sj = sj ? sj + "." + d : "&epr=" + d;
                ik();
                kk()
            }
        },
        wk = function(a, b, c) {},
        gk = void 0;
    tb();
    si() || qb("iPod");
    qb("iPad");
    !qb("Android") || ub() || tb() || sb() || qb("Silk");
    ub();
    !qb("Safari") || ub() || (rb() ? 0 : qb("Coast")) || sb() || (rb() ? 0 : qb("Edge")) || (rb() ? pb("Microsoft Edge") : qb("Edg/")) || (rb() ? pb("Opera") : qb("OPR")) || tb() || qb("Silk") || qb("Android") || ti();
    var xk = {},
        yk = null,
        zk = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!yk) {
                yk = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), l = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(l[m].split(""));
                    xk[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === yk[q] && (yk[q] = p)
                    }
                }
            }
            for (var r = xk[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var y = b[v],
                    x = b[v + 1],
                    B = b[v + 2],
                    A = r[y >> 2],
                    D = r[(y & 3) << 4 | x >> 4],
                    H = r[(x & 15) << 2 | B >> 6],
                    I = r[B & 63];
                t[w++] = "" + A + D + H + I
            }
            var F = 0,
                L = u;
            switch (b.length - v) {
                case 2:
                    F = b[v + 1], L = r[(F & 15) << 2] || u;
                case 1:
                    var K = b[v];
                    t[w] = "" + r[K >> 2] + r[(K & 3) << 4 | F >> 4] + L + u
            }
            return t.join("")
        };
    var Ak = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Bk() {
        var a;
        return null != (a = z.google_tag_data) ? a : z.google_tag_data = {}
    }

    function Ck() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Dk() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function Ek() {
        var a, b;
        return "function" === typeof(null == (a = z.navigator) ? void 0 : null == (b = a.userAgentData) ? void 0 : b.getHighEntropyValues)
    }

    function Fk() {
        if (!Ek()) return null;
        var a = Bk();
        if (a.uach_promise) return a.uach_promise;
        var b = z.navigator.userAgentData.getHighEntropyValues(Ak).then(function(c) {
            null != a.uach || (a.uach = c);
            return c
        });
        return a.uach_promise = b
    };
    var Lk = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Uf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, l) {
            return l.timestamp - g.timestamp
        });
        return b
    };

    function Mk(a, b) {
        var c = Lk(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Uf] || (d[c[e].Uf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    ba: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Uf].push(g)
            }
        }
        return d
    };
    var Nk = /^\w+$/,
        Ok = /^[\w-]+$/,
        Pk = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        Qk = function() {
            if (!Te().h() || !mf()) return !0;
            var a = hf("ad_storage");
            return null == a ? !0 : !!a
        },
        Rk = function(a, b) {
            lf("ad_storage") ? Qk() ? a() : rf(a, "ad_storage") : b ? Ya("TAGGING", 3) : qf(function() {
                Rk(a, !0)
            }, ["ad_storage"])
        },
        Tk = function(a) {
            return Sk(a).map(function(b) {
                return b.ba
            })
        },
        Sk = function(a) {
            var b = [];
            if (!Gf(z) || !C.cookie) return b;
            var c = Jf(a, C.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    kd: d.kd
                }, e++) {
                var f = Uk(c[e]);
                if (null != f) {
                    var g = f,
                        l = g.version;
                    d.kd = g.ba;
                    var m = g.timestamp,
                        n = g.labels,
                        p = ta(b, function(q) {
                            return function(r) {
                                return r.ba === q.kd
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, m), p.labels = Vk(p.labels, n || [])) : b.push({
                        version: l,
                        ba: d.kd,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Wk(b)
        };

    function Vk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function Xk(a) {
        return a && "string" == typeof a && a.match(Nk) ? a : "_gcl"
    }
    var Zk = function() {
            var a = zf(z.location.href),
                b = xf(a, "query", !1, void 0, "gclid"),
                c = xf(a, "query", !1, void 0, "gclsrc"),
                d = xf(a, "query", !1, void 0, "wbraid"),
                e = xf(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || uf(f, "gclid");
                c = c || uf(f, "gclsrc");
                d = d || uf(f, "wbraid")
            }
            return Yk(b, c, e, d)
        },
        Yk = function(a, b, c, d) {
            var e = {},
                f = function(g, l) {
                    e[l] || (e[l] = []);
                    e[l].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Ok.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Ok)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        al = function(a) {
            var b = Zk();
            Rk(function() {
                $k(b, !1, a)
            })
        };

    function $k(a, b, c, d, e) {
        function f(w, y) {
            var x = bl(w, g);
            x && (Sf(x, y, l), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = Xk(c.prefix);
        d = d || Fa();
        var l = ag(c, d, !0);
        l.cb = "ad_storage";
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var y = ["GCL", n, w];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = bl("gb", g),
                t = !1;
            if (!b)
                for (var u = Sk(r), v = 0; v < u.length; v++) u[v].ba === q && u[v].labels &&
                    0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var dl = function(a, b) {
            var c = tg(!0);
            Rk(function() {
                for (var d = Xk(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Pk[f]) {
                        var g = bl(f, d),
                            l = c[g];
                        if (l) {
                            var m = Math.min(cl(l), Fa()),
                                n;
                            b: {
                                var p = m;
                                if (Gf(z))
                                    for (var q = Jf(g, C.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (cl(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = ag(b, m, !0);
                                t.cb = "ad_storage";
                                Sf(g, l, t)
                            }
                        }
                    }
                }
                $k(Yk(c.gclid, c.gclsrc), !1, b)
            })
        },
        bl = function(a, b) {
            var c = Pk[a];
            if (void 0 !== c) return b + c
        },
        cl = function(a) {
            return 0 !== el(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function Uk(a) {
        var b = el(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            ba: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function el(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Ok.test(a[2]) ? [] : a
    }
    var fl = function(a, b, c, d, e) {
            if (sa(b) && Gf(z)) {
                var f = Xk(e),
                    g = function() {
                        for (var l = {}, m = 0; m < a.length; ++m) {
                            var n = bl(a[m], f);
                            if (n) {
                                var p = Jf(n, C.cookie, void 0, "ad_storage");
                                p.length && (l[n] = p.sort()[p.length - 1])
                            }
                        }
                        return l
                    };
                Rk(function() {
                    zg(g, b, c, d)
                })
            }
        },
        Wk = function(a) {
            return a.filter(function(b) {
                return Ok.test(b.ba)
            })
        },
        gl = function(a, b) {
            if (Gf(z)) {
                for (var c = Xk(b.prefix), d = {}, e = 0; e < a.length; e++) Pk[a[e]] && (d[a[e]] = Pk[a[e]]);
                Rk(function() {
                    k(d, function(f, g) {
                        var l = Jf(c + g, C.cookie, void 0, "ad_storage");
                        l.sort(function(t,
                            u) {
                            return cl(u) - cl(t)
                        });
                        if (l.length) {
                            var m = l[0],
                                n = cl(m),
                                p = 0 !== el(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== el(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            $k(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function hl(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var il = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (mf()) {
                var c = Zk();
                if (hl(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.gbraid);
                    Ag(function() {
                        return d
                    }, 3);
                    Ag(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        jl = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Qk()) return e;
            var f = Sk(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var l = f[0],
                    m = f[0].timestamp,
                    n = [l.version, Math.round(m /
                        1E3), l.ba].concat(l.labels || [], [b]).join("."),
                    p = ag(c, m, !0);
                p.cb = "ad_storage";
                Sf(a, n, p)
            }
            return e
        };

    function kl(a, b) {
        var c = Xk(b),
            d = bl(a, c);
        if (!d) return 0;
        for (var e = Sk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function ll(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var ml = function(a) {
        var b = Math.max(kl("aw", a), ll(Qk() ? Mk() : {}));
        return Math.max(kl("gb", a), ll(Qk() ? Mk("_gac_gb", !0) : {})) > b
    };
    var rl = /[A-Z]+/,
        sl = /\s/,
        tl = function(a) {
            if (h(a)) {
                a = Da(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (rl.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || sl.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            U: c + "-" + d[0],
                            K: d
                        }
                    }
                }
            }
        },
        vl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = tl(a[c]);
                d && (b[d.id] = d)
            }
            ul(b);
            var e = [];
            k(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function ul(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.K[1] && b.push(d.U)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var wl = function(a, b, c, d) {
        var e = Ib(),
            f;
        if (1 === e) a: {
            var g = ze;g = g.toLowerCase();
            for (var l = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(l) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Il = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.h = c;
        this.m = {};
        this.metadata = G(c.eventMetadata || {});
        this.I = !1
    };
    Il.prototype.copyToHitData = function(a, b) {
        var c = Q(this.h, a);
        void 0 !== c ? this.m[a] = c : void 0 !== b && (this.m[a] = b)
    };
    var Jl = function(a, b, c) {
        var d = jh(a.target.U);
        return d && d.hasOwnProperty(b) ? d[b] : c
    };

    function Kl(a) {
        return {
            getDestinationId: function() {
                return a.target.U
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.m[b]
            },
            setHitData: function(b, c) {
                a.m[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.m[b] && (a.m[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            abort: function() {
                a.I = !0
            },
            getFromEventContext: function(b) {
                return Q(a.h,
                    b)
            },
            Yk: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.m)
            }
        }
    };
    var dm = function(a, b, c, d, e, f, g, l, m, n, p, q) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.m = e;
            this.J = f;
            this.X = g;
            this.C = l;
            this.eventMetadata = m;
            this.N = n;
            this.P = p;
            this.D = q
        },
        Q = function(a, b, c) {
            if (void 0 !== a.h[b]) return a.h[b];
            if (void 0 !== a.M[b]) return a.M[b];
            if (void 0 !== a.m[b]) return a.m[b];
            kj && em(a, a.J[b], a.X[b]) && (J(71), J(79));
            return void 0 !== a.J[b] ? a.J[b] : void 0 !== a.C[b] ? a.C[b] : c
        },
        fm = function(a) {
            function b(g) {
                for (var l = Object.keys(g), m = 0; m < l.length; ++m) c[l[m]] = 1
            }
            var c = {};
            b(a.h);
            b(a.M);
            b(a.m);
            b(a.J);
            if (kj)
                for (var d = Object.keys(a.X), e = 0; e < d.length; e++) {
                    var f = d[e];
                    if ("event" !== f && "gtm" !== f && "tagTypeBlacklist" !== f && !c.hasOwnProperty(f)) {
                        J(71);
                        J(80);
                        break
                    }
                }
            return Object.keys(c)
        },
        gm = function(a, b, c) {
            function d(m) {
                Yb(m) && k(m, function(n, p) {
                    f = !0;
                    e[n] = p
                })
            }
            var e = {},
                f = !1;
            c && 1 !== c || (d(a.C[b]), d(a.J[b]), d(a.m[b]), d(a.M[b]));
            c && 2 !== c || d(a.h[b]);
            if (kj) {
                var g = f,
                    l = e;
                e = {};
                f = !1;
                c && 1 !== c || (d(a.C[b]), d(a.X[b]), d(a.m[b]), d(a.M[b]));
                c && 2 !== c || d(a.h[b]);
                if (f !== g || em(a, e, l)) J(71), J(81);
                f = g;
                e = l
            }
            return f ? e : void 0
        },
        hm = function(a) {
            var b = [N.g.wc, N.g.yd, N.g.zd, N.g.Ad, N.g.Bd, N.g.Cd, N.g.Dd],
                c = {},
                d = !1,
                e = function(l) {
                    for (var m = 0; m < b.length; m++) void 0 !== l[b[m]] && (c[b[m]] = l[b[m]], d = !0);
                    return d
                };
            if (e(a.h) || e(a.M) || e(a.m)) return c;
            e(a.J);
            if (kj) {
                var f = c,
                    g = d;
                c = {};
                d = !1;
                e(a.X);
                em(a, c, f) && (J(71), J(82));
                c = f;
                d = g
            }
            if (d) return c;
            e(a.C);
            return c
        },
        em = function(a, b, c) {
            if (!kj) return !1;
            try {
                if (b === c) return !1;
                var d = Wb(b);
                if (d !== Wb(c) || !(Yb(b) && Yb(c) || "array" === d)) return !0;
                if ("array" === d) {
                    if (b.length !== c.length) return !0;
                    for (var e = 0; e < b.length; e++)
                        if (em(a,
                                b[e], c[e])) return !0
                } else {
                    for (var f in c)
                        if (!b.hasOwnProperty(f)) return !0;
                    for (var g in b)
                        if (!c.hasOwnProperty(g) || em(a, b[g], c[g])) return !0
                }
            } catch (l) {
                J(72)
            }
            return !1
        },
        im = function(a, b) {
            this.Qi = a;
            this.Ri = b;
            this.J = {};
            this.Xg = {};
            this.h = {};
            this.M = {};
            this.m = {};
            this.Ic = {};
            this.C = {};
            this.mc = function() {};
            this.rb = function() {};
            this.X = !1
        },
        jm = function(a, b) {
            a.J = b;
            return a
        },
        km = function(a, b) {
            a.Xg = b;
            return a
        },
        lm = function(a, b) {
            a.h = b;
            return a
        },
        mm = function(a, b) {
            a.M = b;
            return a
        },
        nm = function(a, b) {
            a.m = b;
            return a
        },
        om = function(a,
            b) {
            a.Ic = b;
            return a
        },
        pm = function(a, b) {
            a.C = b || {};
            return a
        },
        qm = function(a, b) {
            a.mc = b;
            return a
        },
        rm = function(a, b) {
            a.rb = b;
            return a
        },
        sm = function(a) {
            a.X = !0;
            return a
        },
        tm = function(a) {
            return new dm(a.Qi, a.Ri, a.J, a.Xg, a.h, a.M, a.m, a.Ic, a.C, a.mc, a.rb, a.X)
        };

    function ym() {
        return "attribution-reporting"
    }

    function zm(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var Am = !1;

    function Bm() {
        if (zm("join-ad-interest-group") && qa(Ab.joinAdInterestGroup)) return !0;
        Am || (Ci(), Am = !0);
        return zm("join-ad-interest-group") && qa(Ab.joinAdInterestGroup)
    }

    function Cm(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Fa() - d) {
                Ya("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Ya("TAGGING", 10);
                return
            }
        } catch (e) {}
        Jb(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Fa()
        }, c)
    }

    function Dm() {
        return P(60) ? "https://td.doubleclick.net" : "https://googleads.g.doubleclick.net"
    };
    var Em = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        Fm = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        Gm = /^\d+\.fls\.doubleclick\.net$/,
        Hm = /;gac=([^;?]+)/,
        Im = /;gacgb=([^;?]+)/,
        Jm = /;gclaw=([^;?]+)/,
        Km = /;gclgb=([^;?]+)/;

    function Lm(a, b) {
        if (Gm.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(Em) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], l = 0; l < g.length; l++) f.push(g[l].ba);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var Mm = function(a, b, c) {
        var d = Qk() ? Mk("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var l = jl("_gac_gb_" + g, a, b, c);
            f = f || 0 !== l.length && l.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + l.join(","))
        }
        return {
            Bj: f ? e.join(";") : "",
            Aj: Lm(d, Im)
        }
    };

    function Nm(a, b, c) {
        if (Gm.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(Fm)) return [{
                ba: d[1]
            }]
        } else return Sk((a || "_gcl") + b);
        return []
    }
    var Om = function(a) {
            return Nm(a, "_aw", Jm).map(function(b) {
                return b.ba
            }).join(".")
        },
        Pm = function(a) {
            return Nm(a, "_gb", Km).map(function(b) {
                return b.ba
            }).join(".")
        },
        Qm = function(a, b) {
            var c = jl((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var Rm = function() {
        if (qa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var Cn = {
        F: {
            Yf: "ads_conversion_hit",
            xe: "container_execute_start",
            cg: "container_setup_end",
            ye: "container_setup_start",
            ag: "container_execute_end",
            dg: "container_yield_end",
            ze: "container_yield_start",
            Ug: "event_execute_end",
            Vg: "event_setup_end",
            Hc: "event_setup_start",
            Wg: "ga4_conversion_hit",
            Kc: "page_load",
            Qk: "pageview",
            ob: "snippet_load",
            ih: "tag_callback_error",
            jh: "tag_callback_failure",
            kh: "tag_callback_success",
            lh: "tag_execute_end",
            Yb: "tag_execute_start"
        }
    };
    var Dn = !1,
        En = "L S Y E TC HTC".split(" "),
        Fn = ["S", "E"],
        Gn = ["TS", "TE"];
    var ho = function(a) {},
        io = function(a) {},
        Hn = function(a, b, c, d, e, f) {
            var g;
            g = void 0 === g ? !1 : g;
            var l = {};
            return l
        },
        In = function(a) {
            var b = !1;
            return b
        },
        Jn = function(a, b) {},
        jo = function() {
            var a = {};
            return a
        },
        $n = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        ko = function() {},
        lo = function(a, b, c) {},
        mo = function(a) {
            Ub() && Ub().mark(R.B +
                "_" + a + "_start")
        },
        no = function(a) {
            if (Ub()) {
                var b = Ub(),
                    c = R.B + "_" + a + "_start",
                    d = R.B + "_" + a + "_duration";
                b.measure(d, c);
                var e = Ub().getEntriesByName(d)[0];
                b.clearMarks(c);
                b.clearMeasures(d);
                var f = le._p || {};
                void 0 === f[a] && (f[a] = e.duration, le._p = f);
                return e.duration
            }
        },
        oo = function() {
            var a = Hn("PAGEVIEW", R.B);
            if (Sn(a.entryName, "mark")[0]) {
                var b = Ub();
                b.clearMarks(a.entryName);
                b.clearMeasures("GTM-" + R.B + ":" + Cn.F.Kc + ":to:PAGEVIEW")
            }
            var c = Hn(Cn.F.Kc, R.B);
            In(a) && Jn(a, c)
        };
    var po = function(a, b) {
        var c, d = z.GooglebQhCsO;
        d || (d = {}, z.GooglebQhCsO = d);
        c = d;
        if (c[a]) return !1;
        c[a] = [];
        c[a][0] = b;
        return !0
    };
    var qo = function(a, b, c) {
        var d = xi(a, "fmt");
        if (b) {
            var e = xi(a, "random"),
                f = xi(a, "label") || "";
            if (!e) return !1;
            var g = zk(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!po(g, b)) return !1
        }
        d && 4 != d && (a = zi(a, "rfmt", d));
        var l = zi(a, "fmt", 4);
        Hb(l, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var Go = function() {
            this.h = {}
        },
        Ho = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Io = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Ko = function(a, b, c, d) {};

    function Mo(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return zf("" + c + b).href
        }
    }

    function No() {
        return !!ke.Zd && "SGTM_TOKEN" !== ke.Zd.split("@@").join("")
    };
    var Po = function(a, b, c, d) {
            if (!Oo() && !ji(a)) {
                var e = c ? "/gtag/js" : "/gtm.js",
                    f = "?id=" + encodeURIComponent(a) + "&l=" + ke.ca,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                var l = No();
                l && (f += "&sign=" + ke.Zd);
                var m = te || ve ? Mo(b, e + f) : void 0;
                if (!m) {
                    var n = ke.qd + e;
                    l && Bb && g && (n = Bb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    m = wl("https://", "http://", n + f)
                }
                var p = ki();
                ei().container[a] = {
                    state: 1,
                    context: d,
                    parent: p
                };
                Hb(m)
            }
        },
        Qo = function(a, b, c) {
            var d;
            if (d = !Oo()) {
                var e = ei().destination[a];
                d = !(e && e.state)
            }
            if (d)
                if (li()) ei().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: ki()
                }, J(91);
                else {
                    var f = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ke.ca + "&cx=c";
                    No() && (f += "&sign=" + ke.Zd);
                    var g = te || ve ? Mo(b, f) : void 0;
                    g || (g = wl("https://", "http://", ke.qd + f));
                    ei().destination[a] = {
                        state: 1,
                        context: c,
                        parent: ki()
                    };
                    Hb(g)
                }
        };

    function Oo() {
        if (ci()) {
            return !0
        }
        return !1
    };
    var Ro = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        So = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        To = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Uo = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Xo = function(a) {
            var b = Le("gtm.allowlist") || Le("gtm.whitelist");
            b && J(9);
            re && (b = ["google", "gtagfl", "lcl", "zone"]);
            Vo() && (re ?
                J(116) : J(117), Wo && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728.")));
            var c = b && La(Ca(b), So),
                d = Le("gtm.blocklist") || Le("gtm.blacklist");
            d || (d = Le("tagTypeBlacklist")) && J(3);
            d ? J(8) : d = [];
            Vo() && (d = Ca(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Ca(d).indexOf("google") && J(2);
            var e = d && La(Ca(d), To),
                f = {};
            return function(g) {
                var l = g && g[$b.Qa];
                if (!l || "string" != typeof l) return !0;
                l = l.replace(/^_*/, "");
                if (void 0 !== f[l]) return f[l];
                var m = De[l] || [],
                    n = a(l, m);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(l))
                            if (m && 0 < m.length)
                                for (var q = 0; q < m.length; q++) {
                                    if (0 > c.indexOf(m[q])) {
                                        J(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= e.indexOf(l);
                    if (t) r = t;
                    else {
                        var u = xa(e, m || []);
                        u && J(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = xa(e, Uo));
                return f[l] = v
            }
        },
        Wo = !1;
    var Vo = function() {
        return Ro.test(z.location && z.location.hostname)
    };
    var Yo = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        Zo = {},
        $o = Object.freeze((Zo[N.g.Ka] = !0, Zo)),
        ap = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        cp = function(a, b, c) {
            if (kj && "config" === a && !(1 < tl(b).K.length)) {
                var d, e = Cb("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = G(c.J);
                G(c.h, f);
                var g = [],
                    l;
                for (l in d) {
                    var m = bp(d[l], f);
                    m.length && (ap && console.log(m), g.push(l))
                }
                if (g.length) {
                    if (g.length) {
                        var n = b + "*" + g.join(".");
                        uj = uj ? uj + "!" + n : "&tdc=" + n
                    }
                    Ya("TAGGING",
                        Yo[C.readyState] || 14)
                }
                d[b] = f
            }
        };

    function dp(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function bp(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? $o[q] : t
            },
            f;
        for (f in dp(a, b)) {
            var g = (d ? d + "." : "") + f,
                l = e(f, a),
                m = e(f, b),
                n = "object" === Wb(l) || "array" === Wb(l),
                p = "object" === Wb(m) || "array" === Wb(m);
            if (n && p) bp(l, m, c, g);
            else if (n || p || l !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var ep = !1,
        fp = 0,
        gp = [];

    function hp(a) {
        if (!ep) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                ep = !0;
                for (var e = 0; e < gp.length; e++) E(gp[e])
            }
            gp.push = function() {
                for (var f = 0; f < arguments.length; f++) E(arguments[f]);
                return 0
            }
        }
    }

    function ip() {
        if (!ep && 140 > fp) {
            fp++;
            try {
                C.documentElement.doScroll("left"), hp()
            } catch (a) {
                z.setTimeout(ip, 50)
            }
        }
    }
    var jp = function(a) {
        ep ? a() : gp.push(a)
    };
    var kp = function(a, b) {
        return {
            entityType: 1,
            indexInOriginContainer: a,
            nameInOriginContainer: b,
            originContainerId: R.B
        }
    };
    var mp = function(a, b) {
            this.h = !1;
            this.J = [];
            this.M = {
                tags: []
            };
            this.X = !1;
            this.m = this.C = 0;
            lp(this, a, b)
        },
        np = function(a, b, c, d) {
            if (oe.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            Yb(d) && (e = G(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        op = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        pp = function(a) {
            if (!a.h) {
                for (var b = a.J, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.J.length = 0
            }
        },
        lp = function(a, b, c) {
            void 0 !== b && qp(a, b);
            c && z.setTimeout(function() {
                return pp(a)
            }, Number(c))
        },
        qp =
        function(a, b) {
            var c = Ha(function() {
                return E(function() {
                    b(R.B, a.M)
                })
            });
            a.h ? c() : a.J.push(c)
        },
        rp = function(a) {
            a.C++;
            return Ha(function() {
                a.m++;
                a.X && a.m >= a.C && pp(a)
            })
        },
        sp = function(a) {
            a.X = !0;
            a.m >= a.C && pp(a)
        };
    var tp = {},
        up = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        vp = !1;

    function yp() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var zp = function(a) {},
        Ap = function(a, b) {
            return function() {
                var c = up(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            l = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", l, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function Wp(a, b, c, d) {
        var e = zc[a],
            f = jq(a, b, c, d);
        if (!f) return null;
        var g = Ic(e[$b.hh], c, []);
        if (g && g.length) {
            var l = g[0];
            f = Wp(l.index, {
                N: f,
                P: 1 === l.wh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function jq(a, b, c, d) {
        function e() {
            if (f[$b.Wi]) l();
            else {
                var w = Jc(f, c, []),
                    y = w[$b.Yh];
                if (null != y)
                    for (var x = 0; x < y.length; x++)
                        if (!Yh(y[x])) {
                            l();
                            return
                        }
                var B = np(c.Gb, String(f[$b.Qa]), Number(f[$b.pb]), w[$b.Xi]),
                    A = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!A) {
                        A = !0;
                        var F = Fa() - I;
                        nk(c.id, zc[a], "5", F);
                        op(c.Gb, B, "success", F);
                        P(70) && lo(c, f, Cn.F.kh);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!A) {
                        A = !0;
                        var F = Fa() - I;
                        nk(c.id, zc[a], "6", F);
                        op(c.Gb, B, "failure", F);
                        P(70) && lo(c, f, Cn.F.jh);
                        l()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                nk(c.id, f, "1");
                var D = function() {
                    var F = Fa() - I;
                    nk(c.id, f, "7", F);
                    op(c.Gb, B, "exception", F);
                    P(70) && lo(c, f, Cn.F.ih);
                    A || (A = !0, l())
                };
                if (P(70)) {
                    var H = Hn(Cn.F.Yb, R.B, c.id, Number(f[$b.pb]), c.name, cj(f));
                    In(H)
                }
                var I = Fa();
                try {
                    Hc(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (F) {
                    D(F)
                }
                P(70) && lo(c, f, Cn.F.lh)
            }
        }
        var f = zc[a],
            g = b.N,
            l = b.P,
            m = b.terminate;
        if (c.Cf(f)) return null;
        var n = Ic(f[$b.mh], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Wp(p.index, {
                    N: g,
                    P: l,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            l = 2 === p.wh ? m : q
        }
        if (f[$b.dh] || f[$b.Zi]) {
            var r = f[$b.dh] ? Ac : c.Ek,
                t = g,
                u = l;
            if (!r[a]) {
                e = Ha(e);
                var v = kq(a, r, e);
                g = v.N;
                l = v.P
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function kq(a, b, c) {
        var d = [],
            e = [];
        b[a] = lq(d, e, c);
        return {
            N: function() {
                b[a] = mq;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            P: function() {
                b[a] = nq;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function lq(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function mq(a) {
        a()
    }

    function nq(a, b) {
        b()
    };
    var pq = function(a, b) {
            return 1 === arguments.length ? oq("config", a) : oq("config", a, b)
        },
        qq = function(a, b, c) {
            c = c || {};
            c[N.g.Fb] = a;
            return oq("event", b, c)
        };

    function oq(a) {
        return arguments
    }
    var rq = function() {
        this.h = [];
        this.m = []
    };
    rq.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.m.length; f++) try {
            this.m[f](e)
        } catch (g) {}
    };
    rq.prototype.listen = function(a) {
        this.m.push(a)
    };
    rq.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    rq.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var tq = function(a, b, c) {
            sq().enqueue(a, b, c)
        },
        vq = function() {
            var a = uq;
            sq().listen(a)
        };

    function sq() {
        var a = le.mb;
        a || (a = new rq, le.mb = a);
        return a
    }
    var Dq = function(a) {
            var b = le.zones;
            return b ? b.getIsAllowedFn(gi(), a) : function() {
                return !0
            }
        },
        Eq = function(a) {
            var b = le.zones;
            return b ? b.isActive(gi(), a) : !0
        };
    var Hq = function(a, b) {
        for (var c = [], d = 0; d < zc.length; d++)
            if (a[d]) {
                var e = zc[d];
                var f = rp(b.Gb);
                try {
                    var g = Wp(d, {
                        N: f,
                        P: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var l = c,
                            m = l.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = Bc[p];
                        m.call(l, {
                            Ph: n,
                            Hh: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else Fq(d, b), f()
                } catch (t) {
                    f()
                }
            }
        c.sort(Gq);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 < c.length
    };

    function Gq(a, b) {
        var c, d = b.Hh,
            e = a.Hh;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Ph,
                l = b.Ph;
            f = g > l ? 1 : g < l ? -1 : 0
        }
        return f
    }

    function Fq(a, b) {
        if (kj) {
            var c = function(d) {
                var e = b.Cf(zc[d]) ? "3" : "4",
                    f = Ic(zc[d][$b.hh], b, []);
                f && f.length && c(f[0].index);
                nk(b.id, zc[d], e);
                var g = Ic(zc[d][$b.mh], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Kq = !1,
        Iq;
    var Pq = function(a) {
        var b = Fa(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if (P(70)) {
            var f = Hn(Cn.F.Hc, R.B, c, void 0, e);
            In(f)
        }
        if ("gtm.js" === e) {
            if (Kq) return !1;
            Kq = !0;
        }
        var m, n = !1;
        if (Eq(c)) m = Dq(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            n = !0;
            m = Dq(Number.MAX_SAFE_INTEGER)
        }
        mk(c,
            e);
        var p = a.eventCallback,
            q = a.eventTimeout,
            r = {
                id: c,
                priorityId: d,
                name: e,
                Cf: Xo(m),
                Ek: [],
                Ch: function() {
                    J(6);
                    Ya("HEALTH", 0)
                },
                qh: Lq(),
                rh: Mq(c),
                Gb: new mp(function() {
                    if (P(70)) {
                        var x = Hn(Cn.F.Ug, R.B, c, void 0, e);
                        if (In(x)) {
                            var B = Hn(Cn.F.Hc, R.B, c, void 0, e);
                            Jn(x, B)
                        }
                        if ("gtm.load" === e) {
                            var A = Hn(Cn.F.ag, R.B);
                            if (In(A)) {
                                var D = Hn(Cn.F.xe, R.B);
                                Jn(A, D)
                            }
                            ko();
                        }
                    }
                    p && p.apply(p, [].slice.call(arguments, 0))
                }, q)
            },
            t = Nc(r);
        n && (t = Nq(t));
        if (P(70)) {
            var u = Hn(Cn.F.Vg, R.B, c, void 0, e);
            if (In(u)) {
                var v = Hn(Cn.F.Hc, R.B, c, void 0, e);
                Jn(u, v)
            }
        }
        var w = Hq(t, r),
            y = !1;
        sp(r.Gb);
        "gtm.js" !== e && "gtm.sync" !== e || zp(R.B);
        return Oq(t, w) || y
    };

    function Mq(a) {
        return function(b) {
            kj && (Zb(b) || wk(a, "input", b))
        }
    }

    function Lq() {
        var a = {};
        a.event = Pe("event", 1);
        a.ecommerce = Pe("ecommerce", 1);
        a.gtm = Pe("gtm");
        a.eventModel = Pe("eventModel");
        return a
    }

    function Nq(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(zc[c][$b.Qa]);
                if (ne[d] || void 0 !== zc[c][$b.aj] || Ee[d]) b[c] = !0;
                P(58) || 0 !== zc[c][$b.Qa].indexOf("__ccd") && 0 !== zc[c][$b.Qa].indexOf("__ogt") && "__set_product_settings" !== zc[c][$b.Qa] || (b[c] = !0)
            }
        return b
    }

    function Oq(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && zc[c] && !oe[String(zc[c][$b.Qa])]) return !0;
        return !1
    }
    var Rq = function(a, b, c, d) {
            Qq.push("event", [b, a], c, d)
        },
        Sq = function(a, b, c, d) {
            Qq.push("get", [a, b], c, d)
        },
        Tq = function() {
            this.status = 1;
            this.J = {};
            this.h = {};
            this.M = {};
            this.X = null;
            this.C = {};
            this.m = !1
        },
        Uq = function(a, b, c, d) {
            var e = Fa();
            this.type = a;
            this.m = e;
            this.Z = b || "";
            this.h = c;
            this.messageContext = d
        },
        Vq = function() {
            this.m = {};
            this.C = {};
            this.h = []
        },
        Wq = function(a, b) {
            var c = tl(b);
            return a.m[c.U] = a.m[c.U] || new Tq
        },
        Xq = function(a, b, c, d) {
            if (d.Z) {
                var e = Wq(a, d.Z),
                    f = e.X;
                if (f) {
                    var g = G(c),
                        l = G(e.J[d.Z]),
                        m = G(e.C),
                        n = G(e.h),
                        p = G(a.C),
                        q = {};
                    if (kj) try {
                        q = G(Ie)
                    } catch (v) {
                        J(72)
                    }
                    var r = tl(d.Z).prefix,
                        t = function(v) {
                            vk(d.messageContext.eventId, r, v);
                            var w = g[N.g.Tb];
                            w && E(w)
                        },
                        u = tm(rm(qm(pm(nm(mm(om(lm(km(jm(new im(d.messageContext.eventId, d.messageContext.priorityId), g), l), m), n), p), q), d.messageContext.eventMetadata), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("2")
                            }
                        }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3")
                            }
                        }));
                    try {
                        vk(d.messageContext.eventId, r, "1"), cp(d.type, d.Z, u), f(d.Z, b, d.m, u)
                    } catch (v) {
                        vk(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    Vq.prototype.register = function(a, b, c) {
        var d = Wq(this, a);
        3 !== d.status && (d.X = b, d.status = 3, c && (G(d.h, c), d.h = c), this.flush())
    };
    Vq.prototype.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!tl(c)) return;
            if (c) {
                var e = tl(c);
                e && 1 === Wq(this, c).status && (Wq(this, c).status = 2, this.push("require", [{}], e.U, {}))
            }
            Wq(this, c).m && (d.deferrable = !1)
        }
        this.h.push(new Uq(a, c, b, d));
        d.deferrable || this.flush()
    };
    Vq.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length;) {
            var f = this.h[0];
            if (f.messageContext.deferrable) !f.Z || Wq(this, f.Z).m ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = Wq(this, f.Z);
                        if (3 !== g.status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        k(f.h[0], function(r, t) {
                            G(Ma(r, t), b.C)
                        });
                        break;
                    case "config":
                        g = Wq(this, f.Z);
                        e.fb = {};
                        k(f.h[0], function(r) {
                            return function(t, u) {
                                G(Ma(t, u), r.fb)
                            }
                        }(e));
                        var l = !!e.fb[N.g.Fc];
                        delete e.fb[N.g.Fc];
                        var m = tl(f.Z),
                            n = m.U === m.id;
                        l || (n ? g.C = {} : g.J[f.Z] = {});
                        g.m && l || Xq(this, N.g.ma, e.fb, f);
                        g.m = !0;
                        n ? G(e.fb, g.C) : (G(e.fb, g.J[f.Z]), J(70));
                        d = !0;
                        break;
                    case "event":
                        g = Wq(this, f.Z);
                        e.jd = {};
                        k(f.h[0], function(r) {
                            return function(t, u) {
                                G(Ma(t, u), r.jd)
                            }
                        }(e));
                        Xq(this, f.h[1], e.jd, f);
                        break;
                    case "get":
                        g = Wq(this, f.Z);
                        var p = {},
                            q = (p[N.g.Ja] = f.h[0], p[N.g.Ua] = f.h[1], p);
                        Xq(this, N.g.Aa, q, f)
                }
                this.h.shift();
                Yq(this, f)
            }
            e = {
                fb: e.fb,
                jd: e.jd
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var Yq = function(a, b) {
            if ("require" !== b.type)
                if (b.Z)
                    for (var c = Wq(a, b.Z).M[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.m)
                        if (a.m.hasOwnProperty(e)) {
                            var f = a.m[e];
                            if (f && f.M)
                                for (var g = f.M[b.type] || [], l = 0; l < g.length; l++) g[l]()
                        }
        },
        Zq = function(a, b) {
            var c = Qq,
                d = G(b);
            G(Wq(c, a).h, d);
            Wq(c, a).h = d
        },
        Qq = new Vq;
    var $q = {},
        ar = {},
        br = function(a) {
            for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {
                    od: d.od,
                    ld: d.ld
                }, e++) {
                var f = a[e];
                if (0 <= f.indexOf("-")) d.od = tl(f), d.od && (ta(hi(), function(p) {
                    return function(q) {
                        return p.od.U === q
                    }
                }(d)) ? b.push(f) : c.push(f));
                else {
                    var g = $q[f] || [];
                    d.ld = {};
                    g.forEach(function(p) {
                        return function(q) {
                            return p.ld[q] = !0
                        }
                    }(d));
                    for (var l = gi(), m = 0; m < l.length; m++)
                        if (d.ld[l[m]]) {
                            b = b.concat(hi());
                            break
                        }
                    var n = ar[f] || [];
                    n.length && (b = b.concat(n))
                }
            }
            return {
                bk: b,
                dk: c
            }
        },
        cr = function(a) {
            k($q, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        dr = function(a) {
            k(ar, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var er = "HA GF G UA AW DC MC".split(" "),
        fr = !1,
        gr = !1;

    function hr(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Fe()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var ir = {
            config: function(a, b) {
                var c = hr(a, b);
                if (!(2 > a.length) && h(a[1])) {
                    var d = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !Yb(a[2]) || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = tl(a[1]);
                    if (e) {
                        mk(c.eventId, "gtag.config");
                        var f = e.U,
                            g = e.id !== f;
                        if (g ? -1 === hi().indexOf(f) : -1 === gi().indexOf(f)) {
                            if (!P(61) || !d[N.g.Qd]) {
                                var l = d[N.g.va] || Qq.C[N.g.va];
                                g ? Qo(f, l, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                }) : Po(f, l, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (qe && !g && !d[N.g.Fc]) {
                                var m = gr;
                                gr = !0;
                                if (m) return
                            }
                            fr || J(43);
                            if (!b.noTargetGroup)
                                if (g) {
                                    dr(e.id);
                                    var n = e.id,
                                        p = d[N.g.Od] || "default";
                                    p = String(p).split(",");
                                    for (var q = 0; q < p.length; q++) {
                                        var r = ar[p[q]] || [];
                                        ar[p[q]] = r;
                                        0 > r.indexOf(n) && r.push(n)
                                    }
                                } else {
                                    cr(e.id);
                                    var t = e.id,
                                        u = d[N.g.Od] || "default";
                                    u = u.toString().split(",");
                                    for (var v = 0; v < u.length; v++) {
                                        var w = $q[u[v]] || [];
                                        $q[u[v]] = w;
                                        0 > w.indexOf(t) && w.push(t)
                                    }
                                }
                            delete d[N.g.Od];
                            var y = b.eventMetadata || {};
                            y.hasOwnProperty("is_external_event") || (y.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata =
                                y;
                            delete d[N.g.Tb];
                            for (var x = g ? [e.id] : hi(), B = 0; B < x.length; B++) {
                                var A = G(b);
                                Qq.push("config", [d], x[B], A)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    J(39);
                    var c = hr(a, b),
                        d = a[1];
                    "default" === d ? Wh(a[2]) : "update" === d ? Xh(a[2], c) : "declare" === d && b.fromContainerExecution && Vh(a[2])
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && h(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!Yb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel = G(e), e[N.g.Tb] && (g.eventCallback = e[N.g.Tb]), e[N.g.Kd] &&
                        (g.eventTimeout = e[N.g.Kd]));
                    var l = hr(a, b),
                        m = l.eventId,
                        n = l.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[N.g.Fb];
                    void 0 === r && (r = Le(N.g.Fb, 2), void 0 === r && (r = "default"));
                    if (h(r) || sa(r)) {
                        var t = r.toString().replace(/\s+/g, "").split(","),
                            u = br(t),
                            v = u.bk,
                            w = u.dk;
                        if (w.length)
                            for (var y = q && q[N.g.va] || Qq.C[N.g.va], x = 0; x < w.length; x++) {
                                var B = tl(w[x]);
                                B && Qo(B.U, y, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p =
                            vl(v)
                    } else p = void 0;
                    var A = p;
                    if (A) {
                        mk(m, c);
                        for (var D = [], H = 0; H < A.length; H++) {
                            var I = A[H],
                                F = G(b);
                            if (-1 !== er.indexOf(I.prefix)) {
                                var L = G(d),
                                    K = F.eventMetadata || {};
                                K.hasOwnProperty("is_external_event") || (K.is_external_event = !F.fromContainerExecution);
                                F.eventMetadata = K;
                                delete L[N.g.Tb];
                                Rq(c, L, I.id, F)
                            }
                            D.push(I.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < A.length ? g.eventModel[N.g.Fb] = D.join() : delete g.eventModel[N.g.Fb];
                        fr || J(43);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                J(53);
                if (4 === a.length && h(a[1]) && h(a[2]) &&
                    qa(a[3])) {
                    var c = tl(a[1]),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        fr || J(43);
                        var f = Qq.C[N.g.va];
                        if (!ta(hi(), function(l) {
                                return c.U === l
                            })) Qo(c.U, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== er.indexOf(c.prefix)) {
                            hr(a, b);
                            var g = {};
                            Rh(G((g[N.g.Ja] = d, g[N.g.Ua] = e, g)));
                            Sq(d, function(l) {
                                E(function() {
                                    return e(l)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    fr = !0;
                    var c = hr(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] =
                        d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function() {},
            set: function(a, b) {
                var c;
                2 == a.length && Yb(a[1]) ? c = G(a[1]) : 3 == a.length && h(a[1]) && (c = {}, Yb(a[2]) || sa(a[2]) ? c[a[1]] = G(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = hr(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    G(c);
                    var g = G(c);
                    Qq.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    P(30) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        jr = {
            policy: !0
        };
    var kr = function(a) {
            var b = z[ke.ca].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        lr = function(a) {
            var b = z[ke.ca],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var mr = !1,
        nr = [];

    function or() {
        if (!mr) {
            mr = !0;
            for (var a = 0; a < nr.length; a++) E(nr[a])
        }
    }
    var pr = function(a) {
        mr ? E(a) : nr.push(a)
    };
    var Gr = function(a) {
        if (Fr(a)) return a;
        this.h = a
    };
    Gr.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Fr = function(a) {
        return !a || "object" !== Wb(a) || Yb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Gr.prototype.getUntrustedMessageValue = Gr.prototype.getUntrustedMessageValue;
    var Hr = 0,
        Ir = {},
        Jr = [],
        Kr = [],
        Lr = !1,
        Mr = !1;

    function Nr(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Or = function(a) {
            return z[ke.ca].push(a)
        },
        Pr = function(a, b) {
            var c = le[ke.ca],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function Qr(a, b) {
        var c = a._clear || b.overwriteModelFields;
        k(a, function(e, f) {
            "_clear" !== e && (c && Oe(e), Oe(e, f))
        });
        Ae || (Ae = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Fe(), a["gtm.uniqueEventId"] = d, Oe("gtm.uniqueEventId", d));
        return Pq(a)
    }

    function Rr(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (za(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Sr() {
        var a;
        if (Kr.length) a = Kr.shift();
        else if (Jr.length) a = Jr.shift();
        else return;
        var b;
        var c = a;
        if (Lr || !Rr(c.message)) b = c;
        else {
            Lr = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Fe());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                l = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Jr.unshift(l, c);
            if (kj && R.B) {
                var m;
                if (R.Jc) {
                    var n = R.B,
                        p = ei().destination[n];
                    m = p && p.context
                } else {
                    var q = R.B,
                        r = ei().container[q];
                    m = r && r.context
                }
                var t = m,
                    u, v = zf(z.location.href);
                u = v.hostname + v.pathname;
                var w = t && t.fromContainerExecution,
                    y = t && t.source,
                    x = R.B,
                    B = R.jb,
                    A = R.Jc;
                wj || (wj = u);
                vj.push(x + ";" + B + ";" + (w ? 1 : 0) + ";" + (y || 0) + ";" + (A ? 1 : 0))
            }
            b = f
        }
        return b
    }

    function Tr() {
        for (var a = !1, b; !Mr && (b = Sr());) {
            Mr = !0;
            delete Ie.eventModel;
            Ke();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Mr = !1;
            else {
                if (e.fromContainerExecution)
                    for (var f = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist", "gtm.blacklist", "tagTypeBlacklist"], g = 0; g < f.length; g++) {
                        var l = f[g],
                            m = Le(l, 1);
                        if (sa(m) || Yb(m)) m = G(m);
                        Je[l] = m
                    }
                try {
                    if (qa(d)) try {
                        d.call(Me)
                    } catch (D) {} else if (sa(d)) {
                        var n =
                            d;
                        if (h(n[0])) {
                            var p = n[0].split("."),
                                q = p.pop(),
                                r = n.slice(1),
                                t = Le(p.join("."), 2);
                            if (null != t) try {
                                t[q].apply(t, r)
                            } catch (D) {}
                        }
                    } else {
                        var u = void 0,
                            v = !1;
                        if (za(d)) {
                            a: {
                                if (d.length && h(d[0])) {
                                    var w = ir[d[0]];
                                    if (w && (!e.fromContainerExecution || !jr[d[0]])) {
                                        u = w(d, e);
                                        break a
                                    }
                                }
                                u = void 0
                            }(v = u && "set" === d[0] && !!u.event) && J(101)
                        }
                        else u = d;
                        if (u) {
                            var y = Qr(u, e);
                            a = y || a;
                            v && y && J(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ke(!0);
                    var x = d["gtm.uniqueEventId"];
                    if ("number" === typeof x) {
                        for (var B = Ir[String(x)] || [], A = 0; A < B.length; A++) Kr.push(Ur(B[A]));
                        B.length && Kr.sort(Nr);
                        delete Ir[String(x)];
                        x > Hr && (Hr = x)
                    }
                    Mr = !1
                }
            }
        }
        return !a
    }

    function Vr() {
        if (P(70)) {
            var b = Hn(Cn.F.xe, R.B);
            In(b);
            if (Wr()) {
                var c = Hn(Cn.F.dg, R.B);
                if (In(c)) {
                    var d = Hn(Cn.F.ze, R.B);
                    Jn(c, d)
                }
            }
        }
        var e = Tr();
        try {
            kr(R.B)
        } catch (f) {}
        return e
    }

    function uq(a) {
        if (Hr < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Ir[b] = Ir[b] || [];
            Ir[b].push(a)
        } else Kr.push(Ur(a)), Kr.sort(Nr), E(function() {
            Mr || Tr()
        })
    }

    function Ur(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Xr = function() {
            function a(g) {
                var l = {};
                if (Fr(g)) {
                    var m = g;
                    g = Fr(m) ? m.getUntrustedMessageValue() : void 0;
                    l.fromContainerExecution = !0
                }
                return {
                    message: g,
                    messageContext: l
                }
            }
            var b = Cb(ke.ca, []),
                c = le[ke.ca] = le[ke.ca] || {};
            !0 === c.pruned && J(83);
            Ir = sq().get();
            vq();
            jp(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var g = {};
                    b.push((g.event = "gtm.dom", g))
                }
            });
            pr(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var g = {};
                    b.push((g.event = "gtm.load", g))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var g;
                if (0 < le.SANDBOXED_JS_SEMAPHORE) {
                    g = [];
                    for (var l = 0; l < arguments.length; l++) g[l] = new Gr(arguments[l])
                } else g = [].slice.call(arguments, 0);
                var m = g.map(function(r) {
                    return a(r)
                });
                Jr.push.apply(Jr, m);
                var n = d.apply(b, g),
                    p = Math.max(100, Number("1000") || 300);
                if (this.length > p)
                    for (J(4), c.pruned = !0; this.length > p;) this.shift();
                var q = "boolean" !== typeof n || n;
                return Tr() && q
            };
            var e = b.slice(0).map(function(g) {
                return a(g)
            });
            Jr.push.apply(Jr, e);
            if (Wr()) {
                if (P(70)) {
                    var f = Hn(Cn.F.ze, R.B);
                    In(f)
                }
                E(Vr)
            }
        },
        Wr = function() {
            var a = !0;
            return a
        };

    function Yr(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Fa();
        return b < c + 3E5 && b > c - 9E5
    }

    function Zr(a) {
        return a && 0 === a.indexOf("pending:") ? Yr(a.substr(8)) : !1
    };
    var Ec = {};
    Ec.Vd = new String("undefined");
    var zs = z.clearTimeout,
        As = z.setTimeout,
        T = function(a, b, c, d) {
            if (ci()) {
                b && E(b)
            } else return Hb(a, b, c, d)
        },
        Bs = function() {
            return new Date
        },
        Cs = function() {
            return z.location.href
        },
        Ds = function(a) {
            return xf(zf(a), "fragment")
        },
        Es = function(a) {
            return yf(zf(a))
        },
        Fs = function(a, b) {
            return Le(a, b || 2)
        },
        Gs = function(a, b, c) {
            var d;
            b ? (a.eventCallback = b, c && (a.eventTimeout = c), d = Or(a)) : d = Or(a);
            return d
        },
        Hs = function(a, b) {
            z[a] = b
        },
        U = function(a, b, c) {
            b &&
                (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        Is = function(a, b, c) {
            return Jf(a, b, void 0 === c ? !0 : !!c)
        },
        Js = function(a, b, c) {
            return 0 === Sf(a, b, c)
        },
        Ks = function(a, b) {
            if (ci()) {
                b && E(b)
            } else Jb(a, b)
        },
        Ls = function(a) {
            return !!fs(a, "init", !1)
        },
        Ms = function(a) {
            ds(a, "init", !0)
        },
        Ns = function(a, b, c) {
            kj && (Zb(a) || wk(c, b, a))
        };

    function kt(a, b) {
        function c(g) {
            var l = zf(g),
                m = xf(l, "protocol"),
                n = xf(l, "host", !0),
                p = xf(l, "port"),
                q = xf(l, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function lt(a) {
        return mt(a) ? 1 : 0
    }

    function mt(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = G(a, {});
                G({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (lt(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < gd.length; g++) {
                            var l = gd[g];
                            if (b[l]) {
                                f = b[l](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return hd(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return jd(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return kt(b, c)
        }
        return !1
    };
    gh();

    function Lt() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var Mt = function() {
            var a = Lt();
            a.hid = a.hid || ua();
            return a.hid
        },
        Nt = function(a, b) {
            var c = Lt();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var ju = function() {
            var a = !0;
            bj(7) && bj(9) && bj(10) || (a = !1);
            return a
        },
        ku = function() {
            var a = !0;
            bj(3) && bj(4) || (a = !1);
            return a
        };
    var Mu = window,
        Nu = document,
        Ou = function(a) {
            var b = Mu._gaUserPrefs;
            if (b && b.ioo && b.ioo() || Nu.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === Mu["ga-disable-" + a]) return !0;
            try {
                var c = Mu.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Df("AMP_TOKEN", String(Nu.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return Nu.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function Vu(a) {
        k(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.La] || {};
        k(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var dv = function(a, b) {};

    function cv(a, b) {
        var c = function() {};
        return c
    }

    function ev(a, b, c) {};
    var Jw = cv;
    Object.freeze({
        dl: 1,
        id: 1
    });
    Object.freeze(["config", "event", "get", "set"]);
    var Lw = encodeURI,
        V = encodeURIComponent,
        Mw = function(a, b, c) {
            Kb(a, b, c)
        },
        Nw = function(a, b) {
            if (!a) return !1;
            var c = xf(zf(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Ow = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var X = {
        o: {}
    };
    X.o.e = ["google"],
        function() {
            (function(a) {
                X.__e = a;
                X.__e.s = "e";
                X.__e.isVendorTemplate = !0;
                X.__e.priorityOverride = 0;
                X.__e.isInfrastructure = !1
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    X.o.f = ["google"],
        function() {
            (function(a) {
                X.__f = a;
                X.__f.s = "f";
                X.__f.isVendorTemplate = !0;
                X.__f.priorityOverride = 0;
                X.__f.isInfrastructure = !1
            })(function(a) {
                var b = Fs("gtm.referrer", 1) || C.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? xf(zf(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : Es(String(b)) : String(b)
            })
        }();
    X.o.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                X.__u = b;
                X.__u.s = "u";
                X.__u.isVendorTemplate = !0;
                X.__u.priorityOverride = 0;
                X.__u.isInfrastructure = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : Fs("gtm.url", 1)) || Cs();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return Es(String(c));
                var e = zf(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        l = b[a("vtp_queryKey").toString()] || "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? sa(l) ? n = l : n = String(l).replace(/\s+/g, "").split(",") : n = [String(l)];
                    for (var p = 0; p < n.length; p++) {
                        var q = xf(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = xf(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();



















    var hy = {};
    hy.dataLayer = Me;
    hy.callback = function(a) {
        Ce.hasOwnProperty(a) && qa(Ce[a]) && Ce[a]();
        delete Ce[a]
    };
    hy.bootstrap = 0;
    hy._spx = !1;

    function iy() {
        le[R.B] = le[R.B] || hy;
        R.jb && (le["ctid_" + R.jb] = hy);
        ii();
        li() || k(mi(), function(a, b) {
            Qo(a, b.transportUrl, b.context);
            J(92)
        });
        Ia(De, X.o);
        Gc = Oc
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            Yr(m) && (l = g.Oi)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = zf(C.referrer);
                c = "cct.google" === wf(d, "host")
            }
            if (!c) {
                var e = Jf("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Hb("https://cct.google/taggy/agent.js"))
        }
        if (xe) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    re ? (v = "OGT", w = "GTAG") : xe && (w = v = "OPT");
                    var y = z["google.tagmanager.debugui2.queue"];
                    y || (y = [],
                        z["google.tagmanager.debugui2.queue"] = y, Hb("https://" + ke.qd + "/debug/bootstrap?id=" + R.B + "&src=" + w + "&cond=" + u + "&gtm=" + oi()));
                    var x = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Bb,
                            containerProduct: v,
                            debug: !1,
                            id: R.B,
                            isGte: qe
                        }
                    };
                    x.data.resume = function() {
                        a()
                    };
                    ke.Zh && (x.data.initialPublish = !0);
                    y.push(x)
                },
                g = {
                    Nk: 1,
                    Pi: 2,
                    bj: 3,
                    bi: 4,
                    Oi: 5
                },
                l = void 0,
                m = void 0,
                n = xf(z.location, "query", !1, void 0, "gtm_debug");
            Yr(n) && (l = g.Pi);
            if (!l && C.referrer) {
                var p = zf(C.referrer);
                "tagassistant.google.com" === wf(p, "host") && (l = g.bj)
            }
            if (!l) {
                var q =
                    Jf("__TAG_ASSISTANT");
                q.length && q[0].length && (l = g.bi)
            }
            l || b();
            if (!l && Zr(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        l && Bb ? f(l) : a()
                    },
                    t = !1;
                Lb(C, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else l && Bb ? f(l) : a()
        }
    })(function() {
        var a = !1;
        a && mo("INIT");
        if (P(70)) {
            var b =
                Hn(Cn.F.ye, R.B);
            In(b)
        }
        Te().m();
        Zi();
        if (R.jb ? le["ctid_" + R.jb] : le[R.B]) {
            var c = le.zones;
            c && c.unregisterChild(gi());
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) wc.push(e[f]);
            for (var g = d.tags || [], l = 0; l < g.length; l++) zc.push(g[l]);
            for (var m = d.predicates || [], n = 0; n < m.length; n++) yc.push(m[n]);
            for (var p = d.rules || [], q = 0; q < p.length; q++) {
                for (var r = p[q], t = {}, u = 0; u < r.length; u++) t[r[u][0]] = Array.prototype.slice.call(r[u], 1);
                xc.push(t)
            }
            Bc = X;
            Cc = lt;
            iy();
            Xr();
            ep = !1;
            fp = 0;
            if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) hp();
            else {
                Lb(C, "DOMContentLoaded", hp);
                Lb(C, "readystatechange", hp);
                if (C.createEventObject && C.documentElement.doScroll) {
                    var v = !0;
                    try {
                        v = !z.frameElement
                    } catch (H) {}
                    v && ip()
                }
                Lb(z, "load", hp)
            }
            mr = !1;
            "complete" === C.readyState ? or() : Lb(z, "load", or);
            kj && z.setInterval(pj, 864E5);
            Ya("HEALTH", 1);
            Be = Fa();
            hy.bootstrap = Be;
            if (a) {
                var B = no("INIT");
            }
            if (P(70)) {
                var A = Hn(Cn.F.cg, R.B);
                if (In(A)) {
                    var D = Hn(Cn.F.ye, R.B);
                    Jn(A, D)
                }
            }
        }
    });

})()