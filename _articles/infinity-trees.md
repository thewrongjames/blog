---
layout: default
title: Infinity Trees
published_time: 2017.84425775063
---

{% include article-top.html %}
{% include use-mathjax.html %}

## How many numbers are there between zero and one?

Well, quite a few more than there are integers apparently. Uncountably many.
Which makes sense really, because it isn't particularly easy to count them.

> Well, we start with zero.  
> Then there is zero point zero, zero, zero, zero, zero, zero, zero, zero...  
> Damn.

But, I have thought up a system of accessing them which is confusing me,
because I think it might map every real number between zero and one to a unique
integer.

Or maybe it doesn't. Infinity is complicated, irrationals are weird, and I
didn't really do enough research.

I'm also not very good at marketing.

<img
    src="/static/infinity-trees/infinity-trees.svg"
    alt="Infinity trees diagram"
    title="Yes, I know there are duplicates. I'll get there eventually."
    class="should-invert-fixing-red"
/>

<!--~~~-->

## Different sizes of infinity

To begin, it is important to note one interesting thing about infinity: that
there are different sizes of it. I am going to reference certain sets of
numbers being the same size (integers, positive integers, negative integers,
odd numbers, even numbers, rational numbers, etc. (I may also refer to sets of
this particular size as countable)) and more importantly some perhaps not being
the same size. The core idea about these sets being, or not being, the same
size is quite simple though (at least to my understanding): if you can match
one set up one for one with the other, without ever running out of either set,
then they are the same size. If you can't match them one-to-one, then, the set
that didn't 'run out' is larger.  

For example, you can match all the positive integers up with a positive even
integer ($1$ goes with $2$, $2$ goes with $4$, $3$ goes with...), and you will
never run out of either. And, as you will see, the argument for there being
more numbers between zero and one that I will focus on centres around not
being able to do this one-to-one mapping. So, without further ado, let's get
onto that.  

## The Diagonal Argument

A typical argument given for there being more numbers between zero and one is a
specific application of part of Cantor's Diagonal Argument. It is no doubt
put much better by <a
href='https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument'
target='_blank_'>Wikipedia</a>, <a
href='https://www.youtube.com/watch?v=elvOZm0d4H0' target='_blank_'>
Numberphile</a>, and <a href='https://www.youtube.com/watch?v=s86-Z-CbaHA'
target='_blank_'>Vsauce</a>, but below I shall attempt to describe a simplified
(and slightly modified to my specific case) version of the argument as well.

It goes something like this:

> Let $s$ be the set of all real numbers between zero and one.  
> For each of the positive integers, pick a random member of $s$, and never
> repeat.  
> Write these out, in binary, with all the infinite digits of each real.  
> <br>
> For example:  
> $s_1$: $0.100111010...$  
> $s_2$: $0.011111110...$  
> $s_3$: $0.100111000...$  
> $s_4$: $0.110101000...$  
> $s_5$: $0.010100000...$  
> $s_6$: $0.000010011...$  
> $s_7$: $0.110001101...$  
> $s_8$: $0.100100011...$  
> $s_9$: $0.111100111...$  
> $...$  
> <br>
> Then, you take the first digit of the first number, the second digit of the
> second number, the third of the third, and so on, and make a new number by
> inverting these digits (turning $0$s to $1$s and $1$s to $0$s).  
> <br>
> i.e.  
> $s_1$: $0.\mathbf{1}00111010...$  
> $s_2$: $0.0\mathbf{1}1111110...$  
> $s_3$: $0.10\mathbf{0}111000...$  
> $s_4$: $0.110\mathbf{1}01000...$  
> $s_5$: $0.0101\mathbf{0}0000...$  
> $s_6$: $0.00001\mathbf{0}011...$  
> $s_7$: $0.110001\mathbf{1}01...$  
> $s_8$: $0.1001000\mathbf{1}1...$  
> $s_9$: $0.11110011\mathbf{1}...$  
> $...$  
> Bold digits: $110100111...$  
> $\therefore$ the new numbers is: $0.001011000...$  
> <br>
> However, this number is different from every number in the list above in at
> least one way.  
> <br>
> So, we have not indexed every item in $s$, despite using all the positive
> integers.  
> <br>
> And therefore, as there are the same number of integers as there are
> positive integers, there are more numbers between zero and one, than there
> are integers.

This argument certainly seems quite conclusive, but is it enough? Because I
think I have another way of looking at the real numbers that allows them to be
'counted', mapped one to one with the integers (or some other set of equivalent
size), and (for reasons you will see below) I don't think that looking at them
another way is necessarily an unreasonable way of going about doing this.

