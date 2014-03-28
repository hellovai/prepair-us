db.questions.insert({
    "details": "<p>The Fibonacci sequence is defined by the recurrence relation:</p><blockquote>F<sub><i>n</i></sub> = F<sub><i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</sub> + F<sub><i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2</sub>, where F<sub>1</sub> = 1 and F<sub>2</sub> = 1.</blockquote><p>Hence the first 12 terms will be:</p><blockquote>F<sub>1</sub> = 1<br/>F<sub>2</sub> = 1<br/>F<sub>3</sub> = 2<br/>F<sub>4</sub> = 3<br/>F<sub>5</sub> = 5<br/>F<sub>6</sub> = 8<br/>F<sub>7</sub> = 13<br/>F<sub>8</sub> = 21<br/>F<sub>9</sub> = 34<br/>F<sub>10</sub> = 55<br/>F<sub>11</sub> = 89<br/>F<sub>12</sub> = 144</blockquote><p>The 12th term, F<sub>12</sub>, is the first term to contain three digits.</p><p>What is the first term in the Fibonacci sequence to contain 1000 digits?</p>",
    "folder": "1000-digit-fibonacci-number",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "1000-digit Fibonacci number"
});

db.questions.insert({
    "details": "<p>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.</p><p>What is the 10 001st prime number?</p>",
    "folder": "10001st-prime",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "10001st prime"
});

db.questions.insert({
    "details": "<p>Consider the real number <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3.<br/>When we calculate the even powers of <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3we get:<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>2</sup> = 9.898979485566356...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>4</sup> = 97.98979485566356...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>6</sup> = 969.998969071069263...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>8</sup> = 9601.99989585502907...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>10</sup> = 95049.999989479221...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>12</sup> = 940897.9999989371855...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>14</sup> = 9313929.99999989263...<br/>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>16</sup> = 92198401.99999998915...<br/></p><p>It looks like that the number of consecutive nines at the beginning of the fractional part of these powers is non-decreasing.<br/>In fact it can be proven that the fractional part of (<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3)<sup>2n</sup> approaches 1 for large n.</p><p>Consider all real numbers of the form <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>p+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>q with p and q positive integers and p<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>q, such that the fractional part of (<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>p+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>q)<sup>2n</sup> approaches 1 for large n.</p><p>Let C(p,q,n) be the number of consecutive nines at the beginning of the fractional part of <br/> (<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>p+<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>q)<sup>2n</sup>.</p><p>Let N(p,q) be the minimal value of n such that C(p,q,n) <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2011.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>N(p,q) for p+q <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2011.</p>",
    "folder": "2011-nines",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "2011 nines"
});

db.questions.insert({
    "details": "<p>Find the number of non-empty subsets of{1<sup>1</sup>, 2<sup>2</sup>, 3<sup>3</sup>,..., 250250<sup>250250</sup>}, the sum of whose elements is divisible by 250. Enter the rightmost 16 digits as your answer.</p>",
    "folder": "250250",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "250250"
});

db.questions.insert({
    "details": "<p>A <i>positive integer matrix</i> is a matrix whose elements are all positive integers.<br/>Some positive integer matrices can be expressed as a square of a positive integer matrix in two different ways. Here is an example:</p><div align=\"center\"><img src=\"project/images/p_420_matrix.gif\"/></div><p>We define F(<var>N</var>) as the number of the 2x2 positive integer matrices which have a <dfn title=\"the sum of the elements on the main diagonal\">trace</dfn> less than <var>N</var> and which can be expressed as a square of a positive integer matrix in two different ways.<br/>We can verify that F(50) = 7 and F(1000) = 1019.</p><p>Find F(10<sup>7</sup>).</p>",
    "folder": "2x2-positive-integer-matrix",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "2x2 positive integer matrix"
});

db.questions.insert({
    "details": "<p>A row of <var>n</var> squares contains a frog in the leftmost square. By successive jumps the frog goes to the rightmost square and then back to the leftmost square. On the outward trip he jumps one, two or three squares to the right, and on the homeward trip he jumps to the left in a similar manner. He cannot jump outside the squares. He repeats the round-trip travel <var>m</var> times.</p><p>Let F(<var>m</var>, <var>n</var>) be the number of the ways the frog can travel so that at most one square remains unvisited.<br/>For example, F(1, 3) = 4, F(1, 4) = 15, F(1, 5) = 46, F(2, 3) = 16 and F(2, 100) mod 10<sup>9</sup> = 429619151.</p><p>Find the last 9 digits of F(10, 10<sup>12</sup>).</p>",
    "folder": "a-frogs-trip",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A frog's trip"
});

db.questions.insert({
    "details": "<p>The binomial coeffient C(10<sup>18</sup>,10<sup>9</sup>) is a number with more than 9 billion (9<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>9</sup>) digits.</p><p>Let M(n,k,m) denote the binomial coefficient C(n,k) modulo m.</p><p>Calculate <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>M(10<sup>18</sup>,10<sup>9</sup>,p*q*r) for 1000<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>p<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>q<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>r<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>5000 and p,q,r prime.</p>",
    "folder": "a-huge-binomial-coefficient",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A huge binomial coefficient"
});

db.questions.insert({
    "details": "<p><table><tr><td>The <b> harmonic series </b> 1</td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">2</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">3</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">4</td></tr></table></td><td>+ ... is well known to be divergent. </td></tr></table></p><p>If we however omit from this series every term where the denominator has a 9 in it, the series remarkably enough converges to approximately 22.9206766193.<br/>This modified harmonic series is called the <b>Kempner</b> series.</p><p>Let us now consider another modified harmonic series by omitting from the harmonic series every term where the denominator has 3 or more equal consecutive digits.One can verify that out of the first 1200 terms of the harmonic series, only 20 terms will be omitted.<br/>These 20 omitted terms are:</p><table><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">111</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">222</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">333</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">444</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">555</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">666</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">777</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">888</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">999</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1000</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1110</td></tr></table></td><td>,</td></table><table><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1111</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1112</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1113</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1114</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1115</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1116</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1117</td></tr></table></td><td>,</td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1118</td></tr></table></td><td> and </td><td><table class=\"frac\" style=\"text-align:center;\"><tr><td>1</td></tr><tr><td class=\"overline\">1119</td></tr></table></td><td>.</td></table><p>This series converges as well.</p><p> Find the value the series converges to.<br/>Give your answer rounded to 10 digits behind the decimal point.</p>",
    "folder": "a-kempner-like-series",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A Kempner-like series"
});

db.questions.insert({
    "details": "<p>A sequence is defined as:</p><p><ul><li><var>g</var><sub><var>k</var></sub> = 1, for 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1999</li><li><var>g</var><sub><var>k</var></sub> = <var>g</var><sub><var>k</var>-2000</sub> + <var>g</var><sub><var>k</var>-1999</sub>, for <var>k</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2000.</li></ul></p><p>Find <var>g</var><sub><var>k</var></sub> mod 20092010 for <var>k</var> = 10<sup>18</sup>.</p>",
    "folder": "a-lagged-fibonacci-sequence",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A lagged Fibonacci sequence"
});

db.questions.insert({
    "details": "<p>A modified Collatz sequence of integers is obtained from a starting value a<sub>1</sub> in the following way:</p><p><var>a<sub>n+1</sub></var> = <var>a<sub>n</sub></var>/3 if <var>a<sub>n</sub></var> is divisible by 3. We shall denote this as a large downward step, \"D\".</p><p><var>a<sub>n+1</sub></var> = (4<var>a<sub>n</sub></var> + 2)/3 if <var>a<sub>n</sub></var> divided by 3 gives a remainder of 1. We shall denote this as an upward step, \"U\".</p><p><var>a<sub>n+1</sub></var> = (2<var>a<sub>n</sub></var> - 1)/3 if <var>a<sub>n</sub></var> divided by 3 gives a remainder of 2. We shall denote this as a small downward step, \"d\".</p><p>The sequence terminates when some <var>a<sub>n</sub></var> = 1.</p><p>Given any integer, we can list out the sequence of steps.<br/>For instance if <var>a</var><sub>1</sub>=231, then the sequence{<var>a<sub>n</sub></var>}{231,77,51,17,11,7,10,14,9,3,1} corresponds to the steps \"DdDddUUdDD\".</p><p>Of course, there are other sequences that begin with that same sequence \"DdDddUUdDD....\".<br/>For instance, if <var>a</var><sub>1</sub>=1004064, then the sequence is DdDddUUdDDDdUDUUUdDdUUDDDUdDD.<br/>In fact, 1004064 is the smallest possible <var>a</var><sub>1</sub> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>6</sup> that begins with the sequence DdDddUUdDD.</p><p>What is the smallest <var>a</var><sub>1</sub> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>15</sup> that begins with the sequence \"UDDDUdddDDUDDddDdDddDDUDDdUUDd\"?</p>",
    "folder": "a-modified-collatz-sequence",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A Modified Collatz sequence"
});

db.questions.insert({
    "details": "<p>We wish to tile a rectangle whose length is twice its width.<br/>Let <var>T</var>(0) be the tiling consisting of a single rectangle.<br/>For <var>n</var> &gt; 0, let <var>T</var>(<var>n</var>) be obtained from <var>T</var>(<var>n</var>-1) by replacing all tiles in the following manner:</p><div align=\"center\"><img src=\"project/images/p_405_tile1.png\"/></div><p>The following animation demonstrates the tilings <var>T</var>(<var>n</var>) for <var>n</var> from 0 to 5:</p><div align=\"center\"><img src=\"project/images/p_405_tile2.gif\"/></div><p>Let <var>f</var>(<var>n</var>) be the number of points where four tiles meet in <var>T</var>(<var>n</var>).<br/>For example, <var>f</var>(1) = 0, <var>f</var>(4) = 82 and <var>f</var>(10<sup>9</sup>) mod 17<sup>7</sup> = 126897180.</p><p>Find <var>f</var>(10<sup><var>k</var></sup>) for <var>k</var> = 10<sup>18</sup>, give your answer modulo 17<sup>7</sup>.</p>",
    "folder": "a-rectangular-tiling",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A rectangular tiling"
});

db.questions.insert({
    "details": "<p>The <i>blancmange curve</i> is the set of points (<var>x</var>,<var>y</var>) such that 0\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u2009<var>x</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u20091 and <img alt=\"\" src=\"project/images/p_226_formula.gif\" style=\"vertical-align:middle;\"/> ,<br/>where <var>s</var>(<var>x</var>) = the distance from <var>x</var> to the nearest integer.</p><p>The area under the blancmange curve is equal to \u00bd, shown in pink in the diagram below.</p><div style=\"text-align:center;\"><img alt=\"blancmange curve\" src=\"project/images/p_226_scoop2.gif\"/></div><p>Let <var>C</var> be the circle with centre (\u00bc,\u00bd) and radius \u00bc, shown in black in the diagram.</p><p>What area under the blancmange curve is enclosed by <var>C</var>?<br/>Give your answer rounded to eight decimal places in the form <i>0.abcdefgh</i></p>",
    "folder": "a-scoop-of-blancmange",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "A Scoop of Blancmange"
});

db.questions.insert({
    "details": "<p>The radical of <i>n</i>, rad(<i>n</i>), is the product of distinct prime factors of <i>n</i>. For example, 504 = 2<sup>3</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3<sup>2</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7, so rad(504) = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7 = 42.</p><p>We shall define the triplet of positive integers (<i>a</i>, <i>b</i>, <i>c</i>) to be an abc-hit if:</p><ol><li>GCD(<i>a,</i> <i>b</i>) = GCD(<i>a</i>, <i>c</i>) = GCD(<i>b</i>, <i>c</i>) = 1</li><li><i>a</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>b</i></li><li><i>a</i> + <i>b</i> = <i>c</i></li><li>rad(<i>abc</i>) <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>c</i></li></ol><p>For example, (5, 27, 32) is an abc-hit, because:</p><ol><li>GCD(5, 27) = GCD(5, 32) = GCD(27, 32) = 1</li><li>5 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 27</li><li>5 + 27 = 32</li><li>rad(4320) = 30 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 32</li></ol><p>It turns out that abc-hits are quite rare and there are only thirty-one abc-hits for <i>c</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000, with <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><i>c</i> = 12523.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><i>c</i> for <i>c</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 120000.</p>",
    "folder": "abc-hits",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "abc-hits"
});

db.questions.insert({
    "details": "<p>Let's call a lattice point (<var>x</var>, <var>y</var>) <i>inadmissible</i> if <var>x</var>, <var>y</var> and <var>x</var>\u00a0+\u00a0<var>y</var> are all positive perfect squares.<br/>For example, (9, 16) is inadmissible, while (0, 4), (3, 1) and (9, 4) are not.</p><p>Consider a path from point (<var>x</var><sub>1</sub>, <var>y</var><sub>1</sub>) to point (<var>x</var><sub>2</sub>, <var>y</var><sub>2</sub>) using only unit steps north or east.<br/>Let's call such a path <i>admissible</i> if none of its intermediate points are inadmissible.</p><p>Let P(<var>n</var>) be the number of admissible paths from (0, 0) to (<var>n</var>, <var>n</var>).<br/>It can be verified that P(5) = 252, P(16) = 596994440 and P(1000) mod 1\u00a0000\u00a0000\u00a0007 = 341920854.</p><p>Find P(10\u00a0000\u00a0000) mod 1\u00a0000\u00a0000\u00a0007.</p>",
    "folder": "admissible-paths-through-a-gri",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Admissible paths through a grid"
});

db.questions.insert({
    "details": "<p>We shall call a positive integer <var>A</var> an \"Alexandrian integer\", if there exist integers <var>p</var>, <var>q</var>, <var>r</var> such that:</p><table class=\"formula\" style=\"margin-left:50px;\"><tr><td><var>A</var> = <var>p</var> \u00b7 <var>q</var> \u00b7 <var>r</var> \u00a0\u00a0\u00a0and\u00a0\u00a0   </td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\"><var>A</var></td></tr></table></td><td>=</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\"><var>p</var></td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\"><var>q</var></td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\"><var>r</var></td></tr></table></td></tr></table><p>For example, 630 is an Alexandrian integer (<var>p</var>\u00a0=\u00a05, <var>q</var>\u00a0=\u00a0<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>7, <var>r</var>\u00a0=\u00a0<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>18).In fact, 630 is the 6<sup>th</sup> Alexandrian integer,  the first 6 Alexandrian integers being: 6, 42, 120, 156, 420 and 630.</p><p>Find the 150000<sup>th</sup> Alexandrian integer.</p>",
    "folder": "alexandrian-integers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Alexandrian Integers"
});

db.questions.insert({
    "details": "<p>It is easily proved that no equilateral triangle exists with integral length sides and integral area. However, the <i>almost equilateral triangle</i> 5-5-6 has an area of 12 square units.</p><p>We shall define an <i>almost equilateral triangle</i> to be a triangle for which two sides are equal and the third differs by no more than one unit.</p><p>Find the sum of the perimeters of all <i>almost equilateral triangles</i> with integral side lengths and area and whose perimeters do not exceed one billion (1,000,000,000).</p>",
    "folder": "almost-equilateral-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Almost equilateral triangles"
});

db.questions.insert({
    "details": "<p>Let us call an integer sided triangle with sides <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>c</var> <i>barely obtuse</i> if the sides satisfy <br/> <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup> - 1.</p><p>How many barely obtuse triangles are there with perimeter <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 75,000,000?</p>",
    "folder": "almost-right-angled-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Almost right-angled triangles II"
});

db.questions.insert({
    "details": "<p>An m<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>n maze is an m<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>n rectangular grid with walls placed between grid cells such that there is exactly one path from the top-left square to any other square. <br/>The following are examples of a 9<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>12 maze and a 15<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>20 maze:</p><p><img src=\"project/images/p_380_mazes.gif\"/></p><p>Let C(m,n) be the number of distinct m<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>n mazes. Mazes which can be formed by rotation and reflection from another maze are considered distinct.</p><p>It can be verified that C(1,1) = 1, C(2,2) = 4, C(3,4) = 2415, and C(9,12) = 2.5720e46 (in scientific notation rounded to 5 significant digits).<br/>Find C(100,500) and write your answer in scientific notation rounded to 5 significant digits.</p><p>When giving your answer, use a lowercase e to separate mantissa and exponent.E.g. if the answer is 1234567891011 then the answer format would be 1.2346e12.</p>",
    "folder": "amazing-mazes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Amazing Mazes!"
});

db.questions.insert({
    "details": "<p>A best approximation to a real number <var>x</var> for the denominator bound <var>d</var> is a rational number <var>r</var>/<var>s</var> (in reduced form) with <var>s</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>d</var>, so that any rational number <var>p</var>/<var>q</var> which is closer to <var>x</var> than <var>r</var>/<var>s</var> has <var>q</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>d</var>.</p><p>Usually the best approximation to a real number is uniquely determined for all denominator bounds. However, there are some exceptions, e.g. 9/40 has the two best approximations 1/4 and 1/5 for the denominator bound 6.We shall call a real number <var>x</var> <i>ambiguous</i>, if there is at least one denominator bound for which <var>x</var> possesses two best approximations. Clearly, an ambiguous number is necessarily rational.</p><p>How many ambiguous numbers <var>x</var> = <var>p</var>/<var>q</var>,0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1/100, are there whose denominator <var>q</var> does not exceed 10<sup>8</sup>?</p>",
    "folder": "ambiguous-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Ambiguous Numbers"
});

db.questions.insert({
    "details": "<p>The proper divisors of a number are all the divisors excluding the number itself. For example, the proper divisors of 28 are 1, 2, 4, 7, and 14. As the sum of these divisors is equal to 28, we call it a perfect number.</p><p>Interestingly the sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220, forming a chain of two numbers. For this reason, 220 and 284 are called an amicable pair.</p><p>Perhaps less well known are longer chains. For example, starting with 12496, we form a chain of five numbers:</p><p style=\"text-align:center;\">12496 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 14288 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 15472 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 14536 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 14264 (<img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 12496 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> ...)</p><p>Since this chain returns to its starting point, it is called an amicable chain.</p><p>Find the smallest member of the longest amicable chain with no element exceeding one million.</p>",
    "folder": "amicable-chains",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Amicable chains"
});

db.questions.insert({
    "details": "<p>Let d(<i>n</i>) be defined as the sum of proper divisors of <i>n</i> (numbers less than <i>n</i> which divide evenly into <i>n</i>).<br/>If d(<i>a</i>) = <i>b</i> and d(<i>b</i>) = <i>a</i>, where <i>a</i> <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> <i>b</i>, then <i>a</i> and <i>b</i> are an amicable pair and each of <i>a</i> and <i>b</i> are called amicable numbers.</p><p>For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.</p><p>Evaluate the sum of all the amicable numbers under 10000.</p>",
    "folder": "amicable-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Amicable numbers"
});

db.questions.insert({
    "details": "<p>A program written in the programming language Fractran consists of a list of fractions.</p><p>The internal state of the Fractran Virtual Machine is a positive integer, which is initially set to a seed value. Each iteration of a Fractran program multiplies the state integer by the first fraction in the list which will leave it an integer.</p><p>For example, one of the Fractran programs that John Horton Conway wrote for prime-generation consists of the following 14 fractions:<br/><table class=\"formula\"><tr><td><table class=\"frac\"><tr><td>17</td></tr><tr><td class=\"overline\">91</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>78</td></tr><tr><td class=\"overline\">85</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>19</td></tr><tr><td class=\"overline\">51</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>23</td></tr><tr><td class=\"overline\">38</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>29</td></tr><tr><td class=\"overline\">33</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>77</td></tr><tr><td class=\"overline\">29</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>95</td></tr><tr><td class=\"overline\">23</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>77</td></tr><tr><td class=\"overline\">19</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">17</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>11</td></tr><tr><td class=\"overline\">13</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>13</td></tr><tr><td class=\"overline\">11</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>15</td></tr><tr><td class=\"overline\">2</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">7</td></tr></table></td><td>,</td><td><table class=\"frac\"><tr><td>55</td></tr><tr><td class=\"overline\">1</td></tr></table></td><td>.</td></tr></table></p><p>Starting with the seed integer 2, successive iterations of the program produce the sequence:<br/>15, 825, 725, 1925, 2275, 425, ..., 68, <b>4</b>, 30, ..., 136, <b>8</b>, 60, ..., 544, <b>32</b>, 240, ...</p><p>The powers of 2 that appear in this sequence are 2<sup>2</sup>, 2<sup>3</sup>, 2<sup>5</sup>, ...<br/>It can be shown that <i>all</i> the powers of 2 in this sequence have prime exponents and that <i>all</i> the primes appear as exponents of powers of 2, in proper order!</p><p>If someone uses the above Fractran program to solve Project Euler Problem 7 (find the 10001<sup>st</sup> prime), how many iterations would be needed until the program produces 2<sup>10001st prime</sup> ?</p>",
    "folder": "an-amazing-prime-generating-au",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "An amazing Prime-generating Automaton"
});

db.questions.insert({
    "details": "<p>Given is the arithmetic-geometric sequence u(<var>k</var>) = (900-3<var>k</var>)<var>r</var><sup><var>k</var>-1</sup>.<br/>Let s(<var>n</var>) = \u03a3<sub><var>k</var>=1...<var>n</var></sub>u(<var>k</var>).</p><p>Find the value of <var>r</var> for which s(5000) = -600,000,000,000.</p><p>Give your answer rounded to 12 places behind the decimal point.</p>",
    "folder": "an-arithmetic-geometric-sequen",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "An Arithmetic Geometric sequence"
});

db.questions.insert({
    "details": "<p>Consider the number 6. The divisors of 6 are: 1,2,3 and 6.<br/>Every number from 1 up to and including 6 can be written as a sum of distinct divisors of 6:<br/>1=1, 2=2, 3=1+2, 4=1+3, 5=2+3, 6=6.<br/>A number <var>n</var> is called a practical number if every number from 1 up to and including <var>n</var> can be expressed as a sum of distinct divisors of <var>n</var>.</p><p>A pair of consecutive prime numbers with a difference of six is called a sexy pair (since \"sex\" is the Latin word for \"six\"). The first sexy pair is (23, 29).</p><p>We may occasionally find a triple-pair, which means three consecutive sexy prime pairs, such that the second member of each pair is the first member of the next pair.</p><p>We shall call a number <var>n</var> such that :<ul><li>(<var>n</var>-9, <var>n</var>-3), (<var>n</var>-3,<var>n</var>+3), (<var>n</var>+3, <var>n</var>+9) form a triple-pair, and <li>the numbers <var>n</var>-8, <var>n</var>-4, <var>n</var>, <var>n</var>+4 and <var>n</var>+8 are all practical,</li></li></ul> an engineers\u2019 paradise.</p><p>Find the sum of the first four engineers\u2019 paradises.</p>",
    "folder": "an-engineers-dream-come-true",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "An engineers' dream come true"
});

db.questions.insert({
    "details": "<p>For any prime <var>p</var> the number N(<var>p</var>,<var>q</var>) is defined byN(<var>p</var>,<var>q</var>) = <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><sub><var>n</var>=0 to <var>q</var></sub> T<sub><var>n</var></sub>*<var>p</var><sup><var>n</var></sup><br/> with T<sub><var>n</var></sub> generated by the following random number generator:</p><p>S<sub>0</sub> = 290797<br/>S<sub><var>n</var>+1</sub> = S<sub><var>n</var></sub><sup>2</sup> mod 50515093<br/>T<sub><var>n</var></sub> = S<sub><var>n</var></sub> mod <var>p</var></p><p>Let Nfac(<var>p</var>,<var>q</var>) be the factorial of N(<var>p</var>,<var>q</var>).<br/>Let NF(<var>p</var>,<var>q</var>) be the number of factors <var>p</var> in Nfac(<var>p</var>,<var>q</var>).</p><p>You are given that NF(3,10000) mod 3<sup>20</sup>=624955285.</p><p>Find NF(61,10<sup>7</sup>) mod 61<sup>10</sup></p>",
    "folder": "an-enormous-factorial",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "An enormous factorial"
});

db.questions.insert({
    "details": "<p>By replacing each of the letters in the word CARE with 1, 2, 9, and 6 respectively, we form a square number: 1296 = 36<sup>2</sup>. What is remarkable is that, by using the same digital substitutions, the anagram, RACE, also forms a square number: 9216 = 96<sup>2</sup>. We shall call CARE (and RACE) a square anagram word pair and specify further that leading zeroes are not permitted, neither may a different letter have the same digital value as another letter.</p><p>Using <a href=\"project/words.txt\">words.txt</a> (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, find all the square anagram word pairs (a palindromic word is NOT considered to be an anagram of itself).</p><p>What is the largest square number formed by any member of such a pair?</p><p class=\"info\">NOTE: All anagrams formed must be contained in the given text file.</p>",
    "folder": "anagramic-squares",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Anagramic squares"
});

db.questions.insert({
    "details": "<p>Given is an integer sided triangle <var>ABC</var> with <var>BC</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>AC</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>AB</var>.<br/><var>k</var> is the angular bisector of angle <var>ACB</var>.<br/> <var>m</var> is the tangent at <var>C</var> to the circumscribed circle of <var>ABC</var>.<br/> <var>n</var> is a line parallel to <var>m</var> through <var>B</var>.<br/>The intersection of <var>n</var> and <var>k</var> is called <var>E</var>.</p><div align=\"center\"><img src=\"project/images/p296_bisector.gif\"/></div><p>How many triangles <var>ABC</var> with a perimeter not exceeding 100 000 exist such that <var>BE</var> has integral length?</p>",
    "folder": "angular-bisector-and-tangent",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Angular Bisector and Tangent"
});

db.questions.insert({
    "details": "<span style=\"font-size:11pt;\"><p>Given is an integer sided triangle ABC with sides a <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> b <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> c. (AB = c, BC = a and AC = b).<br/>The angular bisectors of the triangle intersect the sides at points E, F and G (see picture below).</p><div align=\"center\"><img src=\"project/images/p_257_bisector.gif\"/><br/></div><p>The segments EF, EG and FG partition the triangle ABC into four smaller triangles: AEG, BFE, CGF and EFG.<br/>It can be proven that for each of these four triangles the ratio area(ABC)/area(subtriangle) is rational.<br/>However, there exist triangles for which some or all of these ratios are integral.</p><p>How many triangles ABC with perimeter<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>100,000,000 exist so that the ratio area(ABC)/area(AEG) is integral?</p></span>",
    "folder": "angular-bisectors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Angular Bisectors"
});

db.questions.insert({
    "details": "<p>A laborious ant walks randomly on a 5x5 grid. The walk starts from the central square. At each step, the ant moves to an adjacent square at random, without leaving the grid; thus there are 2, 3 or 4 possible moves at each step depending on the ant's position.</p><p>At the start of the walk, a seed is placed on each square of the lower row. When the ant isn't carrying a seed and reaches a square of the lower row containing a seed, it will start to carry the seed. The ant will drop the seed on the first empty square of the upper row it eventually reaches.</p><p>What's the expected number of steps until all seeds have been dropped in the top row? <br/>Give your answer rounded to 6 decimal places.</p>",
    "folder": "ant-and-seeds",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Ant and seeds"
});

db.questions.insert({
    "details": "<p>By using each of the digits from the set,{1, 2, 3, 4}, exactly once, and making use of the four arithmetic operations (+, <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>, *, /) and brackets/parentheses, it is possible to form different positive integer targets.</p><p>For example,</p><p style=\"margin-left:50px;font-family:courier new;\">8 = (4 * (1 + 3)) / 2<br/>14 = 4 * (3 + 1 / 2)<br/>19 = 4 * (2 + 3) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1<br/>36 = 3 * 4 * (2 + 1)</p><p>Note that concatenations of the digits, like 12 + 34, are not allowed.</p><p>Using the set,{1, 2, 3, 4}, it is possible to obtain thirty-one different target numbers of which 36 is the maximum, and each of the numbers 1 to 28 can be obtained before encountering the first non-expressible number.</p><p>Find the set of four distinct digits, <i>a</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>b</i> &lt; <i>c</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>d</i>, for which the longest set of consecutive positive integers, 1 to <i>n</i>, can be obtained, giving your answer as a string: <i>abcd</i>.</p>",
    "folder": "arithmetic-expressions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Arithmetic expressions"
});

db.questions.insert({
    "details": "<p>If a box contains twenty-one coloured discs, composed of fifteen blue discs and six red discs, and two discs were taken at random, it can be seen that the probability of taking two blue discs, P(BB) = (15/21)<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>(14/20) = 1/2.</p><p>The next such arrangement, for which there is exactly 50% chance of taking two blue discs at random, is a box containing eighty-five blue discs and thirty-five red discs.</p><p>By finding the first arrangement to contain over 10<sup>12</sup> = 1,000,000,000,000 discs in total, determine the number of blue discs that the box would contain.</p>",
    "folder": "arranged-probability",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Arranged probability"
});

db.questions.insert({
    "details": "<p>In a standard 52 card deck of playing cards, a set of 4 cards is a <b>Badugi</b> if it contains 4 cards with no pairs and no two cards of the same suit.</p><p>Let f(<var>n</var>) be the number of ways to choose <var>n</var> cards with a 4 card subset that is a Badugi.  For example, there are 2598960 ways to choose five cards from a standard 52 card deck, of which 514800 contain a 4 card subset that is a Badugi, so f(5) = 514800.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>f(<var>n</var>)  for 4 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 13.</p>",
    "folder": "badugi",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Badugi\r\n"
});

db.questions.insert({
    "details": "<p>A positive integer with <var>k</var> (decimal) digits is called balanced if its first <img alt=\"\u2308\" border=\"0\" height=\"16\" src=\"images/symbol_lceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/><sup><var>k</var></sup>/<sub>2</sub><img alt=\"\u2309\" border=\"0\" height=\"16\" src=\"images/symbol_rceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/> digits sum to the same value as its last <img alt=\"\u2308\" border=\"0\" height=\"16\" src=\"images/symbol_lceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/><sup><var>k</var></sup>/<sub>2</sub><img alt=\"\u2309\" border=\"0\" height=\"16\" src=\"images/symbol_rceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/> digits, where <img alt=\"\u2308\" border=\"0\" height=\"16\" src=\"images/symbol_lceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/><var>x</var><img alt=\"\u2309\" border=\"0\" height=\"16\" src=\"images/symbol_rceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/>, pronounced <span style=\"font-style: italic\">ceiling</span> of <var>x</var>, is the smallest integer <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x</var>, thus <img alt=\"\u2308\" border=\"0\" height=\"16\" src=\"images/symbol_lceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/>\u03c0<img alt=\"\u2309\" border=\"0\" height=\"16\" src=\"images/symbol_rceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/> = 4 and <img alt=\"\u2308\" border=\"0\" height=\"16\" src=\"images/symbol_lceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/>5<img alt=\"\u2309\" border=\"0\" height=\"16\" src=\"images/symbol_rceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/> = 5.</p><p>So, for example, all palindromes are balanced, as is 13722.</p><p>Let T(<var>n</var>) be the sum of all balanced numbers less than 10<sup><var>n</var></sup>. <br/>Thus: T(1) = 45, T(2) = 540 and T(5) = 334795890. </p><p>Find T(47) mod 3<sup>15</sup></p>",
    "folder": "balanced-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Balanced Numbers"
});

db.questions.insert({
    "details": "<p>Let us define a <i>balanced sculpture</i> of order <var>n</var> as follows:<ul><li>A <dfn title=\"An arrangement of identical squares connected through shared edges; holes are allowed.\">polyomino</dfn> made up of <var>n</var>+1 tiles known as the <i>blocks</i> (<var>n</var> tiles)<br/> and the <i>plinth</i> (remaining tile);</li><li>the plinth has its centre at position (<var>x</var>\u2009=\u20090, <var>y</var>\u2009=\u20090);</li><li>the blocks have <var>y</var>-coordinates greater than zero (so the plinth is the unique lowest tile);</li><li>the centre of mass of all the blocks, combined, has <var>x</var>-coordinate equal to zero.</li></ul></p><p>When counting the sculptures, any arrangements which are simply reflections about the <var>y</var>-axis, are <u>not</u> counted as distinct. For example, the 18 balanced sculptures of order 6 are shown below; note that each pair of mirror images (about the <var>y</var>-axis) is counted as one sculpture:</p><div align=\"center\"><img src=\"project/images/p_275_sculptures2.gif\"/></div><p>There are 964 balanced sculptures of order 10 and 360505 of order 15.<br/>How many balanced sculptures are there of order 18?</p>",
    "folder": "balanced-sculptures",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Balanced Sculptures"
});

db.questions.insert({
    "details": "<p>Let <var>x</var> be a real number.<br/>A <i>best approximation</i> to <var>x</var> for the <i>denominator bound</i> <var>d</var> is a rational number <var>r</var>/<var>s</var> <i>in reduced form</i>, with <var>s</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>d</var>, such that any rational number which is closer to <var>x</var> than <var>r</var>/<var>s</var> has a denominator larger than <var>d</var>:</p><div style=\"text-align:center;\">|<var>p</var>/<var>q</var>-<var>x</var>| <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> |<var>r</var>/<var>s</var>-<var>x</var>| <img alt=\"\u21d2\" border=\"0\" height=\"11\" src=\"images/symbol_implies.gif\" style=\"vertical-align:middle;\" width=\"15\"/> <var>q</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>d</var></div><p>For example, the best approximation to <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>13 for the denominator bound 20 is 18/5 and the best approximation to <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>13 for the denominator bound 30 is 101/28.</p><p>Find the sum of all denominators of the best approximations to <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/><var>n</var> for the denominator bound 10<sup>12</sup>, where <var>n</var> is not a perfect square and 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100000.</p>",
    "folder": "best-approximations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Best Approximations"
});

db.questions.insert({
    "details": "<p>ABCD is a convex, integer sided quadrilateral with 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> AB <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> BC <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> CD <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> AD.<br/>BD has integer length. O is the midpoint of BD. AO has integer length.<br/>We'll call ABCD a <i>biclinic integral quadrilateral</i> if AO = CO <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> BO = DO.<br/></p><p>For example, the following quadrilateral is a biclinic integral quadrilateral:<br/>AB = 19, BC = 29, CD = 37, AD = 43, BD = 48 and AO = CO = 23.</p><div align=\"center\"><img src=\"project/images/p_311_biclinic.gif\"/></div><p>Let B(<var>N</var>) be the number of distinct biclinic integral quadrilaterals ABCD that satisfy AB<sup>2</sup>+BC<sup>2</sup>+CD<sup>2</sup>+AD<sup>2</sup> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>We can verify that B(10 000) = 49 and B(1 000 000) = 38239.</p><p>Find B(10 000 000 000).</p>",
    "folder": "biclinic-integral-quadrilatera",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Biclinic Integral Quadrilaterals"
});

db.questions.insert({
    "details": "<p>You are given a unique investment opportunity.</p><p>Starting with \u00a31 of capital, you can choose a fixed proportion, <var>f</var>, of your capital to bet on a fair coin toss repeatedly for 1000 tosses.</p><p>Your return is double your bet for heads and you lose your bet for tails.</p><p>For example, if <var>f</var>\u2009=\u20091/4,  for the first toss you bet \u00a30.25, and if heads comes up you win \u00a30.5 and so then have \u00a31.5. You then bet \u00a30.375 and if the second toss is tails, you have \u00a31.125.</p><p>Choosing <var>f</var> to maximize your chances of having at least \u00a31,000,000,000 after 1,000 flips, what is the chance that you become a billionaire?</p><p>All computations are assumed to be exact (no rounding), but give your answer rounded to 12 digits behind the decimal point in the form 0.abcdefghijkl.</p>",
    "folder": "billionaire",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Billionaire"
});

db.questions.insert({
    "details": "<p>2<sup>N</sup> binary digits can be placed in a circle so that all the N-digit clockwise subsequences are distinct.</p><p>For N=3, two such circular arrangements are possible, ignoring rotations:</p><div align=\"center\"><img src=\"project/images/p_265_BinaryCircles.gif\"/></div><p>For the first arrangement, the 3-digit subsequences, in clockwise order, are:<br/> 000, 001, 010, 101, 011, 111, 110 and 100.</p><p>Each circular arrangement can be encoded as a number by concatenating the binary digits starting with the subsequence of all zeros as the most significant bits and proceeding clockwise. The two arrangements for N=3 are thus represented as 23 and 29:<div align=\"center\">00010111\u2009<sub>2</sub> = 23</div><div align=\"center\">00011101\u2009<sub>2</sub> = 29</div></p><p>Calling S(N) the sum of the unique numeric representations, we can see that S(3) = 23 + 29 = 52.</p><p>Find S(5).</p>",
    "folder": "binary-circles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Binary Circles"
});

db.questions.insert({
    "details": "<p>Let T(<var>m</var>, <var>n</var>) be the number of the binomial coefficients <sup><var>i</var></sup>C<sub><var>n</var></sub> that are divisible by 10 for <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>m</var>(<var>i</var>, <var>m</var> and <var>n</var> are positive integers).<br/>You are given that T(10<sup>9</sup>, 10<sup>7</sup>-10) = 989697000.</p><p>Find T(10<sup>18</sup>, 10<sup>12</sup>-10).</p>",
    "folder": "binomial-coefficients-divisibl",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Binomial coefficients divisible by 10"
});

db.questions.insert({
    "details": "<p>Let <var>y</var><sub>0</sub>, <var>y</var><sub>1</sub>, <var>y</var><sub>2</sub>,... be a sequence of random unsigned 32 bit integers<br/>(i.e. 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>y<sub>i</sub></var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2<sup>32</sup>, every value equally likely).</p><p>For the sequence <var>x<sub>i</sub></var> the following recursion is given:<br/><ul><li><var>x</var><sub>0</sub> = 0 and</li><li><var>x<sub>i</sub></var> = <var>x</var><sub><var>i</var>-<i>1</i></sub> <b>|</b> <var>y</var><sub><var>i</var>-<i>1</i></sub>, for <var>i</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0. ( <b>|</b> is the bitwise-OR operator)</li></ul></p><p>It can be seen that eventually there will be an index N such that <var>x<sub>i</sub></var> = 2<sup>32</sup> -1 (a bit-pattern of all ones) for all <var>i</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N.</p><p>Find the expected value of N. <br/>Give your answer rounded to 10 digits after the decimal point.</p>",
    "folder": "bitwise-or-operations-on-rando",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Bitwise-OR operations on random integers"
});

db.questions.insert({
    "details": "<p>Each one of the 25 sheep in a flock must be tested for a rare virus, known to affect 2% of the sheep population.An accurate and extremely sensitive PCR test exists for blood samples, producing a clear positive / negative result, but it is very time-consuming and expensive.</p><p>Because of the high cost, the vet-in-charge suggests that instead of performing 25 separate tests, the following procedure can be used instead:<br/><br/>The sheep are split into 5 groups of 5 sheep in each group. For each group, the 5 samples are mixed together and a single test is performed. Then,<ul><li>If the result is negative, all the sheep in that group are deemed to be virus-free.</li><li>If the result is positive, 5 additional tests will be performed (a separate test for each animal) to determine the affected individual(s).</li></ul></p><p>Since the probability of infection for any specific animal is only 0.02, the first test (on the pooled samples) for each group will be:<ul><li>Negative (and no more tests needed) with probability 0.98<sup>5</sup> = 0.9039207968.</li><li>Positive (5 additional tests needed) with probability 1 - 0.9039207968 = 0.0960792032.</li></ul></p><p>Thus, the expected number of tests for each group is 1 + 0.0960792032 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5 = 1.480396016.<br/>Consequently, all 5 groups can be screened using an average of only 1.480396016 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5 = <b>7.40198008</b> tests, which represents a huge saving of more than 70% !</p><p>Although the scheme we have just described seems to be very efficient, it can still be improved considerably (always assuming that the test is sufficiently sensitive and that there are no adverse effects caused by mixing different samples). E.g.:<ul><li>We may start by running a test on a mixture of all the 25 samples. It can be verified that in about 60.35% of the cases this test will be negative, thus no more tests will be needed. Further testing will only be required for the remaining 39.65% of the cases.</li><li>If we know that at least one animal in a group of 5 is infected and the first 4 individual tests come out negative, there is no need to run a test on the fifth animal (we know that it must be infected).</li><li>We can try a different number of groups / different number of animals in each group, adjusting those numbers at each level so that the total expected number of tests will be minimised.</li></ul><p>To simplify the very wide range of possibilities, there is one restriction we place when devising the most cost-efficient testing scheme: whenever we start with a mixed sample, all the sheep contributing to that sample must be fully screened (i.e. a verdict of infected / virus-free must be reached for all of them) before we start examining any other animals.</p>For the current example, it turns out that the most cost-efficient testing scheme (we'll call it the <i>optimal strategy</i>) requires an average of just <b>4.155452</b> tests!</p><p>Using the optimal strategy, let T(<var>s</var>,<var>p</var>) represent the average number of tests needed to screen a flock of <var>s</var> sheep for a virus having probability <var>p</var> to be present in any individual.<br/>Thus, rounded to six decimal places, T(25, 0.02) = 4.155452 and T(25, 0.10) = 12.702124.</p><p>Find \u03a3T(10000, p) for p=0.01, 0.02, 0.03, ... 0.50.<br/>Give your answer rounded to six decimal places.</p>",
    "folder": "blood-tests",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Blood tests"
});

db.questions.insert({
    "details": "<p>Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.</p><p>Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.</p><p>We shall call a positive integer that is neither increasing nor decreasing a \"bouncy\" number; for example, 155349.</p><p>Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.</p><p>Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.</p><p>Find the least number for which the proportion of bouncy numbers is exactly 99%.</p>",
    "folder": "bouncy-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Bouncy numbers"
});

db.questions.insert({
    "details": "<p>Let <var>x</var><sub>1</sub>, <var>x</var><sub>2</sub>,..., <var>x<sub>n</sub></var> be a sequence of length <var>n</var> such that:<ul><li><var>x</var><sub>1</sub> = 2</li><li>for all 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> : <var>x</var><sub><var>i</var>-<i>1</i></sub> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x<sub>i</sub></var></li><li>for all <var>i</var> and <var>j</var> with 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var>, <var>j</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> : (<var>x<sub>i</sub></var>)<var><sup> j</sup></var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> (<var>x<sub>j</sub></var> + 1)<var><sup>i</sup></var></li></ul></p><p>There are only five such sequences of length 2, namely{2,4},{2,5},{2,6},{2,7} and{2,8}.<br/>There are 293 such sequences of length 5; three examples are given below:<br/{2,5,11,25,55},{2,6,14,36,88},{2,8,22,64,181}.</p><p>Let <var>t</var>(<var>n</var>) denote the number of such sequences of length <var>n</var>.<br/>You are given that <var>t</var>(10) = 86195 and <var>t</var>(20) = 5227991891.</p><p>Find <var>t</var>(10<sup>10</sup>) and give your answer modulo 10<sup>9</sup>.</p>",
    "folder": "bounded-sequences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Bounded Sequences"
});

db.questions.insert({
    "details": "<p>Consider an infinite row of boxes. Some of the boxes contain a ball. For example, an initial configuration of 2 consecutive occupied boxes followed by 2 empty boxes, 2 occupied boxes, 1 empty box, and 2 occupied boxes can be denoted by the sequence (2, 2, 2, 1, 2), in which the number of consecutive occupied and empty boxes appear alternately.</p><p>A turn consists of moving each ball exactly once according to the following rule: Transfer the leftmost ball which has not been moved to the nearest empty box to its right.</p><p>After one turn the sequence (2, 2, 2, 1, 2) becomes (2, 2, 1, 2, 3) as can be seen below; note that we begin the new sequence starting at the first occupied box.</p><div align=\"center\"><img src=\"project/images/p_426_baxball1.gif\"/></div><p>A system like this is called a <b>Box-Ball System</b> or <b>BBS</b> for short.</p><p>It can be shown that after a sufficient number of turns, the system evolves to a state where the consecutive numbers of occupied boxes is invariant. In the example below, the consecutive numbers of <b>occupied boxes</b> evolves to [1, 2, 3]; we shall call this the final state.</p><div align=\"center\"><img src=\"project/images/p_426_baxball2.gif\"/></div><p>We define the sequence{<var>t</var><sub><var>i</var></sub>}:<br/><ul><li><var>s</var><sub>0</sub> = 290797<li><var>s</var><sub><var>k</var>+1</sub> = <var>s</var><sub><var>k</var></sub><sup>2</sup> mod 50515093<li><var>t</var><sub><var>k</var></sub> = (<var>s</var><sub><var>k</var></sub> mod 64) + 1</li></li></li></ul></p><p>Starting from the initial configuration (<var>t</var><sub>0</sub>, <var>t</var><sub>1</sub>, \u2026, <var>t</var><sub>10</sub>), the final state becomes [1, 3, 10, 24, 51, 75].<br/>Starting from the initial configuration (<var>t</var><sub>0</sub>, <var>t</var><sub>1</sub>, \u2026, <var>t</var><sub>10 000 000</sub>), find the final state.<br/>Give as your answer the sum of the squares of the elements of the final state. For example, if the final state is [1, 2, 3] then 14 ( = 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup>) is your answer.</p>",
    "folder": "box-ball-system",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Box-ball system"
});

db.questions.insert({
    "details": "<p><b>Bozo sort</b>, not to be confused with the slightly less efficient <b>bogo sort</b>, consists out of checking if the input sequence is sorted and if not swapping randomly two elements. This is repeated until eventually the sequence is sorted.</p><p>If we consider all permutations of the first 4 natural numbers as input the expectation value of the number of swaps, averaged over all 4! input sequences is 24.75.<br/>The already sorted sequence takes 0 steps. </p><p>In this problem we consider the following variant on bozo sort.<br/>If the sequence is not in order we pick three elements at random and shuffle these three elements randomly.<br/>All 3!=6 permutations of those three elements are equally likely. <br/>The already sorted sequence will take 0 steps.<br/>If we consider all permutations of the first 4 natural numbers as input the expectation value of the number of shuffles, averaged over all 4! input sequences is 27.5. <br/>Consider as input sequences the permutations of the first 11 natural numbers.<br/>Averaged over all 11! input sequences, what is the expected number of shuffles this sorting algorithm will perform?</p><p>Give your answer rounded to the nearest integer.</p>",
    "folder": "bozo-sort",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "bozo sort"
});

db.questions.insert({
    "details": "<p>Let <var>f</var>(<var>n</var>) represent the number of ways one can fill a 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>n</var> tower with blocks of 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1. <br/>You're allowed to rotate the blocks in any way you like; however, rotations, reflections etc of the tower itself are counted as distinct.</p><p>For example (with <var>q</var> = 100000007) :<br/><var>f</var>(2) = 229,<br/><var>f</var>(4) = 117805,<br/><var>f</var>(10) mod <var>q</var> = 96149360,<br/><var>f</var>(10<sup>3</sup>) mod <var>q</var> = 24806056,<br/><var>f</var>(10<sup>6</sup>) mod <var>q</var> = 30808124.</p><p>Find <var>f</var>(10<sup>10000</sup>) mod 100000007.</p>",
    "folder": "building-a-tower",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Building a tower"
});

db.questions.insert({
    "details": "<p>A triplet of positive integers (<var>a</var>,<var>b</var>,<var>c</var>) is called a Cardano Triplet if it satisfies the condition:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_251_cardano.gif\"/></div><p>For example, (2,1,5) is a Cardano Triplet.</p><p>There exist 149 Cardano Triplets for which <var>a</var>+<var>b</var>+<var>c</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000.</p><p>Find how many Cardano Triplets exist such that <var>a</var>+<var>b</var>+<var>c</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 110,000,000. </p>",
    "folder": "cardano-triplets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cardano Triplets"
});

db.questions.insert({
    "details": "<p>An irrational decimal fraction is created by concatenating the positive integers:</p><p style=\"text-align:center;\">0.12345678910<span style=\"color:#dd0000;font-size:14pt;\">1</span>112131415161718192021...</p><p>It can be seen that the 12<sup>th</sup> digit of the fractional part is 1.</p><p>If <i>d</i><sub><i>n</i></sub> represents the <i>n</i><sup>th</sup> digit of the fractional part, find the value of the following expression.</p><p style=\"text-align:center;\"><i>d</i><sub>1</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>d</i><sub>10</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>d</i><sub>100</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>d</i><sub>1000</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>d</i><sub>10000</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>d</i><sub>100000</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>d</i><sub>1000000</sub></p>",
    "folder": "champernownes-constant",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Champernowne's constant"
});

db.questions.insert({
    "details": "<p><var>k</var> defects are randomly distributed amongst <var>n</var> integrated-circuit chips produced by a factory (any number of defects may be found on a chip and each defect is independent of the other defects).</p><p>Let p(<var>k,n</var>) represent the probability that there is a chip with at least 3 defects.<br/>For instance p(3,7) <img alt=\"\u2248\" border=\"0\" height=\"9\" src=\"images/symbol_asymp.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 0.0204081633.</p><p>Find p(20 000, 1 000 000) and give your answer rounded to 10 decimal places in the form 0.abcdefghij</p>",
    "folder": "chip-defects",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Chip Defects"
});

db.questions.insert({
    "details": "<p>Let C be the circle with radius <var>r</var>, <var>x</var><sup>2</sup> + <var>y</var><sup>2</sup> = <var>r</var><sup>2</sup>. We choose two points P(<var>a</var>, <var>b</var>) and Q(-<var>a</var>, <var>c</var>) so that the line passing through P and Q is tangent to C.</p><p>For example, the quadruplet (<var>r</var>, <var>a</var>, <var>b</var>, <var>c</var>) = (2, 6, 2, -7) satisfies this property.</p><p>Let F(<var>R</var>, <var>X</var>) be the number of the integer quadruplets (<var>r</var>, <var>a</var>, <var>b</var>, <var>c</var>) with this property, and with 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>r</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>R</var> and 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>X</var>.</p><p>We can verify that F(1, 5) = 10, F(2, 10) = 52 and F(10, 100) = 3384.<br>Find F(10<sup>8</sup>, 10<sup>9</sup>) + F(10<sup>9</sup>, 10<sup>8</sup>).</br></p>",
    "folder": "circle-and-tangent-line",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Circle and tangent line"
});

db.questions.insert({
    "details": "<p>A <var>k</var>-input <i>binary truth table</i> is a map from <var>k</var> input bits(binary digits, 0 [false] or 1 [true]) to 1 output bit. For example, the 2-input binary truth tables for the logical AND and XOR functions are:</p><div style=\"text-align:center; margin-left:150px; margin-right:150px;\"><table align=\"left\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td align=\"center\" width=\"30\"><var>x</var></td><td align=\"center\" width=\"30\"><var>y</var></td><td><var>x</var> AND <var>y</var></td></tr><tr><td align=\"center\">0</td><td align=\"center\">0</td><td align=\"center\">0</td></tr><tr><td align=\"center\">0</td><td align=\"center\">1</td><td align=\"center\">0</td></tr><tr><td align=\"center\">1</td><td align=\"center\">0</td><td align=\"center\">0</td></tr><tr><td align=\"center\">1</td><td align=\"center\">1</td><td align=\"center\">1</td></tr></table><table align=\"right\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td align=\"center\" width=\"30\"><var>x</var></td><td align=\"center\" width=\"30\"><var>y</var></td><td><var>x</var> XOR <var>y</var></td></tr><tr><td align=\"center\">0</td><td align=\"center\">0</td><td align=\"center\">0</td></tr><tr><td align=\"center\">0</td><td align=\"center\">1</td><td align=\"center\">1</td></tr><tr><td align=\"center\">1</td><td align=\"center\">0</td><td align=\"center\">1</td></tr><tr><td align=\"center\">1</td><td align=\"center\">1</td><td align=\"center\">0</td></tr></table></div><br clear=\"all\"/><p>How many 6-input binary truth tables, \u03c4, satisfy the formula</p><div style=\"text-align:center;\">\u03c4(<var>a</var>, <var>b</var>, <var>c</var>, <var>d</var>, <var>e</var>, <var>f</var>) AND \u03c4(<var>b</var>, <var>c</var>, <var>d</var>, <var>e</var>, <var>f</var>, <var>a</var> XOR (<var>b</var> AND <var>c</var>)) = 0</div><br/><p>for all 6-bit inputs (<var>a</var>, <var>b</var>, <var>c</var>, <var>d</var>, <var>e</var>, <var>f</var>)?</p>",
    "folder": "circular-logic",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Circular Logic"
});

db.questions.insert({
    "details": "<p>The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.</p><p>There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.</p><p>How many circular primes are there below one million?</p>",
    "folder": "circular-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Circular primes"
});

db.questions.insert({
    "details": "<p>Every triangle has a circumscribed circle that goes through the three vertices.Consider all integer sided triangles for which the radius of the circumscribed circle is integral as well.</p><p>Let S(<var>n</var>) be the sum of the radii of the circumscribed circles of all such triangles for which the radius does not exceed <var>n</var>.</p><p>S(100)=4950 and S(1200)=1653605.</p><p>Find S(10<sup>7</sup>).</p>",
    "folder": "circumscribed-circles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Circumscribed Circles"
});

db.questions.insert({
    "details": "<p>The <i>n</i><sup>th</sup> term of the sequence of triangle numbers is given by, <i>t<sub>n</sub></i> = \u00bd<i>n</i>(<i>n</i>+1); so the first ten triangle numbers are:</p><p style=\"text-align:center;\">1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...</p><p>By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = <i>t</i><sub>10</sub>. If the word value is a triangle number then we shall call the word a triangle word.</p><p>Using <a href=\"project/words.txt\">words.txt</a> (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?</p>",
    "folder": "coded-triangle-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Coded triangle numbers"
});

db.questions.insert({
    "details": "<p>Let p(<i>n</i>) represent the number of different ways in which <i>n</i> coins can be separated into piles. For example, five coins can separated into piles in exactly seven different ways, so p(5)=7.</p><div style=\"text-align:center;\"><table cellpadding=\"10\" cellspacing=\"0\"><tr><td>OOOOO</td></tr><tr><td>OOOO\u00a0 \u00a0O</td></tr><tr><td>OOO\u00a0 \u00a0OO</td></tr><tr><td>OOO\u00a0 \u00a0O\u00a0 \u00a0O</td></tr><tr><td>OO\u00a0 \u00a0OO\u00a0 \u00a0O</td></tr><tr><td>OO\u00a0 \u00a0O\u00a0 \u00a0O\u00a0 \u00a0O</td></tr><tr><td>O\u00a0 \u00a0O\u00a0 \u00a0O\u00a0 \u00a0O\u00a0 \u00a0O</td></tr></table></div><p>Find the least value of <i>n</i> for which p(<i>n</i>) is divisible by one million.</p>",
    "folder": "coin-partitions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Coin partitions"
});

db.questions.insert({
    "details": "<p>In England the currency is made up of pound, \u00a3, and pence, p, and there are eight coins in general circulation:</p><blockquote>1p, 2p, 5p, 10p, 20p, 50p, \u00a31 (100p) and \u00a32 (200p).</blockquote><p>It is possible to make \u00a32 in the following way:</p><blockquote>1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>\u00a31 + 1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>50p + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>20p + 1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>5p + 1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2p + 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1p</blockquote><p>How many different ways can \u00a32 be made using any number of coins?</p>",
    "folder": "coin-sums",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Coin sums"
});

db.questions.insert({
    "details": "<p>Consider graphs built with the units A: <img alt=\"\" src=\"project/images/p_194_GraphA.png\" style=\"vertical-align:middle;\"/>and B: <img alt=\"\" src=\"project/images/p_194_GraphB.png\" style=\"vertical-align:middle;\"/>, where the units are glued alongthe vertical edges as in the graph <img alt=\"\" src=\"project/images/p_194_Fig.png\" style=\"vertical-align:middle;\"/>.</p><p>A configuration of type (<var>a</var>,<var>b</var>,<var>c</var>) is a graph thus built of <var>a</var> units A and <var>b</var> units B, where the graph's vertices are coloured using up to <var>c</var> colours, so that no two adjacent vertices have the same colour.<br/>The compound graph above is an example of a configuration of type (2,2,6), in fact of type (2,2,<var>c</var>) for all <var>c</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4.</p><p>Let N(<var>a</var>,<var>b</var>,<var>c</var>) be the number of configurations of type (<var>a</var>,<var>b</var>,<var>c</var>).<br/>For example, N(1,0,3) = 24, N(0,2,4) = 92928 and N(2,2,3) = 20736.</p><p>Find the last 8 digits of N(25,75,1984).</p>",
    "folder": "coloured-configurations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Coloured Configurations"
});

db.questions.insert({
    "details": "<p>There are exactly ten ways of selecting three from five, 12345:</p><p style=\"text-align:center;\">123, 124, 125, 134, 135, 145, 234, 235, 245, and 345</p><p>In combinatorics, we use the notation, <sup>5</sup>C<sub>3</sub> = 10.</p><p>In general,</p><div style=\"text-align:center;\"><table><tr><td><sup><var>n</var></sup>C<sub><var>r</var></sub> = </td><td><div style=\"text-align:center;\"><var>n</var>!<br/><span style=\"border-top:1px solid #000;\"><var>r</var>!(<var>n<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>r</var>)!</span></div></td><td>,where <var>r</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>, <var>n</var>! = <var>n</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>(<var>n</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>...<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1, and 0! = 1.</td></tr></table></div><p>It is not until <var>n</var> = 23, that a value exceeds one-million: <sup>23</sup>C<sub>10</sub> = 1144066.</p><p>How many, not necessarily distinct, values of \u00a0<sup><var>n</var></sup>C<sub><var>r</var></sub>, for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100, are greater than one-million?</p>",
    "folder": "combinatoric-selections",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Combinatoric selections"
});

db.questions.insert({
    "details": "<p>An <span style=\"font-style: italic\">axis-aligned cuboid</span>, specified by parameters{ (x<sub>0</sub>,y<sub>0</sub>,z<sub>0</sub>), (dx,dy,dz) }, consists of all points (X,Y,Z) such that x<sub>0</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> X <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> x<sub>0</sub>+dx, y<sub>0</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> Y <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> y<sub>0</sub>+dy and z<sub>0</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> Z <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> z<sub>0</sub>+dz.  The volume of the cuboid is the product, dx <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> dy <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> dz.  The <span style=\"font-style: italic\">combined volume</span> of a collection of cuboids is the volume of their union and will be less than the sum of the individual volumes if any cuboids overlap.</p><p>Let C<sub>1</sub>,...,C<sub>50000</sub> be a collection of 50000 axis-aligned cuboids such that C<sub><var>n</var></sub> has parameters</p><p style=\"margin-left:40px;\">x<sub>0</sub> = S<sub>6<var>n</var>-5</sub> modulo 10000<br/>y<sub>0</sub> = S<sub>6<var>n</var>-4</sub> modulo 10000<br/>z<sub>0</sub> = S<sub>6<var>n</var>-3</sub> modulo 10000<br/>dx = 1 + (S<sub>6<var>n</var>-2</sub> modulo 399)<br/>dy = 1 + (S<sub>6<var>n</var>-1</sub> modulo 399)<br/>dz = 1 + (S<sub>6<var>n</var></sub> modulo 399)</p><p>where S<sub>1</sub>,...,S<sub>300000</sub> come from the \"Lagged Fibonacci Generator\":</p><p style=\"margin-left:40px;\">For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 55, S<sub><var>k</var></sub> = [100003 - 200003<var>k</var> + 300007<var>k</var><sup>3</sup>] \u00a0 (modulo 1000000)<br/>For 56 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var>, S<sub><var>k</var></sub> = [S<sub><var>k</var>-24</sub> + S<sub><var>k</var>-55</sub>] \u00a0 (modulo 1000000)</p><p>Thus, C<sub>1</sub> has parameters{(7,53,183),(94,369,56)}, C<sub>2</sub> has parameters{(2383,3563,5079),(42,212,344)}, and so on.</p><p>The combined volume of the first 100 cuboids, C<sub>1</sub>,...,C<sub>100</sub>, is 723581599.</p><p>What is the combined volume of all 50000 cuboids, C<sub>1</sub>,...,C<sub>50000</sub> ?</p>",
    "folder": "combined-volume-of-cuboids",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Combined Volume of Cuboids"
});

db.questions.insert({
    "details": "<p>There are <var>N</var> seats in a row. <var>N</var> people come after each other to fill the seats according to the following rules:<ol type=\"1\"><li>If there is any seat whose adjacent seat(s) are not occupied take such a seat.</li><li>If there is no such seat and there is any seat for which only one adjacent seat is occupied take such a seat.</li><li>Otherwise take one of the remaining available seats. </li></ol>Let T(<var>N</var>) be the number of possibilities that <var>N</var> seats are occupied by <var>N</var> people with the given rules.<br/> The following figure shows T(4)=8.</p><div align=\"center\"><img src=\"project/images/p_364_comf_dist.gif\"/></div><p>We can verify that T(10) = 61632 and T(1 000) mod 100 000 007 = 47255094.</p><p>Find T(1 000 000) mod 100 000 007.</p>",
    "folder": "comfortable-distance",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Comfortable distance"
});

db.questions.insert({
    "details": "<p>A number consisting entirely of ones is called a repunit. We shall define R(<i>k</i>) to be a repunit of length <i>k</i>; for example, R(6) = 111111.</p><p>Given that <i>n</i> is a positive integer and GCD(<i>n</i>, 10) = 1, it can be shown that there always exists a value, <i>k</i>, for which R(<i>k</i>) is divisible by <i>n</i>, and let A(<i>n</i>) be the least such value of <i>k</i>; for example, A(7) = 6 and A(41) = 5.</p><p>You are given that for all primes, <i>p</i> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5, that <i>p</i> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 is divisible by A(<i>p</i>). For example, when <i>p</i> = 41, A(41) = 5, and 40 is divisible by 5.</p><p>However, there are rare composite values for which this is also true; the first five examples being 91, 259, 451, 481, and 703.</p><p>Find the sum of the first twenty-five composite values of <i>n</i> for which<br/>GCD(<i>n</i>, 10) = 1 and <i>n</i> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 is divisible by A(<i>n</i>).</p>",
    "folder": "composites-with-prime-repunit",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Composites with prime repunit property"
});

db.questions.insert({
    "details": "<p>Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,<br/> where each \u201c_\u201d is a single digit.</p>",
    "folder": "concealed-square",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Concealed Square"
});

db.questions.insert({
    "details": "<p>Here are the records from a busy telephone system with one million users:</p><div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td>RecNr</td><td align=\"center\" width=\"60\">Caller</td><td align=\"center\" width=\"60\">Called</td></tr><tr><td align=\"center\">1</td><td align=\"center\">200007</td><td align=\"center\">100053</td></tr><tr><td align=\"center\">2</td><td align=\"center\">600183</td><td align=\"center\">500439</td></tr><tr><td align=\"center\">3</td><td align=\"center\">600863</td><td align=\"center\">701497</td></tr><tr><td align=\"center\">...</td><td align=\"center\">...</td><td align=\"center\">...</td></tr></table></div><p>The telephone number of the caller and the called number in record n are Caller(n) = S<sub>2n-1</sub> and Called(n) = S<sub>2n</sub> where S<sub>1,2,3,...</sub> come from the \"Lagged Fibonacci Generator\":</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> k <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 55, S<sub>k</sub> = [100003 - 200003k + 300007k<sup>3</sup>] (modulo 1000000)<br/>For 56 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> k, S<sub>k</sub> = [S<sub>k-24</sub> + S<sub>k-55</sub>] (modulo 1000000)</p><p>If Caller(n) = Called(n) then the user is assumed to have misdialled and the call fails; otherwise the call is successful.</p><p>From the start of the records, we say that any pair of users X and Y are friends if X calls Y or vice-versa. Similarly, X is a friend of a friend of Z if X is a friend of Y and Y is a friend of Z; and so on for longer chains.</p><p>The Prime Minister's phone number is 524287. After how many successful calls, not counting misdials, will 99% of the users (including the PM) be a friend, or a friend of a friend etc., of the Prime Minister?</p>",
    "folder": "connectedness-of-a-network",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Connectedness of a network."
});

db.questions.insert({
    "details": "<p>Let <var>n</var> be a positive integer.<br/>A 6-sided die is thrown <var>n</var> times. Let <var>c</var> be the number of pairs of consecutive throws that give the same value.</p><p>For example, if <var>n</var> = 7 and the values of the die throws are (1,1,5,6,6,6,3), then the following pairs of consecutive throws give the same value:<br/>(<u>1,1</u>,5,6,6,6,3)<br/>(1,1,5,<u>6,6</u>,6,3)<br/>(1,1,5,6,<u>6,6</u>,3)<br/>Therefore, <var>c</var> = 3 for (1,1,5,6,6,6,3).</p><p>Define C(<var>n</var>) as the number of outcomes of throwing a 6-sided die <var>n</var> times such that <var>c</var> does not exceed \u03c0(<var>n</var>).<sup>1</sup><br/>For example, C(3) = 216, C(4) = 1290, C(11) = 361912500 and C(24) = 4727547363281250000.</p><p>Define S(<var>L</var>) as <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> C(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>L</var>.<br/>For example, S(50) mod 1\u00a0000\u00a0000\u00a0007 = 832833871.</p><p>Find S(50\u00a0000\u00a0000) mod 1\u00a0000\u00a0000\u00a0007.</p><p><sup>1</sup> \u03c0 denotes the <b>prime-counting function</b>, i.e. \u03c0(<var>n</var>) is the number of primes <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>.</p>",
    "folder": "consecutive-die-throws",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Consecutive die throws"
});

db.questions.insert({
    "details": "<p>Find the number of integers 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>7</sup>, for which <var>n</var> and <var>n</var> + 1 have the same number of positive divisors. For example, 14 has the positive divisors 1, 2, 7, 14 while 15 has 1, 3, 5, 15.</p>",
    "folder": "consecutive-positive-divisors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Consecutive positive divisors\r\n"
});

db.questions.insert({
    "details": "<p>The prime 41, can be written as the sum of six consecutive primes:</p><div style=\"text-align:center;\">41 = 2 + 3 + 5 + 7 + 11 + 13</div><p>This is the longest sum of consecutive primes that adds to a prime below one-hundred.</p><p>The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.</p><p>Which prime, below one-million, can be written as the sum of the most consecutive primes?</p>",
    "folder": "consecutive-prime-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Consecutive prime sum"
});

db.questions.insert({
    "details": "<p>A <i>list of size n</i> is a sequence of <var>n</var> natural numbers.<br/> Examples are (2,4,6), (2,6,4), (10,6,15,6), and (11).</p><p>The <b>greatest common divisor</b>, or gcd, of a list is the largest natural number that divides all entries of the list. <br/>Examples: gcd(2,6,4) = 2, gcd(10,6,15,6) = 1 and gcd(11) = 11.</p><p>The <b>least common multiple</b>, or lcm, of a list is the smallest natural number divisible by each entry of the list. <br/>Examples: lcm(2,6,4) = 12, lcm(10,6,15,6) = 30 and lcm(11) = 11.</p><p>Let f(<var>G</var>, <var>L</var>, <var>N</var>) be the number of lists of size <var>N</var> with gcd <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>G</var> and lcm <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>L</var>. For example:</p><p>f(10, 100, 1) = 91.<br/>f(10, 100, 2) = 327.<br/>f(10, 100, 3) = 1135.<br/>f(10, 100, 1000) mod 101<sup>4</sup> = 3286053.</p><p>Find f(10<sup>6</sup>, 10<sup>12</sup>, 10<sup>18</sup>) mod 101<sup>4</sup>.</p>",
    "folder": "constraining-the-least-greates",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Constraining the least greatest and the greatest least"
});

db.questions.insert({
    "details": "<p>The square root of 2 can be written as an infinite continued fraction.</p><div style=\"margin-left:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2 = 1 +</td><td colspan=\"4\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"135\"/><br/></div></td></tr><tr><td>\u00a0</td><td>2 +</td><td colspan=\"3\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"110\"/><br/></div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>2 +</td><td colspan=\"2\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"85\"/><br/></div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>2 +</td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"60\"/><br/></div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>2 + ...</td></tr></table></div><p>The infinite continued fraction can be written, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2 = [1;(2)], (2) indicates that 2 repeats <i>ad infinitum</i>. In a similar way, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23 = [4;(1,3,1,8)].</p><p>It turns out that the sequence of partial values of continued fractions for square roots provide the best rational approximations. Let us consider the convergents for <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2.</p><div style=\"margin-left:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>1 +</td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/></div></td><td>= 3/2</td></tr><tr><td>\u00a0</td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td></tr></table><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>1 +</td><td colspan=\"2\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"50\"/><br/></div></td><td>= 7/5</td></tr><tr><td>\u00a0</td><td>2 +</td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/></div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td></tr></table><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>1 +</td><td colspan=\"3\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"80\"/><br/></div></td><td>= 17/12</td></tr><tr><td>\u00a0</td><td>2 +</td><td colspan=\"2\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"50\"/><br/></div></td><td>\u00a0</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>2 +</td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/></div></td><td>\u00a0</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td></tr></table><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>1 +</td><td colspan=\"4\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"110\"/><br/></div></td><td>= 41/29</td></tr><tr><td>\u00a0</td><td>2 +</td><td colspan=\"3\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"80\"/><br/></div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>2 +</td><td colspan=\"2\"><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"50\"/><br/></div></td><td>\u00a0</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>2 +</td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/></div></td><td>\u00a0</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td></tr></table></div><p>Hence the sequence of the first ten convergents for <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2 are:</p><div class=\"info\">1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169, 577/408, 1393/985, 3363/2378, ...</div><p>What is most surprising is that the important mathematical constant,<br/><i>e</i> = [2; 1,2,1, 1,4,1, 1,6,1 , ... , 1,2<i>k</i>,1, ...].</p><p>The first ten terms in the sequence of convergents for <i>e</i> are:</p><div class=\"info\">2, 3, 8/3, 11/4, 19/7, 87/32, 106/39, 193/71, 1264/465, 1457/536, ...</div><p>The sum of digits in the numerator of the 10<sup>th</sup> convergent is 1+4+5+7=17.</p><p>Find the sum of digits in the numerator of the 100<sup>th</sup> convergent of the continued fraction for <i>e</i>.</p>",
    "folder": "convergents-of-e",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Convergents of e"
});

db.questions.insert({
    "details": "<p>Given a set of points on a plane, we define a convex hole to be a convex polygon having as vertices any of the given points and not containing any of the given points in its interior (in addition to the vertices, other given points may lie on the perimeter of the polygon). </p><p>As an example, the image below shows a set of twenty points and a few such convex holes. The convex hole shown as a red heptagon has an area equal to 1049694.5 square units, which is the highest possible area for a convex hole on the given set of points.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_252_convexhole.gif\"/></div><p><style type=\"text/css\">table.p252 td{  padding: 0px 3px 0px 3px;  vertical-align: bottom;  text-align: left;}</style><p>For our example, we used the first 20 points (<var>T</var><sub>2<var>k</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</sub>,\u2009<var>T</var><sub>2<var>k</var></sub>), for <var>k</var>\u2009=\u20091,2,\u2026,20, produced with the pseudo-random number generator:</p><center><table class=\"p252\"><tr><td style=\"text-align:right\"><var>S</var><sub>0</sub></td><td>=<sub>\u00a0</sub></td><td>290797<sub>\u00a0</sub></td></tr><tr><td><var>S</var><sub><var>n</var>+1</sub></td><td>=<sub>\u00a0</sub></td><td><var>S</var><sub><var>n</var></sub><sup>2</sup> mod 50515093</td></tr><tr><td style=\"text-align:right\"><var>T</var><sub><var>n</var></sub></td><td>=<sub>\u00a0</sub></td><td>(\u2009<var>S</var><sub><var>n</var></sub> mod 2000\u2009) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1000<sup>\u00a0</sup></td></tr></table></center><p><i>i.e.</i> (527,\u2009144), (<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>488,\u2009732), (<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>454,\u2009<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>947), \u2026</p><p>What is the maximum area for a convex hole on the set containing the first 500 points in the pseudo-random sequence?<br/> Specify your answer including one digit after the decimal point.</p></p>",
    "folder": "convex-holes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Convex Holes"
});

db.questions.insert({
    "details": "<p>We shall call a fraction that cannot be cancelled down a resilient fraction.<br/> Furthermore we shall define the resilience of a denominator, <var>R</var>(<var>d</var>), to be the ratio of its proper fractions that are resilient; for example, <var>R</var>(12) = <sup>4</sup>\u2044<sub>11</sub>.</p><div style=\"text-align:left;\"><table><tr><td>The resilience of a number <var>d</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 is then</td><td><div style=\"text-align:center;\">\u03c6(<var>d</var>)<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"36\"/><br/><var>d</var> - 1</div></td><td>, where \u03c6 is Euler's totient function.</td></tr></table><table><tr><td>We further define the <b>coresilience</b> of a number <var>n</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 as <var>C</var>(<var>n</var>)</td><td>=\u00a0</td><td><div style=\"text-align:center;\"><var>n</var> - \u03c6(<var>n</var>)<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"54\"/><br/><var>n</var> - 1</div></td><td>.</td></tr></table><table><tr><td>The coresilience of a prime <var>p</var> is <var>C</var>(<var>p</var>)</td><td>=\u00a0</td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"34\"/><br/><var>p</var> - 1</div></td><td>.</td></tr></table></div><p>The resilience of a number <var>d</var> <img src='images/symbol_gt.gif' width='10' height='10' alt='&gt;' border='0' style='vertical-align:middle;' /> 1 is then <font \"size=4\"><sup>&phi;(<var>d</var>)</sup>&frasl;<sub>(<var>d</var>-1)</sub></font>, where &phi; is Euler's totient function.</p><p>We further define the <b>coresilience</b> of a number <var>n</var> <img src='images/symbol_gt.gif' width='10' height='10' alt='&gt;' border='0' style='vertical-align:middle;' /> 1 as <var>C</var>(<var>n</var>) = <font \"size=4\"><sup>(<var>n</var> - &phi;(<var>n</var>))</sup>&frasl;<sub>(<var>n</var> - 1)</sub></font>.</p><p>The coresilience of a prime <var>p</var> is <var>C</var>(<var>p</var>) = <font \"size=4\"><sup>1</sup>&frasl;<sub>(<var>p</var> - 1)</sub></font>.</p><p>Find the sum of all <b>composite</b> integers 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>11</sup>, for which <var>C</var>(<var>n</var>) is a <dfn title=\"A fraction with numerator 1\">unit fraction</dfn>.</p>",
    "folder": "coresilience",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Coresilience"
});

db.questions.insert({
    "details": "<p>A row measuring seven units in length has red blocks with a minimum length of three units placed on it, such that any two red blocks (which are allowed to be different lengths) are separated by at least one black square. There are exactly seventeen ways of doing this.</p><table align=\"center\" border=\"0\" cellpadding=\"5\" cellspacing=\"1\"><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"66\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td colspan=\"4\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"89\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"4\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"89\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"4\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"89\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"4\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"89\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td colspan=\"5\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"112\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"5\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"112\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"5\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"112\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td colspan=\"6\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"135\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"6\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"135\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"1\"><tr><td colspan=\"7\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"158\"/></td></tr></table></td><td>\u00a0</td></tr></table><p>How many ways can a row measuring fifty units in length be filled?</p><p class=\"info\">NOTE: Although the example above does not lend itself to the possibility, in general it is permitted to mix block sizes. For example, on a row measuring eight units in length you could use red (3), black (1), and red (4).</p>",
    "folder": "counting-block-combinations-i",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting block combinations I"
});

db.questions.insert({
    "details": "<p class=\"info\">NOTE: This is a more difficult version of problem <a href=\"index.php?section=problems&amp;id=114\">114</a>.</p><p>A row measuring <i>n</i> units in length has red blocks with a minimum length of <i>m</i> units placed on it, such that any two red blocks (which are allowed to be different lengths) are separated by at least one black square.</p><p>Let the fill-count function, F(<i>m</i>, <i>n</i>), represent the number of ways that a row can be filled.</p><p>For example, F(3, 29) = 673135 and F(3, 30) = 1089155.</p><p>That is, for <i>m</i> = 3, it can be seen that <i>n</i> = 30 is the smallest value for which the fill-count function first exceeds one million.</p><p>In the same way, for <i>m</i> = 10, it can be verified that F(10, 56) = 880711 and F(10, 57) = 1148904, so <i>n</i> = 57 is the least value for which the fill-count function first exceeds one million.</p><p>For <i>m</i> = 50, find the least value of <i>n</i> for which the fill-count function first exceeds one million.</p>",
    "folder": "counting-block-combinations-ii",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting block combinations II"
});

db.questions.insert({
    "details": "<p>An electric circuit uses exclusively identical capacitors of the same value C.<br/>The capacitors can be connected in series or in parallel to form sub-units, which can then be connected in series or in parallel with other capacitors or other sub-units to form larger sub-units, and so on up to a final circuit.</p><p>Using this simple procedure and up to <var>n</var> identical capacitors, we can make circuits having a range of different total capacitances. For example, using up to <var>n</var>=3 capacitors of 60 <img alt=\"\" height=\"21\" src=\"project/images/p_155_capsmu.gif\" style=\"vertical-align:middle;\" width=\"12\"/>F each, we can obtain the following 7 distinct total capacitance values: </p><div style=\"text-align:center;\"><img alt=\"\" height=\"557\" src=\"project/images/p_155_capacitors1.gif\" width=\"387\"/></div><p>If we denote by <var>D</var>(<var>n</var>) the number of distinct total capacitance values we can obtain when using up to <var>n</var> equal-valued capacitors and the simple procedure described above, we have: <var>D</var>(1)=1, <var>D</var>(2)=3, <var>D</var>(3)=7 ...</p><p>Find <var>D</var>(18).</p><p><i>Reminder :</i> When connecting capacitors C<sub>1</sub>, C<sub>2</sub> etc in parallel, the total capacitance is C<sub>T</sub>\u00a0=\u00a0C<sub>1</sub>\u00a0+\u00a0C<sub>2</sub>\u00a0+...,<br/>whereas when connecting them in series, the overall capacitance is given by:<img alt=\"\" height=\"38\" src=\"project/images/p_155_capsform.gif\" style=\"vertical-align:middle;\" width=\"127\"/></p>",
    "folder": "counting-capacitor-circuits",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting Capacitor Circuits."
});

db.questions.insert({
    "details": "<p>Starting from zero the natural numbers are written down in base 10 like this:<br/>0 1 2 3 4 5 6 7 8 9 10 11 12....</p><p>Consider the digit <var>d</var>=1. After we write down each number <var>n</var>, we will update the number of ones that have occurred and call this number <var>f</var>(<var>n</var>,1). The first values for <var>f</var>(<var>n</var>,1), then, are as follows:</p><div style=\"text-align:center;\"><table align=\"center\" style=\"text-align:center;\"><tr><td><var>n</var></td><td><var>f</var>(<var>n</var>,1)</td></tr><tr><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>1</td></tr><tr><td>3</td><td>1</td></tr><tr><td>4</td><td>1</td></tr><tr><td>5</td><td>1</td></tr><tr><td>6</td><td>1</td></tr><tr><td>7</td><td>1</td></tr><tr><td>8</td><td>1</td></tr><tr><td>9</td><td>1</td></tr><tr><td>10</td><td>2</td></tr><tr><td>11</td><td>4</td></tr><tr><td>12</td><td>5</td></tr></table></div><p>Note that <var>f</var>(<var>n</var>,1) never equals 3.<br/>So the first two solutions of the equation <var>f</var>(<var>n</var>,1)=<var>n</var> are <var>n</var>=0 and <var>n</var>=1. The next solution is <var>n</var>=199981.</p><p>In the same manner the function <var>f</var>(<var>n,d</var>) gives the total number of digits <var>d</var> that have been written down after the number <var>n</var> has been written.<br/>In fact, for every digit <var>d</var> <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 0, 0 is the first solution of the equation <var>f</var>(<var>n,d</var>)=<var>n</var>.</p><p>Let <var>s</var>(<var>d</var>) be the sum of all the solutions for which <var>f</var>(<var>n,d</var>)=<var>n</var>.<br/>You are given that <var>s</var>(1)=22786974071.</p><p>Find  <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> <var>s</var>(<var>d</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> d <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 9.</p><p>Note: if, for some <var>n</var>, <var>f</var>(<var>n,d</var>)=<var>n</var> for more than one value of <var>d</var> this value of <var>n</var> is counted again for every value of <var>d</var> for which <var>f</var>(<var>n,d</var>)=<var>n</var>.</p>",
    "folder": "counting-digits",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting Digits"
});

db.questions.insert({
    "details": "<p>Consider the fraction, <i>n/d</i>, where <i>n</i> and <i>d</i> are positive integers. If <i>n</i><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><i>d</i> and HCF(<i>n,d</i>)=1, it is called a reduced proper fraction.</p><p>If we list the set of reduced proper fractions for <i>d</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 8 in ascending order of size, we get:</p><p style=\"text-align:center;font-size:8pt;\">1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, <b>3/8, 2/5, 3/7</b>, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</p><p>It can be seen that there are 3 fractions between 1/3 and 1/2.</p><p>How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for <i>d</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 12,000?</p>",
    "folder": "counting-fractions-in-a-range",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting fractions in a range"
});

db.questions.insert({
    "details": "<p>Consider the fraction, <i>n/d</i>, where <i>n</i> and <i>d</i> are positive integers. If <i>n</i><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><i>d</i> and HCF(<i>n,d</i>)=1, it is called a reduced proper fraction.</p><p>If we list the set of reduced proper fractions for <i>d</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 8 in ascending order of size, we get:</p><p style=\"text-align:center;font-size:8pt;\">1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, 2/5, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</p><p>It can be seen that there are 21 elements in this set.</p><p>How many elements would be contained in the set of reduced proper fractions for <i>d</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1,000,000?</p>",
    "folder": "counting-fractions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting fractions"
});

db.questions.insert({
    "details": "<p>It can be verified that there are 23 positive integers less than 1000 that are divisible by at least four distinct primes less than 100.</p><p>Find how many positive integers less than 10<sup>16</sup> are divisible by at least four distinct primes less than 100.</p>",
    "folder": "counting-numbers-with-at-least",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting numbers with at least four distinct prime factors less than 100"
});

db.questions.insert({
    "details": "<p>By counting carefully it can be seen that a rectangular grid measuring 3 by 2 contains eighteen rectangles:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_085.gif\"/></div><p>Although there exists no rectangular grid that contains exactly two million rectangles, find the area of the grid with the nearest solution.</p>",
    "folder": "counting-rectangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting rectangles"
});

db.questions.insert({
    "details": "<p>It is possible to write five as a sum in exactly six different ways:</p><p style=\"margin-left:50px;\">4 + 1<br/>3 + 2<br/>3 + 1 + 1<br/>2 + 2 + 1<br/>2 + 1 + 1 + 1<br/>1 + 1 + 1 + 1 + 1</p><p>How many different ways can one hundred be written as a sum of at least two positive integers?</p>",
    "folder": "counting-summations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting summations"
});

db.questions.insert({
    "details": "<p>You are given the following information, but you may prefer to do some research for yourself.</p><ul><li>1 Jan 1900 was a Monday.</li><li>Thirty days has September,<br/>April, June and November.<br/>All the rest have thirty-one,<br/>Saving February alone,<br/>Which has twenty-eight, rain or shine.<br/>And on leap years, twenty-nine.</li><li>A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.</li></ul><p>How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?</p>",
    "folder": "counting-sundays",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting Sundays"
});

db.questions.insert({
    "details": "<p>We shall define a square lamina to be a square outline with a square \"hole\" so that the shape possesses vertical and horizontal symmetry.</p><p>Given eight tiles it is possible to form a lamina in only one way: 3x3 square with a 1x1 hole in the middle. However, using thirty-two tiles it is possible to form two distinct laminae.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_173_square_laminas.gif\"/></div><p>If <var>t</var> represents the number of tiles used, we shall say that <var>t</var> = 8 is type L(1) and <var>t</var> = 32 is type L(2).</p><p>Let N(<var>n</var>) be the number of <var>t</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000000 such that <var>t</var> is type L(<var>n</var>); for example, N(15) = 832.</p><p>What is <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> N(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10?</p>",
    "folder": "counting-the-number-of-hollow",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Counting the number of \"hollow\" square laminae that can form one, two, three, ... distinct arrangements."
});

db.questions.insert({
    "details": "<p>Consider the problem of building a wall out of 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1 and 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1 bricks (horizontal<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>vertical dimensions) such that, for extra strength, the gaps between horizontally-adjacent bricks never line up in consecutive layers, i.e. never form a \"running crack\".</p><p>For example, the following 9<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3 wall is not acceptable due to the running crack shown in red:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"http://projecteuler.net/project/images/p_215_crackfree.gif\"/></div><p>There are eight ways of forming a crack-free 9<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3 wall, written W(9,3) = 8.</p><p>Calculate W(32,10).</p>",
    "folder": "crack-free-walls",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Crack-free Walls"
});

db.questions.insert({
    "details": "<p>For fixed integers a, b, c, define the <i>crazy function</i> F(<var>n</var>) as follows:<br/>F(<var>n</var>) = <var>n</var> - c for all <var>n</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> b <br/>F(<var>n</var>) = F(a + F(a + F(a + F(a + <var>n</var>)))) for all <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> b.</p><p>Also, define S(a, b, c) = <img src=\"project/images/p_340_formula.gif\" style=\"vertical-align:middle;\"/>.</p><p>For example, if a = 50, b = 2000 and c = 40, then F(0) = 3240 and F(2000) = 2040.<br/>Also, S(50, 2000, 40) = 5204240.</p><p>Find the last 9 digits of S(21<sup>7</sup>, 7<sup>21</sup>, 12<sup>7</sup>).</p>",
    "folder": "crazy-function",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Crazy Function"
});

db.questions.insert({
    "details": "<p>A 4x4 grid is filled with digits d, 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> d <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 9.</p><p>It can be seen that in the grid</p><p style=\"text-align:center;\">6 3 3 0<br/>5 0 4 3<br/>0 7 1 4<br/>1 2 4 5</p><p>the sum of each row and each column has the value 12. Moreover the sum of each diagonal is also 12.</p><p>In how many ways can you fill a 4x4 grid with the digits d, 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> d <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 9 so that each row, each column, and both diagonals have the same sum?</p>",
    "folder": "criss-cross",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Criss Cross"
});

db.questions.insert({
    "details": "<p>E<sub><var>a</var></sub> is an ellipse with an equation of the form x<sup>2</sup> + 4y<sup>2</sup> = 4<var>a</var><sup>2</sup>.<br/>E<sub><var>a</var></sub>' is the rotated image of E<sub><var>a</var></sub> by \u03b8 degrees counterclockwise around the origin O(0, 0) for 0\u00b0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> \u03b8 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 90\u00b0.</p><div align=\"center\"><img src=\"project/images/p_404_c_ellipse.gif\"/></div><p><var>b</var> is the distance to the origin of the two intersection points closest to the origin and <var>c</var> is the distance of the two other intersection points.<br/>We call an ordered triplet (<var>a</var>, <var>b</var>, <var>c</var>) a <i>canonical ellipsoidal triplet</i> if <var>a</var>, <var>b</var> and <var>c</var> are positive integers.<br/>For example, (209, 247, 286) is a canonical ellipsoidal triplet.</p><p>Let C(<var>N</var>) be the number of distinct canonical ellipsoidal triplets (<var>a</var>, <var>b</var>, <var>c</var>) for <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>It can be verified that C(10<sup>3</sup>) = 7, C(10<sup>4</sup>) = 106 and C(10<sup>6</sup>) = 11845.</p><p>Find C(10<sup>17</sup>).</p>",
    "folder": "crisscross-ellipses",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Crisscross Ellipses"
});

db.questions.insert({
    "details": "<p><var>N</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>N</var> disks are placed on a square game board. Each disk has a black side and white side.</p><p>At each turn, you may choose a disk and flip all the disks in the same row and the same column as this disk: thus 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>N</var>-1 disks are flipped. The game ends when all disks show their white side. The following example shows a game on a 5<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>5 board.</p><div align=\"center\"><img src=\"project/images/p_331_crossflips3.gif\"/></div><p>It can be proven that 3 is the minimal number of turns to finish this game.</p><p>The bottom left disk on the <var>N</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>N</var> board has coordinates (0,0);<br/>the bottom right disk has coordinates (<var>N</var>-1,0) and the top left disk has coordinates (0,<var>N</var>-1). </p><p>Let C<sub><var>N</var></sub> be the following configuration of a board with <var>N</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>N</var> disks:<br/>A disk at (<var>x</var>,<var>y</var>) satisfying <img src=\"project/images/p_331_crossflips1.gif\" style=\"vertical-align:middle\"/>, shows its black side; otherwise, it shows its white side. C<sub>5</sub> is shown above.</p><p>Let T(<var>N</var>) be the minimal number of turns to finish a game starting from configuration C<sub><var>N</var></sub> or 0 if configuration C<sub><var>N</var></sub> is unsolvable.<br/>We have shown that T(5)=3. You are also given that T(10)=29 and T(1 000)=395253.</p><p>Find <img src=\"project/images/p_331_crossflips2.gif\" style=\"vertical-align:middle\"/>.</p>",
    "folder": "cross-flips",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cross flips"
});

db.questions.insert({
    "details": "<p>Consider an equilateral triangle in which straight lines are drawn from each vertex to the middle of the opposite side, such as in the <i>size 1</i> triangle in the sketch below.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"200\" src=\"project/images/p_163.gif\" width=\"300\"/></div><p>Sixteen triangles of either different shape or size or orientation or location can now be observed in that triangle. Using <i>size 1</i> triangles as building blocks, larger triangles can be formed, such as the <i>size 2</i> triangle in the above sketch. One-hundred and four triangles of either different shape or size or orientation or location can now be observed in that <i>size 2</i> triangle.</p><p>It can be observed that the <i>size 2</i> triangle contains 4 <i>size 1</i> triangle building blocks. A <i>size 3</i> triangle would contain 9 <i>size 1</i> triangle building blocks and a <i>size n</i> triangle would thus contain <i>n<sup>2</sup> size 1</i> triangle building blocks.</p><p>If we denote T(<var>n</var>) as the number of triangles present in a triangle of <i>size <var>n</var></i>, then</p><p style=\"margin-left:50px;\">T(1) = 16<br/>T(2) = 104</p><p>Find T(36).</p>",
    "folder": "cross-hatched-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cross-hatched triangles"
});

db.questions.insert({
    "details": "<p>Each of the six faces on a cube has a different digit (0 to 9) written on it; the same is done to a second cube. By placing the two cubes side-by-side in different positions we can form a variety of 2-digit numbers.</p><p>For example, the square number 64 could be formed:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_090.gif\"/><br/></div><p>In fact, by carefully choosing the digits on both cubes it is possible to display all of the square numbers below one-hundred: 01, 04, 09, 16, 25, 36, 49, 64, and 81.</p><p>For example, one way this can be achieved is by placing{0, 5, 6, 7, 8, 9} on one cube and{1, 2, 3, 4, 8, 9} on the other cube.</p><p>However, for this problem we shall allow the 6 or 9 to be turned upside-down so that an arrangement like{0, 5, 6, 7, 8, 9} and{1, 2, 3, 4, 6, 7} allows for all nine square numbers to be displayed; otherwise it would be impossible to obtain 09.</p><p>In determining a distinct arrangement we are interested in the digits on each cube, not the order.</p><p style=\"margin-left:50px;\"{1, 2, 3, 4, 5, 6} is equivalent to{3, 6, 4, 1, 2, 5}<br/{1, 2, 3, 4, 5, 6} is distinct from{1, 2, 3, 4, 5, 9}</p><p>But because we are allowing 6 and 9 to be reversed, the two distinct sets in the last example both represent the extended set{1, 2, 3, 4, 5, 6, 9} for the purpose of forming 2-digit numbers.</p><p>How many distinct arrangements of the two cubes allow for all of the square numbers to be displayed?</p>",
    "folder": "cube-digit-pairs",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cube digit pairs"
});

db.questions.insert({
    "details": "<p>The cube, 41063625 (345<sup>3</sup>), can be permuted to produce two other cubes: 56623104 (384<sup>3</sup>) and 66430125 (405<sup>3</sup>). In fact, 41063625 is the smallest cube which has exactly three permutations of its digits which are also cube.</p><p>Find the smallest cube for which exactly five permutations of its digits are cube.</p>",
    "folder": "cubic-permutations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cubic permutations"
});

db.questions.insert({
    "details": "<p>The minimum number of cubes to cover every visible face on a cuboid measuring 3\u00a0x\u00a02\u00a0x\u00a01 is twenty-two.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"247\" src=\"project/images/p_126.gif\" width=\"499\"/><br/></div><p>If we then add a second layer to this solid it would require forty-six cubes to cover every visible face, the third layer would require seventy-eight cubes, and the fourth layer would require one-hundred and eighteen cubes to cover every visible face.</p><p>However, the first layer on a cuboid measuring 5\u00a0x\u00a01\u00a0x\u00a01 also requires twenty-two cubes; similarly the first layer on cuboids measuring 5\u00a0x\u00a03\u00a0x\u00a01, 7\u00a0x\u00a02\u00a0x\u00a01, and 11\u00a0x\u00a01\u00a0x\u00a01 all contain forty-six cubes.</p><p>We shall define C(<i>n</i>) to represent the number of cuboids that contain <i>n</i> cubes in one of its layers. So C(22) = 2, C(46) = 4, C(78) = 5, and C(118) = 8.</p><p>It turns out that 154 is the least value of <i>n</i> for which C(<i>n</i>) = 10.</p><p>Find the least value of <i>n</i> for which C(<i>n</i>) = 1000.</p>",
    "folder": "cuboid-layers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cuboid layers"
});

db.questions.insert({
    "details": "<p>A spider, S, sits in one corner of a cuboid room, measuring 6 by 5 by 3, and a fly, F, sits in the opposite corner. By travelling on the surfaces of the room the shortest \"straight line\" distance from S to F is 10 and the path is shown on the diagram.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_086.gif\"/><br/></div><p>However, there are up to three \"shortest\" path candidates for any given cuboid and the shortest route doesn't always have integer length.</p><p>By considering all cuboid rooms with integer dimensions, up to a maximum size of M by M by M, there are exactly 2060 cuboids for which the shortest route has integer length when M=100, and this is the least value of M for which the number of solutions first exceeds two thousand; the number of solutions is 1975 when M=99.</p><p>Find the least value of M such that the number of solutions first exceeds one million.</p>",
    "folder": "cuboid-route",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cuboid route"
});

db.questions.insert({
    "details": "<p>A rectangular sheet of grid paper with integer dimensions <var>w</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>h</var> is given. Its grid spacing is 1.<br/>When we cut the sheet along the grid lines into two pieces and rearrange those pieces without overlap, we can make new rectangles with different dimensions.</p><p>For example, from a sheet with dimensions 9 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 4 , we can make rectangles with dimensions 18 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2, 12 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 and 6 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 6 by cutting and rearranging as below:</p><div align=\"center\"><img src=\"project/images/p_338_gridpaper.gif\"/><br/></div><p>Similarly, from a sheet with dimensions 9 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 8 , we can make rectangles with dimensions 18 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 4 and 12 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 6 .</p><p>For a pair <var>w</var> and <var>h</var>, let F(<var>w</var>,<var>h</var>) be the number of distinct rectangles that can be made from a sheet with dimensions <var>w</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>h</var> .<br/>For example, F(2,1) = 0, F(2,2) = 1, F(9,4) = 3 and F(9,8) = 2. <br/>Note that rectangles congruent to the initial one are not counted in F(<var>w</var>,<var>h</var>).<br/>Note also that rectangles with dimensions <var>w</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>h</var> and dimensions <var>h</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>w</var> are not considered distinct.</p><p>For an integer <var>N</var>, let G(<var>N</var>) be the sum of F(<var>w</var>,<var>h</var>) for all pairs <var>w</var> and <var>h</var> which satisfy 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>h</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>w</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>We can verify that G(10) = 55, G(10<sup>3</sup>) = 971745 and G(10<sup>5</sup>) = 9992617687.</p><p>Find G(10<sup>12</sup>). Give your answer modulo 10<sup>8</sup>.</p>",
    "folder": "cutting-rectangular-grid-paper",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cutting Rectangular Grid Paper"
});

db.questions.insert({
    "details": "<p>Inside a rope of length <var>n</var>, <var>n</var>-1 points are placed with distance 1 from each other and from the endpoints. Among these points, we choose <var>m</var>-1 points at random and cut the rope at these points to create <var>m</var> segments.</p><p>Let E(<var>n</var>, <var>m</var>) be the expected length of the second-shortest segment.</p>",
    "folder": "cutting-rope",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cutting rope"
});

db.questions.insert({
    "details": "<p>A square piece of paper with integer dimensions N<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>N is placed with a corner at the origin and two of its sides along the <var>x</var>- and <var>y</var>-axes. Then, we cut it up respecting the following rules:<ul><li>We only make straight cuts between two points lying on different sides of the square, and having integer coordinates.</li><li>Two cuts cannot cross, but several cuts can meet at the same border point.</li><li>Proceed until no more legal cuts can be made.</li></ul></p><p>Counting any reflections or rotations as distinct, we call C(N) the number of ways to cut an N<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>N square. For example, C(1)\u2009=\u20092 and C(2)\u2009=\u200930 (shown below).</p><div align=\"center\"><img src=\"project/images/p_270_CutSquare.gif\"/></div><p>What is C(30) mod 10<sup>8</sup> ?</p>",
    "folder": "cutting-squares",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cutting Squares"
});

db.questions.insert({
    "details": "<p>A <b>cyclic number</b> with <var>n</var> digits has a very interesting property:<br/>When it is multiplied by 1, 2, 3, 4, ... <var>n</var>, all the products have exactly the same digits, in the same order, but rotated in a circular fashion!</p><p>The smallest cyclic number is the 6-digit number 142857 :<br/>142857 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 = 142857<br/>142857 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 285714<br/>142857 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 = 428571<br/>142857 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 4 = 571428<br/>142857 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5 = 714285<br/>142857 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 6 = 857142  </p><p>The next cyclic number is 0588235294117647 with 16 digits :<br/>0588235294117647 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 = 0588235294117647<br/>0588235294117647 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 1176470588235294<br/>0588235294117647 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 = 1764705882352941<br/>...<br/>0588235294117647 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 16 = 9411764705882352</p><p>Note that for cyclic numbers, leading zeros are important.</p><p>There is only one cyclic number for which, the eleven leftmost digits are 00000000137 and the five rightmost digits are 56789 (i.e., it has the form 00000000137...56789 with an unknown number of digits in the middle). Find the sum of all its digits.</p>",
    "folder": "cyclic-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cyclic numbers"
});

db.questions.insert({
    "details": "<p>- A <b>Sierpi\u0144ski graph</b> of order-1 (<var>S</var><sub>1</sub>) is an equilateral triangle.<br/>- <var>S</var><sub><var>n</var>+1</sub> is obtained from <var>S</var><sub><var>n</var></sub> by positioning three copies of <var>S</var><sub><var>n</var></sub> so that every pair of copies has one common corner.</p><div align=\"center\"><img src=\"project/images/p_312_sierpinskyAt.gif\"/></div><p>Let C(<var>n</var>) be the number of cycles that pass exactly once through all the vertices of <var>S</var><sub><var>n</var></sub>.<br/>For example, C(3) = 8 because eight such cycles can be drawn on <var>S</var><sub>3</sub>, as shown below:</p><div align=\"center\"><img src=\"project/images/p_312_sierpinsky8t.gif\"/></div><p>It can also be verified that :<br/>C(1) = C(2) = 1<br/>C(5) = 71328803586048<br/>C(10 000) mod 10<sup>8</sup> = 37652224<br/>C(10 000) mod 13<sup>8</sup> = 617720485<br/></p><p>Find C(C(C(10 000))) mod 13<sup>8</sup>.</p>",
    "folder": "cyclic-paths-on-sierpi\u0144ski-gra",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cyclic paths on Sierpi\u0144ski graphs\r\n"
});

db.questions.insert({
    "details": "<p>Triangle, square, pentagonal, hexagonal, heptagonal, and octagonal numbers are all figurate (polygonal) numbers and are generated by the following formulae:</p><table><tr><td>Triangle</td><td>\u00a0</td><td>P<sub>3,<i>n</i></sub>=<i>n</i>(<i>n</i>+1)/2</td><td>\u00a0</td><td>1, 3, 6, 10, 15, ...</td></tr><tr><td>Square</td><td>\u00a0</td><td>P<sub>4,<i>n</i></sub>=<i>n</i><sup>2</sup></td><td>\u00a0</td><td>1, 4, 9, 16, 25, ...</td></tr><tr><td>Pentagonal</td><td>\u00a0</td><td>P<sub>5,<i>n</i></sub>=<i>n</i>(3<i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)/2</td><td>\u00a0</td><td>1, 5, 12, 22, 35, ...</td></tr><tr><td>Hexagonal</td><td>\u00a0</td><td>P<sub>6,<i>n</i></sub>=<i>n</i>(2<i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)</td><td>\u00a0</td><td>1, 6, 15, 28, 45, ...</td></tr><tr><td>Heptagonal</td><td>\u00a0</td><td>P<sub>7,<i>n</i></sub>=<i>n</i>(5<i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3)/2</td><td>\u00a0</td><td>1, 7, 18, 34, 55, ...</td></tr><tr><td>Octagonal</td><td>\u00a0</td><td>P<sub>8,<i>n</i></sub>=<i>n</i>(3<i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2)</td><td>\u00a0</td><td>1, 8, 21, 40, 65, ...</td></tr></table><p>The ordered set of three 4-digit numbers: 8128, 2882, 8281, has three interesting properties.</p><ol><li>The set is cyclic, in that the last two digits of each number is the first two digits of the next number (including the last number with the first).</li><li>Each polygonal type: triangle (P<sub>3,127</sub>=8128), square (P<sub>4,91</sub>=8281), and pentagonal (P<sub>5,44</sub>=2882), is represented by a different number in the set.</li><li>This is the only set of 4-digit numbers with this property.</li></ol><p>Find the sum of the only ordered set of six cyclic 4-digit numbers for which each polygonal type: triangle, square, pentagonal, hexagonal, heptagonal, and octagonal, is represented by a different number in the set.</p>",
    "folder": "cyclical-figurate-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Cyclical figurate numbers"
});

db.questions.insert({
    "details": "<p>In the game of darts a player throws three darts at a target board which is split into twenty equal sized sections numbered one to twenty.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"400\" src=\"project/images/p_109.gif\" width=\"400\"/><br/></div><p>The score of a dart is determined by the number of the region that the dart lands in. A dart landing outside the red/green outer ring scores zero. The black and cream regions inside this ring represent single scores. However, the red/green outer ring and middle ring score double and treble scores respectively.</p><p>At the centre of the board are two concentric circles called the bull region, or bulls-eye. The outer bull is worth 25 points and the inner bull is a double, worth 50 points.</p><p>There are many variations of rules but in the most popular game the players will begin with a score 301 or 501 and the first player to reduce their running total to zero is a winner. However, it is normal to play a \"doubles out\" system, which means that the player must land a double (including the double bulls-eye at the centre of the board) on their final dart to win; any other dart that would reduce their running total to one or lower means the score for that set of three darts is \"bust\".</p><p>When a player is able to finish  on their current score it is called a \"checkout\" and the highest checkout is 170: T20 T20 D25 (two treble 20s and double bull).</p><p>There are exactly eleven distinct ways to checkout on a score of 6:</p><div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"3\" cellspacing=\"0\"><tr><td><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"80\"/><br/>D3</td><td><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"80\"/><br/>\u00a0</td><td><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"80\"/><br/>\u00a0</td></tr><tr><td>D1</td><td>D2</td><td>\u00a0</td></tr><tr><td>S2</td><td>D2</td><td>\u00a0</td></tr><tr><td>D2</td><td>D1</td><td>\u00a0</td></tr><tr><td>S4</td><td>D1</td><td>\u00a0</td></tr><tr><td>S1</td><td>S1</td><td>D2</td></tr><tr><td>S1</td><td>T1</td><td>D1</td></tr><tr><td>S1</td><td>S3</td><td>D1</td></tr><tr><td>D1</td><td>D1</td><td>D1</td></tr><tr><td>D1</td><td>S2</td><td>D1</td></tr><tr><td>S2</td><td>S2</td><td>D1</td></tr></table></div><p>Note that D1 D2 is considered <b>different</b> to D2 D1 as they finish on different doubles. However, the combination S1 T1 D1 is considered the <b>same</b> as T1 S1 D1.</p><p>In addition we shall not include misses in considering combinations; for example, D3 is the <b>same</b> as 0 D3 and 0 0 D3.</p><p>Incredibly there are 42336 distinct ways of checking out in total.</p><p>How many distinct ways can a player checkout with a score less than 100?</p>",
    "folder": "darts",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Darts"
});

db.questions.insert({
    "details": "<p>Peter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.<br/>Colin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.</p><p>Peter and Colin roll their dice and compare totals: the highest total wins. The result is a draw if the totals are equal.</p><p>What is the probability that Pyramidal Pete beats Cubic Colin? Give your answer rounded to seven decimal places in the form 0.abcdefg</p>",
    "folder": "dice-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Dice Game"
});

db.questions.insert({
    "details": "<p>The fraction <sup>49</sup>/<sub>98</sub> is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that <sup>49</sup>/<sub>98</sub> = <sup>4</sup>/<sub>8</sub>, which is correct, is obtained by cancelling the 9s.</p><p>We shall consider fractions like, <sup>30</sup>/<sub>50</sub> = <sup>3</sup>/<sub>5</sub>, to be trivial examples.</p><p>There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.</p><p>If the product of these four fractions is given in its lowest common terms, find the value of the denominator.</p>",
    "folder": "digit-canceling-fractions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digit canceling fractions"
});

db.questions.insert({
    "details": "<p>The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145:</p><p style=\"margin-left:50px;\">1! + 4! + 5! = 1 + 24 + 120 = 145</p><p>Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three such loops that exist:</p><p style=\"margin-left:50px;\">169 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 363601 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 1454 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 169<br/>871 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 45361 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 871<br/>872 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 45362 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 872</p><p>It is not difficult to prove that EVERY starting number will eventually get stuck in a loop. For example,</p><p style=\"margin-left:50px;\">69 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 363600 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 1454 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 169 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 363601 (<img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 1454)<br/>78 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 45360 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 871 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 45361 (<img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 871)<br/>540 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 145 (<img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 145)</p><p>Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.</p><p>How many chains, with a starting number below one million, contain exactly sixty non-repeating terms?</p>",
    "folder": "digit-factorial-chains",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digit factorial chains"
});

db.questions.insert({
    "details": "<p>145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.</p><p>Find the sum of all numbers which are equal to the sum of the factorial of their digits.</p><p class=\"info\">Note: as 1! = 1 and 2! = 2 are not sums they are not included.</p>",
    "folder": "digit-factorials",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digit factorials"
});

db.questions.insert({
    "details": "<p>Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:</p><blockquote>1634 = 1<sup>4</sup> + 6<sup>4</sup> + 3<sup>4</sup> + 4<sup>4</sup><br/>8208 = 8<sup>4</sup> + 2<sup>4</sup> + 0<sup>4</sup> + 8<sup>4</sup><br/>9474 = 9<sup>4</sup> + 4<sup>4</sup> + 7<sup>4</sup> + 4<sup>4</sup></blockquote><p class=\"info\">As 1 = 1<sup>4</sup> is not a sum it is not included.</p><p>The sum of these numbers is 1634 + 8208 + 9474 = 19316.</p><p>Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.</p>",
    "folder": "digit-fifth-powers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digit fifth powers"
});

db.questions.insert({
    "details": "<p>The number 512 is interesting because it is equal to the sum of its digits raised to some power: 5 + 1 + 2 = 8, and 8<sup>3</sup> = 512. Another example of a number with this property is 614656 = 28<sup>4</sup>.</p><p>We shall define <i>a</i><sub>n</sub> to be the <i>n</i>th term of this sequence and insist that a number must contain at least two digits to have a sum.</p><p>You are given that <i>a</i><sub>2</sub> = 512 and <i>a</i><sub>10</sub> = 614656.</p><p>Find <i>a</i><sub>30</sub>.</p>",
    "folder": "digit-power-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digit power sum"
});

db.questions.insert({
    "details": "<p><div align=\"center\"><img src=\"project/images/p_315_clocks.gif\"/></div></p><p>Sam and Max are asked to transform two digital clocks into two \"digital root\" clocks.<br/>A digital root clock is a digital clock that calculates digital roots step by step.</p><p>When a clock is fed a number, it will show it and then it will start the calculation, showing all the intermediate values until it gets to the result.<br/>For example, if the clock is fed the number 137, it will show: \"<b>137</b>\" <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> \"<b>11</b>\" <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> \"<b>2</b>\" and then it will go black, waiting for the next number.</p><p>Every digital number consists of some light segments: three horizontal (top, middle, bottom) and four vertical (top-left, top-right, bottom-left, bottom-right).<br/>Number \"<b>1</b>\" is made of vertical top-right and bottom-right, number \"<b>4</b>\" is made by middle horizontal and vertical top-left, top-right and bottom-right. Number \"<b>8</b>\" lights them all.</p><p>The clocks consume energy only when segments are turned on/off.<br/>To turn on a \"<b>2</b>\" will cost 5 transitions, while a \"<b>7</b>\" will cost only 4 transitions.</p><p>Sam and Max built two different clocks.</p><p>Sam's clock is fed e.g. number 137: the clock shows \"<b>137</b>\", then the panel is turned off, then the next number (\"<b>11</b>\") is turned on, then the panel is turned off again and finally the last number (\"<b>2</b>\") is turned on and, after some time, off.<br/>For the example, with number 137, Sam's clock requires:<br/><table><tr><td>\"<b>137</b>\"</td><td>:</td><td>(2 + 5 + 4) <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 22 transitions (\"<b>137</b>\" on/off).</td></tr><tr><td>\"<b>11</b>\"</td><td>:</td><td>(2 + 2) <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 8 transitions (\"<b>11</b>\" on/off).</td></tr><tr><td>\"<b>2</b>\"</td><td>:</td><td>(5) <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 10 transitions (\"<b>2</b>\" on/off).</td></tr></table>For a grand total of 40 transitions.</p><p>Max's clock works differently. Instead of turning off the whole panel, it is smart enough to turn off only those segments that won't be needed for the next number.<br/>For number 137, Max's clock requires:<br/><table><tr><td>\"<b>137</b>\"<br/><br/></td><td>:<br/><br/></td><td>2 + 5 + 4 = 11 transitions (\"<b>137</b>\" on)<br/>7 transitions (to turn off the segments that are not needed for number \"<b>11</b>\").</td></tr><tr><td>\"<b>11</b>\"<br/><br/><br/></td><td>:<br/><br/><br/></td><td>0 transitions (number \"<b>11</b>\" is already turned on correctly)<br/>3 transitions (to turn off the first \"<b>1</b>\" and the bottom part of the second \"<b>1</b>\"; <br/>the top part is common with number \"<b>2</b>\").</td></tr><tr><td>\"<b>2</b>\"<br/><br/></td><td>:<br/><br/></td><td>4 tansitions (to turn on the remaining segments in order to get a \"<b>2</b>\")<br/>5 transitions (to turn off number \"<b>2</b>\").</td></tr></table>For a grand total of 30 transitions.</p><p>Of course, Max's clock consumes less power than Sam's one.<br/>The two clocks are fed all the prime numbers between A = 10<sup>7</sup> and B = 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>7</sup>. <br/>Find the difference between the total number of transitions needed by Sam's clock and that needed by Max's one.</p>",
    "folder": "digital-root-clocks",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digital root clocks"
});

db.questions.insert({
    "details": "<p>A composite number can be factored many different ways.  For instance, not including multiplication by one, 24 can be factored in 7 distinct ways:</p><div style=\"margin-left:50px;\">24 = 2x2x2x3<br/>24 = 2x3x4<br/>24 = 2x2x6<br/>24 = 4x6<br/>24 = 3x8<br/>24 = 2x12<br/>24 = 24</div><p>Recall that the digital root of a number, in base 10, is found by adding together the digits of that number, and repeating that process until a number is arrived at that is less than 10.  Thus the digital root of 467 is 8.</p><p>We shall call a Digital Root Sum (DRS) the sum of the digital roots of the individual factors of our number.<br/> The chart below demonstrates all of the DRS values for 24.</p><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr><th>Factorisation</th><th>Digital Root Sum</th></tr><tr><td><div style=\"margin-left:20px;\">2x2x2x3</div></td><td><div style=\"text-align:center;\">9</div></td></tr><tr><td><div style=\"margin-left:20px;\">2x3x4</div></td><td><div style=\"text-align:center;\">9</div></td></tr><tr><td><div style=\"margin-left:20px;\">2x2x6</div></td><td><div style=\"text-align:center;\">10</div></td></tr><tr><td><div style=\"margin-left:20px;\">4x6</div></td><td><div style=\"text-align:center;\">10</div></td></tr><tr><td><div style=\"margin-left:20px;\">3x8</div></td><td><div style=\"text-align:center;\">11</div></td></tr><tr><td><div style=\"margin-left:20px;\">2x12</div></td><td><div style=\"text-align:center;\">5</div></td></tr><tr><td><div style=\"margin-left:20px;\">24</div></td><td><div style=\"text-align:center;\">6</div></td></tr></table><p>The maximum Digital Root Sum  of 24 is 11.<br/>The function mdrs(<var>n</var>) gives the maximum Digital Root Sum of <var>n</var>. So  mdrs(24)=11.<br/>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>mdrs(<var>n</var>) for 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1,000,000.</p>",
    "folder": "digital-root-sums-of-factorisa",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digital root sums of factorisations.\r\n"
});

db.questions.insert({
    "details": "<p>How many integers 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> &lt; 10<sup>18</sup> have the property that the sum of the digits of <var>n</var> equals the sum of digits of 137<var>n</var>?</p>",
    "folder": "digital-signature",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Digital Signature"
});

db.questions.insert({
    "details": "<p>Consider quadratic Diophantine equations of the form:</p><p style=\"text-align:center;\"><i>x</i><sup>2</sup> \u2013 D<i>y</i><sup>2</sup> = 1</p><p>For example, when D=13, the minimal solution in <i>x</i> is 649<sup>2</sup> \u2013 13<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>180<sup>2</sup> = 1.</p><p>It can be assumed that there are no solutions in positive integers when D is square.</p><p>By finding minimal solutions in <i>x</i> for D ={2, 3, 5, 6, 7}, we obtain the following:</p><p style=\"margin-left:20px;\">3<sup>2</sup> \u2013 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup>2</sup> = 1<br/>2<sup>2</sup> \u2013 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1<sup>2</sup> = 1<br/><span style=\"color:#dd0000;font-weight:bold;\">9</span><sup>2</sup> \u2013 5<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4<sup>2</sup> = 1<br/>5<sup>2</sup> \u2013 6<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup>2</sup> = 1<br/>8<sup>2</sup> \u2013 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<sup>2</sup> = 1</p><p>Hence, by considering minimal solutions in <i>x</i> for D <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 7, the largest <i>x</i> is obtained when D=5.</p><p>Find the value of D <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000 in minimal solutions of <i>x</i> for which the largest value of <i>x</i> is obtained.</p>",
    "folder": "diophantine-equation",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Diophantine equation"
});

db.questions.insert({
    "details": "<p>In the following equation <var>x</var>, <var>y</var>, and <var>n</var> are positive integers.</p><div style=\"text-align:center;\"><table align=\"center\"><tr><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> <var>x</var></div></td><td> + </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> <var>y</var></div></td><td> = </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> <var>n</var></div></td></tr></table></div><p>For <var>n</var> = 4 there are exactly three distinct solutions:</p><div style=\"text-align:center;\"><table align=\"center\"><tr><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 5</div></td><td> + </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 20</div></td><td> = </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 4</div></td></tr><tr><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 6</div></td><td> + </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 12</div></td><td> = </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 4</div></td></tr><tr><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 8</div></td><td> + </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 8</div></td><td> = </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> 4</div></td></tr></table></div><p>What is the least value of <var>n</var> for which the number of distinct solutions exceeds one-thousand?</p><p class=\"info\">NOTE: This problem is an easier version of problem <a href=\"index.php?section=problems&amp;id=110\">110</a>; it is strongly advised that you solve this one first.</p>",
    "folder": "diophantine-reciprocals-i",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Diophantine reciprocals I"
});

db.questions.insert({
    "details": "<p>In the following equation <var>x</var>, <var>y</var>, and <var>n</var> are positive integers.</p><div style=\"text-align:center;\"><table align=\"center\"><tr><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> <var>x</var></div></td><td> + </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> <var>y</var></div></td><td> = </td><td><div style=\"text-align:center;\">1<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"15\"/><br/> <var>n</var></div></td></tr></table></div><p>It can be verified that when <var>n</var> = 1260 there are 113 distinct solutions and this is the least value of <var>n</var> for which the total number of distinct solutions exceeds one hundred.</p><p>What is the least value of <var>n</var> for which the number of distinct solutions exceeds four million?</p><p class=\"info\">NOTE: This problem is a much more difficult version of problem <a href=\"index.php?section=problems&amp;id=108\">108</a> and as it is well beyond the limitations of a brute force approach it requires a clever implementation.</p>",
    "folder": "diophantine-reciprocals-ii",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Diophantine reciprocals II"
});

db.questions.insert({
    "details": "<p>A bag contains one red disc and one blue disc. In a game of chance a player takes a disc at random and its colour is noted. After each turn the disc is returned to the bag, an extra red disc is added, and another disc is taken at random.</p><p>The player pays \u00a31 to play and wins if they have taken more blue discs than red discs at the end of the game.</p><p>If the game is played for four turns, the probability of a player winning is exactly 11/120, and so the maximum prize fund the banker should allocate for winning in this game would be \u00a310 before they would expect to incur a loss. Note that any payout will be a whole number of pounds and also includes the original \u00a31 paid to play the game, so in the example given the player actually wins \u00a39.</p><p>Find the maximum prize fund that should be allocated to a single game in which fifteen turns are played.</p>",
    "folder": "disc-game-prize-fund",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Disc game prize fund"
});

db.questions.insert({
    "details": "<p>Consider a honey bee's honeycomb where each cell is a perfect regular hexagon with side length 1.</p><div align=\"center\"><img src=\"project/images/p_354_bee_honeycomb.png\"/></div><p>One particular cell is occupied by the queen bee.<br/>For a positive real number <var>L</var>, let B(<var>L</var>) count the cells with distance <var>L</var> from the queen bee cell (all distances are measured from centre to centre); you may assume that the honeycomb is large enough to accommodate for any distance we wish to consider. <br/>For example, B(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3) = 6, B(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>21) = 12 and B(111 111 111) = 54.</p><p>Find the number of <var>L</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5\u00b710<sup>11</sup> such that B(<var>L</var>) = 450.</p>",
    "folder": "distances-in-a-bees-honeycomb",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Distances in a bee's honeycomb "
});

db.questions.insert({
    "details": "<p>Consider all lattice points (a,b,c) with 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> a,b,c <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N.</p><p>From the origin O(0,0,0) all lines are drawn to the other lattice points.<br/>Let D(N) be the number of <i>distinct</i> such lines.</p><p>You are given that D(1 000 000) = 831909254469114121.</p><p>Find D(10<sup>10</sup>). Give as your answer the first nine digits followed by the last nine digits.</p>",
    "folder": "distinct-lines",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Distinct Lines"
});

db.questions.insert({
    "details": "<p>Consider all integer combinations of <i>a</i><sup><i>b</i></sup> for 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>a</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5 and 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>b</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5:</p><blockquote>2<sup>2</sup>=4, 2<sup>3</sup>=8, 2<sup>4</sup>=16, 2<sup>5</sup>=32<br/>3<sup>2</sup>=9, 3<sup>3</sup>=27, 3<sup>4</sup>=81, 3<sup>5</sup>=243<br/>4<sup>2</sup>=16, 4<sup>3</sup>=64, 4<sup>4</sup>=256, 4<sup>5</sup>=1024<br/>5<sup>2</sup>=25, 5<sup>3</sup>=125, 5<sup>4</sup>=625, 5<sup>5</sup>=3125<br/></blockquote><p>If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:</p><p style=\"text-align:center;\">4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125</p><p>How many distinct terms are in the sequence generated by <i>a</i><sup><i>b</i></sup> for 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>a</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 and 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>b</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100?</p>",
    "folder": "distinct-powers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Distinct powers"
});

db.questions.insert({
    "details": "<p>The first two consecutive numbers to have two distinct prime factors are:</p><p style=\"margin-left:100px;\">14 = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7<br/>15 = 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5</p><p>The first three consecutive numbers to have three distinct prime factors are:</p><p style=\"margin-left:100px;\">644 = 2\u00b2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 23<br/>645 = 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 43<br/>646 = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 17 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 19.</p><p>Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?</p>",
    "folder": "distinct-primes-factors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Distinct primes factors"
});

db.questions.insert({
    "details": "<p>Let f<sub>5</sub>(<var>n</var>) be the largest integer <var>x</var> for which 5<sup><var>x</var></sup> divides <var>n</var>.<br/>For example, f<sub>5</sub>(625000) = 7.</p><p>Let T<sub>5</sub>(<var>n</var>) be the number of integers <var>i</var> which satisfy f<sub>5</sub>((2\u00b7<var>i</var>-1)!) &lt; 2\u00b7f<sub>5</sub>(<var>i</var>!) and 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>.<br/>It can be verified that T<sub>5</sub>(10<sup>3</sup>) = 68 and T<sub>5</sub>(10<sup>9</sup>) = 2408210.</p><p>Find T<sub>5</sub>(10<sup>18</sup>).</p>",
    "folder": "divisibility-comparison-betwee",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Divisibility comparison between factorials"
});

db.questions.insert({
    "details": "<p>For each integer <var>p</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 coprime to 10 there is a positive <em>divisibility multiplier</em> <var>m</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>p</var> which preserves divisibility by <var>p</var> for the following function on any positive integer, <var>n</var>:</p><p><var>f</var>(<var>n</var>) = (all but the last digit of <var>n</var>) + (the last digit of <var>n</var>) * <var>m</var></p><p>That is, if <var>m</var> is the divisibility multiplier for <var>p</var>, then <var>f</var>(<var>n</var>) is divisible by <var>p</var> if and only if <var>n</var> is divisible by <var>p</var>.</p><p>(When <var>n</var> is much larger than <var>p</var>, <var>f</var>(<var>n</var>) will be less than <var>n</var> and repeated application of <var>f</var> provides a multiplicative divisibility test for <var>p</var>.)</p><p>For example, the divisibility multiplier for 113 is 34.</p><p><var>f</var>(76275) = 7627 + 5 * 34 = 7797 : 76275 and 7797 are both divisible by 113<br/><var>f</var>(12345) = 1234 + 5 * 34 = 1404 : 12345 and 1404 are both not divisible by 113</p><p>The sum of the divisibility multipliers for the primes that are coprime to 10 and less than 1000 is 39517. What is the sum of the divisibility multipliers for the primes that are coprime to 10 and less than 10<sup>7</sup>?</p>",
    "folder": "divisibility-multipliers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Divisibility Multipliers"
});

db.questions.insert({
    "details": "<p>For a positive integer <var>n</var>, let \u03c3<sub>2</sub>(<var>n</var>) be the sum of the squares of its divisors. For example,</p><div style=\"text-align:center;\">\u03c3<sub>2</sub>(10) = 1 + 4 + 25 + 100 = 130.</div><p>Find the sum of all <var>n</var>, 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 64,000,000 such that \u03c3<sub>2</sub>(<var>n</var>) is a perfect square.</p>",
    "folder": "divisor-square-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Divisor Square Sum"
});

db.questions.insert({
    "details": "<p>The decimal number, 585 = 1001001001<sub>2</sub> (binary), is palindromic in both bases.</p><p>Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.</p><p class=\"info\">(Please note that the palindromic number, in either base, may not include leading zeros.)</p>",
    "folder": "double-base-palindromes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Double-base palindromes"
});

db.questions.insert({
    "details": "<p>Jeff eats a pie in an unusual way.<br/>The pie is circular. He starts with slicing an initial cut in the pie along a radius.<br/>While there is at least a given fraction <var>F</var> of pie left, he performs the following procedure:<br/>- He makes two slices from the pie centre to any point of what is remaining of the pie border, any point on the remaining pie border equally likely. This will divide the remaining pie into three pieces.<br/> - Going counterclockwise from the initial cut, he takes the first two pie pieces and eats them.<br/>When less than a fraction <var>F</var> of pie remains, he does not repeat this procedure. Instead, he eats all of the remaining pie.</p><p align=\"center\"><img src=\"project/images/p_394_eatpie.gif\"/></p>",
    "folder": "eating-pie",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Eating pie"
});

db.questions.insert({
    "details": "<p>The most naive way of computing <i>n</i><sup>15</sup> requires fourteen multiplications:</p><p style=\"margin-left:100px;\"><i>n</i> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> ... <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> = <i>n</i><sup>15</sup></p><p>But using a \"binary\" method you can compute it in six multiplications:</p><p style=\"margin-left:100px;\"><i>n</i> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> = <i>n</i><sup>2</sup><br/><i>n</i><sup>2</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>2</sup> = <i>n</i><sup>4</sup><br/><i>n</i><sup>4</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>4</sup> = <i>n</i><sup>8</sup><br/><i>n</i><sup>8</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>4</sup> = <i>n</i><sup>12</sup><br/><i>n</i><sup>12</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>2</sup> = <i>n</i><sup>14</sup><br/><i>n</i><sup>14</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> = <i>n</i><sup>15</sup></p><p>However it is yet possible to compute it in only five multiplications:</p><p style=\"margin-left:100px;\"><i>n</i> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> = <i>n</i><sup>2</sup><br/><i>n</i><sup>2</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> = <i>n</i><sup>3</sup><br/><i>n</i><sup>3</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>3</sup> = <i>n</i><sup>6</sup><br/><i>n</i><sup>6</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>6</sup> = <i>n</i><sup>12</sup><br/><i>n</i><sup>12</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i><sup>3</sup> = <i>n</i><sup>15</sup></p><p>We shall define m(<i>k</i>) to be the minimum number of multiplications to compute <i>n</i><sup><i>k</i></sup>; for example m(15) = 5.</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>k</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 200, find <span style=\"font-family:times new roman;font-size:13pt;\"><img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/></span> m(<i>k</i>).</p>",
    "folder": "efficient-exponentiation",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Efficient exponentiation"
});

db.questions.insert({
    "details": "<p>For any triangle <var>T</var> in the plane, it can be shown that there is a unique ellipse with largest area that is completely inside <var>T</var>.<p align=\"center\"><img src=\"project/images/p_385_ellipsetriangle.png\"/></p><p>For a given <var>n</var>, consider triangles <var>T</var> such that:<br/>- the vertices of <var>T</var> have integer coordinates with absolute value <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n, and <br/>- the <b>foci</b><sup>1</sup> of the largest-area ellipse inside <var>T</var> are (<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>13,0) and (-<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>13,0).<br/>Let A(<var>n</var>) be the sum of the areas of all such triangles.</p><p>For example, if <var>n</var> = 8, there are two such triangles. Their vertices are (-4,-3),(-4,3),(8,0) and (4,3),(4,-3),(-8,0), and the area of each triangle is 36. Thus A(8) = 36 + 36 = 72.</p><p>It can be verified that A(10) = 252, A(100) = 34632 and A(1000) = 3529008.</p><p>Find A(1 000 000 000).</p><p><sup>1</sup>The <b>foci</b> (plural of <b>focus</b>) of an ellipse are two points A and B such that for every point P on the boundary of the ellipse, <var>AP</var> + <var>PB</var> is constant.</p></p>",
    "folder": "ellipses-inside-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Ellipses inside triangles"
});

db.questions.insert({
    "details": "<p>A rectilinear grid is an orthogonal grid where the spacing between the gridlines does not have to be equidistant.<br/>An example of such grid is logarithmic graph paper.</p><p>Consider rectilinear grids in the Cartesian coordinate system with the following properties:<br/><ul><li>The gridlines are parallel to the axes of the Cartesian coordinate system.</li><li>There are N+2 vertical and N+2 horizontal gridlines. Hence there are (N+1) x (N+1) rectangular cells.</li><li>The equations of the two outer vertical gridlines are x = -1 and x = 1.</li><li>The equations of the two outer horizontal gridlines are y = -1 and y = 1.</li><li>The grid cells are colored red if they overlap with the <dfn title=\"The unit circle is the circle that has radius 1 and is centered at the origin\">unit circle</dfn>, black otherwise.</li></ul>For this problem we would like you to find the postions of the remaining N inner horizontal and N inner vertical gridlines so that the area occupied by the red cells is minimized.</p><p>E.g. here is a picture of the solution for N = 10:<p align=\"center\"><img src=\"project/images/p392_gridlines.png\"/></p></p>The area occupied by the red cells for N = 10 rounded to 10 digits behind the decimal point is 3.3469640797.",
    "folder": "enmeshed-unit-circle",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Enmeshed unit circle"
});

db.questions.insert({
    "details": "<p>Let C(<var>x</var>,<var>y</var>) be a circle passing through the points (<var>x</var>,\u2009<var>y</var>), (<var>x</var>,\u2009<var>y</var>+1), (<var>x</var>+1,\u2009<var>y</var>) and (<var>x</var>+1,\u2009<var>y</var>+1).</p><p>For positive integers m and n, let E(<var>m</var>,<var>n</var>) be a configuration which consists of the <var>m</var>\u00b7<var>n</var> circles:<br/{ C(<var>x</var>,<var>y</var>): 0\u2009\u2264\u2009<var>x</var>\u2009&lt;\u2009<var>m</var>, 0\u2009\u2264\u2009<var>y</var>\u2009&lt;\u2009<var>n</var>, <var>x</var> and <var>y</var> are integers }</p><p>An Eulerian cycle on E(<var>m</var>,<var>n</var>) is a closed path that passes through each arc exactly once.<br/>Many such paths are possible on E(<var>m</var>,<var>n</var>), but we are only interested in those which are not self-crossing: A non-crossing path just touches itself at lattice points, but it never crosses itself.</p><p>The image below shows E(3,3) and an example of an Eulerian non-crossing path.<br/><div align=\"center\"><img src=\"project/images/p_289_euler.gif\"/></div></p><p>Let L(<var>m</var>,<var>n</var>) be the number of Eulerian non-crossing paths on E(<var>m</var>,<var>n</var>).<br/>For example, L(1,2)\u2009=\u20092, L(2,2)\u2009=\u200937 and L(3,3)\u2009=\u2009104290.</p><p>Find L(6,10) mod 10<sup>10</sup>.</p>",
    "folder": "eulerian-cycles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Eulerian Cycles"
});

db.questions.insert({
    "details": "An infinite sequence of real numbers <var>a</var>(<var>n</var>) is defined for all integers <var>n</var> as follows:<div align=\"center\"><img src=\"project/images/p_330_formula.gif\"/></div><p>For example,<br/><table class=\"formula\"><tr><td><var>a</var>(0) = </td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">1!</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">2!</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">3!</td></tr></table></td><td>+ ... = e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 </td></tr></table><table class=\"formula\"><tr><td><var>a</var>(1) = </td><td><table class=\"frac\"><tr><td>e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1</td></tr><tr><td class=\"overline\">1!</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">2!</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">3!</td></tr></table></td><td>+ ... = 2e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 </td></tr></table><table class=\"formula\"><tr><td><var>a</var>(2) = </td><td><table class=\"frac\"><tr><td>2e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3</td></tr><tr><td class=\"overline\">1!</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1</td></tr><tr><td class=\"overline\">2!</td></tr></table></td><td>+</td><td><table class=\"frac\"><tr><td>1</td></tr><tr><td class=\"overline\">3!</td></tr></table></td><td>+ ... =</td><td><table class=\"frac\"><tr><td>7</td></tr><tr><td class=\"overline\">2</td></tr></table></td><td>e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 6 </td></tr></table>with e = 2.7182818... being Euler's constant.</p><p><table class=\"formula\"><tr><td>It can be shown that <var>a</var>(<var>n</var>) is of the form     </td><td><table class=\"frac\"><tr><td>A(<var>n</var>) e + B(<var>n</var>)</td></tr><tr><td class=\"overline\"><var>n</var>!</td></tr></table></td><td>for integers A(<var>n</var>) and B(<var>n</var>).     </td></tr></table><table class=\"formula\"><tr><td>For example <var>a</var>(10) =     </td><td><table class=\"frac\"><tr><td>328161643 e <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 652694486</td></tr><tr><td class=\"overline\">10!</td></tr></table></td><td>.</td></tr></table></p><p>Find A(10<sup>9</sup>) + B(10<sup>9</sup>) and give your answer mod 77 777 777.</p>",
    "folder": "eulers-number",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Euler's Number"
});

db.questions.insert({
    "details": "<p>Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:</p><p style=\"text-align:center;\">1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</p><p>By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.</p>Note: This problem has been changed recently, please check that you are using the right parameters.",
    "folder": "even-fibonacci-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Even Fibonacci numbers"
});

db.questions.insert({
    "details": "<p>A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"379\" src=\"project/images/p_154_pyramid.gif\" width=\"488\"/></div><p>Then, we calculate the number of paths leading from the apex to each position:</p><p>A path starts at the apex and progresses downwards to any of the three spheres directly below the current position.</p><p>Consequently, the number of paths to reach a certain position is the sum of the numbers immediately above it (depending on the position, there are up to three numbers above it).</p><p>The result is <i>Pascal's pyramid</i> and the numbers at each level <var>n</var> are the coefficients of the trinomial expansion (<var>x + y + z</var>)<sup><var>n</var></sup>.</p><p>How many coefficients in the expansion of (<var>x + y + z</var>)<sup>200000</sup> are multiples of 10<sup>12</sup>?</p>",
    "folder": "exploring-pascals-pyramid",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Exploring Pascal's pyramid."
});

db.questions.insert({
    "details": "<p>We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:</p><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a01</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a01</td><td>\u00a0</td><td>\u00a01</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a01</td><td>\u00a0</td><td>\u00a02</td><td>\u00a0</td><td>\u00a01</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a01</td><td>\u00a0</td><td>\u00a03</td><td>\u00a0</td><td>\u00a03</td><td>\u00a0</td><td>\u00a01</td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a01</td><td>\u00a0</td><td>\u00a04</td><td>\u00a0</td><td>\u00a06</td><td>\u00a0</td><td>\u00a04</td><td>\u00a0</td><td>\u00a01</td></tr><tr><td>\u00a0</td><td>\u00a01</td><td>\u00a0</td><td>\u00a05</td><td>\u00a0</td><td>10</td><td>\u00a0</td><td>10</td><td>\u00a0</td><td>\u00a05</td><td>\u00a0</td><td>\u00a01</td></tr><tr><td>1</td><td>\u00a0</td><td>\u00a06</td><td>\u00a0</td><td>15</td><td>\u00a0</td><td>20</td><td>\u00a0</td><td>15</td><td>\u00a0</td><td>\u00a06</td><td>\u00a0</td><td>\u00a01</td></tr></table><p>However, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are <i>not</i> divisible by 7.</p><p>Find the number of entries which are <i>not</i> divisible by 7 in the first one billion (10<sup>9</sup>) rows of Pascal's triangle.</p>",
    "folder": "exploring-pascals-triangle",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Exploring Pascal's triangle."
});

db.questions.insert({
    "details": "<p>Taking three different letters from the 26 letters of the alphabet, character strings of length three can be formed.<br/>Examples are 'abc', 'hat' and 'zyx'.<br/>When we study these three examples we see that for 'abc' two characters come lexicographically after its neighbour to the left.<br/> For 'hat' there is exactly one character that comes lexicographically after its neighbour to the left. For 'zyx' there are zero characters that come lexicographically after its neighbour to the left.<br/>In all there are 10400 strings of length 3 for which exactly one character comes lexicographically after its neighbour to the left.</p><p>We now consider strings of <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 26 different characters from the alphabet.<br/> For every <var>n</var>, p(<var>n</var>) is the number of strings of length <var>n</var> for which exactly one character comes lexicographically after its neighbour to the left.</p><p>What is the maximum value of p(<var>n</var>)?</p>",
    "folder": "exploring-strings-for-which-on",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Exploring strings for which only one character comes lexicographically after its neighbour to the left."
});

db.questions.insert({
    "details": "<p><i>n</i>! means <i>n</i> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> (<i>n</i> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1) <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> ... <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1</p><p>For example, 10! = 10 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 9 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> ... <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 = 3628800,<br/>and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.</p><p>Find the sum of the digits in the number 100!</p>",
    "folder": "factorial-digit-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Factorial digit sum"
});

db.questions.insert({
    "details": "<p>For any N, let f(N) be the last five digits before the trailing zeroes in N!.<br/>For example,</p><p style=\"margin-left:50px;\">9! = 362880 so f(9)=36288<br/>10! = 3628800 so f(10)=36288<br/>20! = 2432902008176640000 so f(20)=17664</p><p>Find f(1,000,000,000,000)</p>",
    "folder": "factorial-trailing-digits",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Factorial trailing digits"
});

db.questions.insert({
    "details": "<p>Let N(<var>i</var>) be the smallest integer <var>n</var> such that <var>n</var>! is divisible by (<var>i</var>!)<sup>1234567890</sup></p><p>Let S(<var>u</var>)=<img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>N(<var>i</var>) for 10 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>u</var>.</p><p>S(1000)=614538266565663.</p><p>Find S(1 000 000) mod 10<sup>18</sup>.</p>",
    "folder": "factorials-divisible-by-a-huge",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Factorials divisible by a huge integer"
});

db.questions.insert({
    "details": "<p>Let <var>n</var> be a positive integer. An integer triple (<var>a</var>, <var>b</var>, <var>c</var>) is called a <i>factorisation triple</i> of <var>n</var> if:<ul><li> 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>c</var><li> <var>a</var>\u00b7<var>b</var>\u00b7<var>c</var> = <var>n</var>.</li></li></ul></p><p>Define <var>f</var>(<var>n</var>) to be <var>a</var> + <var>b</var> + <var>c</var> for the factorisation triple (<var>a</var>, <var>b</var>, <var>c</var>) of <var>n</var> which minimises <var>c</var> / <var>a</var>. One can show that this triple is unique.</p><p>For example, <var>f</var>(165) = 19, <var>f</var>(100100) = 142 and <var>f</var>(20!) = 4034872.</p><p>Find <var>f</var>(43!).</p>",
    "folder": "factorisation-triples",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Factorisation triples"
});

db.questions.insert({
    "details": "<p>Consider the infinite polynomial series A<sub>F</sub>(<i>x</i>) = <i>x</i>F<sub>1</sub> + <i>x</i><sup>2</sup>F<sub>2</sub> + <i>x</i><sup>3</sup>F<sub>3</sub> + ..., where F<sub><i>k</i></sub> is the <i>k</i>th term in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ... ; that is, F<sub><i>k</i></sub> = F<sub><i>k</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</sub> + F<sub><i>k</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2</sub>, F<sub>1</sub> = 1 and F<sub>2</sub> = 1.</p><p>For this problem we shall be interested in values of <i>x</i> for which A<sub>F</sub>(<i>x</i>) is a positive integer.</p><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td>Surprisingly A<sub>F</sub>(1/2)</td><td>\u00a0=\u00a0</td><td>(1/2).1 + (1/2)<sup>2</sup>.1 + (1/2)<sup>3</sup>.2 + (1/2)<sup>4</sup>.3 + (1/2)<sup>5</sup>.5 + ...</td></tr><tr><td>\u00a0</td><td>\u00a0=\u00a0</td><td>1/2 + 1/4 + 2/8 + 3/16 + 5/32 + ...</td></tr><tr><td>\u00a0</td><td>\u00a0=\u00a0</td><td>2</td></tr></table><p>The corresponding values of <i>x</i> for the first five natural numbers are shown below.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td><b><i>x</i></b></td><td width=\"50\"><b>A<sub>F</sub>(<i>x</i>)</b></td></tr><tr><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</td><td>1</td></tr><tr><td>1/2</td><td>2</td></tr><tr><td>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>13<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2)/3</td><td>3</td></tr><tr><td>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>89<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>5)/8</td><td>4</td></tr><tr><td>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>34<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3)/5</td><td>5</td></tr></table></div><p>We shall call A<sub>F</sub>(<i>x</i>) a golden nugget if <i>x</i> is rational, because they become increasingly rarer; for example, the 10th golden nugget is 74049690.</p><p>Find the 15th golden nugget.</p>",
    "folder": "fibonacci-golden-nuggets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Fibonacci golden nuggets"
});

db.questions.insert({
    "details": "<p>A <b>Fibonacci tree</b> is a binary tree recursively defined as:<ul><li>T(0) is the empty tree.<li>T(1) is the binary tree with only one node.<li>T(<var>k</var>) consists of a root node that has T(<var>k</var>-1) and T(<var>k</var>-2) as children.</li></li></li></ul></p><p>On such a tree two players play a take-away game. On each turn a player selects a node and removes that node along with the subtree rooted at that node.<br/>The player who is forced to take the root node of the entire tree loses.<p><p>Here are the winning moves of the first player on the first turn for T(<var>k</var>) from <var>k</var>=1 to <var>k</var>=6.<p align=\"center\"><img src=\"project/images/p400_winning.png\"/></p></p></p>Let <var>f</var>(<var>k</var>) be the number of winning moves of the first player (i.e. the moves for which the second player has no winning strategy) on the first turn of the game when this game is played on T(<var>k</var>).</p><p>For example, <var>f</var>(5) = 1 and <var>f</var>(10) = 17.</p><p>Find <var>f</var>(10000). Give the last 18 digits of your answer.</p>",
    "folder": "fibonacci-tree-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Fibonacci tree game"
});

db.questions.insert({
    "details": "<p>For any two strings of digits, A and B, we define F<sub>A,B</sub> to be the sequence (A,B,AB,BAB,ABBAB,...) in which each term is the concatenation of the previous two.</p><p>Further, we define D<sub>A,B</sub>(<var>n</var>) to be the <var>n</var><sup>th</sup> digit in the first term of F<sub>A,B</sub> that contains at least <var>n</var> digits.</p><p>Example:</p><p>Let A=1415926535, B=8979323846. We wish to find D<sub>A,B</sub>(35), say.</p><p>The first few terms of F<sub>A,B</sub> are:<br/>1415926535<br/>8979323846<br/>14159265358979323846<br/>897932384614159265358979323846<br/>1415926535897932384689793238461415<span style=\"color: #FF0000\"><b>9</b></span>265358979323846<br/></p><p>Then D<sub>A,B</sub>(35) is the 35<sup>th</sup> digit in the fifth term, which is 9.</p><p>Now we use for A the first 100 digits of \u03c0 behind the decimal point:</p><p>14159265358979323846264338327950288419716939937510 <br/>58209749445923078164062862089986280348253421170679 </p><p>and for B the next hundred digits:</p><p>82148086513282306647093844609550582231725359408128 <br/>48111745028410270193852110555964462294895493038196 .</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><sub><var>n</var> = 0,1,...,17</sub> \u00a0 10<sup><var>n</var></sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> D<sub>A,B</sub>((127+19<var>n</var>)<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>7<sup><var>n</var></sup>) .</p>",
    "folder": "fibonacci-words",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Fibonacci Words"
});

db.questions.insert({
    "details": "<p>We shall define a sqube to be a number of the form, <var>p</var><sup>2</sup><var>q</var><sup>3</sup>, where <var>p</var> and <var>q</var> are distinct primes.<br/>For example, 200 = 5<sup>2</sup>2<sup>3</sup> or 120072949 = 23<sup>2</sup>61<sup>3</sup>.</p><p>The first five squbes are 72, 108, 200, 392, and 500.</p><p>Interestingly, 200 is also the first number for which you cannot change any single digit to make a prime; we shall call such numbers, prime-proof. The next prime-proof sqube which contains the contiguous sub-string \"200\" is 1992008.</p><p>Find the 200th prime-proof sqube containing the contiguous sub-string \"200\".</p>",
    "folder": "find-the-200th-prime-proof-squ",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Find the 200th prime-proof sqube containing the contiguous sub-string \"200\""
});

db.questions.insert({
    "details": "<p>Take the number 6 and multiply it by each of 1273 and 9854:</p><p style=\"margin-left:50px;\">6 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1273 =  7638<br/>6 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 9854 = 59124</p><p>By concatenating these products we get the 1 to 9 pandigital 763859124. We will call 763859124 the \"concatenated product of 6 and (1273,9854)\". Notice too, that the concatenation of the input numbers, 612739854, is also 1 to 9 pandigital.</p><p>The same can be done for 0 to 9 pandigital numbers.</p><p>What is the largest 0 to 9 pandigital 10-digit concatenated product of an integer with two or more other integers, such that the concatenation of the input numbers is also a 0 to 9 pandigital 10-digit number?</p>",
    "folder": "find-the-largest-0-to-9-pandig",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Find the largest 0 to 9 pandigital that can be formed by concatenating products."
});

db.questions.insert({
    "details": "<p>For a positive integer <var>n</var>, let f(<var>n</var>) be the sum of the squares of the digits (in base 10) of <var>n</var>, e.g.</p><p style=\"margin-left:50px;\">f(3) = 3<sup>2</sup> = 9,<br/>f(25) = 2<sup>2</sup> + 5<sup>2</sup> = 4 + 25 = 29,<br/>f(442) = 4<sup>2</sup> + 4<sup>2</sup> + 2<sup>2</sup> = 16 + 16 + 4 = 36</p><p>Find the last nine digits of the sum of all <var>n</var>, 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>20</sup>, such that f(<var>n</var>) is a perfect square.</p>",
    "folder": "finding-numbers-for-which-the",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Finding numbers for which the sum of the squares of the digits is a square."
});

db.questions.insert({
    "details": "<p>A firecracker explodes at a height of 100 m above level ground. It breaks into a large number of very small fragments, which move in every direction; all of them have the same initial velocity of 20 m/s.</p><p>We assume that the fragments move without air resistance, in a uniform gravitational field with g=9.81 m/s<sup>2</sup>.</p><p>Find the volume (in m<sup>3</sup>) of the region through which the fragments move before reaching the ground. Give your answer rounded to four decimal places.</p>",
    "folder": "firecracker",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Firecracker"
});

db.questions.insert({
    "details": "<p>A 30<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>30 grid of squares contains 900 fleas, initially one flea per square.<br/>When a bell is rung, each flea jumps to an adjacent square at random (usually 4 possibilities, except for fleas on the edge of the grid or at the corners).</p><p>What is the expected number of unoccupied squares after 50 rings of the bell? Give your answer rounded to six decimal places.</p>",
    "folder": "flea-circus",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Flea Circus"
});

db.questions.insert({
    "details": "<p>Consider the number 3600. It is very special, because</p><div style=\"margin-left:200px;\">3600 = 48<sup>2</sup> + \u00a0\u00a0 \u00a036<sup>2</sup><br/><br/>3600 = 20<sup>2</sup> + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>40<sup>2</sup><br/><br/>3600 = 30<sup>2</sup> + 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>30<sup>2</sup><br/><br/>3600 = 45<sup>2</sup> + 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>15<sup>2</sup><br/><br/></div><p>Similarly, we find that 88201 = 99<sup>2</sup> + 280<sup>2</sup> = 287<sup>2</sup> + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>54<sup>2</sup> = 283<sup>2</sup> + 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>52<sup>2</sup> = 197<sup>2</sup> + 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>84<sup>2</sup>.</p><p>In 1747, Euler proved which numbers are representable as a sum of two squares.We are interested in the numbers <var>n</var> which admit representations of all of the following four types:</p><div style=\"margin-left:200px;\"><var>n</var> = <var>a<sub>1</sub></var><sup>2</sup> + \u00a0 <var>b<sub>1</sub></var><sup>2</sup><br/><br/><var>n</var> = <var>a<sub>2</sub></var><sup>2</sup> + 2 <var>b<sub>2</sub></var><sup>2</sup><br/><br/><var>n</var> = <var>a<sub>3</sub></var><sup>2</sup> + 3 <var>b<sub>3</sub></var><sup>2</sup><br/><br/><var>n</var> = <var>a<sub>7</sub></var><sup>2</sup> + 7 <var>b<sub>7</sub></var><sup>2</sup>,</div><p>where the <var>a</var><sub><var>k</var></sub> and <var>b</var><sub><var>k</var></sub> are positive integers.</p><p>There are 75373 such numbers that do not exceed 10<sup>7</sup>.<br/>How many such numbers are there that do not exceed 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>9</sup>?</p>",
    "folder": "four-representations-using-squ",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Four Representations using Squares"
});

db.questions.insert({
    "details": "<p>For any positive integer <var>k</var>, a finite sequence a<sub><var>i</var></sub> of fractions x<sub><var>i</var></sub>/y<sub><var>i</var></sub> is defined by:<br/>a<sub>1</sub> = 1/<var>k</var> and<br/>a<sub><var>i</var></sub> = (x<sub><var>i</var>-1</sub>+1)/(y<sub><var>i</var>-1</sub>-1) reduced to lowest terms for <var>i</var>&gt;1.<br/>When a<sub><var>i</var></sub> reaches some integer <var>n</var>, the sequence stops. (That is, when y<sub><var>i</var></sub>=1.)<br/>Define f(<var>k</var>) = <var>n</var>. <br/>For example, for <var>k</var> = 20:</p><p>1/20 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 2/19 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 3/18 = 1/6 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 2/5 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 3/4 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 4/3 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 5/2 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 6/1 = 6</p><p>So f(20) = 6.</p><p>Also f(1) = 1, f(2) = 2, f(3) = 1 and \u03a3f(<var>k</var><sup>3</sup>) = 118937 for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100.</p><p>Find \u03a3f(<var>k</var><sup>3</sup>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>6</sup>.</p>",
    "folder": "fractional-sequences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Fractional Sequences"
});

db.questions.insert({
    "details": "Define f(0)=1 and f(<var>n</var>) to be the number of ways to write <var>n</var> as a sum of powers of 2 where no power occurs more than twice. <br/><br/>For example, f(10)=5 since there are five different ways to express 10:<br/>10 = 8+2 = 8+1+1 = 4+4+2 = 4+2+2+1+1 = 4+4+1+1<br/><br/>It can be shown that for every fraction <var>p/q</var> (<var>p</var><img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>0, <var>q</var><img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>0) there exists at least one integer <var>n</var> such that<br/> f(<var>n</var>)/f(<var>n</var>-1)=<var>p/q</var>.<br/><br/>For instance, the smallest <var>n</var> for which f(<var>n</var>)/f(<var>n</var>-1)=13/17 is 241.<br/>The binary expansion of 241 is 11110001.<br/>Reading this binary number from the most significant bit to the least significant bit there are 4 one's, 3 zeroes and 1 one. We shall call the string 4,3,1 the <span style=\"font-style: italic\">Shortened Binary Expansion</span> of 241.<br/><br/>Find the Shortened Binary Expansion of the smallest <var>n</var> for which<br/> f(<var>n</var>)/f(<var>n</var>-1)=123456789/987654321.<br/><br/>Give your answer as comma separated integers, without any whitespaces.",
    "folder": "fractions-involving-the-number",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Fractions involving the number of different ways a number can be expressed as a sum of powers of 2. "
});

db.questions.insert({
    "details": "<p>Whenever Peter feels bored, he places some bowls, containing one bean each, in a circle. After this, he takes all the beans out of a certain bowl and drops them one by one in the bowls going clockwise. He repeats this, starting from the bowl he dropped the last bean in, until the initial situation appears again. For example with 5 bowls he acts as follows:</p><div align=\"center\"><img src=\"project/images/p_335_mancala.gif\"/></div><p>So with 5 bowls it takes Peter 15 moves to return to the initial situation.</p><p>Let <var>M</var>(<var>x</var>) represent the number of moves required to return to the initial situation, starting with <var>x</var> bowls. Thus, <var>M</var>(5) = 15. It can also be verified that <var>M</var>(100) = 10920.</p><p>Find <img src=\"project/images/p_335_sum.gif\" style=\"vertical-align:middle\"/><var>M</var>(2<sup><var>k</var></sup>+1). Give your answer modulo 7<sup>9</sup>.</p>",
    "folder": "gathering-the-beans",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Gathering the beans"
});

db.questions.insert({
    "details": "<p>A Hamming number is a positive number which has no prime factor larger than 5.<br/>So the first few Hamming numbers are 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15.<br/>There are 1105 Hamming numbers not exceeding 10<sup>8</sup>.</p><p>We will call a positive number a generalised Hamming number of type <var>n</var>, if it has no prime factor larger than <var>n</var>.<br/>Hence the Hamming numbers are the generalised Hamming numbers of type 5.</p><p>How many generalised Hamming numbers of type 100 are there which don't exceed 10<sup>9</sup>?</p>",
    "folder": "generalised-hamming-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Generalised Hamming Numbers"
});

db.questions.insert({
    "details": "<p>A <b>polygon</b> is a flat shape consisting of straight line segments that are joined to form a closed chain or circuit. A polygon consists of at least three sides and does not self-intersect.</p><p>A set S of positive numbers is said to <i>generate a polygon</i> P if:<ul><li> no two sides of P are the same length,<li> the length of every side of P is in S, and<li> S contains no other value.</li></li></li></ul></p><p>For example:<br/>The set{3, 4, 5} generates a polygon with sides 3, 4, and 5 (a triangle).<br/>The set{6, 9, 11, 24} generates a polygon with sides 6, 9, 11, and 24 (a quadrilateral).<br/>The sets{1, 2, 3} and{2, 3, 4, 9} do not generate any polygon at all.<br/></p><p>Consider the sequence s, defined as follows:<ul><li>s<sub>1</sub> = 1, s<sub>2</sub> = 2, s<sub>3</sub> = 3<li>s<sub><var>n</var></sub> = s<sub><var>n</var>-1</sub> + s<sub><var>n</var>-3</sub> for <var>n</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 3.</li></li></ul></p><p>Let U<sub><var>n</var></sub> be the set{s<sub>1</sub>, s<sub>2</sub>, ..., s<sub><var>n</var></sub>}. For example, U<sub>10</sub> ={1, 2, 3, 4, 6, 9, 13, 19, 28, 41}.<br/>Let f(<var>n</var>) be the number of subsets of U<sub><var>n</var></sub> which generate at least one polygon.<br/>For example, f(5) = 7, f(10) = 501 and f(25) = 18635853.</p><p>Find the last 9 digits of f(10<sup>18</sup>).</p>",
    "folder": "generating-polygons",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Generating polygons"
});

db.questions.insert({
    "details": "<p>Let us define a <i>geometric triangle</i> as an integer sided triangle with sides <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>c</var> so that its sides form a <b>geometric progression</b>, i.e. <var>b<sup>2</sup></var>\u00a0=\u00a0<var>a</var>\u00a0\u00b7\u00a0<var>c</var>\u00a0.\u00a0</p><p>An example of such a geometric triangle is the triangle with sides <var>a</var> = 144, <var>b</var> = 156 and <var>c</var> = 169.</p><p>There are 861805 geometric triangles with perimeter <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>6</sup> .</p><p>How many geometric triangles exist with perimeter <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2.5\u00b710<sup>13</sup> ?</p>",
    "folder": "geometric-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Geometric triangles\r\n"
});

db.questions.insert({
    "details": "<p>For integers <var>m</var>, <var>n</var> (0\u00a0<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0<var>n</var>\u00a0&lt;\u00a0<var>m</var>), let L(<var>m</var>,\u00a0<var>n</var>) be an <var>m</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>m</var> grid with the top-right <var>n</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>n</var> grid removed.</p><p>For example, L(5, 3) looks like this:</p><p><img src=\"project/images/p412_table53.png\"/></p><p>We want to number each cell of L(<var>m</var>,\u00a0<var>n</var>) with consecutive integers 1, 2, 3, ... such that the number in every cell is smaller than the number below it and to the left of it.</p><p>For example, here are two valid numberings of L(5,\u00a03):</p><p><img src=\"project/images/p412_tablenums.png\"/></p><p>Let LC(<var>m</var>, <var>n</var>) be the number of valid numberings of L(<var>m</var>, <var>n</var>).<br/>It can be verified that LC(3,\u00a00) = 42, LC(5,\u00a03) = 250250, LC(6,\u00a03) = 406029023400 and LC(10,\u00a05) mod 76543217 = 61251715.</p><p>Find LC(10000,\u00a05000) mod 76543217.</p>",
    "folder": "gnomon-numbering",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Gnomon numbering"
});

db.questions.insert({
    "details": "<p>It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.</p><p style=\"margin-left:10px;\">9 = 7 + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1<sup>2</sup><br/>15 = 7 + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup>2</sup><br/>21 = 3 + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<sup>2</sup><br/>25 = 7 + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<sup>2</sup><br/>27 = 19 + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup>2</sup><br/>33 = 31 + 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1<sup>2</sup></p><p>It turns out that the conjecture was false.</p><p>What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?</p>",
    "folder": "goldbachs-other-conjecture",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Goldbach's other conjecture"
});

db.questions.insert({
    "details": "<p>The <b>Golomb's self-describing sequence</b>{G(<var>n</var>)} is the only nondecreasing sequence of natural numbers such that <var>n</var> appears exactly G(<var>n</var>) times in the sequence. The values of G(<var>n</var>) for the first few <var>n</var> are</p><p><div align=\"center\"><table align=\"center\" border=\"0\" cellpadding=\"5\" cellspacing=\"1\"><tr><td align=\"left\"><var>n</var></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td><td>\u2026</td></tr><tr><td>G(<var>n</var>)</td><td>1</td><td>2</td><td>2</td><td>3</td><td>3</td><td>4</td><td>4</td><td>4</td><td>5</td><td>5</td><td>5</td><td>6</td><td>6</td><td>6</td><td>6</td><td>\u2026</td></tr></table></div></p><p>You are given that G(10<sup>3</sup>) = 86, G(10<sup>6</sup>) = 6137.<br/>You are also given that \u03a3G(<var>n</var><sup>3</sup>) = 153506976 for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>3</sup>.</p><p>Find \u03a3G(<var>n</var><sup>3</sup>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>6</sup>.</p>",
    "folder": "golombs-self-describing-sequen",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Golomb's self-describing sequence"
});

db.questions.insert({
    "details": "<p>We are trying to find a hidden number selected from the set of integers{1, 2, ..., <var>n</var>} by asking questions. Each number (question) we ask, we get one of three possible answers:<br/><ul><li> \"Your guess is lower than the hidden number\" (and you incur a cost of <var>a</var>), or</li><li> \"Your guess is higher than the hidden number\" (and you incur a cost of <var>b</var>), or</li><li> \"Yes, that's it!\" (and the game ends).</li></ul></p><p>Given the value of <var>n</var>, <var>a</var>, and <var>b</var>, an <i>optimal strategy</i> minimizes the total cost <u>for the worst possible case</u>.</p><p>For example, if <var>n</var> = 5, <var>a</var> = 2, and <var>b</var> = 3, then we may begin by asking \"<b>2</b>\" as our first question.</p><p>If we are told that 2 is higher than the hidden number (for a cost of <var>b</var>=3), then we are sure that \"<b>1</b>\" is the hidden number (for a total cost of <span style=\"color:blue;\"><b>3</b></span>).<br/>If we are told that 2 is lower than the hidden number (for a cost of <var>a</var>=2), then our next question will be \"<b>4</b>\".<br/>If we are told that 4 is higher than the hidden number (for a cost of <var>b</var>=3), then we are sure that \"<b>3</b>\" is the hidden number (for a total cost of 2+3=<span style=\"color:blue;\"><b>5</b></span>).<br/>If we are told that 4 is lower than the hidden number (for a cost of <var>a</var>=2), then we are sure that \"<b>5</b>\" is the hidden number (for a total cost of 2+2=<span style=\"color:blue;\"><b>4</b></span>).<br/>Thus, the worst-case cost achieved by this strategy is <span style=\"color:red;\"><b>5</b></span>. It can also be shown that this is the lowest worst-case cost that can be achieved. So, in fact, we have just described an optimal strategy for the given values of <var>n</var>, <var>a</var>, and <var>b</var>.</p><p>Let C(<var>n</var>, <var>a</var>, <var>b</var>) be the worst-case cost achieved by an optimal strategy for the given values of <var>n</var>, <var>a</var>, and <var>b</var>.</p><p>Here are a few examples:<br/>C(5, 2, 3) = 5<br/>C(500, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3) = 13.22073197...<br/>C(20000, 5, 7) = 82<br/>C(2000000, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>5, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>7) = 49.63755955...</p><p>Let F<sub><var>k</var></sub> be the Fibonacci numbers: F<sub><var>k</var></sub> = F<sub><var>k</var>-1</sub> + F<sub><var>k</var>-2</sub> with base cases F<sub>1</sub> = F<sub>2</sub> = 1.<br/>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><sub>1<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>k</var><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>30</sub>\u00a0C(10<sup>12</sup>, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/><var>k</var>, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>F<sub><var>k</var></sub>), and give your answer rounded to 8 decimal places behind the decimal point.</p>",
    "folder": "guessing-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Guessing Game"
});

db.questions.insert({
    "details": "<p>A <b>Harshad or Niven number</b> is a number that is divisible by the sum of its digits.<br/>201 is a Harshad number because it is divisible by 3 (the sum of its digits.)<br/>When we truncate the last digit from 201, we get 20, which is a Harshad number.<br/>When we truncate the last digit from 20, we get 2, which is also a Harshad number.<br/>Let's call a Harshad number that, while recursively truncating the last digit, always results in a Harshad number a <i>right truncatable Harshad number.</i></p><p>Also:<br/>201/3=67 which is prime.<br/>Let's call a Harshad number that, when divided by the sum of its digits, results in a prime a <i>strong Harshad number</i>.</p><p>Now take the number 2011 which is prime.<br/>When we truncate the last digit from it we get 201, a strong Harshad number that is also right truncatable.<br/>Let's call such primes <i>strong, right truncatable Harshad primes</i>.</p><p>You are given that the sum of the strong, right truncatable Harshad primes less than 10000 is 90619.</p><p>Find the sum of the strong, right truncatable Harshad primes less than 10<sup>14</sup>.</p>",
    "folder": "harshad-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Harshad Numbers"
});

db.questions.insert({
    "details": "<p>Let <b><i>D</i></b><sub>0</sub> be the two-letter string \"Fa\".  For n<img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/>1, derive <b><i>D</i></b><sub>n</sub> from <b><i>D</i></b><sub>n-1</sub> by the string-rewriting rules:</p><p style=\"margin-left:40px;\">\"a\" <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> \"aRbFR\"<br/>\"b\" <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> \"LFaLb\"</p><p>Thus, <b><i>D</i></b><sub>0</sub> = \"Fa\", <b><i>D</i></b><sub>1</sub> = \"FaRbFR\", <b><i>D</i></b><sub>2</sub> = \"FaRbFRRLFaLbFR\", and so on.</p><p>These strings can be interpreted as instructions to a computer graphics program, with \"F\" meaning \"draw forward one unit\", \"L\" meaning \"turn left 90 degrees\", \"R\" meaning \"turn right 90 degrees\", and \"a\" and \"b\" being ignored.  The initial position of the computer cursor is (0,0), pointing up towards (0,1).</p><p>Then <b><i>D</i></b><sub>n</sub> is an exotic drawing known as the <i>Heighway Dragon</i> of order <i>n</i>.  For example, <b><i>D</i></b><sub>10</sub> is shown below; counting each \"F\" as one step, the highlighted spot at (18,16) is the position reached after 500 steps.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_220.gif\"/></div><p>What is the position of the cursor after 10<sup>12</sup> steps in <b><i>D</i></b><sub>50</sub> ?<br/>Give your answer in the form <i>x</i>,<i>y</i> with no spaces.</p>",
    "folder": "heighway-dragon",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Heighway Dragon"
});

db.questions.insert({
    "details": "<p>In  the hexadecimal number system numbers are represented using 16 different digits:</p><div style=\"text-align:center;\">0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F</div><p>The hexadecimal number AF when written in the decimal number system equals 10x16+15=175.</p><p>In the 3-digit hexadecimal numbers 10A, 1A0, A10, and A01 the digits 0,1 and A are all present.<br/>Like numbers written in base ten we write hexadecimal numbers without leading zeroes.</p><p>How many hexadecimal numbers containing at most sixteen hexadecimal digits exist with all of the digits 0,1, and A present at least once?<br/>Give your answer as a hexadecimal number.</p><p>(A,B,C,D,E and F in upper case, without any leading or trailing code that marks the number as hexadecimal and without leading zeroes , e.g. 1A3F and not: 1a3f and not 0x1a3f and not $1A3F and not #1A3F and not 0000001A3F)</p>",
    "folder": "hexadecimal-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Hexadecimal numbers"
});

db.questions.insert({
    "details": "<p>A <i>hexagonal orchard</i> of order <var>n</var> is a triangular lattice made up of points within a regular hexagon with side <var>n</var>. The following is an example of a hexagonal orchard of order 5:</p><div align=\"center\"><img src=\"project/images/p_351_hexorchard.png\"/><br/></div><p>Highlighted in green are the points which are hidden from the center by a point closer to it. It can be seen that for a hexagonal orchard of order 5, 30 points are hidden from the center.</p><p>Let H(<var>n</var>) be the number of points hidden from the center in a hexagonal orchard of order <var>n</var>.</p><p>H(5) = 30. H(10) = 138. H(1 000) = 1177848.</p><p>Find H(100 000 000).</p>",
    "folder": "hexagonal-orchards",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Hexagonal orchards"
});

db.questions.insert({
    "details": "<p>A hexagonal tile with number 1 is surrounded by a ring of six hexagonal tiles, starting at \"12 o'clock\" and numbering the tiles 2 to 7 in an anti-clockwise direction.</p><p>New rings are added in the same fashion, with the next rings being numbered 8 to 19, 20 to 37, 38 to 61, and so on. The diagram below shows the first three rings.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"431\" src=\"project/images/p_128.gif\" width=\"400\"/></div><p>By finding the difference between tile <i>n</i> and each its six neighbours we shall define PD(<i>n</i>) to be the number of those differences which are prime.</p><p>For example, working clockwise around tile 8 the differences are 12, 29, 11, 6, 1, and 13. So PD(8) = 3.</p><p>In the same way, the differences around tile 17 are 1, 17, 16, 1, 11, and 10, hence PD(17) = 2.</p><p>It can be shown that the maximum value of PD(<i>n</i>) is 3.</p><p>If all of the tiles for which PD(<i>n</i>) = 3 are listed in ascending order to form a sequence, the 10th tile would be 271.</p><p>Find the 2000th tile in this sequence.</p>",
    "folder": "hexagonal-tile-differences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Hexagonal tile differences"
});

db.questions.insert({
    "details": "<p>The sequence of triangle numbers is generated by adding the natural numbers. So the 7<sup>th</sup> triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:</p><p style=\"text-align:center;\">1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...</p><p>Let us list the factors of the first seven triangle numbers:</p><blockquote style=\"font-family:courier new;\"><b>\u00a01</b>: 1<br/><b>\u00a03</b>: 1,3<br/><b>\u00a06</b>: 1,2,3,6<br/><b>10</b>: 1,2,5,10<br/><b>15</b>: 1,3,5,15<br/><b>21</b>: 1,3,7,21<br/><b>28</b>: 1,2,4,7,14,28</blockquote><p>We can see that 28 is the first triangle number to have over five divisors.</p><p>What is the value of the first triangle number to have over five hundred divisors?</p>",
    "folder": "highly-divisible-triangular-nu",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Highly divisible triangular number"
});

db.questions.insert({
    "details": "<p>An infinite number of people (numbered 1, 2, 3, etc.) are lined up to get a room at Hilbert's newest infinite hotel. The hotel contains an infinite number of floors (numbered 1, 2, 3, etc.), and each floor contains an infinite number of rooms (numbered 1, 2, 3, etc.). </p><p>Initially the hotel is empty. Hilbert declares a rule on how the <var>n</var><sup>th</sup> person is assigned a room: person <var>n</var> gets the first vacant room in the lowest numbered floor satisfying either of the following:<ul><li>the floor is empty</li><li>the floor is not empty, and if the latest person taking a room in that floor is person <var>m</var>, then <var>m</var> + <var>n</var> is a perfect square</li></ul></p><p>Person 1 gets room 1 in floor 1 since floor 1 is empty.<br/>Person 2 does not get room 2 in floor 1 since 1 + 2 = 3 is not a perfect square.<br/>Person 2 instead gets room 1 in floor 2 since floor 2 is empty.<br/>Person 3 gets room 2 in floor 1 since 1 + 3 = 4 is a perfect square.</p><p>Eventually, every person in the line gets a room in the hotel.</p><p>Define P(<var>f</var>, <var>r</var>) to be <var>n</var> if person <var>n</var> occupies room <var>r</var> in floor <var>f</var>, and 0 if no person occupies the room. Here are a few examples:<br/>P(1, 1) = 1<br/>P(1, 2) = 3<br/>P(2, 1) = 2<br/>P(10, 20) = 440<br/>P(25, 75) = 4863<br/>P(99, 100) = 19454</p><p>Find the sum of all P(<var>f</var>, <var>r</var>) for all positive <var>f</var> and <var>r</var> such that <var>f</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>r</var> = 71328803586048 and give the last 8 digits as your answer.</p>",
    "folder": "hilberts-new-hotel",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Hilbert's New Hotel"
});

db.questions.insert({
    "details": "<p>Let <var>s<sub>k</sub></var> be the number of 1\u2019s when writing the numbers from 0 to <var>k</var> in binary.<br/>For example, writing 0 to 5 in binary, we have 0, 1, 10, 11, 100, 101. There are seven 1\u2019s, so <var>s</var><sub>5</sub> = 7.<br/>The sequence S ={<var>s<sub>k</sub></var> : <var>k</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0} starts{0, 1, 2, 4, 5, 7, 9, 12, ...}.<br/></p><p>A game is played by two players. Before the game starts, a number <var>n</var> is chosen. A counter <var>c</var> starts at 0. At each turn, the player chooses a number from 1 to <var>n</var> (inclusive) and increases <var>c</var> by that number. The resulting value of <var>c</var> must be a member of S. If there are no more valid moves, the player loses.</p><p>For example:<br/>Let <var>n</var> = 5. <var>c</var> starts at 0.<br/>Player 1 chooses 4, so <var>c</var> becomes 0 + 4 = 4.<br/>Player 2 chooses 5, so <var>c</var> becomes 4 + 5 = 9.<br/>Player 1 chooses 3, so <var>c</var> becomes 9 + 3 = 12.<br/>etc.<br/>Note that <var>c</var> must always belong to S, and each player can increase <var>c</var> by at most <var>n</var>.</p><p>Let M(<var>n</var>) be the highest number the first player can choose at her first turn to force a win, and M(<var>n</var>) = 0 if there is no such move. For example, M(2) = 2, M(7) = 1 and M(20) = 4.</p><p>Given \u03a3(M(<var>n</var>))<sup>3</sup> = 8150 for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 20.</p><p>Find \u03a3(M(<var>n</var>))<sup>3</sup> for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000.</p>",
    "folder": "hopping-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Hopping Game"
});

db.questions.insert({
    "details": "<p>Some positive integers <i>n</i> have the property that the sum [ <i>n</i> + reverse(<i>n</i>) ] consists entirely of odd (decimal) digits. For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers <em>reversible</em>; so 36, 63, 409, and 904 are reversible. Leading zeroes are not allowed in either <i>n</i> or reverse(<i>n</i>).</p><p>There are 120 reversible numbers below one-thousand.</p><p>How many reversible numbers are there below one-billion (10<sup>9</sup>)?</p>",
    "folder": "how-many-reversible-numbers-ar",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "How many reversible numbers are there below one-billion?"
});

db.questions.insert({
    "details": "<p>If we calculate <var>a</var><sup>2</sup> mod 6 for 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5 we get: 0,1,4,3,4,1.</p><p>The largest value of <var>a</var> such that <var>a</var><sup>2</sup> <img alt=\"\u2261\" border=\"0\" height=\"11\" src=\"images/symbol_cong.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>a</var> mod 6 is 4.<br/>Let's call M(<var>n</var>) the largest value of <var>a</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> such that <var>a</var><sup>2</sup> <img alt=\"\u2261\" border=\"0\" height=\"11\" src=\"images/symbol_cong.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>a</var> (mod <var>n</var>).<br/>So M(6) = 4.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>M(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>7</sup>.</p>",
    "folder": "idempotents",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Idempotents"
});

db.questions.insert({
    "details": "<style type=\"text/css\">table.p238 td{ padding: 0px 3px 0px 3px; }</style><p>Create a sequence of numbers using the \"Blum Blum Shub\" pseudo-random number generator:</p><center><table class=\"p238\"><tr><td style=\"text-align:right\"><var>s</var><sub>0</sub></td><td>=</td><td>14025256</td></tr><tr><td><var>s</var><sub><var>n</var>+1</sub></td><td>=</td><td><var>s</var><sub><var>n</var></sub><sup>2</sup> mod 20300713</td></tr></table></center><p>Concatenate these numbers \u2009<var>s</var><sub>0</sub><var>s</var><sub>1</sub><var>s</var><sub>2</sub>\u2026 to create a string <var>w</var> of infinite length.<br/>Then, <var>w</var>\u2009=\u2009<span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">14025256741014958470038053646\u2026</span></p><p>For a positive integer <var>k</var>, if no substring of <var>w</var> exists with a sum of digits equal to <var>k</var>, <var>p</var>(<var>k</var>) is defined to be zero. If at least one substring of <var>w</var> exists with a sum of digits equal to <var>k</var>, we define <var>p</var>(<var>k</var>)\u2009=\u2009<var>z</var>, where <var>z</var> is the starting position of the earliest such substring.</p><p>For instance:</p><p>The substrings <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">1</span>, <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">14</span>, <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">1402</span>, \u2026 <br/>with respective sums of digits equal to 1, 5, 7, \u2026<br/>start at position <b>1</b>, hence <var>p</var>(1)\u2009=\u2009<var>p</var>(5)\u2009=\u2009<var>p</var>(7)\u2009=\u2009\u2026\u2009=\u2009<b>1</b>.</p><p>The substrings <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">4</span>, <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">402</span>, <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">4025</span>, \u2026<br/>with respective sums of digits equal to 4, 6, 11, \u2026<br/>start at position <b>2</b>, hence <var>p</var>(4)\u2009=\u2009<var>p</var>(6)\u2009=\u2009<var>p</var>(11)\u2009=\u2009\u2026\u2009=\u2009<b>2</b>.</p><p>The substrings <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">02</span>, <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">0252</span>, \u2026<br/>with respective sums of digits equal to 2, 9, \u2026<br/>start at position <b>3</b>, hence <var>p</var>(2)\u2009=\u2009<var>p</var>(9)\u2009=\u2009\u2026\u2009=\u2009<b>3</b>.<p><p>Note that substring <span style=\"font-family:courier new;font-size:12pt;color:#0000ff;\">025</span> starting at position <b>3</b>, has a sum of digits equal to 7, but there was an earlier substring (starting at position <b>1</b>) with a sum of digits equal to 7, so <var>p</var>(7)\u2009=\u20091, <i>not</i> 3.</p><p>We can verify that, for 0\u2009&lt;\u2009<var>k</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u200910<sup>3</sup>, <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>\u2009<var>p</var>(<var>k</var>) = 4742.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>\u2009<var>p</var>(<var>k</var>), for 0\u2009&lt;\u2009<var>k</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u20092\u00b710<sup>15</sup>.</p></p></p>",
    "folder": "infinite-string-tour",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Infinite string tour"
});

db.questions.insert({
    "details": "<p>Let's call an integer sided triangle with exactly one angle of 60 degrees a 60-degree triangle.<br/>Let <var>r</var> be the radius of the inscribed circle of such a 60-degree triangle.</p><p>There are 1234 60-degree triangles for which <var>r</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100.<br/>Let T(<var>n</var>) be the number of 60-degree triangles for which <var>r</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>, so<br/> T(100) = 1234,\u00a0 T(1000) = 22767, and\u00a0 T(10000) = 359912.</p><p>Find T(1053779).</p>",
    "folder": "inscribed-circles-of-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Inscribed circles of triangles with one angle of 60 degrees"
});

db.questions.insert({
    "details": "<p>Let ABCD be a convex quadrilateral, with diagonals AC and BD. At each vertex the diagonal makes an angle with each of the two sides, creating eight corner angles.</p><p style=\"margin-left:180px;\"><img alt=\"\" src=\"project/images/p_177_quad.gif\"/></p><p>For example, at vertex A, the two angles are CAD, CAB.</p><p>We call such a quadrilateral for which all eight corner angles have integer values when measured in degrees an \"integer angled quadrilateral\". An example of an integer angled quadrilateral is a square, where all eight corner angles are 45\u00b0. Another example is given by DAC = 20\u00b0, BAC = 60\u00b0, ABD = 50\u00b0, CBD = 30\u00b0, BCA = 40\u00b0, DCA = 30\u00b0, CDB = 80\u00b0, ADB = 50\u00b0.</p><p>What is the total number of non-similar integer angled quadrilaterals?</p><p>Note: In your calculations you may assume that a calculated angle is integral if it is within a tolerance of 10<sup>-9</sup> of an integer value.</p>",
    "folder": "integer-angled-quadrilaterals",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Integer angled Quadrilaterals."
});

db.questions.insert({
    "details": "<p>In the classic \"Crossing Ladders\" problem, we are given the lengths <var>x</var> and <var>y</var> of two ladders resting on the opposite walls of a narrow, level street. We are also given the height <var>h</var> above the street where the two ladders cross and we are asked to find the width of the street (<var>w</var>).</p><div align=\"center\"><img src=\"project/images/p_309_ladders.gif\"/></div><p>Here, we are only concerned with instances where all four variables are positive integers.<br/>For example, if <var>x</var> = 70, <var>y</var> = 119 and <var>h</var> = 30, we can calculate that <var>w</var> = 56.</p><p>In fact, for integer values <var>x</var>, <var>y</var>, <var>h</var> and 0 &lt; <var>x</var> &lt; <var>y</var> &lt; 200, there are only five triplets (<var>x</var>,<var>y</var>,<var>h</var>) producing integer solutions for <var>w</var>:<br/>(70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) and (119, 175, 40).</p><p>For integer values <var>x</var>, <var>y</var>, <var>h</var> and 0 &lt; <var>x</var> &lt; <var>y</var> &lt; 1 000 000, how many triplets (<var>x</var>,<var>y</var>,<var>h</var>) produce integer solutions for <var>w</var>?</p>",
    "folder": "integer-ladders",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Integer Ladders"
});

db.questions.insert({
    "details": "<p>For some positive integers <var>k</var>, there exists an integer partition of the form\u00a0\u00a0 4<sup>t</sup> = 2<sup>t</sup> + <var>k</var>,<br/>where 4<sup>t</sup>, 2<sup>t</sup>, and <var>k</var> are all positive integers and <var>t</var> is a real number.</p><p>The first two such partitions are 4<sup>1</sup> = 2<sup>1</sup> + 2 and 4<sup>1.5849625...</sup> = 2<sup>1.5849625...</sup> + 6.</p><p>Partitions where <var>t</var> is also an integer are called <i>perfect</i>.<br/> For any <var>m</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 let P(<var>m</var>) be the proportion of such partitions that are perfect with <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>m</var>.<br/>Thus P(6) = 1/2.</p><p>In the following table are listed some values of P(<var>m</var>)</p><p>\u00a0\u00a0\u00a0P(5) = 1/1<br/>\u00a0\u00a0\u00a0P(10) = 1/2<br/>\u00a0\u00a0\u00a0P(15) = 2/3<br/>\u00a0\u00a0\u00a0P(20) = 1/2<br/>\u00a0\u00a0\u00a0P(25) = 1/2<br/>\u00a0\u00a0\u00a0P(30) = 2/5<br/>\u00a0\u00a0\u00a0...<br/>\u00a0\u00a0\u00a0P(180) = 1/4<br/>\u00a0\u00a0\u00a0P(185) = 3/13</p><p>Find the smallest <var>m</var> for which P(<var>m</var>) <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1/12345</p>",
    "folder": "integer-partition-equations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Integer partition equations"
});

db.questions.insert({
    "details": "<p>If <i>p</i> is the perimeter of a right angle triangle with integral length sides,{<i>a</i>,<i>b</i>,<i>c</i>}, there are exactly three solutions for <i>p</i> = 120.</p><p style=\"\\'text-align:center;\\'\"{20,48,52},{24,45,51},{30,40,50}</p><p>For which value of <i>p</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000, is the number of solutions maximised?</p>",
    "folder": "integer-right-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Integer right triangles"
});

db.questions.insert({
    "details": "<p>Consider the triangle with sides 6, 8 and 10. It can be seen that the perimeter and the area are both equal to 24. So the area/perimeter ratio is equal to 1.<br/>Consider also the triangle with sides 13, 14 and 15. The perimeter equals 42 while the area is equal to 84. So for this triangle the area/perimeter ratio is equal to 2.</p><p>Find the sum of the perimeters of all integer sided triangles for which the area/perimeter ratios are equal to positive integers not exceeding 1000.</p>",
    "folder": "integer-sided-triangles-for-wh",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Integer sided triangles for which the  area/perimeter ratio is integral."
});

db.questions.insert({
    "details": "<p>It can be shown that the polynomial <var>n</var><sup>4</sup> + 4<var>n</var><sup>3</sup> + 2<var>n</var><sup>2</sup> + 5<var>n</var> is a multiple of 6 for every integer <var>n</var>. It can also be shown that 6 is the largest integer satisfying this property.</p><p>Define M(<var>a</var>, <var>b</var>, <var>c</var>) as the maximum <var>m</var> such that <var>n</var><sup>4</sup> + <var>a</var><var>n</var><sup>3</sup> + <var>b</var><var>n</var><sup>2</sup> + <var>c</var><var>n</var> is a multiple of <var>m</var> for all integers <var>n</var>. For example, M(4, 2, 5) = 6.</p><p>Also, define S(<var>N</var>) as the sum of M(<var>a</var>, <var>b</var>, <var>c</var>) for all 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var>, <var>b</var>, <var>c</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.</p><p>We can verify that S(10) = 1972 and S(10000) = 2024258331114.</p><p>Let F<sub><var>k</var></sub> be the Fibonacci sequence:<br/>F<sub>0</sub> = 0, F<sub>1</sub> = 1 and<br/>F<sub><var>k</var></sub> = F<sub><var>k</var>-1</sub> + F<sub><var>k</var>-2</sub> for <var>k</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2.</p><p>Find the last 9 digits of \u03a3 S(F<sub><var>k</var></sub>) for 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1234567890123.</p>",
    "folder": "integer-valued-polynomials",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Integer-valued polynomials"
});

db.questions.insert({
    "details": "<p>A segment is uniquely defined by its two endpoints.<br/> By considering two line segments in plane geometry there are three possibilities:<br/> the segments have zero points, one point, or infinitely many points in common.</p><p>Moreover when two segments have exactly one point in common it might be the case that that common point is an endpoint of either one of the segments or of both. If a common point of two segments is not an endpoint of either of the segments it is an interior point of both segments.<br/>We will call a common point T of two segments L<sub>1</sub> and L<sub>2</sub> a true intersection point of L<sub>1</sub> and L<sub>2</sub>  if T is the only common point of L<sub>1</sub> and L<sub>2</sub>  and T is an interior point of both segments.</p><p>Consider the three segments L<sub>1</sub>, L<sub>2</sub>, and L<sub>3</sub>:</p><p style=\"margin-left:20px;\">L<sub>1</sub>: (27, 44) to (12, 32)<br/>L<sub>2</sub>: (46, 53) to (17, 62)<br/>L<sub>3</sub>: (46, 70) to (22, 40)</p><p>It can be verified that line segments L<sub>2</sub> and L<sub>3</sub> have a true intersection point. We note that as the one of the end points of L<sub>3</sub>: (22,40) lies on L<sub>1</sub> this is not considered to be a true point of intersection. L<sub>1</sub> and L<sub>2</sub> have no common point. So among the three line segments, we find one true intersection point.</p><p>Now let us do the same for 5000 line segments. To this end, we generate 20000 numbers using the so-called \"Blum Blum Shub\" pseudo-random number generator.</p><p style=\"margin-left:50px;\">s<sub>0</sub> = 290797<br/><br/>s<sub>n+1</sub> = s<sub>n</sub><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>s<sub>n</sub> (modulo 50515093)<br/><br/>t<sub>n</sub> = s<sub>n</sub> (modulo 500)</p><p>To create each line segment, we use four consecutive numbers t<sub>n</sub>. That is, the first line segment is given by:</p><p>(t<sub>1</sub>, t<sub>2</sub>) to (t<sub>3</sub>, t<sub>4</sub>)</p><p>The first four numbers computed according to the above generator should be: 27, 144, 12 and 232. The first segment would thus be (27,144) to (12,232).</p><p>How many distinct true intersection points are found among the 5000 line segments?</p>",
    "folder": "intersections",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Intersections"
});

db.questions.insert({
    "details": "<p>The smallest positive integer <i>n</i> for which the numbers <i>n</i><sup>2</sup>+1, <i>n</i><sup>2</sup>+3, <i>n</i><sup>2</sup>+7, <i>n</i><sup>2</sup>+9, <i>n</i><sup>2</sup>+13, and <i>n</i><sup>2</sup>+27 are consecutive primes is 10. The sum of all such integers <i>n</i> below one-million is 1242490.</p><p>What is the sum of all such integers <i>n</i> below 150 million?</p>",
    "folder": "investigating-a-prime-pattern",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating a Prime Pattern "
});

db.questions.insert({
    "details": "<p>As we all know the equation <var>x</var><sup>2</sup>=-1 has no solutions for real <var>x</var>.<br/>If we however introduce the imaginary number <var>i</var> this equation has two solutions: <var>x=i</var> and <var>x=-i</var>.<br/>If we go a step further the equation (<var>x</var>-3)<sup>2</sup>=-4 has two complex solutions: <var>x</var>=3+2<var>i</var> and <var>x</var>=3-2<var>i</var>.<br/><var>x</var>=3+2<var>i</var> and <var>x</var>=3-2<var>i</var> are called each others' complex conjugate.<br/>Numbers of the form <var>a</var>+<var>bi</var> are called complex numbers.<br/>In general <var>a</var>+<var>bi</var> and <var>a</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>bi</var> are each other's complex conjugate.</p><p>A Gaussian Integer is a complex number <var>a</var>+<var>bi</var> such that both <var>a</var> and <var>b</var> are integers.<br/>The regular integers are also Gaussian integers (with <var>b</var>=0).<br/>To distinguish them from Gaussian integers with <var>b</var> <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 0 we call such integers \"rational integers.\"<br/>A Gaussian integer is called a divisor of a rational integer <var>n</var> if the result is also a Gaussian integer.<br/>If for example we divide 5 by 1+2<var>i</var> we can simplify <img alt=\"\" border=\"0\" src=\"project/images/p_153_formule1.gif\" style=\"vertical-align:middle\"/> in the following manner:<br/>Multiply numerator and denominator by the complex conjugate of 1+2<var>i</var>: 1<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<var>i</var>.<br/>The result is <img alt=\"\" border=\"0\" src=\"project/images/p_153_formule2.gif\" style=\"vertical-align:middle;\"/>.<br/>So 1+2<var>i</var> is a divisor of 5.<br/>Note that 1+<var>i</var> is not a divisor of 5 because <img alt=\"\" border=\"0\" src=\"project/images/p_153_formule5.gif\" style=\"vertical-align:middle;\"/>.<br/>Note also that if the Gaussian Integer (<var>a</var>+<var>bi</var>) is a divisor of a rational integer <var>n</var>, then its complex conjugate (<var>a</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>bi</var>) is also a divisor of <var>n</var>.</p><p>In fact, 5 has six divisors such that the real part is positive:{1, 1 + 2<var>i</var>, 1 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2<var>i</var>, 2 + <var>i</var>, 2 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>i</var>, 5}.<br/>The following is a table of all of the divisors for the first five positive rational integers:</p><table align=\"center\" border=\"1\"><tr><td width=\"20\"><var>n</var></td><td> Gaussian integer divisors<br/>with positive real part</td><td>Sum s(<var>n</var>) of <br/>thesedivisors</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td>2</td><td>1, 1+<var>i</var>, 1-<var>i</var>, 2</td><td>5</td></tr><tr><td>3</td><td>1, 3</td><td>4</td></tr><tr><td>4</td><td>1, 1+<var>i</var>, 1-<var>i</var>, 2, 2+2<var>i</var>, 2-2<var>i</var>,4</td><td>13</td></tr><tr><td>5</td><td>1, 1+2<var>i</var>, 1-2<var>i</var>, 2+<var>i</var>, 2-<var>i</var>, 5</td><td>12</td></tr></table><p>For divisors with positive real parts, then, we have: <img alt=\"\" border=\"0\" src=\"project/images/p_153_formule6.gif\" style=\"vertical-align:middle\"/>.</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>5</sup>, <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> s(<var>n</var>)=17924657155.</p><p>What is <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> s(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>8</sup>?</p>",
    "folder": "investigating-gaussian-integer",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating Gaussian Integers"
});

db.questions.insert({
    "details": "<p>Having three black objects B and one white object W they can be grouped in 7 ways like this:</p><table align=\"center\" cellpadding=\"10\"><tr><td>(BBBW)</td><td>(B,BBW)</td><td>(B,B,BW)</td><td>(B,B,B,W)</td><td>(B,BB,W)</td><td>(BBB,W)</td><td>(BB,BW)</td></tr></table><p>In how many ways can sixty black objects B and forty white objects W be  thus grouped?</p>",
    "folder": "investigating-in-how-many-ways",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating in how many ways objects of two different colours can be grouped."
});

db.questions.insert({
    "details": "<p>In laser physics, a \"white cell\" is a mirror system that acts as a delay line for the laser beam. The beam enters the cell, bounces around on the mirrors, and eventually works its way back out.</p><p>The specific white cell we will be considering is an ellipse with the equation 4<i>x</i><sup>2</sup> + <i>y</i><sup>2</sup> = 100</p><p>The section corresponding to <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>0.01 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>x</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> +0.01 at the top is missing, allowing the light to enter and exit through the hole.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"240\" src=\"project/images/p_144_1.gif\" width=\"268\"/><img alt=\"\" height=\"287\" src=\"project/images/p_144_2.gif\" width=\"141\"/></div><p>The light beam in this problem starts at the point (0.0,10.1) just outside the white cell, and the beam first impacts the mirror at (1.4,-9.6).</p><p>Each time the laser beam hits the surface of the ellipse, it follows the usual law of reflection \"angle of incidence equals angle of reflection.\" That is, both the incident and reflected beams make the same angle with the normal line at the point of incidence.</p><p>In the figure on the left, the red line shows the first two points of contact between the laser beam and the wall of the white cell; the blue line shows the line tangent to the ellipse at the point of incidence of the first bounce.</p><p>The slope <i>m</i> of the tangent line at any point (<i>x</i>,<i>y</i>) of the given ellipse is: <i>m</i> = <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4<i>x</i>/<i>y</i></p><p>The normal line is perpendicular to this tangent line at the point of incidence.</p><p>The animation on the right shows the first 10 reflections of the beam.</p><p>How many times does the beam hit the internal surface of the white cell before exiting?</p>",
    "folder": "investigating-multiple-reflect",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating multiple reflections of a laser beam. "
});

db.questions.insert({
    "details": "<p>How many 18-digit numbers <var>n</var> (without leading zeros) are there such that no digit occurs more than three times in <var>n</var>?</p>",
    "folder": "investigating-numbers-with-few",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating numbers with few repeated digits."
});

db.questions.insert({
    "details": "<p>A positive integer, <i>n</i>, is divided by <i>d</i> and the quotient and remainder are <i>q</i> and <i>r</i> respectively. In addition <i>d</i>, <i>q</i>, and <i>r</i> are consecutive positive integer terms in a geometric sequence, but not necessarily in that order.</p><p>For example, 58 divided by 6 has quotient 9 and remainder 4. It can also be seen that 4, 6, 9 are consecutive terms in a geometric sequence (common ratio 3/2).<br/>We will call such numbers, <i>n</i>, progressive.</p><p>Some progressive numbers, such as 9 and 10404 = 102<sup>2</sup>, happen to also be perfect squares.<br/> The sum of all progressive perfect squares below one hundred thousand is 124657.</p><p>Find the sum of all progressive perfect squares below one trillion (10<sup>12</sup>).</p>",
    "folder": "investigating-progressive-numb",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating progressive numbers, n, which are also square."
});

db.questions.insert({
    "details": "<p>Given is the function <var>f</var>(<var>x</var>) = <img alt=\"\u230a\" border=\"0\" height=\"16\" src=\"images/symbol_lfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/>2<sup>30.403243784-<var>x</var><sup>2</sup></sup><img alt=\"\u230b\" border=\"0\" height=\"16\" src=\"images/symbol_rfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 10<sup>-9</sup> ( <img alt=\"\u230a\" border=\"0\" height=\"16\" src=\"images/symbol_lfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/> <img alt=\"\u230b\" border=\"0\" height=\"16\" src=\"images/symbol_rfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/> is the floor-function),<br/>the sequence <var>u<sub>n</sub></var> is defined by <var>u</var><sub>0</sub> = -1 and <var>u</var><sub><var>n</var>+1</sub> = <var>f</var>(<var>u<sub>n</sub></var>).</p><p>Find <var>u<sub>n</sub></var> + <var>u</var><sub><var>n</var>+1</sub> for <var>n</var> = 10<sup>12</sup>.<br/>Give your answer with 9 digits after the decimal point.</p>",
    "folder": "investigating-the-behaviour-of",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating the behaviour of a recursively defined sequence"
});

db.questions.insert({
    "details": "<p>Consider numbers <var>t</var>(<var>n</var>) of the form <var>t</var>(<var>n</var>) = 2<var>n</var><sup>2</sup>-1 with <var>n</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1.<br/>The first such numbers are 7, 17, 31, 49, 71, 97, 127 and 161.<br/>It turns out that only 49 = 7*7 and 161 = 7*23 are not prime.<br/>For <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10000 there are 2202 numbers <var>t</var>(<var>n</var>)  that are prime.</p><p>How many numbers <var>t</var>(<var>n</var>) are prime for <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 50,000,000 ?</p>",
    "folder": "investigating-the-primality-of",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating the primality of numbers of the form 2n2-1"
});

db.questions.insert({
    "details": "<p>Let ABC be a triangle with all interior angles being less than 120 degrees. Let X be any point inside the triangle and let XA = p, XC = q, and XB = r.</p><p>Fermat challenged Torricelli to find the position of X such that p + q + r was minimised.</p><p>Torricelli was able to prove that if equilateral triangles AOB, BNC and AMC are constructed on each side of triangle ABC, the circumscribed circles of AOB, BNC, and AMC will intersect at a single point, T, inside the triangle. Moreover he proved that T, called the Torricelli/Fermat point, minimises p + q + r. Even more remarkable, it can be shown that when the sum is minimised, AN = BM = CO = p + q + r and that AN, BM and CO also intersect at T.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"560\" src=\"project/images/p_143_torricelli.gif\" width=\"564\"/></div><p>If the sum is minimised and a, b, c, p, q and r are all positive integers we shall call triangle ABC a Torricelli triangle. For example, a = 399, b = 455, c = 511 is an example of a Torricelli triangle, with p + q + r = 784.</p><p>Find the sum of all distinct values of p + q + r <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 120000 for Torricelli triangles.</p>",
    "folder": "investigating-the-torricelli-p",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating the Torricelli point of a triangle"
});

db.questions.insert({
    "details": "<p>For two positive integers a and b, the Ulam sequence U(a,b) is defined by U(a,b)<sub>1</sub> = a, U(a,b)<sub>2</sub> = b and for k &gt; 2,U(a,b)<sub>k</sub> is the smallest integer greater than U(a,b)<sub>(k-1)</sub> which can be written in exactly one way as the sum of two distinct previous members of U(a,b).</p><p>For example, the sequence U(1,2) begins with<br/>1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8;<br/>5 does not belong to it because 5 = 1 + 4 = 2 + 3 has two representations as the sum of two previous members, likewise 7 = 1 + 6 = 3 + 4.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>U(2,2<var>n</var>+1)<sub><var>k</var></sub> for 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>10, where <var>k</var> = 10<sup>11</sup>.</p>",
    "folder": "investigating-ulam-sequences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Investigating Ulam sequences"
});

db.questions.insert({
    "details": "<p>Three circles of equal radius are placed inside a larger circle such that each pair of circles is tangent to one another and the inner circles do not overlap. There are four uncovered \"gaps\" which are to be filled iteratively with more tangent circles.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_199_circles_in_circles.gif\"/></div><p>At each iteration, a maximally sized circle is placed in each gap, which creates more gaps for the next iteration. After 3 iterations (pictured), there are 108 gaps and the fraction of the area which is not covered by circles is 0.06790342, rounded to eight decimal places.</p><p>What fraction of the area is not covered by circles after 10 iterations?<br/>Give your answer rounded to eight decimal places using the format x.xxxxxxxx .</p>",
    "folder": "iterative-circle-packing",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Iterative Circle Packing"
});

db.questions.insert({
    "details": "<p align=\"center\"><img src=\"project/images/p_424_kakuro1.gif\"></img></p><p>The above is an example of a cryptic kakuro (also known as cross sums, or even sums cross) puzzle, with its final solution on the right. (The common rules of kakuro puzzles can be found easily on numerous internet sites. Other related information can also be currently found at <a href=\"http://krazydad.com/\">krazydad.com</a> whose author has provided the puzzle data for this challenge.)<p><p>The downloadable text file (<a href=\"project/kakuro200.txt\">kakuro200.txt</a>) contains the description of 200 such puzzles, a mix of 5x5 and 6x6 types. The first puzzle in the file is the above example which is coded as follows:</p><p>6,X,X,(vCC),(vI),X,X,X,(hH),B,O,(vCA),(vJE),X,(hFE,vD),O,O,O,O,(hA),O,I,(hJC,vB),O,O,(hJC),H,O,O,O,X,X,X,(hJE),O,O,X</p><p>The first character is a numerical digit indicating the size of the information grid. It would be either a 6 (for a 5x5 kakuro puzzle) or a 7 (for a 6x6 puzzle) followed by a comma (,). The extra top line and left column are needed to insert information.</p><p>The content of each cell is then described and followed by a comma, going left to right and starting with the top line.<br/>X = Gray cell, not required to be filled by a digit.<br/>O (upper case letter)= White empty cell to be filled by a digit.<br/>A = Or any one of the upper case letters from A to J to be replaced by its equivalent digit in the solved puzzle.<br/>( ) = Location of the encrypted sums. Horizontal sums are preceded by a lower case \"h\" and vertical sums are preceded by a lower case \"v\". Those are followed by one or two upper case letters depending if the sum is a single digit or double digit one. For double digit sums, the first letter would be for the \"tens\" and the second one for the \"units\". When the cell must contain information for both a horizontal and a vertical sum, the first one is always for the horizontal sum and the two are separated by a comma within the same set of brackets, ex.: (hFE,vD). Each set of brackets is also immediately followed by a comma.</p><p>The description of the last cell is followed by a Carriage Return/Line Feed (CRLF) instead of a comma.</p><p>The required answer to each puzzle is based on the value of each letter necessary to arrive at the solution and according to the alphabetical order. As indicated under the example puzzle, its answer would be 8426039571. At least 9 out of the 10 encrypting letters are always part of the problem description. When only 9 are given, the missing one must be assigned the remaining digit.</p><p>You are given that the sum of the answers for the first 10 puzzles in the file is 64414157580.</p><p>Find the sum of the answers for the 200 puzzles.</p></p></p>",
    "folder": "kakuro",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Kakuro"
});

db.questions.insert({
    "details": "<p>6174 is a remarkable number; if we sort its digits in increasing order and subtract that number from the number you get when you sort the digits in decreasing order, we get 7641-1467=6174.<br/>Even more remarkable is that if we start from any 4 digit number and repeat this process of sorting and subtracting, we'll eventually end up with 6174 or immediately with 0 if all digits are equal.<br/> This also works with numbers that have less than 4 digits if we pad the number with leading zeroes until we have 4 digits.<br/>E.g. let's start with the number 0837:<br/>8730-0378=8352<br/>8532-2358=6174</p><p>6174 is called the <b>Kaprekar constant</b>. The process of sorting and subtracting and repeating this until either 0 or the Kaprekar constant is reached is called the <b>Kaprekar routine</b>.</p><p>We can consider the Kaprekar routine for other bases and number of digits.<br/> Unfortunately, it is not guaranteed a Kaprekar constant exists in all cases; either the routine can end up in a cycle for some input numbers or the constant the routine arrives at can be different for different input numbers.<br>However, it can be shown that for 5 digits and a base b = 6t+3<img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/>9, a Kaprekar constant exists.<br/>E.g. base 15: (10,4,14,9,5)<sub>15</sub><br/>base 21: (14,6,20,13,7)<sub>21</sub></br></p><p>Define <var>C<sub>b</sub></var> to be the Kaprekar constant in base <var>b</var> for 5 digits.Define the function <var>sb(i)</var> to be<ul><li> 0 if i = <var>C<sub>b</sub></var> or if <var>i</var> written in base <var>b</var> consists of 5 identical digits<li> the number of iterations it takes the Kaprekar routine in base <var>b</var> to arrive at <var>C<sub>b</sub></var>, otherwise</li></li></ul>Note that we can define <var>sb(i)</var> for all integers <var>i</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var><sup>5</sup>. If <var>i</var> written in base <var>b</var> takes less than 5 digits, the number is padded with leading zero digits until we have 5 digits before applying the Kaprekar routine.</p><p>Define <var>S(b)</var> as the sum of <var>sb(i)</var> for 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var><sup>5</sup>.<br>E.g. S(15) = 5274369<br/> S(111) = 400668930299</br></p><p>Find the sum of S(6k+3) for 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> k <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 300.<br/>Give the last 18 digits as your answer.</p>",
    "folder": "kaprekar-constant",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Kaprekar constant"
});

db.questions.insert({
    "details": "<p>An ant moves on a regular grid of squares that are coloured either black or white.<br/> The ant is always oriented in one of the cardinal directions (left, right, up or down) and moves from square to adjacent square according to the following rules:<br/>- if it is on a black square, it flips the color of the square to white, rotates 90 degrees counterclockwise and moves forward one square.<br/>- if it is on a white square, it flips the color of the square to black, rotates 90 degrees clockwise and moves forward one square.<br/></p><p>Starting with a grid that is entirely white, how many squares are black after 10<sup>18</sup> moves of the ant?</p>",
    "folder": "langtons-ant",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Langton's ant"
});

db.questions.insert({
    "details": "<p>The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2<sup>6972593</sup><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1; it contains exactly 2,098,960 digits. Subsequently other Mersenne primes, of the form 2<sup><i>p</i></sup><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1, have been found which contain more digits.</p><p>However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup>7830457</sup>+1.</p><p>Find the last ten digits of this prime number.</p>",
    "folder": "large-non-mersenne-prime",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Large non-Mersenne prime"
});

db.questions.insert({
    "details": "<p>A number consisting entirely of ones is called a repunit. We shall define R(<i>k</i>) to be a repunit of length <i>k</i>.</p><p>For example, R(10) = 1111111111 = 11<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>41<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>271<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>9091, and the sum of these prime factors is 9414.</p><p>Find the sum of the first forty prime factors of R(10<sup>9</sup>).</p>",
    "folder": "large-repunit-factors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Large repunit factors"
});

db.questions.insert({
    "details": "<p>Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.</p><div style=\"font-family:courier new;font-size:10pt;text-align:center;\">37107287533902102798797998220837590246510135740250<br/>46376937677490009712648124896970078050417018260538<br/>74324986199524741059474233309513058123726617309629<br/>91942213363574161572522430563301811072406154908250<br/>23067588207539346171171980310421047513778063246676<br/>89261670696623633820136378418383684178734361726757<br/>28112879812849979408065481931592621691275889832738<br/>44274228917432520321923589422876796487670272189318<br/>47451445736001306439091167216856844588711603153276<br/>70386486105843025439939619828917593665686757934951<br/>62176457141856560629502157223196586755079324193331<br/>64906352462741904929101432445813822663347944758178<br/>92575867718337217661963751590579239728245598838407<br/>58203565325359399008402633568948830189458628227828<br/>80181199384826282014278194139940567587151170094390<br/>35398664372827112653829987240784473053190104293586<br/>86515506006295864861532075273371959191420517255829<br/>71693888707715466499115593487603532921714970056938<br/>54370070576826684624621495650076471787294438377604<br/>53282654108756828443191190634694037855217779295145<br/>36123272525000296071075082563815656710885258350721<br/>45876576172410976447339110607218265236877223636045<br/>17423706905851860660448207621209813287860733969412<br/>81142660418086830619328460811191061556940512689692<br/>51934325451728388641918047049293215058642563049483<br/>62467221648435076201727918039944693004732956340691<br/>15732444386908125794514089057706229429197107928209<br/>55037687525678773091862540744969844508330393682126<br/>18336384825330154686196124348767681297534375946515<br/>80386287592878490201521685554828717201219257766954<br/>78182833757993103614740356856449095527097864797581<br/>16726320100436897842553539920931837441497806860984<br/>48403098129077791799088218795327364475675590848030<br/>87086987551392711854517078544161852424320693150332<br/>59959406895756536782107074926966537676326235447210<br/>69793950679652694742597709739166693763042633987085<br/>41052684708299085211399427365734116182760315001271<br/>65378607361501080857009149939512557028198746004375<br/>35829035317434717326932123578154982629742552737307<br/>94953759765105305946966067683156574377167401875275<br/>88902802571733229619176668713819931811048770190271<br/>25267680276078003013678680992525463401061632866526<br/>36270218540497705585629946580636237993140746255962<br/>24074486908231174977792365466257246923322810917141<br/>91430288197103288597806669760892938638285025333403<br/>34413065578016127815921815005561868836468420090470<br/>23053081172816430487623791969842487255036638784583<br/>11487696932154902810424020138335124462181441773470<br/>63783299490636259666498587618221225225512486764533<br/>67720186971698544312419572409913959008952310058822<br/>95548255300263520781532296796249481641953868218774<br/>76085327132285723110424803456124867697064507995236<br/>37774242535411291684276865538926205024910326572967<br/>23701913275725675285653248258265463092207058596522<br/>29798860272258331913126375147341994889534765745501<br/>18495701454879288984856827726077713721403798879715<br/>38298203783031473527721580348144513491373226651381<br/>34829543829199918180278916522431027392251122869539<br/>40957953066405232632538044100059654939159879593635<br/>29746152185502371307642255121183693803580388584903<br/>41698116222072977186158236678424689157993532961922<br/>62467957194401269043877107275048102390895523597457<br/>23189706772547915061505504953922979530901129967519<br/>86188088225875314529584099251203829009407770775672<br/>11306739708304724483816533873502340845647058077308<br/>82959174767140363198008187129011875491310547126581<br/>97623331044818386269515456334926366572897563400500<br/>42846280183517070527831839425882145521227251250327<br/>55121603546981200581762165212827652751691296897789<br/>32238195734329339946437501907836945765883352399886<br/>75506164965184775180738168837861091527357929701337<br/>62177842752192623401942399639168044983993173312731<br/>32924185707147349566916674687634660915035914677504<br/>99518671430235219628894890102423325116913619626622<br/>73267460800591547471830798392868535206946944540724<br/>76841822524674417161514036427982273348055556214818<br/>97142617910342598647204516893989422179826088076852<br/>87783646182799346313767754307809363333018982642090<br/>10848802521674670883215120185883543223812876952786<br/>71329612474782464538636993009049310363619763878039<br/>62184073572399794223406235393808339651327408011116<br/>66627891981488087797941876876144230030984490851411<br/>60661826293682836764744779239180335110989069790714<br/>85786944089552990653640447425576083659976645795096<br/>66024396409905389607120198219976047599490197230297<br/>64913982680032973156037120041377903785566085089252<br/>16730939319872750275468906903707539413042652315011<br/>94809377245048795150954100921645863754710598436791<br/>78639167021187492431995700641917969777599028300699<br/>15368713711936614952811305876380278410754449733078<br/>40789923115535562561142322423255033685442488917353<br/>44889911501440648020369068063960672322193204149535<br/>41503128880339536053299340368006977710650566631954<br/>81234880673210146739058568557934581403627822703280<br/>82616570773948327592232845941706525094512325230608<br/>22918802058777319719839450180888072429661980811197<br/>77158542502016545090413245809786882778948721859617<br/>72107838435069186155435662884062257473692284509516<br/>20849603980134001723930671666823555245252804609722<br/>53503534226472524250874054075591789781264330331690<br/></div>",
    "folder": "large-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Large sum"
});

db.questions.insert({
    "details": "<p>Comparing two numbers written in index form like 2<sup>11</sup> and 3<sup>7</sup> is not difficult, as any calculator would confirm that 2<sup>11</sup> = 2048 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 3<sup>7</sup> = 2187.</p><p>However, confirming that 632382<sup>518061</sup> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 519432<sup>525806</sup> would be much more difficult, as both numbers contain over three million digits.</p><p>Using <a href=\"project/base_exp.txt\">base_exp.txt</a> (right click and 'Save Link/Target As...'), a 22K text file containing one thousand lines with a base/exponent pair on each line, determine which line number has the greatest numerical value.</p><p class=\"info\">NOTE: The first two lines in the file represent the numbers in the example given above.</p>",
    "folder": "largest-exponential",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest exponential"
});

db.questions.insert({
    "details": "<p>The largest integer <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 that is only divisible by both the primes 2 and 3 is 96, as 96=32*3=2<sup>5</sup>*3.For two <i>distinct</i> primes p and q let M(p,q,N) be the largest positive integer <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>N only divisibleby both p and q and M(p,q,N)=0 if such a positive integer does not exist.</p><p>E.g. M(2,3,100)=96.<br/> M(3,5,100)=75 and not 90 because 90 is divisible by 2 ,3 and 5.<br/>Also M(2,73,100)=0 because there does not exist a positive integer <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 that is divisible by both 2 and 73.</p><p>Let S(N) be the sum of all distinct M(p,q,N).S(100)=2262.</p><p>Find S(10 000 000).</p>",
    "folder": "largest-integer-divisible-by-t",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest integer divisible by two primes"
});

db.questions.insert({
    "details": "<p>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 99.</p><p>Find the largest palindrome made from the product of two 3-digit numbers.</p>",
    "folder": "largest-palindrome-product",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest palindrome product"
});

db.questions.insert({
    "details": "<p>The prime factors of 13195 are 5, 7, 13 and 29.</p><p>What is the largest prime factor of the number 600851475143 ?</p>Note: This problem has been changed recently, please check that you are using the right number.",
    "folder": "largest-prime-factor",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest prime factor"
});

db.questions.insert({
    "details": "<p>In the 20<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>20 grid below, four numbers along a diagonal line have been marked in red.</p><p style=\"font-family:courier new;text-align:center;font-size:10pt;\">08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08<br/>49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00<br/>81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65<br/>52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91<br/>22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80<br/>24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50<br/>32 98 81 28 64 23 67 10 <span style=\"color:#ff0000;\"><b>26</b></span> 38 40 67 59 54 70 66 18 38 64 70<br/>67 26 20 68 02 62 12 20 95 <span style=\"color:#ff0000;\"><b>63</b></span> 94 39 63 08 40 91 66 49 94 21<br/>24 55 58 05 66 73 99 26 97 17 <span style=\"color:#ff0000;\"><b>78</b></span> 78 96 83 14 88 34 89 63 72<br/>21 36 23 09 75 00 76 44 20 45 35 <span style=\"color:#ff0000;\"><b>14</b></span> 00 61 33 97 34 31 33 95<br/>78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92<br/>16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57<br/>86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58<br/>19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40<br/>04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66<br/>88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69<br/>04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36<br/>20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16<br/>20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54<br/>01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48<br/></p><p>The product of these numbers is 26 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 63 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 78 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 14 = 1788696.</p><p>What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>20 grid?</p>",
    "folder": "largest-product-in-a-grid",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest product in a grid"
});

db.questions.insert({
    "details": "<p>Find the greatest product of five consecutive digits in the 1000-digit number.</p><p style=\"font-family:courier new;font-size:10pt;text-align:center;\">73167176531330624919225119674426574742355349194934<br/>96983520312774506326239578318016984801869478851843<br/>85861560789112949495459501737958331952853208805511<br/>12540698747158523863050715693290963295227443043557<br/>66896648950445244523161731856403098711121722383113<br/>62229893423380308135336276614282806444486645238749<br/>30358907296290491560440772390713810515859307960866<br/>70172427121883998797908792274921901699720888093776<br/>65727333001053367881220235421809751254540594752243<br/>52584907711670556013604839586446706324415722155397<br/>53697817977846174064955149290862569321978468622482<br/>83972241375657056057490261407972968652414535100474<br/>82166370484403199890008895243450658541227588666881<br/>16427171479924442928230863465674813919123162824586<br/>17866458359124566529476545682848912883142607690042<br/>24219022671055626321111109370544217506941658960408<br/>07198403850962455444362981230987879927244284909188<br/>84580156166097919133875499200524063689912560717606<br/>05886116467109405077541002256983155200055935729725<br/>71636269561882670428252483600823257530420752963450<br/></p>",
    "folder": "largest-product-in-a-series",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest product in a series"
});

db.questions.insert({
    "details": "<p>Let <var>a</var><sub><var>n</var></sub> be the largest real root of a polynomial <var>g</var>(x) = x<sup>3</sup> - 2<sup><var>n</var></sup>\u00b7x<sup>2</sup> + <var>n</var>.<br/>For example, <var>a</var><sub>2</sub> = 3.86619826...</p><p>Find the last eight digits of<img src=\"project/images/p_356_cubicpoly1.gif\" style=\"vertical-align:middle\"/>.</p><p><u><i>Note</i></u>: <img src=\"project/images/p_356_cubicpoly2.gif\" style=\"vertical-align:middle\"/> represents the floor function.</p>",
    "folder": "largest-roots-of-cubic-polynom",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Largest roots of cubic polynomials"
});

db.questions.insert({
    "details": "<p>Three mirrors are arranged in the shape of an equilateral triangle, with their reflective surfaces pointing inwards. There is an infinitesimal gap at each vertex of the triangle through which a laser beam may pass.</p><p>Label the vertices A, B and C. There are 2 ways in which a laser beam may enter vertex C, bounce off 11 surfaces, then exit through the same vertex: one way is shown below; the other is the reverse of that.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_201_laserbeam.gif\"/></div><p>There are 80840 ways in which a laser beam may enter vertex C, bounce off 1000001 surfaces, then exit through the same vertex.</p><p>In how many ways can a laser beam enter at vertex C, bounce off 12017639147 surfaces, then exit through the same vertex?</p>",
    "folder": "laserbeam",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Laserbeam"
});

db.questions.insert({
    "details": "<p>Starting in the top left corner of a 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_015.gif\"/></div><p>How many such routes are there through a 20<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>20 grid?</p>",
    "folder": "lattice-paths",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lattice paths"
});

db.questions.insert({
    "details": "<p>For integers <var>a</var> and <var>b</var>, we define <var>D</var>(<var>a</var>, <var>b</var>) as the domain enclosed by the parabola <var>y</var> = <var>x</var><sup>2</sup> and the line <var>y</var> = <var>a</var>\u00b7<var>x</var> + <var>b</var>:<br/><var>D</var>(<var>a</var>, <var>b</var>) ={ (<var>x</var>, <var>y</var>) | <var>x</var><sup>2</sup> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>y</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var>\u00b7<var>x</var> + <var>b</var> }.</p><p>L(<var>a</var>, <var>b</var>) is defined as the number of lattice points contained in <var>D</var>(<var>a</var>, <var>b</var>).<br/>For example, L(1, 2) = 8 and L(2, -1) = 1.</p><p>We also define S(<var>N</var>) as the sum of L(<var>a</var>, <var>b</var>) for all the pairs (<var>a</var>, <var>b</var>) such that the area of <var>D</var>(<var>a</var>, <var>b</var>) is a rational number and |<var>a</var>|,|<var>b</var>| <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>We can verify that S(5) = 344 and S(100) = 26709528.</p><p>Find S(10<sup>12</sup>). Give your answer mod 10<sup>8</sup>.</p>",
    "folder": "lattice-points-enclosed-by-par",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lattice points enclosed by parabola and line"
});

db.questions.insert({
    "details": "<p>Let <var>f</var>(<var>N</var>) be the number of points with integer coordinates that are on a circle passing through (0,0), (<var>N</var>,0),(0,<var>N</var>), and (<var>N</var>,<var>N</var>).</p><p>It can be shown that <var>f</var>(10000)\u2009=\u200936.</p><p>What is the sum of all positive integers <var>N</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u200910<sup>11</sup> such that <var>f</var>(<var>N</var>)\u2009=\u2009420\u2009?</p>",
    "folder": "lattice-points-on-a-circle",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lattice points on a circle"
});

db.questions.insert({
    "details": "<p>Let <var>f</var>(<var>n</var>) be the number of couples (<var>x</var>,<var>y</var>) with <var>x</var> and <var>y</var> positive integers, <var>x</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>y</var> and the least common multiple of <var>x</var> and <var>y</var> equal to <var>n</var>.</p><p>Let <var>g</var> be the <b>summatory function</b> of <var>f</var>, i.e.: <var>g</var>(<var>n</var>) = <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> <var>f</var>(<var>i</var>)  for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>.<p><p>You are given that <var>g</var>(10<sup>6</sup>) = 37429395.</p><p>Find <var>g</var>(10<sup>12</sup>).</p></p></p>",
    "folder": "least-common-multiple-count",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Least common multiple count"
});

db.questions.insert({
    "details": "<p>We call the convex area enclosed by two circles a <i>lenticular hole</i> if:<ul><li>The centres of both circles are on lattice points.</li><li>The two circles intersect at two distinct lattice points.</li><li>The interior of the convex area enclosed by both circles does not contain any lattice points.</li></ul></p><p>Consider the circles:<br/>C<sub>0</sub>: <var>x</var><sup>2</sup>+<var>y</var><sup>2</sup>=25<br/>C<sub>1</sub>: (<var>x</var>+4)<sup>2</sup>+(<var>y</var>-4)<sup>2</sup>=1<br/>C<sub>2</sub>: (<var>x</var>-12)<sup>2</sup>+(<var>y</var>-4)<sup>2</sup>=65</p><p>The circles C<sub>0</sub>, C<sub>1</sub> and C<sub>2</sub> are drawn in the picture below.</p><div align=\"center\"><img src=\"project/images/p295_lenticular.gif\"/></div><p>C<sub>0</sub> and C<sub>1</sub> form a lenticular hole, as well as C<sub>0</sub> and C<sub>2</sub>.</p><p>We call an ordered pair of positive real numbers (r<sub>1</sub>, r<sub>2</sub>) a <i>lenticular pair</i> if there exist two circles with radii r<sub>1</sub> and r<sub>2</sub> that form a lenticular hole.We can verify that (1, 5) and (5, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>65) are the lenticular pairs of the example above.</p><p>Let L(N) be the number of <b>distinct</b> lenticular pairs (r<sub>1</sub>, r<sub>2</sub>) for which 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> r<sub>1</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> r<sub>2</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N.<br/>We can verify that L(10) = 30 and L(100) = 3442.</p><p>Find L(100 000).</p>",
    "folder": "lenticular-holes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lenticular holes"
});

db.questions.insert({
    "details": "<p>A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:</p><p style=\"text-align:center;\">012\u00a0 \u00a0021\u00a0 \u00a0102\u00a0 \u00a0120\u00a0 \u00a0201\u00a0 \u00a0210</p><p>What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?</p>",
    "folder": "lexicographic-permutations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lexicographic permutations"
});

db.questions.insert({
    "details": "<p>Oregon licence plates consist of three letters followed by a three digit number (each digit can be from [0..9]).<br/>While driving to work Seth plays the following game:<br/>Whenever the numbers of two licence plates seen on his trip add to 1000 that's a win.</p><p>E.g. MIC-012 and HAN-988 is a win and RYU-500 and SET-500 too. (as long as he sees them in the same trip). <p><p>Find the expected number of plates he needs to see for a win.<br/>Give your answer rounded to 8 decimal places behind the decimal point.</p><p style=\"font-size:88%\"><b>Note:</b> We assume that each licence plate seen is equally likely to have any three digit number on it.</p></p></p>",
    "folder": "licence-plates",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Licence plates"
});

db.questions.insert({
    "details": "<p>Given the values of integers 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var><sub>1</sub> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var><sub>2</sub> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>... <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var><sub><var>n</var></sub>, consider the linear combination<br/> <var>q</var><sub>1</sub><var>a</var><sub>1</sub> + <var>q</var><sub>2</sub><var>a</var><sub>2</sub> + ... + <var>q</var><sub><var>n</var></sub><var>a</var><sub><var>n</var></sub> = <var>b</var>, using only integer values <var>q</var><sub><var>k</var></sub> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0. </p><p>Note that for a given set of <var>a</var><sub><var>k</var></sub>, it may be that not all values of <var>b</var> are possible.<br/>For instance, if <var>a</var><sub>1</sub> = 5 and <var>a</var><sub>2</sub> = 7, there are no <var>q</var><sub>1</sub> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0 and <var>q</var><sub>2</sub> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0 such that <var>b</var> could be<br/> 1, 2, 3, 4, 6, 8, 9, 11, 13, 16, 18 or 23.<br/>In fact, 23 is the largest impossible value of <var>b</var> for <var>a</var><sub>1</sub> = 5 and <var>a</var><sub>2</sub> = 7.<br/> We therefore call <var>f</var>(5, 7) = 23.<br/> Similarly, it can be shown that <var>f</var>(6, 10, 15)=29 and <var>f</var>(14, 22, 77) = 195.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> <var>f</var>(<var>p*q,p*r,q*r</var>), where <var>p</var>, <var>q</var> and <var>r</var> are prime numbers and <var>p</var> &lt; <var>q</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>r</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5000.</p>",
    "folder": "linear-combinations-of-semipri",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Linear Combinations of Semiprimes"
});

db.questions.insert({
    "details": "<p>The following iterative sequence is defined for the set of positive integers:</p><p style=\"margin-left:50px;\"><var>n</var> <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> <var>n</var>/2 (<var>n</var> is even)<br/><var>n</var> <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 3<var>n</var> + 1 (<var>n</var> is odd)</p><p>Using the rule above and starting with 13, we generate the following sequence:</p><div style=\"text-align:center;\">13 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 40 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 20 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 10 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 5 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 16 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 8 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 4 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 2 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 1</div><p>It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.</p><p>Which starting number, under one million, produces the longest chain?</p><p class=\"info\"><b>NOTE:</b> Once the chain starts the terms are allowed to go above one million.</p>",
    "folder": "longest-collatz-sequence",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Longest Collatz sequence"
});

db.questions.insert({
    "details": "<p>The <b>look and say</b> sequence goes 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, ...<br/>The sequence starts with 1 and all other members are obtained by describing the previous member in terms of consecutive digits.<br/>It helps to do this out loud:<br/>1 is 'one one' <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 11<br/>11 is 'two ones' <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 21<br/>21 is 'one two and one one' <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 1211 <br>1211 is 'one one, one two and two ones' <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 111221<br/>111221 is 'three ones, two twos and one one' <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 312211<br/>...</br></p><p>Define A(n), B(n) and C(n) as the number of ones, twos and threes in the n'th element of the sequence respectively.<br/>One can verify that A(40) = 31254, B(40) = 20259 and C(40) = 11625.</p><p>Find A(n), B(n) and C(n) for n = 10<sup>12</sup>.<br/> Give your answer modulo 2<sup>30</sup> and separate your values for A, B and C by a comma.<br/> E.g. for n = 40 the answer would be 31254,20259,11625</p>",
    "folder": "look-and-say-sequence",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Look and say sequence"
});

db.questions.insert({
    "details": "<p>We are trying to find a hidden number selected from the set of integers{1, 2, ..., <var>n</var>} by asking questions. Each number (question) we ask, has a <u>cost equal to the number asked</u> and we get one of three possible answers:<br/><ul><li> \"Your guess is lower than the hidden number\", or</li><li> \"Yes, that's it!\", or</li><li> \"Your guess is higher than the hidden number\".</li></ul></p><p>Given the value of <var>n</var>, an <i>optimal strategy</i> minimizes the total cost (i.e. the sum of all the questions asked) <u>for the worst possible case</u>. E.g.</p><p>If <var>n</var>=3, the best we can do is obviously to ask the number \"<b>2</b>\". The answer will immediately lead us to find the hidden number (at a total cost = 2).</p><p>If <var>n</var>=8, we might decide to use a \"binary search\" type of strategy: Our first question would be \"<b>4</b>\" and if the hidden number is higher than 4 we will need one or two additional questions.<br/>Let our second question be \"<b>6</b>\". If the hidden number is still higher than 6, we will need a third question in order to discriminate between 7 and 8.<br/>Thus, our third question will be \"<b>7</b>\" and the total cost for this worst-case scenario will be 4+6+7=<span style=\"color:red;\"><b>17</b></span>.</p><p>We can improve considerably the worst-case cost for <var>n</var>=8, by asking \"<b>5</b>\" as our first question.<br/>If we are told that the hidden number is higher than 5, our second question will be \"<b>7</b>\", then we'll know for certain what the hidden number is (for a total cost of 5+7=<span style=\"color:blue;\"><b>12</b></span>).<br/>If we are told that the hidden number is lower than 5, our second question will be \"<b>3</b>\" and if the hidden number is lower than 3 our third question will be \"<b>1</b>\", giving a total cost of 5+3+1=<span style=\"color:blue;\"><b>9</b></span>.<br/>Since <span style=\"color:blue;\"><b>12</b></span>&gt;<span style=\"color:blue;\"><b>9</b></span>, the worst-case cost for this strategy is <span style=\"color:red;\"><b>12</b></span>. That's better than what we achieved previously with the \"binary search\" strategy; it is also better than or equal to any other strategy.<br/>So, in fact, we have just described an optimal strategy for <var>n</var>=8.</p><p>Let C(<var>n</var>) be the worst-case cost achieved by an optimal strategy for <var>n</var>, as described above.<br/>Thus C(1) = 0, C(2) = 1, C(3) = 2 and C(8) = 12.<br/>Similarly, C(100) = 400 and <img src=\"project/images/p_328_sum1.gif\" style=\"vertical-align:middle\"/>C(<var>n</var>) = 17575.</p><p>Find <img src=\"project/images/p_328_sum2.gif\" style=\"vertical-align:middle\"/>C(<var>n</var>).</p>",
    "folder": "lowest-cost-search",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lowest-cost Search"
});

db.questions.insert({
    "details": "<style type=\"text/css\">table.p236, table.p236 th, table.p236 td{  border-width: 1px 1px 1px 1px;  border-style: solid solid solid solid;  border-color: black black black black;  text-align:right;  -moz-border-radius: 0px 0px 0px 0px;}table.p236{  border-spacing: 1px;  border-collapse: separate;  background-color: rgb(224,237,252);}table.p236 th, table.p236 td{  padding: 1px 6px 1px 6px;}table.p236 th{ background-color: rgb(193,218,249); }table.p236 td{ background-color: rgb(255,255,255); }</style><p>Suppliers 'A' and 'B' provided the following numbers of products for the luxury hamper market:</p><p><center><table class=\"p236\"><tr><th>Product</th><th style=\"text-align:center\">'A'</th><th style=\"text-align:center\">'B'</th></tr><tr><td>Beluga Caviar</td><td>5248</td><td>640</td></tr><tr><td>Christmas Cake</td><td>1312</td><td>1888</td></tr><tr><td>Gammon Joint</td><td>2624</td><td>3776</td></tr><tr><td>Vintage Port</td><td>5760</td><td>3776</td></tr><tr><td>Champagne Truffles</td><td>3936</td><td>5664</td></tr></table></center></p><p>Although the suppliers try very hard to ship their goods in perfect condition, there is inevitably some spoilage - <i>i.e.</i> products gone bad.</p><p>The suppliers compare their performance using two types of statistic:<ul><li>The five <i>per-product spoilage rates</i> for each supplier are equal to the number of products gone bad divided by the number of products supplied, for each of the five products in turn.</li><li>The <i>overall spoilage rate</i> for each supplier is equal to the total number of products gone bad divided by the total number of products provided by that supplier.</li></ul></p><p>To their surprise, the suppliers found that each of the five per-product spoilage rates was worse (higher) for 'B' than for 'A' by the same factor (ratio of spoilage rates), <var>m</var>&gt;1; and yet, paradoxically, the overall spoilage rate was worse for 'A' than for 'B', also by a factor of <var>m</var>.</p><p>There are thirty-five <var>m</var><img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>1 for which this surprising result could have occurred, the smallest of which is 1476/1475.</p><p>What's the largest possible value of <var>m</var>?<br/>Give your answer as a fraction reduced to its lowest terms, in the form <var>u</var>/<var>v</var>.</p>",
    "folder": "luxury-hampers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Luxury Hampers"
});

db.questions.insert({
    "details": "<p>If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.</p><p>Not all numbers produce palindromes so quickly. For example,</p><p style=\"margin-left:50px;\">349 + 943 = 1292,<br/>1292 + 2921 = 4213<br/>4213 + 3124 = 7337</p><p>That is, 349 took three iterations to arrive at a palindrome.</p><p>Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).</p><p>Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.</p><p>How many Lychrel numbers are there below ten-thousand?</p><p class=\"info\">NOTE: Wording was modified slightly on 24 April 2007 to emphasise the theoretical nature of Lychrel numbers.</p>",
    "folder": "lychrel-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Lychrel numbers"
});

db.questions.insert({
    "details": "<p>Consider the following \"magic\" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_068_1.gif\"/><br/></div><p>Working <b>clockwise</b>, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.</p><p>It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.</p><div style=\"text-align:center;\"><table cellpadding=\"0\" cellspacing=\"0\" width=\"400\"><tr><td width=\"100\"><b>Total</b></td><td width=\"300\"><b>Solution Set</b></td></tr><tr><td>9</td><td>4,2,3; 5,3,1; 6,1,2</td></tr><tr><td>9</td><td>4,3,2; 6,2,1; 5,1,3</td></tr><tr><td>10</td><td>2,3,5; 4,5,1; 6,1,3</td></tr><tr><td>10</td><td>2,5,3; 6,3,1; 4,1,5</td></tr><tr><td>11</td><td>1,4,6; 3,6,2; 5,2,4</td></tr><tr><td>11</td><td>1,6,4; 5,4,2; 3,2,6</td></tr><tr><td>12</td><td>1,5,6; 2,6,4; 3,4,5</td></tr><tr><td>12</td><td>1,6,5; 3,5,4; 2,4,6</td></tr></table></div><p>By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.</p><p>Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. What is the maximum <b>16-digit</b> string for a \"magic\" 5-gon ring?</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_068_2.gif\"/><br/></div>",
    "folder": "magic-5-gon-ring",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Magic 5-gon ring"
});

db.questions.insert({
    "details": "<p>We define the Matrix Sum of a matrix as the maximum sum of matrix elements with each element being the only one in his row and column. For example, the Matrix Sum of the matrix below equals 3315 ( = 863 + 383 + 343 + 959 + 767):</p><p style=\"text-align:center;font-family:courier new;\">\u00a0\u00a07 \u00a053 183 439 <span style=\"color:#00ff00;font-family:courier new;\"><b>863</b></span><br/>497 <span style=\"color:#00ff00;font-family:courier new;\"><b>383</b></span> 563 \u00a079 973<br/>287 \u00a063 <span style=\"color:#00ff00;font-family:courier new;\"><b>343</b></span> 169 583<br/>627 343 773 <span style=\"color:#00ff00;font-family:courier new;\"><b>959</b></span> 943<br/><span style=\"color:#00ff00;font-family:courier new;\"><b>767</b></span> 473 103 699 303<br/></p><p>Find the Matrix Sum of:<br/></p><p style=\"text-align:center;font-family:courier new;\">\u00a0\u00a07 \u00a053 183 439 863 497 383 563 \u00a079 973 287 \u00a063 343 169 583<br/>627 343 773 959 943 767 473 103 699 303 957 703 583 639 913<br/>447 283 463 \u00a029 \u00a023 487 463 993 119 883 327 493 423 159 743<br/>217 623 \u00a0\u00a03 399 853 407 103 983 \u00a089 463 290 516 212 462 350<br/>960 376 682 962 300 780 486 502 912 800 250 346 172 812 350<br/>870 456 192 162 593 473 915 \u00a045 989 873 823 965 425 329 803<br/>973 965 905 919 133 673 665 235 509 613 673 815 165 992 326<br/>322 148 972 962 286 255 941 541 265 323 925 281 601 \u00a095 973<br/>445 721 \u00a011 525 473 \u00a065 511 164 138 672 \u00a018 428 154 448 848<br/>414 456 310 312 798 104 566 520 302 248 694 976 430 392 198<br/>184 829 373 181 631 101 969 613 840 740 778 458 284 760 390<br/>821 461 843 513 \u00a017 901 711 993 293 157 274 \u00a094 192 156 574<br/>\u00a034 124 \u00a0\u00a04 878 450 476 712 914 838 669 875 299 823 329 699<br/>815 559 813 459 522 788 168 586 966 232 308 833 251 631 107<br/>813 883 451 509 615 \u00a077 281 613 459 205 380 274 302 \u00a035 805<br/></p>",
    "folder": "matrix-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Matrix Sum"
});

db.questions.insert({
    "details": "<p>Define Co(<var>n</var>) to be the maximal possible sum of a set of mutually co-prime elements from{1,\u00a02,\u00a0...,\u00a0<var>n</var>}.<br/> For example Co(10) is 30 and hits that maximum on the subset{1,\u00a05,\u00a07,\u00a08,\u00a09}.</p><p>You are given that Co(30) = 193 and Co(100) = 1356. </p><p>Find Co(200000).</p>",
    "folder": "maximal-coprime-subset",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximal coprime subset"
});

db.questions.insert({
    "details": "<p>Let S<sub>m</sub> = (x<sub>1</sub>, x<sub>2</sub>, ... , x<sub>m</sub>) be the m-tuple of positive real numbers with x<sub>1</sub> + x<sub>2</sub> + ... + x<sub>m</sub> = m for which P<sub>m</sub> = x<sub>1</sub> * x<sub>2</sub><sup>2</sup> * ... * x<sub>m</sub><sup>m</sup> is maximised.</p><p>For example, it can be verified that [P<sub>10</sub>] = 4112 ([ ] is the integer part function).</p><p>Find \u03a3[P<sub>m</sub>] for 2 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> m <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 15.</p>",
    "folder": "maximising-a-weighted-product",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximising a weighted product\r\n"
});

db.questions.insert({
    "details": "<p>A train is used to transport four carriages in the order: ABCD. However, sometimes when the train arrives to collect the carriages they are not in the correct order. <br/>To rearrange the carriages they are all shunted on to a large rotating turntable. After the carriages are uncoupled at a specific point the train moves off the turntable pulling the carriages still attached with it. The remaining carriages are rotated 180 degrees. All of the carriages are then rejoined and this process is repeated as often as necessary in order to obtain the least number of uses of the turntable.<br/>Some arrangements, such as ADCB, can be solved easily: the carriages are separated between A and D, and after DCB are rotated the correct order has been achieved.</p><p>However, Simple Simon, the train driver, is not known for his efficiency, so he always solves the problem by initially getting carriage A in the correct place, then carriage B, and so on.</p><p>Using four carriages, the worst possible arrangements for Simon, which we shall call <i>maximix arrangements</i>, are DACB and DBAC; each requiring him five rotations (although, using the most efficient approach, they could be solved using just three rotations). The process he uses for DACB is shown below.</p><div align=\"center\"><img src=\"project/images/p_336_maximix.gif\"/></div><p>It can be verified that there are 24 maximix arrangements for six carriages, of which the tenth lexicographic maximix arrangement is DFAECB.</p><p>Find the 2011<sup>th</sup> lexicographic maximix arrangement for eleven carriages.</p>",
    "folder": "maximix-arrangements",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximix Arrangements"
});

db.questions.insert({
    "details": "<p>An integer partition of a number <var>n</var> is a way of writing <var>n</var> as a sum of positive integers.</p><p>Partitions that differ only in the order of their summands are considered the same.A partition of <var>n</var> into <b>distinct parts</b> is a partition of <var>n</var> in which every part occurs at most once.</p><p>The partitions of 5 into distinct parts are:<br/>5, 4+1 and 3+2.</p><p>Let f(<var>n</var>) be the maximum product of the parts of any such partition of <var>n</var> into distinct parts and let m(<var>n</var>) be the number of elements of any such partition of <var>n</var> with that product.</p><p>So f(5)=6 and m(5)=2.</p><p>For <var>n</var>=10 the partition with the largest product is 10=2+3+5, which gives f(10)=30 and m(10)=3.<br/>And their product, f(10)\u00b7m(10) = 30\u00b73 = 90</p><p>It can be verified that<br/><img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>f(<var>n</var>)\u00b7m(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 = 1683550844462.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>f(<var>n</var>)\u00b7m(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>14</sup>.<br/>Give your answer modulo 982451653, the 50 millionth prime.</p>",
    "folder": "maximum-integer-partition-prod",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximum Integer Partition Product\r\n"
});

db.questions.insert({
    "details": "<p>Let <var>n</var> be an integer and <var>S</var>(<var>n</var>) be the set of factors of <var>n</var>.</p><p>A subset <var>A</var> of <var>S</var>(<var>n</var>) is called an <b>antichain</b> of <var>S</var>(<var>n</var>) if <var>A</var> contains only one element or if none of the elements of <var>A</var> divides any of the other elements of <var>A</var>.</p><p>For example: <var>S</var>(30) ={1, 2, 3, 5, 6, 10, 15, 30}<br/{2, 5, 6} is not an antichain of <var>S</var>(30).<br/{2, 3, 5} is an antichain of <var>S</var>(30).</p><p>Let <var>N</var>(<var>n</var>) be the maximum length of an antichain of <var>S</var>(<var>n</var>).</p><p>Find \u03a3<var>N</var>(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>8</sup></p>",
    "folder": "maximum-length-of-an-antichain",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximum length of an antichain"
});

db.questions.insert({
    "details": "<p>By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.</p><p style=\"text-align:center;font-family:courier new;font-size:12pt;\"><span style=\"color:#ff0000;\"><b>3</b></span><br/><span style=\"color:#ff0000;\"><b>7</b></span> 4<br/>2 <span style=\"color:#ff0000;\"><b>4</b></span> 6<br/>8 5 <span style=\"color:#ff0000;\"><b>9</b></span> 3</p><p>That is, 3 + 7 + 4 + 9 = 23.</p><p>Find the maximum total from top to bottom of the triangle below:</p><p style=\"text-align:center;font-family:courier new;\">75<br/>95 64<br/>17 47 82<br/>18 35 87 10<br/>20 04 82 47 65<br/>19 01 23 75 03 34<br/>88 02 77 73 07 63 67<br/>99 65 04 28 06 16 70 92<br/>41 41 26 56 83 40 80 70 33<br/>41 48 72 33 47 32 37 16 94 29<br/>53 71 44 65 25 43 91 52 97 51 14<br/>70 11 33 28 77 73 17 78 39 68 17 57<br/>91 71 52 38 17 14 91 43 58 50 27 29 48<br/>63 66 04 68 89 53 67 30 73 16 69 87 40 31<br/>04 62 98 27 23 09 70 98 73 93 38 53 60 04 23</p><p class=\"info\"><b>NOTE:</b> As there are only 16384 routes, it is possible to solve this problem by trying every route. However, <a href=\"index.php?section=problems&amp;id=67\">Problem 67</a>, is the same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)</p>",
    "folder": "maximum-path-sum-i",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximum path sum I"
});

db.questions.insert({
    "details": "<p>By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.</p><p style=\"text-align:center;font-family:courier new;font-size:12pt;\"><span style=\"color:#ff0000;\"><b>3</b></span><br/><span style=\"color:#ff0000;\"><b>7</b></span> 4<br/>2 <span style=\"color:#ff0000;\"><b>4</b></span> 6<br/>8 5 <span style=\"color:#ff0000;\"><b>9</b></span> 3</p><p>That is, 3 + 7 + 4 + 9 = 23.</p><p>Find the maximum total from top to bottom in <a href=\"project/triangle.txt\">triangle.txt</a> (right click and 'Save Link/Target As...'), a 15K text file containing a triangle with one-hundred rows.</p><p class=\"info\"><b>NOTE:</b> This is a much more difficult version of <a href=\"index.php?section=problems&amp;id=18\">Problem 18</a>. It is not possible to try every route to solve this problem, as there are 2<sup>99</sup> altogether! If you could check one trillion (10<sup>12</sup>) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)</p>",
    "folder": "maximum-path-sum-ii",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximum path sum II"
});

db.questions.insert({
    "details": "<p>Let N be a positive integer and let N be split into <var>k</var> equal parts, <var>r</var> = N/<var>k</var>, so that N = <var>r</var> + <var>r</var> + ... + <var>r</var>.<br/>Let P be the product of these parts, P = <var>r</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>r</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> ... <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>r</var> = <var>r</var><sup><var>k</var></sup>.</p><p>For example, if 11 is split into five equal parts, 11 = 2.2 + 2.2 + 2.2 + 2.2 + 2.2, then P = 2.2<sup>5</sup> = 51.53632.</p><p>Let M(N) = P<sub>max</sub> for a given value of N.</p><p>It turns out that the maximum for N = 11 is found by splitting eleven into four equal parts which leads to P<sub>max</sub> = (11/4)<sup>4</sup>; that is, M(11) = 14641/256 = 57.19140625, which is a terminating decimal.</p><p>However, for N = 8 the maximum is achieved by splitting it into three equal parts, so M(8) = 512/27, which is a non-terminating decimal.</p><p>Let D(N) = N if M(N) is a non-terminating decimal and D(N) = -N if M(N) is a terminating decimal.</p><p>For example, \u03a3D(N) for 5 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 is 2438.</p><p>Find \u03a3D(N) for 5 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10000.</p>",
    "folder": "maximum-product-of-parts",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Maximum product of parts"
});

db.questions.insert({
    "details": "<p>An  <var>n</var><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/><var>n</var> grid of squares contains  <var>n</var><sup>2</sup> ants, one ant per square.<br/>All ants decide to move simultaneously to an adjacent square (usually 4 possibilities, except for ants on the edge of the grid or at the corners).<br/>We define <var>f</var>(<var>n</var>) to be the number of ways this can happen without any ants ending on the same square and without any two ants crossing the same edge between two squares.</p><p>You are given that <var>f</var>(4) = 88.<br/>Find  <var>f</var>(10).</p>",
    "folder": "migrating-ants",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Migrating ants"
});

db.questions.insert({
    "details": "<p>The following undirected network consists of seven vertices and twelve edges with a total weight of 243.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"278\" src=\"project/images/p_107_1.gif\" width=\"381\"/><br/></div><p>The same network can be represented by the matrix below.</p><table align=\"center\" border=\"1\" cellpadding=\"5\" cellspacing=\"0\"><tr><td>\u00a0\u00a0\u00a0\u00a0</td><td><b>A</b></td><td><b>B</b></td><td><b>C</b></td><td><b>D</b></td><td><b>E</b></td><td><b>F</b></td><td><b>G</b></td></tr><tr><td><b>A</b></td><td>-</td><td>16</td><td>12</td><td>21</td><td>-</td><td>-</td><td>-</td></tr><tr><td><b>B</b></td><td>16</td><td>-</td><td>-</td><td>17</td><td>20</td><td>-</td><td>-</td></tr><tr><td><b>C</b></td><td>12</td><td>-</td><td>-</td><td>28</td><td>-</td><td>31</td><td>-</td></tr><tr><td><b>D</b></td><td>21</td><td>17</td><td>28</td><td>-</td><td>18</td><td>19</td><td>23</td></tr><tr><td><b>E</b></td><td>-</td><td>20</td><td>-</td><td>18</td><td>-</td><td>-</td><td>11</td></tr><tr><td><b>F</b></td><td>-</td><td>-</td><td>31</td><td>19</td><td>-</td><td>-</td><td>27</td></tr><tr><td><b>G</b></td><td>-</td><td>-</td><td>-</td><td>23</td><td>11</td><td>27</td><td>-</td></tr></table><p>However, it is possible to optimise the network by removing some edges and still ensure that all points on the network remain connected. The network which achieves the maximum saving is shown below. It has a weight of 93, representing a saving of 243 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 93 = 150 from the original network.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"288\" src=\"project/images/p_107_2.gif\" width=\"385\"/><br/></div><p>Using <a href=\"project/network.txt\">network.txt</a> (right click and 'Save Link/Target As...'), a 6K text file containing a network with forty vertices, and given in matrix form, find the maximum saving which can be achieved by removing redundant edges whilst ensuring that the network remains connected.</p>",
    "folder": "minimal-network",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Minimal network"
});

db.questions.insert({
    "details": "<style type=\"text/css\">table.p375 td{  padding: 0px 3px 0px 3px;  vertical-align: bottom;  text-align: left;}</style><p>Let <var>S</var><sub><var>n</var></sub> be an integer sequence produced with the following pseudo-random number generator:</p><center><table class=\"p375\"><tr><td style=\"text-align:right\"><var>S</var><sub>0</sub></td><td>=<sub>\u00a0</sub></td><td>290797<sub>\u00a0</sub></td></tr><tr><td><var>S</var><sub><var>n</var>+1</sub></td><td>=<sub>\u00a0</sub></td><td><var>S</var><sub><var>n</var></sub><sup>2</sup> mod 50515093</td></tr></table></center><p>Let A(<var>i</var>, <var>j</var>) be the minimum of the numbers <var>S</var><sub><var>i</var></sub>, <var>S</var><sub><var>i</var>+1</sub>, ... , <var>S</var><sub><var>j</var></sub> for <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>j</var>.<br/>Let M(<var>N</var>) = \u03a3A(<var>i</var>, <var>j</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>j</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>We can verify that M(10) = 432256955 and M(10 000) = 3264567774119.</p><p>Find M(2 000 000 000).</p>",
    "folder": "minimum-of-subsequences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Minimum of subsequences"
});

db.questions.insert({
    "details": "<p>Let <var>S</var><sub>n</sub> be the regular <var>n</var>-sided polygon \u2013 or <i>shape</i> \u2013 whose vertices <var>v</var><sub><var>k</var></sub> (<var>k</var>\u2009=\u20091,2,\u2026,<var>n</var>) have coordinates:</p><table><tr><td width=\"40\"></td><td><var>x</var><sub><var>k</var></sub>\u00a0\u2009\u00a0= \u2009        cos( <sup>2<var>k</var>-1</sup>/<sub><var>n</var></sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>180\u00b0\u2009)</td></tr><tr><td width=\"40\"></td><td><var>y</var><sub><var>k</var></sub>\u00a0\u2009\u00a0= \u00a0        sin( <sup>2<var>k</var>-1</sup>/<sub><var>n</var></sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>180\u00b0\u2009)</td></tr></table><p>Each <var>S</var><sub><var>n</var></sub> is to be interpreted as a filled shape consisting of all points on the perimeter and in the interior.</p><p>The <i>Minkowski sum</i>, <var>S</var>+<var>T</var>, of two shapes <var>S</var> and <var>T</var> is the result of adding every point in <var>S</var> to every point in <var>T</var>, where point addition is performed coordinate-wise: (<var>u</var>,\u2009<var>v</var>) + (<var>x</var>,\u2009<var>y</var>) = (<var>u</var>+<var>x</var>,\u2009<var>v</var>+<var>y</var>).</p><p>For example, the sum of <var>S</var><sub>3</sub> and <var>S</var><sub>4</sub> is the six-sided shape shown in pink below:</p><div style=\"text-align:center;\"><img alt=\"picture showing S_3 + S_4\" src=\"project/images/p_228.png\"/></div><p>How many sides does <var>S</var><sub>1864</sub>\u2009+\u2009<var>S</var><sub>1865</sub>\u2009+\u2009\u2026\u2009+\u2009<var>S</var><sub>1909</sub> have?</p>",
    "folder": "minkowski-sums",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Minkowski Sums"
});

db.questions.insert({
    "details": "<p>Consider the infinite polynomial series A<sub>G</sub>(<i>x</i>) = <i>x</i>G<sub>1</sub> + <i>x</i><sup>2</sup>G<sub>2</sub> + <i>x</i><sup>3</sup>G<sub>3</sub> + ..., where G<sub><i>k</i></sub> is the <i>k</i>th term of the second order recurrence relation G<sub><i>k</i></sub> = G<sub><i>k</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</sub> + G<sub><i>k</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2</sub>, G<sub>1</sub> = 1 and G<sub>2</sub> = 4; that is, 1, 4, 5, 9, 14, 23, ... .</p><p>For this problem we shall be concerned with values of <i>x</i> for which A<sub>G</sub>(<i>x</i>) is a positive integer.</p><p>The corresponding values of <i>x</i> for the first five natural numbers are shown below.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td><b><i>x</i></b></td><td width=\"50\"><b>A<sub>G</sub>(<i>x</i>)</b></td></tr><tr><td>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>5<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)/4</td><td>1</td></tr><tr><td>2/5</td><td>2</td></tr><tr><td>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>22<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2)/6</td><td>3</td></tr><tr><td>(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>137<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>5)/14</td><td>4</td></tr><tr><td>1/2</td><td>5</td></tr></table></div><p>We shall call A<sub>G</sub>(<i>x</i>) a golden nugget if <i>x</i> is rational, because they become increasingly rarer; for example, the 20th golden nugget is 211345365.</p><p>Find the sum of the first thirty golden nuggets.</p>",
    "folder": "modified-fibonacci-golden-nugg",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Modified Fibonacci golden nuggets"
});

db.questions.insert({
    "details": "<p>For a positive number <var>n</var>, define S(<var>n</var>) as the sum of the integers <var>x,</var> for which 1<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>x</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var> and<br/> <var>x</var><sup>3</sup><img alt=\"\u2261\" border=\"0\" height=\"11\" src=\"images/symbol_cong.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1 mod <var>n</var>.</p><p>When <var>n</var>=91, there are 8 possible values for <var>x</var>, namely : 9, 16, 22, 29, 53, 74, 79, 81.<br/>Thus, S(91)=9+16+22+29+53+74+79+81=363.</p><p>Find S(13082761331670030).</p>",
    "folder": "modular-cubes-part-1",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Modular Cubes, part 1"
});

db.questions.insert({
    "details": "<p>For a positive number <var>n</var>, define C(<var>n</var>) as the number of the integers <var>x,</var> for which 1<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>x</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var> and<br/> <var>x</var><sup>3</sup><img alt=\"\u2261\" border=\"0\" height=\"11\" src=\"images/symbol_cong.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1 mod <var>n</var>.</p><p>When <var>n</var>=91, there are 8 possible values for <var>x</var>, namely : 9, 16, 22, 29, 53, 74, 79, 81.<br/>Thus, C(91)=8.</p><p>Find the sum of the positive numbers <var>n</var><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>10<sup>11</sup> for which C(<var>n</var>)=242.</p>",
    "folder": "modular-cubes-part-2",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Modular Cubes, part 2"
});

db.questions.insert({
    "details": "<p>Let <var>a<sub>n</sub></var> be a sequence recursively defined by: <img src=\"project/images/p_326_formula1.gif\" style=\"vertical-align:middle;\"/>. </p><p>So the first 10 elements of <var>a<sub>n</sub></var> are: 1,1,0,3,0,3,5,4,1,9.</p><p>Let <var>f</var>(<var>N,M</var>) represent the number of pairs (<var>p,q</var>) such that: <div align=\"center\"><img src=\"project/images/p_326_formula2.gif\"/></div></p><p>It can be seen that <var>f</var>(10,10)=4 with the pairs (3,3), (5,5), (7,9) and (9,10).</p><p>You are also given that <var>f</var>(10<sup>4</sup>,10<sup>3</sup>)=97158.</p><p>Find <var>f</var>(10<sup>12</sup>,10<sup>6</sup>).</p>",
    "folder": "modulo-summations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Modulo Summations"
});

db.questions.insert({
    "details": "<p>In the game, <i>Monopoly</i>, the standard board is set up in the following way:</p><div style=\"text-align:center;\"><table align=\"center\" border=\"0\" cellpadding=\"5\" cellspacing=\"1\" style=\"background-color:#333333;\"><tr><td style=\"background-color:#ffffff;\">GO</td><td style=\"background-color:#ffffff;\">A1</td><td style=\"background-color:#ffffff;\">CC1</td><td style=\"background-color:#ffffff;\">A2</td><td style=\"background-color:#ffffff;\">T1</td><td style=\"background-color:#ffffff;\">R1</td><td style=\"background-color:#ffffff;\">B1</td><td style=\"background-color:#ffffff;\">CH1</td><td style=\"background-color:#ffffff;\">B2</td><td style=\"background-color:#ffffff;\">B3</td><td style=\"background-color:#ffffff;\">JAIL</td></tr><tr><td style=\"background-color:#ffffff;\">H2</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">C1</td></tr><tr><td style=\"background-color:#ffffff;\">T2</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">U1</td></tr><tr><td style=\"background-color:#ffffff;\">H1</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">C2</td></tr><tr><td style=\"background-color:#ffffff;\">CH3</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">C3</td></tr><tr><td style=\"background-color:#ffffff;\">R4</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">R2</td></tr><tr><td style=\"background-color:#ffffff;\">G3</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">D1</td></tr><tr><td style=\"background-color:#ffffff;\">CC3</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">CC2</td></tr><tr><td style=\"background-color:#ffffff;\">G2</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">D2</td></tr><tr><td style=\"background-color:#ffffff;\">G1</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">D3</td></tr><tr><td style=\"background-color:#ffffff;\">G2J</td><td style=\"background-color:#ffffff;\">F3</td><td style=\"background-color:#ffffff;\">U2</td><td style=\"background-color:#ffffff;\">F2</td><td style=\"background-color:#ffffff;\">F1</td><td style=\"background-color:#ffffff;\">R3</td><td style=\"background-color:#ffffff;\">E3</td><td style=\"background-color:#ffffff;\">E2</td><td style=\"background-color:#ffffff;\">CH2</td><td style=\"background-color:#ffffff;\">E1</td><td style=\"background-color:#ffffff;\">FP</td></tr></table></div><p>A player starts on the GO square and adds the scores on two 6-sided dice to determine the number of squares they advance in a clockwise direction. Without any further rules we would expect to visit each square with equal probability: 2.5%. However, landing on G2J (Go To Jail), CC (community chest), and CH (chance) changes this distribution.</p><p>In addition to G2J, and one card from each of CC and CH, that orders the player to go directly to jail, if a player rolls three consecutive doubles, they do not advance the result of their 3rd roll. Instead they proceed directly to jail.</p><p>At the beginning of the game, the CC and CH cards are shuffled. When a player lands on CC or CH they take a card from the top of the respective pile and, after following the instructions, it is returned to the bottom of the pile. There are sixteen cards in each pile, but for the purpose of this problem we are only concerned with cards that order a movement; any instruction not concerned with movement will be ignored and the player will remain on the CC/CH square.</p><ul><li>Community Chest (2/16 cards):<ol><li>Advance to GO</li><li>Go to JAIL</li></ol></li><li>Chance (10/16 cards):<ol><li>Advance to GO</li><li>Go to JAIL</li><li>Go to C1</li><li>Go to E3</li><li>Go to H2</li><li>Go to R1</li><li>Go to next R (railway company)</li><li>Go to next R</li><li>Go to next U (utility company)</li><li>Go back 3 squares.</li></ol></li></ul><p>The heart of this problem concerns the likelihood of visiting a particular square. That is, the probability of finishing at that square after a roll. For this reason it should be clear that, with the exception of G2J for which the probability of finishing on it is zero, the CH squares will have the lowest probabilities, as 5/8 request a movement to another square, and it is the final square that the player finishes at on each roll that we are interested in. We shall make no distinction between \"Just Visiting\" and being sent to JAIL, and we shall also ignore the rule about requiring a double to \"get out of jail\", assuming that they pay to get out on their next turn.</p><p>By starting at GO and numbering the squares sequentially from 00 to 39 we can concatenate these two-digit numbers to produce strings that correspond with sets of squares.</p><p>Statistically it can be shown that the three most popular squares, in order, are JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. So these three most popular squares can be listed with the six-digit modal string: 102400.</p><p>If, instead of using two 6-sided dice, two 4-sided dice are used, find the six-digit modal string.</p>",
    "folder": "monopoly-odds",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Monopoly odds"
});

db.questions.insert({
    "details": "<p>The following equation represents the <i>continuous</i> topography of a mountainous region, giving the <dfn title=\"height above sea level\">elevation</dfn> <var>h</var> at any point (<var>x</var>,<var>y</var>):</p><div align=\"center\"><img src=\"project/images/p_262_formula1.gif\"/><br/></div><p>A mosquito intends to fly from A(200,200) to B(1400,1400), without leaving the area given by 0\u00a0\u2264\u00a0<var>x</var>,\u00a0<var>y</var>\u00a0\u2264\u00a01600.</p><p>Because of the intervening mountains, it first rises straight up to a point A', having elevation <var>f</var>. Then, while remaining at the same elevation <var>f</var>, it flies around any obstacles until it arrives at a point B' directly above B.</p><p>First, determine <var>f<sub>min</sub></var> which is the minimum constant elevation allowing such a trip from A to B, while remaining in the specified area.<br/>Then, find the length of the shortest path between A' and B', while flying at that constant elevation <var>f<sub>min</sub></var>.</p><p>Give that length as your answer, rounded to three decimal places.</p><p><font \"size='2\"'><u>Note</u>: For convenience, the elevation function shown above is repeated below, in a form suitable for most programming languages:<br/>h=( 5000-0.005*(x*x+y*y+x*y)+12.5*(x+y) ) * exp( -abs(0.000001*(x*x+y*y)-0.0015*(x+y)+0.7) )</font></p>",
    "folder": "mountain-range",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Mountain Range."
});

db.questions.insert({
    "details": "<p>If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</p><p>Find the sum of all the multiples of 3 or 5 below 1000.</p>",
    "folder": "multiples-of-3-and-5",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Multiples of 3 and 5"
});

db.questions.insert({
    "details": "<p>For a positive integer <var>n</var>, define <var>f</var>(<var>n</var>) as the least positive multiple of <var>n</var> that, written in base 10, uses only digits <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2.</p><p>Thus <var>f</var>(2)=2, <var>f</var>(3)=12, <var>f</var>(7)=21, <var>f</var>(42)=210, <var>f</var>(89)=1121222.</p><p>Also, <img src=\"project/images/p303_formula100.gif\" style=\"vertical-align:middle\">.</img></p><p>Find <img src=\"project/images/p303_formula10000.gif\" style=\"vertical-align:middle\">.</img></p>",
    "folder": "multiples-with-small-digits",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Multiples with small digits"
});

db.questions.insert({
    "details": "<p>A sequence of integers S ={s<sub><var>i</var></sub>} is called an <var>n-sequence</var> if it has <var>n</var> elements and each element s<sub><var>i</var></sub> satisfies 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> s<sub><var>i</var></sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>. Thus there are <var>n</var><sup><var>n</var></sup> distinct <var>n</var>-sequences in total.For example, the sequence S ={1, 5, 5, 10, 7, 7, 7, 2, 3, 7} is a 10-sequence.</p><p>For any sequence S, let L(S) be the length of the longest contiguous subsequence of S with the same value.For example, for the given sequence S above, L(S) = 3, because of the three consecutive 7's.</p><p>Let <var>f</var>(<var>n</var>) = <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> L(S) for all <var>n</var>-sequences S.</p><p>For example, <var>f</var>(3) = 45, <var>f</var>(7) = 1403689 and <var>f</var>(11) = 481496895121.</p><p>Find <var>f</var>(7\u00a0500\u00a0000) mod 1\u00a0000\u00a0000\u00a0009.</p>",
    "folder": "n-sequences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "n-sequences"
});

db.questions.insert({
    "details": "<p>Using <a href=\"project/names.txt\">names.txt</a> (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.</p><p>For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 53 = 49714.</p><p>What is the total of all the name scores in the file?</p>",
    "folder": "names-scores",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Names scores"
});

db.questions.insert({
    "details": "<p>Let <var>a</var>, <var>b</var> and <var>c</var> be positive numbers.<br/>Let W, X, Y, Z be four collinear points where |WX| = <var>a</var>, |XY| = <var>b</var>, |YZ| = <var>c</var> and |WZ| = <var>a</var> + <var>b</var> + <var>c</var>.<br/>Let C<sub>in</sub> be the circle having the diameter XY.<br/>Let C<sub>out</sub> be the circle having the diameter WZ.<br/></p><p>The triplet (<var>a</var>, <var>b</var>, <var>c</var>) is called a <em>necklace triplet</em> if you can place <var>k</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 3 distinct circles C<sub>1</sub>, C<sub>2</sub>, ..., C<sub><var>k</var></sub> such that:<ul><li>C<sub><var>i</var></sub> has no common interior points with any C<sub><var>j</var></sub> for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var>, <var>j</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> and <var>i</var> <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> <var>j</var>,<li>C<sub><var>i</var></sub> is tangent to both C<sub>in</sub> and C<sub>out</sub> for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var>,<li>C<sub><var>i</var></sub> is tangent to C<sub><var>i</var>+1</sub> for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> &lt; <var>k</var>, and<li>C<sub><var>k</var></sub> is tangent to C<sub>1</sub>.</li></li></li></li></ul></p><p>For example, (5, 5, 5) and (4, 3, 21) are necklace triplets, while it can be shown that (2, 2, 5) is not.</p><p align=\"center\"><img src=\"project/images/p428_necklace.png\"/></p><p>Let T(<var>n</var>) be the number of necklace triplets (<var>a</var>, <var>b</var>, <var>c</var>) such that <var>a</var>, <var>b</var> and <var>c</var> are positive integers, and <var>b</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>.For example, T(1)\u00a0=\u00a09, T(20)\u00a0=\u00a0732 and T(3000)\u00a0=\u00a0438106.</p><p>Find T(1\u00a0000\u00a0000\u00a0000).</p>",
    "folder": "necklace-of-circles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Necklace of circles"
});

db.questions.insert({
    "details": "<p>Let <var>n</var> be a positive integer. Consider <b>nim</b> positions where:<ul><li>There are <var>n</var> non-empty piles.<li>Each pile has size less than 2<sup><var>n</var></sup>.<li>No two piles have the same size.</li></li></li></ul></p><p>Let W(<var>n</var>) be the number of winning nim positions satisfying the aboveconditions (a position is winning if the first player has a winning strategy). For example, W(1) = 1, W(2) = 6, W(3) = 168, W(5) = 19764360 and W(100) mod 1\u00a0000\u00a0000\u00a0007 = 384777056.</p><p>Find W(10\u00a0000\u00a0000) mod 1\u00a0000\u00a0000\u00a0007.</p>",
    "folder": "nim-extreme",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Nim Extreme"
});

db.questions.insert({
    "details": "<p>Alice and Bob play the game Nim Square.<br/>Nim Square is just like ordinary three-heap normal play Nim, but the players may only remove a square number of stones from a heap.<br/>The number of stones in the three heaps is represented by the ordered triple (a,b,c).<br/>If 0<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>a<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>b<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>c<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>29 then the number of losing positions for the next player is 1160.</p><p>Find the number of losing positions for the next player if 0<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>a<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>b<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>c<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>100 000.</p>",
    "folder": "nim-square",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Nim Square"
});

db.questions.insert({
    "details": "<p><i>Nim</i> is a game played with heaps of stones, where two players take it in turn to remove any number of stones from any heap until no stones remain.</p><p>We'll consider the three-heap normal-play version of Nim, which works as follows:<br/>- At the start of the game there are three heaps of stones.<br/>- On his turn the player removes any positive number of stones from any single heap.<br/>- The first player unable to move (because no stones remain) loses.</p><p> If (<var>n</var><sub>1</sub>,<var>n</var><sub>2</sub>,<var>n</var><sub>3</sub>) indicates a Nim position consisting of heaps of size <var>n</var><sub>1</sub>, <var>n</var><sub>2</sub> and <var>n</var><sub>3</sub> then there is a simple function <var>X</var>(<var>n</var><sub>1</sub>,<var>n</var><sub>2</sub>,<var>n</var><sub>3</sub>) \u2014 that you may look up or attempt to deduce for yourself \u2014 that returns:<ul><li>zero if, with perfect strategy, the player about to move will eventually lose; or</li><li>non-zero if, with perfect strategy, the player about to move will eventually win.</li></ul></p><p>For example <var>X</var>(1,2,3) = 0 because, no matter what the current player does, his opponent can respond with a move that leaves two heaps of equal size, at which point every move by the current player can be mirrored by his opponent until no stones remain; so the current player loses. To illustrate:<br/>- current player moves to (1,2,1)<br/>- opponent moves to (1,0,1)<br/>- current player moves to (0,0,1)<br/>- opponent moves to (0,0,0), and so wins.</p><p>For how many positive integers <var>n</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u20092<sup>30</sup> does <var>X</var>(<var>n</var>,2<var>n</var>,3<var>n</var>) = 0 ?</p>",
    "folder": "nim",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Nim"
});

db.questions.insert({
    "details": "<p>A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.</p><p>A number <var>n</var> is called deficient if the sum of its proper divisors is less than <var>n</var> and it is called abundant if this sum exceeds <var>n</var>.</p> <p>A number whose proper divisors are less than the number is called deficient and a number whose proper divisors exceed the number is called abundant.</p> <p>As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.</p><p>Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.</p>",
    "folder": "non-abundant-sums",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Non-abundant sums"
});

db.questions.insert({
    "details": "<p>Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.</p><p>Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.</p><p>We shall call a positive integer that is neither increasing nor decreasing a \"bouncy\" number; for example, 155349.</p><p>As <i>n</i> increases, the proportion of bouncy numbers below <i>n</i> increases such that there are only 12951 numbers below one-million that are not bouncy and only 277032 non-bouncy numbers below 10<sup>10</sup>.</p><p>How many numbers below a googol (10<sup>100</sup>) are not bouncy?</p>",
    "folder": "non-bouncy-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Non-bouncy numbers"
});

db.questions.insert({
    "details": "<p>Consider the following set of dice with nonstandard pips:</p><p>Die A: 1 4 4 4 4 4<br/>Die B: 2 2 2 5 5 5<br/>Die C: 3 3 3 3 3 6<br/></p><p>A game is played by two players picking a die in turn and rolling it. The player who rolls the highest value wins.</p><p>If the first player picks die A and the second player picks die B we get<br/>P(second player wins) = <sup>7</sup>/<sub>12</sub> &gt; <sup>1</sup>/<sub>2</sub></p><p>If the first player picks die B and the second player picks die C we get<br/>P(second player wins) = <sup>7</sup>/<sub>12</sub> &gt; <sup>1</sup>/<sub>2</sub></p><p>If the first player picks die C and the second player picks die A we get<br/>P(second player wins) = <sup>25</sup>/<sub>36</sub> &gt; <sup>1</sup>/<sub>2</sub></p><p>So whatever die the first player picks, the second player can pick another die and have a larger than 50% chance of winning.<br/>A set of dice having this property is called a <b>nontransitive set of dice</b>.</p><p>We wish to investigate how many sets of nontransitive dice exist. We will assume the following conditions:<ul><li>There are three six-sided dice with each side having between 1 and <var>N</var> pips, inclusive.</li><li>Dice with the same set of pips are equal, regardless of which side on the die the pips are located.</li><li>The same pip value may appear on multiple dice; if both players roll the same value neither player wins.</li><li>The sets of dice{A,B,C},{B,C,A} and{C,A,B} are the same set.</li></ul></p><p>For <var>N</var> = 7 we find there are 9780 such sets.<br/>How many are there for <var>N</var> = 30 ?</p>",
    "folder": "nontransitive-sets-of-dice",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Nontransitive sets of dice"
});

db.questions.insert({
    "details": "<p>If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.</p><p>If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used? </p><br/><p class=\"info\"><b>NOTE:</b> Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of \"and\" when writing out numbers is in compliance with British usage.</p>",
    "folder": "number-letter-counts",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Number letter counts"
});

db.questions.insert({
    "details": "<p>The game Number Mind is a variant of the well known game Master Mind.</p><p>Instead of coloured pegs, you have to guess a secret sequence of digits. After each guess you're only told in how many places you've guessed the correct digit. So, if the sequence was 1234 and you guessed 2036, you'd be told that you have one correct digit; however, you would NOT be told that you also have another digit in the wrong place.</p><p>For instance, given the following guesses for a 5-digit secret sequence,</p><p style=\"margin-left:50px;\">90342 ;2 correct<br/>70794 ;0 correct<br/>39458 ;2 correct<br/>34109 ;1 correct<br/>51545 ;2 correct<br/>12531 ;1 correct</p><p>The correct sequence 39542 is unique.</p><p>Based on the following guesses,</p><p style=\"margin-left:50px;\">5616185650518293 ;2 correct<br/>3847439647293047 ;1 correct<br/>5855462940810587 ;3 correct<br/>9742855507068353 ;3 correct<br/>4296849643607543 ;3 correct<br/>3174248439465858 ;1 correct<br/>4513559094146117 ;2 correct<br/>7890971548908067 ;3 correct<br/>8157356344118483 ;1 correct<br/>2615250744386899 ;2 correct<br/>8690095851526254 ;3 correct<br/>6375711915077050 ;1 correct<br/>6913859173121360 ;1 correct<br/>6442889055042768 ;2 correct<br/>2321386104303845 ;0 correct<br/>2326509471271448 ;2 correct<br/>5251583379644322 ;2 correct<br/>1748270476758276 ;3 correct<br/>4895722652190306 ;1 correct<br/>3041631117224635 ;3 correct<br/>1841236454324589 ;3 correct<br/>2659862637316867 ;2 correct</p><p>Find the unique 16-digit secret sequence.</p>",
    "folder": "number-mind",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Number Mind"
});

db.questions.insert({
    "details": "<p>Consider the number 142857. We can right-rotate this number by moving the last digit (7) to the front of it, giving us 714285.<br/>It can be verified that 714285=5<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>142857.<br/>This demonstrates an unusual property of 142857: it is a divisor of its right-rotation.</p><p>Find the last 5 digits of the sum of all integers <var>n</var>, 10 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>100</sup>, that have this property.</p>",
    "folder": "number-rotations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Number Rotations"
});

db.questions.insert({
    "details": "<p>Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:</p><p style=\"text-align:center;font-family:courier new;\"><span style=\"color:#ff0000;font-family:courier new;\"><b>21</b></span> 22 23 24 <span style=\"color:#ff0000;font-family:courier new;\"><b>25</b></span><br/>20 \u00a0<span style=\"color:#ff0000;font-family:courier new;\"><b>7</b></span> \u00a08 \u00a0<span style=\"color:#ff0000;font-family:courier new;\"><b>9</b></span> 10<br/>19 \u00a06 \u00a0<span style=\"color:#ff0000;font-family:courier new;\"><b>1</b></span> \u00a02 11<br/>18 \u00a0<span style=\"color:#ff0000;font-family:courier new;\"><b>5</b></span> \u00a04 \u00a0<span style=\"color:#ff0000;font-family:courier new;\"><b>3</b></span> 12<br/><span style=\"color:#ff0000;font-family:courier new;\"><b>17</b></span> 16 15 14 <span style=\"color:#ff0000;font-family:courier new;\"><b>13</b></span></p><p>It can be verified that the sum of the numbers on the diagonals is 101.</p><p>What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?</p>",
    "folder": "number-spiral-diagonals",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Number spiral diagonals"
});

db.questions.insert({
    "details": "<p>The first number n for which \u03c6(n)=13! is 6227180929.</p><p>Find the 150,000<sup>th</sup> such number.</p>",
    "folder": "numbers-for-which-eulers-totie",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Numbers for which Euler\u2019s totient function equals 13!"
});

db.questions.insert({
    "details": "<p>How many 20 digit numbers <var>n</var> (without any leading zero) exist such that no three consecutive digits of <var>n</var> have a sum greater than 9?</p>",
    "folder": "numbers-for-which-no-three-con",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Numbers for which no three consecutive digits have a sum greater than a given value."
});

db.questions.insert({
    "details": "<p>Let <var>p</var> = <var>p<sub><font size=\"-2\">1</font></sub> p<sub><font size=\"-2\">2</font></sub> p<sub><font size=\"-2\">3</font></sub></var> ... be an infinite sequence of random digits, selected from{0,1,2,3,4,5,6,7,8,9} with equal probability.<br/>It can be seen that <var>p</var> corresponds to the real number 0.<var>p<sub><font size=\"-2\">1</font></sub> p<sub><font size=\"-2\">2</font></sub> p<sub><font size=\"-2\">3</font></sub></var> .... <br/>It can also be seen that choosing a random real number from the interval [0,1) is equivalent to choosing an infinite sequence of random digits selected from{0,1,2,3,4,5,6,7,8,9} with equal probability.</p><p>For any positive integer <var>n</var> with <var>d</var> decimal digits, let <var>k</var> be the smallest index such that <br/> <var>p<sub><small>k</small>, </sub></var><var>p<sub><small>k+1</small></sub></var>, ...<var>p<sub><small>k+d-1</small></sub></var> are the decimal digits of <var>n</var>, in the same order.<br/>Also, let <var>g</var>(<var>n</var>) be the expected value of <var>k</var>; it can be proven that <var>g</var>(<var>n</var>) is always finite and, interestingly, always an integer number.</p><p>For example, if <var>n</var> = 535, then<br/>for <var>p</var> = 31415926<b>535</b>897...., we get <var>k</var> = 9<br/>for <var>p</var> = 35528714365004956000049084876408468<b>535</b>4..., we get <var>k</var> = 36<br/>etc and we find that <var>g</var>(535) = 1008.</p><p>Given that <img src=\"project/images/p_316_decexp1.gif\" style=\"vertical-align:middle\"/>, find <img src=\"project/images/p_316_decexp2.gif\" style=\"vertical-align:middle\"/></p><u><i>Note</i></u>: <img src=\"project/images/p_316_decexp3.gif\" style=\"vertical-align:middle\"/> represents the floor function.",
    "folder": "numbers-in-decimal-expansions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Numbers in decimal expansions"
});

db.questions.insert({
    "details": "<p>All square roots are periodic when written as continued fractions and can be written in the form:</p><div style=\"margin-left:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/><var>N</var> = <var>a</var><sub>0</sub> +</td><td colspan=\"3\" style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td><var>a</var><sub>1</sub> +</td><td colspan=\"2\" style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td><var>a</var><sub>2</sub> +</td><td style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td><var>a</var><sub>3</sub> + ...</td></tr></table></div><p>For example, let us consider <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23:</p><div style=\"margin-left:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23 = 4 + <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23 \u2014 4 = 4 +\u00a0</td><td style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td><td>\u00a0= 4 +\u00a0</td><td colspan=\"2\" style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td><div style=\"text-align:center;\">1<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span></div></td><td>\u00a0</td><td>1 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23 \u2013 3</span><br/>7</div></td></tr></table></div><p>If we continue we would get the following expansion:</p><div style=\"margin-left:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23 = 4 +</td><td colspan=\"4\" style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td>1 +</td><td colspan=\"3\" style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>3 +</td><td colspan=\"2\" style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>1 +</td><td style=\"border-bottom:1px solid #000;\"><div style=\"text-align:center;\">1</div></td></tr><tr><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>\u00a0</td><td>8 + ...</td></tr></table></div><p>The process can be summarised as follows:</p><div style=\"margin-left:20px;\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><var>a</var><sub>0</sub> = 4,</td><td>\u00a0</td><td><div style=\"text-align:center;\">1<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+4</span><br/>7</div></td><td>\u00a0=\u00a01 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span><br/>7</div></td></tr><tr><td><var>a</var><sub>1</sub> = 1,</td><td>\u00a0</td><td><div style=\"text-align:center;\">7<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\">7(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+3)</span><br/>14</div></td><td>\u00a0=\u00a03 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span><br/>2</div></td></tr><tr><td><var>a</var><sub>2</sub> = 3,</td><td>\u00a0</td><td><div style=\"text-align:center;\">2<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\">2(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+3)</span><br/>14</div></td><td>\u00a0=\u00a01 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span><br/>7</div></td></tr><tr><td><var>a</var><sub>3</sub> = 1,</td><td>\u00a0</td><td><div style=\"text-align:center;\">7<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\">7(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+4)</span><br/>7</div></td><td>\u00a0=\u00a08 +\u00a0</td><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</td></tr><tr><td><var>a</var><sub>4</sub> = 8,</td><td>\u00a0</td><td><div style=\"text-align:center;\">1<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+4</span><br/>7</div></td><td>\u00a0=\u00a01 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span><br/>7</div></td></tr><tr><td><var>a</var><sub>5</sub> = 1,</td><td>\u00a0</td><td><div style=\"text-align:center;\">7<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\">7(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+3)</span><br/>14</div></td><td>\u00a0=\u00a03 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span><br/>2</div></td></tr><tr><td><var>a</var><sub>6</sub> = 3,</td><td>\u00a0</td><td><div style=\"text-align:center;\">2<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20143</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\">2(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+3)</span><br/>14</div></td><td>\u00a0=\u00a01 +\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span><br/>7</div></td></tr><tr><td><var>a</var><sub>7</sub> = 1,</td><td>\u00a0</td><td><div style=\"text-align:center;\">7<br/><span style=\"border-top:1px solid #000;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</span></div></td><td>\u00a0=\u00a0</td><td><div style=\"text-align:center;\"><span style=\"border-bottom:1px solid #000;\">7(<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23+4)</span><br/>7</div></td><td>\u00a0=\u00a08 +\u00a0</td><td><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23\u20144</td></tr></table></div><p>It can be seen that the sequence is repeating. For conciseness, we use the notation <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>23 = [4;(1,3,1,8)], to indicate that the block (1,3,1,8) repeats indefinitely.</p><p>The first ten continued fraction representations of (irrational) square roots are:</p><p style=\"margin-left:20px;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2=[1;(2)], period=1<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>3=[1;(1,2)], period=2<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>5=[2;(4)], period=1<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>6=[2;(2,4)], period=2<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>7=[2;(1,1,1,4)], period=4<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>8=[2;(1,4)], period=2<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>10=[3;(6)], period=1<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>11=[3;(3,6)], period=2<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>12= [3;(2,6)], period=2<br/><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>13=[3;(1,1,1,1,6)], period=5</p><p>Exactly four continued fractions, for <var>N</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 13, have an odd period.</p><p>How many continued fractions for <var>N</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10000 have an odd period?</p>",
    "folder": "odd-period-square-roots",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Odd period square roots"
});

db.questions.insert({
    "details": "<p>Given the set{1,2,...,<var>n</var>}, we define <var>f</var>(<var>n</var>,<var>k</var>) as the number of its <var>k</var>-element subsets with an odd sum of elements. For example, <var>f</var>(5,3)\u2009=\u20094, since the set{1,2,3,4,5} has four 3-element subsets having an odd sum of elements, i.e.:{1,2,4},{1,3,5},{2,3,4} and{2,4,5}.</p><p>When all three values <var>n</var>, <var>k</var> and <var>f</var>(<var>n</var>,<var>k</var>) are odd, we say that they make <br/>an <i>odd-triplet</i> [<var>n</var>,<var>k</var>,<var>f</var>(<var>n</var>,<var>k</var>)].</p><p>There are exactly five odd-triplets with <var>n</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u200910, namely:<br/>[1,1,<var>f</var>(1,1)\u2009=\u20091], [5,1,<var>f</var>(5,1)\u2009=\u20093], [5,5,<var>f</var>(5,5)\u2009=\u20091], [9,1,<var>f</var>(9,1)\u2009=\u20095] and [9,9,<var>f</var>(9,9)\u2009=\u20091].</p><p>How many odd-triplets are there with <var>n</var>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u200910<sup>12</sup>\u2009?</p>",
    "folder": "odd-triplets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Odd Triplets"
});

db.questions.insert({
    "details": "<p>We say that a <var>d</var>-digit positive number (no leading zeros) is a one-child number if exactly one of its sub-strings is divisible by <var>d</var>.</p><p>For example, 5671 is a 4-digit one-child number. Among all its sub-strings 5, 6, 7, 1, 56, 67, 71, 567, 671 and 5671, only 56 is divisible by 4.<br/>Similarly, 104 is a 3-digit one-child number because only 0 is divisible by 3.<br/>1132451 is a 7-digit one-child number because only 245 is divisible by 7.</p><p>Let F(<var>N</var>) be the number of the one-child numbers less than <var>N</var>.<br/>We can verify that F(10) = 9, F(10<sup>3</sup>) = 389 and F(10<sup>7</sup>) = 277674.</p><p>Find F(10<sup>19</sup>).</p>",
    "folder": "one-child-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "One-child Numbers"
});

db.questions.insert({
    "details": "<p>If we are presented with the first <var>k</var> terms of a sequence it is impossible to say with certainty the value of the next term, as there are infinitely many polynomial functions that can model the sequence.</p><p>As an example, let us consider the sequence of cube numbers. This is defined by the generating function, <br/><var>u</var><sub><var>n</var></sub> = <var>n</var><sup>3</sup>: 1, 8, 27, 64, 125, 216, ...</p><p>Suppose we were only given the first two terms of this sequence. Working on the principle that \"simple is best\" we should assume a linear relationship and predict the next term to be 15 (common difference 7). Even if we were presented with the first three terms, by the same principle of simplicity, a quadratic relationship should be assumed.</p><p>We shall define OP(<var>k</var>, <var>n</var>) to be the <var>n</var><sup>th</sup> term of the optimum polynomial generating function for the first <var>k</var> terms of a sequence. It should be clear that OP(<var>k</var>, <var>n</var>) will accurately generate the terms of the sequence for <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var>, and potentially the <i>first incorrect term</i> (FIT) will be OP(<var>k</var>, <var>k</var>+1); in which case we shall call it a <i>bad OP</i> (BOP).</p><p>As a basis, if we were only given the first term of sequence, it would be most sensible to assume constancy; that is, for <var>n</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2, OP(1, <var>n</var>) = <var>u</var><sub>1</sub>.</p><p>Hence we obtain the following OPs for the cubic sequence:</p><div style=\"margin-left:50px;\"><table><tr><td>OP(1, <var>n</var>) = 1</td><td>1, <span style=\"color:red;\"><b>1</b></span>, 1, 1, ...</td></tr><tr><td>OP(2, <var>n</var>) = 7<var>n</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>6</td><td>1, 8, <span style=\"color:red;\"><b>15</b></span>, ...</td></tr><tr><td>OP(3, <var>n</var>) = 6<var>n</var><sup>2</sup><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>11<var>n</var>+6\u00a0\u00a0\u00a0\u00a0\u00a0</td><td>1, 8, 27, <span style=\"color:red;\"><b>58</b></span>, ...</td></tr><tr><td>OP(4, <var>n</var>) = <var>n</var><sup>3</sup></td><td>1, 8, 27, 64, 125, ...</td></tr></table></div><p>Clearly no BOPs exist for <var>k</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4.</p><p>By considering the sum of FITs generated by the BOPs (indicated in <span style=\"color:red;\"><b>red</b></span> above), we obtain 1 + 15 + 58 = 74.</p><p>Consider the following tenth degree polynomial generating function:</p><p style=\"text-align:center;\"><var>u</var><sub><var>n</var></sub> = 1 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>n</var> + <var>n</var><sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>n</var><sup>3</sup> + <var>n</var><sup>4</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>n</var><sup>5</sup> + <var>n</var><sup>6</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>n</var><sup>7</sup> + <var>n</var><sup>8</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>n</var><sup>9</sup> + <var>n</var><sup>10</sup></p><p>Find the sum of FITs for the BOPs.</p>",
    "folder": "optimum-polynomial",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Optimum polynomial"
});

db.questions.insert({
    "details": "<p>Consider the fraction, <i>n/d</i>, where <i>n</i> and <i>d</i> are positive integers. If <i>n</i><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><i>d</i> and HCF(<i>n,d</i>)=1, it is called a reduced proper fraction.</p><p>If we list the set of reduced proper fractions for <i>d</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 8 in ascending order of size, we get:</p><p style=\"text-align:center;font-size:8pt;\">1/8, 1/7, 1/6, 1/5, 1/4, 2/7, 1/3, 3/8, <b>2/5</b>, 3/7, 1/2, 4/7, 3/5, 5/8, 2/3, 5/7, 3/4, 4/5, 5/6, 6/7, 7/8</p><p>It can be seen that 2/5 is the fraction immediately to the left of 3/7.</p><p>By listing the set of reduced proper fractions for <i>d</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1,000,000 in ascending order of size, find the numerator of the fraction immediately to the left of 3/7.</p>",
    "folder": "ordered-fractions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Ordered fractions"
});

db.questions.insert({
    "details": "<p>The radical of <i>n</i>, rad(<i>n</i>), is the product of distinct prime factors of <i>n</i>. For example, 504 = 2<sup>3</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3<sup>2</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7, so rad(504) = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7 = 42.</p><p>If we calculate rad(<i>n</i>) for <i>1</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>n</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10, then sort them on rad(<i>n</i>), and sorting on <i>n</i> if the radical values are equal, we get:</p><table align=\"center\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td colspan=\"2\"><div style=\"text-align:center;\"><b>Unsorted</b></div></td><td>\u00a0</td><td colspan=\"3\"><div style=\"text-align:center;\"><b>Sorted</b></div></td></tr><tr><td><div style=\"text-align:center;\"><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/><b><i>n</i></b></div></td><td><div style=\"text-align:center;\"><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/><b>rad(<i>n</i>)</b></div></td><td><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/></td><td><div style=\"text-align:center;\"><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/><b><i>n</i></b></div></td><td><div style=\"text-align:center;\"><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/><b>rad(<i>n</i>)</b></div></td><td><div style=\"text-align:center;\"><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/><b>k</b></div></td></tr><tr><td><div style=\"text-align:center;\">1</div></td><td><div style=\"text-align:center;\">1</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">1</div></td><td><div style=\"text-align:center;\">1</div></td><td><div style=\"text-align:center;\">1</div></td></tr><tr><td><div style=\"text-align:center;\">2</div></td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">2</div></td><td><div style=\"text-align:center;\">2</div></td><td><div style=\"text-align:center;\">2</div></td></tr><tr><td><div style=\"text-align:center;\">3</div></td><td><div style=\"text-align:center;\">3</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">4</div></td><td><div style=\"text-align:center;\">2</div></td><td><div style=\"text-align:center;\">3</div></td></tr><tr><td><div style=\"text-align:center;\">4</div></td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">8</div></td><td><div style=\"text-align:center;\">2</div></td><td><div style=\"text-align:center;\">4</div></td></tr><tr><td><div style=\"text-align:center;\">5</div></td><td><div style=\"text-align:center;\">5</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">3</div></td><td><div style=\"text-align:center;\">3</div></td><td><div style=\"text-align:center;\">5</div></td></tr><tr><td><div style=\"text-align:center;\">6</div></td><td><div style=\"text-align:center;\">6</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">9</div></td><td><div style=\"text-align:center;\">3</div></td><td><div style=\"text-align:center;\">6</div></td></tr><tr><td><div style=\"text-align:center;\">7</div></td><td><div style=\"text-align:center;\">7</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">5</div></td><td><div style=\"text-align:center;\">5</div></td><td><div style=\"text-align:center;\">7</div></td></tr><tr><td><div style=\"text-align:center;\">8</div></td><td><div style=\"text-align:center;\">2</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">6</div></td><td><div style=\"text-align:center;\">6</div></td><td><div style=\"text-align:center;\">8</div></td></tr><tr><td><div style=\"text-align:center;\">9</div></td><td><div style=\"text-align:center;\">3</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">7</div></td><td><div style=\"text-align:center;\">7</div></td><td><div style=\"text-align:center;\">9</div></td></tr><tr><td><div style=\"text-align:center;\">10</div></td><td><div style=\"text-align:center;\">10</div></td><td>\u00a0</td><td><div style=\"text-align:center;\">10</div></td><td><div style=\"text-align:center;\">10</div></td><td><div style=\"text-align:center;\">10</div></td></tr></table><p>Let E(<i>k</i>) be the <i>k</i>th element in the sorted <i>n</i> column; for example, E(4) = 8 and E(6) = 9.</p><p>If rad(<i>n</i>) is sorted for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>n</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100000, find E(10000).</p>",
    "folder": "ordered-radicals",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Ordered radicals"
});

db.questions.insert({
    "details": "<p>The palindromic number 595 is interesting because it can be written as the sum of consecutive squares: 6<sup>2</sup> + 7<sup>2</sup> + 8<sup>2</sup> + 9<sup>2</sup> + 10<sup>2</sup> + 11<sup>2</sup> + 12<sup>2</sup>.</p><p>There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums, and the sum of these palindromes is 4164. Note that 1 = 0<sup>2</sup> + 1<sup>2</sup> has not been included as this problem is concerned with the squares of positive integers.</p><p>Find the sum of all the numbers less than 10<sup>8</sup> that are both palindromic and can be written as the sum of consecutive squares.</p>",
    "folder": "palindromic-sums",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Palindromic sums"
});

db.questions.insert({
    "details": "<p>A prime number <var>p</var> is called a Panaitopol prime if <img src=\"project/images/p_291_formula.gif\" style=\"vertical-align:middle\"/> for some positive integers<br/> <var>x</var> and <var>y</var>.</p><p>Find how many Panaitopol primes are less than 5<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>15</sup>.</p>",
    "folder": "panaitopol-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Panaitopol Primes"
});

db.questions.insert({
    "details": "<p>The Fibonacci sequence is defined by the recurrence relation:</p><blockquote>F<sub><i>n</i></sub> = F<sub><i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</sub> + F<sub><i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2</sub>, where F<sub>1</sub> = 1 and F<sub>2</sub> = 1.</blockquote><p>It turns out that F<sub>541</sub>, which contains 113 digits, is the first Fibonacci number for which the last nine digits are 1-9 pandigital (contain all the digits 1 to 9, but not necessarily in order). And F<sub>2749</sub>, which contains 575 digits, is the first Fibonacci number for which the first nine digits are 1-9 pandigital.</p><p>Given that F<sub><i>k</i></sub> is the first Fibonacci number for which the first nine digits AND the last nine digits are 1-9 pandigital, find <i>k</i>.</p>",
    "folder": "pandigital-fibonacci-ends",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pandigital Fibonacci ends"
});

db.questions.insert({
    "details": "<p>Take the number 192 and multiply it by each of 1, 2, and 3:</p><blockquote>192 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 = 192<br/>192 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 384<br/>192 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 = 576</blockquote><p>By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)</p><p>The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).</p><p>What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , <var>n</var>) where <var>n</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1?</p>",
    "folder": "pandigital-multiples",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pandigital multiples"
});

db.questions.insert({
    "details": "<p>Using all of the digits 1 through 9 and concatenating them freely to form decimal integers, different sets can be formed. Interestingly with the set{2,5,47,89,631}, all of the elements belonging to it are prime.</p><p>How many distinct sets containing each of the digits one through nine exactly once contain only prime elements?</p>",
    "folder": "pandigital-prime-sets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pandigital prime sets"
});

db.questions.insert({
    "details": "<p>We shall say that an <i>n</i>-digit number is pandigital if it makes use of all the digits 1 to <i>n</i> exactly once. For example, 2143 is a 4-digit pandigital and is also prime.</p><p>What is the largest <i>n</i>-digit pandigital prime that exists?</p>",
    "folder": "pandigital-prime",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pandigital prime"
});

db.questions.insert({
    "details": "<p>We shall say that an <var>n</var>-digit number is pandigital if it makes use of all the digits 1 to <var>n</var> exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.</p><p>The product 7254 is unusual, as the identity, 39 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.</p><p>Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.</p><div class=\"info\">HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.</div>",
    "folder": "pandigital-products",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pandigital products"
});

db.questions.insert({
    "details": "<p>A printing shop runs 16 batches (jobs) every week and each batch requires a sheet of special colour-proofing paper of size A5.</p><p>Every Monday morning, the foreman opens a new envelope, containing a large sheet of the special paper with size A1.</p><p>He proceeds to cut it in half, thus getting two sheets of size A2. Then he cuts one of them in half to get two sheets of size A3 and so on until he obtains the A5-size sheet needed for the first batch of the week.</p><p>All the unused sheets are placed back in the envelope.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"227\" src=\"project/images/p_151.gif\" width=\"314\"/></div><p>At the beginning of each subsequent batch, he takes from the envelope one sheet of paper at random. If it is of size A5, he uses it. If it is larger, he repeats the 'cut-in-half' procedure until he has what he needs and any remaining sheets are always placed back in the envelope.</p><p>Excluding the first and last batch of the week, find the expected number of times (during each week) that the foreman finds a single sheet of paper in the envelope.</p><p>Give your answer rounded to six decimal places using the format x.xxxxxx\u00a0.</p>",
    "folder": "paper-sheets-of-standard-sizes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Paper sheets of standard sizes: an expected-value problem."
});

db.questions.insert({
    "details": "<p>The following game is a classic example of Combinatorial Game Theory:</p><p>Two players start with a strip of <var>n</var> white squares and they take alternate turns.<br/>On each turn, a player picks two contiguous white squares and paints them black.<br/>The first player who cannot make a move loses.</p><p><ul><li>If <var>n</var> = 1, there are no valid moves, so the first player loses automatically.</li><li>If <var>n</var> = 2, there is only one valid move, after which the second player loses.</li><li>If <var>n</var> = 3, there are two valid moves, but both leave a situation where the second player loses.</li><li>If <var>n</var> = 4, there are three valid moves for the first player; she can win the game by painting the two middle squares.</li><li>If <var>n</var> = 5, there are four valid moves for the first player (shown below in red); but no matter what she does, the second player (blue) wins.</li></ul><div align=\"center\"><img src=\"project/images/p_306_pstrip.gif\"/></div></p><p>So, for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5, there are 3 values of <var>n</var> for which the first player can force a win.<br/>Similarly, for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 50, there are 40 values of <var>n</var> for which the first player can force a win.</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 000 000, how many values of <var>n</var> are there for which the first player can force a win?</p>",
    "folder": "paper-strip-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Paper-strip Game"
});

db.questions.insert({
    "details": "<p>A common security method used for online banking is to ask the user for three random characters from a passcode. For example, if the passcode was 531278, they may ask for the 2nd, 3rd, and 5th characters; the expected reply would be: 317.</p><p>The text file, <a href=\"project/keylog.txt\">keylog.txt</a>, contains fifty successful login attempts.</p><p>Given that the three characters are always asked for in order, analyse the file so as to determine the shortest possible secret passcode of unknown length.</p>",
    "folder": "passcode-derivation",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Passcode derivation"
});

db.questions.insert({
    "details": "<p class=\"info\">NOTE: This problem is a significantly more challenging version of <a href=\"index.php?section=problems&amp;id=81\">Problem 81</a>.</p><p>In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by moving left, right, up, and down, is indicated in bold red and is equal to 2297.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img align=\"middle\" alt=\"\" height=\"120\" src=\"images/bracket_left.gif\" width=\"8\"/><br/></td><td><table border=\"0\" cellpadding=\"3\" cellspacing=\"0\"><tr><td><span style=\"color:#dd0000;\"><b>131</b></span></td><td>673</td><td><span style=\"color:#dd0000;\"><b>234</b></span></td><td><span style=\"color:#dd0000;\"><b>103</b></span></td><td><span style=\"color:#dd0000;\"><b>18</b></span></td></tr><tr><td><span style=\"color:#dd0000;\"><b>201</b></span></td><td><span style=\"color:#dd0000;\"><b>96</b></span></td><td><span style=\"color:#dd0000;\"><b>342</b></span></td></tr></table></td></tr></table></div>",
    "folder": "path-sum-four-ways",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Path sum: four ways"
});

db.questions.insert({
    "details": "<p class=\"info\">NOTE: This problem is a more challenging version of <a href=\"index.php?section=problems&amp;id=81\">Problem 81</a>.</p><p>The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img align=\"middle\" alt=\"\" height=\"120\" src=\"images/bracket_left.gif\" width=\"8\"/><br/></td><td><table border=\"0\" cellpadding=\"3\" cellspacing=\"0\"><tr><td>131</td><td>673</td><td><span style=\"color:#dd0000;\"><b>234</b></span></td><td><span style=\"color:#dd0000;\"><b>103</b></span></td><td><span style=\"color:#dd0000;\"><b>18</b></span></td></tr><tr><td><span style=\"color:#dd0000;\"><b>201</b></span></td><td><span style=\"color:#dd0000;\"><b>96</b></span></td><td><span style=\"color:#dd0000;\"><b>342</b></span></td><td>965</td><td>150</td></tr><tr><td>630</td><td>803</td><td>746</td><td>422</td><td>111</td></tr><tr><td>537</td><td>699</td><td>497</td><td>121</td><td>956</td></tr><tr><td>805</td><td>732</td><td>524</td><td>37</td><td>331</td></tr></table></td><td><img align=\"middle\" alt=\"\" height=\"120\" src=\"images/bracket_right.gif\" width=\"8\"/><br/></td></tr></table></div><p>Find the minimal path sum, in <a href=\"project/matrix.txt\">matrix.txt</a> (right click and 'Save Link/Target As...'), a 31K text file containing a 80 by 80 matrix, from the left column to the right column.</p>",
    "folder": "path-sum-three-ways",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Path sum: three ways"
});

db.questions.insert({
    "details": "<p>In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by <b>only moving to the right and down</b>, is indicated in bold red and is equal to 2427.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><img align=\"middle\" alt=\"\" height=\"120\" src=\"images/bracket_left.gif\" width=\"8\"/><br/></td><td><table border=\"0\" cellpadding=\"3\" cellspacing=\"0\"><tr><td><span style=\"color:#dd0000;\"><b>131</b></span></td><td>673</td><td>234</td><td>103</td><td>18</td></tr><tr><td><span style=\"color:#dd0000;\"><b>201</b></span></td><td><span style=\"color:#dd0000;\"><b>96</b></span></td><td><span style=\"color:#dd0000;\"><b>342</b></span></td><td>965</td><td>150</td></tr><tr><td>630</td><td>803</td><td><span style=\"color:#dd0000;\"><b>746</b></span></td><td><span style=\"color:#dd0000;\"><b>422</b></span></td><td>111</td></tr><tr><td>537</td><td>699</td><td>497</td><td><span style=\"color:#dd0000;\"><b>121</b></span></td><td>956</td></tr><tr><td>805</td><td>732</td><td>524</td><td><span style=\"color:#dd0000;\"><b>37</b></span></td><td><span style=\"color:#dd0000;\"><b>331</b></span></td></tr></table></td><td><img align=\"middle\" alt=\"\" height=\"120\" src=\"images/bracket_right.gif\" width=\"8\"/><br/></td></tr></table></div><p>Find the minimal path sum, in <a href=\"project/matrix.txt\">matrix.txt</a> (right click and 'Save Link/Target As...'), a 31K text file containing a 80 by 80 matrix, from the top left to the bottom right by only moving right and down.</p>",
    "folder": "path-sum-two-ways",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Path sum: two ways"
});

db.questions.insert({
    "details": "<p>Let R(<var>M</var>, <var>N</var>) be the number of lattice points (<var>x</var>, <var>y</var>) which satisfy <var>M</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>x</var><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>N</var>, <var>M</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>y</var><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>N</var> and <img src=\"project/images/p_372_pencilray1.jpg\" style=\"vertical-align:middle\"/> is odd.<br/>We can verify that R(0, 100) = 3019 and R(100, 10000) = 29750422.<br/>Find R(2\u00b710<sup>6</sup>, 10<sup>9</sup>).</p><p><u><i>Note</i></u>: <img src=\"project/images/p_372_pencilray2.gif\" style=\"vertical-align:middle\"/> represents the floor function.</p>",
    "folder": "pencils-of-rays",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pencils of rays"
});

db.questions.insert({
    "details": "<p>Pentagonal numbers are generated by the formula, P<sub><var>n</var></sub>=<var>n</var>(3<var>n</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)/2. The first ten pentagonal numbers are:</p><p style=\"text-align:center;\">1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...</p><p>It can be seen that P<sub>4</sub> + P<sub>7</sub> = 22 + 70 = 92 = P<sub>8</sub>. However, their difference, 70 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 22 = 48, is not pentagonal.</p><p>Find the pair of pentagonal numbers, P<sub><var>j</var></sub> and P<sub><var>k</var></sub>, for which their sum and difference are pentagonal and D = |P<sub><var>k</var></sub> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> P<sub><var>j</var></sub>| is minimised; what is the value of D?</p>",
    "folder": "pentagon-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pentagon numbers"
});

db.questions.insert({
    "details": "<p><i>\"And he came towards a valley, through which ran a river; and the borders of the valley were wooded, and on each side of the river were level meadows. And on one side of the river he saw a flock of white sheep, and on the other a flock of black sheep. And whenever one of the white sheep bleated, one of the black sheep would cross over and become white; and when one of the black sheep bleated, one of the white sheep would cross over and become black.\"</i><br/><a href=\"http://en.wikisource.org/wiki/The_Mabinogion/Peredur_the_Son_of_Evrawc\">en.wikisource.org</a></p><p>Initially each flock consists of <var>n</var> sheep. Each sheep (regardless of colour) is equally likely to be the next sheep to bleat. After a sheep has bleated and a sheep from the other flock has crossed over, Peredur may remove a number of white sheep in order to maximize the expected final number of black sheep. Let E(<var>n</var>) be the expected final number of black sheep if Peredur uses an optimal strategy.</p><p>You are given that E(5) = 6.871346 rounded to 6 places behind the decimal point.<br/>Find E(10 000) and give your answer rounded to 6 places behind the decimal point.</p>",
    "folder": "peredur-fab-efrawg",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Peredur fab Efrawg"
});

db.questions.insert({
    "details": "<p>Consider the right angled triangle with sides a=7, b=24 and c=25.The area of this triangle is 84, which is divisible by the perfect numbers 6 and 28.<br/>Moreover it is a primitive right angled triangle as gcd(a,b)=1 and gcd(b,c)=1.<br/>Also c is a perfect square.</p><p>We will call a right angled triangle perfect if<br/>-it is a primitive right angled triangle<br/>-its hypotenuse is a perfect square</p><p>We will call a right angled triangle super-perfect if<br/>-it is a perfect right angled triangle and<br/>-its area is a multiple of the perfect numbers 6 and 28.</p><p>How many perfect right-angled triangles with c<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>10<sup>16</sup> exist that are not super-perfect?</p>",
    "folder": "perfect-right-angled-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Perfect right-angled triangles"
});

db.questions.insert({
    "details": "<p>Find the smallest x + y + z with integers x <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> y <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> z <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0 such that x + y, x <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> y, x + z, x <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> z, y + z, y <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> z are all perfect squares.</p>",
    "folder": "perfect-square-collection",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Perfect Square Collection"
});

db.questions.insert({
    "details": "<p>For a positive integer <var>n</var>, let \u03c3(<var>n</var>) be the sum of all divisors of <var>n</var>, so e.g. \u03c3(6) = 1 + 2 + 3 + 6 = 12.</p><p>A perfect number, as you probably know, is a number with \u03c3(<var>n</var>) = 2<var>n</var>.</p><p><div style=\"text-align:left;\"><table><tr><td>Let us define the <b>perfection quotient</b> of a positive integer as</td><td><var>p</var>(<var>n</var>)</td><td>=\u00a0</td><td><div style=\"text-align:center;\">\u03c3(<var>n</var>)<br/><img alt=\"\" height=\"1\" src=\"images/blackdot.gif\" width=\"30\"/><br/><var>n</var></div></td><td>.</td></tr></table></div></p><p>Let us define the <b>perfection quotient</b> of a positive integer as <var>p</var>(<var>n</var>) = <font \"size=4\"> <sup>&sigma;(<var>n</var>)</sup>&frasl;<sub><var>n</var></sub></font>.</p><p>Find the sum of all positive integers <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>18</sup> for which <var>p</var>(<var>n</var>) has the form <var>k</var> + <sup>1</sup>\u2044<sub>2</sub>, where <var>k</var> is an integer.</p>",
    "folder": "perfection-quotients",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Perfection Quotients"
});

db.questions.insert({
    "details": "<p>It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.</p><p>Find the smallest positive integer, <i>x</i>, such that 2<i>x</i>, 3<i>x</i>, 4<i>x</i>, 5<i>x</i>, and 6<i>x</i>, contain the same digits.</p>",
    "folder": "permuted-multiples",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Permuted multiples"
});

db.questions.insert({
    "details": "<p>Let us call a positive integer <var>k</var> a <var>square-pivot</var>, if there is a pair of integers <var>m</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0 and <var>n</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var>, such that the sum of the (<var>m</var>+1) consecutive squares up to <var>k</var> equals the sum of the <var>m</var> consecutive squares from (<var>n</var>+1) on:</p><div align=\"center\">(<var>k</var>-<var>m</var>)<sup>2</sup> + ... + <var>k</var><sup>2</sup> = (<var>n</var>+1)<sup>2</sup> + ... + (<var>n</var>+<var>m</var>)<sup>2</sup>.</div><p>Some small square-pivots are<ul><li><b>4</b>: 3<sup>2</sup> + <b>4</b><sup>2</sup> = 5<sup>2</sup></li><li><b>21</b>: 20<sup>2</sup> + <b>21</b><sup>2</sup> = 29<sup>2</sup></li><li><b>24</b>: 21<sup>2</sup> + 22<sup>2</sup> + 23<sup>2</sup> + <b>24</b><sup>2</sup> = 25<sup>2</sup> + 26<sup>2</sup> + 27<sup>2</sup></li><li><b>110</b>: 108<sup>2</sup> + 109<sup>2</sup> + <b>110</b><sup>2</sup> = 133<sup>2</sup> + 134<sup>2</sup></li></ul></p><p>Find the sum of all <b>distinct</b> square-pivots <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>10</sup>.</p>",
    "folder": "pivotal-square-sums",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pivotal Square Sums"
});

db.questions.insert({
    "details": "<p>You are given a pizza (perfect circle) that has been cut into <var>m</var>\u00b7<var>n</var> equal pieces and you want to have exactly one topping on each slice.</p><p>Let <var>f</var>(<var>m</var>,<var>n</var>) denote the number of ways you can have toppings on the pizza with <var>m</var> different toppings (<var>m</var>\u2009<img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u20092), using each topping on exactly <var>n</var> slices (<var>n</var>\u2009<img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u20091). <br/>Reflections are considered distinct, rotations are not. </p><p>Thus, for instance, <var>f</var>(2,1)\u2009=\u20091, <var>f</var>(2,2)\u2009=\u2009<var>f</var>(3,1)\u2009=\u20092 and <var>f</var>(3,2)\u2009=\u200916. <br/><var>f</var>(3,2) is shown below:</p><div align=\"center\"><img src=\"project/images/p_281_pizza.gif\"/></div><p>Find the sum of all <var>f</var>(<var>m</var>,<var>n</var>) such that <var>f</var>(<var>m</var>,<var>n</var>)\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u200910<sup>15</sup>.</p>",
    "folder": "pizza-toppings",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pizza Toppings"
});

db.questions.insert({
    "details": "<p>An unbiased single 4-sided die is thrown and its value, <var>T</var>, is noted.<br/><var>T</var> unbiased 6-sided dice are thrown and their scores are added together. The sum, <var>C</var>, is noted.<br/><var>C</var> unbiased 8-sided dice are thrown and their scores are added together. The sum, <var>O</var>, is noted.<br/><var>O</var> unbiased 12-sided dice are thrown and their scores are added together. The sum, <var>D</var>, is noted.<br/><var>D</var> unbiased 20-sided dice are thrown and their scores are added together. The sum, <var>I</var>, is noted.<br/>Find the variance of <var>I</var>, and give your answer rounded to 4 decimal places.</p>",
    "folder": "platonic-dice",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Platonic Dice"
});

db.questions.insert({
    "details": "<p>In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:</p><ul><li><b>High Card</b>: Highest value card.</li><li><b>One Pair</b>: Two cards of the same value.</li><li><b>Two Pairs</b>: Two different pairs.</li><li><b>Three of a Kind</b>: Three cards of the same value.</li><li><b>Straight</b>: All cards are consecutive values.</li><li><b>Flush</b>: All cards of the same suit.</li><li><b>Full House</b>: Three of a kind and a pair.</li><li><b>Four of a Kind</b>: Four cards of the same value.</li><li><b>Straight Flush</b>: All cards are consecutive values of same suit.</li><li><b>Royal Flush</b>: Ten, Jack, Queen, King, Ace, in same suit.</li></ul><p>The cards are valued in the order:<br/>2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.</p><p>If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.</p><p>Consider the following five hands dealt to two players:</p><div style=\"text-align:center;\"><table><tr><td><b>Hand</b></td><td>\u00a0</td><td><b>Player 1</b></td><td>\u00a0</td><td><b>Player 2</b></td><td>\u00a0</td><td><b>Winner</b></td></tr><tr><td style=\"vertical-align:top;\"><b>1</b></td><td>\u00a0</td><td>5H 5C 6S 7S KD<br/><div class=\"info\">Pair of Fives</div></td><td>\u00a0</td><td>2C 3S 8S 8D TD<br/><div class=\"info\">Pair of Eights</div></td><td>\u00a0</td><td style=\"vertical-align:top;\">Player 2</td></tr><tr><td style=\"vertical-align:top;\"><b>2</b></td><td>\u00a0</td><td>5D 8C 9S JS AC<br/><div class=\"info\">Highest card Ace</div></td><td>\u00a0</td><td>2C 5C 7D 8S QH<br/><div class=\"info\">Highest card Queen</div></td><td>\u00a0</td><td style=\"vertical-align:top;\">Player 1</td></tr><tr><td style=\"vertical-align:top;\"><b>3</b></td><td>\u00a0</td><td>2D 9C AS AH AC<br/><div class=\"info\">Three Aces</div></td><td>\u00a0</td><td>3D 6D 7D TD QD<br/><div class=\"info\">Flush  with Diamonds</div></td><td>\u00a0</td><td style=\"vertical-align:top;\">Player 2</td></tr><tr><td style=\"vertical-align:top;\"><b>4</b></td><td>\u00a0</td><td>4D 6S 9H QH QC<br/><div class=\"info\">Pair of Queens<br/>Highest card Nine</div></td><td>\u00a0</td><td>3D 6D 7H QD QS<br/><div class=\"info\">Pair of Queens<br/>Highest card Seven</div></td><td>\u00a0</td><td style=\"vertical-align:top;\">Player 1</td></tr><tr><td style=\"vertical-align:top;\"><b>5</b></td><td>\u00a0</td><td>2H 2D 4C 4D 4S<br/><div class=\"info\">Full House<br/>With Three Fours</div></td><td>\u00a0</td><td>3C 3D 3S 9S 9D<br/><div class=\"info\">Full House<br/>with Three Threes</div></td><td>\u00a0</td><td style=\"vertical-align:top;\">Player 1</td></tr></table></div><p>The file, <a href=\"project/poker.txt\">poker.txt</a>, contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.</p><p>How many hands does Player 1 win?</p>",
    "folder": "poker-hands",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Poker hands"
});

db.questions.insert({
    "details": "<p>The <strong>Fibonacci numbers</strong>{f<sub>n</sub>, n <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0} are defined recursively as f<sub>n</sub> = f<sub>n-1</sub> + f<sub>n-2</sub> with base cases f<sub>0</sub> = 0 and f<sub>1</sub> = 1.</p><p>Define the polynomials{F<sub>n</sub>, n <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0} as F<sub>n</sub>(x) = <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>f<sub>i</sub>x<sup>i</sup> for 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> i <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n.</p><p>For example, F<sub>7</sub>(x) = x + x<sup>2</sup> + 2x<sup>3</sup> + 3x<sup>4</sup> + 5x<sup>5</sup> + 8x<sup>6</sup> + 13x<sup>7</sup>, and F<sub>7</sub>(11) = 268357683.</p><p>Let n = 10<sup>15</sup>. Find the sum [<img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><sub>0<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>x<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>100</sub> F<sub>n</sub>(x)] mod 1307674368000 (= 15!).</p>",
    "folder": "polynomials-of-fibonacci-numbe",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Polynomials of Fibonacci numbers"
});

db.questions.insert({
    "details": "<p>A root or zero of a polynomial P(<var>x</var>) is a solution to the equation P(<var>x</var>) = 0. <br/>Define P<sub><var>n</var></sub> as the polynomial whose coefficients are the digits of <var>n</var>.<br/>For example, P<sub>5703</sub>(<var>x</var>) = 5<var>x</var><sup>3</sup> + 7<var>x</var><sup>2</sup> + 3.</p><p>We can see that:<ul><li>P<sub><var>n</var></sub>(0) is the last digit of <var>n</var>,</li><li>P<sub><var>n</var></sub>(1) is the sum of the digits of <var>n</var>,</li><li>P<sub><var>n</var></sub>(10) is <var>n</var> itself.</li></ul></p><p>Define Z(<var>k</var>) as the number of positive integers, <var>n</var>, not exceeding <var>k</var> for which the polynomial P<sub><var>n</var></sub> has at least one integer root.</p><p>It can be verified that Z(100 000) is 14696.</p><p>What is Z(10<sup>16</sup>)?</p>",
    "folder": "polynomials-with-at-least-one",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Polynomials with at least one integer root"
});

db.questions.insert({
    "details": "<p>2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.</p><p>What is the sum of the digits of the number 2<sup>1000</sup>?</p>",
    "folder": "power-digit-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Power digit sum"
});

db.questions.insert({
    "details": "<p>The 5-digit number, 16807=7<sup>5</sup>, is also a fifth power. Similarly, the 9-digit number, 134217728=8<sup>9</sup>, is a ninth power.</p><p>How many <i>n</i>-digit positive integers exist which are also an <i>n</i>th power?</p>",
    "folder": "powerful-digit-counts",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Powerful digit counts"
});

db.questions.insert({
    "details": "<p>A googol (10<sup>100</sup>) is a massive number: one followed by one-hundred zeros; 100<sup>100</sup> is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.</p><p>Considering natural numbers of the form, <i>a<sup>b</sup></i>, where <i>a, b</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100, what is the maximum digital sum?</p>",
    "folder": "powerful-digit-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Powerful digit sum"
});

db.questions.insert({
    "details": "<p>Two positive numbers A and B are said to be <i>connected</i> (denoted by \"A \u2194 B\") if one of these conditions holds:<br/>(1) A and B have the same length and differ in exactly one digit; for example, 123 \u2194 173.<br/>(2) Adding one digit to the left of A (or B) makes B (or A); for example, 23 \u2194 223 and 123 \u2194 23.</p><p>We call a prime P a <i>2's relative</i> if there exists a chain of connected primes between 2 and P and no prime in the chain exceeds P.</p><p>For example, 127 is a 2's relative. One of the possible chains is shown below:<br/>2 \u2194 3 \u2194 13 \u2194 113 \u2194 103 \u2194 107 \u2194 127<br/>However, 11 and 103 are not 2's relatives.</p><p>Let F(N) be the sum of the primes <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N which are not 2's relatives.<br/>We can verify that F(10<sup>3</sup>) = 431 and F(10<sup>4</sup>) = 78728.</p><p>Find F(10<sup>7</sup>).</p>",
    "folder": "prime-connection",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime connection"
});

db.questions.insert({
    "details": "<p>There are some prime values, <i>p</i>, for which there exists a positive integer, <i>n</i>, such that the expression <i>n</i><sup>3</sup> + <i>n</i><sup>2</sup><i>p</i> is a perfect cube.</p><p>For example, when <i>p</i> = 19, 8<sup>3</sup> + 8<sup>2</sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>19 = 12<sup>3</sup>.</p><p>What is perhaps most surprising is that for each prime with this property the value of <i>n</i> is unique, and there are only four such primes below one-hundred.</p><p>How many primes below one million have this remarkable property?</p>",
    "folder": "prime-cube-partnership",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime cube partnership"
});

db.questions.insert({
    "details": "<p>By replacing the 1<sup>st</sup> digit of *57, it turns out that six of the possible values: 157, 257, 457, 557, 757, and 857, are all prime.</p> <p>By replacing the 1<sup>st</sup> digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.</p><p>By replacing the 3<sup>rd</sup> and 4<sup>th</sup> digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.</p><p>Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.</p>",
    "folder": "prime-digit-replacements",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime digit replacements"
});

db.questions.insert({
    "details": "<p>Numbers of the form <var>n</var><sup>15</sup>+1 are composite for every integer <var>n</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1.<br/>For positive integers <var>n</var> and <var>m</var> let <var>s</var>(<var>n,m</var>) be defined as the sum of the <i>distinct</i> prime factors of <var>n</var><sup>15</sup>+1 not exceeding <var>m</var>.</p>E.g. 2<sup>15</sup>+1 = 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>11<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>331.<br/>So <var>s</var>(2,10) = 3 and <var>s</var>(2,1000) = 3+11+331 = 345.<br/><br/>Also 10<sup>15</sup>+1 = 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>11<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>13<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>211<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>241<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2161<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>9091.<br/>So <var>s</var>(10,100) = 31 and <var>s</var>(10,1000) = 483.<br/>",
    "folder": "prime-factors-of-n151",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime factors of n15+1"
});

db.questions.insert({
    "details": "<p>Susan has a prime frog.<br/>Her frog is jumping around over 500 squares numbered 1 to 500.He can only jump one square to the left or to the right, with equal probability, and he cannot jump outside the range [1;500].<br/>(if it lands at either end, it automatically jumps to the only available square on the next move.)</p><p>When he is on a square with a prime number on it, he croaks 'P' (PRIME) with probability 2/3 or 'N' (NOT PRIME) with probability 1/3 just before jumping to the next square.<br/>When he is on a square with a number on it that is not a prime he croaks 'P' with probability 1/3 or 'N' with probability 2/3 just before jumping to the next square.</p><p>Given that the frog's starting position is random with the same probability for every square, and given that she listens to his first 15 croaks, what is the probability that she hears the sequence PPPPNNPPPNPPNPN?</p>Give your answer as a fraction p/q in reduced form.",
    "folder": "prime-frog",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime Frog"
});

db.questions.insert({
    "details": "<p>Consider the divisors of 30: 1,2,3,5,6,10,15,30.<br/>It can be seen that for every divisor <var>d</var> of 30, <var>d</var>+30/<var>d</var> is prime.</p><p>Find the sum of all positive integers <var>n</var> not exceeding 100 000 000<br/>such thatfor every divisor <var>d</var> of <var>n</var>, <var>d</var>+<var>n</var>/<var>d</var> is prime.</p>",
    "folder": "prime-generating-integers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime generating integers"
});

db.questions.insert({
    "details": "<p>For a prime p let S(p) = (<img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>(p-k)!) mod(p) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> k <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 5.</p><p>For example, if p=7,<br/>(7-1)! + (7-2)! + (7-3)! + (7-4)! + (7-5)! = 6! + 5! + 4! + 3! + 2! = 720+120+24+6+2 = 872.<br/> As 872 mod(7) = 4, S(7) = 4.</p><p>It can be verified that <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>S(p) = 480 for 5 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> p <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>S(p) for 5 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> p <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>8</sup>.</p>",
    "folder": "prime-k-factorial",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "(prime-k) factorial"
});

db.questions.insert({
    "details": "<p>Consider the consecutive primes <i>p</i><sub>1</sub> = 19 and <i>p</i><sub>2</sub> = 23. It can be verified that 1219 is the smallest number such that the last digits are formed by <i>p</i><sub>1</sub> whilst also being divisible by <i>p</i><sub>2</sub>.</p><p>In fact, with the exception of <i>p</i><sub>1</sub> = 3 and <i>p</i><sub>2</sub> = 5, for every pair of consecutive primes, <i>p</i><sub>2</sub> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>p</i><sub>1</sub>, there exist values of <i>n</i> for which the last digits are formed by <i>p</i><sub>1</sub> and <i>n</i> is divisible by <i>p</i><sub>2</sub>. Let <i>S</i> be the smallest of these values of <i>n</i>.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> <i>S</i> for every pair of consecutive primes with 5 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>p</i><sub>1</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000000.</p>",
    "folder": "prime-pair-connection",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime pair connection"
});

db.questions.insert({
    "details": "<p>The primes 3, 7, 109, and 673, are quite remarkable. By taking any two primes and concatenating them in any order the result will always be prime. For example, taking 7 and 109, both 7109 and 1097 are prime. The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.</p><p>Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.</p>",
    "folder": "prime-pair-sets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime pair sets"
});

db.questions.insert({
    "details": "<p>The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.</p><p>There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.</p><p>What 12-digit number do you form by concatenating the three terms in this sequence?</p>",
    "folder": "prime-permutations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime permutations"
});

db.questions.insert({
    "details": "<p>The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. In fact, there are exactly four numbers below fifty that can be expressed in such a way:</p><p style=\"margin-left:50px;\">28 = 2<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br/>33 = 3<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br/>49 = 5<sup>2</sup> + 2<sup>3</sup> + 2<sup>4</sup><br/>47 = 2<sup>2</sup> + 3<sup>3</sup> + 2<sup>4</sup></p><p>How many numbers below fifty million can be expressed as the sum of a prime square, prime cube, and prime fourth power?</p>",
    "folder": "prime-power-triples",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime power triples"
});

db.questions.insert({
    "details": "<p>Let <i>p</i><sub>n</sub> be the <i>n</i>th prime: 2, 3, 5, 7, 11, ..., and let <i>r</i> be the remainder when (<i>p</i><sub>n</sub><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)<sup><i>n</i></sup> + (<i>p</i><sub>n</sub>+1)<sup><i>n</i></sup> is divided by <i>p</i><sub>n</sub><sup>2</sup>.</p><p>For example, when <i>n</i> = 3, <i>p</i><sub>3</sub> = 5, and 4<sup>3</sup> + 6<sup>3</sup> = 280 <img alt=\"\u2261\" border=\"0\" height=\"11\" src=\"images/symbol_cong.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5 mod 25.</p><p>The least value of <i>n</i> for which the remainder first exceeds 10<sup>9</sup> is 7037.</p><p>Find the least value of <i>n</i> for which the remainder first exceeds 10<sup>10</sup>.</p>",
    "folder": "prime-square-remainders",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime square remainders"
});

db.questions.insert({
    "details": "<p>Let <var>S</var> ={2, 3, 5, ..., 4999} be the set of prime numbers less than 5000.</p><p>Find the number of subsets of <var>S</var>, the sum of whose elements is a prime number.<br/>Enter the rightmost 16 digits as your answer.</p>",
    "folder": "prime-subset-sums",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime Subset Sums"
});

db.questions.insert({
    "details": "<p>It is possible to write ten as the sum of primes in exactly five different ways:</p><p style=\"margin-left:50px;\">7 + 3<br/>5 + 5<br/>5 + 3 + 2<br/>3 + 3 + 2 + 2<br/>2 + 2 + 2 + 2 + 2</p><p>What is the first value which can be written as the sum of primes in over five thousand different ways?</p>",
    "folder": "prime-summations",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime summations"
});

db.questions.insert({
    "details": "<p>Build a triangle from all positive integers in the following way:</p><p style=\"font-family:courier new,monospace;font-weight:bold;margin-left:50px;\">\u00a01<br/>\u00a0<span style=\"color:red;\">2</span>\u00a0 <span style=\"color:red;\">3</span><br/>\u00a04\u00a0\u00a0<span style=\"color:red;\">5</span>\u00a0\u00a06<br/>\u00a0<span style=\"color:red;\">7</span>\u00a0\u00a08\u00a0\u00a09 10<br/><span style=\"color:red;\">11</span> 12 <span style=\"color:red;\">13</span> 14 15<br/>16 <span style=\"color:red;\">17</span> 18 <span style=\"color:red;\">19</span> 20 21<br/>22 <span style=\"color:red;\">23</span> 24 25 26 27 28<br/><span style=\"color:red;\">29</span> 30 <span style=\"color:red;\">31</span> 32 33 34 35 36<br/><span style=\"color:red;\">37</span> 38 39 40 <span style=\"color:red;\">41</span> 42 <span style=\"color:red;\">43</span> 44 45<br/>46 <span style=\"color:red;\">47</span> 48 49 50 51 52 <span style=\"color:red;\">53</span> 54 55<br/>56 57 58 <span style=\"color:red;\">59</span> 60 <span style=\"color:red;\">61</span> 62 63 64 65 66<br/>. . .</p><p>Each positive integer has up to eight neighbours in the triangle.</p><p>A set of three primes is called a <i>prime triplet</i> if one of the three primes has the other two as neighbours in the triangle.</p><p>For example, in the second row, the prime numbers 2 and 3 are elements of some prime triplet.</p><p>If row 8 is considered, it contains two primes which are elements of some prime triplet, i.e. 29 and 31.<br/>If row 9 is considered, it contains only one prime which is an element of some prime triplet: 37.</p><p>Define S(<var>n</var>) as the sum of the primes in row <var>n</var> which are elements of any prime triplet.<br/>Then S(8)=60 and S(9)=37.</p><p>You are given that S(10000)=950007619.</p><p>Find \u00a0S(5678027) + S(7208785).</p>",
    "folder": "prime-triplets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prime triplets"
});

db.questions.insert({
    "details": "<p>Considering 4-digit primes containing repeated digits it is clear that they cannot all be the same: 1111 is divisible by 11, 2222 is divisible by 22, and so on. But there are nine 4-digit primes containing three ones:</p><p style=\"text-align:center;\">1117, 1151, 1171, 1181, 1511, 1811, 2111, 4111, 8111</p><p>We shall say that M(<i>n</i>, <i>d</i>) represents the maximum number of repeated digits for an <i>n</i>-digit prime where <i>d</i> is the repeated digit, N(<i>n</i>, <i>d</i>) represents the number of such primes, and S(<i>n</i>, <i>d</i>) represents the sum of these primes.</p><p>So M(4, 1) = 3 is the maximum number of repeated digits for a 4-digit prime where one is the repeated digit, there are N(4, 1) = 9 such primes, and the sum of these primes is S(4, 1) = 22275. It turns out that for <i>d</i> = 0, it is only possible to have M(4, 0) = 2 repeated digits, but there are N(4, 0) = 13 such cases.</p><p>In the same way we obtain the following results for 4-digit primes.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"5\" cellspacing=\"0\"><tr><td><b>Digit, <i>d</i></b></td><td><b>M(4, <i>d</i>)</b></td><td><b>N(4, <i>d</i>)</b></td><td><b>S(4, <i>d</i>)</b></td></tr><tr><td>0</td><td>2</td><td>13</td><td>67061</td></tr><tr><td>1</td><td>3</td><td>9</td><td>22275</td></tr><tr><td>2</td><td>3</td><td>1</td><td>2221</td></tr><tr><td>3</td><td>3</td><td>12</td><td>46214</td></tr><tr><td>4</td><td>3</td><td>2</td><td>8888</td></tr><tr><td>5</td><td>3</td><td>1</td><td>5557</td></tr><tr><td>6</td><td>3</td><td>1</td><td>6661</td></tr><tr><td>7</td><td>3</td><td>9</td><td>57863</td></tr><tr><td>8</td><td>3</td><td>1</td><td>8887</td></tr><tr><td>9</td><td>3</td><td>7</td><td>48073</td></tr></table></div><p>For <i>d</i> = 0 to 9, the sum of all S(4, <i>d</i>) is 273700.</p><p>Find the sum of all S(10, <i>d</i>).</p>",
    "folder": "primes-with-runs",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Primes with runs"
});

db.questions.insert({
    "details": "<p>Consider the triangles with integer sides a, b and c with a <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> b <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> c.<br/>An integer sided triangle (a,b,c) is called primitive if <dfn title=\" gcd(a,b,c)=gcd(a,gcd(b,c))\"> gcd(a,b,c)</dfn>=1. <br/>How many primitive integer sided triangles exist with a perimeter not exceeding 10 000 000?</p>",
    "folder": "primitive-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Primitive Triangles"
});

db.questions.insert({
    "details": "<p>For any positive integer <var>n</var> the function next_prime(<var>n</var>) returns the smallest prime p <br/> such that p<img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var>.</p><p>The sequence a(<var>n</var>) is defined by:<br/>a(1)=next_prime(10<sup>14</sup>) and a(<var>n</var>)=next_prime(a(<var>n</var>-1)) for n<img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>1.<p></p><p>The fibonacci sequence f(<var>n</var>) is defined by:f(0)=0, f(1)=1 and f(<var>n</var>)=f(<var>n</var>-1)+f(<var>n</var>-2) for <var>n</var><img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>1.</p><p>The sequence b(<var>n</var>) is defined as f(a(<var>n</var>)).</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>b(<var>n</var>) for 1<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>100 000. Give your answer mod 1234567891011. </p></p>",
    "folder": "primonacci",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Primonacci"
});

db.questions.insert({
    "details": "<p>A particular school offers cash rewards to children with good attendance and punctuality. If they are absent for three consecutive days or late on more than one occasion then they forfeit their prize.</p><p>During an n-day period a trinary string is formed for each child consisting of L's (late), O's (on time), and A's (absent).</p><p>Although there are eighty-one trinary strings for a 4-day period that can be formed, exactly forty-three strings would lead to a prize:</p><p style=\"margin-left:50px;font-family:'Courier New',monospace;\">OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA<br/>OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO<br/>AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL<br/>AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA<br/>LAOO LAOA LAAO</p><p>How many \"prize\" strings exist over a 30-day period?</p>",
    "folder": "prize-strings",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Prize Strings"
});

db.questions.insert({
    "details": "<p>A natural number, N, that can be written as the sum and product of a given set of at least two natural numbers,{<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, ... , <i>a</i><sub><i>k</i></sub>} is called a product-sum number: N = <i>a</i><sub>1</sub> + <i>a</i><sub>2</sub> + ... + <i>a</i><sub><i>k</i></sub> = <i>a</i><sub>1</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>a</i><sub>2</sub> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> ... <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>a</i><sub><i>k</i></sub>.</p><p>For example, 6 = 1 + 2 + 3 = 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3.</p><p>For a given set of size, <i>k</i>, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, <i>k</i> = 2, 3, 4, 5, and 6 are as follows.</p><p style=\"margin-left:50px;\"><i>k</i>=2: 4 = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 = 2 + 2<br/><i>k</i>=3: 6 = 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 = 1 + 2 + 3<br/><i>k</i>=4: 8 = 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 4 = 1 + 1 + 2 + 4<br/><i>k</i>=5: 8 = 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2  = 1 + 1 + 2 + 2 + 2<br/><i>k</i>=6: 12 = 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 1 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 6 = 1 + 1 + 1 + 1 + 2 + 6</p><p>Hence for 2<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><i>k</i><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>6, the sum of all the minimal product-sum numbers is 4+6+8+12 = 30; note that 8 is only counted once in the sum.</p><p>In fact, as the complete set of minimal product-sum numbers for 2<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><i>k</i><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>12 is{4, 6, 8, 12, 15, 16}, the sum is 61.</p><p>What is the sum of all the minimal product-sum numbers for 2<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><i>k</i><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>12000?</p>",
    "folder": "product-sum-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Product-sum numbers"
});

db.questions.insert({
    "details": "<p>In a very simplified form, we can consider proteins as strings consisting of hydrophobic (H) and polar (P) elements, e.g. HHPPHHHPHHPH. <br/>For this problem, the orientation of a protein is important; e.g. HPP is considered distinct from PPH. Thus, there are 2<sup><var>n</var></sup> distinct proteins consisting of <var>n</var> elements.</p><p>When one encounters these strings in nature, they are always folded in such a way that the number of H-H contact points is as large as possible, since this is energetically advantageous.<br/>As a result, the H-elements tend to accumulate in the inner part, with the P-elements on the outside.<br/>Natural proteins are folded in three dimensions of course, but we will only consider protein folding in <u>two dimensions</u>.</p><p>The figure below shows two possible ways that our example protein could be folded (H-H contact points are shown with red dots).</p><div align=\"center\"><img src=\"project/images/p_300_protein.gif\"/></div><p>The folding on the left has only six H-H contact points, thus it would never occur naturally.<br/>On the other hand, the folding on the right has nine H-H contact points, which is optimal for this string.</p><p>Assuming that H and P elements are equally likely to occur in any position along the string, the average number of H-H contact points in an optimal folding of a random protein string of length 8 turns out to be 850\u00a0/\u00a02<sup>8</sup>=3.3203125.</p><p>What is the average number of H-H contact points in an optimal folding of a random protein string of length 15?<br/>Give your answer using as many decimal places as necessary for an exact result.</p>",
    "folder": "protein-folding",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Protein folding"
});

db.questions.insert({
    "details": "<p>An even positive integer N will be called admissible, if it is a power of 2 or its distinct prime factors are consecutive primes.<br/>The first twelve admissible numbers are 2,4,6,8,12,16,18,24,30,32,36,48.</p><p>If N is admissible, the smallest integer M <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 such that N+M is prime, will be called the pseudo-Fortunate number for N.</p><p>For example, N=630 is admissible since it is even and its distinct prime factors are the consecutive primes 2,3,5 and 7.<br/> The next prime number after 631 is 641; hence, the pseudo-Fortunate number for 630 is M=11.<br/>It can also be seen that the pseudo-Fortunate number for 16 is 3.</p><p>Find the sum of all distinct pseudo-Fortunate numbers for admissible numbers N less than 10<sup>9</sup>.</p>",
    "folder": "pseudo-fortunate-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pseudo-Fortunate Numbers"
});

db.questions.insert({
    "details": "<p>The divisors of 12 are: 1,2,3,4,6 and 12.<br/>The largest divisor of 12 that does not exceed the square root of 12 is 3.<br/>We shall call the largest divisor of an integer <var>n</var> that does not exceed the square root of <var>n</var> the pseudo square root (PSR) of <var>n</var>.<br/>It can be seen that PSR(3102)=47.</p><p>Let <var>p</var> be the product of the primes below 190.<br/>Find PSR(<var>p</var>) mod 10<sup>16</sup>.</p>",
    "folder": "pseudo-square-root",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pseudo Square Root"
});

db.questions.insert({
    "details": "<p>Albert chooses a positive integer <var>k</var>, then two real numbers <var>a</var>, <var>b</var> are randomly chosen in the interval [0,1] with uniform distribution.<br/>The square root of the sum (<var>k</var>\u00b7<var>a</var>+1)<sup>2</sup>\u2009+\u2009(<var>k</var>\u00b7<var>b</var>+1)<sup>2</sup> is then computed and rounded to the nearest integer. If the result is equal to <var>k</var>, he scores <var>k</var> points; otherwise he scores nothing.</p><p>For example, if <var>k</var>\u2009=\u20096, <var>a</var>\u2009=\u20090.2 and <var>b</var>\u2009=\u20090.85, then (<var>k</var>\u00b7<var>a</var>+1)<sup>2</sup>\u2009+\u2009(<var>k</var>\u00b7<var>b</var>+1)<sup>2</sup>\u2009=\u200942.05.<br/>The square root of 42.05 is 6.484... and when rounded to the nearest integer, it becomes 6.<br/>This is equal to <var>k</var>, so he scores 6 points.</p><p>It can be shown that if he plays 10 turns with <var>k</var>\u2009=\u20091, <var>k</var>\u2009=\u20092, ..., <var>k</var>\u2009=\u200910, the expected value of his total score, rounded to five decimal places, is 10.20914.</p><p>If he plays 10<sup>5</sup> turns with <var>k</var>\u2009=\u20091, <var>k</var>\u2009=\u20092, <var>k</var>\u2009=\u20093, ..., <var>k</var>\u2009=\u200910<sup>5</sup>, what is the expected value of his total score, rounded to five decimal places?</p>",
    "folder": "pythagorean-odds",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pythagorean odds"
});

db.questions.insert({
    "details": "<p>We shall define a <i>pythagorean polygon</i>  to be a <b>convex polygon</b> with the following properties:<br/><ul><li>there are at least three vertices,</li><li>no three vertices are aligned,</li><li>each vertex has <b>integer coordinates</b>,</li><li>each edge has <b>integer length</b>.</li></ul></p><p>For a given integer <var>n</var>, define P(<var>n</var>) as the number of distinct pythagorean polygons for which the perimeter is <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u2009<var>n</var>.<br/>Pythagorean polygons should be considered distinct as long as none is a translation of another.</p><p>You are given that P(4)\u2009=\u20091, P(30)\u2009=\u20093655 and P(60)\u2009=\u2009891045.<br/>Find P(120).</p>",
    "folder": "pythagorean-polygons",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pythagorean Polygons"
});

db.questions.insert({
    "details": "<p>Let (<i>a</i>, <i>b</i>, <i>c</i>) represent the three sides of a right angle triangle with integral length sides. It is possible to place four such triangles together to form a square with length <i>c</i>.</p><p>For example, (3, 4, 5) triangles can be placed together to form a 5 by 5 square with a 1 by 1 hole in the middle and it can be seen that the 5 by 5 square can be tiled with twenty-five 1 by 1 squares.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"180\" src=\"project/images/p_139.gif\" width=\"400\"/></div><p>However, if (5, 12, 13) triangles were used then the hole would measure 7 by 7 and these could not be used to tile the 13 by 13 square.</p><p>Given that the perimeter of the right triangle is less than one-hundred million, how many Pythagorean triangles would allow such a tiling to take place?</p>",
    "folder": "pythagorean-tiles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pythagorean tiles"
});

db.questions.insert({
    "details": "<p>The <b>Pythagorean tree</b> is a fractal generated by the following procedure:</p><p>Start with a unit square. Then, calling one of the sides its base (in the animation, the bottom side is the base):<ol><li> Attach a right triangle to the side opposite the base, with the hypotenuse coinciding with that side and with the sides in a 3-4-5 ratio. Note that the smaller side of the triangle must be on the 'right' side with respect to the base (see animation).</li><li> Attach a square to each leg of the right triangle, with one of its sides coinciding with that leg.</li><li> Repeat this procedure for both squares, considering as their bases the sides touching the triangle.</li></ol>The resulting figure, after an infinite number of iterations, is the Pythagorean tree.</p><div align=\"center\"><img src=\"project/images/p_395_pythagorean.gif\"/></div><p>It can be shown that there exists at least one rectangle, whose sides are parallel to the largest square of the Pythagorean tree, which encloses the Pythagorean tree completely.</p><p>Find the smallest area possible for such a bounding rectangle, and give your answer rounded to 10 decimal places.</p>",
    "folder": "pythagorean-tree",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Pythagorean tree"
});

db.questions.insert({
    "details": "<p>Euler discovered the remarkable quadratic formula:</p><p style=\"text-align:center;\"><i>n</i>\u00b2 + <i>n</i> + 41</p><p>It turns out that the formula will produce 40 primes for the consecutive values <i>n</i> = 0 to 39. However, when <i>n</i> = 40, 40<sup>2</sup> + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when <i>n</i> = 41, 41\u00b2 + 41 + 41 is clearly divisible by 41.</p><p>The incredible formula \u00a0<i>n</i>\u00b2 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 79<i>n</i> + 1601 was discovered, which produces 80 primes for the consecutive values <i>n</i> = 0 to 79. The product of the coefficients, <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>79 and 1601, is <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>126479.</p><p>Considering quadratics of the form:</p><blockquote><i>n</i>\u00b2 + <i>an</i> + <i>b</i>, where |<i>a</i>| <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000 and |<i>b</i>| <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000<br/><br/><div class=\"info\" style=\"text-align:left;\">where |<i>n</i>| is the modulus/absolute value of <i>n</i><br/>e.g. |11| = 11 and |<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4| = 4</div></blockquote><p>Find the product of the coefficients, <i>a</i> and <i>b</i>, for the quadratic expression that produces the maximum number of primes for consecutive values of <i>n</i>, starting with <i>n</i> = 0.</p>",
    "folder": "quadratic-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Quadratic primes"
});

db.questions.insert({
    "details": "<p>The quadtree encoding allows us to describe a 2<sup><var>N</var></sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup><var>N</var></sup>  black and white image as a sequence of bits (0 and 1). Those sequences are to be read from left to right like this:<ul><li>the first bit deals with the complete 2<sup><var>N</var></sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup><var>N</var></sup> region;</li><li>\"0\" denotes a split:<br/>the current 2<sup><var>n</var></sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup><var>n</var></sup> region is divided into 4 sub-regions of dimension 2<sup><var>n</var>-1</sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup><var>n</var>-1</sup>,<br/>the next bits contains the description of the top left, top right, bottom left and bottom right sub-regions - in that order;</li><li>\"10\" indicates that the current region contains only black pixels;</li><li>\"11\" indicates that the current region contains only white pixels.</li></ul></p><p>Consider the following 4<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4 image (colored marks denote places where a split can occur):</p><div align=\"center\"><img src=\"project/images/p_287_quadtree.gif\"/></div><p>This image can be described by several sequences, for example :<bp></bp>\"<span style=\"color:red;\"><b>0</b></span><span style=\"color:blue;\"><b>0</b></span>10101010<span style=\"color:green;\"><b>0</b></span>1011111011<span style=\"color:orange;\"><b>0</b></span>10101010\", of length 30, or<br/>\"<span style=\"color:red;\"><b>0</b></span>10<span style=\"color:green;\"><b>0</b></span>101111101110\", of length 16, which is the minimal sequence for this image.</p><p>For a positive integer <var>N</var>, define <var>D<sub>N</sub></var> as the 2<sup><var>N</var></sup><img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup><var>N</var></sup> image with the following coloring scheme:<ul><li>the pixel with coordinates <var>x</var>\u2009=\u20090, <var>y</var>\u2009=\u20090 corresponds to the bottom left pixel,</li><li>if (<var>x</var>\u2009-\u20092<sup><var>N</var>-1</sup>)<sup>2</sup>\u2009+\u2009(<var>y</var>\u2009-\u20092<sup><var>N</var>-1</sup>)<sup>2</sup>\u2009<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u20092<sup>2<var>N</var>-2</sup> then the pixel is black,</li><li>otherwise the pixel is white.</li></ul></p><p>What is the length of the minimal sequence describing <var>D</var><sub>24</sub>\u2009?</p>",
    "folder": "quadtree-encoding-a-simple-com",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Quadtree encoding (a simple compression algorithm)"
});

db.questions.insert({
    "details": "<p><var>N</var> disks are placed in a row, indexed 1 to <var>N</var> from left to right.<br>Each disk has a black side and white side. Initially all disks show their white side.</br></p><p>At each turn, two, not necessarily distinct, integers <var>A</var> and <var>B</var> between 1 and <var>N</var> (inclusive) are chosen uniformly at random.<br>All disks with an index from <var>A</var> to <var>B</var> (inclusive) are flipped.</br></p><p>The following example shows the case <var>N</var> = 8. At the first turn <var>A</var> = 5 and <var>B</var> = 2, and at the second turn <var>A</var> = 4 and <var>B</var> = 6.</p><p align=\"center\"><img src=\"project/images/p_430_flips.gif\"/></p><p>Let E(<var>N</var>, <var>M</var>) be the expected number of disks that show their white side after <var>M</var> turns.<br>We can verify that E(3, 1) = 10/9, E(3, 2) = 5/3, E(10, 4) <img alt=\"\u2248\" border=\"0\" height=\"9\" src=\"images/symbol_asymp.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 5.157 and E(100, 10) <img alt=\"\u2248\" border=\"0\" height=\"9\" src=\"images/symbol_asymp.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 51.893.</br></p><p>Find E(10<sup>10</sup>, 4000).<br>Give your answer rounded to 2 decimal places behind the decimal point.</br></p>",
    "folder": "range-flips",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Range flips"
});

db.questions.insert({
    "details": "<p>For any integer <var>n</var>, consider the three functions</p><p style=\"margin-left:50px;\"><var>f</var><sub>1,<var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) = <var>x</var><sup><var>n</var>+1</sup> + <var>y</var><sup><var>n</var>+1</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>z</var><sup><var>n</var>+1</sup><br/><var>f</var><sub>2,<var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) = (<var>xy</var> + <var>yz</var> + <var>zx</var>)*(<var>x</var><sup><var>n</var>-1</sup> + <var>y</var><sup><var>n</var>-1</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>z</var><sup><var>n</var>-1</sup>)<br/><var>f</var><sub>3,<var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) = <var>xyz</var>*(<var>x</var><sup><var>n</var>-2</sup> + <var>y</var><sup><var>n</var>-2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>z</var><sup><var>n</var>-2</sup>)</p><p>and their combination</p><p style=\"margin-left:50px;\"><var>f</var><sub><var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) = <var>f</var><sub>1,<var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) + <var>f</var><sub>2,<var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>f</var><sub>3,<var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>)</p><p>We call (<var>x</var>,<var>y</var>,<var>z</var>) a golden triple of order <var>k</var> if <var>x</var>, <var>y</var>, and <var>z</var> are all rational numbers of the form <var>a</var> / <var>b</var> with<br/>0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> and there is (at least) one integer <var>n</var>, so that <var>f</var><sub><var>n</var></sub>(<var>x</var>,<var>y</var>,<var>z</var>) = 0.</p><p>Let <var>s</var>(<var>x</var>,<var>y</var>,<var>z</var>) = <var>x</var> + <var>y</var> + <var>z</var>.<br/>Let <var>t</var> = <var>u</var> / <var>v</var> be the sum of all distinct <var>s</var>(<var>x</var>,<var>y</var>,<var>z</var>) for all golden triples (<var>x</var>,<var>y</var>,<var>z</var>) of order 35.<br/> All the <var>s</var>(<var>x</var>,<var>y</var>,<var>z</var>) and <var>t</var>  must be in reduced form.</p><p>Find <var>u</var> + <var>v</var>.</p>",
    "folder": "rational-zeros-of-a-function-o",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Rational zeros of a function of three variables."
});

db.questions.insert({
    "details": "<p>A positive integer will be called <i>reachable</i> if it can result from an arithmetic expression obeying the following rules:</p><ul><li>Uses the digits 1 through 9, in that order and exactly once each.</li><li>Any successive digits can be concatenated (for example, using the digits 2, 3 and 4 we obtain the number 234).</li><li>Only the four usual binary arithmetic operations (addition, subtraction, multiplication and division) are allowed.</li><li>Each operation can be used any number of times, or not at all.</li><li><dfn title=\"A minus sign applied to a single operand (as opposed to a subtraction operator between two operands)\">Unary minus</dfn> is not allowed.</li><li>Any number of (possibly nested) parentheses may be used to define the order of operations.</li></ul><p>For example, 42 is reachable, since (1/23) * ((4*5)-6) * (78-9) = 42.</p><p>What is the sum of all positive reachable integers?</p>",
    "folder": "reachable-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Reachable Numbers"
});

db.questions.insert({
    "details": "<p>A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:</p><blockquote><table><tr><td><sup>1</sup>/<sub>2</sub></td><td>=\u00a0</td><td>0.5</td></tr><tr><td><sup>1</sup>/<sub>3</sub></td><td>=\u00a0</td><td>0.(3)</td></tr><tr><td><sup>1</sup>/<sub>4</sub></td><td>=\u00a0</td><td>0.25</td></tr><tr><td><sup>1</sup>/<sub>5</sub></td><td>=\u00a0</td><td>0.2</td></tr><tr><td><sup>1</sup>/<sub>6</sub></td><td>=\u00a0</td><td>0.1(6)</td></tr><tr><td><sup>1</sup>/<sub>7</sub></td><td>=\u00a0</td><td>0.(142857)</td></tr><tr><td><sup>1</sup>/<sub>8</sub></td><td>=\u00a0</td><td>0.125</td></tr><tr><td><sup>1</sup>/<sub>9</sub></td><td>=\u00a0</td><td>0.(1)</td></tr><tr><td><sup>1</sup>/<sub>10</sub></td><td>=\u00a0</td><td>0.1</td></tr></table></blockquote><p>Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that <sup>1</sup>/<sub>7</sub> has a 6-digit recurring cycle.</p><p>Unit fractions whose denominator has no other prime factors than 2 and/or 5 are not considered to have a recurring cycle.<br/>We define the length of the recurring cycle of those unit fractions as 0. </p><p>Let L(n) denote the length of the recurring cycle of 1/n.You are given that <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>L(n) for 3 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1 000 000 equals 55535191115.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>L(n) for 3 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 000 000</p>",
    "folder": "reciprocal-cycles-ii",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Reciprocal cycles II"
});

db.questions.insert({
    "details": "<p>A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:</p><blockquote><table><tr><td><sup>1</sup>/<sub>2</sub></td><td>=\u00a0</td><td>0.5</td></tr><tr><td><sup>1</sup>/<sub>3</sub></td><td>=\u00a0</td><td>0.(3)</td></tr><tr><td><sup>1</sup>/<sub>4</sub></td><td>=\u00a0</td><td>0.25</td></tr><tr><td><sup>1</sup>/<sub>5</sub></td><td>=\u00a0</td><td>0.2</td></tr><tr><td><sup>1</sup>/<sub>6</sub></td><td>=\u00a0</td><td>0.1(6)</td></tr><tr><td><sup>1</sup>/<sub>7</sub></td><td>=\u00a0</td><td>0.(142857)</td></tr><tr><td><sup>1</sup>/<sub>8</sub></td><td>=\u00a0</td><td>0.125</td></tr><tr><td><sup>1</sup>/<sub>9</sub></td><td>=\u00a0</td><td>0.(1)</td></tr><tr><td><sup>1</sup>/<sub>10</sub></td><td>=\u00a0</td><td>0.1</td></tr></table></blockquote><p>Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that <sup>1</sup>/<sub>7</sub> has a 6-digit recurring cycle.</p><p>Find the value of <i>d</i> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000 for which <sup>1</sup>/<sub><i>d</i></sub> contains the longest recurring cycle in its decimal fraction part.</p>",
    "folder": "reciprocal-cycles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Reciprocal cycles"
});

db.questions.insert({
    "details": "<p>In a 3x2 cross-hatched grid, a total of 37 different rectangles could be situated within that grid as indicated in the sketch.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"176\" src=\"project/images/p_147.gif\" width=\"361\"/></div><p>There are 5 grids smaller than 3x2, vertical and horizontal dimensions being important, i.e. 1x1, 2x1, 3x1, 1x2 and 2x2. If each of them is cross-hatched, the following number of different rectangles could be situated within those smaller grids:</p><p>1x1: 1<br/>2x1: 4<br/>3x1: 8<br/>1x2: 4<br/>2x2: 18</p><p>Adding those to the 37 of the 3x2 grid, a total of 72 different rectangles could be situated within 3x2 and smaller grids.</p><p>How many different rectangles could be situated within 47x43 and smaller grids?</p>",
    "folder": "rectangles-in-cross-hatched-gr",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Rectangles in cross-hatched grids"
});

db.questions.insert({
    "details": "<p>Using a combination of black square tiles and oblong tiles chosen from: red tiles measuring two units, green tiles measuring three units, and blue tiles measuring four units, it is possible to tile a row measuring five units in length in exactly fifteen different ways.</p><table align=\"center\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\"><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"4\" style=\"background-color:#0000cc\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"92\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"4\" style=\"background-color:#0000cc\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"92\"/></td></tr></table></td><td>\u00a0</td></tr></table><p>How many ways can a row measuring fifty units in length be tiled?</p><p class=\"info\">NOTE: This is related to problem <a href=\"index.php?section=problems&amp;id=116\">116</a>.</p>",
    "folder": "red-green-and-blue-tiles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Red, green, and blue tiles"
});

db.questions.insert({
    "details": "<p>A row of five black square tiles is to have a number of its tiles replaced with coloured oblong tiles chosen from red (length two), green (length three), or blue (length four).</p><p>If red tiles are chosen there are exactly seven ways this can be done.</p><table align=\"center\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\"><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td></tr><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td><td colspan=\"2\" style=\"background-color:#cc0000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"44\"/></td></tr></table></td><td>\u00a0</td></tr></table><p>If green tiles are chosen there are three ways.</p><table align=\"center\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\"><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"3\" style=\"background-color:#00cc00\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"68\"/></td></tr></table></td><td>\u00a0</td></tr></table><p>And if blue tiles are chosen there are two ways.</p><table align=\"center\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\"><tr><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td><td colspan=\"4\" style=\"background-color:#0000cc\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"92\"/></td></tr></table></td><td><table border=\"1\" cellpadding=\"0\" cellspacing=\"2\"><tr><td colspan=\"4\" style=\"background-color:#0000cc\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"92\"/></td><td style=\"background-color:#000000\"><img alt=\"\" height=\"20\" src=\"images/spacer.gif\" width=\"20\"/></td></tr></table></td></tr></table><p>Assuming that colours cannot be mixed there are 7 + 3 + 2 = 12 ways of replacing the black tiles in a row measuring five units in length.</p><p>How many different ways can the black tiles in a row measuring fifty units in length be replaced if colours cannot be mixed and at least one coloured tile must be used?</p><p class=\"info\">NOTE: This is related to problem <a href=\"index.php?section=problems&amp;id=117\">117</a>.</p>",
    "folder": "red-green-or-blue-tiles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Red, green or blue tiles"
});

db.questions.insert({
    "details": "<p>Let's call S the (infinite) string that is made by concatenating the consecutive positive integers (starting from 1)  written down in base 10.<br/> Thus, S = 1234567891011121314151617181920212223242...</p><p>It's easy to see that any number will show up an infinite number of times in S.</p><p>Let's call f(n) the starting position of the n<sup>th</sup> occurrence of n in S.<br/> For example, f(1)=1, f(5)=81, f(12)=271 and f(7780)=111111365.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>f(3<sup>k</sup>) for 1<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>k<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>13.</p>",
    "folder": "reflexive-position",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Reflexive Position"
});

db.questions.insert({
    "details": "<p>A number consisting entirely of ones is called a repunit. We shall define R(<i>k</i>) to be a repunit of length <i>k</i>; for example, R(6) = 111111.</p><p>Given that <i>n</i> is a positive integer and GCD(<i>n</i>, 10) = 1, it can be shown that there always exists a value, <i>k</i>, for which R(<i>k</i>) is divisible by <i>n</i>, and let A(<i>n</i>) be the least such value of <i>k</i>; for example, A(7) = 6 and A(41) = 5.</p><p>The least value of <i>n</i> for which A(<i>n</i>) first exceeds ten is 17.</p><p>Find the least value of <i>n</i> for which A(<i>n</i>) first exceeds one-million.</p>",
    "folder": "repunit-divisibility",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Repunit divisibility"
});

db.questions.insert({
    "details": "<p>A number consisting entirely of ones is called a repunit. We shall define R(<var>k</var>) to be a repunit of length <var>k</var>; for example, R(6) = 111111.</p><p>Let us consider repunits of the form R(10<sup><var>n</var></sup>).</p><p>Although R(10), R(100), or R(1000) are not divisible by 17, R(10000) is divisible by 17. Yet there is no value of <var>n</var> for which R(10<sup><var>n</var></sup>) will divide by 19. In fact, it is remarkable that 11, 17, 41, and 73 are the only four primes below one-hundred that can <!-- ever--> be a factor of R(10<sup><var>n</var></sup>).</p><p>Find the sum of all the primes below one-hundred thousand that will never be a factor of R(10<sup><var>n</var></sup>).</p>",
    "folder": "repunit-nonfactors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Repunit nonfactors"
});

db.questions.insert({
    "details": "<p> </p><p>A positive fraction whose numerator is less than its denominator is called a proper fraction.<br/>For any denominator, <var>d</var>, there will be <var>d</var><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1 proper fractions; for example, with <var>d</var>\u2009=\u200912:<br/><sup>1</sup>/<sub>12</sub> , <sup>2</sup>/<sub>12</sub> , <sup>3</sup>/<sub>12</sub> , <sup>4</sup>/<sub>12</sub> , <sup>5</sup>/<sub>12</sub> , <sup>6</sup>/<sub>12</sub> , <sup>7</sup>/<sub>12</sub> , <sup>8</sup>/<sub>12</sub> , <sup>9</sup>/<sub>12</sub> , <sup>10</sup>/<sub>12</sub> , <sup>11</sup>/<sub>12</sub> .</p><p>We shall call a fraction that cannot be cancelled down a <i>resilient fraction</i>.<br/>Furthermore we shall define the <i>resilience</i> of a denominator, <var>R</var>(<var>d</var>), to be the ratio of its proper fractions that are resilient; for example, <var>R</var>(12) = <sup>4</sup>/<sub>11</sub> .<br/>In fact, <var>d</var>\u2009=\u200912 is the smallest denominator having a resilience <var>R</var>(<var>d</var>) &lt; <sup>4</sup>/<sub>10</sub> .</p><p>Find the smallest denominator <var>d</var>, having a resilience <var>R</var>(<var>d</var>) &lt; <sup>15499</sup>/<sub>94744</sub> .</p>",
    "folder": "resilience",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Resilience"
});

db.questions.insert({
    "details": "<p>The four right-angled triangles with sides (9,12,15), (12,16,20), (5,12,13) and (12,35,37) all have one of the shorter sides (catheti) equal to 12. It can be shown that no other integer sided right-angled triangle exists with one of the catheti equal to 12.</p><p>Find the smallest integer that can be the length of a cathetus of exactly 47547 different integer sided right-angled triangles.</p>",
    "folder": "right-angled-triangles-that-sh",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Right-angled triangles that share a cathetus."
});

db.questions.insert({
    "details": "<p>The points P (<i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>) and Q (<i>x</i><sub>2</sub>, <i>y</i><sub>2</sub>) are plotted at integer co-ordinates and are joined to the origin, O(0,0), to form \u0394OPQ.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_091_1.gif\"/><br/></div><p>There are exactly fourteen triangles containing a right angle that can be formed when each co-ordinate lies between 0 and 2 inclusive; that is,<br/>0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>x</i><sub>2</sub>, <i>y</i><sub>2</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_091_2.gif\"/><br/></div><p>Given that 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>x</i><sub>1</sub>, <i>y</i><sub>1</sub>, <i>x</i><sub>2</sub>, <i>y</i><sub>2</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 50, how many right triangles can be formed?</p>",
    "folder": "right-triangles-with-integer-c",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Right triangles with integer coordinates"
});

db.questions.insert({
    "details": "<p>Recall that a graph is a collection of vertices and edges connecting the vertices, and that two vertices connected by an edge are called adjacent.<br/>Graphs can be embedded in Euclidean space by associating each vertex with a point in the Euclidean space.<br/>A <strong>flexible</strong> graph is an embedding of a graph where it is possible to move one or more vertices continuously so that the distance between at least two nonadjacent vertices is altered while the distances between each pair of adjacent vertices is kept constant.<br/>A <strong>rigid</strong> graph is an embedding of a graph which is not flexible.<br/>Informally, a graph is rigid if by replacing the vertices with fully rotating hinges and the edges with rods that are unbending and inelastic, no parts of the graph can be moved independently from the rest of the graph.</p><p>The <strong>grid graphs</strong> embedded in the Euclidean plane are not rigid, as the following animation demonstrates:<br/><img src=\"project/images/p434_rigid.gif\"/></p><p>However, one can make them rigid by adding diagonal edges to the cells. For example, for the 2x3 grid graph, there are 19 ways to make the graph rigid:<br/><img src=\"project/images/p434_rigid23.png\"/></p><p>Note that for the purposes of this problem, we do not consider changing the orientation of a diagonal edge or adding both diagonal edges to a cell as a different way of making a grid graph rigid.</p><p>Let <var>R</var>(<var>m</var>,<var>n</var>) be the number of ways to make the <var>m</var> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <var>n</var> grid graph rigid. <br/>E.g. <var>R</var>(2,3) = 19 and <var>R</var>(5,5) = 23679901</p><p>Define <var>S</var>(<var>N</var>) as <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/><var>R</var>(<var>i</var>,<var>j</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var>, <var>j</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>E.g. <var>S</var>(5) = 25021721.<br/>Find <var>S</var>(100), give your answer modulo 1000000033</p>",
    "folder": "rigid-graphs",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Rigid graphs"
});

db.questions.insert({
    "details": "<p>A moon could be described by the sphere C(<var>r</var>) with centre (0,0,0) and radius <var>r</var>. </p><p>There are stations on the moon at the points on the surface of C(<var>r</var>) with integer coordinates. The station at (0,0,<var>r</var>) is called North Pole station, the station at (0,0,-<var>r</var>) is called South Pole station.</p><p>All stations are connected with each other via the shortest road on the great arc through the stations. A journey between two stations is risky. If <var>d</var> is the length of the road between two stations, (<var>d</var>/(\u03c0 <var>r</var>))<sup>2</sup> is a measure for the risk of the journey (let us call it the risk of the road). If the journey includes more than two stations, the risk of the journey is the sum of risks of the used roads.</p><p>A direct journey from  the North Pole station to the South Pole station has the length \u03c0<var>r</var> and risk 1. The journey from the North Pole station to the South Pole station via (0,<var>r</var>,0) has the same length, but a smaller risk: (\u00bd\u03c0<var>r</var>/(\u03c0<var>r</var>))<sup>2</sup>+(\u00bd\u03c0<var>r</var>/(\u03c0<var>r</var>))<sup>2</sup>=0.5.</p><p>The minimal risk of a journey from the North Pole station to the South Pole station on C(<var>r</var>) is M(<var>r</var>).</p><p>You are given that M(7)=0.1784943998  rounded to 10 digits behind the decimal point. </p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>M(2<sup>n</sup>-1) for 1<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>n<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>15.</p><p>Give your answer rounded to 10 digits behind the decimal point in the form a.bcdefghijk.</p>",
    "folder": "risky-moon",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Risky moon"
});

db.questions.insert({
    "details": "<p>A robot moves in a series of one-fifth circular arcs (72\u00b0), with a free choice of a clockwise or an anticlockwise arc for each step, but no turning on the spot.</p><p>One of 70932 possible closed paths of 25 arcs starting northward is</p><div style=\"text-align:center;\"><img alt=\"\" src=\"http://projecteuler.net/project/images/p_208_robotwalk.gif\"/></div><p>Given that the robot starts facing North, how many journeys of 70 arcs in length can it take that return it, after the final arc, to its starting position?<br/><!--(Journeys are allowed to return multiple times to the start.)-->(Any arc may be traversed multiple times.) </p>",
    "folder": "robot-walks",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Robot Walks"
});

db.questions.insert({
    "details": "<p>The rules for writing Roman numerals allow for many ways of writing each number (see <a href=\"about=roman_numerals\">About Roman Numerals...</a>). However, there is always a \"best\" way of writing a particular number.</p><p>For example, the following represent all of the legitimate ways of writing the number sixteen:</p><p style=\"margin-left:50px;font-family:courier new,monospace;\">IIIIIIIIIIIIIIII<br/>VIIIIIIIIIII<br/>VVIIIIII<br/>XIIIIII<br/>VVVI<br/>XVI</p><p>The last example being considered the most efficient, as it uses the least number of numerals.</p><p>The 11K text file, <a href=\"project/roman.txt\">roman.txt</a> (right click and 'Save Link/Target As...'), contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; that is, they are arranged in descending units and obey the subtractive pair rule (see <a href=\"about=roman_numerals\">About Roman Numerals...</a> for the definitive rules for this problem).</p><p>Find the number of characters saved by writing each of these in their minimal form.</p><p class=\"info\">Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.</p>",
    "folder": "roman-numerals",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Roman numerals"
});

db.questions.insert({
    "details": "<p>A series of three rooms are connected to each other by automatic doors.</p><div align=\"center\"><img src=\"http://projecteuler.net/project/images/p_327_rooms_of_doom.gif\"/></div><p>Each door is operated by a security card. Once you enter a room the door automatically closes and that security card cannot be used again. A machine at the start will dispense an unlimited number of cards, but each room (including the starting room) contains scanners and if they detect that you are holding more than three security cards or if they detect an unattended security card on the floor, then all the doors will become permanently locked. However, each room contains a box where you may safely store any number of security cards for use at a later stage.</p><p>If you simply tried to travel through the rooms one at a time then as you entered room 3 you would have used all three cards and would be trapped in that room forever!</p><p>However, if you make use of the storage boxes, then escape is possible. For example, you could enter room 1 using your first card, place one card in the storage box, and use your third card to exit the room back to the start. Then after collecting three more cards from the dispensing machine you could use one to enter room 1 and collect the card you placed in the box a moment ago. You now have three cards again and will be able to travel through the remaining three doors. This method allows you to travel through all three rooms using six security cards in total.</p><p>It is possible to travel through six rooms using a total of 123 security cards while carrying a maximum of 3 cards.</p><p>Let <var>C</var> be the maximum number of cards which can be carried at any time.</p><p>Let <var>R</var> be the number of rooms to travel through.</p><p>Let M(<var>C</var>,<var>R</var>) be the minimum number of cards required from the dispensing machine to travel through <var>R</var> rooms carrying up to a maximum of <var>C</var> cards at any time.</p><p>For example, M(3,6)=123 and M(4,6)=23.<br>And, \u03a3M(<var>C</var>,6)=146 for 3 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>C</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4.</br></p><p>You are given that \u03a3M(<var>C</var>,10)=10382 for 3 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>C</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10.</p><p>Find \u03a3M(<var>C</var>,30) for 3 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>C</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 40.</p>",
    "folder": "rooms-of-doom",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Rooms of Doom"
});

db.questions.insert({
    "details": "<p>We define the <i>rounded-square-root</i> of a positive integer <var>n</var> as the square root of <var>n</var> rounded to the nearest integer.</p><p>The following procedure (essentially Heron's method adapted to integer arithmetic) finds the rounded-square-root of <var>n</var>:</p><p>Let <var>d</var> be the number of digits of the number <var>n</var>.<br/>If <var>d</var> is odd, set <var>x</var><sub>0</sub> = 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>(<var>d</var>-1)\u20442</sup>.<br/>If <var>d</var> is even, set <var>x</var><sub>0</sub> = 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>(<var>d</var>-2)\u20442</sup>.<br/>Repeat:</p><p align=\"center\"><img src=\"project/images/p_255_Heron.gif\"/></p><table align='center'><tr><td><var>x</var><sub><var>k</var>+1</sub> =</td><td style='font-size:220%'>&#8970;</td><td style='text-align:center;'><var>x</var><sub><var>k</var></sub> + <img src='images/symbol_lceil.gif' width='6' height='16' alt='&lceil;' border='0' style='vertical-align:middle;' /><var>n</var>&frasl;<var>x</var><sub><var>k</var></sub><img src='images/symbol_rceil.gif' width='6' height='16' alt='&rceil;' border='0' style='vertical-align:middle;' /><br /><img src='images/blackdot.gif' width='75' height='1' alt='' /><br />2</td><td><td style='font-size:220%'>&#8971;</td></tr></table> <p>until <var>x</var><sub><var>k</var>+1</sub> = <var>x</var><sub><var>k</var></sub>.</p><p>As an example, let us find the rounded-square-root of <var>n</var> = 4321.<br/><var>n</var> has 4 digits, so <var>x</var><sub>0</sub> = 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10<sup>(4-2)\u20442</sup> = 70.<br/><img src=\"project/images/p_255_Example.gif\"><!--<var>x</var><sub>1</sub> = <img src='images/symbol_lfloor.gif' width='6' height='16' alt='&lfloor;' border='0' style='vertical-align:middle;' />(70 + <img src='images/symbol_lceil.gif' width='6' height='16' alt='&lceil;' border='0' style='vertical-align:middle;' />4321&frasl;70<img src='images/symbol_rceil.gif' width='6' height='16' alt='&rceil;' border='0' style='vertical-align:middle;' />)&frasl;2<img src='images/symbol_rfloor.gif' width='6' height='16' alt='&rfloor;' border='0' style='vertical-align:middle;' /> = 66.<br /><var>x</var><sub>2</sub> = <img src='images/symbol_lfloor.gif' width='6' height='16' alt='&lfloor;' border='0' style='vertical-align:middle;' />(66 + <img src='images/symbol_lceil.gif' width='6' height='16' alt='&lceil;' border='0' style='vertical-align:middle;' />4321&frasl;66<img src='images/symbol_rceil.gif' width='6' height='16' alt='&rceil;' border='0' style='vertical-align:middle;' />)&frasl;2<img src='images/symbol_rfloor.gif' width='6' height='16' alt='&rfloor;' border='0' style='vertical-align:middle;' /> = 66.--><br/>Since <var>x</var><sub>2</sub> = <var>x</var><sub>1</sub>, we stop here.<br/>So, after just two iterations, we have found that the rounded-square-root of 4321 is 66 (the actual square root is 65.7343137\u2026).</img></p><p>The number of iterations required when using this method is surprisingly low.<br/>For example, we can find the rounded-square-root of a 5-digit integer (10,000 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 99,999) with an average of 3.2102888889 iterations (the average value was rounded to 10 decimal places).</p><p>Using the procedure described above, what is the average number of iterations required to find the rounded-square-root of a 14-digit number (10<sup>13</sup> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>14</sup>)?<br/>Give your answer rounded to 10 decimal places.</p><p>Note: The symbols <img alt=\"\u230a\" border=\"0\" height=\"16\" src=\"images/symbol_lfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/><var>x</var><img alt=\"\u230b\" border=\"0\" height=\"16\" src=\"images/symbol_rfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/> and <img alt=\"\u2308\" border=\"0\" height=\"16\" src=\"images/symbol_lceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/><var>x</var><img alt=\"\u2309\" border=\"0\" height=\"16\" src=\"images/symbol_rceil.gif\" style=\"vertical-align:middle;\" width=\"6\"/> represent the <dfn title=\"the largest integer not greater than x\">floor function</dfn> and <dfn title=\"the smallest integer not less than x\">ceiling function</dfn> respectively.</p>",
    "folder": "rounded-square-roots",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Rounded Square Roots"
});

db.questions.insert({
    "details": "<p>The RSA encryption is based on the following procedure:</p><p>Generate two distinct primes <var>p</var> and <var>q</var>.<br/>Compute <var>n=pq</var> and \u03c6=(<var>p</var>-1)(<var>q</var>-1).<br/>Find an integer <var>e</var>, 1<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>e</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u03c6, such that gcd(<var>e</var>,\u03c6)=1.</p><p>A message in this system is a number in the interval [0,<var>n</var>-1].<br/>A text to be encrypted is then somehow converted to messages (numbers in the interval [0,<var>n</var>-1]).<br/>To encrypt the text,  for each message, <var>m</var>, <var>c</var>=<var>m</var><sup><var>e</var></sup> mod <var>n</var> is calculated.</p><p>To decrypt the text, the following procedure is needed: calculate <var>d</var> such that <var>ed</var>=1 mod \u03c6, then for each encrypted message, <var>c</var>, calculate <var>m=c<sup>d</sup></var> mod <var>n</var>.</p><p>There exist values of <var>e</var> and <var>m</var>  such that <var>m<sup>e</sup></var> mod <var>n=m</var>.<br/>We call messages <var>m</var> for which <var>m<sup>e</sup></var> mod <var>n=m</var> unconcealed messages.</p><p>An issue when choosing <var>e</var> is that there should not be too many unconcealed messages.  <br/>For instance, let <var>p</var>=19 and <var>q</var>=37.<br/>Then <var>n</var>=19*37=703 and \u03c6=18*36=648.<br/>If we choose <var>e</var>=181, then, although gcd(181,648)=1 it turns out that all possible messages<br/><var>m</var> (0<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>m</var><img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var>-1) are unconcealed when calculating <var>m<sup>e</sup></var> mod <var>n</var>.<br/>For any valid choice of <var>e</var> there exist some unconcealed messages.<br/>It's important that the number of unconcealed messages is at a minimum.</p><p>Choose <var>p</var>=1009 and <var>q</var>=3643.<br/>Find the sum of all values of <var>e</var>, 1<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>e</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u03c6(1009,3643) and gcd(<var>e</var>,\u03c6)=1, so that the number of unconcealed messages for this value of <var>e</var> is at a minimum.</p>",
    "folder": "rsa-encryption",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "RSA encryption"
});

db.questions.insert({
    "details": "<p>Define the sequence a(n) as the number of adjacent pairs of ones in the binary expansion of n (possibly overlapping).<br/>E.g.: a(5) = a(101<sub>2</sub>) = 0, a(6) = a(110<sub>2</sub>) = 1, a(7) = a(111<sub>2</sub>) = 2</p><p>Define the sequence b(n) = (-1)<sup>a(n)</sup>.<br/>This sequence is called the <b>Rudin-Shapiro</b> sequence.</p><p>Also consider the summatory sequence of b(n): <img src=\"project/images/p_384_formula.gif\" style=\"margin-top:-9px;\">.</img></p><p>The first couple of values of these sequences are:<br/><tt>n\u00a0 \u00a0 \u00a0 \u00a0 0 \u00a0 \u00a0 1 \u00a0 \u00a0 2 \u00a0 \u00a0 3 \u00a0 \u00a0 4 \u00a0 \u00a0 5 \u00a0 \u00a0 6 \u00a0 \u00a0 7<br/>a(n) \u00a0 \u00a0 0 \u00a0 \u00a0 0 \u00a0 \u00a0 0 \u00a0 \u00a0 1 \u00a0 \u00a0 0 \u00a0 \u00a0 0 \u00a0 \u00a0 1 \u00a0 \u00a0 2<br/>b(n) \u00a0 \u00a0 1 \u00a0 \u00a0 1 \u00a0 \u00a0 1 \u00a0 \u00a0-1 \u00a0 \u00a0 1 \u00a0 \u00a0 1 \u00a0 \u00a0-1 \u00a0 \u00a0 1<br/>s(n) \u00a0 \u00a0 1 \u00a0 \u00a0 2 \u00a0 \u00a0 3 \u00a0 \u00a0 2 \u00a0 \u00a0 3 \u00a0 \u00a0 4 \u00a0 \u00a0 3 \u00a0 \u00a0 4</tt></p><p>The sequence s(n) has the remarkable property that all elements are positive and every positive integer k occurs exactly k times.</p><p>Define g(t,c), with 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> c <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> t, as the index in s(n) for which t occurs for the c'th time in s(n).<br/>E.g.: g(3,3) = 6, g(4,2) = 7 and g(54321,12345) = 1220847710.</p><p>Let F(n) be the fibonacci sequence defined by:<br/>F(0)=F(1)=1 and<br/>F(n)=F(n-1)+F(n-2) for n&gt;1.</p><p>Define GF(t)=g(F(t),F(t-1)).</p><p>Find \u03a3GF(t) for 2<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>t<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>45.</p>",
    "folder": "rudin-shapiro-sequence",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Rudin-Shapiro sequence"
});

db.questions.insert({
    "details": "<p>Given the positive integers, <i>x</i>, <i>y</i>, and <i>z</i>, are consecutive terms of an arithmetic progression, the least value of the positive integer, <i>n</i>, for which the equation, <i>x</i><sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>y</i><sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>z</i><sup>2</sup> = <i>n</i>, has exactly two solutions is <i>n</i> = 27:</p><p style=\"text-align:center;\">34<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 27<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 20<sup>2</sup> = 12<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 9<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 6<sup>2</sup> = 27</p><p>It turns out that <i>n</i> = 1155 is the least value which has exactly ten solutions.</p><p>How many values of <i>n</i> less than one million have exactly ten distinct solutions?</p>",
    "folder": "same-differences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Same differences"
});

db.questions.insert({
    "details": "<p>Given two points (x<sub>1</sub>,y<sub>1</sub>,z<sub>1</sub>) and (x<sub>2</sub>,y<sub>2</sub>,z<sub>2</sub>) in three dimensional space, the <b>Manhattan distance</b>  between those points is defined as <br/> |x<sub>1</sub>-x<sub>2</sub>|+|y<sub>1</sub>-y<sub>2</sub>|+|z<sub>1</sub>-z<sub>2</sub>|.</p><p>Let C(<var>r</var>) be a sphere with radius <var>r</var> and center in the origin O(0,0,0).<br/>Let I(<var>r</var>) be the set of all points with integer coordinates on the surface of C(<var>r</var>).<br/>Let S(<var>r</var>) be the sum of the Manhattan distances of all elements of I(<var>r</var>) to the origin O.</p><p>E.g. S(45)=34518.</p><p>Find S(10<sup>10</sup>).</p>",
    "folder": "scary-sphere",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Scary Sphere"
});

db.questions.insert({
    "details": "<p>Barbara is a mathematician and a basketball player. She has found that the probability of scoring a point when shooting from a distance <var>x</var> is exactly (1\u2009-\u00a0<sup><var>x</var></sup>/<sub><var>q</var></sub>), where <var>q</var> is a real constant greater than 50.</p><p>During each practice run, she takes shots from distances <var>x</var>\u2009=\u20091, <var>x</var>\u2009=\u20092, ..., <var>x</var>\u2009=\u200950 and, according to her records, she has precisely a 2\u2009% chance to score a total of exactly 20 points.</p><p>Find <var>q</var> and give your answer rounded to 10 decimal places.</p>",
    "folder": "scoring-probabilities",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Scoring probabilities"
});

db.questions.insert({
    "details": "<p>In a triangular array of positive and negative integers, we wish to find a sub-triangle such that the sum of the numbers it contains is the smallest possible.</p><p>In the example below, it can be easily verified that the marked triangle satisfies this condition having a sum of <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>42.</p><div style=\"text-align:center;\"><img alt=\"\" border=\"0\" src=\"http://projecteuler.net/project/images/p_150.gif\"/></div><p>We wish to make such a triangular array with one thousand rows, so we generate 500500 pseudo-random numbers <span style=\"font-style: italic\">s<sub>k</sub></span> in the range <img alt=\"\u00b1\" border=\"0\" height=\"11\" src=\"images/symbol_plusmn.gif\" style=\"vertical-align:middle;\" width=\"11\"/>2<sup>19</sup>, using a type of random number generator (known as a Linear Congruential Generator) as follows:</p><p style=\"margin-left:50px;\"><span style=\"font-style: italic\">t</span> := 0<br/>for k = 1 up to k = 500500:<br/>\u00a0 \u00a0 <span style=\"font-style: italic\">t</span> := (615949*<span style=\"font-style: italic\">t</span> + 797807) modulo 2<sup>20</sup><br/>\u00a0 \u00a0 <span style=\"font-style: italic\">s<sub>k</sub></span> := <span style=\"font-style: italic\">t</span><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2<sup>19</sup></p><p>Thus: <span style=\"font-style: italic\">s<sub>1</sub></span> = 273519, <span style=\"font-style: italic\">s<sub>2</sub></span> = <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>153582, <span style=\"font-style: italic\">s<sub>3</sub></span> = 450905 etc</p><p>Our triangular array is then formed using the pseudo-random numbers thus:</p><div style=\"text-align:center;font-style: italic;\">s<sub>1</sub><br/>s<sub>2</sub>\u00a0 s<sub>3</sub><br/>s<sub>4</sub>\u00a0 s<sub>5</sub>\u00a0 s<sub>6</sub>\u00a0 <br/>s<sub>7</sub>\u00a0 s<sub>8</sub>\u00a0 s<sub>9</sub>\u00a0 s<sub>10</sub><br/>...</div><p>Sub-triangles can start at any element of the array and extend down as far as we like (taking-in the two elements directly below it from the next row, the three elements directly below from the row after that, and so on).<br/>The \"sum of a sub-triangle\" is defined as the sum of all the elements it contains.<br/>Find the smallest possible sub-triangle sum.</p>",
    "folder": "searching-a-triangular-array-f",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Searching a triangular array for a sub-triangle having minimum-sum."
});

db.questions.insert({
    "details": "<p>Looking at the table below, it is easy to verify that the maximum possible sum of adjacent numbers in any direction (horizontal, vertical, diagonal or anti-diagonal) <span style=\"white-space:nowrap\">is 16 (= 8 + 7 + 1).</span></p><div style=\"text-align:center\"><table border=\"1\" cellpadding=\"6\" cellspacing=\"0\" style=\"margin:auto\"><tbody align=\"right\"><tr><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2</td><td>5</td><td>3</td><td>2</td></tr><tr><td>9</td><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>6</td><td>5</td><td>1</td></tr><tr><td>3</td><td>2</td><td>7</td><td>3</td></tr><tr><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</td><td>8</td><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4</td><td>\u00a0 8</td></tr></tbody></table></div><p>Now, let us repeat the search, but on a much larger scale:</p><p>First, generate four million pseudo-random numbers using a specific form of what is known as a \"Lagged Fibonacci Generator\":</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>k</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 55, <i>s</i><sub><i>k</i></sub> = [100003 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 200003<i>k</i> + 300007<i>k</i><sup>3</sup>] (modulo 1000000) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 500000.<br/>For 56 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>k</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4000000, <i>s</i><sub><i>k</i></sub> = [<i>s</i><sub><i>k<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>24</i></sub> + <i>s</i><sub><i>k<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>55</i></sub> + 1000000] (modulo 1000000) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 500000.</p><p>Thus, <i>s</i><sub>10</sub> = <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>393027 and <i>s</i><sub>100</sub> = 86613.</p><p>The terms of <i>s</i> are then arranged in a 2000<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2000 table, using the first 2000 numbers to fill the first row (sequentially), the next 2000 numbers to fill the second row, and so on.</p><p>Finally, find the greatest sum of (any number of) adjacent entries in any direction (horizontal, vertical, diagonal or anti-diagonal).</p>",
    "folder": "searching-for-a-maximum-sum-su",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Searching for a maximum-sum subsequence."
});

db.questions.insert({
    "details": "<style type=\"text/css\">table.p298, table.p298 th, table.p298 td{  border-width: 1px 1px 1px 1px;  border-style: solid solid solid solid;  border-color: black black black black;  text-align:center;  -moz-border-radius: 0px 0px 0px 0px;}table.p298{  border-spacing: 1px;  border-collapse: separate;  background-color: rgb(255,255,255);}table.p298 th, table.p298 td{  padding: 1px 6px 1px 6px;}table.p298 th{ background-color: rgb(200,220,250); }table.p298 td{ background-color: rgb(255,255,255); }</style><p>Larry and Robin play a memory game involving of a sequence of random numbers between 1 and 10, inclusive, that are called out one at a time. Each player can remember up to 5 previous numbers. When the called number is in a player's memory, that player is awarded a point. If it's not, the player adds the called number to his memory, removing another number if his memory is full.</p><p>Both players start with empty memories. Both players always add new missed numbers to their memory but use a different strategy in deciding which number to remove:<br/>Larry's strategy is to remove the number that hasn't been called in the longest time.<br/>Robin's strategy is to remove the number that's been in the memory the longest time.</p><p>Example game:<br/><center><table class=\"p298\"><tr><th>Turn</th><th>Called<br/>number</th><th style=\"text-align:right\">Larry's<br/>memory</th><th>Larry's<br/>score</th><th style=\"text-align:right\">Robin's<br/>memory</th><th>Robin's<br/>score</th></tr><tr><td>1</td><td>1</td><td style=\"text-align:right\">1</td><td>0</td><td style=\"text-align:right\">1</td><td>0</td></tr><tr><td>2</td><td>2</td><td style=\"text-align:right\">1,2</td><td>0</td><td style=\"text-align:right\">1,2</td><td>0</td></tr><tr><td>3</td><td>4</td><td style=\"text-align:right\">1,2,4</td><td>0</td><td style=\"text-align:right\">1,2,4</td><td>0</td></tr><tr><td>4</td><td>6</td><td style=\"text-align:right\">1,2,4,6</td><td>0</td><td style=\"text-align:right\">1,2,4,6</td><td>0</td></tr><tr><td>5</td><td>1</td><td style=\"text-align:right\">1,2,4,6</td><td>1</td><td style=\"text-align:right\">1,2,4,6</td><td>1</td></tr><tr><td>6</td><td>8</td><td style=\"text-align:right\">1,2,4,6,8</td><td>1</td><td style=\"text-align:right\">1,2,4,6,8</td><td>1</td></tr><tr><td>7</td><td>10</td><td style=\"text-align:right\">1,4,6,8,10</td><td>1</td><td style=\"text-align:right\">2,4,6,8,10</td><td>1</td></tr><tr><td>8</td><td>2</td><td style=\"text-align:right\">1,2,6,8,10</td><td>1</td><td style=\"text-align:right\">2,4,6,8,10</td><td>2</td></tr><tr><td>9</td><td>4</td><td style=\"text-align:right\">1,2,4,8,10</td><td>1</td><td style=\"text-align:right\">2,4,6,8,10</td><td>3</td></tr><tr><td>10</td><td>1</td><td style=\"text-align:right\">1,2,4,8,10</td><td>2</td><td style=\"text-align:right\">1,4,6,8,10</td><td>3</td></tr></table></center></p><p>Denoting Larry's score by <var>L</var> and Robin's score by <var>R</var>, what is the expected value of |<var>L</var>-<var>R</var>| after 50 turns? Give your answer rounded to eight decimal places using the format x.xxxxxxxx .</p>",
    "folder": "selective-amnesia",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Selective Amnesia"
});

db.questions.insert({
    "details": "<p>The series, 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 10<sup>10</sup> = 10405071317.</p><p>Find the last ten digits of the series, 1<sup>1</sup> + 2<sup>2</sup> + 3<sup>3</sup> + ... + 1000<sup>1000</sup>.</p>",
    "folder": "self-powers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Self powers"
});

db.questions.insert({
    "details": "<p>For an integer <var>n</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4, we define the <i>lower prime square root</i> of <var>n</var>, denoted by lps(<var>n</var>), as the largest prime <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/><var>n</var> and the <i>upper prime square root</i> of <var>n</var>, ups(<var>n</var>), as the smallest prime <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/><var>n</var>.</p><p>So, for example, lps(4) = 2 = ups(4), lps(1000) = 31, ups(1000) = 37.<br/>Let us call an integer <var>n</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4 <i>semidivisible</i>, if one of lps(<var>n</var>) and ups(<var>n</var>) divides <var>n</var>, but not both.</p><p>The sum of the semidivisible numbers not exceeding 15 is 30, the numbers are 8, 10 and 12.<br/> 15 is not semidivisible because it is a multiple of both lps(15) = 3 and ups(15) = 5.<br/>As a further example, the sum of the 92 semidivisible numbers up to 1000 is 34825.</p><p>What is the sum of all semidivisible numbers not exceeding 999966663333 ?</p>",
    "folder": "semidivisible-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Semidivisible numbers"
});

db.questions.insert({
    "details": "<p>A composite is a number containing at least two prime factors. For example, 15 = 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5; 9 = 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3; 12 = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3.</p><p>There are ten composites below thirty containing precisely two, not necessarily distinct, prime factors:4, 6, 9, 10, 14, 15, 21, 22, 25, 26.</p><p>How many composite integers, <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>8</sup>, have precisely two, not necessarily distinct, prime factors?</p>",
    "folder": "semiprimes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Semiprimes"
});

db.questions.insert({
    "details": "<p>Let H be the hyperbola defined by the equation 12<var>x</var><sup>2</sup> + 7<var>x</var><var>y</var> - 12<var>y</var><sup>2</sup> = 625.</p><p>Next, define X as the point (7, 1). It can be seen that X is in H.</p><p>Now we define a sequence of points in H,{P<sub><var>i</var></sub> : <var>i</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1}, as:<ul><li> P<sub>1</sub> = (13, 61/4).<li> P<sub>2</sub> = (-43/6, -4).<li> For <var>i</var> &gt; 2, P<sub><var>i</var></sub> is the unique point in H that is different from P<sub><var>i</var>-1</sub> and such that line P<sub><var>i</var></sub>P<sub><var>i</var>-1</sub> is parallel to line P<sub><var>i</var>-2</sub>X. It can be shown that P<sub><var>i</var></sub> is well-defined, and that its coordinates are always rational.</li></li></li></ul><img src=\"project/images/p422_hyperbola.gif\"></img></p><p>You are given that P<sub>3</sub>  = (-19/2, -229/24), P<sub>4</sub> = (1267/144, -37/12) and P<sub>7</sub> = (17194218091/143327232, 274748766781/1719926784).</p><p>Find P<sub><var>n</var></sub> for <var>n</var> = 11<sup>14</sup> in the following format:<br>If P<sub><var>n</var></sub> = (<var>a</var>/<var>b</var>, <var>c</var>/<var>d</var>) where the fractions are in lowest terms and the denominators are positive, then the answer is (<var>a</var> + <var>b</var> + <var>c</var> + <var>d</var>) mod 1\u00a0000\u00a0000\u00a0007.</br></p><p>For <var>n</var> = 7, the answer would have been: 806236837.</p>",
    "folder": "sequence-of-points-on-a-hyperb",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sequence of points on a hyperbola"
});

db.questions.insert({
    "details": "<p>One variant of N.G. de Bruijn's <b>silver dollar</b> game can be described as follows:</p><p>On a strip of squares a number of coins are placed, at most one coin per square. Only one coin, called the <b>silver dollar</b>, has any value. Two players take turns making moves. At each turn a player must make either a <i>regular</i> or a <i>special</i> move.</p><p>A <i>regular</i> move consists of selecting one coin and moving it one or more squares to the left. The coin cannot move out of the strip or jump on or over another coin.</p><p>Alternatively, the player can choose to make the <i>special</i> move of pocketing the leftmost coin rather than making a regular move. If no regular moves are possible, the player is forced to pocket the leftmost coin.</p><p>The winner is the player who pockets the silver dollar.</p><div align=\"center\"><img src=\"project/images/p_344_silverdollar.gif\"/><br/></div><p>A <i>winning configuration</i> is an arrangement of coins on the strip where the first player can force a win no matter what the second player does.</p><p>Let W(<var>n</var>,<var>c</var>) be the number of winning configurations for a strip of <var>n</var> squares, <var>c</var> worthless coins and one silver dollar.</p><p>You are given that W(10,2) = 324 and W(100,10) = 1514704946113500.</p><p>Find W(1 000 000, 100) modulo the semiprime 1000 036 000 099 (= 1 000 003 \u00b7 1 000 033).</p>",
    "folder": "silver-dollar-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Silver dollar game"
});

db.questions.insert({
    "details": "<p>The positive integers, <i>x</i>, <i>y</i>, and <i>z</i>, are consecutive terms of an arithmetic progression. Given that <i>n</i> is a positive integer, the equation, <i>x</i><sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>y</i><sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>z</i><sup>2</sup> = <i>n</i>, has exactly one solution when <i>n</i> = 20:</p><p style=\"text-align:center;\">13<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 10<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 7<sup>2</sup> = 20</p><p>In fact there are twenty-five values of <i>n</i> below one hundred for which the equation has a unique solution.</p><p>How many values of <i>n</i> less than fifty million have exactly one solution?</p>",
    "folder": "singleton-difference",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Singleton difference"
});

db.questions.insert({
    "details": "<p>It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.</p><p style=\"margin-left:50px;\"><b>12 cm</b>: (3,4,5)<br/><b>24 cm</b>: (6,8,10)<br/><b>30 cm</b>: (5,12,13)<br/><b>36 cm</b>: (9,12,15)<br/><b>40 cm</b>: (8,15,17)<br/><b>48 cm</b>: (12,16,20)</p><p>In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.</p><p style=\"margin-left:50px;\"><b>120 cm</b>: (30,40,50), (20,48,52), (24,45,51)</p><p>Given that L is the length of the wire, for how many values of L <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1,500,000 can exactly one integer sided right angle triangle be formed?</p>",
    "folder": "singular-integer-right-triangl",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Singular integer right triangles"
});

db.questions.insert({
    "details": "<p>Let <span style=\"font-weight:bold\">A</span> and <span style=\"font-weight:bold\">B</span> be bit strings (sequences of 0's and 1's).<br/>If <span style=\"font-weight:bold\">A</span> is equal to the <span style=\"text-decoration:underline;\">left</span>most length(<span style=\"font-weight:bold\">A</span>) bits of <span style=\"font-weight:bold\">B</span>, then <span style=\"font-weight:bold\">A</span> is said to be a <span style=\"font-style:italic\">prefix</span> of <span style=\"font-weight:bold\">B</span>.<br/>For example, 00110 is a prefix of <span style=\"text-decoration:underline;\">00110</span>1001, but not of 00111 or 100110.</p><p>A <span style=\"font-style:italic\">prefix-free code of size</span> <var>n</var> is a collection of <var>n</var> distinct bit strings such that no string is a prefix of any other.  For example, this is a prefix-free code of size 6:</p><p style=\"text-align:center;\">0000, 0001, 001, 01, 10, 11</p><p>Now suppose that it costs one penny to transmit a '0' bit, but four pence to transmit a '1'.<br/>Then the total cost of the prefix-free code shown above is 35 pence, which happens to be the cheapest possible for the skewed pricing scheme in question.<br/>In short, we write Cost(6) = 35.</p><p>What is Cost(10<sup>9</sup>) ?</p>",
    "folder": "skew-cost-coding",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Skew-cost coding"
});

db.questions.insert({
    "details": "<p>You probably know the game <i>Fifteen Puzzle</i>. Here, instead of numbered tiles, we have seven red tiles and eight blue tiles.</p><p>A move is denoted by the uppercase initial of the direction (Left, Right, Up, Down) in which the tile is slid, e.g. starting from configuration (<b>S</b>), by the sequence <b>LULUR</b> we reach the configuration (<b>E</b>):</p><p><div style=\"text-align: center;\"><table align=\"center\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td width=\"25\">(<b>S</b>)</td><td width=\"100\"><img src=\"project/images/p_244_start.gif\"/></td><td width=\"25\">,\u00a0(<b>E</b>)</td><td width=\"100\"><img src=\"project/images/p_244_example.gif\"/></td></tr></table></div></p><p>For each path, its checksum is calculated by (pseudocode):<div style=\"margin-left: 100px;\">checksum = 0<br/>checksum = (checksum <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 243 + <var>m</var><sub>1</sub>) mod 100\u2009000\u2009007<br/>checksum = (checksum <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 243 + <var>m</var><sub>2</sub>) mod 100\u2009000\u2009007<br/>\u00a0\u00a0\u00a0\u2026<br/>checksum = (checksum <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 243 + <var>m</var><sub><var>n</var></sub>) mod 100\u2009000\u2009007<br/></div>where <var>m</var><sub><var>k</var></sub> is the ASCII value of the <var>k</var><sup><var>th</var></sup> letter in the move sequence and the ASCII values for the moves are:<div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr><td width=\"30\"><b>L</b></td><td width=\"30\">76</td></tr><tr><td><b>R</b></td><td>82</td></tr><tr><td><b>U</b></td><td>85</td></tr><tr><td><b>D</b></td><td>68</td></tr></table></div></p><p>For the sequence <b>LULUR</b> given above, the checksum would be 19761398.</p><p>Now, starting from configuration (<b>S</b>),find all shortest ways to reach configuration (<b>T</b>).</p><p><div style=\"text-align: center;\"><table align=\"center\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td width=\"25\">(<b>S</b>)</td><td width=\"100\"><img src=\"project/images/p_244_start.gif\"/></td><td width=\"25\">,\u00a0(<b>T</b>)</td><td width=\"100\"><img src=\"project/images/p_244_target.gif\"/></td></tr></table></div></p><p>What is the sum of all checksums for the paths having the minimal length?</p>",
    "folder": "sliders",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sliders"
});

db.questions.insert({
    "details": "<p>In a sliding game a counter may slide horizontally or vertically into an empty space. The objective of the game is to move the red counter from the top left corner of a grid to the bottom right corner; the space always starts in the bottom right corner. For example, the following sequence of pictures show how the game can be completed in five moves on a 2 by 2 grid.</p><div align=\"center\"><img src=\"project/images/p_313_sliding_game_1.gif\"/></div><p>Let S(m,n) represent the minimum number of moves to complete the game on an m by n grid. For example, it can be verified that S(5,4) = 25.</p><div align=\"center\"><img src=\"project/images/p_313_sliding_game_2.gif\"/></div><p>There are exactly 5482 grids for which S(m,n) = p<sup>2</sup>, where p <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100 is prime.</p><p>How many grids does S(m,n) = p<sup>2</sup>, where p <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>6</sup> is prime?</p>",
    "folder": "sliding-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sliding game"
});

db.questions.insert({
    "details": "<p>2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.</p><p>What is the smallest positive number that is <dfn title=\"divisible with no remainder\">evenly divisible</dfn> by all of the numbers from 1 to 20?</p>",
    "folder": "smallest-multiple",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Smallest multiple"
});

db.questions.insert({
    "details": "<p>Consider the diophantine equation <sup>1</sup>/<sub><var>a</var></sub>+<sup>1</sup>/<sub><var>b</var></sub>= <sup><var>p</var></sup>/<sub>10<sup><var>n</var></sup></sub> with <var>a, b, p, n</var> positive integers and <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var>.<br/>For <var>n</var>=1 this equation has 20 solutions that are listed below:</p><table><tr><td width=\"120\"><sup>1</sup>/<sub>1</sub>+<sup>1</sup>/<sub>1</sub>=<sup>20</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>1</sub>+<sup>1</sup>/<sub>2</sub>=<sup>15</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>1</sub>+<sup>1</sup>/<sub>5</sub>=<sup>12</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>1</sub>+<sup>1</sup>/<sub>10</sub>=<sup>11</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>2</sub>+<sup>1</sup>/<sub>2</sub>=<sup>10</sup>/<sub>10</sub></td></tr><tr><td width=\"120\"><sup>1</sup>/<sub>2</sub>+<sup>1</sup>/<sub>5</sub>=<sup>7</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>2</sub>+<sup>1</sup>/<sub>10</sub>=<sup>6</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>3</sub>+<sup>1</sup>/<sub>6</sub>=<sup>5</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>3</sub>+<sup>1</sup>/<sub>15</sub>=<sup>4</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>4</sub>+<sup>1</sup>/<sub>4</sub>=<sup>5</sup>/<sub>10</sub></td></tr><tr><td width=\"120\"><sup>1</sup>/<sub>4</sub>+<sup>1</sup>/<sub>20</sub>=<sup>3</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>5</sub>+<sup>1</sup>/<sub>5</sub>=<sup>4</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>5</sub>+<sup>1</sup>/<sub>10</sub>=<sup>3</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>6</sub>+<sup>1</sup>/<sub>30</sub>=<sup>2</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>10</sub>+<sup>1</sup>/<sub>10</sub>=<sup>2</sup>/<sub>10</sub></td></tr><tr><td width=\"120\"><sup>1</sup>/<sub>11</sub>+<sup>1</sup>/<sub>110</sub>=<sup>1</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>12</sub>+<sup>1</sup>/<sub>60</sub>=<sup>1</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>14</sub>+<sup>1</sup>/<sub>35</sub>=<sup>1</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>15</sub>+<sup>1</sup>/<sub>30</sub>=<sup>1</sup>/<sub>10</sub></td><td width=\"120\"><sup>1</sup>/<sub>20</sub>+<sup>1</sup>/<sub>20</sub>=<sup>1</sup>/<sub>10</sub></td></tr></table><p>How many solutions has this equation for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 9?</p>",
    "folder": "solving-the-diophantine-equati",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Solving the diophantine equation 1/a+1/b= p/10n "
});

db.questions.insert({
    "details": "<p>Consider the isosceles triangle with base length, <i>b</i> = 16, and legs, L = 17.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"228\" src=\"project/images/p_138.gif\" width=\"230\"/></div><p>By using the Pythagorean theorem it can be seen that the height of the triangle, <i>h</i> = <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>(17<sup>2</sup> <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 8<sup>2</sup>) = 15, which is one less than the base length.</p><p>With <i>b</i> = 272 and L = 305, we get <i>h</i> = 273, which is one more than the base length, and this is the second smallest isosceles triangle with the property that <i>h</i> = <i>b</i> <img alt=\"\u00b1\" border=\"0\" height=\"11\" src=\"images/symbol_plusmn.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 1.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> L for the twelve smallest isosceles triangles for which <i>h</i> = <i>b</i> <img alt=\"\u00b1\" border=\"0\" height=\"11\" src=\"images/symbol_plusmn.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 1 and <i>b</i>, L are positive integers.</p>",
    "folder": "special-isosceles-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Special isosceles triangles"
});

db.questions.insert({
    "details": "<p>All positive integers can be partitioned in such a way that each and every term of the partition can be expressed as 2<sup>i</sup>x3<sup>j</sup>, where i,j <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0.</p><p>Let's consider only those such partitions where none of the terms can divide any of the other terms.<br>For example, the partition of 17 = 2 + 6 + 9 = (2<sup>1</sup>x3<sup>0</sup> + 2<sup>1</sup>x3<sup>1</sup> + 2<sup>0</sup>x3<sup>2</sup>) would not be valid since 2 can divide 6. Neither would the partition 17 = 16 + 1 = (2<sup>4</sup>x3<sup>0</sup> + 2<sup>0</sup>x3<sup>0</sup>) since 1 can divide 16. The only valid partition of 17 would be 8 + 9 = (2<sup>3</sup>x3<sup>0</sup> + 2<sup>0</sup>x3<sup>2</sup>).</br></p><p>Many integers have more than one valid partition, the first being 11 having the following two partitions.<br>11 = 2 + 9 = (2<sup>1</sup>x3<sup>0</sup> + 2<sup>0</sup>x3<sup>2</sup>)<br>11 = 8 + 3 = (2<sup>3</sup>x3<sup>0</sup> + 2<sup>0</sup>x3<sup>1</sup>)</br></br></p><p>Let's define P(<var>n</var>) as the number of valid partitions of <var>n</var>. For example, P(11) = 2.</p><p>Let's consider only the prime integers <var>q</var> which would have a single valid partition such as P(17).</p><p>The sum of the primes <var>q</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>100 such that P(<var>q</var>)=1 equals 233.</p><p>Find the sum of the primes <var>q</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>1000000 such that P(<var>q</var>)=1.</p>",
    "folder": "special-partitions",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Special partitions"
});

db.questions.insert({
    "details": "<p>A Pythagorean triplet is a set of three natural numbers, <var>a</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>c</var>, for which,</p><div style=\"text-align:center;\"> <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup></div><p>For example, 3<sup>2</sup> + 4<sup>2</sup> = 9 + 16 = 25 = 5<sup>2</sup>.</p><p>There exists exactly one Pythagorean triplet for which <var>a</var> + <var>b</var> + <var>c</var> = 1000.<br/>Find the product <var>abc</var>.</p>",
    "folder": "special-pythagorean-triplet",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Special Pythagorean triplet"
});

db.questions.insert({
    "details": "<p>Let S(A) represent the sum of elements in set A of size <i>n</i>. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:</p><ol style=\"list-style-type:lower-roman;\"><li>S(B) <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> S(C); that is, sums of subsets cannot be equal.</li><li>If B contains more elements than C then S(B) <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> S(C).</li></ol><p>For this problem we shall assume that a given set contains <i>n</i> strictly increasing elements and it already satisfies the second rule.</p><p>Surprisingly, out of the 25 possible subset pairs that can be obtained from a set for which <i>n</i> = 4, only 1 of these pairs need to be tested for equality (first rule). Similarly, when <i>n</i> = 7, only 70 out of the 966 subset pairs need to be tested.</p><p>For <i>n</i> = 12, how many of the 261625 subset pairs that can be obtained need to be tested for equality?</p><p class=\"info\">NOTE: This problem is related to problems <a href=\"index.php?section=problems&amp;id=103\">103</a> and <a href=\"index.php?section=problems&amp;id=105\">105</a>.</p>",
    "folder": "special-subset-sums-meta-testi",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Special subset sums: meta-testing"
});

db.questions.insert({
    "details": "<p>Let S(A) represent the sum of elements in set A of size <i>n</i>. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:</p><ol style=\"list-style-type:lower-roman;\"><li>S(B) <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> S(C); that is, sums of subsets cannot be equal.</li><li>If B contains more elements than C then S(B) <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> S(C).</li></ol><p>If S(A) is minimised for a given <i>n</i>, we shall call it an optimum special sum set. The first five optimum special sum sets are given below.</p><p style=\"margin-left:50px;\"><i>n</i> = 1:{1}<br/><i>n</i> = 2:{1, 2}<br/><i>n</i> = 3:{2, 3, 4}<br/><i>n</i> = 4:{3, 5, 6, 7}<br/><i>n</i> = 5:{6, 9, 11, 12, 13}</p><p>It <i>seems</i> that for a given optimum set, A ={<i>a</i><sub>1</sub>, <i>a</i><sub>2</sub>, ... , <i>a</i><sub>n</sub>}, the next optimum set is of the form B ={<i>b</i>, <i>a</i><sub>1</sub>+<i>b</i>, <i>a</i><sub>2</sub>+<i>b</i>, ... ,<i>a</i><sub>n</sub>+<i>b</i>}, where <i>b</i> is the \"middle\" element on the previous row.</p><p>By applying this \"rule\" we would expect the optimum set for <i>n</i> = 6 to be A ={11, 17, 20, 22, 23, 24}, with S(A) = 117. However, this is not the optimum set, as we have merely applied an algorithm to provide a near optimum set. The optimum set for <i>n</i> = 6 is A ={11, 18, 19, 20, 22, 25}, with S(A) = 115 and corresponding set string: 111819202225.</p><p>Given that A is an optimum special sum set for <i>n</i> = 7, find its set string.</p><p class=\"info\">NOTE: This problem is related to problems <a href=\"index.php?section=problems&amp;id=105\">105</a> and <a href=\"index.php?section=problems&amp;id=106\">106</a>.</p>",
    "folder": "special-subset-sums-optimum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Special subset sums: optimum"
});

db.questions.insert({
    "details": "<p>Let S(A) represent the sum of elements in set A of size <i>n</i>. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:</p><ol style=\"list-style-type:lower-roman;\"><li>S(B) <img alt=\"\u2260\" border=\"0\" height=\"10\" src=\"images/symbol_ne.gif\" style=\"vertical-align:middle;\" width=\"11\"/> S(C); that is, sums of subsets cannot be equal.</li><li>If B contains more elements than C then S(B) <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> S(C).</li></ol><p>For example,{81, 88, 75, 42, 87, 84, 86, 65} is not a special sum set because 65 + 87 + 88 = 75 + 81 + 84, whereas{157, 150, 164, 119, 79, 159, 161, 139, 158} satisfies both rules for all possible subset pair combinations and S(A) = 1286.</p><p>Using <a href=\"project/sets.txt\">sets.txt</a> (right click and \"Save Link/Target As...\"), a 4K text file with one-hundred sets containing seven to twelve elements (the two examples given above are the first two sets in the file), identify all the special sum sets, A<sub>1</sub>, A<sub>2</sub>, ..., A<sub><i>k</i></sub>, and find the value of S(A<sub>1</sub>) + S(A<sub>2</sub>) + ... + S(A<sub><i>k</i></sub>).</p><p class=\"info\">NOTE: This problem is related to problems <a href=\"index.php?section=problems&amp;id=103\">103</a> and <a href=\"index.php?section=problems&amp;id=106\">106</a>.</p>",
    "folder": "special-subset-sums-testing",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Special subset sums: testing"
});

db.questions.insert({
    "details": "<p>What is the length of the shortest pipe, of internal radius 50mm, that can fully contain 21 balls of radii 30mm, 31mm, ..., 50mm?</p><p>Give your answer in micrometres (10<sup>-6</sup> m) rounded to the nearest integer.</p>",
    "folder": "sphere-packing",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sphere Packing"
});

db.questions.insert({
    "details": "<p>A <b>spherical triangle</b> is a figure formed on the surface of a sphere by three <b>great circular arcs</b> intersecting pairwise in three vertices.</p><div align=\"center\"><img src=\"project/images/p_332_spherical.jpg\"/></div><p>Let C(<var>r</var>) be the sphere with the centre (0,0,0) and radius <var>r</var>.<br/>Let Z(<var>r</var>) be the set of points on the surface of C(<var>r</var>) with integer coordinates.<br/>Let T(<var>r</var>) be the set of spherical triangles with vertices in Z(<var>r</var>).Degenerate spherical triangles, formed by three points on the same great arc, are <u>not</u> included in T(<var>r</var>).<br/>Let A(<var>r</var>) be the area of the smallest spherical triangle in T(<var>r</var>).</p><p>For example A(14) is 3.294040 rounded to six decimal places.</p><p>Find <img src=\"project/images/p_332_sum.gif\" style=\"vertical-align:middle\"/> A(<var>r</var>). Give your answer rounded to six decimal places.</p>",
    "folder": "spherical-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Spherical triangles"
});

db.questions.insert({
    "details": "<p>In Plato's heaven, there exist an infinite number of bowls in a straight line.<br/>Each bowl either contains some or none of a finite number of beans.<br/>A child plays a game, which allows only one kind of move: removing two beans from any bowl, and putting one in each of the two adjacent bowls.<br/> The game ends when each bowl contains either one or no beans.</p><p>For example, consider two adjacent bowls containing 2 and 3 beans respectively, all other bowls being empty. The following eight moves will finish the game:</p><div align=\"center\"><img src=\"project/images/p_334_beans.gif\"/></div><p>You are given the following sequences:<br/><table class=\"formula\" style=\"margin-left:50px;\"><tr><td><var>t</var><sub><i>0</i></sub> = 123456.   </td></tr></table><table class=\"formula\" style=\"margin-left:50px;\"><tr><td><var>t</var><sub><i>i</i></sub> =    </td><td><img src=\"project/images/p_334_cases.gif\"/></td><td><table class=\"formula\"><tr><td></td><td><table class=\"frac\"><tr><td><var>t</var><sub><i>i-1</i></sub></td></tr><tr><td class=\"overline\">2</td></tr></table></td><td>         ,      </td><td></td><td>         if <var>t</var><sub><i>i-1</i></sub> is even      </td></tr><tr><td><img src=\"project/images/p_334_lfloor.gif\"/></td><td><table class=\"frac\"><tr><td><var>t</var><sub><i>i-1</i></sub></td></tr><tr><td class=\"overline\">2</td></tr></table></td><td><img src=\"project/images/p_334_rfloor.gif\"/></td><td>         926252,       </td><td>         if <var>t</var><sub><i>i-1</i></sub> is odd      </td></tr></table><td></td></td></tr><tr><td></td><td></td><td>      where <img alt=\"\u230a\" border=\"0\" height=\"16\" src=\"images/symbol_lfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/><var>x</var><img alt=\"\u230b\" border=\"0\" height=\"16\" src=\"images/symbol_rfloor.gif\" style=\"vertical-align:middle;\" width=\"6\"/> is the floor function   </td></tr><tr><td></td><td></td><td>      and <img src=\"project/images/p_334_oplus.gif\"/> is the bitwise XOR operator.   </td></tr></table><table class=\"formula\" style=\"margin-left:50px;\"><tr><td><var>b</var><sub><i>i</i></sub> = ( <var>t</var><sub><i>i</i></sub> mod 2<sup>11</sup>) + 1.   </td></tr></table></p><p>The first two terms of the last sequence are <var>b</var><sub><i>1</i></sub> = 289 and <var>b</var><sub><i>2</i></sub> = 145.<br/>If we start with <var>b</var><sub><i>1</i></sub> and <var>b</var><sub><i>2</i></sub> beans in two adjacent bowls, 3419100 moves would be required to finish the game.</p><p>Consider now 1500 adjacent bowls containing <var>b</var><sub><i>1</i></sub>, <var>b</var><sub><i>2</i></sub>,..., <var>b</var><sub><i>1500</i></sub> beans respectively, all other bowls being empty. Find how many moves it takes before the game ends.</p>",
    "folder": "spilling-the-beans",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Spilling the beans"
});

db.questions.insert({
    "details": "<p>Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.</p><p style=\"text-align:center;font-family:courier new;\"><span style=\"color:#ff0000;font-family:courier new;\"><b>37</b></span> 36 35 34 33 32 <span style=\"color:#ff0000;font-family:courier new;\"><b>31</b></span><br/>38 <span style=\"color:#ff0000;font-family:courier new;\"><b>17</b></span> 16 15 14 <span style=\"color:#ff0000;font-family:courier new;\"><b>13</b></span> 30<br/>39 18 <span style=\"color:#ff0000;font-family:courier new;\">\u00a0<b>5</b></span> \u00a04 <span style=\"color:#ff0000;font-family:courier new;\">\u00a0<b>3</b></span> 12 29<br/>40 19 \u00a06 \u00a01 \u00a02 11 28<br/>41 20 <span style=\"color:#ff0000;font-family:courier new;\">\u00a0<b>7</b></span> \u00a08 \u00a09 10 27<br/>42 21 22 23 24 25 26<br/><span style=\"color:#ff0000;font-family:courier new;\"><b>43</b></span> 44 45 46 47 48 49</p><p>It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 <img alt=\"\u2248\" border=\"0\" height=\"9\" src=\"images/symbol_asymp.gif\" style=\"vertical-align:middle;\" width=\"11\"/> 62%.</p><p>If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?</p>",
    "folder": "spiral-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Spiral primes"
});

db.questions.insert({
    "details": "<p>A number chain is created by continuously adding the square of the digits in a number to form a new number until it has been seen before.</p><p>For example,</p><p style=\"margin-left:50px;\">44 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 32 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 13 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 10 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> <b>1</b> <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> <b>1</b><br/>85 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> <b>89</b> <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 145 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 42 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 20 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 4 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 16 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 37 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> 58 <img alt=\"\u2192\" border=\"0\" height=\"7\" src=\"images/symbol_maps.gif\" style=\"vertical-align:middle;\" width=\"15\"/> <b>89</b></p><p>Therefore any chain that arrives at 1 or 89 will become stuck in an endless loop. What is most amazing is that EVERY starting number will eventually arrive at 1 or 89.</p><p>How many starting numbers below ten million will arrive at 89?</p>",
    "folder": "square-digit-chains",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Square digit chains"
});

db.questions.insert({
    "details": "<p>Let <i>r</i> be the remainder when (<i>a</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)<sup><i>n</i></sup> + (<i>a</i>+1)<sup><i>n</i></sup> is divided by <i>a</i><sup>2</sup>.</p><p>For example, if <i>a</i> = 7 and <i>n</i> = 3, then <i>r</i> = 42: 6<sup>3</sup> + 8<sup>3</sup> = 728 <img alt=\"\u2261\" border=\"0\" height=\"11\" src=\"images/symbol_cong.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 42 mod 49. And as <i>n</i> varies, so too will <i>r</i>, but for <i>a</i> = 7 it turns out that <i>r</i><sub>max</sub> = 42.</p><p>For 3 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>a</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000, find <span style=\"font-family:times new roman;font-size:13pt;\"><img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/></span> <i>r</i><sub>max</sub>.</p>",
    "folder": "square-remainders",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Square remainders"
});

db.questions.insert({
    "details": "<p>It is possible to show that the square root of two can be expressed as an infinite continued fraction.</p><p style=\"text-align:center;\"><img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/> 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...</p><p>By expanding this for the first four iterations, we get:</p><p>1 + 1/2 = 3/2 = 1.5<br/>1 + 1/(2 + 1/2) = 7/5 = 1.4<br/>1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...<br/>1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...<br/></p><p>The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.</p><p>In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?</p>",
    "folder": "square-root-convergents",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Square root convergents"
});

db.questions.insert({
    "details": "<p>It is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.</p><p>The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.</p><p>For the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.</p>",
    "folder": "square-root-digital-expansion",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Square root digital expansion"
});

db.questions.insert({
    "details": "<p>Fred the farmer arranges to have a new storage silo installed on his farm and having an obsession for all things square he is absolutely devastated when he discovers that it is circular. Quentin, the representative from the company that installed the silo, explains that they only manufacture cylindrical silos, but he points out that it is resting on a square base. Fred is not amused and insists that it is removed from his property.</p><p>Quick thinking Quentin explains that when granular materials are delivered from above a conical slope is formed and the natural angle made with the horizontal is called the angle of repose. For example if the angle of repose, $\\alpha = 30$ degrees, and grain is delivered at the centre of the silo then a perfect cone will form towards the top of the cylinder. In the case of this silo, which has a diameter of 6m, the amount of space wasted would be approximately 32.648388556 m<sup>3</sup>. However, if grain is delivered at a point on the top which has a horizontal distance of $x$ metres from the centre then a cone with a strangely curved and sloping base is formed. He shows Fred a picture.</p><div style=\"text-align:center;\"><img src=\"project/images/p_431_grain_silo.png\"/></div><p>We shall let the amount of space wasted in cubic metres be given by $V(x)$. If $x = 1.114785284$, which happens to have three squared decimal places, then the amount of space wasted, $V(1.114785284) \\approx 36$. Given the range of possible solutions to this problem there is exactly one other option: $V(2.511167869) \\approx 49$. It would be like knowing that the square is king of the silo, sitting in splendid glory on top of your grain.</p><p>Fred's eyes light up with delight at this elegant resolution, but on closer inspection of Quentin's drawings and calculations his happiness turns to despondency once more. Fred points out to Quentin that it's the radius of the silo that is 6 metres, not the diameter, and the angle of repose for his grain is 40 degrees. However, if Quentin can find a set of solutions for this particular silo then he will be more than happy to keep it.</p><p>If Quick thinking Quentin is to satisfy frustratingly fussy Fred the farmer's appetite for all things square then determine the values of $x$ for all possible square space wastage options and calculate $\\sum x$ correct to 9 decimal places.</p>",
    "folder": "square-space-silo",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Square Space Silo"
});

db.questions.insert({
    "details": "<p>The binomial coefficients <sup>n</sup>C<sub>k</sub> can be arranged in triangular form, Pascal's triangle, like this:</p><div style=\"text-align:center;\"><table align=\"center\"><tr><td colspan=\"7\"></td><td>1</td><td colspan=\"7\"></td></tr><tr><td colspan=\"6\"></td><td>1</td><td></td><td>1</td><td colspan=\"6\"></td></tr><tr><td colspan=\"5\"></td><td>1</td><td></td><td>2</td><td></td><td>1</td><td colspan=\"5\"></td></tr><tr><td colspan=\"4\"></td><td>1</td><td></td><td>3</td><td></td><td>3</td><td></td><td>1</td><td colspan=\"4\"></td></tr><tr><td colspan=\"3\"></td><td>1</td><td></td><td>4</td><td></td><td>6</td><td></td><td>4</td><td></td><td>1</td><td colspan=\"3\"></td></tr><tr><td colspan=\"2\"></td><td>1</td><td></td><td>5</td><td></td><td>10</td><td></td><td>10</td><td></td><td>5</td><td></td><td>1</td><td colspan=\"2\"></td></tr><tr><td colspan=\"1\"></td><td>1</td><td></td><td>6</td><td></td><td>15</td><td></td><td>20</td><td></td><td>15</td><td></td><td>6</td><td></td><td>1</td><td colspan=\"1\"></td></tr><tr><td>1</td><td></td><td>7</td><td></td><td>21</td><td></td><td>35</td><td></td><td>35</td><td></td><td>21</td><td></td><td>7</td><td></td><td>1</td></tr></table>.........</div><p>It can be seen that the first eight rows of Pascal's triangle contain twelve distinct numbers: 1,\u00a02,\u00a03,\u00a04,\u00a05,\u00a06,\u00a07,\u00a010,\u00a015,\u00a020,\u00a021\u00a0and\u00a035.</p><p>A positive integer <var>n</var> is called squarefree if no square of a prime divides <var>n</var>.Of the twelve distinct numbers in the first eight rows of Pascal's triangle, all except 4 and 20 are squarefree.The sum of the distinct squarefree numbers in the first eight rows is 105.</p><p>Find the sum of the distinct squarefree numbers in the first 51 rows of Pascal's triangle.</p>",
    "folder": "squarefree-binomial-coefficien",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Squarefree Binomial Coefficients"
});

db.questions.insert({
    "details": "<p>Consider the number 54.<br/>54 can be factored in 7 distinct ways into one or more factors larger than 1:<br/>54, 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>27, 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>18, 6<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>9, 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>6, 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>9 and 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3.<br/>If we require that the factors are all squarefree only two ways remain: 3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>6 and 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>3.</p><p>Let's call Fsf(<var>n</var>) the number of ways <var>n</var> can be factored into one or more squarefree factors larger than 1, soFsf(54)=2.</p><p>Let S(<var>n</var>) be <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>Fsf(<var>k</var>) for <var>k</var>=2 to <var>n</var>.</p><p>S(100)=193.</p><p>Find S(10 000 000 000). </p>",
    "folder": "squarefree-factors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Squarefree factors"
});

db.questions.insert({
    "details": "<p>The first 15 fibonacci numbers are:<br/>1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.<br/>It can be seen that 8 and 144 are not squarefree: 8 is divisible by 4 and 144 is divisible by 4 and by 9.<br/> So the first 13 squarefree fibonacci numbers are:<br/>1,1,2,3,5,13,21,34,55,89,233,377 and 610.</p><p>The 200th squarefree fibonacci number is:971183874599339129547649988289594072811608739584170445.<br/>The last sixteen digits of this number are: 1608739584170445 and in scientific notation this number can be written as 9.7e53.</p><p>Find the 100 000 000th squarefree fibonacci number.<br/>Give as your answer its last sixteen digits followed by a comma followed by the number in scientific notation (rounded to one digit after the decimal point).<br/>For the 200th squarefree number the answer would have been: 1608739584170445,9.7e53</p><p><font size=\"-1\">Note:<br/> For this problem, assume that for every prime p, the first fibonacci number divisible by p is not divisible by p<sup>2</sup> (this is part of <b>Wall's conjecture</b>). This has been verified for primes <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 3\u00b710<sup>15</sup>, but has not been proven in general.<br/>If it happens that the conjecture is false, then the accepted answer to this problem isn't guaranteed to be the 100 000 000th squarefree fibonacci number, rather it represents only a lower bound for that number.</font></p>",
    "folder": "squarefree-fibonacci-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Squarefree Fibonacci Numbers"
});

db.questions.insert({
    "details": "<p>A positive integer <var>n</var> is called squarefree, if no square of a prime divides <var>n</var>, thus 1, 2, 3, 5, 6, 7, 10, 11 are squarefree, but not 4, 8, 9, 12.</p><p>How many squarefree numbers are there below 2<sup>50</sup>?</p>",
    "folder": "squarefree-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Squarefree Numbers"
});

db.questions.insert({
    "details": "<p>Consider the region constrained by 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x</var> and 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>y</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <sup>1</sup>/<sub><var>x</var></sub>.</p><p>Let S<sub>1</sub> be the largest square that can fit under the curve.<br/>Let S<sub>2</sub> be the largest square that fits in the remaining area, and so on. <br/>Let the <i>index</i> of S<sub><var>n</var></sub> be the pair (left, below) indicating the number of squares to the left of S<sub><var>n</var></sub> and the number of squares below S<sub><var>n</var></sub>.</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_247_hypersquares.gif\"/></div><p>The diagram shows some such squares labelled by number. <br/>S<sub>2</sub> has one square to its left and none below, so the index of S<sub>2</sub> is (1,0).<br/>It can be seen that the index of S<sub>32</sub> is (1,1) as is the index of S<sub>50</sub>. <br/>50 is the largest <var>n</var> for which the index of S<sub><var>n</var></sub> is (1,1).</p><p>What is the largest <var>n</var> for which the index of S<sub><var>n</var></sub> is (3,3)?</p>",
    "folder": "squares-under-a-hyperbola",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Squares under a hyperbola"
});

db.questions.insert({
    "details": "<p>The 3-digit number 376 in the decimal numbering system is an example of numbers with the special property that its square ends with the same digits: 376<sup>2</sup> = 141376. Let's call a number with this property a steady square.</p><p>Steady squares can also be observed in other numbering systems. In the base 14 numbering system, the 3-digit number c37 is also a steady square: c37<sup>2</sup> = aa0c37, and the sum of its digits is c+3+7=18 in the same numbering system. The letters a, b, c and d are used for the 10, 11, 12 and 13 digits respectively, in a manner similar to the hexadecimal numbering system.</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 9, the sum of the digits of all the n-digit steady squares in the base 14 numbering system is 2d8 (582 decimal). Steady squares with leading 0's are not allowed.</p><p>Find the sum of the digits of all the n-digit steady squares in the base 14 numbering system for<br>1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10000 (decimal) and give your answer in the base 14 system using lower case letters where necessary.</br></p>",
    "folder": "steady-squares",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Steady Squares"
});

db.questions.insert({
    "details": "Consider the number 45656. <br/>It can be seen that each pair of consecutive digits of 45656 has a difference of one.<br/>A number for which every pair of consecutive digits has a difference of one is called a step number.<br/>A pandigital number  contains every decimal digit from 0 to 9 at least once.<br/>How many pandigital step numbers less than 10<sup>40</sup> are there?",
    "folder": "step-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Step Numbers"
});

db.questions.insert({
    "details": "<p>Let E(<var>x</var><sub>0</sub>, <var>y</var><sub>0</sub>) be the number of steps it takes to determine the greatest common divisor of <var>x</var><sub>0</sub> and <var>y</var><sub>0</sub> with <b>Euclid's algorithm</b>. More formally:<br/><var>x</var><sub>1</sub> = <var>y</var><sub>0</sub>, <var>y</var><sub>1</sub> = <var>x</var><sub>0</sub> mod <var>y</var><sub>0</sub><br/><var>x<sub>n</sub></var> = <var>y</var><sub><var>n</var>-1</sub>, <var>y</var><sub><var>n</var></sub> = <var>x</var><sub><var>n</var>-1</sub> mod <var>y</var><sub><var>n</var>-1</sub><br/>E(<var>x</var><sub>0</sub>, <var>y</var><sub>0</sub>) is the smallest <var>n</var> such that <var>y</var><sub><var>n</var></sub> = 0.</p><p>We have E(1,1) = 1, E(10,6) = 3 and E(6,10) = 4.</p><p>Define S(N) as the sum of E(<var>x,y</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x,y</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> N.<br/>We have S(1) = 1, S(10) = 221 and S(100) = 39826.</p><p>Find S(5\u00b710<sup>6</sup>).</p>",
    "folder": "steps-in-euclids-algorithm",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Steps in Euclid's algorithm"
});

db.questions.insert({
    "details": "<p>A game is played with two piles of stones and two players. At her turn, a player removes a number of stones from the larger pile. The number of stones she removes must be a positive multiple of the number of stones in the smaller pile.</p><p>E.g., let the ordered pair(6,14) describe a configuration with 6 stones in the smaller pile and 14 stones in the larger pile, then the first player can remove 6 or 12 stones from the larger pile.</p><p>The player taking all the stones from a pile wins the game.</p><p>A <i>winning configuration</i> is one where the first player can force a win. For example, (1,5), (2,6) and (3,12) are winning configurations because the first player can immediately remove all stones in the second pile.</p><p>A <i>losing configuration</i> is one where the second player can force a win, no matter what the first player does. For example, (2,3) and (3,4) are losing configurations: any legal move leaves a winning configuration for the second player.</p><p>Define S(<var>N</var>) as the sum of (<var>x</var><sub><var>i</var></sub>+<var>y</var><sub><var>i</var></sub>) for all losing configurations (<var>x</var><sub><var>i</var></sub>,<var>y</var><sub><var>i</var></sub>), 0 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x</var><sub><var>i</var></sub> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>y</var><sub><var>i</var></sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>. We can verify that S(10) = 211 and S(10<sup>4</sup>) = 230312207313.</p><p>Find S(10<sup>16</sup>) mod 7<sup>10</sup>.</p>",
    "folder": "stone-game-ii",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Stone Game II"
});

db.questions.insert({
    "details": "<p>Two players, Anton and Bernhard, are playing the following game.<br/>There is one pile of n stones.<br/>The first player may remove any positive number of stones, but not the whole pile.<br/>Thereafter, each player may remove at most twice the number of stones his opponent took on the previous move.<br/>The player who removes the last stone wins.</p><p>E.g. n=5<br/>If the first player takes anything more than one stone the next player will be able to take all remaining stones.<br/>If the first player takes one stone, leaving four, his opponent will take also one stone, leaving three stones.<br/>The first player cannot take all three because he may take at most 2x1=2 stones. So let's say he takes also one stone, leaving 2. The second player can take the two remaining stones and wins.<br/>So 5 is a losing position for the first player.<br/>For some winning positions there is more than one possible move for the first player.<br/>E.g. when n=17 the first player can remove one or four stones.</p><p>Let M(n) be the maximum number of stones the first player can take from a winning position <i>at his first turn</i> and M(n)=0 for any other position.</p><p><img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>M(n) for n<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>100 is 728.</p><p>Find  <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>M(n) for n<img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/>10<sup>18</sup>.Give your answer modulo 10<sup>8</sup>.</p>",
    "folder": "stone-game-iii",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Stone Game III"
});

db.questions.insert({
    "details": "<p>A game is played with three piles of stones and two players.<br>At her turn, a player removes one or more stones from the piles. However, if she takes stones from more than one pile, she must remove the same number of stones from each of the selected piles.</br></p><p>In other words, the player chooses some N&gt;0 and removes:<ul><li>N stones from any single pile; or</li><li>N stones from each of any two piles (2N total); or</li><li>N stones from each of the three piles (3N total).</li></ul>The player taking the last stone(s) wins the game.</p><p>A <i>winning configuration</i> is one where the first player can force a win.<br>For example, (0,0,13), (0,11,11) and (5,5,5) are winning configurations because the first player can immediately remove all stones.</br></p><p>A <i>losing configuration</i> is one where the second player can force a win, no matter what the first player does.<br> For example, (0,1,2) and (1,3,3) are losing configurations: any legal move leaves a winning configuration for the second player.</br></p><p>Consider all  losing configurations (x<sub>i</sub>,y<sub>i</sub>,z<sub>i</sub>) where x<sub>i</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> y<sub>i</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> z<sub>i</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 100.<br>We can verify that \u03a3(x<sub>i</sub>+y<sub>i</sub>+z<sub>i</sub>) = 173895 for these.</br></p><p>Find \u03a3(x<sub>i</sub>+y<sub>i</sub>+z<sub>i</sub>) where (x<sub>i</sub>,y<sub>i</sub>,z<sub>i</sub>) ranges over the losing configurations<br>with x<sub>i</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> y<sub>i</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> z<sub>i</sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000.</br></p>",
    "folder": "stone-game",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Stone Game"
});

db.questions.insert({
    "details": "<p>A positive integer <var>n</var> is <b>powerful</b> if p<sup>2</sup> is a divisor of <var>n</var> for every prime factor p in <var>n</var>.</p><p>A positive integer <var>n</var> is a <b>perfect power</b> if <var>n</var> can be expressed as a power of another positive integer.</p><p>A positive integer <var>n</var> is an <b>Achilles number</b> if <var>n</var> is powerful but not a perfect power. For example, 864 and 1800 are Achilles numbers: 864 = 2<sup>5</sup>\u00b73<sup>3</sup> and 1800 = 2<sup>3</sup>\u00b73<sup>2</sup>\u00b75<sup>2</sup>.</p><p>We shall call a positive integer <var>S</var> a <i>Strong Achilles number</i> if both <var>S</var> and \u03c6(<var>S</var>) are Achilles numbers.<sup>1</sup><br/>For example, 864 is a Strong Achilles number: \u03c6(864) = 288 = 2<sup>5</sup>\u00b73<sup>2</sup>. However, 1800 isn't a Strong Achilles number because: \u03c6(1800) = 480 = 2<sup>5</sup>\u00b73<sup>1</sup>\u00b75<sup>1</sup>.</p><p>There are 7 Strong Achilles numbers below 10<sup>4</sup> and 656 below 10<sup>8</sup>.</p><p>How many Strong Achilles numbers are there below 10<sup>18</sup>?</p><p><sup>1</sup> \u03c6 denotes <b>Euler's totient function</b>.</p>",
    "folder": "strong-achilles-numbers",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Strong Achilles Numbers"
});

db.questions.insert({
    "details": "<p>The number 7 is special, because 7 is 111 written in base 2, and 11 written in base 6 <br/>(i.e. 7<sub>10</sub> = 11<sub>6</sub> = 111<sub>2</sub>). In other words, 7 is a repunit in at least two bases b &gt; 1. </p><p>We shall call a positive integer with this property a strong repunit. It can be verified that there are 8 strong repunits below 50: {1,7,13,15,21,31,40,43}. <br/>Furthermore, the sum of all strong repunits below 1000 equals 15864.</p>Find the sum of all strong repunits below 10<sup>12</sup>.",
    "folder": "strong-repunits",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Strong Repunits"
});

db.questions.insert({
    "details": "<p>Su Doku (Japanese meaning <i>number place</i>) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle grid and its solution grid.</p><div style=\"text-align:center;\"><table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr><td><table border=\"1\" cellpadding=\"5\" cellspacing=\"0\"><tr><td style=\"font-family:courier new;font-size:14pt;\">0 0 3<br/>9 0 0<br/>0 0 1</td><td style=\"font-family:courier new;font-size:14pt;\">0 2 0<br/>3 0 5<br/>8 0 6</td><td style=\"font-family:courier new;font-size:14pt;\">6 0 0<br/>0 0 1<br/>4 0 0</td></tr><tr><td style=\"font-family:courier new;font-size:14pt;\">0 0 8<br/>7 0 0<br/>0 0 6</td><td style=\"font-family:courier new;font-size:14pt;\">1 0 2<br/>0 0 0<br/>7 0 8</td><td style=\"font-family:courier new;font-size:14pt;\">9 0 0<br/>0 0 8<br/>2 0 0</td></tr><tr><td style=\"font-family:courier new;font-size:14pt;\">0 0 2<br/>8 0 0<br/>0 0 5</td><td style=\"font-family:courier new;font-size:14pt;\">6 0 9<br/>2 0 3<br/>0 1 0</td><td style=\"font-family:courier new;font-size:14pt;\">5 0 0<br/>0 0 9<br/>3 0 0</td></tr></table></td><td width=\"50\"><img alt=\"\" height=\"1\" src=\"images/spacer.gif\" width=\"50\"/><br/></td><td><table border=\"1\" cellpadding=\"5\" cellspacing=\"0\"><tr><td style=\"font-family:courier new;font-size:14pt;\">4 8 3<br/>9 6 7<br/>2 5 1</td><td style=\"font-family:courier new;font-size:14pt;\">9 2 1<br/>3 4 5<br/>8 7 6</td><td style=\"font-family:courier new;font-size:14pt;\">6 5 7<br/>8 2 1<br/>4 9 3</td></tr><tr><td style=\"font-family:courier new;font-size:14pt;\">5 4 8<br/>7 2 9<br/>1 3 6</td><td style=\"font-family:courier new;font-size:14pt;\">1 3 2<br/>5 6 4<br/>7 9 8</td><td style=\"font-family:courier new;font-size:14pt;\">9 7 6<br/>1 3 8<br/>2 4 5</td></tr><tr><td style=\"font-family:courier new;font-size:14pt;\">3 7 2<br/>8 1 4<br/>6 9 5</td><td style=\"font-family:courier new;font-size:14pt;\">6 8 9<br/>2 5 3<br/>4 1 7</td><td style=\"font-family:courier new;font-size:14pt;\">5 1 4<br/>7 6 9<br/>3 8 2</td></tr></table></td></tr></table></div><p>A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ \"guess and test\" methods in order to eliminate options (there is much contested opinion over this). The complexity of the search determines the difficulty of the puzzle; the example above is considered <i>easy</i> because it can be solved by straight forward direct deduction.</p><p>The 6K text file, <a href=\"project/sudoku.txt\">sudoku.txt</a> (right click and 'Save Link/Target As...'), contains fifty different Su Doku puzzles ranging in difficulty, but all with unique solutions (the first puzzle in the file is the example above).</p><p>By solving all fifty puzzles find the sum of the 3-digit numbers found in the top left corner of each solution grid; for example, 483 is the 3-digit number found in the top left corner of the solution grid above.</p><p class='info'>Note: If you're convinced that &quot;guess and test&quot; methods need not be employed please tell how you would solve #6 and #46. (c;</p>",
    "folder": "su-doku",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Su Doku"
});

db.questions.insert({
    "details": "<p>The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.</p><p>Let <i>d</i><sub>1</sub> be the 1<sup>st</sup> digit, <i>d</i><sub>2</sub> be the 2<sup>nd</sup> digit, and so on. In this way, we note the following:</p><ul><li><i>d</i><sub>2</sub><i>d</i><sub>3</sub><i>d</i><sub>4</sub>=406 is divisible by 2</li><li><i>d</i><sub>3</sub><i>d</i><sub>4</sub><i>d</i><sub>5</sub>=063 is divisible by 3</li><li><i>d</i><sub>4</sub><i>d</i><sub>5</sub><i>d</i><sub>6</sub>=635 is divisible by 5</li><li><i>d</i><sub>5</sub><i>d</i><sub>6</sub><i>d</i><sub>7</sub>=357 is divisible by 7</li><li><i>d</i><sub>6</sub><i>d</i><sub>7</sub><i>d</i><sub>8</sub>=572 is divisible by 11</li><li><i>d</i><sub>7</sub><i>d</i><sub>8</sub><i>d</i><sub>9</sub>=728 is divisible by 13</li><li><i>d</i><sub>8</sub><i>d</i><sub>9</sub><i>d</i><sub>10</sub>=289 is divisible by 17</li></ul><p>Find the sum of all 0 to 9 pandigital numbers with this property.</p>",
    "folder": "sub-string-divisibility",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sub-string divisibility"
});

db.questions.insert({
    "details": "<p>The <b>Thue-Morse sequence</b>{T<sub><var>n</var></sub>} is a binary sequence satisfying:</p><ul><li>T<sub>0</sub> = 0</li><li>T<sub>2<var>n</var></sub> = T<sub><var>n</var></sub></li><li>T<sub>2<var>n</var>+1</sub> = 1 - T<sub><var>n</var></sub></li></ul><p>The first several terms of{T<sub><var>n</var></sub>} are given as follows:<br/>01101001<span style=\"color:red;\">10010</span>1101001011001101001....</p><p>We define{A<sub><var>n</var></sub></p>",
    "folder": "subsequence-of-thue-morse-sequ",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Subsequence of Thue-Morse sequence"
});

db.questions.insert({
    "details": "<p>For any set A of numbers, let sum(A) be the sum of the elements of A.<br/>Consider the set B ={1,3,6,8,10,11}.<br/> There are 20 subsets of B containing three elements, and their sums are:</p><p style=\"margin-left:100px\">sum{1,3,6}) = 10,<br/>sum{1,3,8}) = 12,<br/>sum{1,3,10}) = 14,<br/>sum{1,3,11}) = 15,<br/>sum{1,6,8}) = 15,<br/>sum{1,6,10}) = 17,<br/>sum{1,6,11}) = 18,<br/>sum{1,8,10}) = 19,<br/>sum{1,8,11}) = 20,<br/>sum{1,10,11}) = 22,<br/>sum{3,6,8}) = 17,<br/>sum{3,6,10}) = 19,<br/>sum{3,6,11}) = 20,<br/>sum{3,8,10}) = 21,<br/>sum{3,8,11}) = 22,<br/>sum{3,10,11}) = 24,<br/>sum{6,8,10}) = 24,<br/>sum{6,8,11}) = 25,<br/>sum{6,10,11}) = 27,<br/>sum{8,10,11}) = 29.</p><p>Some of these sums occur more than once, others are unique.<br/>For a set A, let U(A,k) be the set of unique sums of k-element subsets of A, in our example we find U(B,3) ={10,12,14,18,21,25,27,29} and sum(U(B,3)) = 156.</p><p>Now consider the 100-element set S ={1<sup>2</sup>, 2<sup>2</sup>, ... , 100<sup>2</sup>}.<br/>S has 100891344545564193334812497256 50-element subsets.</p><p>Determine the sum of all integers which are the sum of exactly one of the 50-element subsets of S, i.e. find sum(U(S,50)).</p>",
    "folder": "subsets-with-a-unique-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Subsets with a unique sum"
});

db.questions.insert({
    "details": "<p>Many numbers can be expressed as the sum of a square and a cube. Some of them in more than one way.</p><p>Consider the palindromic numbers that can be expressed as the sum of a square and a cube, both greater than 1, in <b>exactly</b> 4 different ways.<br/>For example, 5229225 is a palindromic number and it can be expressed in exactly 4 different ways:</p><p>2285<sup>2</sup> + 20<sup>3</sup><br/>2223<sup>2</sup> + 66<sup>3</sup><br/>1810<sup>2</sup> + 125<sup>3</sup><br/>1197<sup>2</sup> + 156<sup>3</sup></p><p>Find the sum of the five smallest such palindromic numbers.</p>",
    "folder": "sum-of-a-square-and-a-cube",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum of a square and a cube"
});

db.questions.insert({
    "details": "<p>For a positive integer k, define d(k) as the sum of the digits of k in its usual decimal representation.Thus d(42) = 4+2 = 6.</p><p>For a positive integer n, define S(n) as the number of positive integers k &lt; 10<sup>n</sup> with the following properties :<ul><li>k is divisible by 23 and<li>d(k) = 23.</li></li></ul></p>You are given that S(9) = 263626 and S(42) = 6377168878570056.",
    "folder": "sum-of-digits---experience-23",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum of digits - experience #23"
});

db.questions.insert({
    "details": "<p>There are 16 positive integers that do not have a zero in their digits and that have a digital sum equal to 5, namely: <br/>5, 14, 23, 32, 41, 113, 122, 131, 212, 221, 311, 1112, 1121, 1211, 2111 and 11111.<br/>Their sum is 17891.</p><p>Let <var>f</var>(<var>n</var>) be the sum of all positive integers that do not have a zero in their digits and have a digital sum equal to <var>n</var>.</p><p>Find <img src=\"project/images/sod_13.gif\" style=\"margin-top:-8px;\">.<br/>Give the last 9 digits as your answer.</img></p>",
    "folder": "sum-of-digits-experience-13",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum of digits, experience 13"
});

db.questions.insert({
    "details": "<p>The divisors of 6 are 1,2,3 and 6.<br/>The sum of the squares of these numbers is 1+4+9+36=50.</p><p>Let sigma2(n) represent the sum of the squares of the divisors of n.Thus sigma2(6)=50.</p>Let SIGMA2 represent the summatory function of sigma2, that is SIGMA2(n)=<img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>sigma2(i) for i=1 to n.<br/>The first 6 values of SIGMA2 are: 1,6,16,37,63 and 113.",
    "folder": "sum-of-squares-of-divisors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum of squares of divisors"
});

db.questions.insert({
    "details": "<p>A unitary divisor <var>d</var> of a number <var>n</var> is a divisor of <var>n</var> that has the property gcd(<var>d, n/d</var>) = 1.<br/>The unitary divisors of 4! = 24 are 1, 3, 8 and 24.<br/>The sum of their squares is 1<sup>2</sup> + 3<sup>2</sup> + 8<sup>2</sup> + 24<sup>2</sup> = 650.</p><p>Let S(<var>n</var>) represent the sum of the squares of the unitary divisors of <var>n</var>. Thus S(4!)=650.</p><p>Find S(100 000 000!) modulo 1 000 000 009.</p>",
    "folder": "sum-of-squares-of-unitary-divi",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum of squares of unitary divisors"
});

db.questions.insert({
    "details": "<p>Consider equations of the form: <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>N</var>, 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var>, <var>a</var>, <var>b</var> and <var>N</var> integer.</p><p>For <var>N</var>=65 there are two solutions:</p><p><var>a</var>=1, <var>b</var>=8 and <var>a</var>=4, <var>b</var>=7.</p><p>We call S(<var>N</var>) the sum of the values of <var>a</var> of all solutions of <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>N</var>, 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var>, <var>a</var>, <var>b</var> and <var>N</var> integer.</p><p>Thus S(65) = 1 + 4 = 5.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>S(<var>N</var>), for all squarefree <var>N</var> only divisible by primes of the form 4<var>k</var>+1 with 4<var>k</var>+1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 150.</p>",
    "folder": "sum-of-squares",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum of Squares"
});

db.questions.insert({
    "details": "<p>The sum of the squares of the first ten natural numbers is,</p><div style=\"text-align:center\">1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</div><p>The square of the sum of the first ten natural numbers is,</p><div style=\"text-align:center\">(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</div><p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 385 = 2640.</p><p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>",
    "folder": "sum-square-difference",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sum square difference"
});

db.questions.insert({
    "details": "<p>The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.</p><p>Find the sum of all the primes below two million.</p><p class=\"info\">Note: This problem has been changed recently, please check that you are using the right parameters.</p>",
    "folder": "summation-of-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Summation of primes"
});

db.questions.insert({
    "details": "<p>Define f(<var>n</var>) as the sum of the factorials of the digits of <var>n</var>. For example, f(342) = 3! + 4! + 2! = 32.</p><p>Define sf(<var>n</var>) as the sum of the digits of f(<var>n</var>). So sf(342) = 3 + 2 = 5.</p><p>Define g(<var>i</var>) to be the smallest positive integer <var>n</var> such that sf(<var>n</var>) = <var>i</var>. Though sf(342) is 5, sf(25) is also 5, and it can be verified that g(5) is 25.</p><p>Define sg(<var>i</var>) as the sum of the digits of g(<var>i</var>). So sg(5) = 2 + 5 = 7.</p><p>Further, it can be verified that g(20) is 267 and <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>\u2009sg(<var>i</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 20 is 156.</p><p>What is <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>\u2009sg(<var>i</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 150?</p>",
    "folder": "sums-of-digit-factorials",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Sums of Digit Factorials"
});

db.questions.insert({
    "details": "<p>A horizontal row comprising of 2<var>n</var> + 1 squares has <var>n</var> red counters placed at one end and <var>n</var> blue counters at the other end, being separated by a single empty square in the centre. For example, when <var>n</var> = 3.</p><p><div align=\"center\"><img src=\"project/images/p_321_swapping_counters_1.gif\"/></div></p><p>A counter can move from one square to the next (slide) or can jump over another counter (hop) as long as the square next to that counter is unoccupied.</p><p><div align=\"center\"><img src=\"project/images/p_321_swapping_counters_2.gif\"/></div></p><p>Let M(<var>n</var>) represent the minimum number of moves/actions to completely reverse the positions of the coloured counters; that is, move all the red counters to the right and all the blue counters to the left.</p><p>It can be verified M(3) = 15, which also happens to be a triangle number.</p><p>If we create a sequence based on the values of <var>n</var> for which M(<var>n</var>) is a triangle number then the first five terms would be:<br>1, 3, 10, 22, and 63, and their sum would be 99.</br></p><p>Find the sum of the first forty terms of this sequence.</p>",
    "folder": "swapping-counters",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Swapping Counters"
});

db.questions.insert({
    "details": "<p>A definition for an ellipse is:<br/>Given a circle c with centre M and radius r and a point G such that d(G,M)<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>r, the locus of the points that are equidistant from c and G form an ellipse.</p>The construction of the points of the ellipse is shown below.",
    "folder": "tangents-to-an-ellipse",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Tangents to an ellipse"
});

db.questions.insert({
    "details": "<span style=\"font-size:10pt;\"><p>Tatami are rectangular mats, used to completely cover the floor of a room, without overlap.</p><p>Assuming that the only type of available tatami has dimensions 1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2, there are obviously some limitations for the shape and size of the rooms that can be covered.</p><p>For this problem, we consider only rectangular rooms with integer dimensions <var>a</var>, <var>b</var> and even size <var>s</var> = <var>a</var>\u00b7<var>b</var>.<br/>We use the term 'size' to denote the floor surface area of the room, and \u2014 without loss of generality \u2014 we add the condition <var>a</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var>.</p><p>There is one rule to follow when laying out tatami: there must be no points where corners of four different mats meet.<br/>For example, consider the two arrangements below for a 4<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4 room:</p><div align=\"center\"><img src=\"project/images/p_256_tatami3.gif\"/><br/></div><p>The arrangement on the left is acceptable, whereas the one on the right is not: a red \"<span style=\"color:red\"><b>X</b></span>\" in the middle, marks the point where four tatami meet.</p><p>Because of this rule, certain even-sized rooms cannot be covered with tatami: we call them tatami-free rooms.<br/>Further, we define <var>T</var>(<var>s</var>) as the number of tatami-free rooms of size <var>s</var>.</p><p>The smallest tatami-free room has size <var>s</var> = 70 and dimensions 7<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>10.<br/>All the other rooms of size <var>s</var> = 70 can be covered with tatami; they are: 1<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>70, 2<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>35 and 5<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>14.<br/>Hence, <var>T</var>(70) = 1.</p><p>Similarly, we can verify that <var>T</var>(1320) = 5 because there are exactly 5 tatami-free rooms of size <var>s</var> = 1320:<br/>20<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>66, 22<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>60, 24<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>55, 30<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>44 and 33<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>40.<br/>In fact, <var>s</var> = 1320 is the smallest room-size <var>s</var> for which <var>T</var>(<var>s</var>) = 5.</p><p>Find the smallest room-size <var>s</var> for which <var>T</var>(<var>s</var>) = 200.</p></span>",
    "folder": "tatami-free-rooms",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Tatami-Free Rooms"
});

db.questions.insert({
    "details": "<p>For non-negative integers <var>m</var>, <var>n</var>, the Ackermann function <var>A</var>(<var>m</var>, <var>n</var>) is defined as follows:</p><div align=\"center\"><img src=\"project/images/p_282_formula.gif\"/></div><p>For example <var>A</var>(1, 0) = 2, <var>A</var>(2, 2) = 7 and <var>A</var>(3, 4) = 125.</p><p>Find <img src=\"project/images/p_282formula3.gif\" style=\"vertical-align:middle\"><var>A</var>(<var>n</var>, <var>n</var>) and give your answer mod 14<sup>8</sup>.</img></p>",
    "folder": "the-ackermann-function",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The Ackermann function"
});

db.questions.insert({
    "details": "<p>\"<i>The Chase</i>\" is a game played with two dice and an even number of players.</p><p>The players sit around a table; the game begins with two opposite players having one die each. On each turn, the two players with a die roll it.<br/>If a player rolls a 1, he passes the die to his neighbour on the left; if he rolls a 6, he passes the die to his neighbour on the right; otherwise, he keeps the die for the next turn.<br/>The game ends when one player has both dice after they have been rolled and passed; that player has then lost.</p><p>In a game with 100 players, what is the expected number of turns the game lasts?</p><p>Give your answer rounded to ten significant digits.</p>",
    "folder": "the-chase",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The Chase"
});

db.questions.insert({
    "details": "<p>The <span style=\"font-style: italic\">hyperexponentiation</span> or <span style=\"font-style: italic\">tetration</span> of a number a by a positive integer b, denoted by a\u2191\u2191b or <sup>b</sup>a, is recursively defined by:<br/><br/>a\u2191\u21911 = a,<br/>a\u2191\u2191(k+1) = a<sup>(a\u2191\u2191k)</sup>.</p><p>Thus we have e.g. 3\u2191\u21912 = 3<sup>3</sup> = 27, hence 3\u2191\u21913 = 3<sup>27</sup> = 7625597484987 and 3\u2191\u21914 is roughly 10<sup>3.6383346400240996*10^12</sup>.</p><p>Find the last 8 digits of 1777\u2191\u21911855.</p>",
    "folder": "the-hyperexponentiation-of-a-n",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The hyperexponentiation of a number"
});

db.questions.insert({
    "details": "<p>The moon has been opened up, and land can be obtained for free, but there is a catch. You have to build a wall around the land that you stake out, and building a wall on the moon is expensive. Every country has been allotted a 500 m by 500 m square area, but they will possess only that area which they wall in. 251001 posts have been placed in a rectangular grid with 1 meter spacing. The wall must be a closed series of straight lines, each line running from post to post.</p><p>The bigger countries of course have built a 2000 m wall enclosing the entire 250 000 m<sup>2</sup> area. The <a href=\"http://en.wikipedia.org/wiki/Grand_Fenwick\">Duchy of Grand Fenwick</a>, has a tighter budget, and has asked you (their Royal Programmer) to compute what shape would get best maximum enclosed-area/wall-length ratio.</p><p>You have done some preliminary calculations on a sheet of paper.For a 2000 meter wall enclosing the 250 000 m<sup>2</sup> area theenclosed-area/wall-length ratio is 125.<br/>Although not allowed , but to get an idea if this is anything better:  if you place a circle inside the square area touching the four sides the area will be equal to \u03c0*250<sup>2</sup> m<sup>2</sup> and the perimeter will be \u03c0*500 m, so the enclosed-area/wall-length ratio will also be 125.</p><p>However, if you cut off from the square four triangles with sides 75 m, 75 m and 75<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2 m the total area becomes 238750 m<sup>2</sup> and the perimeter becomes 1400+300<img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>2 m. So this gives an enclosed-area/wall-length ratio of 130.87, which is significantly better.</p><div align=\"center\"><img src=\"project/images/p_314_landgrab.gif\"/></div><p>Find the maximum enclosed-area/wall-length ratio.<br/>Give your answer rounded to 8 places behind the decimal point in the form abc.defghijk.</p>",
    "folder": "the-mouse-on-the-moon",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The Mouse on the Moon"
});

db.questions.insert({
    "details": "<p>The binomial coefficient <sup>10</sup>C<sub>3</sub> = 120.<br/>120 = 2<sup>3</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5 = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 3 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5, and 2 + 2 + 2 + 3 + 5 = 14.<br/>So the sum of the terms in the prime factorisation of <sup>10</sup>C<sub>3</sub> is 14.<br/><br/>Find the sum of the terms in the prime factorisation of <sup>20000000</sup>C<sub>15000000</sub>.</p>",
    "folder": "the-prime-factorisation-of-bin",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The prime factorisation of binomial coefficients"
});

db.questions.insert({
    "details": "<p>Two players share an unbiased coin and take it in turns to play \"The Race\". On Player 1's turn, he tosses the coin once: if it comes up Heads, he scores one point; if it comes up Tails, he scores nothing. On Player 2's turn, she chooses a positive integer <var>T</var> and tosses the coin <var>T</var> times: if it comes up all Heads, she scores 2<sup><var>T</var>-1</sup> points; otherwise, she scores nothing. Player 1 goes first. The winner is the first to 100 or more points.</p><p>On each turn Player 2 selects the number, <var>T</var>, of coin tosses that maximises the probability of her winning.</p><p>What is the probability that Player 2 wins?</p><p>Give your answer rounded to eight decimal places in the form 0.<i>abcdefgh</i> .</p>",
    "folder": "the-race",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The Race"
});

db.questions.insert({
    "details": "<p>Consider the number 50.<br/>50<sup>2</sup> = 2500 = 2<sup>2</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5<sup>4</sup>, so \u03c6(2500) = 2 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 4 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5<sup>3</sup> = 8 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5<sup>3</sup> = 2<sup>3</sup> <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 5<sup>3</sup>. <sup>1</sup><br/>So 2500 is a square and  \u03c6(2500) is a cube.</p><p>Find the sum of all numbers n, 1 &lt; n <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>10</sup> such that \u03c6(n<sup>2</sup>) is a cube.</p><p><sup>1</sup> \u03c6 denotes <b>Euler's totient function</b>.</p>",
    "folder": "the-totient-of-a-square-is-a-c",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "The totient of a square is a cube"
});

db.questions.insert({
    "details": "<p>Four points with integer coordinates are selected:<br/>A(<var>a</var>,\u00a00), B(<var>b</var>,\u00a00), C(0,\u00a0<var>c</var>) and D(0,\u00a0<var>d</var>), with 0\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0<var>a</var>\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0<var>b</var> and 0\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0<var>c</var>\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0<var>d</var>.<br/>Point P, also with integer coordinates, is chosen on the line AC so that the three triangles ABP, CDP and BDP are all <dfn title=\"Have equal angles\">similar</dfn>.</p><div align=\"center\"><img src=\"project/images/p_299_ThreeSimTri.gif\"/></div><p>It is easy to prove that the three triangles can be similar, only if <var>a</var>=<var>c</var>.</p><p>So, given that <var>a</var>=<var>c</var>, we are looking for triplets (<var>a</var>,<var>b</var>,<var>d</var>) such that at least one point P (with integer coordinates) exists on AC, making the three triangles ABP, CDP and BDP all similar.</p><p>For example, if (<var>a</var>,<var>b</var>,<var>d</var>)=(2,3,4), it can be easily verified that point P(1,1) satisfies the above condition. Note that the triplets (2,3,4) and (2,4,3) are considered as distinct, although point P(1,1) is common for both.</p><p>If <var>b</var>+<var>d</var>\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0100, there are 92 distinct triplets (<var>a</var>,<var>b</var>,<var>d</var>) such that point P exists.<br/>If <var>b</var>+<var>d</var>\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0100 000, there are 320471 distinct triplets (<var>a</var>,<var>b</var>,<var>d</var>) such that point P exists.</p><p>If <var>b</var>+<var>d</var>\u00a0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>\u00a0100 000 000, how many distinct triplets (<var>a</var>,<var>b</var>,<var>d</var>) are there such that point P exists?</p>",
    "folder": "three-similar-triangles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Three similar triangles"
});

db.questions.insert({
    "details": "<p>A small child has a \u201cnumber caterpillar\u201d consisting of forty jigsaw pieces, each with one number on it, which, when connected together in a line, reveal the numbers 1 to 40 in order.</p><p>Every night, the child's father has to pick up the pieces of the caterpillar that have been scattered across the play room. He picks up the pieces at random and places them in the correct order.<br/> As the caterpillar is built up in this way, it forms distinct segments that gradually merge together.<br/> The number of segments starts at zero (no pieces placed), generally increases up to about eleven or twelve, then tends to drop again before finishing at a single segment (all pieces placed).<p><p>For example:</p><div align=\"center\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td align=\"center\" width=\"80\"><b>Piece Placed</b></td><td align=\"center\" width=\"80\"><b>Segments So Far</b></td></tr><tr><td align=\"center\">12</td><td align=\"center\">1</td></tr><tr><td align=\"center\">4</td><td align=\"center\">2</td></tr><tr><td align=\"center\">29</td><td align=\"center\">3</td></tr><tr><td align=\"center\">6</td><td align=\"center\">4</td></tr><tr><td align=\"center\">34</td><td align=\"center\">5</td></tr><tr><td align=\"center\">5</td><td align=\"center\">4</td></tr><tr><td align=\"center\">35</td><td align=\"center\">4</td></tr><tr><td align=\"center\">\u2026</td><td align=\"center\">\u2026</td></tr></table></div><p>Let <var>M</var> be the maximum number of segments encountered during a random tidy-up of the caterpillar.<br/>For a caterpillar of ten pieces, the number of possibilities for each <var>M</var> is</p><div align=\"center\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr style=\"background-color:#c1daf9;\"><td align=\"center\" width=\"50\"><b><var>M</var></b></td><td align=\"center\" width=\"90\"><b>Possibilities</b></td></tr><tr><td align=\"center\">1</td><td align=\"right\">512\u00a0 \u00a0\u00a0 \u00a0</td></tr><tr><td align=\"center\">2</td><td align=\"right\">250912\u00a0 \u00a0\u00a0 \u00a0</td></tr><tr><td align=\"center\">3</td><td align=\"right\">1815264\u00a0 \u00a0\u00a0 \u00a0</td></tr><tr><td align=\"center\">4</td><td align=\"right\">1418112\u00a0 \u00a0\u00a0 \u00a0</td></tr><tr><td align=\"center\">5</td><td align=\"right\">144000\u00a0 \u00a0\u00a0 \u00a0</td></tr></table></div><p>so the most likely value of <var>M</var> is 3 and the average value is <sup>385643</sup>\u2044<sub>113400</sub> = 3.400732, rounded to six decimal places.</p><p>The most likely value of <var>M</var> for a forty-piece caterpillar is 11; but what is the average value of <var>M</var>?</p><p>Give your answer rounded to six decimal places.</p></p></p>",
    "folder": "tidying-up",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Tidying up"
});

db.questions.insert({
    "details": "<p>A set of lattice points S is called a <i>titanic set</i> if there exists a line passing through exactly two points in S.</p><p>An example of a titanic set is S ={(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)}, where the line passing through (0, 1) and (2, 0) does not pass through any other point in S.</p><p>On the other hand, the set{(0, 0), (1, 1), (2, 2), (4, 4)} is not a titanic set since the line passing through any two points in the set also passes through the other two.</p><p>For any positive integer <var>N</var>, let <var>T</var>(<var>N</var>) be the number of titanic sets S whose every point (<var>x</var>, <var>y</var>) satisfies 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>x</var>, <var>y</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.It can be verified that <var>T</var>(1) = 11, <var>T</var>(2) = 494, <var>T</var>(4) = 33554178, <var>T</var>(111) mod 10<sup>8</sup> = 13500401 and <var>T</var>(10<sup>5</sup>)\u00a0mod\u00a010<sup>8</sup> = 63259062.</p><p>Find <var>T</var>(10<sup>11</sup>)\u00a0mod\u00a010<sup>8</sup>.</p>",
    "folder": "titanic-sets",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Titanic sets"
});

db.questions.insert({
    "details": "<p>There are 1111 ways in which five 6-sided dice (sides numbered 1 to 6) can be rolled so that the top three sum to 15. Some examples are:<br/><br/>D<sub>1</sub>,D<sub>2</sub>,D<sub>3</sub>,D<sub>4</sub>,D<sub>5</sub> = 4,3,6,3,5<br/>D<sub>1</sub>,D<sub>2</sub>,D<sub>3</sub>,D<sub>4</sub>,D<sub>5</sub> = 4,3,3,5,6<br/>D<sub>1</sub>,D<sub>2</sub>,D<sub>3</sub>,D<sub>4</sub>,D<sub>5</sub> = 3,3,3,6,6<br/>D<sub>1</sub>,D<sub>2</sub>,D<sub>3</sub>,D<sub>4</sub>,D<sub>5</sub> = 6,6,3,3,3<br/><br/>In how many ways can twenty 12-sided dice (sides numbered 1 to 12) be rolled so that the top ten sum to 70?</p>",
    "folder": "top-dice",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Top Dice"
});

db.questions.insert({
    "details": "<p>Let \u03c6 be Euler's totient function, i.e. for a natural number <var>n</var>,\u03c6(<var>n</var>) is the number of <var>k</var>, 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var>, for which gcd(<var>k</var>,<var>n</var>) = 1.</p><p>By iterating \u03c6, each positive integer generates a decreasing chain of numbers ending in 1.<br/>E.g. if we start with 5 the sequence 5,4,2,1 is generated.<br/>Here is a listing of all chains with length 4:</p><div style=\"text-align:right; margin-right:350px;\">5,4,2,1<br/>7,6,2,1<br/>8,4,2,1<br/>9,6,2,1<br/>10,4,2,1<br/>12,4,2,1<br/>14,6,2,1<br/>18,6,2,1</div><p>Only two of these chains start with a prime, their sum is 12.</p><p>What is the sum of all primes less than 40000000 which generate a chain of length 25?</p>",
    "folder": "totient-chains",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Totient Chains"
});

db.questions.insert({
    "details": "<p>Euler's Totient function, \u03c6(<i>n</i>) [sometimes called the phi function], is used to determine the number of numbers less than <i>n</i> which are relatively prime to <i>n</i>. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, \u03c6(9)=6.</p><div style=\"margin-left:100px;\"><table border=\"1\"><tr><td><b><i>n</i></b></td><td><b>Relatively Prime</b></td><td><b>\u03c6(<i>n</i>)</b></td><td><b><i>n</i>/\u03c6(<i>n</i>)</b></td></tr><tr><td>2</td><td>1</td><td>1</td><td>2</td></tr><tr><td>3</td><td>1,2</td><td>2</td><td>1.5</td></tr><tr><td>4</td><td>1,3</td><td>2</td><td>2</td></tr><tr><td>5</td><td>1,2,3,4</td><td>4</td><td>1.25</td></tr><tr><td>6</td><td>1,5</td><td>2</td><td>3</td></tr><tr><td>7</td><td>1,2,3,4,5,6</td><td>6</td><td>1.1666...</td></tr><tr><td>8</td><td>1,3,5,7</td><td>4</td><td>2</td></tr><tr><td>9</td><td>1,2,4,5,7,8</td><td>6</td><td>1.5</td></tr><tr><td>10</td><td>1,3,7,9</td><td>4</td><td>2.5</td></tr></table></div><p>It can be seen that <i>n</i>=6 produces a maximum <i>n</i>/\u03c6(<i>n</i>) for <i>n</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10.</p><p>Find the value of <i>n</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1,000,000 for which <i>n</i>/\u03c6(<i>n</i>) is a maximum.</p>",
    "folder": "totient-maximum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Totient maximum"
});

db.questions.insert({
    "details": "<p>Euler's Totient function, \u03c6(<var>n</var>) [sometimes called the phi function], is used to determine the number of positive numbers less than or equal to <var>n</var> which are relatively prime to <var>n</var>. For example, as 1, 2, 4, 5, 7, and 8, are all less than nine and relatively prime to nine, \u03c6(9)=6.<br/>The number 1 is considered to be relatively prime to every positive number, so \u03c6(1)=1. </p><p>Interestingly, \u03c6(87109)=79180, and it can be seen that 87109 is a permutation of 79180.</p><p>Find the value of <var>n</var>, 1 <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>7</sup>, for which \u03c6(<var>n</var>) is a permutation of <var>n</var> and the ratio <var>n</var>/\u03c6(<var>n</var>) produces a minimum.</p>",
    "folder": "totient-permutation",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Totient permutation"
});

db.questions.insert({
    "details": "<p>Let{a<sub>1</sub>, a<sub>2</sub>,..., a<sub><var>n</var></sub>} be an integer sequence of length <var>n</var> such that:</p><ul><li>a<sub>1</sub> = 6</li><li>for all 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> &lt; <var>n</var> : \u03c6(a<sub><var>i</var></sub>) &lt; \u03c6(a<sub><var>i</var>+1</sub>) &lt; a<sub><var>i</var></sub> &lt; a<sub><var>i</var>+1</sub> <sup>1</sup></li></ul><p>Let S(<var>N</var>) be the number of such sequences with a<sub><var>n</var></sub> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>N</var>.<br/>For example, S(10) = 4:{6},{6, 8},{6, 8, 9} and{6, 10}.<br/>We can verify that S(100) = 482073668 and S(10 000) mod 10<sup>8</sup> = 73808307.</p><p>Find S(20 000 000) mod 10<sup>8</sup>.</p><p><sup>1</sup> \u03c6 denotes <b>Euler's totient function</b>.</p>",
    "folder": "totient-stairstep-sequences",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Totient Stairstep Sequences"
});

db.questions.insert({
    "details": "<p>Let S(<var>n,m</var>) = <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/>\u03c6(<var>n <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> i</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> m</var>. (\u03c6 is Euler's totient function)<br/>You are given that S(510510,10<sup>6</sup> )= 45480596821125120. </p><p>Find S(510510,10<sup>11</sup>).<br/>Give the last 9 digits of your answer.</p>",
    "folder": "totient-sum",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Totient sum"
});

db.questions.insert({
    "details": "<p>Let T(<i>n</i>) be the number of tours over a 4 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> <i>n</i> playing board such that:</p><ul><li>The tour starts in the top left corner.</li><li>The tour consists of moves that are up, down, left, or right one square.</li><li>The tour visits each square exactly once.</li><li>The tour ends in the bottom left corner.</li></ul><p>The diagram shows one tour over a 4 <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 10 board:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_237.gif\"/></div><p>T(10) is 2329. What is T(10<sup>12</sup>) modulo 10<sup>8</sup>?</p>",
    "folder": "tours-on-a-4-x-n-playing-board",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Tours on a 4 x n playing board"
});

db.questions.insert({
    "details": "<p>Consider the following configuration of 64 triangles:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_189_grid.gif\"/></div><p>We wish to colour the interior of each triangle with one of three colours: red, green or blue, so that no two neighbouring triangles have the same colour. Such a colouring shall be called valid. Here, two triangles are said to be neighbouring if they share an edge.<br/>Note: if they only share a vertex, then they are not neighbours.</p><p>For example, here is a valid colouring of the above grid:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_189_colours.gif\"/></div><p>A colouring C' which is obtained from a colouring C by rotation or reflection is considered <i>distinct</i> from C unless the two are identical.</p><p>How many distinct valid colourings are there for the above configuration?</p>",
    "folder": "tri-colouring-a-triangular-gri",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Tri-colouring a triangular grid"
});

db.questions.insert({
    "details": "<p>Consider all the triangles having:<ul><li>All their vertices on <dfn title=\"Integer coordinates\">lattice points</dfn>.</li><li><dfn title=\"Centre of the circumscribed circle\">Circumcentre</dfn> at the origin O.</li><li><dfn title=\"Point where the three altitudes meet\">Orthocentre</dfn> at the point H(5, 0).</li></ul></p><p>There are nine such triangles having a perimeter <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 50.<br/>Listed and shown in ascending order of their perimeter, they are:</p><p><table><tr><td>A(-4, 3), B(5, 0), C(4, -3)<br/>A(4, 3), B(5, 0), C(-4, -3)<br/>A(-3, 4), B(5, 0), C(3, -4)<br/><br/><br/>A(3, 4), B(5, 0), C(-3, -4)<br/>A(0, 5), B(5, 0), C(0, -5)<br/>A(1, 8), B(8, -1), C(-4, -7)<br/><br/><br/>A(8, 1), B(1, -8), C(-4, 7)<br/>A(2, 9), B(9, -2), C(-6, -7)<br/>A(9, 2), B(2, -9), C(-6, 7)<br/></td><td><img src=\"project/images/p_264_TriangleCentres.gif\"/></td></tr></table></p><p>The sum of their perimeters, rounded to four decimal places, is 291.0089.</p><p>Find all such triangles with a perimeter <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 10<sup>5</sup>.<br/>Enter as your answer the sum of their perimeters rounded to four decimal places.</p>",
    "folder": "triangle-centres",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangle Centres"
});

db.questions.insert({
    "details": "<p>Three distinct points are plotted at random on a Cartesian plane, for which -1000 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>x</i>, <i>y</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000, such that a triangle is formed.</p><p>Consider the following two triangles:</p><p style=\"text-align:center;\">A(-340,495), B(-153,-910), C(835,-947)<br/><br/>X(-175,41), Y(-421,-714), Z(574,-645)</p><p>It can be verified that triangle ABC contains the origin, whereas triangle XYZ does not.</p><p>Using <a href=\"project/triangles.txt\">triangles.txt</a> (right click and 'Save Link/Target As...'), a 27K text file containing the co-ordinates of one thousand \"random\" triangles, find the number of triangles for which the interior contains the origin.</p><p class=\"info\">NOTE: The first two examples in the file represent the triangles in the example given above.</p>",
    "folder": "triangle-containment",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangle containment"
});

db.questions.insert({
    "details": "<p>On the parabola <var>y</var> = <var>x</var><sup>2</sup>/<var>k</var>, three points A(<var>a</var>, <var>a</var><sup>2</sup>/<var>k</var>), B(<var>b</var>, <var>b</var><sup>2</sup>/<var>k</var>) and C(<var>c</var>, <var>c</var><sup>2</sup>/<var>k</var>) are chosen.</p><p>Let F(<var>K</var>, <var>X</var>) be the number of the integer quadruplets (<var>k</var>, <var>a</var>, <var>b</var>, <var>c</var>) such that at least one angle of the triangle ABC is 45-degree, with 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>K</var> and -<var>X</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>a</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>b</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>c</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>X</var>.</p><p>For example, F(1, 10) = 41 and F(10, 100) = 12492.<br/>Find F(10<sup>6</sup>, 10<sup>9</sup>).</p>",
    "folder": "triangle-on-parabola",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangle on parabola"
});

db.questions.insert({
    "details": "<p><table class=\"formula\"><tr><td>Let T(<var>n</var>) be the <var>n</var><sup>th</sup> triangle number, so T(<var>n</var>) =</td><td><table class=\"frac\" style=\"font-size: smaller\"><tr><td><var>n</var>\u2009(<var>n</var>+1)</td></tr><tr><td class=\"overline\" text-align:center=\"\">2</td></tr></table></td><td>.</td></tr></table><p>Let dT(<var>n</var>) be the number of divisors of T(<var>n</var>).<br>E.g.:T(7) = 28 and dT(7) = 6.</br></p><p>Let Tr(<var>n</var>) be the number of triples (<var>i</var>, <var>j</var>, <var>k</var>) such that 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i &lt; j &lt; k <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> n</var> and dT(<var>i</var>) &gt; dT(<var>j</var>) &gt; dT(<var>k</var>).<br/>Tr(20) = 14, Tr(100) = 5772 and Tr(1000) = 11174776.</p><p>Find Tr(60 000 000). <br/>Give the last 18 digits of your answer.</p></p>",
    "folder": "triangle-triples",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangle Triples"
});

db.questions.insert({
    "details": "<p>Consider the set <var>I<sub>r</sub></var> of points (<var>x</var>,<var>y</var>) with integer co-ordinates in the interior of the circle with radius <var>r</var>, centered at the origin, i.e. <var>x</var><sup>2</sup> + <var>y</var><sup>2</sup> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>r</var><sup>2</sup>.</p><p>For a radius of 2, <var>I</var><sub>2</sub> contains the nine points (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0), (-1,-1), (0,-1) and (1,-1). There are eight triangles having all three vertices in <var>I</var><sub>2</sub> which contain the origin in the interior. Two of them are shown below, the others are obtained from these by rotation.</p><p style=\"margin-left:240px;\"><img alt=\"\" src=\"project/images/p_184.gif\"/></p><p>For a radius of 3, there are 360 triangles containing the origin in the interior and having all vertices in <var>I</var><sub>3</sub> and for <var>I</var><sub>5</sub> the number is 10600.</p><p>How many triangles are there containing the origin in the interior and having all three vertices in <var>I</var><sub>105</sub>?</p>",
    "folder": "triangles-containing-the-origi",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangles containing the origin."
});

db.questions.insert({
    "details": "<p>How many triangles are there with integral sides, at least one integral angle (measured in degrees), and a perimeter that does not exceed 10<sup>8</sup>?</p>",
    "folder": "triangles-with-integral-sides",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangles with integral sides and an integral angle "
});

db.questions.insert({
    "details": "<p>Consider the triangle with sides <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>5, <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>65 and <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>68.It can be shown that this triangle has area 9.</p><p>S(n) is the sum of the areas of  all triangles with sides <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>(1+b<sup>2</sup>), <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>(1+c<sup>2</sup>) and <img alt=\"\u221a\" border=\"0\" height=\"16\" src=\"images/symbol_radic.gif\" style=\"vertical-align:middle;\" width=\"14\"/>(b<sup>2</sup>+c<sup>2</sup>) (for positive integers b and c ) that have an integral area not exceeding n.</p><p>The example triangle has b=2 and c=8.</p><p>S(10<sup>6</sup>)=18018206.</p><p>Find S(10<sup>10</sup>).</p>",
    "folder": "triangles-with-non-rational-si",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangles with non rational sides and integral area"
});

db.questions.insert({
    "details": "<p>Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:</p><table><tr><td>Triangle</td><td>\u00a0</td><td>T<sub><i>n</i></sub>=<i>n</i>(<i>n</i>+1)/2</td><td>\u00a0</td><td>1, 3, 6, 10, 15, ...</td></tr><tr><td>Pentagonal</td><td>\u00a0</td><td>P<sub><i>n</i></sub>=<i>n</i>(3<i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)/2</td><td>\u00a0</td><td>1, 5, 12, 22, 35, ...</td></tr><tr><td>Hexagonal</td><td>\u00a0</td><td>H<sub><i>n</i></sub>=<i>n</i>(2<i>n</i><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1)</td><td>\u00a0</td><td>1, 6, 15, 28, 45, ...</td></tr></table><p>It can be verified that T<sub>285</sub> = P<sub>165</sub> = H<sub>143</sub> = 40755.</p><p>Find the next triangle number that is also pentagonal and hexagonal.</p>",
    "folder": "triangular-pentagonal-and-hexa",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triangular, pentagonal, and hexagonal"
});

db.questions.insert({
    "details": "<p>The sequence 1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, 355, 653, 1201 ...<br/>is defined by T<sub>1</sub> = T<sub>2</sub> = T<sub>3</sub> = 1 and T<sub><var>n</var></sub> = T<sub><var>n</var>-1</sub> + T<sub><var>n</var>-2</sub> + T<sub><var>n</var>-3</sub>.</p><p>It can be shown that 27 does not divide any terms of this sequence.<br/>In fact, 27 is the first odd number with this property.</p><p>Find the 124<sup>th</sup> odd number that does not divide any terms of the above sequence.</p>",
    "folder": "tribonacci-non-divisors",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Tribonacci non-divisors"
});

db.questions.insert({
    "details": "<p>A triomino is a shape consisting of three squares joined via the edges.There are two basic forms:</p><p style=\"text-align:center;\"><img alt=\"\" src=\"http://projecteuler.net/project/images/p_161_trio1.gif\"/></p><p>If all possible orientations are taken into account there are six:</p><p style=\"text-align:center;\"><img alt=\"\" src=\"http://projecteuler.net/project/images/p_161_trio3.gif\"/></p><p>Any n by m grid for which nxm is divisible by 3 can be tiled with triominoes.<br/>If we consider tilings that can be obtained by reflection or rotation from another tiling as different there are 41 ways a 2 by 9 grid can be  tiled with triominoes:</p><p style=\"text-align:center;\"><img alt=\"\" src=\"http://projecteuler.net/project/images/p_161_k9.gif\"/></p><p>In how many ways can a 9 by 12 grid be tiled in this way by triominoes?</p>",
    "folder": "triominoes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Triominoes"
});

db.questions.insert({
    "details": "<p>The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.</p><p>Find the sum of the only eleven primes that are both truncatable from left to right and right to left.</p><p class=\"info\">NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.</p>",
    "folder": "truncatable-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Truncatable primes"
});

db.questions.insert({
    "details": "<p>A set of disks numbered 1 through 100 are placed in a line in random order.</p><p>What is the probability that we have a partial derangement such that exactly 22 prime number discs are found away from their natural positions?<br/>(Any number of non-prime disks may also be found in or out of their natural positions.)</p><p>Give your answer rounded to 12 places behind the decimal point in the form 0.abcdefghijkl.</p>",
    "folder": "twenty-two-foolish-primes",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Twenty-two Foolish Primes"
});

db.questions.insert({
    "details": "<p>Julie proposes the following wager to her sister Louise.<br/>She suggests they play a game of chance to determine who will wash the dishes.<br/>For this game, they shall use a generator of independent random numbers uniformly distributed between 0 and 1.<br/>The game starts with <var>S</var> = 0.<br/>The first player, Louise, adds to <var>S</var> different random numbers from the generator until <var>S</var> &gt; 1 and records her last random number '<var>x</var>'.<br/>The second player, Julie, continues adding to <var>S</var> different random numbers from the generator until <var>S</var> &gt; 2 and records her last random number '<var>y</var>'.<br/>The player with the highest number wins and the loser washes the dishes, i.e. if <var>y</var> &gt; <var>x</var> the second player wins.</p><p>For e<var>x</var>ample, if the first player draws 0.62 and 0.44, the first player turn ends since 0.62+0.44 &gt; 1 and <var>x</var> = 0.44.<br/>If the second players draws 0.1, 0.27 and 0.91, the second player turn ends since 0.62+0.44+0.1+0.27+0.91 &gt; 2 and <var>y</var> = 0.91.Since <var>y</var> &gt; <var>x</var>, the second player wins.</p><p>Louise thinks about it for a second, and objects: \"That's not fair\".<br/>What is the probability that the second player wins?<br/>Give your answer rounded to 10 places behind the decimal point in the form 0.abcdefghij</p>",
    "folder": "unfair-wager",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Unfair wager"
});

db.questions.insert({
    "details": "<p>Let <var>n</var> be a positive integer. Suppose there are stations at the coordinates (<var>x</var>, <var>y</var>) = (2<sup><var>i</var></sup> mod <var>n</var>, 3<sup><var>i</var></sup> mod <var>n</var>) for 0 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>i</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 2<var>n</var>. We will consider stations with the same coordinates as the same station.</p><p>We wish to form a path from (0, 0) to (<var>n</var>, <var>n</var>) such that the x and y coordinates never decrease.<br/>Let S(<var>n</var>) be the maximum number of stations such a path can pass through.</p><p>For example, if <var>n</var> = 22, there are 11 distinct stations, and a valid path can pass through at most 5 stations. Therefore, S(22) = 5.The case is illustrated below, with an example of an optimal path:</p><p align=\"center\"><img src=\"project/images/p411_longpath.png\"/></p><p>It can also be verified that S(123) = 14 and S(10000) = 48.</p><p>Find <img alt=\"\u2211\" border=\"0\" height=\"14\" src=\"images/symbol_sum.gif\" style=\"vertical-align:middle;\" width=\"11\"/> S(<var>k</var><sup>5</sup>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>k</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 30.</p>",
    "folder": "uphill-paths",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Uphill paths"
});

db.questions.insert({
    "details": "<p>We shall define a square lamina to be a square outline with a square \"hole\" so that the shape possesses vertical and horizontal symmetry. For example, using exactly thirty-two square tiles we can form two different square laminae:</p><div style=\"text-align:center;\"><img alt=\"\" src=\"project/images/p_173_square_laminas.gif\"/></div><p>With one-hundred tiles, and not necessarily using all of the tiles at one time, it is possible to form forty-one different square laminae.</p><p>Using up to one million tiles how many different square laminae can be formed?</p>",
    "folder": "using-up-to-one-million-tiles",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Using up to one million tiles how many different \"hollow\" square laminae can be formed?"
});

db.questions.insert({
    "details": "<p>For any positive integer n, the <b>nth weak Goodstein sequence</b>{g<sub>1</sub>, g<sub>2</sub>, g<sub>3</sub>, ...} is defined as:<ul><li> g<sub>1</sub> = <var>n</var><li> for <var>k</var> <img alt=\"&gt;\" border=\"0\" height=\"10\" src=\"images/symbol_gt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1, g<sub><var>k</var></sub> is obtained by writing g<sub><var>k</var>-1</sub> in base <var>k</var>, interpreting it as a base <var>k</var> + 1 number, and subtracting 1.</li></li></ul>The sequence terminates when g<sub><var>k</var></sub> becomes 0.</p><p>For example, the 6th weak Goodstein sequence is{6, 11, 17, 25, ...}:<ul><li> g<sub>1</sub> = 6.<li> g<sub>2</sub> = 11 since 6 = 110<sub>2</sub>, 110<sub>3</sub> = 12, and 12 - 1 = 11.<li> g<sub>3</sub> = 17 since 11 = 102<sub>3</sub>, 102<sub>4</sub> = 18, and 18 - 1 = 17.<li> g<sub>4</sub> = 25 since 17 = 101<sub>4</sub>, 101<sub>5</sub> = 26, and 26 - 1 = 25.</li></li></li></li></ul>and so on.</p><p>It can be shown that every weak Goodstein sequence terminates.</p><p>Let G(<var>n</var>) be the number of nonzero elements in the <var>n</var>th weak Goodstein sequence.<br/>It can be verified that G(2) = 3, G(4) = 21 and G(6) = 381.<br/>It can also be verified that \u03a3G(<var>n</var>) = 2517 for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 8.</p><p>Find the last 9 digits of \u03a3G(<var>n</var>) for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 16.</p>",
    "folder": "weak-goodstein-sequence",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Weak Goodstein sequence"
});

db.questions.insert({
    "details": "<p>There are several ways to write the number 1/2 as a sum of inverse squares using <i>distinct</i> integers.</p><p>For instance, the numbers{2,3,4,5,7,12,15,20,28,35} can be used:</p><p style=\"margin-left:50px;\"><img alt=\"\" border=\"0\" src=\"http://projecteuler.net/project/images/p_152_sum.gif\"/></p><p>In fact, only using integers between 2 and 45 inclusive, there are exactly three ways to do it, the remaining two being:{2,3,4,6,7,9,10,20,28,35,36,45} and{2,3,4,6,7,9,12,15,28,30,35,36,45}.</p><p>How many ways are there to write the number 1/2 as a sum of inverse squares using distinct integers between 2 and 80 inclusive?</p>",
    "folder": "writing-12-as-a-sum-of-inverse",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Writing 1/2 as a sum of inverse squares"
});

db.questions.insert({
    "details": "<p>Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.</p><p>A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.</p><p>For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both \"halves\", it is impossible to decrypt the message.</p><p>Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.</p><p>Your task has been made easy, as the encryption key consists of three lower case characters. Using <a href=\"project/cipher1.txt\">cipher1.txt</a> (right click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.</p>",
    "folder": "xor-decryption",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "XOR decryption"
});

db.questions.insert({
    "details": "<p>Each new term in the Fibonacci sequence is generated by adding the previous two terms.<br/>Starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89.</p><p>Every positive integer can be uniquely written as a sum of nonconsecutive terms of the Fibonacci sequence. For example, 100 = 3 + 8 + 89.<br/>Such a sum is called the <b>Zeckendorf representation</b> of the number.</p><p>For any integer <var>n</var>&gt;0, let <var>z</var>(<var>n</var>) be the number of terms in the Zeckendorf representation of <var>n</var>.<br/>Thus, <var>z</var>(5)\u2009=\u20091, <var>z</var>(14)\u2009=\u20092, <var>z</var>(100)\u2009=\u20093 etc.<br/>Also, for 0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>10<sup>6</sup>, \u2211\u2009<var>z</var>(<var>n</var>)\u2009=\u20097894453.</p><p>Find \u2211\u2009<var>z</var>(<var>n</var>) for 0<img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/><var>n</var><img alt=\"&lt;\" border=\"0\" height=\"10\" src=\"images/symbol_lt.gif\" style=\"vertical-align:middle;\" width=\"10\"/>10<sup>17</sup>.</p>",
    "folder": "zeckendorf-representation",
    "level": 1,
    "random": Math.random(),
    "tags": [],
    "title": "Zeckendorf Representation"
});

