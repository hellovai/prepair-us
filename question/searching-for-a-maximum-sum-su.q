{
    "details": "<p>Looking at the table below, it is easy to verify that the maximum possible sum of adjacent numbers in any direction (horizontal, vertical, diagonal or anti-diagonal) <span style=\"white-space:nowrap\">is 16 (= 8 + 7 + 1).</span></p><div style=\"text-align:center\"><table border=\"1\" cellpadding=\"6\" cellspacing=\"0\" style=\"margin:auto\"><tbody align=\"right\"><tr><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2</td><td>5</td><td>3</td><td>2</td></tr><tr><td>9</td><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>6</td><td>5</td><td>1</td></tr><tr><td>3</td><td>2</td><td>7</td><td>3</td></tr><tr><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>1</td><td>8</td><td><img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>4</td><td>\u00a0 8</td></tr></tbody></table></div><p>Now, let us repeat the search, but on a much larger scale:</p><p>First, generate four million pseudo-random numbers using a specific form of what is known as a \"Lagged Fibonacci Generator\":</p><p>For 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>k</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 55, <i>s</i><sub><i>k</i></sub> = [100003 <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 200003<i>k</i> + 300007<i>k</i><sup>3</sup>] (modulo 1000000) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 500000.<br/>For 56 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <i>k</i> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 4000000, <i>s</i><sub><i>k</i></sub> = [<i>s</i><sub><i>k<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>24</i></sub> + <i>s</i><sub><i>k<img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>55</i></sub> + 1000000] (modulo 1000000) <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 500000.</p><p>Thus, <i>s</i><sub>10</sub> = <img alt=\"\u2212\" border=\"0\" height=\"3\" src=\"images/symbol_minus.gif\" style=\"vertical-align:middle;\" width=\"9\"/>393027 and <i>s</i><sub>100</sub> = 86613.</p><p>The terms of <i>s</i> are then arranged in a 2000<img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/>2000 table, using the first 2000 numbers to fill the first row (sequentially), the next 2000 numbers to fill the second row, and so on.</p><p>Finally, find the greatest sum of (any number of) adjacent entries in any direction (horizontal, vertical, diagonal or anti-diagonal).</p>",
    "folder": "searching-for-a-maximum-sum-su",
    "level": 1,
    "random": 0.2494761416164234,
    "tags": [],
    "title": "Searching for a maximum-sum subsequence."
}