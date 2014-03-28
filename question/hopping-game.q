{
    "details": "<p>Let <var>s<sub>k</sub></var> be the number of 1\u2019s when writing the numbers from 0 to <var>k</var> in binary.<br/>For example, writing 0 to 5 in binary, we have 0, 1, 10, 11, 100, 101. There are seven 1\u2019s, so <var>s</var><sub>5</sub> = 7.<br/>The sequence S = {<var>s<sub>k</sub></var> : <var>k</var> <img alt=\"\u2265\" border=\"0\" height=\"12\" src=\"images/symbol_ge.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 0} starts {0, 1, 2, 4, 5, 7, 9, 12, ...}.<br/></p><p>A game is played by two players. Before the game starts, a number <var>n</var> is chosen. A counter <var>c</var> starts at 0. At each turn, the player chooses a number from 1 to <var>n</var> (inclusive) and increases <var>c</var> by that number. The resulting value of <var>c</var> must be a member of S. If there are no more valid moves, the player loses.</p><p>For example:<br/>Let <var>n</var> = 5. <var>c</var> starts at 0.<br/>Player 1 chooses 4, so <var>c</var> becomes 0 + 4 = 4.<br/>Player 2 chooses 5, so <var>c</var> becomes 4 + 5 = 9.<br/>Player 1 chooses 3, so <var>c</var> becomes 9 + 3 = 12.<br/>etc.<br/>Note that <var>c</var> must always belong to S, and each player can increase <var>c</var> by at most <var>n</var>.</p><p>Let M(<var>n</var>) be the highest number the first player can choose at her first turn to force a win, and M(<var>n</var>) = 0 if there is no such move. For example, M(2) = 2, M(7) = 1 and M(20) = 4.</p><p>Given \u03a3(M(<var>n</var>))<sup>3</sup> = 8150 for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 20.</p><p>Find \u03a3(M(<var>n</var>))<sup>3</sup> for 1 <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> <var>n</var> <img alt=\"\u2264\" border=\"0\" height=\"12\" src=\"images/symbol_le.gif\" style=\"vertical-align:middle;\" width=\"10\"/> 1000.</p>",
    "folder": "hopping-game",
    "level": 1,
    "random": 0.5613173535846796,
    "tags": [],
    "title": "Hopping Game"
}