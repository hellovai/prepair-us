{
    "details": "<p>In the game, <i>Monopoly</i>, the standard board is set up in the following way:</p><div style=\"text-align:center;\"><table align=\"center\" border=\"0\" cellpadding=\"5\" cellspacing=\"1\" style=\"background-color:#333333;\"><tr><td style=\"background-color:#ffffff;\">GO</td><td style=\"background-color:#ffffff;\">A1</td><td style=\"background-color:#ffffff;\">CC1</td><td style=\"background-color:#ffffff;\">A2</td><td style=\"background-color:#ffffff;\">T1</td><td style=\"background-color:#ffffff;\">R1</td><td style=\"background-color:#ffffff;\">B1</td><td style=\"background-color:#ffffff;\">CH1</td><td style=\"background-color:#ffffff;\">B2</td><td style=\"background-color:#ffffff;\">B3</td><td style=\"background-color:#ffffff;\">JAIL</td></tr><tr><td style=\"background-color:#ffffff;\">H2</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">C1</td></tr><tr><td style=\"background-color:#ffffff;\">T2</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">U1</td></tr><tr><td style=\"background-color:#ffffff;\">H1</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">C2</td></tr><tr><td style=\"background-color:#ffffff;\">CH3</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">C3</td></tr><tr><td style=\"background-color:#ffffff;\">R4</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">R2</td></tr><tr><td style=\"background-color:#ffffff;\">G3</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">D1</td></tr><tr><td style=\"background-color:#ffffff;\">CC3</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">CC2</td></tr><tr><td style=\"background-color:#ffffff;\">G2</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">D2</td></tr><tr><td style=\"background-color:#ffffff;\">G1</td><td colspan=\"9\">\u00a0</td><td style=\"background-color:#ffffff;\">D3</td></tr><tr><td style=\"background-color:#ffffff;\">G2J</td><td style=\"background-color:#ffffff;\">F3</td><td style=\"background-color:#ffffff;\">U2</td><td style=\"background-color:#ffffff;\">F2</td><td style=\"background-color:#ffffff;\">F1</td><td style=\"background-color:#ffffff;\">R3</td><td style=\"background-color:#ffffff;\">E3</td><td style=\"background-color:#ffffff;\">E2</td><td style=\"background-color:#ffffff;\">CH2</td><td style=\"background-color:#ffffff;\">E1</td><td style=\"background-color:#ffffff;\">FP</td></tr></table></div><p>A player starts on the GO square and adds the scores on two 6-sided dice to determine the number of squares they advance in a clockwise direction. Without any further rules we would expect to visit each square with equal probability: 2.5%. However, landing on G2J (Go To Jail), CC (community chest), and CH (chance) changes this distribution.</p><p>In addition to G2J, and one card from each of CC and CH, that orders the player to go directly to jail, if a player rolls three consecutive doubles, they do not advance the result of their 3rd roll. Instead they proceed directly to jail.</p><p>At the beginning of the game, the CC and CH cards are shuffled. When a player lands on CC or CH they take a card from the top of the respective pile and, after following the instructions, it is returned to the bottom of the pile. There are sixteen cards in each pile, but for the purpose of this problem we are only concerned with cards that order a movement; any instruction not concerned with movement will be ignored and the player will remain on the CC/CH square.</p><ul><li>Community Chest (2/16 cards):<ol><li>Advance to GO</li><li>Go to JAIL</li></ol></li><li>Chance (10/16 cards):<ol><li>Advance to GO</li><li>Go to JAIL</li><li>Go to C1</li><li>Go to E3</li><li>Go to H2</li><li>Go to R1</li><li>Go to next R (railway company)</li><li>Go to next R</li><li>Go to next U (utility company)</li><li>Go back 3 squares.</li></ol></li></ul><p>The heart of this problem concerns the likelihood of visiting a particular square. That is, the probability of finishing at that square after a roll. For this reason it should be clear that, with the exception of G2J for which the probability of finishing on it is zero, the CH squares will have the lowest probabilities, as 5/8 request a movement to another square, and it is the final square that the player finishes at on each roll that we are interested in. We shall make no distinction between \"Just Visiting\" and being sent to JAIL, and we shall also ignore the rule about requiring a double to \"get out of jail\", assuming that they pay to get out on their next turn.</p><p>By starting at GO and numbering the squares sequentially from 00 to 39 we can concatenate these two-digit numbers to produce strings that correspond with sets of squares.</p><p>Statistically it can be shown that the three most popular squares, in order, are JAIL (6.24%) = Square 10, E3 (3.18%) = Square 24, and GO (3.09%) = Square 00. So these three most popular squares can be listed with the six-digit modal string: 102400.</p><p>If, instead of using two 6-sided dice, two 4-sided dice are used, find the six-digit modal string.</p>",
    "folder": "monopoly-odds",
    "level": 1,
    "random": 0.2990632365296626,
    "tags": [],
    "title": "Monopoly odds"
}