## Intervals

One of the first things to deal with is the fact that the argument above and my
argument below simply deal with the real numbers within an interval (in both
cases between zero and one). In the case of the former it certainly seems
fine, because proving there are more members in a subset of set $a$ than there
are members in all of set $b$, means that there are more members in set $a$
than there are in set $b$. But with my contrarian case, it is not so clear if
this would work. And even if I showed that I could map one to one all the
integers to all the real numbers between zero and one, how could that mean that
I could map an integer to every real number?

Well, supposing that we could give every real number in a given interval a
corresponding positive integer (which we could do if we could map them to
another set of the same size), we could then create a set for the reals between
every pair of adjacent integers (including the integer below, and not including
the one above to make them tessellate nicely), and we would have a range that
covered all the reals.

As it turns out this is enough to do the mapping, using the diagram below. We
can place the positive integer index for the reals in each set across the axis
at the top, and the integer that is the lower bound of the range across the
axis on the left (covering the negatives by alternating, e.g. $[0, 1, -1, 2,
-2, 3, ...]$).   

<img
    src="/static/infinity-trees/grid-counting.svg"
    alt="Grid counting diagram"
    title="I got this idea from the Numberphile video I linked above. It was used for the positive rationals there."
    class="should-invert-fixing-red"
/>

Now, after that, we are left with an integer grid, extending off both right and
down forever, with as many coordinates on each axis as there are integers. We
clearly can't count it by counting rows or columns, as we could never finish
them (there are as many in each as we have integers to count with). But we can
still count it. We can count the diagonals as given by the numbers in the
squares. Each diagonal is of finite length, so, we will always finish all of
them, and we will never run out of integers.

I should probably say that I got this idea from the <a
href='https://www.youtube.com/watch?v=elvOZm0d4H0' target='_blank_'>
Numberphile video</a> that I referenced at the top of the post, though it was
used for the positive rationals there.

There is an additional benefit to considering this. It reveals that the way we
arrange the numbers influences our ability to count them. Simply 'looking' at a
set a certain way can make it clear that it is countable, where looking at
it in other ways would have it appear that it wasn't. This is fundamental to my
notion of the tree, as all it is is a different way of arranging the numbers,
and I think that it does allow us to count them.

## Infinity Trees

And so, we finally come to the namesake of this post...

### Reals Representation

