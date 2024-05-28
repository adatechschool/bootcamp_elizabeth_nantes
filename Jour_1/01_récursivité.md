A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

1 : 1
2 : 1 + 1 ; 2
3 : 1 + 1 + 1 ; 1 + 2 ; 2 + 1 ; 3
4 : 1 + 1 + 1 + 1 ; 1 + 1 + 2 ; 1 + 2 + 1 ; 2 + 1 + 1 ; 2 + 2 ; 1 + 3 ; 3 + 1
5 : 1 + 1 + 1 + 1 + 1 ; 1 + 1 + 1 + 2 ; 1 + 2 + 1 + 1 ; 2 + 1 + 1 + 1 ; 2 + 2 + 1 ; 2 + 1 + 2 ; 1 + 2 + 2 ; 2 + 3 ; 3 + 2 ; 1 + 1 + 3 ; 1 + 3 + 1 ; 3 + 1 + 1; 1 + 1 + 2 + 1 ;

2 : 1 + 1
3 :
4 : 1 + [n-1] + [n-2] + [n-3]
5 : 1 + [n-1] + [n-2] + [n-2] + [n-3]
6 : 1 + [n-1] + [n-2] + [n-2] + [n-2] + [n-3] + [n-3] + [n-4]
7 : 1 + [n-1] +

1 x 2 = n-1
2 x 2 = n-2
...

1 x 3 = n-2
2x3 = n-4

2+3 = n-3

1 : 1
2 : 2
3 : 4
4 : 7
5 : 13
6 : 24
7 : 44
8 : 81 (36 avec 1 2)
