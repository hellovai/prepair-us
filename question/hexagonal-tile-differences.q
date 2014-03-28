{
    "details": "<p>A hexagonal tile with number 1 is surrounded by a ring of six hexagonal tiles, starting at \"12 o'clock\" and numbering the tiles 2 to 7 in an anti-clockwise direction.</p><p>New rings are added in the same fashion, with the next rings being numbered 8 to 19, 20 to 37, 38 to 61, and so on. The diagram below shows the first three rings.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"431\" src=\"project/images/p_128.gif\" width=\"400\"/></div><p>By finding the difference between tile <i>n</i> and each its six neighbours we shall define PD(<i>n</i>) to be the number of those differences which are prime.</p><p>For example, working clockwise around tile 8 the differences are 12, 29, 11, 6, 1, and 13. So PD(8) = 3.</p><p>In the same way, the differences around tile 17 are 1, 17, 16, 1, 11, and 10, hence PD(17) = 2.</p><p>It can be shown that the maximum value of PD(<i>n</i>) is 3.</p><p>If all of the tiles for which PD(<i>n</i>) = 3 are listed in ascending order to form a sequence, the 10th tile would be 271.</p><p>Find the 2000th tile in this sequence.</p>",
    "folder": "hexagonal-tile-differences",
    "level": 1,
    "random": 0.11905247507472316,
    "tags": [],
    "title": "Hexagonal tile differences"
}