I have chosen to deal with the reals in much the same way as I did in my
description of the diagonal argument, in binary, as infinite stings of
digits. I was initially worried that this may not be an adequate description,
as it may not, for instance, include irrational numbers (are infinite digits of
$\pi$ actually equivalent to $\pi$?), and issues relating to this will come up
[later](#the-issue-with-irrationals). But as the definition I am using is
basically the same as that used for the diagonal argument, even if my
definition didn't fully encapsulate the reals it seems to fully encapsulate
some set that appears to contain more members than the set of integers, so the
question is still interesting.  

### The Structure

<img
    src="/static/infinity-trees/infinity-trees.svg"
    alt="Infinity trees diagram"
    title="I will still get to the duplicates. Eventually."
    class="should-invert-fixing-red"
/>

The arrangement that I believe allows the reals to be counted is the tree graph
depicted above. Each node is a number (written in binary), and each number is
connected to two other numbers below it, and, one above it. The two numbers
below it are both itself and a number a specific power of $2$ (depending on
how far down the tree it is) greater than itself.

All of the numbers represent unending decimals, but, some of the trailing zeros
(and only zeros) have been removed for simplicity. The number of significant
figures displayed is to represent the relevant power of $2$ to be changed at
that particular depth down the tree.

Also, you may have noticed the duplicates. Each number appearing infinitely
many times in fact, with every left branch of the tree being the number above
it. While this may be a strange way of counting something, it was necessary to
continue to subdivide the numbers.

Most importantly though: the diagram shows that each row can quite easily be
counted. This tree halves reals between zero and one over and over again, and
it goes on forever, but as each row is clearly finite, you will never run out
of integers to count with. And as this tree never ends, it seems to me that
every combination of digits expressed in the
[diagonal argument](#the-diagonal-argument) should appear. This hand-waving
argument seems to make sense to me, it seems to me that we can in fact list, or
count, all of the real numbers, mapping them to integers just by counting along
the rows.

However, there is at least one rather glaring issue.

### The issue with irrationals

While I will go into the details of actually making a function out of the tree
later, one thing at least is easy to see when looking at the tree itself.  

<img
    src="/static/infinity-trees/infinity-trees.svg"
    alt="Infinity trees diagram"
    title="If you are still waiting for the duplicates thing. You missed it."
    class="should-invert-fixing-red"
/>

Where are the irrationals?

There is no one point on the tree that I can point to and say "there's $\pi$".
And I can't work out if that means that this doesn't contain them, because the
tree won't ever stop, and each row is finite, so I won't ever run out of
integers to count with either.

Additionally, if I was to write $\pi$ out in binary, and round it to any
precision, I would be able to find that value in the tree, and give it a
corresponding number. And then I could go to the next digit, and the next
digit, and the next, etc. So, I think the question becomes: is infinitely
approaching $\pi$ equivalent to $\pi$? And would that even be enough if it
was?

I am not sure what the answers to these questions are. If the answers are no,
then this is just an inefficient way to show that we can match the rationals
one-to-one with the integers. But I (perhaps rather dubiously) _feel_ like this
_might_ not be the case. You can create irrationals with infinite series that
don't have more terms than there are integers, and the diagonal argument seems
to imply that the numbers it deals with can have their digits mapped one-to-one
with the positive integers.

These things make it feel like while I can't tell you where on the tree an
irrational is, that the tree extends 'as infinitely far into the reals as the
irrationals do'. But I don't even know what that sentence really means.

### Attempting to Flatten the Tree

But, despite that potentially fatal wound, I would like to try to formalise
this rather unwieldy tree into a function, that given an integer spits out a
real (though, as mentioned above, no particular integer will be able to coax it
into spitting out an irrational).  

So, what do we want? We want some function, let's call it $s(n)$, that takes an
integer and gives back a real.

So, if we just let $n$ correspond to counting across one row (starting with
zero), and then across the next row down, and then across the next row down,
and so on, we can start to write out what this function must look like, reading
off the tree.

| $n$    | $0$ | $1$ | $2$   | $3$    | $4$    | $5$    | $6$    | $7$     | $...$ |
|:------:| ---:| ---:| -----:| ------:| ------:| ------:| ------:| -------:|:-----:|
| $s(n)$ | $0$ | $0$ | $0.1$ | $0.00$ | $0.01$ | $0.10$ | $0.11$ | $0.000$ | $...$ |

So, what is actually happening here? Well, we can break it down into a few
different parts and name them (after all, names give power). I am going to
leave the first $0$ as a special case, and just look at the rest of the tree.

For any particular node on the tree, we know that it is either equal to the
node above it, or a particular power of $2$ greater than the node above it.
But, this $n$ based numbering system has no notion of the tree, so let's just
say that each node refers to some other node, a distance $d(n)$ behind it.

We can also see from the table and the tree that (other than for $n=0$) it is
when $n$ is even that the (negative) power of $2$ is added, so let's call a
function that returns $1$ is $n$ is even and $0$ is $n$ is odd $e(n)$. Also,
let's call the negative (so a positive number) of the power of the power of $2$
added $p(n)$.  

<div class='scroll-box'>
$$
\therefore s(n) =
\begin{cases}
0  & \text{if $n=0$} \\\
s(n - d(n)) + e(n)2^{-p(n)} & \text{if $n\neq0$}
\end{cases}
$$
</div>

As I said, names give power.

So, now let's look at the table and the tree again to try to find these values,
to see how far it goes back each time, to see what the power of $2$ added is,
and to see when it is even.

| $n$    | $1$ | $2$   | $3$    | $4$    | $5$    | $6$    | $7$     | $...$ |
|:------:| ---:| -----:| ------:| ------:| ------:| ------:| -------:|:-----:|
| $s(n)$ | $0$ | $0.1$ | $0.00$ | $0.01$ | $0.10$ | $0.11$ | $0.000$ | $...$ |
| $d(n)$ | $1$ |   $2$ |    $2$ |    $3$ |    $3$ |    $4$ |     $4$ | $...$ |
| $e(n)$ | $0$ |   $1$ |    $0$ |    $1$ |    $0$ |    $1$ |     $0$ | $...$ |
| $p(n)$ | $1$ |   $1$ |    $2$ |    $2$ |    $2$ |    $2$ |     $3$ | $...$ |

So now we can start building this up, thinking about what each of these things
actually are. The easiest to define is possibly $e(n)$. $1$ if $n$ is even, $0$
if $n$ is odd. But how can we actually do this? What do we have mathematically
that depends on numbers being even or odd? Well, the power you raise $-1$ to
works, it is $-1$ if $n$ is odd, and $+1$ if $n$ is even. Add $1$ to that, and
divide that all by $2$, and we have what we want.

$$ \therefore e(n) = \frac{(-1)^n + 1}{2} $$

Now, before we get onto the next two, we are going to need <a
href='https://en.wikipedia.org/wiki/Floor_and_ceiling_functions'
target='_blank_'>floor and ceiling functions</a>. All you need to know is that
$floor(x) = \lfloor{x}\rfloor$ and that is the largest integer that is smaller
than or equal to $x$, and $ceiling(x) = \lceil{x}\rceil$ and that is the
smallest integer that is greater than or equal to $x$.

The next most straight forward component of $s(n)$ is probably $d(n)$. Looking
at the table (and the tree if you want), we can see that each node has the
distance it needs to refer back increased by $1$ for each position across a row
we move (as it gets further away from what it is referring to), but also
reduced by $1$ if it is a left-hand node (as the position of what it is
referring to gets closer). As such we know that $d(n)$ start at $1$, and
increases every second $n$, with the first increase at $n=2$. With a little
playing around we can see that...

$$ \therefore d(n) = \left\lfloor{\frac{n}{2}}\right\rfloor + 1 $$

And now we only have one component left to find, $p(n)$.

If we look at the table, and particularly if we were to extend it further we
can / would see that the values of $p(n)$ are grouped in groups of the same value
which are each of a length double as long as the last. This is also intuitive
from the tree: the power of $2$ that may be added to a node is the same across
each row, and each row is double as long as the last one. We can also look at
the places at which $p(n)$ changes, being $1$, $3$, and $7$, as far as the
table extends. And one thing we can notice about these, is that they are all
$1$ less than a power of $2$. This means that if I take the ceiling of the
power of $2$ needed to get $n+2$ ($n+2$ because otherwise the ceiling would
leave the beginnings of each group in the previous group), the changes will
happen in the same place as the changes to $p(n)$.

So, if we let $f(n) = \left \lceil {\log_2{n + 2}} \right \rceil$ then:

| $n$    | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ | $9$ | $10$ | $...$ |
|:------:| ---:| ---:| ---:| ---:| ---:| ---:| ---:| ---:| ---:| ----:|:-----:|
| $f(n)$ | $2$ | $2$ | $3$ | $3$ | $3$ | $3$ | $4$ | $4$ | $4$ |  $4$ | $...$ |

And conveniently, we can now see that that is just exactly one more than what
we want for $p(n)$.

$$ \therefore p(n) = \left \lceil {\log_2{n + 2}} \right \rceil - 1 $$

So, now we have...

<div class='scroll-box'>
$$
\therefore s(n) =
\begin{cases}
0  & \text{if $n=0$} \\\
s(n - d(n)) + e(n)2^{-p(n)} & \text{if $n\neq0$}
\end{cases}
$$
</div>
$$ d(n) = \left \lfloor {\frac{n}{2}} \right \rfloor + 1 $$
$$ e(n) = \frac{(-1)^n + 1}{2} $$
$$ p(n) = \left \lceil {\log_2{n + 2}} \right \rceil - 1 $$
So...
<div class='scroll-box'>
$$
\therefore s(n) =
\begin{cases}
0  & \text{if $n=0$} \\\
s(n - (\left \lfloor {\frac{n}{2}} \right \rfloor + 1)) + \frac{(-1)^n + 1}{2}
\times 2^{\left \lceil {\log_2{n + 2}} \right \rceil - 1)} & \text{if $n\neq0$}
\end{cases}
$$
</div>

And there it is. That is the function that I _feel_ may be able to map every
integer to every real. _Maybe_. A functional representation of the infinity
tree. Unfortunately though it is only one way. It only goes from non-negative
integers to reals, not the other way around. This argument would be much more
conclusive if it could go the other way. As such, this whole thing has really
just left me confused more than anything, and I feel like I may have come out
of it understanding cardinality even less than I did coming in. Which is saying
something.

## Non-conclusive Conclusion

There is certainly more to be said on this, even if it is to only point out
some fatally flawed assumption that brings the whole thing crushing down, but
this is all I have done at the moment and is about as far as I can see how to
take it.

### I Expect to be Wrong

Despite the fact that this seems to make sense to me, this is also something
that it looks like a lot of smart people have spent quite a while thinking
about, and all seem to agree on. Even _I_ can see at least one potentially
serious problem with it. So, I certainly expect to be wrong about this.

However, I do look forward to finding out where, and why. And so, if you want
to let me know, there are contact details just below.
