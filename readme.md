Binford SLF4J Test Cases
========================

These are the mochajs test cases for the Binford slf4j code, and their goal is to test how the library works running from your code.  Since your code isn't in the binford-slf4j-* projects, neither are the tests.

There are tradeoffs with this decision:

 1. Some tools that are good at running test cases with every checkin will not work with binford-slf4j
 2. We can test the behavior from requires, especially as it relates to mashing together multiple dependnecies.  We expect most disastrous breaks will occur here, and we want to have confidence with every release Binford SLF4J will work in your code.
 3. The production packages of Binford SLF4J do not include test cases.
 4. We make use of package.json's git feature that let's us depend on a repository, specifically a development branch, before publishing to npm.