{
    "details": "<p>You probably know the game <i>Fifteen Puzzle</i>. Here, instead of numbered tiles, we have seven red tiles and eight blue tiles.</p><p>A move is denoted by the uppercase initial of the direction (Left, Right, Up, Down) in which the tile is slid, e.g. starting from configuration (<b>S</b>), by the sequence <b>LULUR</b> we reach the configuration (<b>E</b>):</p><p><div style=\"text-align: center;\"><table align=\"center\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td width=\"25\">(<b>S</b>)</td><td width=\"100\"><img src=\"project/images/p_244_start.gif\"/></td><td width=\"25\">,\u00a0(<b>E</b>)</td><td width=\"100\"><img src=\"project/images/p_244_example.gif\"/></td></tr></table></div></p><p>For each path, its checksum is calculated by (pseudocode):<div style=\"margin-left: 100px;\">checksum = 0<br/>checksum = (checksum <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 243 + <var>m</var><sub>1</sub>) mod 100\u2009000\u2009007<br/>checksum = (checksum <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 243 + <var>m</var><sub>2</sub>) mod 100\u2009000\u2009007<br/>\u00a0\u00a0\u00a0\u2026<br/>checksum = (checksum <img alt=\"\u00d7\" border=\"0\" height=\"9\" src=\"images/symbol_times.gif\" style=\"vertical-align:middle;\" width=\"9\"/> 243 + <var>m</var><sub><var>n</var></sub>) mod 100\u2009000\u2009007<br/></div>where <var>m</var><sub><var>k</var></sub> is the ASCII value of the <var>k</var><sup><var>th</var></sup> letter in the move sequence and the ASCII values for the moves are:<div style=\"text-align:center;\"><table align=\"center\" border=\"1\" cellpadding=\"2\" cellspacing=\"0\"><tr><td width=\"30\"><b>L</b></td><td width=\"30\">76</td></tr><tr><td><b>R</b></td><td>82</td></tr><tr><td><b>U</b></td><td>85</td></tr><tr><td><b>D</b></td><td>68</td></tr></table></div></p><p>For the sequence <b>LULUR</b> given above, the checksum would be 19761398.</p><p>Now, starting from configuration (<b>S</b>),find all shortest ways to reach configuration (<b>T</b>).</p><p><div style=\"text-align: center;\"><table align=\"center\" border=\"0\" cellpadding=\"2\" cellspacing=\"0\"><tr><td width=\"25\">(<b>S</b>)</td><td width=\"100\"><img src=\"project/images/p_244_start.gif\"/></td><td width=\"25\">,\u00a0(<b>T</b>)</td><td width=\"100\"><img src=\"project/images/p_244_target.gif\"/></td></tr></table></div></p><p>What is the sum of all checksums for the paths having the minimal length?</p>",
    "folder": "sliders",
    "level": 1,
    "random": 0.9934448712353472,
    "tags": [],
    "title": "Sliders"
}