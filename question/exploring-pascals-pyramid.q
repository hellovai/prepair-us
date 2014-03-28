{
    "details": "<p>A triangular pyramid is constructed using spherical balls so that each ball rests on exactly three balls of the next lower level.</p><div style=\"text-align:center;\"><img alt=\"\" height=\"379\" src=\"project/images/p_154_pyramid.gif\" width=\"488\"/></div><p>Then, we calculate the number of paths leading from the apex to each position:</p><p>A path starts at the apex and progresses downwards to any of the three spheres directly below the current position.</p><p>Consequently, the number of paths to reach a certain position is the sum of the numbers immediately above it (depending on the position, there are up to three numbers above it).</p><p>The result is <i>Pascal's pyramid</i> and the numbers at each level <var>n</var> are the coefficients of the trinomial expansion (<var>x + y + z</var>)<sup><var>n</var></sup>.</p><p>How many coefficients in the expansion of (<var>x + y + z</var>)<sup>200000</sup> are multiples of 10<sup>12</sup>?</p>",
    "folder": "exploring-pascals-pyramid",
    "level": 1,
    "random": 0.039867789213037796,
    "tags": [],
    "title": "Exploring Pascal's pyramid."
}