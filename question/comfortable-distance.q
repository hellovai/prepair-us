{
    "details": "<p>There are <var>N</var> seats in a row. <var>N</var> people come after each other to fill the seats according to the following rules:<ol type=\"1\"><li>If there is any seat whose adjacent seat(s) are not occupied take such a seat.</li><li>If there is no such seat and there is any seat for which only one adjacent seat is occupied take such a seat.</li><li>Otherwise take one of the remaining available seats. </li></ol>Let T(<var>N</var>) be the number of possibilities that <var>N</var> seats are occupied by <var>N</var> people with the given rules.<br/> The following figure shows T(4)=8.</p><div align=\"center\"><img src=\"project/images/p_364_comf_dist.gif\"/></div><p>We can verify that T(10) = 61632 and T(1 000) mod 100 000 007 = 47255094.</p><p>Find T(1 000 000) mod 100 000 007.</p>",
    "folder": "comfortable-distance",
    "level": 1,
    "random": 0.5722329681174851,
    "tags": [],
    "title": "Comfortable distance"
}